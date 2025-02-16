import React from "react";
import calendarImg from "../../assets/marriageHome4.png"; // Replace with actual image path

const MultiEvent4 = () => {
  return (
    <div className="mt-10 personalize-container flex flex-col-reverse md:flex-row">
      <div className="text-section md:basis-2/5 flex flex-col pt-10 md:pt-80 px-6 md:pl-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl pb-3 md:pb-5">
          <div className="number text-7xl md:text-9xl pb-3 md:pb-5">04</div> 
          Elegant Comfort: Premium Rental Furniture & Seating
        </h2>
        <p className="text-base md:text-lg">
        Transform your event space with our exquisite rental furniture and perfectly curated seating arrangements. Whether it’s a grand wedding, an intimate Haldi ceremony, or a festive gathering, we provide stylish and comfortable seating that blends tradition with elegance. Let your guests relax and enjoy the celebration in a beautifully arranged setting!
        </p>
      </div>
      <div className="image-section md:basis-3/5">
        <img src={calendarImg} alt="Calendar" className="calendar-image w-full" />
      </div>
    </div>
  );
};

export default MultiEvent4;
