import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaClipboardCheck,
  FaUsers,
  FaIndustry,
  FaSearchLocation,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProcessStep = ({ number, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700"
  >
    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-gray-900 text-xl font-bold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-300 text-center text-sm">{description}</p>
  </motion.div>
);

const ServiceCategory = ({ icon: Icon, title, description, items, sections }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-700"
  >
    <Icon className="text-2xl text-blue-400 mb-3" />
    <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    {sections ? (
      <div className="space-y-4">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h4 className="font-semibold text-gray-200 mb-2">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2">
                  <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
            <span className="text-gray-300 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const MarketResearch = () => {
  const process = [
    {
      number: "1",
      title: "Research Design",
      description: "Crafting the perfect methodology"
    },
    {
      number: "2",
      title: "Data Collection",
      description: "Gathering insights through multiple channels"
    },
    {
      number: "3",
      title: "Analysis",
      description: "Processing data into actionable insights"
    },
    {
      number: "4",
      title: "Reporting",
      description: "Delivering clear, actionable recommendations"
    }
  ];

  const services = [
    {
      icon: FaChartLine,
      title: "Forecasting Studies",
      description: "Comprehensive market forecasting and trend analysis",
      sections: [
        {
          title: "Market Forecasting",
          items: [
            "Volume & demand estimation",
            "Market size analysis",
            "Growth trend prediction",
            "Competitive landscape assessment"
          ]
        },
        {
          title: "Industry Analysis",
          items: [
            "Sector-specific forecasting",
            "Economic impact studies",
            "Technology adoption trends",
            "Risk assessment"
          ]
        }
      ]
    },
    {
      icon: FaClipboardCheck,
      title: "Product & Concept Testing",
      description: "In-depth testing and validation services",
      sections: [
        {
          title: "Product Testing",
          items: [
            "Usage & attitude studies",
            "Product satisfaction analysis",
            "Competitive product benchmarking",
            "Package testing"
          ]
        },
        {
          title: "Concept Testing",
          items: [
            "Concept evaluation",
            "Price sensitivity testing",
            "Brand concept validation",
            "Market acceptance studies"
          ]
        }
      ]
    },
    {
      icon: FaUsers,
      title: "Consumer Research",
      description: "Deep insights into consumer behavior and preferences",
      sections: [
        {
          title: "Consumer Insights",
          items: [
            "Consumer behavior analysis",
            "Purchase decision mapping",
            "Brand perception studies",
            "Customer satisfaction tracking"
          ]
        },
        {
          title: "Market Tracking",
          items: [
            "Sales leakage analysis",
            "Market share tracking",
            "Distribution audit",
            "Retail audit services"
          ]
        }
      ]
    },
    {
      icon: FaSearchLocation,
      title: "Specialized Research",
      description: "Focused research for specific sectors and needs",
      sections: [
        {
          title: "Rural Research",
          items: [
            "Rural market assessment",
            "Agricultural sector studies",
            "Rural consumer behavior",
            "Distribution channel analysis"
          ]
        },
        {
          title: "Social Research",
          items: [
            "Social impact assessment",
            "Community needs analysis",
            "Policy research",
            "Development sector studies"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Market & Product Research Services</h1>
            <p className="text-xl text-blue-200">
              Data-driven insights to power your business decisions. Understand your market, customers, and competition with precision.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
          <svg 
            className="relative block w-full h-12"
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

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">Our Research Services</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
            {services.map((service, index) => (
              <ServiceCategory key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">Our Research Process</h2>
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
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            Request Research Consultation
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default MarketResearch;