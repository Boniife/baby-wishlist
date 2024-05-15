'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface ItemProps {
  img: string;
  name: string;
}

const Item: React.FC<ItemProps> = ({ img, name }: ItemProps) => {
  const [quantityNeeded, setQuantityNeeded] = useState<number>(0);

  const handlePick = () => {
    setQuantityNeeded(quantityNeeded + 1);
  };

  const handleDecrease = () => {
    if (quantityNeeded > 0) {
      setQuantityNeeded(quantityNeeded - 1);
    }
  };

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
            <span className='' onClick={handleDecrease}>-</span>
          </h4>
        </div>
        <button className='' onClick={handlePick}>Pick</button>
      </div>
    </div>
  );
};

export default Item;

