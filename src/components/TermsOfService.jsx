import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Legal</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Last Updated: April 19, 2025
          </p>
        </div>

        <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors">
          <FaArrowLeft className="mr-2 text-sm" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-soft p-6 md:p-8 lg:p-10 prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              These Terms of Service constitute a legally binding agreement made between you and Cyinov concerning your access to and use of our website and services.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the website and you must discontinue use immediately.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Provided that you are eligible to use the website, you are granted a limited license to access and use the website and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">3. User Representations</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              By using the website, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the website.</li>
              <li>You will not access the website through automated or non-human means, whether through a bot, script, or otherwise.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">4. Prohibited Activities</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              As a user of the website, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the website.</li>
              <li>Use any information obtained from the website in order to harass, abuse, or harm another person.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">5. Contact Us</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at <a href="mailto:legal@cyinov.com" className="text-primary-600 dark:text-primary-400 hover:underline">legal@cyinov.com</a> or by mail at: Cyinov, 123 Business Street, Tech City, TC 12345, Country.
            </p>
          </section>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-250 text-sm font-medium">
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
