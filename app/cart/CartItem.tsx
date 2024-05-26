import Image from 'next/image';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../slices/cartSlice';

interface CartItemProps {
  item: {
    img: string;
    name: string;
    estimate: number;
    quantity: number;
    addedToCart: boolean;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [currentEstimate, setCurrentEstimate] = useState<number>(item.estimate);
  const incrementAmount = item.estimate; 

  const handleIncrement = () => {
    const newEstimate = currentEstimate + incrementAmount;
    setCurrentEstimate(newEstimate);
    dispatch(addItemToCart({ quantity: 1, item: { ...item, estimate: newEstimate } }));
  };

  const handleDecrement = () => {
    if (currentEstimate > item.estimate) {
      const newEstimate = currentEstimate - incrementAmount;
      setCurrentEstimate(newEstimate);
      dispatch(addItemToCart({ quantity: -1, item: { ...item, estimate: newEstimate } }));
    }
  };

  const handleDelete = () => {
    dispatch(removeItemFromCart(item.name));
  };

  return (
    <div className='cart-item'>
      <div className='cart-item_imgwrap'>
        <Image 
          src={item.img}
          alt={item.name}
          width={82}
          height={82}
          className=''
        />
      </div>
      <div className='cart-item_props'>
        <div className='title'>
            <p className=''>{item.name}</p>
            <p className='ml-7'>₦{currentEstimate}</p>
        </div>
        <div className='control'>
            <p className='control_button' onClick={handleDecrement}>-</p>
            <p className='qty'>{item.quantity} qty</p>
            <p className='control_button' onClick={handleIncrement}>+</p>
        </div>
      </div>
      <div className='cart-item_del' onClick={handleDelete}>
        <p className='flex'> <FaTrash /> <span className='ml-1 hidden md:flex'>delete</span> </p>
      </div>
    </div>
  );
}

export default CartItem;
