import React, { useState } from 'react';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500 dark:border-blue-400"
              />
            </div>            <div className="text-center">
              <FaQuoteLeft className="mx-auto text-4xl text-indigo-600 dark:text-blue-400 mb-6" />
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                {testimonials[currentSlide].text}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-indigo-600 dark:text-blue-400">
                {testimonials[currentSlide].position}
              </p>
            </div>
          </div>
            <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;