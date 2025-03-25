import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Cyinov
          </Link>
          
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`lg:flex items-center gap-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600">Team</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;