import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaBars, FaTimes, FaTrademark } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const services = [
    {
      icon: FaBalanceScale,
      title: "Legal Compliance",
      description: "Comprehensive legal and regulatory compliance solutions",
      link: "/services/legal-compliance"
    },
    {
      icon: FaCalculator,
      title: "Tax Advisory",
      description: "Expert tax planning and advisory services",
      link: "/services/tax-advisory"
    },
    {
      icon: FaChartLine,
      title: "Market & Product Research",
      description: "In-depth market analysis and research solutions",
      link: "/services/market-research"
    },
    {
      icon: FaUsers,
      title: "Human Capital",
      description: "Strategic workforce management and development",
      link: "/services/human-capital"
    },
    {
      icon: FaTrademark,
      title: "Trademark",
      description: "Trademark registration and protection services",
      link: "/services/trademark"
    }
  ];
  return (
    <header className="bg-gray-500 dark:bg-gray-900 shadow-lg shadow-gray-900/20 transition-colors duration-300">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Cyinov Logo" className="h-12 sm:h-16 md:h-20 w-auto" />
          </Link>
          
          {/* Desktop Theme Toggle 
          <div className="hidden md:flex items-center mr-4">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {isDark ? (
                <FiSun className="text-yellow-500 text-xl" />
              ) : (
                <FiMoon className="text-indigo-600 dark:text-blue-400 text-xl" />
              )}
            </button>
          </div>
          */}
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-200 hover:text-indigo-400 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
          
          <div className={`transition-all duration-300 ease-in-out absolute md:relative top-full left-0 w-full md:w-auto bg-gray-500 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent z-50 shadow-xl md:shadow-none ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'} md:flex items-center gap-4 lg:gap-6`}>            <div className="flex items-center justify-between md:hidden p-4 mb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-200 font-medium">Theme</span>
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 bg-opacity-50 dark:bg-opacity-50 transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {isDark ? (
                  <FiSun className="text-yellow-500 text-xl" />
                ) : (
                  <FiMoon className="text-indigo-600 dark:text-blue-400 text-xl" />
                )}
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
              <Link 
                to="/" 
                className="block px-4 py-3 md:py-2 text-base md:text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-100 md:hover:bg-transparent dark:hover:text-indigo-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 md:py-2 text-base md:text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-100 md:hover:bg-transparent dark:hover:text-indigo-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex justify-between items-center w-full px-4 py-3 md:py-2 text-left text-base md:text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-100 md:hover:bg-transparent dark:hover:text-indigo-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent transition-colors"
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <svg className={`w-4 h-4 ml-1 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>                <div className={`${isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:opacity-0'} md:absolute overflow-hidden transition-all duration-300 ease-in-out md:mt-2 w-full md:w-64 bg-white dark:bg-gray-800 md:shadow-lg md:rounded-lg md:border border-gray-200 dark:border-gray-700`}>
                  <ul className="py-2">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.link} 
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          onClick={() => {setIsServicesOpen(false); setIsMenuOpen(false);}}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Link 
                to="/team" 
                className="block px-4 py-3 md:py-2 text-base md:text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-100 md:hover:bg-transparent dark:hover:text-indigo-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              
              <Link 
                to="/faq" 
                className="block px-4 py-3 md:py-2 text-base md:text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:bg-gray-100 md:hover:bg-transparent dark:hover:text-indigo-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <Link 
                to="/contact" 
                className="block px-4 py-3 md:py-2 mt-2 md:mt-0 mx-4 md:mx-0 text-center md:text-left text-white bg-indigo-600 dark:bg-indigo-700 rounded hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            {/* Horizontal Theme Toggle Switch */}
            <div className="ml-4 flex items-center">
              <div 
                className="relative inline-flex h-6 w-12 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
                onClick={toggleTheme}
              >
                <span className="sr-only">{isDark ? 'Switch to light theme' : 'Switch to dark theme'}</span>
                {/* Toggle Icons */}
                <span className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
                  <FiMoon className={`text-gray-800 text-xs ${isDark ? 'opacity-100' : 'opacity-50'}`} />
                  <FiSun className={`text-yellow-300 text-xs ${!isDark ? 'opacity-100' : 'opacity-50'}`} />
                </span>
                {/* Toggle Handle */}
                <span 
                  className={`absolute left-0 inline-block h-5 w-5 top-0.5 transform transition-transform duration-300 rounded-full bg-white shadow-md ${isDark ? 'translate-x-0.5' : 'translate-x-6'}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;