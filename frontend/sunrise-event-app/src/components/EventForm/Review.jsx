import React, { useState } from "react";
import { generateEventPDF } from "../PDFGenerator";

const Review = ({ formData, prevStep, handleSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleFinalSubmit = async () => {
    try {
      await handleSubmit(); // Wait for submission to complete
      setSubmitted(true);   // Now update state
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Review Your Details</h2>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold">Basic Details</h3>
        <p><strong>Event Type:</strong> {formData.eventType}</p>
        <p><strong>Event Date:</strong> {formData.eventDate}</p>
        <p><strong>Location:</strong> {formData.location}</p>
        <p><strong>Guest Count:</strong> {formData.guestCount}</p>
        <p><strong>Budget Range:</strong> {formData.budgetRange}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold">Contact Information</h3>
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Preferred Contact:</strong> {formData.preferredContact}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold">Event Requirements</h3>
        <p><strong>Venue Status:</strong> {formData.venueStatus}</p>
        <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
        <p><strong>Services Required:</strong> {formData.services.join(", ")}</p>
      </div>

      <div className="flex justify-between mt-4">
        <button className="btn btn-secondary" onClick={prevStep}>Back</button>
        {!submitted ? (
          <button className="btn btn-success" onClick={handleFinalSubmit}>Submit</button>
        ) : (
          <button className="btn btn-primary" onClick={() => generateEventPDF(formData)}>Download PDF</button>
        )}
      </div>
    </div>
  );
};

export default Review;
