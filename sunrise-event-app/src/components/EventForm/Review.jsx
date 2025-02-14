import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Review = ({ formData, prevStep, handleSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFinalSubmit = async () => {
    try {
      await handleSubmit(); // Wait for the form submission
      localStorage.setItem("submittedEventData", JSON.stringify(formData)); // Store data in localStorage
      setSubmitted(true);
      setTimeout(() => navigate("/confirmation"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
        Review Your Details ✅
      </h2>

      {/* Basic Details */}
      <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 shadow-md mb-4">
        <h3 className="text-xl font-semibold text-yellow-800">📋 Basic Details</h3>
        <p><strong>🎭 Event Type:</strong> {formData.eventType}</p>
        <p><strong>📅 Event Date:</strong> {formData.eventDate}</p>
        <p><strong>📍 Location:</strong> {formData.location}</p>
        <p><strong>👥 Guest Count:</strong> {formData.guestCount}</p>
        <p><strong>💰 Budget Range:</strong> {formData.budgetRange}</p>
      </div>

      {/* Contact Information */}
      <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 shadow-md mb-4">
        <h3 className="text-xl font-semibold text-blue-800">📞 Contact Information</h3>
        <p><strong>📝 Full Name:</strong> {formData.fullName}</p>
        <p><strong>📧 Email:</strong> {formData.email}</p>
        <p><strong>📱 Phone:</strong> {formData.phone}</p>
        <p><strong>📬 Preferred Contact:</strong> {formData.preferredContact}</p>
      </div>

      {/* Event Requirements */}
      <div className="bg-green-100 p-4 rounded-lg border border-green-300 shadow-md">
        <h3 className="text-xl font-semibold text-green-800">🎈 Event Requirements</h3>
        <p><strong>🏛 Venue Status:</strong> {formData.venueStatus}</p>
        <p><strong>✨ Special Requests:</strong> {formData.specialRequests || "None"}</p>
        <p>
          <strong>🛠 Services Required:</strong>{" "}
          {formData.services.length > 0 ? formData.services.join(", ") : "None"}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="px-6 py-3 text-lg font-semibold text-gray-700 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
          onClick={prevStep}
        >
          ← Back
        </button>
        {!submitted ? (
          <button
            className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            onClick={handleFinalSubmit}
          >
            ✅ Submit
          </button>
        ) : (
          <p className="text-green-700 font-bold text-lg animate-pulse">
            ✅ Submission successful! Redirecting...
          </p>
        )}
      </div>
    </div>
  );
};

export default Review;
