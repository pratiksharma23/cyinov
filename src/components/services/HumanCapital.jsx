import React from 'react';
import { 
  FaUserTie, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaGraduationCap,
  FaSearch,
  FaCog,
  FaRocket,
  FaChartBar
} from 'react-icons/fa';

const ServiceCategory = ({ icon: Icon, title, description, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="text-blue-600 mb-4">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-blue-500 font-bold">•</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({ number, title, items }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-blue-500 font-bold">•</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HumanCapital = () => {
  const categories = [
    {
      icon: FaUserTie,
      title: "Recruitment and Talent Acquisition",
      description: "Strategic talent acquisition and seamless onboarding processes",
      items: [
        "Streamlined recruitment processes through efficient strategies and technologies",
        "Smooth integration of new hires into organizational culture",
        "Enhanced early employee experiences"
      ]
    },
    {
      icon: FaChartLine,
      title: "Workforce Management",
      description: "Comprehensive solutions for operational efficiency",
      items: [
        "Time and attendance tracking systems",
        "Employee productivity monitoring",
        "Performance management and regular feedback systems"
      ]
    },
    {
      icon: FaMoneyBillWave,
      title: "Payroll and Compensation Management",
      description: "Efficient payroll processing and competitive compensation frameworks",
      items: [
        "Accurate and timely payroll processing",
        "Competitive compensation structures",
        "Benefits administration and management"
      ]
    },
    {
      icon: FaGraduationCap,
      title: "Training and Development",
      description: "Continuous learning and leadership development programs",
      items: [
        "Comprehensive training programs for skill enhancement",
        "Career growth opportunities",
        "Succession planning for future leadership"
      ]
    }
  ];

  const process = [
    {
      title: "Assessment",
      items: [
        "Current workforce analysis",
        "Process evaluation",
        "Gap identification",
        "Needs assessment"
      ]
    },
    {
      title: "Strategy",
      items: [
        "Solution design",
        "Resource planning",
        "Timeline development",
        "ROI projections"
      ]
    },
    {
      title: "Implementation",
      items: [
        "System setup",
        "Process integration",
        "Team training",
        "Change management"
      ]
    },
    {
      title: "Optimization",
      items: [
        "Performance monitoring",
        "Data analysis",
        "Continuous improvement",
        "Regular reviews"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Workforce & Market Strategy
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive Human Capital Management and Market Research solutions to drive your business forward.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            HUMAN CAPITAL MANAGEMENT
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We offer a diverse range of services designed to optimize workforce management and enhance 
            employee engagement throughout the employee lifecycle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <ServiceCategory key={index} {...category} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our HCM Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ProcessStep 
                key={index} 
                number={index + 1} 
                title={step.title} 
                items={step.items} 
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-full 
                     hover:bg-blue-700 transition-colors duration-300"
          >
            Transform Your Workforce Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default HumanCapital;