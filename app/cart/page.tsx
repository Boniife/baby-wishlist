'use client'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import { RootState } from '../store/store';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    date: '',
    paymentMethod: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      date: formData.date,
      paymentMethod: formData.paymentMethod,
      from_email: formData.email 
    };

    emailjs.send(
      'service_62na0xh', // replace with your EmailJS service ID
      'template_09adsv9', // replace with your EmailJS template ID
      templateParams,
      'Yw1XwkshfPyC8dxrV' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.error('FAILED...', err);
    });

    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      date: '',
      paymentMethod: ''
    });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.estimate * item.quantity, 0);
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="text-center mt-10 min-h-[80vh]">No items in the cart</div>;
  }

  return (
    <div className="cart bg-gray-200">
      <div className="layout-head mt-10">
        items in Cart({cartItems.length})
      </div>
      <div className=''>
        <h3 className='mt-5 text-black font-bold'>
          <span className=' font-extrabold'>NOTE:- </span>
          You Can Click on the Buy in store Button On Each item if you which to purchase any of the item from store, and send it to our address provided below
        </h3>
      </div>

      <div className='layout-ot'>
      <div className="cart_body">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <h1 className='mt-3 font-bold mb-5'>Total: ₦{calculateTotalPrice()}</h1>
      </div>

      <div className='layout-bg text-center'>
        <div className='layout-head mt-5 font-extrabold'>
          <h1 className=''>Payment Method</h1>
        </div>

        <h1 className='mt-5 text-gray-500 font-extrabold'>
          YOU CAN MAKE A TRANSFER OF <span className='text-black'>{calculateTotalPrice()} </span>to <span className='text-black'>First Bank Of Nigeria: 3121343852 </span>
        </h1>
        <h1 className='mt-5 text-gray-500 font-extrabold'>
          You could Get the items from your local store and send it to our address below
        </h1>
        <h1 className='mt-5 text-gray-500 font-extrabold'>
          You Can Click on the Buy in store Button On Each item if you which to purchase any of the item from store, and send it to our address provided below
        </h1>

        <div className='layout-head mt-5 font-extrabold'>
          <h1 className=''>Contact Details</h1>
        </div>
        <h1 className='mt-5 text-gray-500 font-extrabold'>
          Bank Account: First Bank Of Nigeria <br />James Obioma Anyanwu <br /> 3121343852
        </h1>
        <h1 className='mt-5 text-gray-500 font-extrabold'>
          House Address: No 15 Alhaji Alade Apatira street, <br />off Golden Gate Avenue, <br />isolo Lagos State
        </h1>
        <h1 className='mt-5 text-gray-500 font-extrabold'>
          Mobile Number: 07030703156
        </h1>

        <div className='my-7'>
          <p className='layout-head'>
            If you got us a gift can you please fill the form below so we can Thank you
          </p>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-[1%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-[1%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-[1%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date Purchased *</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 block w-full px-[30%] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Method *</label>
              <div className="mt-2 space-y-2">
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bankTransfer"
                    id="bankTransfer"
                    checked={formData.paymentMethod === 'bankTransfer'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="bankTransfer" className="text-sm text-gray-700">Bank Transfer</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="boughtOnJumia"
                    id="boughtOnJumia"
                    checked={formData.paymentMethod === 'boughtOnJumia'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="boughtOnJumia" className="text-sm text-gray-700">Bought on Jumia</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="sentToAddress"
                    id="sentToAddress"
                    checked={formData.paymentMethod === 'sentToAddress'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="sentToAddress" className="text-sm text-gray-700">Sent to Address</label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
    </div>
  );
}

export default Cart;
