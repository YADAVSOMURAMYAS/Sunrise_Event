import React, { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  // Validation function
  const validateInput = (name, value) => {
    let errorMsg = "";
    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        errorMsg = "Please enter a valid email address.";
      }
    } else if (name === "phone") {
      const phonePattern = /^[6-9]\d{9}$/; // Ensures 10 digits and starts with 6-9
      if (!phonePattern.test(value)) {
        errorMsg = "Enter a valid 10-digit phone number starting with 6-9.";
      }
    }
    return errorMsg;
  };

  // Handle input change with validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate and set errors
    const errorMsg = validateInput(name, value);
    setErrors({ ...errors, [name]: errorMsg });
  };

  // Check if the form is valid
  const isFormValid = !errors.email && !errors.phone && formData.email && formData.phone;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-yellow-100 shadow-lg rounded-lg border border-yellow-300">
      <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
        Contact Information 📞
      </h2>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">Full Name</label>
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
        <label className="block text-lg font-medium text-yellow-900">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-yellow-900">Preferred Contact Method</label>
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
          className={`px-6 py-3 text-lg font-semibold text-white rounded-lg shadow-md transition duration-300 ${
            isFormValid ? "bg-yellow-600 hover:bg-yellow-700" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={isFormValid ? nextStep : undefined}
          disabled={!isFormValid}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Step2;
