import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 py-12 sm:py-16 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Information */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-display font-medium text-neutral-900 dark:text-white mb-4">Cyinov</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
              Empowering businesses with innovative solutions and strategic excellence to navigate the complexities of the modern business landscape.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="https://www.facebook.com/profile.php?id=61574960935041" aria-label="Facebook">
                <FaFacebook className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/cyinovconsulting" aria-label="LinkedIn">
                <FaLinkedin className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/cyinovconsulting" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Our Team', path: '/team' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <FooterLink key={index} to={link.path}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5">
              {[
                { name: 'Legal Compliance', path: '/services/legal-compliance' },
                { name: 'Tax Advisory', path: '/services/tax-advisory' },
                { name: 'Market Research', path: '/services/market-research' },
                { name: 'Human Capital', path: '/services/human-capital' },
                { name: 'Trademark', path: '/services/trademark' }
              ].map((service, index) => (
                <FooterLink key={index} to={service.path}>{service.name}</FooterLink>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="space-y-3">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Have questions or need assistance with your business needs?
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-250"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-10 sm:mt-14 pt-8 text-center">
          <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Cyinov. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-2">
            <Link to="/privacy-policy" className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Reusable Footer Components
const FooterHeading = ({ children }) => (
  <h4 className="text-base font-display font-medium text-neutral-900 dark:text-white mb-4">
    {children}
  </h4>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="inline-block text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-250"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, children, ...props }) => (
  <a 
    href={href}
    className="flex items-center justify-center w-8 h-8 bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 rounded-full shadow-subtle hover:shadow-soft hover:translate-y-[-2px] transition-all duration-250"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
);

export default Footer;
