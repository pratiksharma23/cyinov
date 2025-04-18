import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <div className="bg-gray-900 py-16">
      <ToastContainer theme="dark" />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Form */}
          <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Send us a Message</h2>
            <p className="text-gray-300 mb-4">Please fill out the form below to get in touch with us:</p>
            
            {/* Embedded Google Form */}
            <div className="overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdZQEvuRjzG7Kq1wpBcAGr4l7NZCc5iEWgSXwNbnWGeKeN2mw/viewform?embedded=true" 
                width="100%" 
                height="650" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Contact Form"
                className="rounded-lg"
              >
                Loading form...
              </iframe>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-indigo-400 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-100">Office Locations</h3>
                    <p className="text-gray-300">Gurgaon, Delhi, Mumbai & Jaipur</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-indigo-400 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-100">Phone</h3>
                    <p className="text-gray-300">+91 8800203969</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-indigo-400 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-100">Email</h3>
                    <p className="text-gray-300">info@cyinov.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Connect With Us</h2>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/company/cyinovconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/cyinovconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61574960935041" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>

            {/* Additional Help Section */}
            <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Need Immediate Assistance?</h2>
              <p className="text-gray-300 mb-4">
                For urgent inquiries, please call our customer service line or send an email directly.
              </p>
              <p className="text-gray-300">
                We typically respond to all inquiries within 24-48 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;