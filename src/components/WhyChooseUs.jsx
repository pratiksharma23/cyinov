import React from 'react';
import { FaCheckCircle, FaCogs, FaUsers, FaChartLine, FaLaptopCode, 
         FaHandshake, FaStar, FaRocket, FaUserTie, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import approachImg from '../assets/company.jpeg';
import techImg from '../assets/TechIntegration.jpg';
import clientSuccessImg from '../assets/ClientSuccessCommitment.jpg';
import qualityImg from '../assets/QualityAssurance.jpg';
import whyUsImg from '../assets/tax.jpg';

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

  const technologies = [
    "Advanced Analytics Platforms",
    "Cloud-based Compliance Management Systems",
    "Automated Tax Calculation Tools",
    "Digital HR Management Solutions",
    "Real-time Reporting Dashboards"
  ];

  const commitments = [
    "Dedicated Account Managers",
    "24/7 Support System",
    "Regular Progress Reviews",
    "Quarterly Strategy Sessions",
    "Annual Performance Assessments"
  ];

  const qualityProcesses = [
    "Rigorous Quality Control Processes",
    "Regular Service Audits",
    "Client Feedback Integration",
    "Continuous Service Enhancement",
    "Professional Standards Compliance"
  ];

  const futureStrategies = [
    "Expanding our service portfolio",
    "Strengthening technological capabilities",
    "Enhancing delivery mechanisms",
    "Building stronger client relationships",
    "Contributing to sustainable business practices"
  ];

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Why Choose Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-6">
              Why Partner with Cyinov Consulting?
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              We combine deep industry expertise with innovative methodologies to deliver transformative solutions for your business challenges.
            </p>
          </div>
          
          {/* Why Partner with Cyinov Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 animate-fade-in">
            {reasons.slice(0, 3).map((reason, index) => (
              <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-display font-medium text-neutral-900 dark:text-white mb-4">{reason.title}</h3>
                <ul className="space-y-3">
                  {reason.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-neutral-700 dark:text-neutral-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-16 animate-fade-in delay-300">
            {reasons.slice(3).map((reason, index) => (
              <div key={index + 3} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 border border-neutral-200 dark:border-neutral-700">
                <h3 className="text-xl font-display font-medium text-neutral-900 dark:text-white mb-4">{reason.title}</h3>
                <ul className="space-y-3">
                  {reason.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-neutral-700 dark:text-neutral-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Our Approach</h2>
              <div className="space-y-8">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-medium mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">{approach.title}</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">{approach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <img src={approachImg} alt="Our Approach to Business Consulting" className="w-full h-[400px] object-cover" loading="lazy" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <img src={techImg} alt="Technology Integration" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-primary-600/20 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Innovation</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Technology Integration</h2>
              <div className="grid grid-cols-1 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center p-4 rounded-lg bg-white dark:bg-neutral-800 shadow-soft border border-neutral-200 dark:border-neutral-700">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mr-4">
                      <FaLaptopCode className="w-5 h-5" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Commitment */}
      <section className="section-padding bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <img src={clientSuccessImg} alt="Client Success Commitment" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-primary-600/20 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Client Success</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Our Commitment to You</h2>
              <div className="space-y-4">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg shadow-soft">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mr-4">
                      <FaUserTie className="w-5 h-5" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{commitment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-neutral-50 dark:bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Excellence</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-4">Quality Assurance</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">Our quality management system ensures:</p>
              <div className="space-y-4">
                {qualityProcesses.map((process, index) => (
                  <div key={index} className="flex items-center p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-soft border border-neutral-200 dark:border-neutral-700">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mr-4">
                      <FaClipboardCheck className="w-5 h-5" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{process}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <img src={qualityImg} alt="Quality Assurance" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Ready */}
      <section className="section-padding bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-lg overflow-hidden shadow-soft">
                <img src={whyUsImg} alt="Future Ready" className="w-full h-[400px] object-cover" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-primary-600/20 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Vision</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 dark:text-white mb-8">Future Ready</h2>
              <div className="space-y-4">
                {futureStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg shadow-soft">
                    <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 mr-4">
                      <FaRocket className="w-5 h-5" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{strategy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 dark:bg-primary-700">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join hands with Cyinov Consulting for innovative solutions that drive growth and success.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-250 hover:bg-neutral-100"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
