import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Cyinov Consulting
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Your trusted partner in business transformation and growth
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                   hover:bg-blue-700 transition-colors duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;