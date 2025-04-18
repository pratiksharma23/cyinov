import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number')
    .nullable(),
  subject: Yup.string()
    .min(5, 'Subject is too short')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message is too short')
    .required('Message is required'),
});

const Contact = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // TODO: Implement form submission logic
    console.log('Form submitted:', values);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="bg-gray-900 py-16">
      <ToastContainer theme="dark" />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Send us a Message</h2>
            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">Full Name</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-2 rounded-lg bg-gray-700 border focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400
                        ${touched.name && errors.name ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">Email Address</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-2 rounded-lg bg-gray-700 border focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400
                        ${touched.email && errors.email ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-200 mb-2">Phone Number (optional)</label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`w-full px-4 py-2 rounded-lg bg-gray-700 border focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400
                        ${touched.phone && errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-200 mb-2">Subject</label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-2 rounded-lg bg-gray-700 border focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400
                        ${touched.subject && errors.subject ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    <ErrorMessage name="subject" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-200 mb-2">Message</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="4"
                      className={`w-full px-4 py-2 rounded-lg bg-gray-700 border focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400
                        ${touched.message && errors.message ? 'border-red-500' : 'border-gray-600'}`}
                    />
                    <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-lg 
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'} 
                      transition-colors duration-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-indigo-400 text-xl mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-100">Office Locations</h3>
                    <p className="text-gray-300">Gurgaon, Delhi, Mumbai & Jaipur</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-indigo-400 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-100">Phone</h3>
                    <p className="text-gray-300">+91 8800203969</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-indigo-400 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-100">Email</h3>
                    <p className="text-gray-300">info@cyinov.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-gray-800 rounded-lg shadow-lg shadow-black/20 p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-300">Connect With Us</h2>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/company/cyinovconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/cyinovconsulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61574960935041" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;