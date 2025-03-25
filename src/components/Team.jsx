import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import teamHero from '../assets/team-hero.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';

const TeamMember = ({ image, name, position, description, social }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-blue-600 mb-4">{position}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        {social.linkedin && (
          <a 
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {social.twitter && (
          <a 
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        )}
        {social.email && (
          <a 
            href={`mailto:${social.email}`}
            className="text-gray-600 hover:text-red-500 transition-colors"
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
      name: "John Smith",
      position: "CEO & Founder",
      description: "Over 20 years of experience in business consulting and strategic management.",
      social: {
        linkedin: "https://linkedin.com/in/john-smith",
        twitter: "https://twitter.com/johnsmith",
        email: "john.smith@cyinov.com"
      }
    },
    {
      image: team2,
      name: "Sarah Johnson",
      position: "Legal Compliance Director",
      description: "Expert in regulatory compliance and corporate law with 15 years experience.",
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        email: "sarah.johnson@cyinov.com"
      }
    },
    {
      image: team3,
      name: "Michael Chen",
      position: "Tax Advisory Lead",
      description: "Certified tax expert with extensive experience in international taxation.",
      social: {
        linkedin: "https://linkedin.com/in/michael-chen",
        twitter: "https://twitter.com/michaelchen",
        email: "michael.chen@cyinov.com"
      }
    },
    {
      image: team4,
      name: "Emily Brown",
      position: "Market Research Head",
      description: "Specialized in market analysis and consumer behavior research.",
      social: {
        linkedin: "https://linkedin.com/in/emily-brown",
        twitter: "https://twitter.com/emilybrown",
        email: "emily.brown@cyinov.com"
      }
    },
    {
      image: team5,
      name: "David Wilson",
      position: "HR Director",
      description: "Leading human capital management and organizational development.",
      social: {
        linkedin: "https://linkedin.com/in/david-wilson",
        email: "david.wilson@cyinov.com"
      }
    },
    {
      image: team6,
      name: "Lisa Rodriguez",
      position: "Client Relations Manager",
      description: "Dedicated to ensuring exceptional client service and satisfaction.",
      social: {
        linkedin: "https://linkedin.com/in/lisa-rodriguez",
        twitter: "https://twitter.com/lisarodriguez",
        email: "lisa.rodriguez@cyinov.com"
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-blue-600">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"
                       className="text-gray-600 hover:text-blue-600">
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`}
                       className="text-gray-600 hover:text-blue-600">
                      <FaEnvelope size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;