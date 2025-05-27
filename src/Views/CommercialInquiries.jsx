import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/commercial-inquiries.png";
import ContactUs from "./ContactUs";

// import AboutUSComp from '../Components/AboutUSComp';
const CommercialInquiries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-110 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 h-110 bg-black/40 "></div>
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4 text-center">
            Commercial Inquiries
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Commercial Inquiries
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          We welcome your commercial inquiries and value your interest in our
          services. Please feel free to reach out to us directly via email or
          phone, and our dedicated team will respond promptly to assist with
          your requirements. Your feedback and inquiries are important to us,
          and we look forward to serving you.
        </p>
        <a
          href="https://us.bigin.online/org886525305/forms/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="relative overflow-hidden mt-6 px-10 py-3 rounded-full text-lg font-bold shadow-lg 
    text-white bg-[#2196F3] transition-all duration-500 cursor-pointer
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
            <span className="absolute inset-0 bg-[#20376D] transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 z-0"></span>
          </button>
        </a>
      </div>
      <ContactUs />
      {/* <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
      </div> */}
    </>
  );
};

export default CommercialInquiries;
