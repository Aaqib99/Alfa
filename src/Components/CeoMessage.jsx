import React from "react";
import { motion } from "framer-motion";
import sustainability from "../Assets/Images/ceo-image.jpeg";

const CeoMessage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-8 mb-16">
        
        {/* Left Section - Animate on scroll repeatedly */}
        <motion.div
          className="md:w-2/2 mb-6 md:mb-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1,delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1
            className="text-4xl font-bold mb-6 text-center md:text-left"
            style={{ color: "#20376D" }}
          >
            CEO Message
          </h1>
          <div className="text-lg space-y-4" style={{ color: "#20376D" }}>
            <p>
              At ALFA Group, we are driven by a simple yet powerful vision: to
              provide our clients with exceptional services and solutions that
              exceed expectations and create lasting value.
            </p>
            <p>
              Since our establishment in 2014, we have worked tirelessly to
              build a company that thrives on quality, innovation, and
              integrity. Our growth has been shaped by our dedication to
              safety, excellence, and customer satisfaction.
              We are a one-stop solution provider serving diverse sectors including Oil & Gas, Renewable Energy, Marine, Defense, Construction, and more—delivering tailored solutions through our specialized divisions.
            </p>
            <p>
              As we look to the future, we remain focused on our goal of
              expanding our portfolio and reaching new heights of success,
              ensuring that ALFA Group continues to be a trusted partner for
              businesses across the globe.
            </p>
            <p>
              Sincerely,
              <br />
              <strong>Chief Executive Officer</strong>
            </p>
          </div>
        </motion.div>

        {/* Right Section - Image animate on scroll repeatedly */}
        <motion.div
          className="md:w-2/5 flex justify-center md:justify-end mr-12"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={sustainability}
            alt="CEO"
            className="w-full max-w-sm shadow-lg mt-24"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CeoMessage;
