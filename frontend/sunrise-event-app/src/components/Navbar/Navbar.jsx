import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arrow_icon from "../../assets/arrow_icon.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <h2>Sunrise Event</h2>
      </div>
      <div className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={handleToggle}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={handleToggle}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/booking" onClick={handleToggle}>
            Booking
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleToggle}>
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={handleToggle}>
            Log in <img src={arrow_icon} alt="arrow icon" style={{ width: "17px", paddingTop: "2px" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
