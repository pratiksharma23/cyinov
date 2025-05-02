import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaArrowRight, FaTrademark } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Enhanced interactive Service Card component with modern, subtle design
const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link to={link} className="block h-full">
        <div className="h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm 
          transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-blue-900/20 
          border border-gray-100 dark:border-gray-700 group-hover:border-blue-100 dark:group-hover:border-blue-900">
          
          {/* Top accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
          
          <div className="p-6">
            <div className="flex items-start">
              {/* Icon container - perfectly circular and centered */}
              <div className="relative mr-5 flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30 
                  transform transition-transform duration-300 scale-0 group-hover:scale-100 origin-center"></div>
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full 
                  bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 
                  transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                  <Icon className="text-xl" />
                </div>
              </div>
              
              {/* Content container - aligned for symmetry */}
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2 
                  transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
            
            {/* Divider line for visual separation */}
            <div className="h-px w-full bg-gray-100 dark:bg-gray-700 my-4"></div>
            
            {/* Learn more link - aligned right for balance */}
            <div className="flex justify-end">
              <span className="inline-flex items-center text-sm font-medium text-blue-500 dark:text-blue-400
                transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                <span>Learn more</span>
                <FaArrowRight size={10} className="ml-2 transform transition-transform duration-300 
                  group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

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
    },
    {
      icon: FaTrademark,
      title: "Trademark Services",
      description: "Protection and management of your intellectual property assets",
      link: "/services/trademark"
    }
  ];
  
  // Divide the services into rows to handle them separately
  const firstRowServices = services.slice(0, 3); // First 3 services
  const secondRowServices = services.slice(3); // Remaining 2 services
  
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with modern typography and subtle underline */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
          >
            Our Services
          </motion.h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded mb-6"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Comprehensive solutions tailored to help your organization thrive
          </motion.p>
        </div>
        
        {/* First row - 3 services */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {firstRowServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </motion.div>
        
        {/* Second row - 2 services centered */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-[66%] lg:max-w-[66%] mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {secondRowServices.map((service, index) => (
            <ServiceCard 
              key={index + firstRowServices.length}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </motion.div>
        
        {/* CTA Section - Modernized with subtle gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center py-16 mt-20"
        >
          <div className="p-10 rounded-xl bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-600/5 
            dark:from-blue-900/20 dark:via-blue-800/20 dark:to-blue-900/20 border border-blue-100 
            dark:border-blue-900/30 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Let's discuss how we can help transform your business
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to provide personalized solutions for your unique challenges
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 
                text-white font-medium rounded-md shadow-sm hover:shadow transition-all duration-300"
            >
              Schedule a Consultation
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;