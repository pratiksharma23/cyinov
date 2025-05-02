import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import teamHero from '../assets/OurTeam.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const TeamMember = ({ image, name, position, description, expertise, social }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-4">{position}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-md font-semibold text-gray-700 dark:text-gray-100 mb-2">Key Expertise:</h4>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
          {expertise.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex space-x-4">        {social.linkedin && (          <a 
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
            aria-label={`${name}'s Twitter Profile`}
          >
            <FaTwitter size={20} />
          </a>
        )}        {social.email && (
          <a 
            href={`mailto:${social.email.replace('@', '[at]')}`}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-red-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${social.email}`;
            }}
            aria-label={`Email ${name}`}
          >
            <FaEnvelope size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      image: team1,
      name: "Shauryanker Kaushik",
      position: "Founder & Head - Legal & Regulatory Compliance (L&R)",
      description: "An accomplished Advocate at the Supreme Court of India and a renowned Trademark Attorney, Shauryanker specializes in intellectual property law, cybersecurity law, and regulatory compliance. With vast experience in litigation, IP portfolio management, and strategic brand protection, he has worked extensively on cross-border trademark issues. His expertise in legal tech and cybersecurity law further enhances Cyinov's commitment to offering cutting-edge legal solutions.",
      expertise: [
        "Intellectual Property Rights (IPR)",
        "Cybersecurity & Digital Forensics",
        "Trademark & Brand Protection",
        "Legal Tech Innovations",
        "Regulatory Compliance & Litigation"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/shauryanker",
        email: "info@cyinov.com"
      }
    },
    {
      image: team2,
      name: "Ankur",
      position: "Head - Human Capital Management (HCM)",
      description: "Ankur is a seasoned Human Capital Management expert with a strong background in workforce planning, talent acquisition, and HR compliance. With years of experience in corporate HR strategy, he specializes in building high-performance teams and optimizing organizational structures. His expertise helps businesses navigate complex labor laws while fostering a positive work environment.",
      expertise: [
        "Talent Acquisition & Retention",
        "Workforce Planning",
        "HR Compliance & Employee Relations",
        "Performance Management & Leadership Development"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/ankur-kaushik-65900112",
        email: "info@cyinov.com"
      }
    },
    {
      image: team3,
      name: "Anuj",
      position: "Head - Tax Advisory (TA)",
      description: "Anuj is a highly skilled tax consultant with extensive experience in corporate taxation, indirect taxes, and financial compliance. His deep understanding of national and international tax regulations allows him to craft effective tax strategies that minimize liabilities and ensure compliance. His work includes structuring financial models for businesses, offering strategic tax planning, and ensuring regulatory adherence.",
      expertise: [
        "Corporate Tax Planning",
        "Indirect Taxation",
        "Financial Compliance",
        "International Taxation & Transfer Pricing"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/anuj-kaushik-08680a6a",
        email: "info@cyinov.com"
      }
    },
    {
      image: team4,
      name: "Rajeev",
      position: "Head - Market & Product Research (MPR)",
      description: "With over two decades of experience in market and product research, Rajeev specializes in data-driven business insights that empower organizations to make informed decisions. He has worked with diverse industries, analyzing trends, customer behaviors, and competitive landscapes to provide actionable strategies. His analytical acumen helps businesses optimize their product positioning and market entry strategies.",
      expertise: [
        "Market & Consumer Research",
        "Competitive Intelligence",
        "Business Analytics & Strategy",
        "Product Positioning & Go-To-Market Planning"
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/rajeev-kaushik-65813426",
        email: "info@cyinov.com"
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-900">      <div className="relative w-full h-[400px] mb-12 overflow-hidden">
        <img 
          src={teamHero} 
          alt="Cyinov Consulting Team Members" 
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-black/50"></div>
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Our Team</h2>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Meet the Experts Behind Cyinov Consulting</h3>
          <p className="text-lg text-gray-200 max-w-3xl">
            At Cyinov Consulting, our team of dedicated professionals brings expertise across multiple domains to provide comprehensive business solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              expertise={member.expertise}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;