import React from "react";
import generatePDF from "../../utils/PDFGenerator"; // Ensure correct path

const Summary = ({ formData }) => {
  return (
    <div>
      <h2>Summary</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Event Type:</strong> {formData.eventType}</p>
      <p><strong>Event Date:</strong> {formData.date}</p>
      <p><strong>Guests:</strong> {formData.guests}</p>
      <p><strong>Venue:</strong> {formData.venue}</p>

      <button onClick={() => generatePDF(formData)}>Download PDF</button>
    </div>
  );
};

export default Summary;
