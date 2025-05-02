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
    <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center text-gray-900 text-2xl font-bold mb-6">
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
    <Icon className="text-2xl text-primary-400 mb-3" />
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
                  <FaCheckCircle className="text-primary-400 mt-1 flex-shrink-0 text-sm" />
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
            <FaCheckCircle className="text-primary-400 mt-1 flex-shrink-0 text-sm" />
            <span className="text-gray-300 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

// Service Card component for carousel items
const ServiceCard = ({ title, description, image, link, actionText, icon: Icon }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05 }}
    className="p-3"
  >
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 h-full transition-all duration-300 hover:shadow-xl hover:border-primary-400/50">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        {Icon && (
        <div className="absolute top-4 right-4 bg-primary-500/80 rounded-full p-2 shadow-lg">
            <Icon className="text-white text-lg" />
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a 
          href={link || "#"} 
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 group"
        >
          {actionText || "Learn more"} 
          <FaArrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </motion.div>
);

// A featured service card with more prominent styling
const FeaturedServiceCard = ({ title, description, image, link, actionText, features }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
    className="col-span-1 md:col-span-2 mb-8"
  >
    <div className="bg-gradient-to-r from-primary-900/40 to-gray-800 rounded-xl shadow-lg overflow-hidden border border-primary-500/30 h-full relative">
      <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        Featured Service
      </div>
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 hidden md:block"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 md:hidden"></div>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-primary-200 mb-4">{description}</p>
          
          {features && features.length > 0 && (
            <div className="mb-5">
              <h4 className="text-white text-sm font-semibold mb-2">Service Highlights:</h4>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <FaCheckCircle className="text-primary-400 mt-1 flex-shrink-0 mr-2" />
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <motion.a
            href={link || "#"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-5 py-2 mt-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-colors duration-300 self-start"
          >
            {actionText || "Learn More"}
            <FaArrowRight className="ml-2" />
          </motion.a>
        </div>
      </div>
    </div>
  </motion.div>
);

// Tab-based service selector component
const ServiceTabs = ({ services, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);
  
  return (
    <div className="mb-12">
      <div className="flex flex-wrap mb-6 border-b border-gray-700">
        {services.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-3 font-medium text-sm transition-colors duration-200 relative
              ${activeTab === idx 
                ? 'text-primary-400 border-primary-400' 
                : 'text-gray-400 hover:text-gray-200 border-transparent'
              } border-b-2 -mb-px`}
          >
            <div className="flex items-center">
              {category.icon && <category.icon className="mr-2" />}
              {category.name}
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-6">
        {services[activeTab].description && (
          <p className="text-gray-300 mb-8">{services[activeTab].description}</p>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services[activeTab].items.map((service, idx) => (
            <ServiceCard 
              key={idx}
              {...service}
              icon={services[activeTab].itemIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Trademark = () => {
  // Reorganized and enhanced trademark services with categories
  const allServices = [
    {
      name: "Trademark Services",
      icon: FaTrademark,
      description: "Secure exclusive rights to your brand identity with our comprehensive trademark services",
      itemIcon: FaTrademark,
      items: [
        {
          title: "Trademark Registration",
          description: "Comprehensive trademark search and application filing under one class",
          image: tmRegistrationImg,
          link: "/services/trademark/trademark-registration",
          actionText: "Register Now"
        },
        {
          title: "Trademark Objection",
          description: "Drafting and filing responses to objections raised by the Trademark Registry",
          image: tmObjectionImg,
          link: "/contact",
          actionText: "Get Help Now"
        },
        {
          title: "Trademark Opposition",
          description: "Filing and defending trademark opposition proceedings",
          image: tmOppositionImg,
          link: "/contact",
          actionText: "Protect Your Mark"
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
        }
      ]
    },
    {
      name: "Patent Services",
      icon: FaLightbulb,
      description: "Protect your innovations and technical advancements with comprehensive patent solutions",
      itemIcon: FaLightbulb,
      items: [
        {
          title: "Patent Registration",
          description: "Comprehensive patent search and application filing",
          image: patentRegistrationImg,
          link: "/contact",
          actionText: "Protect Your Innovation"
        }
      ]
    },
    {
      name: "Copyright Services",
      icon: FaCopyright,
      description: "Secure rights over your creative works with powerful copyright protection",
      itemIcon: FaCopyright,
      items: [
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
      ]
    },
    {
      name: "Design & Branding",
      icon: FaPaintBrush,
      description: "Ensure exclusivity for your product designs and strengthen your brand identity",
      itemIcon: FaPaintBrush,
      items: [
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
        },
        {
          title: "Logo Design",
          description: "Professional logo design services to create a unique brand identity",
          image: logoDesignImg,
          link: "/contact",
          actionText: "Design Now"
        }
      ]
    }
  ];

  // Highlight specific top services
  const featuredServices = [
    {
      title: "Trademark Registration",
      description: "Secure your brand identity with our comprehensive trademark registration service.",
      image: tmRegistrationImg,
      link: "/services/trademark/trademark-registration",
      actionText: "Register Your Trademark",
      features: [
        "Comprehensive trademark search",
        "Application filing under one class",
        "Guidance throughout the registration process",
        "Regular status updates",
        "Response to examination reports"
      ]
    },
    {
      title: "Intellectual Property Protection Package",
      description: "Complete protection for your business with our bundled IP services.",
      image: servicesImg,
      link: "/contact",
      actionText: "Get Complete Protection",
      features: [
        "Trademark registration",
        "Copyright registration for business materials",
        "Logo design consultation",
        "IP audit and strategy planning",
        "One year of brand monitoring"
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
        className="relative py-24 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800 text-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-200">Trademark & Intellectual Property Services</h1>
            <p className="text-xl mb-8 text-primary-200">
              Protecting Your Brand, Innovations, and Creative Works with Expert Legal Solutions
            </p>
            <p className="text-lg text-primary-200">
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
      </motion.div>      {/* Featured Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-4">Our Featured Services</h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive intellectual property protection solutions for your business needs
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredServices.map((service, idx) => (
              <FeaturedServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-4">Explore Our Services</h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Browse our comprehensive range of intellectual property services
          </p>
          
          <ServiceTabs services={allServices} />
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
