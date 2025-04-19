import React from 'react';

const TermsOfService = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Terms of Service</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Last Updated: April 19, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert transition-colors duration-200 text-gray-700 dark:text-gray-300">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">1. Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service constitute a legally binding agreement made between you and Cyinov concerning your access to and use of our website and services.
            </p>
            <p>
              You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the website and you must discontinue use immediately.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">2. Intellectual Property Rights</h2>
            <p className="mb-4">
              Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
            <p>
              Provided that you are eligible to use the website, you are granted a limited license to access and use the website and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">3. User Representations</h2>
            <p className="mb-4">
              By using the website, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">All registration information you submit will be true, accurate, current, and complete.</li>
              <li className="mb-2">You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li className="mb-2">You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li className="mb-2">You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the website.</li>
              <li className="mb-2">You will not access the website through automated or non-human means, whether through a bot, script, or otherwise.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">4. Prohibited Activities</h2>
            <p className="mb-4">
              You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p>
              As a user of the website, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li className="mb-2">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li className="mb-2">Circumvent, disable, or otherwise interfere with security-related features of the website.</li>
              <li className="mb-2">Use any information obtained from the website in order to harass, abuse, or harm another person.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-200">5. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at legal@cyinov.com or by mail at: Cyinov, 123 Business Street, Tech City, TC 12345, Country.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
