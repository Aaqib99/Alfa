import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import aboutinnerbg from "../Assets/Images/our-solution.jpg";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/innovative.png";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import { Link } from "react-router-dom";

// import AboutUSComp from '../Components/AboutUSComp';
const CareersInquiries = () => {
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
            Careers Inquiries
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Careers Inquiries
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Life at ALFA, we are committed to unlocking the full potential of our
          team members and guiding them toward exceptional career success. Our
          culture is rooted in respect, empathy, and inclusivity, ensuring that
          every individual feels valued and empowered to reach their
          professional development goals.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Joining ALFA means becoming an integral part of a dynamic organization
          renowned for excellence across various industries. If you’re
          passionate about shaping the future of the marine, offshore, oil &
          gas, renewable energy, and defense sectors, take the next step in your
          career with us and be part of a team that strives for continuous
          growth and innovation.
        </p>
        <a
          href="https://us.bigin.online/org886525305/forms/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="relative overflow-hidden mt-6 px-10 py-3 rounded-full text-lg font-bold shadow-lg text-white bg-[#2196F3] duration-500 cursor-pointer
    flex items-center gap-2 group"
          >
            <span className="relative z-10 group-hover:text-[#2196F3] transition duration-500">
              Contact Us
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
            <span className="absolute inset-0 bg-black transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          </button>
        </a>
        <h2
          className="mt-8 text-2xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#2C95D2" }}
        >
          Our Career
        </h2>
        <h2
          className="text-2xl mt-4 font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          JOIN OUR TEAM
        </h2>
        <form className="bg-gray-100 p-6 rounded-lg mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Upload Your CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              required
              className="border border-gray-800 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#20376D] hover:bg-[#1976D2] text-white font-bold py-3 rounded"
          >
            Send
          </button>
        </form>
      </div>
      {/* <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
      </div> */}
    </>
  );
};

export default CareersInquiries;
