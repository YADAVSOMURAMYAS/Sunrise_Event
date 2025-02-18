import React from "react";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: checked
        ? [...formData.services, name]
        : formData.services.filter((service) => service !== name),
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-yellow-100 shadow-lg rounded-lg border border-yellow-300">
      <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
        Event Requirements 🎉
      </h2>

      {/* Venue Status */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">
          Venue Status 🏛️
        </label>
        <select
          name="venueStatus"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.venueStatus}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="booked">Already Booked</option>
          <option value="need help">Need Help Booking</option>
        </select>
      </div>

      {/* Special Requests */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-yellow-900">
          Special Requests ✨
        </label>
        <textarea
          name="specialRequests"
          className="w-full p-3 mt-1 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-600 bg-yellow-50"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any special requirements..."
          rows="3"
        ></textarea>
      </div>

      {/* Services Required */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-yellow-900">
          Services Required 🛠️
        </label>
        <div className="flex flex-wrap gap-3 mt-2">
          {["Catering", "Photography", "Decorations", "Music", "Lighting", "Transportation", "Security", "AV Equipment", "Entertainment", "Venue Setup", "Event Planning", "Event Coordination", "Guest Services", "Favors & Gifts", "Floral Arrangements", "Rentals", "Audio-Visual Support", "Sound System", "Bartending", "Cleaning Services"]
.map((service) => (
            <label key={service} className="flex items-center gap-2 bg-yellow-200 px-4 py-2 rounded-lg cursor-pointer shadow-md hover:bg-yellow-300 transition duration-300">
              <input
                type="checkbox"
                name={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                className="accent-yellow-600"
              />
              {service}
            </label>
          ))}
        </div>
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

export default Step3;
