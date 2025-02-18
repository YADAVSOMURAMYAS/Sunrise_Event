import React, { useEffect, useState } from "react";
import { generateEventPDF } from "../PDFGenerator";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const [eventData, setEventData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("submittedEventData");
    if (storedData) {
      setEventData(JSON.parse(storedData));
    } else {
      navigate("/"); // Redirect to home if no data found
    }
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Submission Successful!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for submitting your event details. You can now download your event details as a PDF.
        </p>

        {/* Download PDF Button */}
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all mb-3"
          onClick={() => generateEventPDF(eventData)}
        >
          Download PDF
        </button>

        {/* Home Button */}
        <button
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all"
          onClick={() => navigate("/")} // ✅ Navigate to home page
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
