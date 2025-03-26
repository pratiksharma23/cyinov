import React from 'react';
import { motion } from 'framer-motion';
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
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
    <div className="text-blue-400 mb-4">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold text-gray-100 mb-3">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-blue-400 font-bold">•</span>
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep = ({ number, title, items }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-gray-900 text-xl font-bold mr-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-100">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-blue-400 font-bold">•</span>
          <span className="text-gray-300">{item}</span>
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
    <div className="min-h-screen bg-gray-900">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Workforce & Market Strategy
            </h1>
            <p className="text-xl mb-8 text-blue-200">
              Comprehensive Human Capital Management and Market Research solutions to drive your business forward.
            </p>
            <p className="text-lg text-blue-200">
              We offer a diverse range of services designed to optimize workforce management and enhance 
              employee engagement throughout the employee lifecycle.
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

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
              HUMAN CAPITAL MANAGEMENT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <ServiceCategory key={index} {...category} />
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
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
              className="inline-flex items-center bg-blue-400 text-gray-900 font-bold py-3 px-8 rounded-full 
                       hover:bg-blue-500 transition-colors duration-300"
            >
              Transform Your Workforce Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanCapital;