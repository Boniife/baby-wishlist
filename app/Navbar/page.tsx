'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiArrowUp, FiShoppingCart } from 'react-icons/fi';
import "../styles/main.scss";

const Navbar = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [showCart, setShowCart] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const handleResize = () => {
    if (window.innerWidth <= 629) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar_wrap'>
          {isMobile && (
      <div className="mobile-header text-white">
        <div className={`toggle-icon ${showSidebar ? 'fixed' : ''}`} onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
        <Image 
          width={100}
          height={100}
          src={'/images/baby2.png'}
          alt=''
          className="logo-image"
        />
        <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
          <p className='list1' onClick={() => scrollToSection('dresses-section')}>Dresses</p>
          <p className='list2' onClick={() => scrollToSection('footwears-section')}>Footwears</p>
          <p className='list1' onClick={() => scrollToSection('accessories-section')}>Accessories</p>
          {/* <p className='list2' onClick={() => scrollToSection('toys-section')}>Toys</p> */}
        </div>
      </div>
    )}

        {!isMobile && (
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
              {/* <p className='list2' onClick={() => scrollToSection('toys-section')}>Toys</p> */}
            </div>
          </div>
        )}
      </div>
      {/* <div className="fixed bottom-4 right-4 z-50">
        <Link href="/cart"> 
            <FiShoppingCart className="bg-pink-400 p-1 rounded-full text-4xl hover:bg-gray-600 cursor-pointer" />
        </Link>
      </div> */}
      {showScroll && (
        <div className="fixed bottom-16 right-4 z-50">
          <button onClick={scrollTop} className="bg-pink-400 p-2 rounded-full text-white hover:bg-gray-600 cursor-pointer">
            <FiArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
