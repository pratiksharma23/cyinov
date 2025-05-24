import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineScale, HiOutlineChartBar } from 'react-icons/hi';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { BsPeople, BsBuilding, BsEye } from 'react-icons/bs';
import { FaArrowRight, FaCogs, FaGlobe, FaRegLightbulb } from 'react-icons/fa';
import Testimonials from './Testimonials';

// Import background images
import teamBg from '../assets/OurTeam.jpg';
import companyBg from '../assets/OurCompany.jpg';
import visionBg from '../assets/OurVision.jpg';
import servicesBg from '../assets/OurServices.jpg';
import marketBg from '../assets/market.jpg';
import legalBg from '../assets/legal.jpg';
import taxBg from '../assets/tax.jpg';
import humanCapitalBg from '../assets/hcm.jpg';
import industryExpertiseImg from '../assets/IndustryExpertise.png';

// Default hero content
const defaultHeroContent = {
  id: 'default',
  title: "Welcome to Cyinov Consulting",
  description: "Empowering businesses with innovative solutions and strategic excellence",
  background: companyBg,
  buttonText: "Explore Our Services"
};

// Global standards list
const standards = [
  "ISO-aligned Processes",
  "Industry-specific Frameworks",
  "Global Compliance Standards",
  "Sustainable Business Practices"
];

// Hero content sections
const heroContent = [
  {
    id: 'company',
    title: "Leading Business Transformation",
    description: "Cyinov Consulting - Your trusted partner in navigating the complexities of modern business landscape",
    background: companyBg,
    icon: BsBuilding,
    buttonText: "Our Company",
    link: "/about"
  },
  {
    id: 'team',
    title: "Expert Team, Exceptional Results",
    description: "Meet our diverse team of industry experts committed to your success",
    background: teamBg,
    icon: BsPeople,
    buttonText: "Our Team",
    link: "/team"
  },
  {
    id: 'vision',
    title: "Shaping Tomorrow's Success",
    description: "Driving innovation and excellence through strategic partnerships and forward-thinking solutions",
    background: visionBg,
    icon: BsEye,
    buttonText: "Our Vision",
    link: "/about"
  },
  {
    id: 'services',
    title: "Comprehensive Business Solutions",
    description: "Tailored services to meet your unique business challenges and opportunities",
    background: servicesBg,
    icon: HiOutlineChartBar,
    buttonText: "Our Services",
    link: "#services"
  }
];

const Hero = () => {
  // State management with performance optimizations
  const [activeSection, setActiveSection] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevSection, setPrevSection] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  
  // Service definitions
  const services = [
    {
      icon: HiOutlineScale,
      title: "Legal Compliance",
      description: "Comprehensive legal and regulatory compliance solutions",
      link: "/services/legal-compliance",
      bgImage: legalBg
    },
    {
      icon: RiMoneyRupeeCircleLine,
      title: "Tax Advisory",
      description: "Expert tax planning and advisory services",
      link: "/services/tax-advisory",
      bgImage: taxBg
    },
    {
      icon: HiOutlineChartBar,
      title: "Market Research",
      description: "In-depth market analysis and research solutions",
      link: "/services/market-research",
      bgImage: marketBg
    },
    {
      icon: BsPeople,
      title: "Human Capital",
      description: "Strategic workforce management and development",
      link: "/services/human-capital",
      bgImage: humanCapitalBg
    }
  ];

  // Initialize animations after component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Preload background images for smoother transitions
    heroContent.forEach(content => {
      const img = new Image();
      img.src = content.background;
    });
    
    return () => setIsVisible(false);
  }, []);

  // Smooth scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle section changes with improved transition
  const handleSectionChange = (sectionId) => {
    if (sectionId !== activeSection) {
      setIsTransitioning(true);
      setPrevSection(activeSection);
      setActiveSection(sectionId);
      
      // Reset transition state after animation completes
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  // Get current content based on active section
  const getCurrentContent = () => {
    if (activeSection === 'default') return defaultHeroContent;
    return heroContent.find(content => content.id === activeSection) || defaultHeroContent;
  };

  const currentContent = getCurrentContent();
  
  return (
    <>
      {/* Corzo-style Hero Section with full height */}
      <section 
        ref={heroRef}
        className="relative hero-section flex flex-col"
        aria-label="Hero section"
      >
        {/* Default Background Image with optimized loading */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out
            ${activeSection === 'default' ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${defaultHeroContent.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: activeSection === 'default' ? 1 : 0
          }}
          aria-hidden={activeSection !== 'default'}
        >
          {/* Gradient overlay with improved mobile contrast - using Corzo's darker overlay */}
          <div className="hero-overlay" />
        </div>

        {/* Section Background Images with improved transitions */}
        {heroContent.map((content) => (
          <div
            key={content.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out
              ${content.id === activeSection ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${content.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: content.id === activeSection ? 1 : 
                     content.id === prevSection ? 0 : -1
            }}
            aria-hidden={content.id !== activeSection}
          >
            {/* Gradient overlay - using Corzo's darker overlay */}
            <div className="hero-overlay" />
          </div>
        ))}        

        {/* Hero Content - bottom aligned approach */}
        <div className="relative min-h-[100vh] z-10 pb-8 flex flex-col justify-end">
          <div className="container mx-auto">
            {/* Main Hero Content - improved animation and accessibility */}
            <div className={`flex flex-col items-center text-center transition-opacity duration-1000 ease-out mb-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Title using Corzo-style typography */}
              <h1 className={`hero-title transition-all duration-700
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentContent.title}
              </h1>
              
              {/* Description with Corzo styling */}
              <p className={`hero-subtitle transition-all duration-700
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentContent.description}
              </p>
            </div>

            {/* Corzo-style Numbered Navigation - bottom aligned */}
            <div className="w-full">
              <div className="grid grid-cols-4 gap-3 md:gap-6 w-full">
                {heroContent.map((content, index) => (
                  <button
                    key={content.id}
                    onClick={() => handleSectionChange(content.id)}
                    className={`flex flex-col items-center justify-center text-center px-4 py-3 border border-white/20 rounded-md backdrop-blur-subtle transition-all duration-300
                      ${content.id === activeSection 
                        ? 'bg-primary-600/90 border-primary-500' 
                        : 'bg-neutral-900/30 hover:bg-white/10'}`}
                    aria-label={`View ${content.buttonText} section`}
                    aria-pressed={content.id === activeSection}
                  >
                    <span className="text-white font-medium">{content.buttonText}</span>
                  </button>
                ))}
              </div>
              
              {/* Moved CTA button to the bottom */}
              <div className="mt-6 text-center">
                {activeSection === 'default' ? (
                  <Link
                    to="/contact"
                    className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white shadow-medium hover:shadow-lg group focus-visible:ring-blue-500"
                    aria-label="Get Started with Cyinov Consulting"
                  >
                    <span>Get Started</span>
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : activeSection === 'services' ? (
                  <button
                    onClick={scrollToServices}
                    className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white shadow-medium hover:shadow-lg group focus-visible:ring-blue-500"
                    aria-label={`View ${currentContent.buttonText}`}
                  >
                    <span>{currentContent.buttonText}</span>
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link
                    to={currentContent.link}
                    className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white shadow-medium hover:shadow-lg group focus-visible:ring-blue-500"
                    aria-label={`Learn about ${currentContent.buttonText}`}
                  >
                    <span>{currentContent.buttonText}</span>
                    <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - improved spacing and card layout */}
      <section id="services" className="section-padding bg-surface-50 dark:bg-neutral-900">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="badge badge-primary uppercase tracking-wider mb-4">Our Expertise</span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-4 tracking-tight">Our Services</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto text-balance">
              Comprehensive business solutions tailored to your needs
            </p>
          </div>
          
          {/* Services grid - improved mobile layout */}
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Expertise Section - improved responsive layout */}
      <section className="section-padding bg-white dark:bg-surface-800">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Content area - 3/5 width on desktop */}
            <div className="md:col-span-3">
              <span className="badge badge-primary uppercase tracking-wider mb-4">Expertise</span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-6 tracking-tight">Industry Expertise</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Our specialized knowledge spans across various industries, allowing us to provide targeted insights and solutions that address your specific sector challenges.
              </p>
              
              {/* Industry grid - improved hover effects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Manufacturing and Industrial",
                  "Technology and Software",
                  "Healthcare and Pharmaceuticals",
                  "Retail and E-commerce",
                  "Financial Services",
                  "Real Estate and Infrastructure",
                  "Education and Training"
                ].map((industry, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg shadow-subtle hover:shadow-medium transition-all duration-250 hover:-translate-y-1 hover:bg-white dark:hover:bg-neutral-800/80 group"
                  >
                    <div className="mr-3 text-primary-500 dark:text-primary-400 transition-all duration-250">
                      <FaCogs className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image area - 2/5 width on desktop */}
            <div className="relative md:col-span-2">
              <div className="aspect-w-16 aspect-h-9 md:aspect-w-9 md:aspect-h-12 rounded-xl overflow-hidden shadow-medium">
                <img 
                  src={industryExpertiseImg} 
                  alt="Industry Expertise at Cyinov" 
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                  width="600"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 to-transparent"></div>
              </div>
              
              {/* Floating info card - improved animation */}
              <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-6 md:p-8 animate-fade-in-up">
                <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-medium p-4 md:p-6 rounded-lg shadow-medium border border-neutral-200/30 dark:border-neutral-700/30">
                  <h3 className="text-lg md:text-xl font-display font-medium text-neutral-900 dark:text-white mb-2">Specialized Knowledge</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">Our experts bring industry-specific insights to every project, ensuring solutions aligned with your sector's unique needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Best Practices - improved card design */}
      <section className="section-padding bg-surface-50 dark:bg-neutral-900">
        <div className="container">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="badge badge-primary uppercase tracking-wider mb-4">Standards</span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-4 tracking-tight">Global Best Practices</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
              We adhere to international standards to ensure quality and consistency
            </p>
          </div>
          
          {/* Standards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {standards.map((standard, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-soft hover:-translate-y-1 hover:shadow-medium transition-all duration-300 group card-hoverable"
              >
                <div className="mb-5 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="text-neutral-900 dark:text-neutral-200 text-lg text-center font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - improved layout and accessibility */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">Ready to Transform Your Business?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto text-balance">
              Partner with Cyinov Consulting and unlock your organization's full potential with our comprehensive business solutions tailored to your unique needs.
            </p>
            
            {/* Responsive button layout */}
            <div className="flex flex-col xs:flex-row justify-center gap-4 xs:gap-6">
              <Link 
                to="/contact" 
                className="btn btn-lg bg-white text-blue-600 hover:bg-neutral-50 shadow-soft hover:shadow-medium group focus-visible:ring-white"
                aria-label="Schedule a consultation with Cyinov"
              >
                <span>Schedule a Consultation</span>
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="btn btn-lg bg-transparent border border-white/80 text-white hover:bg-white/10 transition-all focus-visible:ring-white"
                aria-label="Explore Cyinov's services"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Corzo-style Service Card Component with numbered sections
const ServiceCard = ({ service, index }) => {
  // Add staggered animation delay based on index
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <Link 
      to={service.link} 
      className="service-card-with-image group card-hoverable"
      aria-label={`Learn about ${service.title}`}
      style={{ animationDelay }}
    >
      {/* Image section with Corzo-style aspect ratio */}
      <div className="service-card-image">
        {/* Image with lazy loading */}
        <img 
          src={service.bgImage} 
          alt={`${service.title} service`}
          loading="lazy"
          width="400"
          height="500"
        />
        
        {/* Gradient overlay */}
        <div className="service-card-image-overlay" />
      </div>
      
      {/* Corzo-style Content section */}
      <div className="service-card-content">
        {/* Numbered section like Corzo */}
        <div className="service-card-number">0{index + 1}</div>
        
        {/* Title with Corzo styling */}
        <h3 className="service-card-title">
          {service.title}
        </h3>
        
        {/* Description with Corzo styling */}
        <p className="service-card-description">
          {service.description}
        </p>
        
        {/* Learn more link with Corzo styling */}
        <div className="service-card-link">
          <span>Learn More</span>
          <FaArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default Hero;
