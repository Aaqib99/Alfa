import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/careers.png";

// import AboutUSComp from '../Components/AboutUSComp';
const CareersInquiries = () => {
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
          <h1 className="text-5xl font-bold mb-4 text-center">Careers</h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Careers
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Life at ALFA, we are committed to unlocking the full potential of our
          team members and guiding them toward exceptional career success. Our
          culture is rooted in respect, empathy, and inclusivity, ensuring that
          every individual feels valued and empowered to reach their
          professional development goals.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          Joining ALFA means becoming an integral part of a dynamic organization
          renowned for excellence across various industries. If you’re
          passionate about shaping the future of the marine, offshore, oil &
          gas, renewable energy, and defense sectors, take the next step in your
          career with us and be part of a team that strives for continuous
          growth and innovation.
        </p>
        <h2
          className="text-2xl mt-4 font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          JOIN OUR TEAM
        </h2>
        
        <form className="bg-gray-100 p-6 rounded-lg mt-4" action="https://getform.io/f/awnwqovb" method="POST" enctype="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="user_email" 
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="user_phone" // 👈 ADD THIS
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Upload Your CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="user_cv" // 👈 ADD THIS
              required
              className="border border-gray-800 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#20376D] hover:bg-[#1976D2] text-white font-bold py-3 rounded"
          >
            Send
          </button>
        </form>
      </div>
      {/* <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
      </div> */}
    </>
  );
};

export default CareersInquiries;
