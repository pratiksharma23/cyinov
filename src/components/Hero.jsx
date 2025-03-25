import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineScale, HiOutlineChartBar } from 'react-icons/hi';
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { BsPeople, BsBuilding, BsEye } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
import Testimonials from './Testimonials';

// Import background images
import heroBg from '../assets/hero-bg.jpeg';
import teamBg from '../assets/team-hero.jpg';
import aboutBg from '../assets/about-hero.jpg';
import marketBg from '../assets/market.jpg';
import legalBg from '../assets/legal.jpg';
import taxBg from '../assets/tax.jpg';
import humanCapitalBg from '../assets/hcm.jpg';

const heroContent = [
  {
    id: 'company',
    title: "Leading Business Transformation",
    description: "Cyinov Consulting - Your trusted partner in navigating the complexities of modern business landscape",
    background: aboutBg,
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
    background: heroBg,
    icon: BsEye,
    buttonText: "Our Vision"
  },
  {
    id: 'services',
    title: "Comprehensive Business Solutions",
    description: "Tailored services to meet your unique business challenges and opportunities",
    background: marketBg,
    icon: HiOutlineChartBar,
    buttonText: "Our Services"
  }
];

const Hero = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevSection, setPrevSection] = useState(0);

  const handleSectionChange = (index) => {
    if (index !== activeSection) {
      setIsTransitioning(true);
      setPrevSection(activeSection);
      setActiveSection(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

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

  return (
    <>
      <div className="relative h-screen">
        {/* Background Images with Transition */}
        {heroContent.map((content, index) => (
          <div
            key={content.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out
              ${index === activeSection ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${content.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: index === activeSection ? 1 : 
                     index === prevSection ? 0 : -1
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 
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
                {heroContent[activeSection].title}
              </h1>
              <p className={`text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-700
                ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {heroContent[activeSection].description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full 
                  text-lg font-semibold hover:bg-blue-700 hover:scale-105 transform 
                  transition-all duration-300 hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
              {heroContent.map((content, index) => (
                <button
                  key={content.id}
                  onClick={() => handleSectionChange(index)}
                  className={`group p-4 rounded-lg transition-all duration-300 backdrop-blur-sm
                    ${index === activeSection 
                      ? 'bg-white/20 border-b-2 border-blue-500' 
                      : 'bg-black/40 hover:bg-white/10'}`}
                >
                  <div className="flex items-center justify-center space-x-3">
                    <content.icon className={`text-2xl 
                      ${index === activeSection ? 'text-blue-300' : 'text-gray-300'}`} />
                    <span className={`text-sm md:text-base font-medium 
                      ${index === activeSection ? 'text-white' : 'text-gray-300'}`}>
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive business solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link} 
                className="group relative overflow-hidden rounded-xl"
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
                    from-black/80 via-black/65 to-black/35 
                    group-hover:from-black/75 group-hover:via-black/65 group-hover:to-black/25 
                    transition-all duration-300" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-6 transform transition-transform duration-300 
                      group-hover:scale-110 group-hover:translate-y-[-10px]">
                      <service.icon className="text-5xl text-gray-300 group-hover:text-gray-100" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md
                      transform transition-all duration-300 group-hover:translate-y-[-10px]">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-100 mb-6 transform transition-all duration-300 
                      group-hover:translate-y-[-10px] text-base leading-relaxed drop-shadow-md">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-gray-300 font-semibold 
                      opacity-0 transform translate-y-4 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-gray-100">
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