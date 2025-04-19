import React from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <Link 
    to={link} 
    className="block p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    <div className="text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
    <div className="flex items-center mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
      <span>Learn more</span>
      <FaArrowRight className="ml-2 w-3 h-3" />
    </div>
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
      title: "Market & Product Research",
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
    <div className="py-10 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 transition-colors duration-200">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200 px-2">
            Comprehensive business solutions to help your organization thrive
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 md:mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center py-10 sm:py-12 md:py-16 border-t border-gray-200 dark:border-gray-700 transition-all duration-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-200 px-2 sm:px-0">
            Let's discuss how we can help make your business better
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-auto min-w-[160px]"
          >
            Contact Us
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;