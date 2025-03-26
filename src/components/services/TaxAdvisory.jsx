import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaFileInvoiceDollar,
  FaUsers,
  FaBuilding,
  FaMoneyBillAlt,
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
    className="flex flex-col items-center p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
  >
    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

const ServiceCategory = ({ icon: Icon, title, items }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-700"
  >
    <Icon className="text-2xl text-blue-400 mb-3" />
    <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
          <span className="text-gray-300 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const TaxAdvisory = () => {
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
      items: [
        "Book-keeping",
        "Secretarial Compliance",
        "TDS/GST/MCA Compliance",
        "Other Regulatory Compliance"
      ]
    },
    {
      icon: FaFileInvoiceDollar,
      title: "GST Compliance",
      items: [
        "Registration",
        "Monthly/Quarterly Return Filing",
        "Annual/Final Return",
        "Modification in Existing Registration",
        "LUT",
        "E-Way Bill/E-Invoices"
      ]
    },
    {
      icon: FaUsers,
      title: "Payroll Compliance",
      items: [
        "Salary Structure & Pay Slips",
        "Monthly Payroll Processing",
        "Income Tax Computation (Year-end)",
        "Quarterly TDS Return Filing",
        "Year-end Income Tax Proof Processing",
        "ESI & PF Registration",
        "ESI & PF Challan Preparation",
        "Other Regulatory Compliance"
      ]
    },
    {
      icon: FaBuilding,
      title: "Corporate Laws & MCA Compliance",
      items: [
        "Registration of Company/LLP"
      ]
    },
    {
      icon: FaMoneyBillAlt,
      title: "Income Tax & TDS Compliance",
      items: [
        "Income Tax Return Filing",
        "Any Other Form of IT Filing",
        "PAN & TAN Application",
        "TDS Compliance & Return Filing",
        "Reply to Notices Received",
        "Low Deduction of Income Tax Certificate"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tax Advisory Services</h1>
            <p className="text-xl mb-8 text-blue-200">
              With years of experience in taxation, compliance, and financial planning, 
              Cyinov Consulting has helped businesses navigate the complexities of taxation seamlessly.
            </p>
            <p className="text-lg text-blue-200">
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

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Schedule a Consultation
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default TaxAdvisory;