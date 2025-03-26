import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaBars, FaTimes, FaTrademark } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
      title: "Market Research",
      description: "In-depth market analysis and research solutions",
      link: "/services/market-research"
    },
    {
      icon: FaUsers,
      title: "Human Capital",
      description: "Strategic workforce management and development",
      link: "/services/human-capital"
    }
  ];

  return (
    <header className="bg-gray-500 shadow-lg shadow-gray-900/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Cyinov Logo" className="h-20 w-auto" />
          </Link>
          
          <button
            className="lg:hidden text-gray-200 hover:text-indigo-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>

          <div className={`lg:flex items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-gray-200 hover:text-indigo-400 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-200 hover:text-indigo-400 transition-colors">About</Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-gray-200 hover:text-indigo-400 focus:outline-none transition-colors"
              >
                Services
              </button>
              <div className={`absolute ${isServicesOpen ? 'block' : 'hidden'} bg-gray-800 shadow-lg rounded-lg mt-2 w-64 z-50 border border-gray-700`}>
                <ul className="py-2">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.link} 
                        className="block px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-indigo-400 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link to="/team" className="text-gray-200 hover:text-indigo-400 transition-colors">Team</Link>
            <Link to="/faq" className="text-gray-200 hover:text-indigo-400 transition-colors">FAQ</Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;