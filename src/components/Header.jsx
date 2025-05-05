import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaCalculator, FaChartLine, FaUsers, FaTrademark } from 'react-icons/fa';
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../assets/logo.png';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  
  // Reference to the dropdown container and mobile menu
  const servicesDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Effect to handle scrolling with debounce for performance
  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      // Clear the timeout if it has already been set
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set a timeout to update the state after 50ms of no scrolling
      timeoutId = setTimeout(() => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    }

    // Add event listener when dropdown is open
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);
  
  // Effect to handle mobile menu overlay body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  // Effect to close mobile menu on route change
  useEffect(() => {
    return () => {
      setIsMenuOpen(false);
    };
  }, []);

  // Handle escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isServicesOpen) {
          setIsServicesOpen(false);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isServicesOpen, isMenuOpen]);

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
    },
    {
      icon: FaTrademark,
      title: "Trademark",
      description: "Trademark registration and protection services",
      link: "/services/trademark"
    }
  ];
  
  return (
    <header 
      className={`fixed w-full top-0 z-header transition-all duration-300 safe-top ${
        isScrolled 
        ? 'bg-white/90 backdrop-blur-medium shadow-soft dark:bg-neutral-900/90' 
        : 'bg-white/20 backdrop-blur-subtle dark:bg-neutral-900/20'
      }`}
      aria-label="Site header"
    >
      <nav className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 h-18 sm:h-22 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center relative z-20 -ml-2" 
          aria-label="Cyinov home page"
        >
          <div className="p-2 flex items-center focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg outline-none">
            <img 
              src={logo} 
              alt="Cyinov Logo" 
              className="h-10 sm:h-12 w-auto" 
              width="320" 
              height="80" 
            />
          </div>
        </Link>
        
        {/* Mobile menu button with improved touch target */}
        <button
          className="mobile-nav-toggle group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-100/80 dark:bg-surface-800/60 backdrop-blur-subtle group-hover:bg-surface-200 dark:group-hover:bg-surface-700 transition-colors">
            {isMenuOpen ? (
              <FiX className="text-2xl text-neutral-700 dark:text-neutral-200" />
            ) : (
              <FiMenu className="text-2xl text-neutral-700 dark:text-neutral-200" />
            )}
          </div>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          
          {/* Services dropdown - desktop */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onKeyDown={(e) => e.key === 'Enter' && setIsServicesOpen(!isServicesOpen)}
              className="flex items-center px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <FiChevronDown 
                className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {/* Desktop dropdown menu with improved animation */}
            <div 
              className={`absolute left-0 top-full mt-1 w-64 rounded-lg overflow-hidden bg-white dark:bg-neutral-800 shadow-medium border border-neutral-200/80 dark:border-neutral-700/50 transition-all duration-200 origin-top-left
                ${isServicesOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
              aria-hidden={!isServicesOpen}
              role="menu"
            >
              <ul className="py-1">
                {services.map((service, index) => (
                  <li key={index} role="none">
                    <Link 
                      to={service.link} 
                      className="flex items-center px-4 py-2.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors outline-none focus-visible:bg-neutral-100 focus-visible:dark:bg-neutral-700 focus-visible:text-primary-600 focus-visible:dark:text-primary-400"
                      onClick={() => setIsServicesOpen(false)}
                      role="menuitem"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <service.icon className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">{service.description}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <NavLink to="/why-choose-us">Why Choose Us</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          
          {/* Contact button */}
          <Link 
            to="/contact" 
            className="ml-2 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Contact
          </Link>
          
          {/* Theme toggle - desktop */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="ml-2 p-2.5 rounded-full bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 text-neutral-700 dark:text-neutral-200 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          >
            {isDark ? (
              <FiSun className="w-5 h-5 text-amber-400" />
            ) : (
              <FiMoon className="w-5 h-5 text-primary-600" />
            )}
          </button>
        </div>
        
        {/* Mobile navigation overlay */}
        <div 
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`fixed inset-0 z-10 bg-white dark:bg-neutral-900 transition-all duration-300 md:hidden ${
            isMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          {/* Mobile menu content */}
          <div className="h-full flex flex-col pt-20 pb-6 px-6 overflow-y-auto">
            {/* Theme toggle - mobile */}
            <div className="flex items-center justify-between py-4 mb-4 border-b border-neutral-200 dark:border-neutral-800">
              <span className="text-neutral-700 dark:text-neutral-300 font-medium">Theme</span>
              <button
                onClick={toggleTheme}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 text-amber-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-primary-600" />
                )}
              </button>
            </div>
            
            {/* Navigation links */}
            <nav className="flex flex-col space-y-1.5">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              
              {/* Mobile services section */}
              <div className="py-2">
                <div className="mb-2 px-4 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Services
                </div>
                <ul className="space-y-1">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.link} 
                        className="flex items-center px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mr-3">
                          <service.icon className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <div className="font-medium">{service.title}</div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{service.description}</div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <MobileNavLink to="/why-choose-us" onClick={() => setIsMenuOpen(false)}>
                Why Choose Us
              </MobileNavLink>
              <MobileNavLink to="/team" onClick={() => setIsMenuOpen(false)}>
                Team
              </MobileNavLink>
              <MobileNavLink to="/faq" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </MobileNavLink>
            </nav>
            
            {/* Mobile contact button */}
            <div className="mt-auto pt-6">
              <Link 
                to="/contact" 
                className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-soft hover:shadow-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Desktop NavLink component
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
  >
    {children}
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-3 text-sm font-medium text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
