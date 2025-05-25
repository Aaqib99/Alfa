import React from "react";
import iImage from "../Assets/Images/aboutcompanyimage.jpg";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import { Link } from "react-router-dom";

const AboutUSComp = () => {
  const aboutdetails = [
    {
      logo: yellowicon,
      title: "UK Suppliers",
      description:
        "As trusted energy brokers and consultants, we understand the challenges of managing business energy needs.",
    },
    {
      logo: pinkicon,
      title: "Energy Market",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
    },
  ];

  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="md:w-full text-center" style={{ color: "#20376D" }}>
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#20376D" }}
            >
              About Company
            </h3>
            <p className="text-lg text-gray-700" style={{ color: "#20376D" }}>
              ALFA Group is a trusted and steadily growing multi-division
              company (Head Quarters) based in Dammam, Saudi Arabia and
              expanding across the Middle East. Since our Inception in 2014, we
              have expanded our operations and diversified our services to meet
              the evolving needs of our clients across multiple sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-16 mx-auto mb-8 px-4 md:px-16 py-8 flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/2">
          <h5
            className="inline-block text-custom-green font-medium bg-light-green-background rounded-full px-6 py-1"
            style={{ color: "#20376D" }}
          >
            ABOUT US
          </h5>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 mt-6"
            style={{ color: "#20376D" }}
          >
            Mission is: <br />
            Minimizing the burden of <br />
            High Energy Bills
          </h2>

          <p
            className="text-lg text-gray-700 mb-4"
            style={{ color: "#20376D" }}
          >
            As leading energy consultants in the UK, we specialize in providing
            cost-effective solutions tailored to your needs.
          </p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutdetails.map((aboutdetail) => (
              <div key={aboutdetail.title} className="bg-transparent p-4">
                <div className="mb-4">
                  <img
                    src={aboutdetail.logo}
                    alt={`${aboutdetail.title} Icon`}
                    loading="lazy"
                    className="h-16 w-16 group-hover:filter group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-2 group-hover:text-white"
                  style={{ color: "#20376D" }}
                >
                  {aboutdetail.title}
                </h3>
                <p
                  className="group-hover:text-white"
                  style={{ color: "#20376D" }}
                >
                  {aboutdetail.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-start md:justify-start">
            <Link to="/readmoreaboutcompany">
              <button className=" text-md font-bold text-white px-10 py-4 rounded-bl-3xl rounded-tr-3xl" style={{backgroundColor:"#20376D" }}>
                More About Company
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-4 flex justify-center md:mt-16">
          <img
            src={iImage}
            alt="About Company"
            loading="lazy"
            className="w-3/4 h-4/5"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUSComp;
