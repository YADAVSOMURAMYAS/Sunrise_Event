import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arrow_icon from "../../assets/arrow_icon.svg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbox ${isScrolled ? "scrolled" : ""}`}>
      <div className="brand">Sunrise Event</div>
      <a href="/" className="home">Home</a>
      <a href="/gallery">Gallery</a>
      <a href="/services">Services</a>
      <a href="/booking">Booking</a>
      <a href="/contact">Contact</a>
      <a href="/login">
        <div className="login">Log In</div>
      </a>
    </div>
  );
}

export default Navbar;
