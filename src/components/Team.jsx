import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

// Enhanced TeamMember component with modern, minimalist design
const TeamMember = ({ image, name, position, description, expertise, social, testimonyQuote = null }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 
      transition-all duration-300 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-900/40 group"
  >
    <div className="relative overflow-hidden h-72 bg-gray-100 dark:bg-gray-900">
      {/*<img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover object-center transition-transform duration-700 
          group-hover:scale-105"
        loading="lazy"
      />*/}
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80"></div>
      
      {/* Name and position */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-blue-400 font-medium">{position}</p>
      </div>
    </div>
    
    <div className="p-6">
      <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">{description}</p>
      
      {/* Expertise section */}
      <div className="mb-6">
        <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-3">Key Expertise:</h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((item, idx) => (
            <span 
              key={idx} 
              className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 
                px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Testimony quote if available */}
      {testimonyQuote && (
        <div className="mb-6 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg border-l-4 border-blue-500 dark:border-blue-600">
          <div className="flex">
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-400 italic text-sm">{testimonyQuote}</p>
          </div>
        </div>
      )}
      
      {/* Social links with enhanced hover effects */}
      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        {social.linkedin && (
          <a 
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
              transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
            aria-label={`${name}'s LinkedIn Profile`}
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {social.twitter && (
          <a 
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300 
              transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
            aria-label={`${name}'s Twitter Profile`}
          >
            <FaTwitter size={20} />
          </a>
        )}
        {social.email && (
          <a 
            href={`mailto:${social.email}`}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 
              transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
            aria-label={`Email ${name}`}
          >
            <FaEnvelope size={20} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Team = () => {
  // Updated team members with more detailed info and testimony quotes
  const teamMembers = [
    {
      image: null,
      name: "Shauryanker Kaushik",
      position: "Founder & Head - Legal & Regulatory Compliance",
      description: "An accomplished Advocate at the Supreme Court of India and a renowned Trademark Attorney, Shauryanker specializes in intellectual property law, cybersecurity law, and regulatory compliance. With vast experience in litigation, IP portfolio management, and strategic brand protection.",
      expertise: [
        "Intellectual Property Rights",
        "Cybersecurity Law",
        "Brand Protection",
        "Legal Tech",
        "Regulatory Compliance"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/shauryanker",
        email: "info@cyinov.com"
      },
      testimonyQuote: "Our mission is to provide clients with cutting-edge legal solutions that protect their business interests in an increasingly complex regulatory environment."
    },
    {
      image: null,
      name: "Ankur Kaushik",
      position: "Head - Human Capital Management",
      description: "Ankur is a seasoned Human Capital Management expert with a strong background in workforce planning, talent acquisition, and HR compliance. With years of experience in corporate HR strategy, he specializes in building high-performance teams and optimizing organizational structures.",
      expertise: [
        "Talent Acquisition",
        "Workforce Planning",
        "HR Compliance",
        "Leadership Development"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/ankur-kaushik-65900112",
        email: "info@cyinov.com"
      },
      testimonyQuote: "The right team isn't just about skills—it's about creating a culture where innovation and excellence thrive naturally."
    },
    {
      image: null,
      name: "Anuj Kapoor",
      position: "Head - Tax Advisory",
      description: "Anuj is a highly skilled tax consultant with extensive experience in corporate taxation, indirect taxes, and financial compliance. His deep understanding of national and international tax regulations allows him to craft effective tax strategies that minimize liabilities and ensure compliance.",
      expertise: [
        "Corporate Tax Planning",
        "Indirect Taxation",
        "Financial Compliance",
        "International Taxation"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/anuj-kaushik-08680a6a",
        email: "info@cyinov.com"
      }
    },
    {
      image: null,
      name: "Rajeev Kaushik",
      position: "Head - Market & Product Research",
      description: "With over two decades of experience in market and product research, Rajeev specializes in data-driven business insights that empower organizations to make informed decisions. He has worked with diverse industries, analyzing trends, customer behaviors, and competitive landscapes.",
      expertise: [
        "Market Research",
        "Consumer Insights",
        "Competitive Intelligence",
        "Product Strategy"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/rajeev-kaushik-65813426",
        email: "info@cyinov.com"
      },
      testimonyQuote: "In today's market, data isn't just valuable—it's essential. Our research methodologies uncover insights that transform business strategies."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero section with parallax effect */}
      <div className="relative w-full h-[500px] mb-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-[105%]"
          >
            {/*}
            <img 
              src={teamHero} 
              alt="Cyinov Consulting Team" 
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            */}
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
        
        {/* Hero content with enhanced animations */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">Our Team</h2>
            <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6"></div>
            <h3 className="text-2xl font-medium text-blue-400 mb-6">Meet the Experts Behind Cyinov Consulting</h3>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our team brings together diverse expertise across multiple domains to deliver comprehensive business solutions that drive measurable results for our clients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team members grid with 2x2 layout for better symmetry */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              expertise={member.expertise}
              social={member.social}
              testimonyQuote={member.testimonyQuote}
            />
          ))}
        </motion.div>
        
        {/* Team values section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-24 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
          <div className="w-20 h-1.5 mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            At Cyinov, our team is united by a set of core values that guide everything we do
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">We are committed to delivering the highest quality service in everything we do</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Integrity</h4>
              <p className="text-gray-600 dark:text-gray-300">We adhere to the highest ethical standards and transparency in all our client relationships</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Innovation</h4>
              <p className="text-gray-600 dark:text-gray-300">We constantly seek new approaches and creative solutions to deliver better results</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
