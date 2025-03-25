import React from 'react';
import Slider from 'react-slick';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ image, name, position, company, quote }) => (
  <div className="px-4">
    <div className="bg-white rounded-lg shadow-lg p-8 mx-2">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-blue-600">{position}</p>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{quote}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: "Alex Thompson",
      position: "CEO",
      company: "Tech Innovations Inc.",
      quote: "Cyinov's strategic guidance transformed our operations and helped us achieve unprecedented growth."
    },
    {
      image: testimonial2,
      name: "Maria Garcia",
      position: "CFO",
      company: "Global Solutions Ltd.",
      quote: "Their tax advisory services saved us significant resources while ensuring complete compliance."
    },
    {
      image: testimonial3,
      name: "James Wilson",
      position: "HR Director",
      company: "Future Enterprises",
      quote: "The human capital management solutions provided by Cyinov revolutionized our workforce management."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;