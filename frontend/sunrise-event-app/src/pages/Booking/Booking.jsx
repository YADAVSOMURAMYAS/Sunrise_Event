import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Booking.css"; // Import CSS for styling

const Booking = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div>
      <Navbar />
      <div className="booking-container">
        <h1>Book Your Event</h1>
        <p>Plan your perfect event with us! Click the button below to proceed.</p>
        <button className="booking-button" onClick={() => navigate("/event-booking-form")}>
          Proceed to Booking
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
