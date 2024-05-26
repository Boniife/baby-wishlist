'use client';
import React from 'react';
import Item from '../ItemCard/Item';
import { TOYS_ITEMS } from './constant';

const Toys = () => {
  return (
    <div id='toys-section'>
      <div className='footwear'>
        <div className='footwear_head'> 
          <h1> Toys </h1>
        </div>

        <div className='footwear_body'>
          {TOYS_ITEMS.map((item)=> (
            <Item 
              key={item.id}
              img={item.img}
              name={item.name}
              estimate={item.estimate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toys;
