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
    <div className="layout-bg cart">
      <div className="layout-head mt-10">
        items in Cart({cartItems.length})
      </div>
      <div className="cart_body">
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item}  />
        ))}
      </div>
      <button>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
