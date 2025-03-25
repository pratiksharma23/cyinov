import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';
import Testimonials from './Testimonials';
import { HiOutlineScale, HiOutlineChartBar } from 'react-icons/hi';
import { RiMoneyRupeeCircleLine  } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

// Import service background images
import legalBg from '../assets/legal.jpg';
import taxBg from '../assets/tax.jpg';
import marketBg from '../assets/market.jpg';
import humanCapitalBg from '../assets/hcm.jpg';

const Hero = () => {
  const services = [
    {
      icon: HiOutlineScale,
      title: "Legal Compliance",
      description: "Comprehensive legal and regulatory compliance solutions",
      link: "/services/legal-compliance",
      bgImage: legalBg
    },
    {
      icon: RiMoneyRupeeCircleLine ,
      title: "Tax Advisory",
      description: "Expert tax planning and advisory services",
      link: "/services/tax-advisory",
      bgImage: taxBg
    },
    {
      icon: HiOutlineChartBar,
      title: "Market Research",
      description: "In-depth market analysis and research solutions",
      link: "/services/market-research",
      bgImage: marketBg
    },
    {
      icon: BsPeople,
      title: "Human Capital",
      description: "Strategic workforce management and development",
      link: "/services/human-capital",
      bgImage: humanCapitalBg
    }
  ];

  return (
    <>
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
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                     hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className="group relative overflow-hidden rounded-xl"
              >
                <div 
                  className="relative h-[400px] w-full overflow-hidden rounded-xl"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark overlay with stronger opacity for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t 
                    from-black/80 via-black/65 to-black/35 
                    group-hover:from-black/75 group-hover:via-black/65 group-hover:to-black/25 
                    transition-all duration-300" />

                  {/* Content container with enhanced text styles */}
                  <div className="relative h-full flex flex-col justify-end p-8 z-10">
                    <div className="mb-6 transform transition-transform duration-300 
                      group-hover:scale-110 group-hover:translate-y-[-10px]">
                      <service.icon className="text-5xl text-gray-300 group-hover:text-gray-100" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md
                      transform transition-all duration-300 group-hover:translate-y-[-10px]">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-100 mb-6 transform transition-all duration-300 
                      group-hover:translate-y-[-10px] text-base leading-relaxed drop-shadow-md">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-gray-300 font-semibold 
                      opacity-0 transform translate-y-4 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-gray-100">
                      <span className="mr-2">Learn More</span>
                      <FaArrowRight className="transition-transform duration-300 
                        group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Hero;