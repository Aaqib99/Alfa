import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import aboutinnerbg from "../Assets/Images/our-solution.jpg";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/innovative.png";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";

// import AboutUSComp from '../Components/AboutUSComp';
const EnvironmentalResponsability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-[165vh] h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-64 text-center">
            Environmental Responsability
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left" style={{ color: "#20376D" }}>
          Protecting the Environment for a Sustainable Future
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          At ALFA, we understand the urgent environmental challenges facing the world today, including climate change, resource depletion, waste management, and pollution. These issues not only impact our daily lives but also influence the way we do business. In response to these challenges, we are committed to implementing sustainable practices that reduce our environmental footprint and contribute to a healthier planet.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Environmental responsibility is a cornerstone of our operations. We actively work to preserve natural resources, minimize waste, and reduce the environmental impact of our services, products, and activities. Our culture of sustainability drives continuous innovation, operational efficiency, and a commitment to preserving the environment for future generations.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Our Environmental Management System, certified to the ISO 14001:2015 standard, guides our efforts to systematically assess and manage our environmental impact. We prioritize responsible resource use, energy efficiency, and waste minimization, focusing on reuse and recycling wherever possible.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          We engage our employees, contractors, and stakeholders in promoting environmental stewardship and raise awareness about the importance of protecting the environment. Our goal is to prevent pollution, reduce emissions, and incorporate sustainable materials in the design and delivery of our products and services.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Through our Green Products Initiative, we aim to integrate environmentally friendly materials, systems, and solutions into every aspect of our offerings, ensuring that the post-delivery impact on the environment is minimized.
        </p>
      </div>

      <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
      </div>
    </>
  );
};

export default EnvironmentalResponsability;
