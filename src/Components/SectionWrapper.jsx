import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const SectionWrapper = ({
  children,
  curveColor = "#20376D",
  bgColor = "#fff",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 }); // triggers every time it comes into view
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: "100%",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
        opacity: 0.8,
        transition: { duration: 1.3, ease: "easeInOut" },
      });
    } else {
      controls.start({
        y: 0,
        clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0% 100%)",
        opacity: 1,
        transition: { duration: 0.1 },
      });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        initial={{
          y: 0,
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0% 100%)",
          opacity: 1,
        }}
        animate={controls}
        className="absolute top-0 left-0 w-full h-full bg-[#20376D] z-20"
      />
      <div
        className="relative z-10 bg-white"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
};


export default SectionWrapper;
