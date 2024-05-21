import React from 'react'
import Item from '../ItemCard/Item'
import { ACCESSORIES_ITEMS } from './constant'

const Accessories = ({ updateTotalQuantity }: { updateTotalQuantity: (quantity: number, item: { img: string; name: string; estimate: number; quantity: number }) => void }) => {
  return (
    <div id='accessories-section' className='dress'>
        <div className='dress_head'> 
        <h1> Accessories </h1>
      </div>

      <div className='dress_body'>
        {ACCESSORIES_ITEMS.map((item)=> (
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
  )
}

export default Accessories