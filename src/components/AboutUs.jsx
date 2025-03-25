import React from 'react';
import { FaCheckCircle, FaCogs, FaUsers, FaChartLine, FaLaptopCode, 
         FaHandshake, FaGlobe, FaStar, FaRocket } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import aboutHero from '../assets/about-hero.jpg';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${aboutHero})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
          Transforming Business Landscapes Through Strategic Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Redefining business consulting with comprehensive solutions that bridge vision and execution
        </p>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To revolutionize business consulting by providing integrated, technology-driven solutions 
              that enable organizations to thrive in a rapidly evolving business landscape while maintaining 
              the highest standards of compliance and operational excellence.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the most trusted and innovative consulting partner for businesses across sectors, 
              known for our transformative solutions and commitment to client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreValue = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 flex-shrink-0">
      <Icon className="w-8 h-8" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CoreValues = () => {
  const values = [
    {
      icon: FaStar,
      title: "Excellence in Execution",
      description: "We maintain uncompromising standards in every project we undertake"
    },
    {
      icon: FaHandshake,
      title: "Integrity & Transparency",
      description: "Our operations are founded on ethical practices and clear communication"
    },
    {
      icon: FaRocket,
      title: "Innovation & Adaptability",
      description: "We constantly evolve our approaches to meet emerging business challenges"
    },
    {
      icon: FaUsers,
      title: "Client-Centric Focus",
      description: "Your success metrics are our primary objectives"
    },
    {
      icon: FaChartLine,
      title: "Collaborative Growth",
      description: "We believe in growing together with our clients and stakeholders"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <CoreValue key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  const approaches = [
    {
      title: "Diagnostic Assessment",
      description: "Thorough analysis of your business environment"
    },
    {
      title: "Custom Solution Design",
      description: "Tailored strategies aligned with your specific business objectives"
    },
    {
      title: "Implementation Support",
      description: "Hands-on assistance throughout the execution phase"
    },
    {
      title: "Monitoring & Optimization",
      description: "Continuous performance tracking and improvement"
    },
    {
      title: "Knowledge Transfer",
      description: "Building internal capabilities within your organization"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Approach</h2>
        <div className="max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-6">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyIntegration = () => {
  const technologies = [
    "Advanced Analytics Platforms",
    "Cloud-based Compliance Management Systems",
    "Automated Tax Calculation Tools",
    "Digital HR Management Solutions",
    "Real-time Reporting Dashboards"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white/10 p-6 rounded-lg">
              <FaLaptopCode className="w-8 h-8 flex-shrink-0" />
              <span className="text-lg">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industry = ({ name }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
    <div className="text-blue-600 mb-2">
      <FaCogs className="w-6 h-6" />
    </div>
    <h3 className="font-semibold text-gray-800">{name}</h3>
  </div>
);

const IndustryExpertise = () => {
  const industries = [
    "Manufacturing and Industrial",
    "Technology and Software",
    "Healthcare and Pharmaceuticals",
    "Retail and E-commerce",
    "Financial Services",
    "Real Estate and Infrastructure",
    "Education and Training"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Industry key={index} name={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Integrated Solutions Hub",
      points: [
        "Single point of contact for all business needs",
        "Seamless coordination across service verticals",
        "Consistent quality standards across services"
      ]
    },
    {
      title: "Expert Team",
      points: [
        "Experienced Professionals",
        "Continuous Learning and Development",
        "Industry-specific Expertise"
      ]
    },
    {
      title: "Client-Centric Approach",
      points: [
        "Customized Solution Design",
        "Flexible Engagement Models",
        "Transparent Communication"
      ]
    },
    {
      title: "Innovation Focus",
      points: [
        "Regular Methodology Updates",
        "Technology Integration",
        "Process Optimization"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Partner with Cyinov Consulting?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">{reason.title}</h3>
              <ul className="space-y-3">
                {reason.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GlobalStandards = () => {
  const standards = [
    "ISO-aligned Processes",
    "Industry-specific Frameworks",
    "Global Compliance Standards",
    "Sustainable Business Practices"
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Global Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {standards.map((standard, index) => (
            <div key={index} className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg">
              <FaGlobe className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <span className="text-lg">{standard}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're a startup looking to establish strong foundations or an established 
            enterprise seeking transformation, we offer the expertise, resources, and commitment 
            to help you achieve your business objectives.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-4 px-8 rounded-full 
                     hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Connect With Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <ApproachSection />
      <TechnologyIntegration />
      <IndustryExpertise />
      <WhyChooseUs />
      <GlobalStandards />
      <CallToAction />
    </div>
  );
};

export default AboutUs;