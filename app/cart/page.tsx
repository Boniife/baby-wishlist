'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.estimate * item.quantity, 0);
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="text-center mt-10">No items in the cart</div>;
  }

  return (
    <div className="layout-bg cart">
      <div className="layout-head mt-10">
        items in Cart({cartItems.length})
      </div>
      <div className="cart_body">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
      <h1 className='mt-3 font-bold'>Total: ₦{calculateTotalPrice()}</h1>
      <h1 className='mt-5 text-gray-500 font-extrabold'>
        YOU CAN MAKE A TRANSFER OF <span className='text-black'>{calculateTotalPrice()} </span>to <span className='text-black'>opay 8105080543 </span>or you can pay with your card by clicking on the checkout button
      </h1>
      <button>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
