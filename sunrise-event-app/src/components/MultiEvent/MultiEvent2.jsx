import React from "react";
import calendarImg from "../../assets/marriageHome2.png"; // Replace with actual image path

const MultiEvent2 = () => {
  return (
    <div className="personalize-container flex flex-col-reverse md:flex-row">
      <div className="text-section md:basis-1/3 flex flex-col pt-10 md:pt-60 px-6 md:pl-20 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl pb-3 md:pb-5">
          <div className="number text-7xl md:text-9xl pb-3 md:pb-5">02</div> 
          Elevate Your Wedding Reception with Elegance
        </h2>
        <p className="text-base md:text-lg">
        Celebrate your wedding reception in style with our expert planning services. 
          From elegant décor to exquisite dining, we create a personalized and seamless experience, 
          making your special day truly unforgettable.
        </p>
      </div>
      <div className="image-section md:basis-2/3">
        <img src={calendarImg} alt="Calendar" className="calendar-image w-full " />
      </div>
    </div>
  );
};

export default MultiEvent2;
