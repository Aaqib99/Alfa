import React from "react";
import backgroundImage from "../Assets/Images/main-background.jpg"

const Facility = () => {
  return (
    <>
    <div
            className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
    
            {/* Overlay Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-5xl font-bold mt-24 mb-4">Our Facilities</h1>
            </div>
          </div>
    <div className="max-w-4xl mx-auto px-6 py-10 text-[#2C2C2C]">
      <p className="mb-6 text-justify text-sm sm:text-base">
        Our facilities are designed to support high-volume and high-quality
        production, logistics, and service operations. Located strategically in
        Saudi Arabia, our infrastructure includes:
      </p>

      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
        <li>
          <strong>Fabrication Yards and Workshops</strong> equipped with advanced machinery
        </li>
        <li>
          <strong>Well-Furnished Porta Cabins</strong> for site offices and accommodations
        </li>
        <li>
          <strong>Warehouse and Storage Areas</strong> with organized material handling systems
        </li>
        <li>
          <strong>Specialized Zones for Joinery, Electrical Assembly, and Painting</strong>
        </li>
        <li>
          <strong>Dedicated Training & Meeting Halls</strong>
        </li>
        <li>
          <strong>Secure and Compliant Storage for Hazardous & Non-Hazardous Materials</strong>
        </li>
        <li>
          <strong>Fleet of Equipment, Vehicles, and Tools</strong> for project mobilization and execution
        </li>
      </ul>

      <p className="mt-6 text-justify text-sm sm:text-base">
        We maintain all the necessary HSE, quality, and compliance standards to ensure optimal operations and safe working environments.
      </p>
    </div>
    </>
  );
};

export default Facility;
