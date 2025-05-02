import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaBalanceScale, FaCalculator, FaChartLine, FaUsers, 
  FaArrowRight, FaTrademark, FaLightbulb
} from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Enhanced interactive Service Card component with modern, minimalist design
const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative group"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <Link to={link} className="block h-full">
        <div className="h-full bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm 
          transition-all duration-300 group-hover:shadow-xl dark:group-hover:shadow-primary-900/20 
          border border-neutral-100 dark:border-neutral-700 group-hover:border-primary-200 dark:group-hover:border-primary-900/50">
          
          {/* Top accent line with gradient */}
          <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700"></div>
          
          <div className="p-6 flex flex-col items-center text-center">
            {/* Centered icon container with hover effect */}
            <div className="mb-4">
              <div className="relative inline-flex">
                <div className="absolute inset-0 rounded-full bg-primary-100 dark:bg-primary-900/30 
                  transform transition-transform duration-300 scale-0 group-hover:scale-110 origin-center"></div>
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full 
                  bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 
                  transition-all duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                  <Icon className="text-2xl" />
                </div>
              </div>
            </div>
            
            {/* Centered content container with improved typography */}
            <div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3 
                transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">{title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{description}</p>
            </div>
            
            {/* Subtle divider with gradient on hover */}
            <div className="h-px w-full bg-neutral-100 dark:bg-neutral-700 my-4 group-hover:bg-gradient-to-r group-hover:from-primary-100 group-hover:to-transparent dark:group-hover:from-primary-900/30 dark:group-hover:to-transparent transition-all duration-300"></div>
            
            {/* Learn more link with animated arrow */}
            <div className="mt-auto">
              <span className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400
                transition-all duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-300">
                <span>Learn more</span>
                <FaArrowRight size={12} className="ml-2 transform transition-transform duration-300 
                  group-hover:translate-x-1.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  // All services with consistent format - no featured service
  const services = [
    {
      icon: FaBalanceScale,
      title: "Legal Compliance",
      description: "Navigate complex regulatory landscapes with our comprehensive legal compliance solutions tailored to your industry's specific requirements.",
      link: "/services/legal-compliance"
    },
    {
      icon: FaCalculator,
      title: "Tax Advisory",
      description: "Optimize your tax position with strategic planning and expert advisory services that help minimize liabilities while ensuring full compliance.",
      link: "/services/tax-advisory"
    },
    {
      icon: FaChartLine,
      title: "Market & Product Research",
      description: "Make data-driven decisions with our in-depth market analysis and research solutions that reveal valuable insights about your target audience.",
      link: "/services/market-research"
    },
    {
      icon: FaUsers,
      title: "Human Capital",
      description: "Build high-performing teams through strategic workforce management, talent acquisition, and development programs tailored to your organization.",
      link: "/services/human-capital"
    },
    {
      icon: FaTrademark,
      title: "Trademark Services",
      description: "Protect your brand identity and intellectual property with our comprehensive trademark registration and management services.",
      link: "/services/trademark"
    }
  ];
  
  return (
    <div className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with modern typography and subtle animation */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Our Expertise</span>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 dark:text-white mb-6"
          >
            Comprehensive Business Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-300"
          >
            Tailored services designed to optimize your operations, ensure compliance, 
            and drive sustainable growth in today's dynamic business environment
          </motion.p>
        </div>
        
        {/* Services Grid - Uniform layout for all services */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* All services in a grid layout - updated for symmetry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Process Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Our Process</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-6">
              How We Work
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Our structured methodology ensures consistent results and a seamless experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                <span className="font-display font-medium">01</span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Assessment</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                We thoroughly analyze your current situation, identifying challenges and opportunities specific to your business.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                <span className="font-display font-medium">02</span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Strategy</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                We develop a tailored approach with clear objectives, timeline, and measurable outcomes for your business needs.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                <span className="font-display font-medium">03</span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Implementation</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                We execute the strategy with precision, providing regular updates and making adjustments as needed for optimal results.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-100 dark:border-neutral-700"
            >
              <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                <span className="font-display font-medium">04</span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-3">Evaluation</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                We measure the impact of our work through key performance indicators, ensuring we've achieved the desired outcomes.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced CTA Section with modern design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center py-16 mt-24"
        >
          <div className="p-10 rounded-xl bg-white dark:bg-neutral-800 shadow-xl border border-neutral-100 dark:border-neutral-700">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-6">
              Ready to transform your business with expert guidance?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Our team of specialists is ready to provide personalized solutions designed for your unique challenges and growth objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium"
            >
              Schedule a Consultation
              <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;