import React, {useEffect} from "react";
import backgroundImage from "../Assets/Images/SustainbilityBG.png";
import AccrediationsImage from "../Assets/Images/AccrediationsImage.png";

const Accreditation = () => {
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
          <h1 className="text-5xl font-bold mt-24 mb-4">Compliance & Accreditations</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-10 text-[#2C2C2C]">
        <p className="mb-6 text-justify text-sm sm:text-base">
          We are fully committed to maintaining compliance with industry standards and best practices. ALFA Group is proud to hold multiple ISO certifications and adhere to global quality standards across all divisions. Our processes are aligned with industry-specific regulations, ensuring that we meet the highest levels of safety, environmental, and quality standards. This commitment to compliance and accreditation reflects our dedication to delivering reliable, high-quality services to our clients while maintaining operational efficiency and safety.
        </p>
        {/* Centered Image */}
        <div className="flex justify-center mt-24">
          <img
            src={AccrediationsImage}
            alt="Accreditation Certificates"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Accreditation;
