'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  if (!cartItems || cartItems.length === 0) {
    return <div className="text-center mt-10">No items in the cart</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="layout-head mt-10">
        items in Cart({cartItems.length})
      </div>
      <div className="mt-10 px-6 flex flex-col items-center space-y-5">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item}  />
        ))}
      </div>
      <button className="bg-pink-300 shadow-2xl py-4 px-8 mt-8 w-fit text-xl font-extrabold text-white rounded-lg">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
