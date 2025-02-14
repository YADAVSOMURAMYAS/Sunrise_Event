import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../../assets/backgroundvideo.mp4";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video src={backgroundVideo} autoPlay loop muted></video>
      {/* Overlay Layer */}
      <div className="video-overlay">
        <h1>Plan Your Dream Event with Us</h1>
        <p>We bring your vision to life with perfection and creativity.</p>
        <Link to="/booking">
          <button className="book-now-button">Book Now →</button>
        </Link>
      </div>
    </div>
  );
};

export default VideoBackground;
