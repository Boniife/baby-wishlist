import React from 'react';
import { FOOTWEAR_ITEMS } from './constants';
import Item from '../ItemCard/Item';

const Footwears = () => {
  return (
    <div id='footwears-section' className='footwear'>
      <div className='footwear_head'> 
        <h1> Footwears </h1>
      </div>

      <div className='footwear_body'>
        {FOOTWEAR_ITEMS.map((item)=> (
          <Item 
            key={item.id}
            img={item.img}
            name={item.name}
            estimate={item.estimate}
          />
        ))}
      </div>
    </div>
  );
};

export default Footwears;
