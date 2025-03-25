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
      name: "Robert Miller",
      position: "CEO, Tech Solutions Inc.",
      image: testimonial1,
      text: "Cyinov Consulting transformed our business operations. Their market research insights were invaluable in helping us expand into new markets."
    },
    {
      id: 2,
      name: "Jennifer Adams",
      position: "CFO, Global Traders Ltd.",
      image: testimonial2,
      text: "The tax advisory services provided by Cyinov helped us optimize our financial structure and achieve significant savings."
    },
    {
      id: 3,
      name: "Marcus Chen",
      position: "Director, Innovation Labs",
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
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="text-center">
              <FaQuoteLeft className="mx-auto text-4xl text-blue-600 mb-6" />
              <p className="text-xl text-gray-600 mb-6">
                {testimonials[currentSlide].text}
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-blue-600">
                {testimonials[currentSlide].position}
              </p>
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;