import React, { useEffect } from "react";
import GroupOverviewImage from "../Assets/Images/GroupOverview.jpeg";
import contactuscall from "../Assets/Icons/contactuscall.svg";
import contactusemail from "../Assets/Icons/contactusemail.svg";
import OurDivisionsComponent from "../Components/OurDivisionsComponent";
// import ContactUsOurOffic from '../Components/ContactUsOurOffic';
// import Form from '../Components/Form';

const GroupOverview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center h-[140vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${GroupOverviewImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute h-[140vh] inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-24 mb-4">Group Overview</h1>
        </div>
      </div>

      <div id="ourdivisions">
        <OurDivisionsComponent />
      </div>
    </>
  );
};

export default GroupOverview;
