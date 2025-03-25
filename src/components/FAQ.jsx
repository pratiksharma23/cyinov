import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="text-lg font-semibold text-gray-800">{question}</span>
      <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="p-6 text-gray-600">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What consulting services does Cyinov offer?",
      answer: "Cyinov offers a comprehensive range of consulting services including business strategy, financial advisory, digital transformation, and market analysis. Our expert team tailors solutions to meet your specific business needs."
    },
    {
      question: "How can Cyinov help my business grow?",
      answer: "We help businesses grow through strategic planning, market research, operational optimization, and innovative solutions. Our approach focuses on understanding your unique challenges and opportunities to deliver measurable results."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have expertise across multiple industries including technology, finance, healthcare, retail, and manufacturing. Our diverse experience allows us to bring best practices and innovative solutions to any sector."
    },
    {
      question: "How do you ensure client success?",
      answer: "We ensure client success through a combination of expert analysis, tailored strategies, regular communication, and measurable outcomes. Our team works closely with yours to implement solutions and track progress."
    }
  ];

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto rounded-lg shadow-md overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;