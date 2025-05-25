import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/contactusbg.jpg";
import contactuscall from "../Assets/Icons/callus.svg";
import contactusemail from "../Assets/Icons/emailus.svg";
// import ContactUsOurOffic from '../Components/ContactUsOurOffic';
// import Form from '../Components/Form';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  return (
    <>
      <div className="h-12"></div>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1
            className="text-5xl font-bold mt-20 mb-16"
            style={{ color: "#20376D" }}
          >
            Contact Us
          </h1>
        </div>
      </div>

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
                <p className="mt-6 mb-8 align-left ml-4"
                style={{ color: "#20376D" }}>
                  {contactusdetail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
