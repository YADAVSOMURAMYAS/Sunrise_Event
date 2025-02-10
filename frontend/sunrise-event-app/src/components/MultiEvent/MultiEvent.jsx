import React from "react";
import "./MultiEvent.css";
import calendarImg from "../../assets/marriageHome1.png"; // Replace with actual image path

const MultiEvent = () => {
  return (
    <div className="personalize-container flex flex-row">
        <div className="image-section basis-2/3">
        <img src={calendarImg} alt="Calendar" className="calendar-image" />
        </div>
      <div className="text-section basis-1/3 flex flex-col pt-60 pr-20">
        <h2 className="text-4xl pb-5">
          <div className="number text-9xl pb-5">01</div> Personalize Your Wedding
        </h2>
        <p className="text-lg ">
        Create unforgettable wedding moments with our expert event planning services. From venue decoration to catering, we handle everything seamlessly, ensuring a stress-free and magical celebration of love.
        </p>
      </div>
      
    </div>
  );
};

export default MultiEvent;
