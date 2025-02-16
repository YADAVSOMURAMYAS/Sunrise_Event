import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="Event Decoration" className="about-img" />
       
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Creating Unforgettable Moments, One Event at a Time</h2>

        <p>
          At Sunrise Events, we bring dreams to life with our expert event 
          management services. From grand wedding decorations to elegant 
          reception setups, our team ensures every event is flawless, unique, 
          and unforgettable.
        </p>

        <p>
          Our expertise spans across wedding planning, Sangeet and Haldi 
          decorations, rental furniture, and customized sitting arrangements. 
          We take pride in curating events that reflect your style, culture, and 
          personality.
        </p>

        <p>
          Whether it's an intimate celebration or a lavish wedding, we 
          guarantee seamless execution, stunning decor, and personalized 
          touches that make your special day extraordinary.
        </p>
      </div>
    </div>
  );
};

export default About;
