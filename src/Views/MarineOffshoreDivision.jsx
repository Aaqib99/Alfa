import React, { useEffect } from "react";
import marineImage from "../Assets/Images/marine2a.png";
import backgroundImage from "../Assets/Images/main-background.jpg";

const MarineOffshoreDivision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4">Marine & OffShore</h1>
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
              Marine & Offshore Division
            </h1>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>
                <span className="font-bold">ALFA</span> Marine & Offshore
                Division excels in delivering end-to-end solutions across the
                marine, offshore, oil & gas, renewable energy and defense
                industries. Specializing in Lump Sum Turnkey (LSTK) projects,
                <span className="font-bold"> ALFA</span> specializes in the
                design, construction and maintenance of marine and offshore
                living quarters, accommodation modules, and high-integrity
                technical buildings to the highest international standards e.g.
                ABS and DNV certifications.
              </p>
              <p>
                With a strong commitment to excellence and innovation,{" "}
                <span className="font-bold">ALFA</span> provides
                state-of-the-art modular building solutions. These services meet
                rigorous industry standards ATEX, IECEx, NORSOK, NFPA, AWS or
                any other specific requirements. We collaborate globally with
                recognized certification bodies, including{" "}
                <span className="font-bold">ABS, BV, DNV, and Lloyd’s</span>,
                ensuring the highest levels of safety and quality.
              </p>
            </div>

            {/* Core Services */}
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-2">
                Our Core Services
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Modular Buildings Solutions</li>
                <li>Living Quarters Refurbishment, Upgrade Solutions</li>
                <li>Architectural, HVAC, Electrical, Plumbing & C</li>
                <li>Ship Chandling</li>
                <li>Thermal & Acoustic Insulation Solution</li>
                <li>Rig, Ship & Hull Repair</li>
                <li>Welding & Fabrication</li>
                <li>Abrasive Blasting & Painting</li>
                <li>Dismantling & Demolition</li>
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

export default MarineOffshoreDivision;
