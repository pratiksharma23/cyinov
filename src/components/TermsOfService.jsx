import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

const TermsOfService = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Breadcrumb 
        current="Terms of Service"
        paths={[
          { label: "Terms of Service", path: "/" }
        ]}
      />
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-gray-100 mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-6">Effective Date: 18/04/2025</p>
            
            <div className="text-gray-300 space-y-6">
              <p>
                These Terms of Use ("Terms") govern your use of the Cyinov Consulting website and services. 
                By accessing or using our site, you agree to be bound by these Terms.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">1. Use of Website</h2>
                <p>
                  You agree to use our website for lawful purposes only and not to engage in any 
                  activity that may harm the site or its users.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">2. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and design, is the 
                  property of Cyinov Consulting and protected by applicable intellectual property laws. 
                  You may not copy, distribute, or create derivative works without our permission.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">3. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for the 
                  content or privacy practices of those sites.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">4. Disclaimer</h2>
                <p>
                  The content on our website is for general informational purposes only and does not 
                  constitute professional advice. Use of the site is at your own risk.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">5. Limitation of Liability</h2>
                <p>
                  Cyinov Consulting is not liable for any direct, indirect, or incidental damages 
                  arising from your use of the website or our services.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">6. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of India. Any disputes shall be resolved 
                  exclusively in the courts of India.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">7. Changes to Terms</h2>
                <p>
                  We may revise these Terms at any time. Continued use of the site after changes 
                  are posted constitutes your acceptance.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-100 mb-3">8. Contact</h2>
                <p>For questions about these Terms, contact:</p>
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

export default TermsOfService;
