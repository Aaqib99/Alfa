import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/supplier.png";
import aboutinnerbg from "../Assets/Images/our-solution.jpg";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/innovative.png";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import { Link } from "react-router-dom";

// import AboutUSComp from '../Components/AboutUSComp';
const Supplier = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-110 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-14 mb-4 text-center">
            Become a Supplier
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Become a Supplier
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Maintaining a robust and dependable supplier network is integral to our continued success. At ALFA, we foster long lasting relationships with our partners and strive to create an ecosystem where everyone can thrive together. Join us to unlock boundless opportunities in the Middle East region and worldwide and propel your future growth.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          These documents must be filled in and attached to the <span className="font-bold" style={{ color: "#20376D" }}>ALFA Supplier Registration Portal.</span>
        </p>
        <a
          href="https://books.zohosecure.com/portal/alfamarine/signin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="relative overflow-hidden mt-6 px-10 py-3 rounded-full text-lg font-bold shadow-lg text-white bg-[#2196F3] duration-500 cursor-pointer
    flex items-center gap-2 group"
          >
            <span className="relative z-10 group-hover:text-[#2196F3] transition duration-500">
              Supplier Portal
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 relative z-10 group-hover:text-[#2196F3] transition duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <span className="absolute inset-0 bg-[#20376D] transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Supplier;
