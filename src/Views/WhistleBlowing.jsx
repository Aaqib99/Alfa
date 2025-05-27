import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/whistle.png";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";

// import AboutUSComp from '../Components/AboutUSComp';
const WhistleBlowing = () => {
  const contactusdetails = [
    {
      id: 1,
      logo: contactuscall,
      title: "Call Us",
      description: "+966 13 805 2528",
    },
    {
      id: 2,
      logo: contactusemail,
      title: "Mail Us",
      description: "info@alfamarinesa.com",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-110 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mt-14 mb-4 text-center">
            Whistle Blowing
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Whistle Blowing Helpline
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          To ensure a thorough investigation, please provide sufficient details
          in your concern or complaint, including the following, where
          applicable:
        </p>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="container px-4 py-8 flex flex-wrap justify-center gap-12">
            {contactusdetails.map((contactusdetail) => (
              <div
                key={contactusdetail.id}
                className="flex justify-center w-full md:w-auto"
              >
                <div className="bg-gradient-to-r w-96 from-gradient-start to-gradient-end p-4 rounded-lg shadow-xl rounded-bl-3xl rounded-tr-3xl">
                  <div className="mb-8 flex align-left ml-4 mt-4">
                    <img
                      src={contactusdetail.logo}
                      alt={contactusdetail.title}
                      className="h-8 w-8 group-hover:filter group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 align-left ml-4"
                    style={{ color: "#20376D" }}
                  >
                    {contactusdetail.title}
                  </h3>
                  <p
                    className="mt-6 mb-8 align-left ml-4"
                    style={{ color: "#20376D" }}
                  >
                    {contactusdetail.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ul
          className="list-disc list-inside text-sm space-y-1"
          style={{ color: "#20376D" }}
        >
          <li>
            Your name and contact information (reports may be made anonymously,
            though please note that anonymity may limit the investigation’s
            scope)
          </li>
          <li>A detailed description of the improper activity</li>
          <li>
            Names of individuals, departments, or employees involved or aware of
            the activity
          </li>
          <li>Approximate or actual dates the activity occurred</li>
          <li>Supporting documents or evidence</li>
          <li>
            Any steps you have already taken internally with{" "}
            <span className="font-bold">ALFA</span> management to report or
            resolve the concern
          </li>
        </ul>
          <p className="mt-8" style={{ color: "#20376D" }}>
            ALFA will not retaliate — and will not tolerate retaliation — against any individual for reporting good-faith concern or complaint, or for participating in the investigation of any complaint.
          </p>
      </div>
    </>
  );
};

export default WhistleBlowing;
