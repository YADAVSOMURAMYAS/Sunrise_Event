import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arrow_icon from "../../assets/arrow_icon.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand ">
        <h2>Sunrise Event</h2>
      </div>

      <ul className="nav-links ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li className="login"><Link to="/login">Log in <img src={arrow_icon} alt="" /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
