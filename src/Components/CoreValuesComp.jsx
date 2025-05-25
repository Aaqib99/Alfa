import React from "react";

const CoreValuesComp = ({ icon, title, description }) => {
  return (
    <div className=" relative w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-green-500 flex justify-center items-center">
        <img src={icon} alt="Icon" className="object-cover w-full h-full" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
      {/* <div className="absolute bottom-2 right-2 text-gray-400 text-2xl">
        &rsaquo;
      </div> */}
    </div>
  );
};

export default CoreValuesComp;
