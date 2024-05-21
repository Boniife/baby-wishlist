'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Hero from './Hero/page';
import Dresses from './Dresses/page';
import Footwears from './Footwears/page';
import Accessories from './Accessories/page';
import Toys from './Toys/page';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { addItemToCart } from './slices/cartSlice';

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalQuantityPicked = cartItems.reduce((total, item) => total + item.quantity, 0);

  const updateTotalQuantity = (quantity: number, item: { img: string; name: string; estimate: number; quantity: number }) => {
    dispatch(addItemToCart({ quantity, item }));
  };

  return (
    <main className="">
      <div className="">
        <Hero />
        <Dresses updateTotalQuantity={updateTotalQuantity} />
        <Footwears updateTotalQuantity={updateTotalQuantity} />
        <Accessories updateTotalQuantity={updateTotalQuantity} />
        <Toys updateTotalQuantity={updateTotalQuantity} />
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/cart">
          {totalQuantityPicked > 0 && <span className="bg-white text-pink-600 rounded-full px-2 ml-1">{totalQuantityPicked}</span>}
          <FiShoppingCart className="bg-pink-400 p-1 rounded-full text-4xl hover:bg-gray-600 cursor-pointer" />
        </Link>
      </div>
    </main>
  );
};

export default ShoppingPage;
