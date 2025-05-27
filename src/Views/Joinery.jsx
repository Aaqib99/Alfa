import React, {useEffect} from "react";
import marineImage from "../Assets/Images/joinery2a.png";
import backgroundImage from "../Assets/Images/main7a.png";

const Joinery = () => {
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
              <h1 className="text-5xl font-bold mt-24 mb-4">Joinery Division</h1>
            </div>
          </div>
    <div className="relative bg-[#20376D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Text Section */}
        <div>
          <h2 className="text-sm font-semibold text-[#2C95D2] uppercase mb-2">What We Do</h2>
          <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-4">Joinery Division</h1>
          <div className="space-y-4 text-sm leading-relaxed text-justify">
            <p>
              The <span className="font-bold"> ALFA Joinery Division</span> offers a wide range of high-quality, bespoke joinery solutions for various sectors, including residential, commercial, hospitality and industrial. We provide tailored interior fit-outs, custom wood products, and specialized services that combine craftsmanship, design, and precision to meet the evolving demands of modern projects.
            </p>
          </div>

          {/* Core Services */}
          <div className="mt-6">
            <h3 className="font-semibold text-white mb-2">Our Core Services</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Custom Joinery</li>
              <li>Interior Fit-Outs</li>
              <li>Wooden Fixtures & Fittings</li>
              <li>Door & Window</li>
              <li>Kitchen & Wardrobe Fitting</li>
              <li>Carpentry & Woodwork</li>
              <li>Repairs & Restoration</li>
              <li>Flooring & Cladding</li>
              <li>Architectural Joinery</li>
              <li>Exhibition & Event Joinery</li>
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

export default Joinery;
