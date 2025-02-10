import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arrow_icon from "../../assets/arrow_icon.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className={`navbox ${scrolled ? "scrolled" : ""}`}>
        <div className="brand">Sunrise Event</div>
        <Link to="/" className="home">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">
          <div className="login bg-colour">
            Log In
             </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
