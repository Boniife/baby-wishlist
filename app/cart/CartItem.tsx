import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../slices/cartSlice';

interface CartItemProps {
  item: {
    img: string;
    name: string;
    estimate: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addItemToCart({ quantity: 1, item }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(addItemToCart({ quantity: -1, item }));
    }
  };

  const handleDelete = () => {
    dispatch(removeItemFromCart(item.name));
  };

  return (
    <div className='flex bg-white p-4 w-fit rounded-lg shadow-2xl'>
      <div className='h-[62px]'>
        <Image 
          src={item.img}
          alt={item.name}
          width={82}
          height={82}
          className='rounded-lg max-h-[62px]'
        />
      </div>
      <div className='ml-7 text-pink-400 font-extrabold'>
        <div className='flex'>
            <p className=''>{item.name}</p>
            <p className='ml-7'>₦{item.estimate}</p>
        </div>
        <div className='flex mt-3'>
            <p className='bg-pink-300 px-[0.45rem] rounded-sm text-white text-xl cursor-pointer' onClick={handleDecrement}>-</p>
            <p className='text-xl text-zinc-400 mx-5'>{item.quantity} qty</p>
            <p className='bg-pink-300 px-[0.45rem] rounded-sm text-white text-xl cursor-pointer' onClick={handleIncrement}>+</p>
        </div>
      </div>
      <div className='text-xl text-zinc-500 ml-7 font-extrabold cursor-pointer' onClick={handleDelete}>
        <p className='flex'> <FaTrash /> <span className='ml-1'>delete</span> </p>
      </div>
    </div>
  );
}

export default CartItem;
