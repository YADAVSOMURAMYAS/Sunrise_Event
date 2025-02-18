import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import services from "./Servicefile";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Review from "./Review";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-yellow-300 to-orange-300 mt-8 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-slate-900 text-6xl font-extrabold mb-8 font-serif drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-slate-900 font-extrabold text-lg text-gray-200 mb-14 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience the essence of a grand Indian wedding with our premium services.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-3xl p-6 border border-gray-200 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover rounded-xl mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <div className="text-gray-900">
                  <motion.h3
                    className="text-2xl font-bold text-red-700 mb-3 font-serif"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.ul
                    className="text-gray-700 text-sm space-y-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.2, duration: 0.5 }}
                      >
                        <span className="mr-2 text-green-600">✅</span> {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.p
                    className="text-gray-600 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <span className="font-bold text-gray-800">Duration:</span> {service.duration}
                  </motion.p>
                  <motion.p
                    className="text-gray-600 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    <span className="font-bold text-gray-800">Availability:</span> {service.availability}
                  </motion.p>
                  <motion.p
                    className="text-gray-600 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <span className="font-bold text-gray-800">Price:</span> {service.price}
                  </motion.p>
                  <motion.button
                    className="mt-5 w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
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
