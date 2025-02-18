import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaGlassCheers, FaBirthdayCake, FaRing } from "react-icons/fa";

// Fade-in and slide animation for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

// Scale-up animation for statistics
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Button hover and tap effects
const buttonVariants = {
  hover: { scale: 1.1, boxShadow: "0px 10px 20px rgba(255, 140, 0, 0.3)" },
  tap: { scale: 0.95 }
};

const Booking = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-[#fffaf6] min-h-screen flex flex-col"
      initial="hidden"
      animate="visible"
    >
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16 pt-24 flex-1">
        
        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={fadeInUp} initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafting Unforgettable Celebrations
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-lg mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Your vision, our expertise - let's create magic together
          </motion.p>
        </motion.div>

        {/* Animated Divider */}
        <motion.div 
          className="w-20 h-1 bg-orange-500 mx-auto my-6 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>

        {/* Intro Section */}
        <motion.section className="text-center" variants={fadeInUp} initial="hidden" animate="visible">
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            At <span className="text-orange-500 font-semibold">Sunrise Events</span>, we transform ordinary moments 
            into extraordinary memories. From intimate gatherings to grand celebrations, every detail matters.
          </motion.p>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-10 mt-12 shadow-lg border border-orange-200"
          variants={fadeInUp} initial="hidden" animate="visible"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Celebration Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[ 
              { icon: <FaGlassCheers className="text-orange-500 text-4xl" />, count: "80+", label: "Weddings" },
              { icon: <FaBirthdayCake className="text-orange-500 text-4xl" />, count: "100+", label: "Birthdays" },
              { icon: <FaRing className="text-orange-500 text-4xl" />, count: "150+", label: "Engagements" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white flex items-center gap-4 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform"
                variants={scaleUp}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
                <div>
                  <motion.span 
                    className="text-2xl font-bold text-gray-900"
                    whileHover={{ scale: 1.1, color: "#ff8c00" }}
                  >
                    {item.count}
                  </motion.span>
                  <p className="text-gray-600 text-lg">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-center text-orange-500 font-medium mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Join our family of delighted clients!
          </motion.p>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="text-center mt-12" variants={fadeInUp} initial="hidden" animate="visible">
          <p className="text-xl text-gray-700 leading-relaxed">
            Ready to begin your celebration journey?<br />
            Let's craft something amazing together!
          </p>
          <motion.button 
            className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 text-lg rounded-full 
            shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.3 }}
            onClick={() => navigate("/multipageform")}
          >
            Start Planning Now <span className="text-2xl">→</span>
          </motion.button>
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Booking;
