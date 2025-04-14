import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaCogs, FaUsers, FaChartLine, FaLaptopCode, 
         FaHandshake, FaGlobe, FaStar, FaRocket, FaUserTie, FaClipboardCheck } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import aboutHero from '../assets/about-hero.jpeg';
import missionImg from '../assets/vision.jpeg';
import valuesImg from '../assets/team.jpeg';
import approachImg from '../assets/company.jpeg';
import techImg from '../assets/market.jpg';
import industryImg from '../assets/legal.jpg';
import whyUsImg from '../assets/tax.jpg';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${aboutHero})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-black/50"></div>
        <div className="relative h-full flex flex-col justify-center items-center text-gray-100 px-4 text-center">
        <div className="mb-4">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-2 tracking-tight">
            Cyinov Consulting
          </h1>
          <h2 className="text-3xl md:text-3xl font-medium text-white leading-tight max-w-4xl">
            Transforming Business Landscapes Through Strategic Excellence
          </h2>
        </div>
        <p className="text-xl md:text-lg mb-12 max-w-3xl">
          At Cyinov Consulting, we are dedicated to redefining business consulting by offering comprehensive solutions that bridge the gap between vision and execution. Founded in 2025, we've established ourselves as a dynamic force in the consulting industry, combining innovative methodologies with deep industry expertise to deliver exceptional results for our clients.
        </p>
      </div>
    </section>
  );
};

const CorePrinciples = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-red-700 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">Excellence in Execution</h3>
            <p className="text-gray-300">
              We maintain uncompromising standards in every project we undertake
            </p>
            <div className="border-b border-red-700 w-3/4 mx-auto mt-4"></div>
          </div>

          <div className="text-center">
            <div className="bg-red-700 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">Integrity & Transparency</h3>
            <p className="text-gray-300">
              Our operations are founded on ethical practices and clear communication
            </p>
            <div className="border-b border-red-700 w-3/4 mx-auto mt-4"></div>
          </div>

          <div className="text-center">
            <div className="bg-red-700 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">Innovation & Adaptability</h3>
            <p className="text-gray-300">
              We constantly evolve our approaches to meet emerging business challenges
            </p>
            <div className="border-b border-red-700 w-3/4 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Our Mission & Vision</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To revolutionize business consulting by providing integrated, technology-driven solutions 
                that enable organizations to thrive in a rapidly evolving business landscape while maintaining 
                the highest standards of compliance and operational excellence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the most trusted and innovative consulting partner for businesses across sectors, 
                known for our transformative solutions and commitment to client success.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={missionImg} alt="Our Mission and Vision" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={valuesImg} alt="Our Core Values" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Core Values</h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-400 flex-shrink-0">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const expertiseAreas = [
    { name: "LEGAL AND REGULATORY COMPLIANCE", percentage: 100 },
    { name: "HUMAN CAPITAL MANAGEMENT", percentage: 90 },
    { name: "TAX ADVISORY", percentage: 80 },
    { name: "MARKET AND PRODUCT RESEARCH", percentage: 80 }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Our Expertise</h2>
            <div className="space-y-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-gray-100">{area.name}</span>
                    <span className="text-lg font-medium text-blue-400">{area.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-red-800 rounded-full" 
                      style={{ width: `${Math.min(area.percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <p className="text-lg text-gray-100 leading-relaxed">
                Whether you're a startup looking to establish strong foundations or an established enterprise seeking transformation, Cyinov Consulting offers the expertise, resources, and commitment to help you achieve your business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-white mb-2">
              <CountUp end={20} suffix="+" duration={2.5} />
            </div>
            <p className="text-xl text-blue-200 uppercase tracking-wide">Clients</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-white mb-2">
              <CountUp end={5} suffix="+" duration={2.5} />
            </div>
            <p className="text-xl text-blue-200 uppercase tracking-wide">Clients this month</p>
          </div>
          <div className="text-center p-6">
            <div className="text-5xl font-bold text-white mb-2">
              <CountUp end={50} duration={2.5} />
            </div>
            <p className="text-xl text-blue-200 uppercase tracking-wide">New Projects</p>
          </div>
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
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Our Approach</h2>
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-6 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">{approach.title}</h3>
                    <p className="text-gray-300">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={approachImg} alt="Our Approach" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
            </div>
          </div>
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
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={techImg} alt="Technology Integration" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Technology Integration</h2>
            <div className="grid grid-cols-1 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-4 bg-blue-600 text-gray-100 p-4 rounded-lg">
                  <FaLaptopCode className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Industry Expertise</h2>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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
              <img src={industryImg} alt="Industry Expertise" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientSuccessCommitment = () => {
  const commitments = [
    "Dedicated Account Managers",
    "24/7 Support System",
    "Regular Progress Reviews",
    "Quarterly Strategy Sessions",
    "Annual Performance Assessments"
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={missionImg} alt="Client Success Commitment" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Client Success Commitment</h2>
            <div className="space-y-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-md">
                  <div className="bg-blue-400 rounded-full p-2">
                    <FaUserTie className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg font-medium text-gray-100">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QualityAssurance = () => {
  const qualityProcesses = [
    "Rigorous Quality Control Processes",
    "Regular Service Audits",
    "Client Feedback Integration",
    "Continuous Service Enhancement",
    "Professional Standards Compliance"
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Quality Assurance</h2>
            <p className="text-lg text-gray-300 mb-8">Our quality management system ensures:</p>
            <div className="space-y-4">
              {qualityProcesses.map((process, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md">
                  <div className="bg-blue-400 rounded-full p-2">
                    <FaClipboardCheck className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg font-medium text-gray-100">{process}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={approachImg} alt="Quality Assurance" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
            </div>
          </div>
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
    <section className="py-16 bg-gray-900 text-gray-100">
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
    },
    {
      title: "Value Addition",
      points: [
        "Cost-Effective Solutions",
        "Measurable Outcomes",
        "Long-term Partnership Focus"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Why Partner with Cyinov Consulting?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">{reason.title}</h3>
              <ul className="space-y-3">
                {reason.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <div key={index + 3} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">{reason.title}</h3>
              <ul className="space-y-3">
                {reason.points.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{point}</span>
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

const FutureReady = () => {
  const futureStrategies = [
    "Expanding our service portfolio",
    "Strengthening technological capabilities",
    "Enhancing delivery mechanisms",
    "Building stronger client relationships",
    "Contributing to sustainable business practices"
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={whyUsImg} alt="Future Ready" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Future Ready</h2>
            <div className="space-y-4">
              {futureStrategies.map((strategy, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-md">
                  <div className="bg-blue-400 rounded-full p-2">
                    <FaClipboardCheck className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-lg font-medium text-gray-100">{strategy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Whether you're a startup looking to establish strong foundations or an established 
            enterprise seeking transformation, we offer the expertise, resources, and commitment 
            to help you achieve your business objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-400 text-gray-900 font-bold py-4 px-8 rounded-full 
                     hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Connect With Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <CorePrinciples />
      <MissionVision />
      <CoreValues />
      <ExpertiseSection />
      <StatsSection />
      <ApproachSection />
      <TechnologyIntegration />
      <IndustryExpertise />
      <ClientSuccessCommitment />
      <QualityAssurance />
      <GlobalStandards />
      <WhyChooseUs />
      <FutureReady />
      <CallToAction />
    </div>
  );
};

export default AboutUs;