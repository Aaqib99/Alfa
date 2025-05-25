import React from "react";
import marineImage from "../Assets/Images/main-background.jpg";
import backgroundImage from "../Assets/Images/main-background.jpg";

const ICTDivision = () => {
  return (
    <>
    <div
            className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Overlay Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-5xl font-bold mt-24 mb-4">ICT Division</h1>
            </div>
          </div>
    <div className="relative bg-[#012c4c] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Text Section */}
        <div>
          <h2 className="text-sm font-semibold text-[#3799EF] uppercase mb-2">What We Do</h2>
          <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-4">ICT Division</h1>
          <div className="space-y-4 text-sm leading-relaxed text-justify">
            <p>
              <span className="font-bold">ALFA</span> ICT Division as a trusted technology partner, offers end-to-end ICT, Low Current and Smart Building Solutions. We specialize in designing, deploying, integrating, and maintaining advanced IT infrastructure and intelligent systems to support critical operations across industries, with a focus on international standards, quality, and innovation.
            </p>
          </div>

          {/* Core Services */}
          <div className="mt-6">
            <h3 className="font-semibold text-white mb-2">Our Core Services</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Structured Cabling & Data Center Infrastructure</li>
              <li>Network Infrastructure & Wireless Solutions</li>
              <li>Surveillance, Security & Access Control</li>
              <li>Audio/Visual & Conferencing Solutions</li>
              <li>Television & Media Distribution</li>
              <li>Smart Building & Automation</li>
              <li>QSR / Retail Systems</li>
              <li>Fiber Optic Transmission Line Solutions</li>
              <li>IT Asset Management</li>
              <li>IT Infrastructure Relocation Solutions</li>
              <li>IT Consultancy</li>
              <li>Annual Maintenance Contracts (AMC)</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-end mt-24">
          <img src={marineImage} alt="Marine & Offshore" className="max-w-full h-auto object-contain" />
        </div>
      </div>
    </div>
    </>
  );
};

export default ICTDivision;
