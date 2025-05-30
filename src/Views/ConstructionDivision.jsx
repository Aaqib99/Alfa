import React from "react";
import marineImage from "../Assets/Images/construction2a.png";
import backgroundImage from "../Assets/Images/main2a.png";

const ConstructionDivision = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">
            Construction Division
          </h1>
        </div>
      </div>
      <div className="relative bg-[#20376D] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Text Section */}
          <div>
            <h2 className="text-sm font-semibold text-[#2C95D2] uppercase mb-2">
              What We Do
            </h2>
            <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-4">
              CONSTRUCTION DIVISION
            </h1>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>
                <span className="font-bold">ALFA</span> Construction Division
                delivers high-quality services in Civil Construction and MEP
                Contracting. We specialize in Sub-Contracting and/or Lump Sum
                Turnkey (LSTK) Projects, tailored to Oil & Gas, Renewable
                Energy, Power, Defense, Construction, Industrial, Commercial,
                and Entertainment & Sports Sectors.
                <span className="font-bold"></span> Our extensive portfolio
                includes the construction of buildings, roads, railways, utility
                projects, and various other civil engineering works, always
                tailored to meet the specific needs of each sector.
              </p>
            </div>

            {/* Core Services */}
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-2">
                Our Core Services
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Construction of Temporary Camp Facilities (TCF)</li>
                <li>Prefab Porta Cabin Buildings Fabrication</li>
                <li>Road Construction and Asphalt Paving</li>
                <li>Road Marking & Lining</li>
                <li>Laboratory Design & Construction</li>
                <li>Building Structure Construction Services</li>
                <li>Renovation of Commercial and Industrial Buildings</li>
                <li>HVAC Services & Duct Fabrication</li>
                <li>Firefighting Systems</li>
                <li>Thermal Insulation & Exhaust System Services</li>
                <li>Parking Shades Fabrication</li>
                <li>Waterproofing Solutions</li>
                <li>Flooring Solutions</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-end mt-24">
            <img
              src={marineImage}
              alt="Marine & Offshore"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructionDivision;
