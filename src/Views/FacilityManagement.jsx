import React, {useEffect} from "react";
import marineImage from "../Assets/Images/facility2a.png";
import backgroundImage from "../Assets/Images/main6a.png";

const FacilityManagement = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">
            Facility Management Division
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
              Facility Management Division
            </h1>
            <div className="space-y-4 text-sm leading-relaxed text-justify">
              <p>
                <span className="font-bold">ALFA's</span> Facility Management
                Division ensures smooth operation and maintenance of buildings
                and industrial sites, with a customer-focused approach to
                meeting business goals. Our services include HVAC, electrical,
                plumbing maintenance, energy and waste management, janitorial
                services, landscaping, and catering, all designed for safety,
                efficiency and sustainability.
              </p>
            </div>

            {/* Core Services */}
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-2">
                Our Core Services
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <ul className="relative mt-4 mb-4 pl-5 before:content-['➤'] before:absolute before:left-0 before:text-red-500">
                  Technical Operations & Maintenance
                </ul>
                <p>
                  We offer Proactive and Reactive maintenance for HVAC and MEP
                  systems:
                </p>
                <li>
                  <span className="font-bold">Proactive maintenance:</span>{" "}
                  Preventive, Predictive, Condition-Based, Scheduled, Planned,
                  and Routine maintenance.
                </li>
                <li>
                  <span className="font-bold">Reactive Maintenance:</span>{" "}
                  Emergency and Corrective repairs.
                </li>
              </ul>
              <ul className="list-disc list-inside text-sm space-y-1">
                <ul className="relative mt-4 mb-4 pl-5 before:content-['➤'] before:absolute before:left-0 before:text-red-500">
                  Office & Mover Services
                </ul>
                <li>
                  <span className="font-bold">
                    Space Planning & Move Management:
                  </span>{" "}
                  Office setup, relocation, and reorganization.
                </li>
                <li>
                  <span className="font-bold">Office Relocation:</span> Packing,
                  transport, and reinstallation of office equipment. Internal
                  Moves: Departmental and workstation reorganization.
                </li>
                <li>
                  <span className="font-bold">Internal Moves:</span>{" "}
                  Departmental and workstation reorganization.
                </li>
                <li>
                  <span className="font-bold">
                    Furniture Disassembly & Assembly:
                  </span>{" "}
                  Professional handling during moves.
                </li>
                <li>
                  <span className="font-bold">Storage Solutions: </span> Secure
                  short- and long-term storage.
                </li>
              </ul>
              <ul className="list-disc list-inside text-sm space-y-1">
                <ul className="relative mt-4 mb-4 pl-5 before:content-['➤'] before:absolute before:left-0 before:text-red-500">
                  Soft Services
                </ul>
                <li>
                  <span className="font-bold">Janitorial Services:</span>{" "}
                  Regular cleaning of hygienic spaces.
                </li>
                <li>
                  <span className="font-bold">Landscaping: </span> Facility
                  aesthetics maintenance.
                </li>
                <li>
                  <span className="font-bold">Waste Management:</span>{" "}
                  Sustainable disposal and recycling.
                </li>
                <li>
                  <span className="font-bold">Bio-Clean Services:</span>{" "}
                  Specialized cleaning for sensitive environments.
                </li>
              </ul>
              <ul className="list-disc list-inside text-sm space-y-1">
                <ul className="relative mt-4 mb-4 pl-5 before:content-['➤'] before:absolute before:left-0 before:text-red-500">
                  Catering Services
                </ul>
                <li>
                  Professional catering for corporate events and daily office
                  meals, enhancing workplace satisfaction
                </li>
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

export default FacilityManagement;
