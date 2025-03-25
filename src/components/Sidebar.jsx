import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const Sidebar = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', values);
    setShowSuccess(true);
    resetForm();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <aside className="w-full lg:w-80 lg:sticky lg:top-24 space-y-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Quick Links Section */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Our Services</h3>
        <ul className="space-y-2">
          <li>
            <a href="#business-strategy" className="text-blue-600 hover:text-blue-800 transition-colors">
              Business Strategy
            </a>
          </li>
          <li>
            <a href="#financial-advisory" className="text-blue-600 hover:text-blue-800 transition-colors">
              Financial Advisory
            </a>
          </li>
          <li>
            <a href="#digital-transformation" className="text-blue-600 hover:text-blue-800 transition-colors">
              Digital Transformation
            </a>
          </li>
          <li>
            <a href="#market-analysis" className="text-blue-600 hover:text-blue-800 transition-colors">
              Market Analysis
            </a>
          </li>
        </ul>
      </section>

      {/* About Us Section */}
      <section className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">About Us</h3>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            src="/src/assets/about-us.jpg"
            alt="Cyinov Team"
            className="rounded-lg object-cover w-full h-48"
          />
        </div>
        <p className="text-gray-600 mb-4">
          Cyinov Consulting brings years of expertise in business transformation and innovation. 
          We're dedicated to helping businesses achieve their full potential through strategic guidance 
          and tailored solutions.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </Form>
        </Formik>

        {/* Success Message */}
        {showSuccess && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
      </section>
    </aside>
  );
};

export default Sidebar;