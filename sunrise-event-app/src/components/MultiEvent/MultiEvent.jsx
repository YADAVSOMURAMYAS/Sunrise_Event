import React from "react";
import calendarImg from "../../assets/marriageHome1.png"; // Replace with actual image path

const MultiEvent = () => {
  return (
    <div className="personalize-container flex flex-col md:flex-row">
      <div className="image-section md:basis-2/3">
        <img src={calendarImg} alt="Calendar" className="calendar-image w-full md:w-auto" />
      </div>
      <div className="text-section md:basis-1/3 flex flex-col pt-10 md:pt-60 px-6 md:pr-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl pb-3 md:pb-5">
          <div className="number text-7xl md:text-9xl pb-3 md:pb-5">01</div> 
          Personalize Your Wedding
        </h2>
        <p className="text-base md:text-lg">
        Create unforgettable wedding moments with our expert event planning services. From venue decoration to catering, we handle everything seamlessly, ensuring a stress-free and magical celebration of love.        </p>
      </div>
    </div>
  );
};

export default MultiEvent;
