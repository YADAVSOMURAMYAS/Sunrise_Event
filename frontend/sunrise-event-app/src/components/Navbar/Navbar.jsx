import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import arrow_icon from "../../assets/arrow_icon.svg"

function Navbar() {
  return (
    <div className="container">
      <div className="navbox">
      <div className="brand " >
        Sunrise Event
      </div>
        <a href="/" className="home">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/services">Services</a>
        <a href="/booking">Booking</a>
        <a href="/contact">Contact</a>
        <a href="/login" ><div className="login">Log In<img src={arrow_icon} alt="" style={{ paddingTop: "8px" ,width:"17px"}}/></div></a>
        
      </div>
    </div>
  );
}

export default Navbar;
