import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Image from 'next/image';
import { addItemToCart, updateItemQuantity } from '../slices/cartSlice';

interface ItemProps {
  img: string;
  name: string;
  estimate: number;
}

const Item: React.FC<ItemProps> = ({ img, name, estimate }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find(item => item.name === name)
  );

  const quantityNeeded = cartItem ? cartItem.quantity : 0;
  const addedToCart = cartItem ? cartItem.addedToCart : false;

  const handlePick = () => {
    if (!addedToCart) {
      const newQuantity = quantityNeeded + 1;
      dispatch(updateItemQuantity({ name, quantity: newQuantity }));
      dispatch(addItemToCart({ quantity: 1, item: { img, name, estimate, quantity: newQuantity, addedToCart: true } }));
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
          {addedToCart ? (
            <p style={{ color: 'green' }}>Item added to cart</p>
          ) : (
            <>
              <h4 style={{ color: '#FF47C1' }}>Quantity Needed: {quantityNeeded}</h4>
              <h4 style={{ color: '#FF47C1' }}>Estimated Price: ₦{estimate} </h4>
            </>
          )}
        </div>
        {!addedToCart && <button className='' onClick={handlePick}>ADD</button>}
      </div>
    </div>
  );
};

export default Item;
