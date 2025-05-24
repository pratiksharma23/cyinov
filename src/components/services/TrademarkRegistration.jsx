import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrademark, FaArrowRight, FaTimes } from 'react-icons/fa';
import pricingImage from '../../assets/tmpricing.png';

const TrademarkRegistration = () => {
  const [formData, setFormData] = useState({
    // Applicant Information
    fullName: '',
    email: '',
    mobileNumber: '',
    alternativeContact: '',
    
    // Business Information
    businessName: '',
    businessAddress: '',
    businessType: '',
    
    // Trademark Details
    goodsDescription: '',
    selectedPackage: '',

    // Required Documents
    proofOfIdentity: null,
    proofOfBusiness: null,
    logoFile: null,

    // Declaration
    declaration: false
  });
  
  const [showImageModal, setShowImageModal] = useState(false);

  const businessTypes = [
    'Sole Proprietorship',
    'Partnership',
    'LLP',
    'Private Limited',
    'Public Limited'
  ];

  const packages = [
    { name: 'Basic', price: '1999' },
    { name: 'Standard', price: '4999' },
    { name: 'Premium', price: '11999' },
    { name: 'All in One', price: '14999' },
    { name: 'Trademark Registration and Objection', price: '3999' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
    } else if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trademark Registration</h1>
            <p className="text-xl text-blue-200">
              Protect your intellectual property with our comprehensive trademark registration service.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
          <svg 
            className="relative block w-full h-12"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".15" 
              className="fill-current text-gray-900"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".1" 
              className="fill-current text-gray-900"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              opacity=".05" 
              className="fill-current text-gray-900"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
            {/* Form Container */}
            <div className="w-full lg:w-3/5">
              <div className="bg-gray-800 rounded-lg shadow-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Applicant Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">Applicant Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Full Name*</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Email Address*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Mobile Number</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Alternative Contact</label>
                        <input
                          type="tel"
                          name="alternativeContact"
                          value={formData.alternativeContact}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">Business Information</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Business Name*</label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Business Address*</label>
                        <textarea
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Business Type*</label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        >
                          <option value="">Select Business Type</option>
                          {businessTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Trademark Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">Trademark Details</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Description of Goods/Services*</label>
                        <textarea
                          name="goodsDescription"
                          value={formData.goodsDescription}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                          placeholder="Please provide a detailed description of your goods/services"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Select Package*</label>
                        <select
                          name="selectedPackage"
                          value={formData.selectedPackage}
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-700 text-gray-100"
                        >
                          <option value="">Select a Package</option>
                          {packages.map((pkg, index) => (
                            <option key={index} value={pkg.name}>
                              {pkg.name} - ₹{pkg.price}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Required Documents */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-100">Required Documents</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Proof of Identity*</label>
                        <input
                          type="file"
                          name="proofOfIdentity"
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="mt-1 text-sm text-gray-400">Upload a valid government ID (Aadhar, PAN, etc.)</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Proof of Business*</label>
                        <input
                          type="file"
                          name="proofOfBusiness"
                          onChange={handleInputChange}
                          required
                          className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="mt-1 text-sm text-gray-400">Upload business registration document</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Logo File (if applicable)</label>
                        <input
                          type="file"
                          name="logoFile"
                          onChange={handleInputChange}
                          accept="image/*"
                          className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="mt-1 text-sm text-gray-400">Upload your logo in high resolution (PNG, JPG, SVG)</p>
                      </div>
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          name="declaration"
                          checked={formData.declaration}
                          onChange={handleInputChange}
                          required
                          className="h-4 w-4 text-blue-400 border-gray-600 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-300">
                          I hereby declare that the information provided above is true and correct to the best of my knowledge. 
                          I understand that any false or misleading information may result in the rejection of the trademark application.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit Application
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Image Container */}
            <div className="w-full lg:w-2/5">
              <div className="sticky top-8 bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">Trademark Registration Pricing</h3>
                <div className="flex justify-center">
                  <img 
                    src={pricingImage} 
                    alt="Trademark Registration Pricing" 
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setShowImageModal(true)}
                  />
                </div>
                <p className="text-sm text-gray-300 mt-2 text-center italic">Click on image to view full size</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-gray-100 hover:text-gray-300 focus:outline-none"
            >
              <FaTimes className="w-8 h-8" />
              <span className="sr-only">Close</span>
            </button>
            <div className="bg-gray-800 p-2 rounded-lg">
              <img 
                src={pricingImage} 
                alt="Trademark Registration Pricing" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrademarkRegistration;