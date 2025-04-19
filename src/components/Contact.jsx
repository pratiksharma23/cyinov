import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (    <div className="bg-gray-100 dark:bg-gray-900 py-10 sm:py-12 md:py-16 transition-colors duration-300">
      <ToastContainer theme="auto" />
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 dark:text-white transition-colors duration-200">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Google Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-gray-300/50 dark:shadow-black/20 p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-700 dark:text-indigo-300 transition-colors duration-200">Send us a Message</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-200">Please fill out the form below to get in touch with us:</p>
            
            {/* Embedded Google Form */}
            <div className="overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdZQEvuRjzG7Kq1wpBcAGr4l7NZCc5iEWgSXwNbnWGeKeN2mw/viewform?embedded=true" 
                width="100%" 
                height="500"
                style={{height: "clamp(450px, 70vh, 650px)"}}
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Contact Form"
                className="rounded-lg"
                loading="lazy"
              >
                Loading form...
              </iframe>
            </div>
          </div>
            {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-gray-300/50 dark:shadow-black/20 p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-700 dark:text-indigo-300 transition-colors duration-200">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-indigo-400 text-lg sm:text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200">Office Locations</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">Gurgaon, Delhi, Mumbai & Jaipur</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl flex-shrink-0 transition-colors duration-200" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200">Phone</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">
                      <a href="tel:+918800203969" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">+91 8800203969</a>
                    </p>
                  </div>
                </div>                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-lg sm:text-xl flex-shrink-0 transition-colors duration-200" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">
                      <a href="mailto:info@cyinov.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">info@cyinov.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-gray-300/50 dark:shadow-black/20 p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-indigo-700 dark:text-indigo-300 transition-colors duration-200">Connect With Us</h2>
              <div className="flex space-x-5 sm:space-x-6">
                <a href="https://www.linkedin.com/company/cyinovconsulting/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                   aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.instagram.com/cyinovconsulting" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                   aria-label="Instagram">
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61574960935041" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                   aria-label="Facebook">
                  <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>            {/* Additional Help Section */}
            <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-5 sm:p-6 md:p-8 border border-gray-700 transition-colors duration-200">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-indigo-300 transition-colors duration-200">Need Immediate Assistance?</h2>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 transition-colors duration-200">
                For urgent inquiries, please call our customer service line or send an email directly.
              </p>
              <p className="text-sm sm:text-base text-gray-300 transition-colors duration-200">
                We typically respond to all inquiries within 24-48 business hours.
              </p>
              <div className="mt-4 sm:mt-5 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <a href="tel:+918800203969" className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  <FaPhone className="mr-2" /> Call Us
                </a>
                <a href="mailto:info@cyinov.com" className="inline-flex items-center justify-center px-4 py-2 bg-transparent hover:bg-gray-700 border border-indigo-500 text-indigo-400 text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                  <FaEnvelope className="mr-2" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;