import React from 'react';

const SustainabilityComp = ({ title, description, icon }) => {
  return (
    <div className="bg-[#f5f5f5] py-12 px-6 md:px-24">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Content */}
        <div className="flex-1">
          <div className="inline-block bg-[#20376D] text-white text-sm font-bold px-4 py-1 rounded-md mb-4">
            {title.toUpperCase()}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Icon */}
        <div className="flex-shrink-0">
          <img
            src={icon}
            alt={`${title} Icon`}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityComp;
