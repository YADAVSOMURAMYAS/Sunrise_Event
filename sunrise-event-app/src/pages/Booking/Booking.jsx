import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaGlassCheers, FaBirthdayCake, FaRing } from "react-icons/fa";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fffaf6] min-h-screen flex flex-col">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16 pt-24 flex-1">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Crafting Unforgettable Celebrations
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto mt-4">
            Your vision, our expertise - let's create magic together
          </p>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-orange-500 mx-auto my-6 rounded-full"></div>

        {/* Intro Section */}
        <section className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-orange-500 font-semibold">Sunrise Events</span>, we transform ordinary moments 
            into extraordinary memories. From intimate gatherings to grand celebrations, every detail matters.
          </p>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-10 mt-12 shadow-lg border border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Celebration Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Weddings */}
            <div className="bg-white flex items-center gap-4 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
              <FaGlassCheers className="text-orange-500 text-4xl" />
              <div>
                <span className="text-2xl font-bold text-gray-900">80+</span>
                <p className="text-gray-600 text-lg">Weddings</p>
              </div>
            </div>

            {/* Birthdays */}
            <div className="bg-white flex items-center gap-4 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
              <FaBirthdayCake className="text-orange-500 text-4xl" />
              <div>
                <span className="text-2xl font-bold text-gray-900">100+</span>
                <p className="text-gray-600 text-lg">Birthdays</p>
              </div>
            </div>

            {/* Engagements */}
            <div className="bg-white flex items-center gap-4 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
              <FaRing className="text-orange-500 text-4xl" />
              <div>
                <span className="text-2xl font-bold text-gray-900">150+</span>
                <p className="text-gray-600 text-lg">Engagements</p>
              </div>
            </div>
          </div>

          <p className="text-center text-orange-500 font-medium mt-6">
            Join our family of delighted clients!
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            Ready to begin your celebration journey?<br />
            Let's craft something amazing together!
          </p>
          <button 
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 text-lg rounded-full 
            shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            onClick={() => navigate("/multipageform")}
          >
            Start Planning Now <span className="text-2xl">→</span>
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
