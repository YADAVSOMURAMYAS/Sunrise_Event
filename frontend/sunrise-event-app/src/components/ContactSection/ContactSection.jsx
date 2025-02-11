import React from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-container">
      <h2>Get in Touch</h2>
      <p>
        Have questions or need assistance? Reach out to us! We are here to help
        you plan and execute the perfect event.
      </p>
      <div className="contact-info">
        <p>
          <span className="icon">📞</span> Phone: <strong>9879879874</strong>
        </p>
        <p>
          <span className="icon">📧</span> Email:{" "}
          <strong>info@eventcompany.com</strong>
        </p>
        <p>
          <span className="icon">📍</span> Address: 123 Event Street, Grand City
        </p>
      </div>
      <Link to="/contact">
        <button className="contact-button">Contact Us →</button>
      </Link>
    </section>
  );
};

export default ContactSection;
