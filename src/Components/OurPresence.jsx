import React from "react";
import Map from "../Assets/Icons/map.svg";
import Pin from "../Assets/Icons/pinmap.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pinLocations = [
  { top: "32%", left: "69%", label: "Dammam" },
  { top: "29%", left: "66%", label: "Al Jubail" },
  { top: "55%", left: "48.5%", label: "Riyadh" },
  { top: "65%", left: "22%", label: "Jeddah" },
];

const OurPresence = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="max-w-6xl mx-auto px-4 text-white text-center">
      {/* Heading */}
      <h2 className="text-sky-400 text-lg font-semibold mb-4 mt-12">OUR</h2>
      <h1 className="text-4xl font-bold mb-6" style={{ color: "#20376D" }}>
        PRESENCE
      </h1>

      {/* Map with Pins */}
      <div
        className="relative w-full max-w-3xl mx-auto mt-12"
        ref={ref}
      >
        <img
          src={Map}
          alt="Saudi Arabia Map"
          className="w-full h-auto rounded-md"
        />
        {pinLocations.map((pin, index) => (
          <motion.img
            key={index}
            src={Pin}
            alt={pin.label}
            className="absolute w-6 h-6"
            style={{ top: pin.top, left: pin.left }}
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPresence;
