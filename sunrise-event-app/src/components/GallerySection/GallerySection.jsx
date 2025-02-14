import React from "react";
import { Link } from "react-router-dom";
import "./GallerySection.css"; // Importing CSS file
import g1 from "../../assets/g1.avif";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg"; // Importing images from assets folder

const GallerySection = () => {
  return (
    <section className="gallery-container">
      <div className="gallery-content">
        <h2>Experience the Grandeur of Our Events</h2>
        <p>
          We specialize in curating <strong>royal, luxurious, and unforgettable events</strong>. 
          From elegant weddings to high-profile corporate gatherings, our expertise ensures 
          a seamless and grand experience. Take a glimpse at some of our finest moments.
        </p>
        <div className="gallery-images">
          <img src={g1} alt="Luxury Event" />
          <img src={g2} alt="Grand Celebration" />
          <img src={g3} alt="Royal Wedding" />
        </div>
        <div className="gallery-button-wrapper">
          <Link to="/gallery">
            <button className="gallery-button">
              View Full Gallery <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
