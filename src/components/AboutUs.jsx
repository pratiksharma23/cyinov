import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaCogs, FaUsers, FaChartLine, FaLaptopCode, 
         FaHandshake, FaGlobe, FaStar, FaRocket, FaUserTie, FaClipboardCheck } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import aboutHero from '../assets/About.jpg';
import missionImg from '../assets/OurVision.png';
import valuesImg from '../assets/CoreValues.png';

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHero})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/60"></div>
      <div className="relative container h-full flex flex-col justify-center z-10">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">About Us</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white mb-4">
            Transforming Business Landscapes Through Strategic Excellence
          </h1>
          <p className="text-lg text-white/80 max-w-3xl backdrop-blur-sm bg-white/10 p-4 rounded-lg">
            At Cyinov Consulting, we are dedicated to redefining business consulting by offering comprehensive solutions that bridge the gap between vision and execution. Founded in 2025, we've established ourselves as a dynamic force in the consulting industry.
          </p>
        </div>
      </div>
    </section>
  );
};

const CorePrinciples = () => {
  const principles = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 0 01-2-2z" />
      </svg>,
      title: "Excellence in Execution",
      description: "We maintain uncompromising standards in every project we undertake"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>,
      title: "Integrity & Transparency",
      description: "Our operations are founded on ethical practices and clear communication"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: "Innovation & Adaptability",
      description: "We constantly evolve our approaches to meet emerging business challenges"
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-neutral-800">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Our Principles</span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-4">Core Principles</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            These foundational principles guide our approach to every client engagement and business decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="bg-neutral-50 dark:bg-neutral-700 rounded-lg p-6 shadow-soft text-center hover:shadow-medium transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mx-auto flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                {principle.icon}
              </div>
              <h3 className="text-xl font-display font-medium text-neutral-900 dark:text-white mb-3">{principle.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {principle.description}
              </p>
              <div className="border-t border-primary-200 dark:border-primary-700/30 w-16 mx-auto mt-6 pt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Our Mission & Vision</h2>
            
            <div className="mb-8 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-4">Our Mission</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                To revolutionize business consulting by providing integrated, technology-driven solutions 
                that enable organizations to thrive in a rapidly evolving business landscape while maintaining 
                the highest standards of compliance and operational excellence.
              </p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-medium text-primary-600 dark:text-primary-400 mb-4">Our Vision</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                To be the most trusted and innovative consulting partner for businesses across sectors, 
                known for our transformative solutions and commitment to client success.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img 
                src={missionImg} 
                alt="Our Mission and Vision at Cyinov Consulting" 
                className="w-full h-[400px] object-cover" 
                loading="lazy" 
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600/20 to-transparent"></div>
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
    <section className="section-padding bg-white dark:bg-neutral-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img src={valuesImg} alt="Our Core Values" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-primary-600/20 to-transparent"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Our Values</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Core Values</h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mr-4">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">{value.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
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
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Specialization</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Our Expertise</h2>
            <div className="space-y-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{area.name}</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{area.percentage}%</span>
                  </div>
                  <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-400 dark:bg-blue-500 rounded-full transition-all duration-1000" 
                      style={{ width: `${Math.min(area.percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-soft border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Industry Experience</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
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
    <section className="section-padding bg-primary-600 dark:bg-primary-700">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl sm:text-5xl font-display font-medium text-blue-300 mb-2">
              <CountUp end={20} suffix="+" duration={2.5} />
            </div>
            <p className="text-white/80 uppercase tracking-wide text-sm">Happy Clients</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl sm:text-5xl font-display font-medium text-blue-300 mb-2">
              <CountUp end={5} suffix="+" duration={2.5} />
            </div>
            <p className="text-white/80 uppercase tracking-wide text-sm">Years Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl sm:text-5xl font-display font-medium text-blue-300 mb-2">
              <CountUp end={50} duration={2.5} />
            </div>
            <p className="text-white/80 uppercase tracking-wide text-sm">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="section-padding bg-white dark:bg-neutral-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Get Started</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-neutral-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Whether you're a startup looking to establish strong foundations or an established 
            enterprise seeking transformation, we offer the expertise, resources, and commitment 
            to help you achieve your business objectives.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-250 text-sm font-medium"
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
      <CallToAction />
    </div>
  );
};

export default AboutUs;
