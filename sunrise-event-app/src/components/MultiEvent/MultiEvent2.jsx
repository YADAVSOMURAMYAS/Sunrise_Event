import React from "react";
import "./MultiEvent2.css";
import calendarImg from "../../assets/marriageHome2.png"; // Replace with actual image path

const MultiEvent2 = () => {
  return (
    <div className="personalize-container flex flex-row">
        
      <div className="text-section basis-1/3 flex flex-col pt-60 pl-20">
        <h2 className="text-4xl pb-5">
          <div className="number text-9xl pb-5">02</div> Elevate Your Wedding Reception with Elegance and Style
        </h2>
        <p className="text-lg ">
        Celebrate your wedding reception in style with our expert planning services. From elegant décor to exquisite dining, we create a personalized and seamless experience, making your special day truly unforgettable</p>
      </div>
      <div className="image-section basis-2/3">
        <img src={calendarImg} alt="Calendar" className="calendar-image w-screen" />
        </div>
      
    </div>
  );
};

export default MultiEvent2;
