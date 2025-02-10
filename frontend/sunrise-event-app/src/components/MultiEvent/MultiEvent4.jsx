import React from "react";
import "./MultiEvent4.css";
import calendarImg from "../../assets/marriageHome4.png"; // Replace with actual image path

const MultiEvent4 = () => {
  return (
    <div className="personalize-container flex flex-row">
        
      <div className="text-section basis-2/5 flex flex-col pt-80 pl-20">
        <h2 className="text-4xl pb-5">
          <div className="number text-9xl pb-5">04</div> Elegant Comfort: Premium Rental Furniture & Seating
        </h2>
        <p className="text-lg ">
        Transform your event space with our exquisite rental furniture and perfectly curated seating arrangements. Whether it’s a grand wedding, an intimate Haldi ceremony, or a festive gathering, we provide stylish and comfortable seating that blends tradition with elegance. Let your guests relax and enjoy the celebration in a beautifully arranged setting!</p>
      </div>
      <div className="image-section basis-3/5">
        <img src={calendarImg} alt="Calendar" className="calendar-image w-screen" />
        </div>
      
    </div>
  );
};

export default MultiEvent4;
