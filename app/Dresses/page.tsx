import React from 'react';
import Item from '../ItemCard/Item';
import { DRESS_ITEMS } from './constant';

const Dresses = ({ updateTotalQuantity }: any) => {
  return (
    <div id="dresses-section" className='dress'>
      <div className='dress_head'> 
        <h1> Dresses </h1>
      </div>

      <div className='dress_body'>
        {DRESS_ITEMS.map((item)=> (
          <Item 
            key={item.id}
            img={item.img}
            name={item.name}
            estimate={item.estimate}
            updateTotalQuantity={updateTotalQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Dresses;
