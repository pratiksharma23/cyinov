import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBook,
  FaFileInvoiceDollar,
  FaUsers,
  FaBuilding,
  FaMoneyBillAlt,
  FaCheckCircle,
  FaArrowRight,
  FaChevronRight
} from 'react-icons/fa';
import { getRoutePath } from '../../utils/routing';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProcessStep = ({ number, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="flex flex-col items-center p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
  >
    <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
      {number}
    </div>
    <h3 className="text-xl text-center md:text-2xl font-bold text-gray-100 mb-3">{title}</h3>
    <p className="text-sm md:text-base text-gray-300 text-center">{description}</p>
  </motion.div>
);

// Service Detail Panel Component
const ServiceDetailPanel = ({ service }) => {
  if (!service) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 lg:p-8 border border-gray-700"
    >
      <div className="flex items-start mb-6">
        <div className="bg-primary-800/30 p-4 rounded-full mr-5">
          <service.icon className="text-3xl text-primary-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        <div className="bg-gray-900/50 rounded-lg p-5">
          <ul className="space-y-4">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start">
                <FaCheckCircle className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {service.actionButton && (
        <motion.a
          href={service.actionButton.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-5 py-3 mt-8 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300"
        >
          {service.actionButton.text}
          <FaArrowRight className="ml-2" />
        </motion.a>
      )}
    </motion.div>
  );
};

// Service Nav Item Component
const ServiceNavItem = ({ service, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center w-full text-left p-4 transition-all duration-300 rounded-lg mb-2 ${
        isActive 
          ? 'bg-primary-700/20 border-l-4 border-primary-400' 
          : 'bg-gray-800 hover:bg-gray-700/50'
      }`}
      whileHover={{ x: isActive ? 0 : 5 }}
    >
      <service.icon className={`text-xl mr-3 ${isActive ? 'text-primary-400' : 'text-gray-400'}`} />
      <span className={`font-medium ${isActive ? 'text-primary-400' : 'text-gray-300'}`}>
        {service.title}
      </span>
      {isActive && <FaChevronRight className="ml-auto text-primary-400" />}
    </motion.button>
  );
};

const TaxAdvisory = () => {
  const [activeService, setActiveService] = useState(0);
  
  const process = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Understanding your business needs and challenges"
    },
    {
      number: "2",
      title: "Strategy Development",
      description: "Creating customized solutions for your business"
    },
    {
      number: "3",
      title: "Implementation",
      description: "Executing the plan with precision and care"
    },
    {
      number: "4",
      title: "Ongoing Support",
      description: "Continuous monitoring and optimization"
    }
  ];

  const services = [
    {
      icon: FaBook,
      title: "Book-keeping and Compliance",
      description: "Comprehensive book-keeping and compliance services to keep your business records organized and compliant",
      items: [
        "Book-keeping",
        "Secretarial Compliance",
        "TDS/GST/MCA Compliance",
        "Other Regulatory Compliance"
      ],
      actionButton: {
        text: "Learn More",
        link: getRoutePath("/contact")
      }
    },
    {
      icon: FaFileInvoiceDollar,
      title: "GST Compliance",
      description: "Complete GST compliance solutions to ensure your business meets all requirements",
      items: [
        "Registration",
        "Monthly/Quarterly Return Filing",
        "Annual/Final Return",
        "Modification in Existing Registration",
        "LUT",
        "E-Way Bill/E-Invoices"
      ],
      actionButton: {
        text: "Get GST Support",
        link: getRoutePath("/contact")
      }
    },
    {
      icon: FaUsers,
      title: "Payroll Compliance",
      description: "End-to-end payroll processing and compliance solutions for businesses of all sizes",
      items: [
        "Salary Structure & Pay Slips",
        "Monthly Payroll Processing",
        "Income Tax Computation (Year-end)",
        "Quarterly TDS Return Filing",
        "Year-end Income Tax Proof Processing",
        "ESI & PF Registration",
        "ESI & PF Challan Preparation",
        "Other Regulatory Compliance"
      ],
      actionButton: {
        text: "Outsource Payroll",
        link: getRoutePath("/contact")
      }
    },
    {
      icon: FaBuilding,
      title: "Corporate Laws & MCA Compliance",
      description: "Expert assistance in corporate law compliance and MCA regulations",
      items: [
        "Registration of Company/LLP",
        "Annual Compliance",
        "ROC Filings",
        "Corporate Governance Advisory",
        "Legal Documentation"
      ],
      actionButton: {
        text: "Corporate Support",
        link: getRoutePath("/contact")
      }
    },
    {
      icon: FaMoneyBillAlt,
      title: "Income Tax & TDS Compliance",
      description: "Comprehensive income tax and TDS compliance services for businesses and individuals",
      items: [
        "Income Tax Return Filing",
        "Any Other Form of IT Filing",
        "PAN & TAN Application",
        "TDS Compliance & Return Filing",
        "Reply to Notices Received",
        "Low Deduction of Income Tax Certificate"
      ],
      actionButton: {
        text: "Tax Filing Support",
        link: getRoutePath("/contact")
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-200">Tax Advisory Services</h1>
            <p className="text-xl mb-8 text-primary-200">
              With years of experience in taxation, compliance, and financial planning, 
              Cyinov Consulting has helped businesses navigate the complexities of taxation seamlessly.
            </p>
            <p className="text-lg text-primary-200">
              We specialize in GST, corporate taxation, payroll processing, and international tax advisory. 
              Our mission is to provide businesses with hassle-free tax solutions that allow them to focus on growth and profitability.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
          <svg 
            className="relative block w-full h-12"
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".15" 
              className="fill-current text-gray-900"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".1" 
              className="fill-current text-gray-900"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              opacity=".05" 
              className="fill-current text-gray-900"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Services Section - Two-Panel Layout */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-6">Our Services</h2>
          <h4 className="text-1xl md:text-1xl font-semibold text-center text-primary-300 mb-12">
            Comprehensive tax advisory and compliance solutions tailored for your business
          </h4>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Panel - Service Navigation */}
            <div className="w-full lg:w-1/3 bg-gray-800/50 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-6 pl-4 border-l-4 border-primary-400">Tax Services</h3>
              <div className="space-y-1">
                {services.map((service, index) => (
                  <ServiceNavItem 
                    key={index}
                    service={service}
                    isActive={activeService === index}
                    onClick={() => setActiveService(index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Right Panel - Service Details */}
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                <ServiceDetailPanel 
                  key={activeService}
                  service={services[activeService]} 
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">Our Process</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {process.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Ready to Get Started?</h2>
          <motion.a
            href={getRoutePath("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            Schedule a Consultation
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default TaxAdvisory;
