import React from "react";
import { Link } from "react-router-dom";
import "./BookingSection.css"; // Importing CSS file

const BookingSection = () => {
  return (
    <section className="booking-container">
      <div className="booking-content">
        <h2>Ready for an Unforgettable Experience?</h2>
        <p>
          Secure your spot at the most anticipated events of the year! Limited tickets available - Don't miss out on extraordinary moments.
        </p>
        <div className="button-wrapper">
          <Link to="/booking">
            <button className="booking-button">Book Now →</button>
          </Link>
        </div>
        <div className="booking-features">
          <span>✔ Instant Confirmation</span>
          <span>✔ Best Price Guarantee</span>
          <span>✔ 24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
