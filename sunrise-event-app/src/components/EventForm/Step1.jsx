import React, { useState } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.eventType) newErrors.eventType = "Event type is required.";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required.";
    if (!formData.location.trim()) newErrors.location = "Location cannot be empty.";
    if (!formData.guestCount || formData.guestCount <= 0)
      newErrors.guestCount = "Enter a valid guest count.";
    if (!formData.budgetRange) newErrors.budgetRange = "Budget range is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      nextStep();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-yellow-100 shadow-lg rounded-xl border border-yellow-300">
      <h2 className="text-3xl font-bold text-center text-yellow-800 mb-6 flex items-center justify-center">
        🎉 Event Details
      </h2>

      {/* Event Type */}
      <div className="mb-4">
        <label className="block text-lg font-semibold text-yellow-900">Event Type</label>
        <select
          name="eventType"
          className={`w-full p-3 mt-1 border border-yellow-400 rounded-lg bg-yellow-50 focus:ring-2 ${
            errors.eventType ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-500"
          }`}
          value={formData.eventType}
          onChange={handleChange}
        >
          <option value="">Select Event Type</option>
          <option value="wedding">💍 Wedding</option>
          <option value="birthday">🎂 Birthday</option>
          <option value="corporate">🏢 Corporate</option>
        </select>
        {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
      </div>

      {/* Event Date */}
      <div className="mb-4">
        <label className="block text-lg font-semibold text-yellow-900">Event Date</label>
        <input
          type="date"
          name="eventDate"
          className={`w-full p-3 mt-1 border border-yellow-400 rounded-lg bg-yellow-50 focus:ring-2 ${
            errors.eventDate ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-500"
          }`}
          value={formData.eventDate}
          onChange={handleChange}
        />
        {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-lg font-semibold text-yellow-900">Location</label>
        <input
          type="text"
          name="location"
          placeholder="📍 Enter event location"
          className={`w-full p-3 mt-1 border border-yellow-400 rounded-lg bg-yellow-50 focus:ring-2 ${
            errors.location ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-500"
          }`}
          value={formData.location}
          onChange={handleChange}
        />
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
      </div>

      {/* Guest Count */}
      <div className="mb-4">
        <label className="block text-lg font-semibold text-yellow-900">Guest Count</label>
        <input
          type="number"
          name="guestCount"
          placeholder="👥 Enter number of guests"
          className={`w-full p-3 mt-1 border border-yellow-400 rounded-lg bg-yellow-50 focus:ring-2 ${
            errors.guestCount ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-500"
          }`}
          value={formData.guestCount}
          onChange={handleChange}
        />
        {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
      </div>

      {/* Budget Range */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-yellow-900">Budget Range</label>
        <select
          name="budgetRange"
          className={`w-full p-3 mt-1 border border-yellow-400 rounded-lg bg-yellow-50 focus:ring-2 ${
            errors.budgetRange ? "border-red-500 focus:ring-red-400" : "focus:ring-yellow-500"
          }`}
          value={formData.budgetRange}
          onChange={handleChange}
        >
          <option value="">Select Budget Range</option>
          <option value="low">💰 Low (₹10,000 - ₹50,000)</option>
          <option value="medium">💰💰 Medium (₹50,000 - ₹2,00,000)</option>
          <option value="high">💰💰💰 High (₹2,00,000+)</option>
        </select>
        {errors.budgetRange && <p className="text-red-500 text-sm mt-1">{errors.budgetRange}</p>}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Step1;
