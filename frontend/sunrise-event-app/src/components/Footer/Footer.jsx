import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Event Street,<strong>Mumbai, India</strong></p>
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
            <a href="#"><i className="fab fa-facebook-f"><InstagramIcon/></i></a>
            <a href="#"><i className="fab fa-twitter"> <YouTubeIcon/> </i></a>
            <a href="#"><i className="fab fa-linkedin-in"><FacebookIcon/> </i></a>
            <a href="#"><i className="fab fa-instagram"> <WhatsAppIcon/></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;