import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineScale, HiOutlineChartBar } from 'react-icons/hi';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { BsPeople, BsBuilding, BsEye } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import Testimonials from './Testimonials';

// Import background images
import heroBg from '../assets/hero-bg.jpg';
import teamBg from '../assets/team.jpeg';
import companyBg from '../assets/company.jpeg';
import visionBg from '../assets/vision.jpeg';
import servicesBg from '../assets/services.jpg';
import marketBg from '../assets/market.jpg';
import legalBg from '../assets/legal.jpg';
import taxBg from '../assets/tax.jpg';
import humanCapitalBg from '../assets/hcm.jpg';

const defaultHeroContent = {
  id: 'default',
  title: "Welcome to Cyinov Consulting",
  description: "Empowering businesses with innovative solutions and strategic excellence",
  background: heroBg,
  buttonText: "Explore Our Services"
};

const heroContent = [
  {
    id: 'company',
    title: "Leading Business Transformation",
    description: "Cyinov Consulting - Your trusted partner in navigating the complexities of modern business landscape",
    background: companyBg,
    icon: BsBuilding,
    buttonText: "Our Company"
  },
  {
    id: 'team',
    title: "Expert Team, Exceptional Results",
    description: "Meet our diverse team of industry experts committed to your success",
    background: teamBg,
    icon: BsPeople,
    buttonText: "Our Team"
  },
  {
    id: 'vision',
    title: "Shaping Tomorrow's Success",
    description: "Driving innovation and excellence through strategic partnerships and forward-thinking solutions",
    background: visionBg,
    icon: BsEye,
    buttonText: "Our Vision"
  },
  {
    id: 'services',
    title: "Comprehensive Business Solutions",
    description: "Tailored services to meet your unique business challenges and opportunities",
    background: servicesBg,
    icon: HiOutlineChartBar,
    buttonText: "Our Services"
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

  const handleSectionChange = (sectionId) => {
    if (sectionId !== activeSection) {
      setIsTransitioning(true);
      setPrevSection(activeSection);
      setActiveSection(sectionId);
      setTimeout(() => setIsTransitioning(false), 500);
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
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 
            transition-opacity duration-700" />
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
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 
              transition-opacity duration-700" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative h-full z-10">
          <div className="container mx-auto px-4 h-full flex flex-col justify-between py-16">
            {/* Main Hero Content */}
            <div className="text-center mt-32">
              <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-700
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentContent.title}
              </h1>
              <p className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-700
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {currentContent.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-indigo-700 text-white px-8 py-3 rounded-full 
                  text-lg font-semibold hover:bg-indigo-600 hover:scale-105 transform 
                  transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Get Started
              </Link>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
              {heroContent.map((content) => (
                <button
                  key={content.id}
                  onClick={() => handleSectionChange(content.id)}
                  className={`group p-4 rounded-lg transition-all duration-300 backdrop-blur-sm
                    ${content.id === activeSection 
                      ? 'bg-indigo-900/50 border-b-2 border-indigo-400' 
                      : 'bg-black/60 hover:bg-indigo-900/30'}`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <content.icon className={`text-2xl 
                      ${content.id === activeSection ? 'text-indigo-300' : 'text-gray-300'}`} />
                    <span className={`text-sm md:text-base font-medium 
                      ${content.id === activeSection ? 'text-white' : 'text-gray-300'}`}>
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
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
                    group-hover:from-indigo-900/90 group-hover:via-indigo-900/70 group-hover:to-black/50 
                    transition-all duration-300" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-6 transform transition-transform duration-300 
                      group-hover:scale-110 group-hover:translate-y-[-10px]">
                      <service.icon className="text-5xl text-indigo-300 group-hover:text-indigo-200" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md
                      transform transition-all duration-300 group-hover:translate-y-[-10px]">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 transform transition-all duration-300 
                      group-hover:translate-y-[-10px] text-base leading-relaxed drop-shadow-md">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-indigo-300 font-semibold 
                      opacity-0 transform translate-y-4 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-indigo-200">
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

      <Testimonials />
    </>
  );
};

export default Hero;