import React from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-yellow-100 shadow-lg rounded-lg border border-yellow-300">
      <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
        Contact Information 📞
      </h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-yellow-900">
          Preferred Contact Method
        </label>
        <select
          name="preferredContact"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.preferredContact}
          onChange={handleChange}
        >
          <option value="email">Email</option>
          <option value="call">Call</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="px-6 py-3 text-lg font-semibold text-yellow-900 bg-yellow-300 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
          onClick={prevStep}
        >
          ← Back
        </button>
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
          onClick={nextStep}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Step2;
