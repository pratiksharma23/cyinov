import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBalanceScale,
  FaShieldAlt,
  FaGavel,
  FaFileContract,
  FaTrademark,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaBuilding,
  FaUniversity,
  FaHome,
  FaGavel as FaGavelAlt,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceCategory = ({ icon: Icon, title, description, sections, actionButton }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-700"
  >
    <Icon className="text-2xl text-blue-400 mb-3" />
    <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    <div className="space-y-4">
      {sections && sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
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
    {actionButton && (
      <a
        href={actionButton.link}
        className="inline-flex items-center px-4 py-2 mt-4 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300"
      >
        {actionButton.text}
      </a>
    )}
  </motion.div>
);

const LegalCompliance = () => {
  const services = [
    {
      icon: FaTrademark,
      title: "Intellectual Property",
      description: "Comprehensive IP protection and management services",
      sections: [{
        items: [
          "IP Prosecution & Registration- TRADEMARK AND PATENTS",
          "IP Litigation & Enforcement",
          "IP Licensing, Commercialization & Technology Transfer",
          "IP Audits & Protection Strategies"
        ]
      }],
      actionButton: {
        text: "Register Trademark",
        link: "/services/trademark/trademark-registration"
      }
    },
    {
      icon: FaLaptopCode,
      title: "Technology & Cybersecurity Law",
      description: "Digital age legal protection and compliance",
      sections: [{
        items: [
          "Data Protection & Privacy Compliance",
          "IT Contracts & Technology Transactions",
          "Cybersecurity & Risk Management Advisory",
          "Digital Forensics & Cyber Crime Advisory"
        ]
      }]
    },
    {
      icon: FaHandshake,
      title: "Commercial Law",
      description: "Business legal support and compliance",
      sections: [{
        items: [
          "Contract Drafting & Negotiation",
          "Regulatory Compliance",
          "Banking & Finance Advisory"
        ]
      }]
    },
    {
      icon: FaUsers,
      title: "Employment & Labor Laws",
      description: "Workplace legal compliance and advisory",
      sections: [{
        items: [
          "Employment Contracts & Policies",
          "Labor Law Compliance & Advisory",
          "Regulatory Representation",
          "Workplace Investigations"
        ]
      }]
    },
    {
      icon: FaBuilding,
      title: "General Corporate Advisory",
      description: "Comprehensive business legal support",
      sections: [{
        items: [
          "Business Formation & Set-up",
          "Legal Risk Assessments",
          "Regulatory Compliance Audits",
          "General Legal Advisory & Opinions"
        ]
      }]
    },
    {
      icon: FaUniversity,
      title: "Banking & Finance Laws",
      description: "Financial sector legal compliance and advisory",
      sections: [{
        items: [
          "SARFAESI Act Compliance and Proceedings",
          "Debt Recovery Tribunal (DRT) Representation",
          "Banking Regulation Act Advisory",
          "Financial Institution Regulatory Compliance",
          "Banking Fraud Investigation and Litigation",
          "Negotiable Instruments Act Matters",
          "Anti-Money Laundering (AML) Compliance"
        ]
      }]
    },
    {
      icon: FaHome,
      title: "Real Estate & Property Laws",
      description: "Property law and transaction services",
      sections: [{
        items: [
          "Property Transactions & Conveyancing",
          "Land Acquisition & Environmental Clearances",
          "Property Disputes & Litigation",
          "Real Estate Due Diligence"
        ]
      }]
    },
    {
      icon: FaGavelAlt,
      title: "Litigation & Dispute Resolution",
      description: "Comprehensive dispute resolution services",
      sections: [{
        items: [
          "Civil & Commercial Litigation",
          "Criminal Litigation",
          "Arbitration & Mediation",
          "Debt Recovery & Enforcement Proceedings"
        ]
      }]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal & Regulatory Services</h1>
            <p className="text-xl text-blue-200">
              Comprehensive legal solutions for businesses and individuals. Navigate complex legal landscapes with confidence.
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Ready to Get Started?</h2>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            Schedule a Legal Consultation
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default LegalCompliance;