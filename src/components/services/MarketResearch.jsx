import React from 'react';
import { FaSearchDollar, FaUsers, FaChartBar, FaLightbulb } from 'react-icons/fa';

const ServiceFeature = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MarketResearch = () => {
  const features = [
    {
      icon: FaSearchDollar,
      title: "Market Analysis",
      description: "In-depth analysis of market trends, opportunities, and competitive landscapes."
    },
    {
      icon: FaUsers,
      title: "Consumer Insights",
      description: "Detailed understanding of customer behavior, preferences, and market segments."
    },
    {
      icon: FaChartBar,
      title: "Data Analytics",
      description: "Advanced data analysis to support informed business decisions and strategy development."
    },
    {
      icon: FaLightbulb,
      title: "Strategic Recommendations",
      description: "Actionable insights and recommendations based on comprehensive market research."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Market Research Services
          </h1>
          <p className="text-xl text-gray-600">
            Make informed decisions with comprehensive market insights and analysis.
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
            Request Market Analysis
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketResearch;