import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';
import Testimonials from './Testimonials';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const services = [
    {
      icon: FaBalanceScale,
      title: "Legal Compliance",
      description: "Comprehensive legal and regulatory compliance solutions",
      link: "/services/legal-compliance"
    },
    {
      icon: FaCalculator,
      title: "Tax Advisory",
      description: "Expert tax planning and advisory services",
      link: "/services/tax-advisory"
    },
    {
      icon: FaChartLine,
      title: "Market Research",
      description: "In-depth market analysis and research solutions",
      link: "/services/market-research"
    },
    {
      icon: FaUsers,
      title: "Human Capital",
      description: "Strategic workforce management and development",
      link: "/services/human-capital"
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <service.icon className="text-4xl text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
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