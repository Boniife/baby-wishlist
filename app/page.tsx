'use client'
import React, { useState } from 'react';
import Hero from './Hero/page';
import Dresses from './Dresses/page';
import Footwears from './Footwears/page';
import Accessories from './Accessories/page';
import Toys from './Toys/page';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

const ShoppingPage = () => {
  const [totalQuantityPicked, setTotalQuantityPicked] = useState<number>(0);

  const updateTotalQuantity = (quantity: number) => {
    setTotalQuantityPicked(totalQuantityPicked + quantity);
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

