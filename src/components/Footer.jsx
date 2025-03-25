import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
              <p>123 Business Avenue, Suite 100, New York, NY 10001</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-400 flex-shrink-0" />
              <p>+1 (234) 567-8900</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-400 flex-shrink-0" />
              <a href="mailto:contact@cyinov.com" className="hover:text-blue-400 transition-colors">
                contact@cyinov.com
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Cyinov Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;