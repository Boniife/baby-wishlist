'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface ItemProps {
  img: string;
  name: string;
  estimate: number;
  updateTotalQuantity: (quantity: number) => void;
}

const Item: React.FC<ItemProps> = ({ img, name, estimate, updateTotalQuantity }: ItemProps) => {
  const [quantityNeeded, setQuantityNeeded] = useState<number>(0);

  const handlePick = () => {
    const newQuantity = quantityNeeded + 1;
    const quantityToAdd = newQuantity - quantityNeeded; // Calculate the difference
    setQuantityNeeded(newQuantity);
    updateTotalQuantity(quantityToAdd); // Update the total count with the difference
  };
  

  // const handleDecrease = () => {
  //   if (quantityNeeded > 0) {
  //     const newQuantity = quantityNeeded - 1;
  //     setQuantityNeeded(newQuantity);
  //     updateTotalQuantity(newQuantity);
  //   }
  // };

  return (
    <div className='item'>
      <div className='item_wrap'>
        <div className='item-img'>
          <Image 
            src={img}
            alt='img'
            width={362}
            height={200}
          />
        </div>
        <div className='item-txt'>
          <h2 style={{ color: '#FF47C1' }}>{name}</h2>
          <h4 style={{ color: '#FF47C1' }}>Quantity Needed: {quantityNeeded} 
            {/* <span className='' onClick={handleDecrease}>-</span> */}
          </h4>
          <h4 style={{ color: '#FF47C1' }}>Estimated Price: ₦{estimate} </h4>
        </div>
        <button className='' onClick={handlePick}>Pick</button>
      </div>
    </div>
  );
};

export default Item;


