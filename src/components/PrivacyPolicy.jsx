import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <section className="section-padding bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="container max-w-5xl">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-4 uppercase tracking-wider">Legal</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 dark:text-white mb-4">Privacy Policy</h1>
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
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              At Cyinov, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              This privacy policy aims to give you information on how Cyinov collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up to our newsletter, purchase a product or service, or take part in a survey.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">2. The Data We Collect About You</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Identity Data includes first name, last name, username or similar identifier, title.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Financial Data includes bank account and payment card details.</li>
              <li>Transaction Data includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">4. Data Security</h2>
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-display font-medium text-neutral-900 dark:text-white mb-4">5. Contact Us</h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:privacy@cyinov.com" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@cyinov.com</a> or by mail at: Cyinov, 123 Business Street, Tech City, TC 12345, Country.
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

export default PrivacyPolicy;
