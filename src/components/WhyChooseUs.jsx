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
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Why Partner with Cyinov Consulting?
        </h1>
        
        {/* Why Partner with Cyinov Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.slice(0, 3).map((reason, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{reason.title}</h3>
                  <ul className="space-y-3">
                    {reason.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
              {reasons.slice(3).map((reason, index) => (
                <div key={index + 3} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{reason.title}</h3>
                  <ul className="space-y-3">
                    {reason.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Our Approach</h2>
                <div className="space-y-6">
                  {approaches.map((approach, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{approach.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{approach.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img src={approachImg} alt="Our Approach to Business Consulting" className="w-full h-[400px] object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Integration */}
        <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img src={techImg} alt="Technology Integration" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Technology Integration</h2>
                <div className="grid grid-cols-1 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-blue-500 dark:bg-blue-600 text-white p-4 rounded-lg">
                      <FaLaptopCode className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Commitment */}
        <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img src={clientSuccessImg} alt="Client Success Commitment" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Client Success Commitment</h2>
                <div className="space-y-4">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                      <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-2">
                        <FaUserTie className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{commitment}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Quality Assurance</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Our quality management system ensures:</p>
                <div className="space-y-4">
                  {qualityProcesses.map((process, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                      <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-2">
                        <FaClipboardCheck className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{process}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img src={qualityImg} alt="Quality Assurance" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Ready */}
        <section className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img src={whyUsImg} alt="Future Ready" className="w-full h-[400px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">Future Ready</h2>
                <div className="space-y-4">
                  {futureStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
                      <div className="bg-blue-500 dark:bg-blue-600 rounded-full p-2">
                        <FaClipboardCheck className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 mt-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Join hands with Cyinov Consulting for innovative solutions that drive growth and success.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg 
                     hover:bg-blue-700 transition-all duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyChooseUs;