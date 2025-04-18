import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb 
        current="Privacy Policy"
        paths={[
          { label: "Privacy Policy", path: "/" }
        ]}
      />
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-6">Effective Date: 18/04/2025</p>
            
            <div className="text-gray-300 space-y-6">
              <p>
                Cyinov Consulting ("we", "our", "us") is committed to protecting your privacy. 
                This Privacy Policy outlines how we collect, use, and safeguard your information 
                when you visit our website or engage with our consulting services.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">1. Information We Collect</h2>
                <p className="mb-2">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium text-gray-200">Personal Information:</span> Name, 
                    email address, company name, job title, and other contact details.
                  </li>
                  <li>
                    <span className="font-medium text-gray-200">Usage Information:</span> IP address, 
                    browser type, device information, pages visited, and the date/time of your visit.
                  </li>
                  <li>
                    <span className="font-medium text-gray-200">Client Information:</span> Any 
                    business-related data shared during our consulting engagement.
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">2. How We Use Your Information</h2>
                <p className="mb-2">We use the information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and manage consulting services</li>
                  <li>Respond to inquiries and communications</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">3. Sharing of Information</h2>
                <p className="mb-2">We do not sell or rent your personal information. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who assist in our operations (under confidentiality obligations)</li>
                  <li>Law enforcement or regulatory agencies, if required by law</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">4. Cookies</h2>
                <p>
                  Our website may use cookies to enhance your experience. You can adjust your browser 
                  settings to refuse cookies, but some features may not function properly.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">5. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal data. 
                  However, no system is 100% secure.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">6. Your Rights</h2>
                <p>
                  You have the right to access, correct, or request deletion of your personal information. 
                  Contact us at info@cyinov.com for any data-related requests.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. Changes will be posted on this page 
                  with the updated effective date.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">8. Contact Us</h2>
                <p>For any privacy-related inquiries, please contact:</p>
                <p className="mt-2">Cyinov Consulting</p>
                <p>Email: <a href="mailto:info@cyinov.com" className="text-blue-400 hover:text-blue-300">info@cyinov.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
