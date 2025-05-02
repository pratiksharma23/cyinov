import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <ToastContainer theme="auto" />
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Have questions or need assistance? We're here to help you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 transition-colors duration-250">
            <h2 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 dark:text-white mb-6">Send us a Message</h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6">
              Please fill out the form below to get in touch with us:
            </p>
            
            {/* Embedded Google Form */}
            <div className="overflow-hidden rounded-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdZQEvuRjzG7Kq1wpBcAGr4l7NZCc5iEWgSXwNbnWGeKeN2mw/viewform?embedded=true" 
                width="100%" 
                height="500"
                style={{height: "clamp(450px, 70vh, 600px)"}}
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
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 transition-colors duration-250">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 dark:text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactItem 
                  icon={<FaMapMarkerAlt className="text-primary-500 text-lg sm:text-xl" />}
                  title="Office Locations"
                  content="Gurgaon, Delhi, Mumbai & Jaipur"
                />
                
                <ContactItem 
                  icon={<FaPhone className="text-primary-500 text-lg sm:text-xl" />}
                  title="Phone"
                  content={
                    <a 
                      href="tel:+918800203969" 
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +91 8800203969
                    </a>
                  }
                />
                
                <ContactItem 
                  icon={<FaEnvelope className="text-primary-500 text-lg sm:text-xl" />}
                  title="Email"
                  content={
                    <a 
                      href="mailto:info@cyinov.com" 
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      info@cyinov.com
                    </a>
                  }
                />
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700 transition-colors duration-250">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 dark:text-white mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <SocialLink 
                  href="https://www.linkedin.com/company/cyinovconsulting/" 
                  icon={<FaLinkedin className="w-5 h-5" />}
                  label="LinkedIn"
                />
                <SocialLink 
                  href="https://www.instagram.com/cyinovconsulting" 
                  icon={<FaInstagram className="w-5 h-5" />}
                  label="Instagram"
                />
                <SocialLink 
                  href="https://www.facebook.com/profile.php?id=61574960935041" 
                  icon={<FaFacebook className="w-5 h-5" />}
                  label="Facebook"
                />
              </div>
            </div>
            
            {/* Immediate Assistance */}
            <div className="bg-primary-600 dark:bg-primary-700 rounded-lg shadow-soft p-6 sm:p-8 text-white transition-colors duration-250">
              <h2 className="text-xl sm:text-2xl font-display font-medium text-white mb-4">Need Immediate Assistance?</h2>
              <p className="text-white/90 mb-4">
                For urgent inquiries, please call our customer service line or send an email directly.
              </p>
              <p className="text-white/90 mb-6">
                We typically respond to all inquiries within 24-48 business hours.
              </p>
              <div className="flex flex-col xs:flex-row gap-3">
                <a 
                  href="tel:+918800203969" 
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-white text-primary-600 font-medium rounded-lg transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
                >
                  <FaPhone className="mr-2 w-4 h-4" /> Call Us
                </a>
                <a 
                  href="mailto:info@cyinov.com" 
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-transparent hover:bg-primary-700/50 border border-white text-white font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
                >
                  <FaEnvelope className="mr-2 w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper components
const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-3">{icon}</div>
    <div>
      <h3 className="font-medium text-neutral-900 dark:text-white mb-1">{title}</h3>
      <div className="text-neutral-600 dark:text-neutral-400">{content}</div>
    </div>
  </div>
);

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-800/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-250"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;