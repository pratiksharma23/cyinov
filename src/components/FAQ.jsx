import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-700">
    <button
      className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors duration-200"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-semibold text-gray-100">{question}</span>
      <span className={`transform transition-transform duration-200 text-indigo-400 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="p-6 text-gray-300 whitespace-pre-wrap">{answer}</p>
    </div>
  </div>
);

const FAQCategory = ({ title, items, openIndex, setOpenIndex, startIndex }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-indigo-300 mb-4">{title}</h3>
    <div className="bg-gray-800 rounded-lg shadow-md shadow-black/20 overflow-hidden border border-gray-700">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === startIndex + index}
          onClick={() => setOpenIndex(openIndex === startIndex + index ? -1 : startIndex + index)}
        />
      ))}
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What makes Cyinov Consulting different from other consulting firms?",
          answer: "Our integrated approach sets us apart - we provide comprehensive solutions across legal, tax, market research, compliance, and HCM under one roof. This ensures seamless coordination and consistent quality across all business functions while saving you time and resources."
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer: "Yes, we serve clients ranging from startups to established enterprises. Our solutions are scalable and customized to meet the specific needs and budget of each business, regardless of its size."
        },
        {
          question: "What industries do you specialize in?",
          answer: "We have expertise across multiple sectors including manufacturing, technology, healthcare, retail, financial services, real estate, and education. Our team has specialized knowledge of industry-specific regulations and requirements."
        }
      ]
    },
    {
      title: "Legal Consulting",
      items: [
        {
          question: "Can you help with business registration and setup?",
          answer: "Yes, we provide end-to-end support for business registration, including structure selection, documentation, licensing, and regulatory compliance."
        },
        {
          question: "Do you handle ongoing legal compliance?",
          answer: "Absolutely. We offer continuous legal support and compliance monitoring to ensure your business stays updated with the latest regulations and requirements."
        }
      ]
    },
    {
      title: "Tax Advisory",
      items: [
        {
          question: "What tax services do you provide for international businesses?",
          answer: "Our international tax services include cross-border transaction planning, transfer pricing, double taxation agreements, and compliance with international tax regulations."
        },
        {
          question: "Can you help with tax disputes and audits?",
          answer: "Yes, we provide comprehensive support during tax audits and help resolve disputes with tax authorities, including representation and documentation support."
        }
      ]
    },
    {
      title: "Market Research",
      items: [
        {
          question: "How long does a typical market research project take?",
          answer: "Project timelines vary based on scope and complexity, typically ranging from 2-8 weeks. We'll provide a detailed timeline during initial consultation."
        },
        {
          question: "Do you provide customized research reports?",
          answer: "Yes, all our research reports are tailored to your specific requirements and include actionable insights relevant to your business objectives."
        }
      ]
    },
    {
      title: "Regulatory Compliance",
      items: [
        {
          question: "How do you stay updated with changing regulations?",
          answer: "Our team continuously monitors regulatory changes across industries. We have systems in place to immediately assess impact and update our clients about relevant changes."
        },
        {
          question: "Do you provide compliance training for our team?",
          answer: "Yes, we offer customized compliance training programs for your staff, including workshops, online modules, and documentation guidelines."
        }
      ]
    },
    {
      title: "Human Capital Management",
      items: [
        {
          question: "Can you help with recruitment?",
          answer: "Yes, we provide end-to-end recruitment services, including job analysis, candidate sourcing, screening, and onboarding support."
        },
        {
          question: "Do you assist with HR policy development?",
          answer: "We help develop comprehensive HR policies aligned with industry standards and your organizational culture, ensuring legal compliance and best practices."
        }
      ]
    },
    {
      title: "Engagement and Pricing",
      items: [
        {
          question: "How do you structure your fees?",
          answer: "We offer flexible engagement models including project-based, retainer-based, and hourly consultation options. Specific pricing depends on the scope of services and your requirements."
        },
        {
          question: "Do you offer packaged services?",
          answer: "Yes, we offer bundled service packages that provide cost-effective solutions for businesses needing multiple services. These can be customized based on your needs."
        }
      ]
    },
    {
      title: "Implementation and Support",
      items: [
        {
          question: "What kind of ongoing support do you provide?",
          answer: "We provide continuous support through dedicated account managers, regular review meetings, and a 24/7 support system for urgent queries."
        },
        {
          question: "How do you ensure quality in service delivery?",
          answer: "We maintain strict quality control processes, conduct regular service audits, and actively seek client feedback to continuously improve our services."
        }
      ]
    },
    {
      title: "Confidentiality and Security",
      items: [
        {
          question: "How do you handle sensitive business information?",
          answer: "We maintain strict confidentiality protocols and use secure systems for handling client information. All our staff sign comprehensive NDAs, and we follow industry-standard data protection practices."
        }
      ]
    },
    {
      title: "Getting Started",
      items: [
        {
          question: "What is your client onboarding process?",
          answer: "Our onboarding process includes:\n• Initial consultation to understand your needs\n• Proposal submission with detailed scope and timeline\n• Agreement finalization\n• Kick-off meeting and project initiation"
        },
        {
          question: "How quickly can you start working on our project?",
          answer: "After the initial consultation and agreement, we can typically begin work within 1-2 weeks, depending on the service requirements and current workload."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <FAQCategory
              key={categoryIndex}
              title={category.title}
              items={category.items}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
              startIndex={categoryIndex * 10} // Using 10 as a multiplier to ensure unique indices
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;