import React from "react";
import "./Footer.css"; // Import CSS
import logo from "../../assets/logo.png"; // Import Logo (Place it inside 'src' folder)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Branding */}
        <div className="footer-section brand">
          <img src={logo} alt="Sunrise Event Logo" className="logo" />
          <h2>Sunrise Event</h2>
          <p className="text-slate-950">Your trusted partner in creating memorable experiences.</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Event Street, <strong>Mumbai, India</strong></p>
          <p><i className="fas fa-phone"></i> +91 9876543210</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:info@sunriseevent.com">info@sunriseevent.com</a></p>
        </div>

        {/* About the Company */}
        <div className="footer-section">
          <h3>About Sunrise Event</h3>
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
