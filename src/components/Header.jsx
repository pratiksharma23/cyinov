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
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Cyinov Logo" className="h-20 w-auto" />
          </Link>
            <div className="flex items-center">
            <button
              className="lg:hidden text-gray-200 hover:text-indigo-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>          <div className={`lg:flex items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-between lg:hidden py-2 mb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-700 dark:text-gray-200">Theme</span>
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
            </div>            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link>
            <div className="relative">              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
              >
                Services
              </button>
              <div className={`absolute ${isServicesOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 w-64 z-50 border border-gray-200 dark:border-gray-700 transition-colors duration-300`}>
                <ul className="py-2">                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.link} 
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>            </div>            <Link to="/team" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Team</Link>
            <Link to="/faq" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</Link>
            <Link to="/contact" className="bg-indigo-600 dark:bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors">Contact</Link>
            
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