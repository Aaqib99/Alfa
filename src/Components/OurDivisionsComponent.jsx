import React from "react";
import ServiceCard from "./ServiceCard";

const OurDivisionsComponent = () => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="md:w-full text-center">
            {/* <h5 className="text-lg text-custom-blue font-bold mb-2">OUR SERVICES</h5> */}
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#20376D" }}
            >
              Our Divisions
            </h3>
            <p className="text-lg text-gray-700" style={{ color: "#20376D" }}>
              ALFA Group Established in 2014 and headquartered in Dammam, Saudi
              Arabia. ALFA Group is a steadily growing multi-division company
              supporting major industries across the Middle East. We specialize
              as a reliable subcontractor, delivering high-quality Engineering
              Support, Procurement Assistance, Fabrication & Construction(EPFC)
              services tailored to our Client's Project Needs Our capabilities
              span a wide range of sectors, including Oil & Gas, Renewable
              Energy, Marine & Offshore, Power & Utilities, Defense,
              Construction & Infrastructure, Petrochemical, Industrial Plants,
              and Commercial Projects. ALFA Group operates with a strong focus
              on quality, safety, and client satisfaction, backed by ISO
              certifications and adherence to international standards. We invest
              continuously in skilled manpower, advanced technologies, and
              operational excellence to support the success of our clients’
              projects. Each division is managed by experienced teams and
              operates under robust systems to ensure timely, safe, and
              value-driven project delivery.
            </p>
          </div>
          {/* <div className="md:w-1/3 mt-4 md:mt-0 flex justify-end">
      <button className="bg-custom-blue text-lg font-bold text-white px-10 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500">
        See All Services
      </button>
    </div> */}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-16">
        <ServiceCard />
      </div>
    </>
  );
};

export default OurDivisionsComponent;
