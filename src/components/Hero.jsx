import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineScale, HiOutlineChartBar } from 'react-icons/hi';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { BsPeople, BsBuilding, BsEye } from 'react-icons/bs';
import { FaArrowRight, FaCogs, FaGlobe } from 'react-icons/fa';
import Testimonials from './Testimonials';

// Import background images
import heroBg from '../assets/hero-bg.jpg';
import teamBg from '../assets/OurTeam.jpg';
import companyBg from '../assets/OurCompany.jpg';
import visionBg from '../assets/OurVision.jpg';
import servicesBg from '../assets/OurServices.jpg';
import marketBg from '../assets/market.jpg';
import legalBg from '../assets/legal.jpg';
import taxBg from '../assets/tax.jpg';
import humanCapitalBg from '../assets/hcm.jpg';
import industryExpertiseImg from '../assets/IndustryExpertise.jpg';

const defaultHeroContent = {
  id: 'default',
  title: "Welcome to Cyinov Consulting",
  description: "Empowering businesses with innovative solutions and strategic excellence",
  background: heroBg,
  buttonText: "Explore Our Services"
};

const standards = [
  "ISO-aligned Processes",
  "Industry-specific Frameworks",
  "Global Compliance Standards",
  "Sustainable Business Practices"
];

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
  const [activeSection, setActiveSection] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevSection, setPrevSection] = useState('default');

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
      title: "Market & Product Research",
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

  // Function to handle scrolling to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionChange = (sectionId) => {
    if (sectionId !== activeSection) {
      setIsTransitioning(true);
      setPrevSection(activeSection);
      setActiveSection(sectionId);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleButtonClick = () => {
    if (activeSection === 'services') {
      scrollToServices();
    }
  };

  const getCurrentContent = () => {
    if (activeSection === 'default') return defaultHeroContent;
    return heroContent.find(content => content.id === activeSection) || defaultHeroContent;
  };

  const currentContent = getCurrentContent();
  return (
    <>
      <div className="relative h-screen">
        {/* Default Background Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out
            ${activeSection === 'default' ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${defaultHeroContent.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: activeSection === 'default' ? 1 : 0
          }}
        >          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 dark:from-black/85 dark:via-black/75 dark:to-black/90 
            transition-all duration-700" />
        </div>

        {/* Section Background Images */}
        {heroContent.map((content) => (
          <div
            key={content.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out
              ${content.id === activeSection ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${content.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: content.id === activeSection ? 1 : 
                     content.id === prevSection ? 0 : -1
            }}
          >            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 dark:from-black/85 dark:via-black/75 dark:to-black/90 
              transition-all duration-700" />
          </div>
        ))}        {/* Hero Content */}
        <div className="relative h-full z-10">
          <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-between py-12 md:py-16">
            {/* Main Hero Content */}
            <div className="text-center mt-20 sm:mt-24 md:mt-32">
              <h1 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white mb-4 sm:mb-6 transition-all duration-700 px-2
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentContent.title}
              </h1>
              <p className={`text-lg xs:text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto transition-all duration-700 px-4
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentContent.description}
              </p>
                {activeSection === 'default' ? (
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
                    text-base sm:text-lg font-semibold hover:scale-105 transform w-auto min-w-[160px]
                    transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Started
                </Link>
              ) : activeSection === 'services' ? (
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
                    text-base sm:text-lg font-semibold hover:scale-105 transform w-auto min-w-[160px]
                    transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {currentContent.buttonText}
                </button>
              ) : (
                <Link
                  to={currentContent.link}
                  className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
                    text-base sm:text-lg font-semibold hover:scale-105 transform w-auto min-w-[160px]
                    transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {currentContent.buttonText}
                </Link>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
              {heroContent.map((content) => (
                <button
                  key={content.id}
                  onClick={() => handleSectionChange(content.id)}
                  className={`group p-4 rounded-lg transition-all duration-300 backdrop-blur-sm
                    ${content.id === activeSection 
                      ? 'dark:bg-blue-900/50 dark:border-blue-400 bg-blue-600/20 border-blue-500' 
                      : 'dark:bg-black/60 dark:hover:bg-blue-900/30 bg-black/20 hover:bg-blue-600/10'} 
                    border-b-2 ${content.id === activeSection ? '' : 'border-transparent'}`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <content.icon className={`text-2xl 
                      ${content.id === activeSection 
                        ? 'dark:text-blue-300 text-blue-500' 
                        : 'dark:text-gray-300 text-gray-600'}`} />
                    <span className={`text-sm md:text-base font-medium 
                      ${content.id === activeSection 
                        ? 'dark:text-white text-gray-800' 
                        : 'dark:text-gray-300 text-gray-600'}`}>
                      {content.buttonText}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Our Services</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className="group relative overflow-hidden rounded-xl border border-gray-800"
              >
                <div 
                  className="relative h-[400px] w-full overflow-hidden rounded-xl"
                  style={{
                    backgroundImage: `url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t 
                    from-black/90 via-black/75 to-black/45 
                    group-hover:from-blue-900/90 group-hover:via-blue-900/70 group-hover:to-black/50 
                    transition-all duration-300" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-6 transform transition-transform duration-300 
                      group-hover:scale-110 group-hover:translate-y-[-10px]">
                      <service.icon className="text-5xl text-blue-300 group-hover:text-blue-200" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md
                      transform transition-all duration-300 group-hover:translate-y-[-10px]">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 transform transition-all duration-300 
                      group-hover:translate-y-[-10px] text-base leading-relaxed drop-shadow-md">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-blue-300 font-semibold 
                      opacity-0 transform translate-y-4 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-blue-200">
                      <span className="mr-2">Learn More</span>
                      <FaArrowRight className="transition-transform duration-300 
                        group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Expertise Section */}
      <section className="py-20 bg-grey">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-100 mb-8">Industry Expertise</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Manufacturing and Industrial",
                  "Technology and Software",
                  "Healthcare and Pharmaceuticals",
                  "Retail and E-commerce",
                  "Financial Services",
                  "Real Estate and Infrastructure",
                  "Education and Training"
                ].map((industry, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-700">
                    <div className="text-blue-400 mb-2">
                      <FaCogs className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-100">{industry}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={industryExpertiseImg} alt="Industry Expertise" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-black/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Best Practices */}
              <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-12">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">Global Best Practices</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {standards.map((standard, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                        <FaGlobe className="w-8 h-8 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-lg text-gray-800 dark:text-gray-200">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
      
      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Partner with Cyinov Consulting and unlock your organization's full potential with our comprehensive business solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-blue-800 px-8 py-4 rounded-full 
                font-bold text-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Schedule a Consultation
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full 
                font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* <Testimonials /> */}
    </>
  );
};

export default Hero;