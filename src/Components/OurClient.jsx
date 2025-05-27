import React from "react";
import { motion } from "framer-motion";

// Import logos
import logo2 from "../Assets/Images/logo2.png";
import logo3 from "../Assets/Images/logo3.png";
import logo4 from "../Assets/Images/logo4.png";
import logo5 from "../Assets/Images/logo5.png";
import logo6 from "../Assets/Images/logo6.png";
import logo7 from "../Assets/Images/logo7.png";
// import logo8 from "../Assets/Images/logo8.png";
import logo9 from "../Assets/Images/logo9.png";
import logo10 from "../Assets/Images/logo10.png";
import logo11 from "../Assets/Images/logo11.png";
import logo12 from "../Assets/Images/logo12.png";
import logo13 from "../Assets/Images/logo13.png";
import logo14 from "../Assets/Images/logo14.png";
import logo15 from "../Assets/Images/logo15.png";
import logo16 from "../Assets/Images/logo16.png";
import logo17 from "../Assets/Images/logo17.png";
import logo19 from "../Assets/Images/logo19.png";

const logos = [
  logo2, logo3, logo4, logo5, logo6, logo7, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo19,
];

const OurClients = () => {
  return (
    <div className="w-full bg-white py-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8 mt-18">Our Clients</h2>

      <div className="relative w-full mt-18">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }} // Already in motion
          transition={{
            duration:25, // slower than 90% over half the distance
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;
