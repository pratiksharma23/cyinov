import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Cyinov</h3>
            <p className="text-gray-600 dark:text-gray-400">Empowering businesses with innovative solutions</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
            <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/legal-compliance" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Legal Compliance</Link></li>
              <li><Link to="/services/tax-advisory" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Tax Advisory</Link></li>
              <li><Link to="/services/market-research" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Market & Product Research</Link></li>
              <li><Link to="/services/human-capital" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Human Capital</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574960935041" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors"><FaFacebook size={24} /></a>
              <a href="https://www.linkedin.com/company/cyinovconsulting" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors"><FaLinkedin size={24} /></a>
              <a href="https://www.instagram.com/cyinovconsulting" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
          <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">          <p className="mb-2 text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Cyinov. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;