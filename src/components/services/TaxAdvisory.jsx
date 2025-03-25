import React from 'react';
import { FaCalculator, FaChartLine, FaFileAlt, FaHandshake } from 'react-icons/fa';

const ServiceFeature = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TaxAdvisory = () => {
  const features = [
    {
      icon: FaCalculator,
      title: "Tax Planning",
      description: "Strategic tax planning to optimize your financial position and ensure compliance with tax regulations."
    },
    {
      icon: FaChartLine,
      title: "Tax Efficiency",
      description: "Identify opportunities for tax savings and implement efficient tax structures for your business."
    },
    {
      icon: FaFileAlt,
      title: "Compliance Management",
      description: "Comprehensive tax compliance services to meet all regulatory requirements and deadlines."
    },
    {
      icon: FaHandshake,
      title: "Advisory Services",
      description: "Expert guidance on tax implications of business decisions and transactions."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tax Advisory Services
          </h1>
          <p className="text-xl text-gray-600">
            Optimize your tax position with expert guidance and comprehensive compliance solutions.
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
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaxAdvisory;