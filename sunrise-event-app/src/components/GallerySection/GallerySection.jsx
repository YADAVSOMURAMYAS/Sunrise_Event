import React from "react";
import { Link } from "react-router-dom";
import g1 from "../../assets/g1.avif";
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";

const GallerySection = () => {
  return (
    <section className="mt-12 flex justify-center items-center text-center px-4 py-12 bg-gradient-to-r from-slate-900 to-blue-200 text-white rounded-lg shadow-lg mx-auto max-w-[95%] transition-transform duration-300 hover:scale-105">
      <div className="max-w-lg w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
          Experience the <br /> Grandeur of Our Events
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed italic">
          We specialize in curating <strong>royal, luxurious, and unforgettable events</strong>. 
          From elegant weddings to high-profile corporate gatherings, our expertise ensures 
          a seamless and grand experience.
        </p>

        {/* Gallery Images */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <img src={g1} alt="Luxury Event" className="w-full sm:w-1/3 h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
          <img src={g2} alt="Grand Celebration" className="w-full sm:w-1/3 h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
          <img src={g3} alt="Royal Wedding" className="w-full sm:w-1/3 h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
        </div>

        {/* View Full Gallery Button */}
        <div className="flex justify-center">
          <Link to="/gallery">
            <button className="bg-yellow-600 text-white font-bold text-base sm:text-lg px-6 py-3 rounded-full shadow-md hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
              View Full Gallery →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
