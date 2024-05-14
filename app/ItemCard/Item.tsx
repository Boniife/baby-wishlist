import Image from 'next/image'
import React from 'react'
type ItemProps = {

}
const Item = ({img,name,quantity}: any) => {
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
          <h2 style={{color: '#FF47C1'}}>{name} </h2>
          <h4 style={{color: '#FF47C1'}}>Quantity Needed: {quantity}</h4>
        </div>
        <button className=''>Pick</button>
      </div>
    </div>
  )
}

export default Item