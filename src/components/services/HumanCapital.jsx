import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUserTie, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaGraduationCap,
  FaSearch,
  FaCog,
  FaRocket,
  FaChartBar,
  FaCheckCircle
} from 'react-icons/fa';

// Tab Navigation Component
const TabNavigation = ({ categories, activeTab, setActiveTab }) => {
  return (
    <div className="w-full overflow-x-auto mb-8">
      <div className="flex min-w-full border-b border-gray-700">
        {categories.map((category, index) => (
          <button 
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 min-w-[180px] px-6 py-4 flex items-center justify-center space-x-2 transition-all duration-300
              ${activeTab === index 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            <category.icon className="text-xl" />
            <span className="font-medium whitespace-nowrap">{category.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Tab Content Component
const TabContent = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700"
    >
      <div className="flex items-start mb-6">
        <div className="bg-blue-800/30 p-4 rounded-full mr-5">
          <category.icon className="text-3xl text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-100 mb-2">{category.title}</h3>
          <p className="text-gray-300">{category.description}</p>
        </div>
      </div>
      
      <div className="mt-8">
        <ul className="space-y-6">
          {category.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start">
              <FaCheckCircle className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                {typeof item === 'string' && item.includes('–') ? (
                  <>
                    <div className="font-medium text-gray-100">{item.split('–')[0]}</div>
                    <div className="text-gray-400 mt-1">{item.split('–')[1]}</div>
                  </>
                ) : (
                  <span className="text-gray-300">{item}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Main Tabs Section Component
const TabsSection = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabNavigation 
        categories={categories} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <AnimatePresence mode="wait">
        <TabContent key={activeTab} category={categories[activeTab]} />
      </AnimatePresence>
    </div>
  );
};

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
      description: "Attract and retain top talent with strategic hiring solutions",
      items: [
        "Streamlined Recruitment Processes – Leveraging technology and expertise to identify and hire the right candidates efficiently",
        "Onboarding & Integration – Ensuring seamless adaptation of new hires into the company culture, enhancing early employee experiences"
      ]
    },
    {
      icon: FaChartLine,
      title: "Workforce Management",
      description: "Maximize employee productivity with structured workforce solutions",
      items: [
        "Time & Attendance Tracking – Implementing systems to monitor employee work hours, attendance, and productivity",
        "Performance Management – Developing frameworks for regular appraisals, goal-setting, and employee feedback"
      ]
    },
    {
      icon: FaMoneyBillWave,
      title: "Payroll and Compensation Management",
      description: "Ensuring seamless payroll operations and competitive compensation structures",
      items: [
        "Payroll Processing – Managing payroll operations to ensure accurate and timely employee payments",
        "Compensation Structures & Benefits – Designing competitive pay frameworks to attract and retain high-performing employees"
      ]
    },
    {
      icon: FaGraduationCap,
      title: "Training and Development",
      description: "Fostering continuous learning and professional growth",
      items: [
        "Skill Development & Training Programs – Providing structured training initiatives for career growth and enhanced productivity",
        "Succession Planning – Identifying and grooming future leaders to ensure organizational sustainability"
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
      </motion.div>      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
              Our HCM Services
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              Explore our comprehensive human capital management solutions below.
            </p>
            <div className="max-w-6xl mx-auto">
              <TabsSection categories={categories} />
            </div>
          </div>          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
              OUR HCM PROCESS
            </h2>
            <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700">
              {/* Horizontal Timeline */}
              <div className="relative">
                {/* Timeline Connector Line */}
                <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gray-600 z-0"></div>
                
                {/* Timeline Steps */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* Start Point */}
                  <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/12">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-800">
                      <span className="text-xl">📍</span>
                    </div>
                    <div className="text-center mt-5 font-bold text-blue-400">Start</div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center w-full md:w-1/24">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  {/* Process Steps Container */}
                  <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-10/12">
                    {/* Assessment */}
                    <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/5">
                      <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-800">
                        <span className="text-xl">🟢</span>
                      </div>
                      <div className="text-center mt-5">
                        <h3 className="font-bold text-gray-100">Assessment</h3>
                        <p className="text-sm text-gray-400 mt-2">Understanding your workforce</p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg mt-6 p-4 w-full md:max-w-[90%] mx-auto min-h-[180px]">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-xl mr-2">📊</span>
                            <span className="text-gray-300 text-sm">Workforce Analysis</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">📋</span>
                            <span className="text-gray-300 text-sm">Process Evaluation</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🔍</span>
                            <span className="text-gray-300 text-sm">Gap Identification</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">✅</span>
                            <span className="text-gray-300 text-sm">Needs Assessment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center w-full md:w-1/24">
                      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    
                    {/* Strategy */}
                    <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/5">
                      <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-800">
                        <span className="text-xl">🟡</span>
                      </div>
                      <div className="text-center mt-5">
                        <h3 className="font-bold text-gray-100">Strategy</h3>
                        <p className="text-sm text-gray-400 mt-2">Developing a roadmap</p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg mt-6 p-4 w-full md:max-w-[90%] mx-auto min-h-[180px]">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🏗️</span>
                            <span className="text-gray-300 text-sm">Solution Design</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">📅</span>
                            <span className="text-gray-300 text-sm">Resource Planning</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">⏳</span>
                            <span className="text-gray-300 text-sm">Timeline Development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">📈</span>
                            <span className="text-gray-300 text-sm">ROI Projections</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center w-full md:w-1/24">
                      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    
                    {/* Implementation */}
                    <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/5">
                      <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-800">
                        <span className="text-xl">🟠</span>
                      </div>
                      <div className="text-center mt-5">
                        <h3 className="font-bold text-gray-100">Implementation</h3>
                        <p className="text-sm text-gray-400 mt-2">Seamless execution</p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg mt-6 p-4 w-full md:max-w-[90%] mx-auto min-h-[180px]">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-xl mr-2">⚙️</span>
                            <span className="text-gray-300 text-sm">System Setup</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🔗</span>
                            <span className="text-gray-300 text-sm">Process Integration</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🎓</span>
                            <span className="text-gray-300 text-sm">Team Training</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🔄</span>
                            <span className="text-gray-300 text-sm">Change Management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center w-full md:w-1/24">
                      <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    
                    {/* Optimization */}
                    <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/5">
                      <div className="flex-shrink-0 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-800">
                        <span className="text-xl">🔴</span>
                      </div>
                      <div className="text-center mt-5">
                        <h3 className="font-bold text-gray-100">Optimization</h3>
                        <p className="text-sm text-gray-400 mt-2">Continuous improvement</p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg mt-6 p-4 w-full md:max-w-[90%] mx-auto min-h-[180px]">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-xl mr-2">📡</span>
                            <span className="text-gray-300 text-sm">Performance Monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">📊</span>
                            <span className="text-gray-300 text-sm">Data Analysis</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🔄</span>
                            <span className="text-gray-300 text-sm">Continuous Improvement</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-2">🔁</span>
                            <span className="text-gray-300 text-sm">Regular Reviews</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center w-full md:w-1/24">
                    <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  
                  {/* End Point */}
                  <div className="flex flex-col items-center w-full md:w-1/12">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-800">
                      <span className="text-xl">🏁</span>
                    </div>
                    <div className="text-center mt-5 font-bold text-blue-400">
                    Optimized Workforce & Business Growth
                    </div>
                  </div>
                </div>
                
                {/* Arrow Indicators for Mobile */}
                <div className="flex flex-col items-center md:hidden space-y-6 my-8">
                  <div className="flex items-center justify-center w-full">
                    <div className="w-1 h-12 bg-blue-400"></div>
                  </div>
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
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