import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-8 sm:py-10 md:py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white transition-colors duration-200">Cyinov</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-200">Empowering businesses with innovative solutions</p>
          </div>
            <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white transition-colors duration-200">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link to="/" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/faq" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
            <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white transition-colors duration-200">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link to="/services/legal-compliance" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Legal Compliance</Link></li>
              <li><Link to="/services/tax-advisory" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Tax Advisory</Link></li>
              <li><Link to="/services/market-research" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Market Research</Link></li>
              <li><Link to="/services/human-capital" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Human Capital</Link></li>
              <li><Link to="/services/trademark" className="text-sm sm:text-base inline-block py-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors">Trademark</Link></li>
            </ul>
          </div>
            <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white transition-colors duration-200">Connect With Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574960935041" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                 aria-label="Facebook">
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/company/cyinovconsulting" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full" 
                 aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.instagram.com/cyinovconsulting" 
                 className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full"
                 aria-label="Instagram">
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-600 dark:text-gray-400 transition-colors duration-200">
          <p className="mb-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-200">&copy; {new Date().getFullYear()} Cyinov. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2">
            <Link to="/privacy-policy" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors py-1 px-2">Privacy Policy</Link>
            <span className="text-gray-400 dark:text-gray-600 hidden sm:inline">|</span>
            <Link to="/terms-of-service" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors py-1 px-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;