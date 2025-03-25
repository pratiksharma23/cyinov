import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Cyinov
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <div className="relative group">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div
                  className="absolute left-0 mt-2 w-80 bg-white border rounded-lg shadow-xl py-2"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <service.icon className="w-5 h-5 mr-3 text-blue-600" />
                        <div>
                          <div className="font-medium text-gray-900">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/team" className="text-gray-600 hover:text-gray-900">Team</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-900">Home</Link>
            <div>
              <button
                className="w-full flex justify-between items-center py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="block py-2 text-gray-600 hover:text-gray-900"
                    >
                      <div className="flex items-center">
                        <service.icon className="w-5 h-5 mr-3 text-blue-600" />
                        {service.title}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/team" className="block py-2 text-gray-600 hover:text-gray-900">Team</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;