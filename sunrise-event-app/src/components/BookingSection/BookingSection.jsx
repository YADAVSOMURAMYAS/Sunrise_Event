import React from "react";
import { Link } from "react-router-dom";

const BookingSection = () => {
  return (
    <section className="mt-10 flex justify-center items-center text-center px-4 py-12 bg-gradient-to-r from-orange-500 to-yellow-400 text-[#2D2D2D] rounded-lg shadow-lg mx-auto max-w-[95%] transition-transform duration-300 hover:scale-105">
      <div className="max-w-md w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
          Ready for an <br /> Unforgettable Experience?
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          Secure your spot at the most anticipated events of the year! Limited tickets available - Don't miss out on extraordinary moments.
        </p>
        <div className="flex justify-center mb-6">
          <Link to="/booking">
            <button className="bg-white text-orange-600 font-bold text-base sm:text-lg px-5 py-3 rounded-full shadow-md hover:bg-orange-700 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
              Book Now →
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-2 text-sm sm:text-base font-semibold">
          <span className="bg-white/40 text-[#2D2D2D] px-4 py-2 rounded-full flex items-center">
            ✔ Instant Confirmation
          </span>
          <span className="bg-white/40 text-[#2D2D2D] px-4 py-2 rounded-full flex items-center">
            ✔ Best Price Guarantee
          </span>
          <span className="bg-white/40 text-[#2D2D2D] px-4 py-2 rounded-full flex items-center">
            ✔ 24/7 Support
          </span>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
