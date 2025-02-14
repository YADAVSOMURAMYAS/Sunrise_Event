import React from "react";
import services from "./Servicefile";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Review from "./Review";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r mt-10 from-red-600 via-yellow-500 to-orange-600 text-white py-12 px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-6 font-serif">Our Services</h2>
          <p className="text-lg text-gray-100 mb-12 font-light">
            Experience the essence of a grand Indian wedding with our premium services.
          </p>
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white w-[85%] mx-auto shadow-xl rounded-2xl p-6 md:mb-16 border border-gray-300 flex flex-col md:flex-row items-center text-left md:items-start transform transition duration-500 hover:scale-105">
                <img src={service.image} alt={service.name} className="w-full md:w-1/3 md:h-[22rem] object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                <div className="flex-1 text-gray-800">
                  <h3 className="text-3xl font-semibold text-red-700 mb-2 font-serif">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-gray-700 text-sm mb-4 ">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-green-600">✅</span>{feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 font-semibold">Duration: {service.duration}</p>
                  <p className="text-gray-600 font-semibold">Availability: {service.availability}</p>
                  <p className="text-gray-600 font-semibold">Price: {service.price}</p>
                  <button className="mt-4 bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Review />
      <Footer />
    </>
  );
};

export default Services;
