import React, { useState, useEffect } from 'react';
import { HiOutlineChevronUp } from 'react-icons/hi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-6 md:bottom-8 right-6 md:right-8 p-3 rounded-lg bg-white dark:bg-neutral-800
                 text-primary-600 dark:text-primary-400 shadow-soft hover:shadow-medium
                 border border-neutral-200 dark:border-neutral-700
                 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none 
                 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
                 transition-all duration-300 ease-smooth z-50
                 ${isVisible 
                     ? 'opacity-100 translate-y-0' 
                     : 'opacity-0 translate-y-12 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <HiOutlineChevronUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;