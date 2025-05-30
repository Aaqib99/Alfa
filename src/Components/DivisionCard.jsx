import React from "react";
import { motion } from "framer-motion";

const DivisionCard = ({ icon, title, label, description, bgImage, isCenter }) => {
  return (
    <div
      className="relative text-white h-[70vh] w-[70vh] bg-cover bg-center flex flex-col justify-between p-6"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${bgImage})`,
      }}
    >
      {/* Top Icon */}
      <div className="text-5xl text-white">{icon}</div>

      {/* Title + Description (Animate only if centered) */}
      {isCenter ? (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm leading-relaxed">{description}</p>
        </motion.div>
      ) : (
        <div className="space-y-2 opacity-50">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      )}

      {/* Know More */}
      <div className="flex items-center space-x-2 mt-4">
        <div className="w-[2px] h-8 bg-white relative">
          <div className="absolute bottom-0 h-2 bg-[#2C95D2] w-full" />
        </div>
        <span className="tracking-widest text-xs font-semibold">KNOW MORE</span>
      </div>

      {/* Rotated Label Block */}
      <div className="absolute bottom-48 right-0 transform translate-y-1/2 rotate-[-90deg] origin-bottom-right">
        <div className="bg-[#2C95D2] h-24 w-36 shadow-md flex items-center justify-center">
          {label}
        </div>
      </div>
    </div>
  );
};

export default DivisionCard;
