import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <Image 
        src="/images/twin4.jpg"
        alt="baby"
        width={1695}
        height={595}
        className=''
      />
      <div className='hero_txt'>
        <h1> <span className='gradient_text'>My Baby</span> <span className='gradient'>Wishlist</span></h1>
        <p className=''>
          Join Us catch a glimpse of this blessing by sharing in our joy and happiness. Every small act of kindness create a ripple of love.
        </p>
      </div>
    </div>
  )
}

export default Hero