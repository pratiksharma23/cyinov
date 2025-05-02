import React, { useState, useEffect } from 'react';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import { FaQuoteLeft } from 'react-icons/fa';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "Director, Infotech Solutions Pvt. Ltd.",
      image: testimonial1,
      text: "Cyinov Consulting transformed our business operations. Their market research insights were invaluable in helping us expand into new markets."
    },
    {
      id: 2,
      name: "Vikram Patel",
      position: "CFO, Ashoka Enterprises",
      image: testimonial2,
      text: "The tax advisory services provided by Cyinov helped us optimize our financial structure and achieve significant savings."
    },
    {
      id: 3,
      name: "Sunil Mehta",
      position: "Head of HR, Orbit Technologies",
      image: testimonial3,
      text: "Their human capital management solutions helped us build a stronger, more efficient team. Highly recommended!"
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };
  
  // Handle transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Hear from businesses that have transformed their operations with our services
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Testimonial */}
            <div 
              className={`flex flex-col items-center transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="mb-8 relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full border-4 border-white dark:border-neutral-800 shadow-medium">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-2 rounded-full shadow-soft">
                  <FaQuoteLeft className="w-4 h-4" />
                </div>
              </div>
              
              <div className="text-center max-w-3xl">
                <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-6 font-light italic">
                  "{testimonials[currentSlide].text}"
                </p>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {testimonials[currentSlide].name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm">
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-10">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary-600 dark:bg-primary-400 w-6' 
                      : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-y-1/2 lg:-left-12 bg-white dark:bg-neutral-800 p-2.5 rounded-full shadow-soft hover:shadow-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-250"
            aria-label="Previous testimonial"
          >
            <HiOutlineChevronLeft className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 -translate-y-1/2 lg:-right-12 bg-white dark:bg-neutral-800 p-2.5 rounded-full shadow-soft hover:shadow-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-250"
            aria-label="Next testimonial"
          >
            <HiOutlineChevronRight className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;