import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaTrademark, 
  FaCopyright,
  FaLightbulb,
  FaPaintBrush,
  FaShieldAlt,
  FaGavel,
  FaSearch,
  FaGlobeAmericas,
  FaPencilRuler,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';

// Import service images
import tmRegistrationImg from '../../assets/tmregistration.jpg';
import tmObjectionImg from '../../assets/tmobjection.jpg';
import tmOppositionImg from '../../assets/tmopposition.jpg';
import tmRenewalImg from '../../assets/tmrenewal.jpg';
import tmSearchImg from '../../assets/tmsearch.jpg';
import tmTransferImg from '../../assets/tmtransfer.jpg';
import tmRectificationImg from '../../assets/tmrectification.jpg';
import showcaseHearingImg from '../../assets/showcausehearing.jpg';
import servicesImg from '../../assets/services.jpg';
import patentRegistrationImg from '../../assets/patentregistration.jpg';
import copyrightRegistrationImg from '../../assets/copyrightregistration.jpg';
import copyrightObjectionImg from '../../assets/copyrightobjection.jpg';
import designRegistrationImg from '../../assets/designregistration.jpg';
import designObjectionImg from '../../assets/designobjection.jpg';
import logoDesignImg from '../../assets/logodesign.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProcessStep = ({ number, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="flex flex-col items-center p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
  >
    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-gray-100 mb-3">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </motion.div>
);

const ServiceCategory = ({ icon: Icon, title, description, items, sections }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-700"
  >
    <Icon className="text-2xl text-blue-400 mb-3" />
    <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-gray-300 text-sm mb-4">{description}</p>
    {sections ? (
      <div className="space-y-4">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h4 className="font-semibold text-gray-200 mb-2">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2">
                  <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
            <span className="text-gray-300 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

// Service Card component for carousel items
const ServiceCard = ({ title, description, image, link, actionText }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    className="p-3"
  >
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 h-full">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a 
          href={link || "#"} 
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
        >
          {actionText || "Learn more"} <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  </motion.div>
);

// Service Carousel component for horizontal scrolling
const ServiceCarousel = ({ services }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="service-carousel">
      <Slider {...settings}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
            actionText={service.actionText}
          />
        ))}
      </Slider>
    </div>
  );
};

const Trademark = () => {
  // Design services that will be shown in the carousel
  const designServices = [
    {
      title: "Design Registration",
      description: "Registration for industrial designs and unique visual features",
      image: designRegistrationImg,
      link: "/contact",
      actionText: "Register Now"
    },
    {
      title: "Design Objection",
      description: "Filing responses to objections raised by the Design Office",
      image: designObjectionImg,
      link: "/contact",
      actionText: "Object Now"
    }
  ];

  // Copyright services that will be shown in the carousel
  const copyrightServices = [
    {
      title: "Copyright Registration",
      description: "Legal entitlement for original works of authorship",
      image: copyrightRegistrationImg,
      link: "/contact",
      actionText: "Register Now"
    },
    {
      title: "Copyright Objection",
      description: "Filing responses to objections raised by the Copyright Office",
      image: copyrightObjectionImg,
      link: "/contact",
      actionText: "Object Now"
    }
  ];

  // Trademark services that will be shown in the carousel
  const trademarkServices = [
    {
      title: "Trademark Registration",
      description: "Comprehensive trademark search and application filing under one class",
      image: tmRegistrationImg,
      link: "/contact",
      actionText: "Register Now"
    },
    {
      title: "Trademark Objection",
      description: "Drafting and filing responses to objections raised by the Trademark Registry",
      image: tmObjectionImg,
      link: "/contact",
      actionText: "Object Now"
    },
    {
      title: "Trademark Opposition",
      description: "Filing and defending trademark opposition proceedings",
      image: tmOppositionImg,
      link: "/contact",
      actionText: "Oppose Now"
    },
    {
      title: "Trademark Renewal",
      description: "Drafting and filing trademark renewal applications",
      image: tmRenewalImg,
      link: "/contact",
      actionText: "Renew Now"
    },
    {
      title: "Trademark Search",
      description: "Comprehensive trademark search to identify existing similar marks",
      image: tmSearchImg,
      link: "/contact",
      actionText: "Search Now"
    },
    {
      title: "Trademark Transfer",
      description: "Legally transferring trademark ownership to another party",
      image: tmTransferImg,
      link: "/contact",
      actionText: "Transfer Now"
    },
    {
      title: "Trademark Rectification",
      description: "Filing rectifications for wrongly registered or objected trademarks",
      image: tmRectificationImg,
      link: "/contact",
      actionText: "Rectify Now"
    },
    {
      title: "Trademark Hearing",
      description: "Legal representation before the Trademark Office in hearings",
      image: showcaseHearingImg,
      link: "/contact",
      actionText: "Register Now"
    }
  ];

  // Main service categories
  const services = [
    {
      icon: FaTrademark,
      title: "Trademark Services",
      description: "Secure exclusive rights to your brand identity with our trademark services:",
      items: [
        "Trademark Registration – Comprehensive trademark search and application filing under one class",
        "Expedited Trademark Registration – Fast-track trademark application filing for quick approval",
        "Trademark Objection – Drafting and filing responses to objections raised by the Trademark Registry",
        "Trademark Opposition – Filing and defending trademark opposition proceedings",
        "Trademark Renewal – Drafting and filing trademark renewal applications",
        "Trademark Infringement Notice – Issuing legal notices for unauthorized use of your trademark",
        "Trademark Hearing – Legal representation before the Trademark Office in hearings",
        "Trademark Rectification – Filing rectifications for wrongly registered or objected trademarks",
        "Trademark Transfer – Legally transferring trademark ownership to another party",
        "Trademark Certificate & Brand Monitoring – Securing trademark registration certificates and ongoing brand monitoring",
        "Trademark Search & Monitoring Software – Advanced AI-driven platform to track trademark applications and infringements"
      ]
    },
    {
      icon: FaLightbulb,
      title: "Patent Services",
      description: "Protect your innovations and technical advancements:",
      items: [
        "Registration – Comprehensive patent search and filing of patent applications"
      ]
    },
    {
      icon: FaCopyright,
      title: "Copyright Services",
      description: "Secure rights over your creative works with copyright protection:",
      items: [
        "Copyright Registration – Legal entitlement for original works of authorship",
        "Copyright Objection – Filing responses to objections raised by the Copyright Office"
      ]
    },
    {
      icon: FaPaintBrush,
      title: "Design Protection Services",
      description: "Ensure exclusivity for your product designs:",
      items: [
        "Design Registration – Registration for industrial designs and unique visual features",
        "Design Objection – Filing responses to objections raised by the Design Office"
      ]
    },
    {
      icon: FaPencilRuler,
      title: "Branding & Identity Solutions",
      description: "Strengthen your brand's visual identity:",
      items: [
        "Logo Designing – Professional logo design services to create a unique brand identity"
      ]
    }
  ];

  const whyChooseUs = [
    {
      title: "End-to-End IP Protection",
      description: "From registration to enforcement, we cover all aspects of intellectual property law"
    },
    {
      title: "Experienced IP Attorneys",
      description: "Legal experts with a track record of securing IP rights across industries"
    },
    {
      title: "Technology-Driven Solutions",
      description: "AI-powered trademark search & monitoring tools for proactive brand protection"
    },
    {
      title: "Transparent & Competitive Pricing",
      description: "Affordable, reliable, and efficient IP solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trademark & Intellectual Property Services</h1>
            <p className="text-xl mb-8 text-blue-200">
              Protecting Your Brand, Innovations, and Creative Works with Expert Legal Solutions
            </p>
            <p className="text-lg text-blue-200">
              A strong intellectual property (IP) strategy is essential for securing your brand identity and business assets. We offer end-to-end solutions for trademark, patent, copyright, and design protection—ensuring legal security, competitive advantage, and brand integrity. From registration to enforcement, our expert team is here to safeguard your intellectual property rights.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
          <svg 
            className="relative block w-full h-12"
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".15" 
              className="fill-current text-gray-900"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".1" 
              className="fill-current text-gray-900"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              opacity=".05" 
              className="fill-current text-gray-900"
            ></path>
          </svg>
        </div>
      </motion.div>      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">Our Services</h2>
          
          {/* Trademark Services Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <FaTrademark className="text-xl text-blue-400 mr-3" />
              Trademark Services
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Secure exclusive rights to your brand identity with our comprehensive trademark services
            </p>
            <ServiceCarousel services={trademarkServices} />
          </div>
            {/* Patent Services Section with Image */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <FaLightbulb className="text-xl text-blue-400 mr-3" />
              Patent Services
            </h3>              <motion.div 
              variants={fadeInUp} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700"
            >              <div className="flex flex-col md:flex-row h-80">
                {/* Left side - Text content */}
                <div className="p-5 md:w-1/2 flex flex-col justify-center overflow-y-auto">
                  <h4 className="text-lg font-bold text-gray-100 mb-3">Patent Registration</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Protect your innovations and technical advancements with our comprehensive patent services
                  </p>
                  <ul className="space-y-2 mb-4">
                    {services[1].items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 inline-flex items-center px-5 py-2 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300 self-start"
                  >
                    Register Now
                    <FaArrowRight className="ml-2" />
                  </motion.a>
                </div>
                
                {/* Right side - Image */}
                <div className="md:w-1/2 relative h-48 md:h-auto">
                  <img 
                    src={patentRegistrationImg} 
                    alt="Patent Registration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50 md:opacity-30"></div>
                </div>
              </div>
            </motion.div>          </div>

          {/* Copyright Services Section with Text on Left and Carousel on Right */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <FaCopyright className="text-xl text-blue-400 mr-3" />
              Copyright Services
            </h3>
            <motion.div 
              variants={fadeInUp} 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700"
            >              <div className="flex flex-col md:flex-row h-80">
                {/* Left side - Text content */}
                <div className="p-5 md:w-1/3 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-gray-100 mb-3">Protect Your Creative Works</h4>
                  <p className="text-gray-300 text-base mb-4">
                    Copyright protection gives creators exclusive rights over their original works including 
                    literary, musical, artistic, and certain other intellectual works.
                  </p>
                  <p className="text-gray-300 text-base mb-4">
                    Our copyright services help creators secure their rights, respond to objections, 
                    and enforce their copyright protections across all creative industries.
                  </p>
                </div>
                
                {/* Right side - Carousel (wider) */}
                <div className="md:w-2/3 p-4 flex items-center">
                  <div className="w-full">
                    <Slider
                      dots={true}
                      infinite={false}
                      speed={500}
                      slidesToShow={2}
                      slidesToScroll={1}
                      arrows={true}
                      className="copyright-carousel"
                    >
                      {copyrightServices.map((service, index) => (
                        <div key={index} className="p-2">
                          <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden h-64">
                            <div className="relative h-32">
                              <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-base font-bold text-gray-100 mb-2">{service.title}</h3>
                              <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                              <a 
                                href={service.link || "#"} 
                                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                              >
                                {service.actionText} <FaArrowRight className="ml-1 text-xs" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>            </motion.div>
          </div>
          
          {/* Design Protection Services Section with Text on Left and Carousel on Right */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <FaPaintBrush className="text-xl text-blue-400 mr-3" />
              Design Protection Services
            </h3>
            <motion.div 
              variants={fadeInUp} 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700"
            >
              <div className="flex flex-col md:flex-row h-80">
                {/* Left side - Text content */}
                <div className="p-5 md:w-1/3 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-gray-100 mb-3">Protect Your Visual Innovations</h4>
                  <p className="text-gray-300 text-base mb-4">
                    Design protection secures the unique visual appearance of your products, 
                    giving you exclusive rights to their aesthetic features.
                  </p>
                  <p className="text-gray-300 text-base mb-4">
                    Our design protection services help creators and companies safeguard their 
                    product designs from unauthorized copying and maintain market uniqueness.
                  </p>
                </div>
                
                {/* Right side - Carousel (wider) */}
                <div className="md:w-2/3 p-4 flex items-center">
                  <div className="w-full">
                    <Slider
                      dots={true}
                      infinite={false}
                      speed={500}
                      slidesToShow={2}
                      slidesToScroll={1}
                      arrows={true}
                      className="design-carousel"
                    >
                      {designServices.map((service, index) => (
                        <div key={index} className="p-2">
                          <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden h-64">
                            <div className="relative h-32">
                              <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-base font-bold text-gray-100 mb-2">{service.title}</h3>
                              <p className="text-gray-300 text-sm mb-2">{service.description}</p>
                              <a 
                                href={service.link || "#"} 
                                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                              >
                                {service.actionText} <FaArrowRight className="ml-1 text-xs" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
            {/* Branding & Identity Solutions Section with Image */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center">
              <FaPencilRuler className="text-xl text-blue-400 mr-3" />
              Branding & Identity Solutions
            </h3>
            <motion.div 
              variants={fadeInUp} 
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700"
            >
              <div className="flex flex-col md:flex-row h-80">
                {/* Left side - Text content */}
                <div className="p-5 md:w-1/2 flex flex-col justify-center overflow-y-auto">
                  <h4 className="text-lg font-bold text-gray-100 mb-3">Logo Designing</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Strengthen your brand's visual identity with our professional logo design services
                  </p>
                  <ul className="space-y-2 mb-4">
                    {services[4].items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-300 text-sm mb-4">
                    Our expert designers create memorable, distinctive logos that capture your brand's essence
                    and make a lasting impression on your target audience.
                  </p>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 inline-flex items-center px-5 py-2 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300 self-start"
                  >
                    Design Now
                    <FaArrowRight className="ml-2" />
                  </motion.a>
                </div>
                
                {/* Right side - Image */}
                <div className="md:w-1/2 relative h-48 md:h-auto">
                  <img 
                    src={logoDesignImg} 
                    alt="Logo Design" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50 md:opacity-30"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">Why Choose Us</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {whyChooseUs.map((item, index) => (
              <ProcessStep 
                key={index}
                number={<FaShieldAlt className="text-2xl" />}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8">Secure Your Intellectual Property Today</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let us help you protect what matters most—your brand, innovations, and creative assets.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-blue-400 text-gray-900 font-semibold rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            Schedule a Consultation
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Trademark;