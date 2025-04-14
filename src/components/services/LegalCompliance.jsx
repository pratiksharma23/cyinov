import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FaArrowRight,
  FaChevronRight
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
                <span className="text-gray-300 text-sm">
                  {typeof item === 'object' ? (
                    <>
                      <span className="font-medium">{item.title}</span> – {item.description}
                    </>
                  ) : (
                    item
                  )}
                </span>
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
        <div className="bg-blue-800/30 p-4 rounded-full mr-5">
          <service.icon className="text-3xl text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2">{service.title}</h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        {service.sections && service.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-gray-900/50 rounded-lg p-5">
            {section.title && <h4 className="font-semibold text-xl text-blue-300 mb-4">{section.title}</h4>}
            <ul className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <FaCheckCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    {typeof item === 'object' ? (
                      <>
                        <div className="font-medium text-gray-100">{item.title}</div>
                        <div className="text-gray-400 text-sm mt-1">{item.description}</div>
                      </>
                    ) : (
                      <span className="text-gray-300">{item}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
          ? 'bg-blue-700/20 border-l-4 border-blue-400' 
          : 'bg-gray-800 hover:bg-gray-700/50'
      }`}
      whileHover={{ x: isActive ? 0 : 5 }}
    >
      <service.icon className={`text-xl mr-3 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
      <span className={`font-medium ${isActive ? 'text-blue-400' : 'text-gray-300'}`}>
        {service.title}
      </span>
      {isActive && <FaChevronRight className="ml-auto text-blue-400" />}
    </motion.button>
  );
};

const LegalCompliance = () => {
  const [activeService, setActiveService] = useState(0);
  const services = [
    {
      icon: FaTrademark,
      title: "Intellectual Property Compliance",
      description: "Protect and manage your intellectual assets effectively",
      sections: [{
        items: [
          { title: "IP Prosecution & Registration", description: "Trademark and patent filings and registrations" },
          { title: "IP Litigation & Enforcement", description: "Protecting your intellectual property rights through legal action" },
          { title: "IP Licensing, Commercialization & Technology Transfer", description: "Structuring IP agreements for business growth" },
          { title: "IP Audits & Protection Strategies", description: "Ensuring robust intellectual property safeguards" }
        ]
      }],
      actionButton: {
        text: "Register Trademark",
        link: "/services/trademark/trademark-registration"
      }
    },
    {
      icon: FaLaptopCode,
      title: "Technology & Cybersecurity Compliance",
      description: "Stay secure and compliant in the digital age",
      sections: [{
        items: [
          { title: "Data Protection & Privacy Compliance", description: "Compliance with data protection laws and regulations" },
          { title: "IT Contracts & Technology Transactions", description: "Drafting and negotiating technology-related agreements" },
          { title: "Cybersecurity & Risk Management Advisory", description: "Mitigating cyber threats and ensuring compliance" },
          { title: "Digital Forensics & Cyber Crime Advisory", description: "Assisting in cybercrime investigations and legal responses" }
        ]
      }]
    },
    {
      icon: FaHandshake,
      title: "Commercial Law Compliance",
      description: "Comprehensive legal support for businesses",
      sections: [{
        items: [
          { title: "Contract Drafting & Negotiation", description: "Creating legally sound agreements for business transactions" },
          { title: "Regulatory Compliance", description: "Ensuring adherence to business and commercial legal frameworks" },
          { title: "Banking & Finance Advisory", description: "Guidance on financial regulations and transactions" }
        ]
      }]
    },
    {
      icon: FaUsers,
      title: "Employment & Labor Law Compliance",
      description: "Ensure workplace legal compliance and protect your business",
      sections: [{
        items: [
          { title: "Employment Contracts & Policies", description: "Drafting and reviewing employment-related agreements" },
          { title: "Labor Law Compliance & Advisory", description: "Ensuring adherence to labor laws and employee rights" },
          { title: "Regulatory Representation", description: "Representation before labor authorities" },
          { title: "Workplace Investigations", description: "Addressing workplace disputes and misconduct" }
        ]
      }]
    },
    {
      icon: FaBuilding,
      title: "Corporate Legal Compliance",
      description: "Expert legal support for businesses at every stage",
      sections: [{
        items: [
          { title: "Business Formation & Set-up Compliance", description: "Legal structuring of new businesses" },
          { title: "Legal Risk Assessments", description: "Identifying and mitigating business risks" },
          { title: "Regulatory Compliance Audits", description: "Ensuring adherence to industry-specific regulations" },
          { title: "General Legal Advisory & Opinions", description: "Providing expert legal insights and opinions" }
        ]
      }]
    },
    {
      icon: FaUniversity,
      title: "Financial & Banking Compliance",
      description: "Ensuring adherence to financial regulations and requirements",
      sections: [{
        items: [
          { title: "SARFAESI Act Compliance and Proceedings", description: "Handling secured asset recovery matters" },
          { title: "Debt Recovery Tribunal (DRT) Representation", description: "Legal representation in debt recovery cases" },
          { title: "Banking Regulation Act Compliance", description: "Adherence to banking laws and regulations" },
          { title: "Financial Institution Regulatory Compliance", description: "Ensuring compliance with financial laws" },
          { title: "Banking Fraud Investigation and Litigation", description: "Handling financial fraud cases" },
          { title: "Negotiable Instruments Act Compliance", description: "Legal support for negotiable instruments disputes" },
          { title: "Anti-Money Laundering (AML) Compliance", description: "Ensuring adherence to AML regulations" }
        ]
      }]
    },
    {
      icon: FaHome,
      title: "Real Estate & Property Compliance",
      description: "Comprehensive legal assistance in real estate matters",
      sections: [{
        items: [
          { title: "Property Transactions & Conveyancing Compliance", description: "Facilitating smooth real estate transactions" },
          { title: "Land Acquisition & Environmental Compliance", description: "Legal support in property acquisitions" },
          { title: "Property Disputes & Litigation Compliance", description: "Resolving real estate disputes" },
          { title: "Real Estate Due Diligence Compliance", description: "Conducting thorough property legal assessments" }
        ]
      }]
    },
    {
      icon: FaGavelAlt,
      title: "Litigation & Dispute Resolution Compliance",
      description: "Effective legal representation in disputes and litigations",
      sections: [{
        items: [
          { title: "Civil & Commercial Litigation Compliance", description: "Handling legal disputes in courts" },
          { title: "Criminal Litigation Compliance", description: "Defending against criminal charges" },
          { title: "Arbitration & Mediation Compliance", description: "Alternative dispute resolution methods" },
          { title: "Debt Recovery & Enforcement Compliance", description: "Legal action for recovering dues" }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal & Regulatory Compliances</h1>
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
      </motion.div>      {/* Services Section - Two-Panel Layout */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">Legal Compliance</h2>
          <h4 className="text-1xl md:text-1xl font-semibold text-center text-gray-100 mb-12">Ensuring adherence to legal frameworks and mitigating risks across various domains</h4>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Panel - Service Navigation */}
            <div className="w-full lg:w-1/3 bg-gray-900/50 p-5 rounded-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-6 pl-4 border-l-4 border-blue-400">Our Services</h3>
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