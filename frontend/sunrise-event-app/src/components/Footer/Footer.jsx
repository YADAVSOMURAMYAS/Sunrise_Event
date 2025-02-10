import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Event Street, <strong>Mumbai, India</strong></p>
          <p><i className="fas fa-phone"></i> +91 9876543210</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:info@sunriseevent.com">info@sunriseevent.com</a></p>
        </div>

        {/* About the Company */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Sunrise Event specializes in weddings, corporate events, and private parties. We bring your vision to life with elegance and perfection.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;