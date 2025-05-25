import React from "react";
import backgroundImage from "../Assets/Images/main-background.jpg";

const Capability = () => {
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4">Our Capabilities</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-10 text-[#2C2C2C]">
        <p className="mb-6 text-justify text-sm sm:text-base">
          ALFA GROUP offers end-to-end capabilities across multiple sectors,
          allowing us to deliver tailored and comprehensive solutions under one
          roof. Our expertise spans:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
          <li>
            <strong>
              Engineering, Procurement, Fabrication & Construction (EPFC)
            </strong>
          </li>
          <li>
            <strong>Lump Sum Turnkey (LSTK) Project Execution</strong>
          </li>
          <li>
            <strong>Porta Cabin and Modular Building Solutions</strong>
          </li>
          <li>
            <strong>Marine & Offshore Technical Services</strong>
          </li>
          <li>
            <strong>Specialized Civil and MEP construction solutions</strong>
          </li>
          <li>
            <strong>Specialized Steel Fabrication and Machining</strong>
          </li>
          <li>
            <strong>Procurement, Trading & Industrial Supplies</strong>
          </li>
          <li>
            <strong>
              ICT & ELV Systems, Structured Cabling, and Smart Solutions
            </strong>
          </li>
          <li>
            <strong>Facility Management and Maintenance</strong>
          </li>
          <li>
            <strong>Joinery Works and Custom Fit-Outs</strong>
          </li>
          <li>
            <strong>Heavy Equipment Rental and Logistics Support</strong>
          </li>
        </ul>

        <p className="mt-6 text-justify text-sm sm:text-base">
          Our integrated approach, skilled workforce, modern systems, and
          quality focus allow us to serve a wide range of industries including
          Oil & Gas, Power, Marine, Construction, Industrial Plants,
          Infrastructure, and Commercial Sectors.
        </p>
      </div>
    </>
  );
};

export default Capability;
