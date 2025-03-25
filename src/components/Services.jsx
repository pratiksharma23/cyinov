import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <Link to={link} className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-blue-600 mb-4">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const Services = () => {
  const services = [
    {
      icon: FaBalanceScale,
      title: "Legal Compliance",
      description: "Comprehensive legal and regulatory compliance solutions for your business",
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
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive business solutions to help your organization thrive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;