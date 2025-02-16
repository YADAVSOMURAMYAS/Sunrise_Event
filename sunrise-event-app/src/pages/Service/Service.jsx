import React from "react";
import services from "./Servicefile";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Review from "./Review";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r mt-8 from-red-600 via-yellow-300 to-orange-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className=" text-slate-900 text-6xl font-extrabold text-white mb-8 font-serif drop-shadow-lg">
            Our Services
          </h2>
          <p className=" text-slate-900 text-lg text-gray-200 mb-14 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the essence of a grand Indian wedding with our premium services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover rounded-xl mb-5"
                />
                <div className="text-gray-900">
                  <h3 className="text-2xl font-bold text-red-700 mb-3 font-serif">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-gray-700 text-sm space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-green-600">✅</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 font-semibold">
                    <span className="font-bold text-gray-800">Duration:</span> {service.duration}
                  </p>
                  <p className="text-gray-600 font-semibold">
                    <span className="font-bold text-gray-800">Availability:</span> {service.availability}
                  </p>
                  <p className="text-gray-600 font-semibold">
                    <span className="font-bold text-gray-800">Price:</span> {service.price}
                  </p>
                  <button className="mt-5 w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-md">
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
