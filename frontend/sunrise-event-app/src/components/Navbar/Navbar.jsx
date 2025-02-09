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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <div className="container">
      <div className="navbox">
      <div className="brand " >
        Sunrise Event
      </div>
        <a href="/" className="home">Home</a>
        <a href="/about">Gallery</a>
        <a href="/services">Services</a>
        <a href="/booking">Booking</a>
        <a href="/contact">Contact</a>
        <a href="/login" ><div className="login">Log In<img src={arrow_icon} alt="" style={{ paddingTop: "2px" ,width:"17px"}}/></div></a>
        
      </div>
    </div>
=======
=======
>>>>>>> Stashed changes
    <nav className="navbar ">
      <div className="brand">
        <h2>Sunrise Event</h2>
      </div>
      <div className="toggle-button" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={handleToggle}>Home</Link></li>
        <li><Link to="/services" onClick={handleToggle}>Services</Link></li>
        <li><Link to="/gallery" onClick={handleToggle}>Gallery</Link></li>
        <li><Link to="/booking" onClick={handleToggle}>Booking</Link></li>
        <li><Link to="/contact" onClick={handleToggle}>Contact us</Link></li>
        <li><Link to="/login" onClick={handleToggle}>Log in <img src={arrow_icon} alt="" /></Link></li>
      </ul>
    </nav>
>>>>>>> Stashed changes
  );
}

export default Navbar;
