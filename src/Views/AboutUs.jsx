import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import aboutinnerbg from "../Assets/Images/our-solution.jpg";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/main5a.png";
import blasting from "../Assets/Images/main4.jpg";
import electrical from "../Assets/Images/main2.png";
import thermal from "../Assets/Images/main5.jpg";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import AboutUSComp from "../Components/AboutUSComp";

// import AboutUSComp from '../Components/AboutUSComp';
const AboutUs = () => {
  
  const aboutdetails = [
    {
      logo: yellowicon,
      title: "Modular buildings solutions",
      description:
        "As trusted energy brokers and consultants, we understand the challenges of managing business energy needs.",
    },
    {
      logo: pinkicon,
      title: "Living Quarters Refurbishment, Upgrade & Conversion solutions",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
    },
    {
      logo: yellowicon,
      title: "Repair & Maintenance of HVAC, Piping & Electrical Systems",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
    },
    {
      logo: pinkicon,
      title: "Rig & Ship Repair solutions",
      description:
        "It's no surprise that many organizations rely on experienced professionals like us for guidance and support.",
    },
  ];
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
          <h1 className="text-5xl font-bold mb-4 text-center">
            About Company
          </h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left" style={{ color: "#20376D" }}>
          Where Sustainability & Excellence Converge
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          ALFA & Offshore Division, a proud part of the ALFA Group, stands as a
          leading ISO-certified company headquartered in Saudi Arabia. We are
          renowned for our expertise in Lump Sum Turnkey (LSTK) Projects,
          tailored to the marine, offshore, oil & gas, renewable energy, and
          defense sectors.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          ALFA Group Established in 2014 and headquartered in Dammam, Saudi
          Arabia. ALFA Group is a steadily growing multi-division company
          supporting major industries across the Middle East. We specialize as a
          reliable subcontractor, delivering high-quality Engineering Support,
          Procurement Assistance, Fabrication & Construction(EPFC) services
          tailored to our Client's Project Needs Our capabilities span a wide
          range of sectors, including Oil & Gas, Renewable Energy, Marine &
          Offshore, Power & Utilities, Defense, Construction & Infrastructure,
          Petrochemical, Industrial Plants, and Commercial Projects. ALFA Group
          operates with a strong focus on quality, safety, and client
          satisfaction, backed by ISO certifications and adherence to
          international standards.
        </p>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          We invest continuously in skilled manpower, advanced technologies, and
          operational excellence to support the success of our clients’
          projects.
        </p>
      </div>
      <AboutUSComp/>
      <div
        className="relative bg-cover bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col p-4 md:p-24 items-center justify-center text-white">
          <h1 className="text-4xl font-bold mt-8 text-center">OUR SOLUTIONS</h1>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutdetails.map((aboutdetail) => (
              <div key={aboutdetail.title} className="bg-transparent p-4">
                <div className="mb-4">
                  <img
                    src={aboutdetail.logo}
                    alt={`${aboutdetail.title} Icon`}
                    loading="lazy"
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {aboutdetail.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-bold mb-4 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              Our Services
            </h1>
            <p className="text-lg mt-4" style={{ color: "#20376D" }}>
              The opportunity to work abroad is a popular prospect, one
            </p>
          </div>
          {/* <div className="md:w-1/2 mt-8 flex justify-center md:justify-end md:mt-24">
            <img
              src={sustainability}
              alt="About Us"
              className="w-auto h-auto"
            />
          </div> */}
        </div>

        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16">
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-bold mb-4 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              Welding and Fabrication Services
            </h1>
            <p className="text-lg mt-4" style={{ color: "#20376D" }}>
              Precision welding and fabrication solutions for industrial,
              commercial, and custom projects with high-quality craftsmanship.
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <img src={innovative} alt="About Us" className="mr-24 w-48 h-48" />
          </div>
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mb-16">
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-bold mb-4 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              Abrasive Blasting and Painting
            </h1>
            <p className="text-lg mt-4" style={{ color: "#20376D" }}>
              Surface preparation and protective coatings using advanced
              abrasive blasting and industrial-grade painting techniques.
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <img src={blasting} alt="About Us" className="mr-24 w-48 h-48" />
          </div>
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mb-16">
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-bold mb-4 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              Architectural, HVAC, Electrical, Plumbing, & Carpentry Services
            </h1>
            <p className="text-lg mt-4" style={{ color: "#20376D" }}>
              Comprehensive building solutions, including HVAC, electrical,
              plumbing, carpentry, and architectural enhancements.
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <img src={electrical} alt="About Us" className="mr-24 w-48 h-48" />
          </div>
        </div>
        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mb-16">
          <div className="md:w-3/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-bold mb-4 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              Thermal and Acoustic Insulation Services
            </h1>
            <p className="text-lg mt-4" style={{ color: "#20376D" }}>
              Expert insulation services to improve energy efficiency and
              soundproofing for residential, commercial, and industrial spaces.
            </p>
          </div>
          <div className="md:w-2/2 flex justify-center md:justify-end">
            <img src={thermal} alt="About Us" className="mr-24 w-48 h-48" />
          </div>
        </div>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          With a strong commitment to excellence and innovation, ALFA provides
          state-of-the-art modular building solutions. These services meet
          rigorous industry standards ATEX, IECEx, NORSOK, NFPA, AWS or any
          other specific requirements. We collaborate with globally recognized
          certification bodies, including ABS, BV, DNV, and Lloyd’s, ensuring
          the highest levels of safety and quality. At ALFA, our mission is to
          create bespoke engineering solutions that not only meet but exceed
          client expectations, all while fostering sustainable practices and
          adhering to the strictest quality benchmarks.{" "}
        </p>
      </div>
    </>
  );
};

export default AboutUs;
