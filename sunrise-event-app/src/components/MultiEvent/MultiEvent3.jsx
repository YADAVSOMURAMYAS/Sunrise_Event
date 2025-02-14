import React from "react";
import "./MultiEvent3.css";
import calendarImg from "../../assets/marriageHome3.png"; // Replace with actual image path

const MultiEvent3 = () => {
  return (
    <div className="personalize-container flex flex-row">
        <div className="image-section basis-2/3">
        <img src={calendarImg} alt="Calendar" className="calendar-image" />
        </div>
      <div className="text-section basis-1/3 flex flex-col pt-60 pr-20">
        <h2 className="text-4xl pb-5">
          <div className="number text-9xl pb-5">03</div> Golden Glow: Celebrate Your Haldi Ceremony
        </h2>
        <p className="text-lg ">
        Immerse yourself in the vibrant hues of turmeric and traditions with our expert Haldi ceremony planning. From floral décor to soulful music, we curate every detail to create a joyous and heartwarming pre-wedding celebration. Let the laughter, rituals, and golden glow set the perfect tone for your big day!</p>
      </div>
      
    </div>
  );
};

export default MultiEvent3;
