import React from 'react';
import { FaBalanceScale, FaShieldAlt, FaGavel, FaFileContract } from 'react-icons/fa';

const ServiceFeature = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LegalCompliance = () => {
  const features = [
    {
      icon: FaBalanceScale,
      title: "Regulatory Compliance",
      description: "Ensure your business meets all legal requirements and industry regulations with our comprehensive compliance assessments."
    },
    {
      icon: FaShieldAlt,
      title: "Risk Management",
      description: "Identify and mitigate legal risks with proactive strategies and robust compliance frameworks."
    },
    {
      icon: FaGavel,
      title: "Legal Advisory",
      description: "Expert guidance on legal matters affecting your business operations and growth strategies."
    },
    {
      icon: FaFileContract,
      title: "Contract Management",
      description: "Professional review and management of business contracts to protect your interests."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Legal and Regulatory Compliance
          </h1>
          <p className="text-xl text-gray-600">
            Navigate complex regulatory landscapes with confidence through our expert legal compliance services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ServiceFeature key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Compliance Assessment
          </a>
        </div>
      </div>
    </div>
  );
};

export default LegalCompliance;