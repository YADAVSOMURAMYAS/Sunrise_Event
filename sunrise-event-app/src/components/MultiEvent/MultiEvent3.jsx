import React from "react";
import calendarImg from "../../assets/marriageHome3.png"; // Replace with actual image path

const MultiEvent3 = () => {
  return (
    <div className="mt-10 personalize-container flex flex-col md:flex-row">
      <div className="image-section md:basis-2/3">
        <img src={calendarImg} alt="Calendar" className="calendar-image w-full md:w-auto" />
      </div>
      <div className="text-section md:basis-1/3 flex flex-col pt-10 md:pt-60 px-6 md:pr-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl pb-3 md:pb-5">
          <div className="number text-7xl md:text-9xl pb-3 md:pb-5">03</div> 
          Golden Glow: Celebrate Your Haldi Ceremony
        </h2>
        <p className="text-base md:text-lg">
        Immerse your Haldi ceremony in vibrant colors and a touch of tradition with our exquisitely curated seating arrangements. Whether it’s a cozy backyard setup or a grand festive gathering, we provide stylish decor and comfortable seating that complements the joyous spirit of this sacred ritual. Let every moment be filled with laughter, love, and a beautifully arranged space where traditions meet elegance!             </p>
      </div>
    </div>
  );
};

export default MultiEvent3;
