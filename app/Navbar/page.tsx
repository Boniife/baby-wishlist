'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiArrowUp } from 'react-icons/fi'; 

const Navbar = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className='navbar'>
      <div className='navbar_wrap'>
        <div className='wrapper'>
          <div className='wrapper_img-wrap'>
            <Image 
              width={100}
              height={100}
              src={'/images/baby2.png'}
              alt=''
            />
          </div>
          
          <div className='wrapper_text-wrap cursor-pointer'>
            <p className='list1' onClick={() => scrollToSection('dresses-section')}>Dresses</p>
            <p className='list2' onClick={() => scrollToSection('footwears-section')}>Footwears</p>
            <p className='list1' onClick={() => scrollToSection('accessories-section')}>Accessories</p>
            <p className='list2' onClick={() => scrollToSection('toys-section')}>Toys</p>
          </div>
        </div>
      </div>
      {showScroll && (
        <div className="fixed bottom-4 right-4 z-50">
          <button onClick={scrollTop} className="bg-pink-400 p-2 rounded-full text-white hover:bg-gray-600">
            <FiArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
