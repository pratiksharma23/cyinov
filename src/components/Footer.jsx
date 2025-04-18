import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cyinov</h3>
            <p className="text-gray-400">Empowering businesses with innovative solutions</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Our Team</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/legal-compliance" className="text-gray-400 hover:text-white">Legal Compliance</Link></li>
              <li><Link to="/services/tax-advisory" className="text-gray-400 hover:text-white">Tax Advisory</Link></li>
              <li><Link to="/services/market-research" className="text-gray-400 hover:text-white">Market & Product Research</Link></li>
              <li><Link to="/services/human-capital" className="text-gray-400 hover:text-white">Human Capital</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574960935041" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="https://www.linkedin.com/company/cyinovconsulting" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
              <a href="https://www.instagram.com/cyinovconsulting" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cyinov. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;