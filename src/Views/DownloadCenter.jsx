import React, {useEffect} from "react";
import backgroundImage from "../Assets/Images/download-center.png";
import { FaFilePdf } from "react-icons/fa";
// import AlfaPDF from "../../public/profile.pdf";
// import AlfaSVG from "../../public/logo.svg";
// import AlfaPNG from "../../public/logo.png";

const DownloadCenter = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const downloads = [
  {
    title: "Profile",
    description: "ALFA & Offshore Division Company Profile",
    icon: <FaFilePdf className="text-green-500 text-3xl mt-1" />,
    buttons: [
      {
        label: "Download PDF",
        file: "/Downloads/profile.pdf", 
        className: "bg-[#20376D]",
      },
    ],
  },
  {
    title: "Logo",
    description: "Logo",
    icon: <FaFilePdf className="text-green-500 text-3xl mt-1" />,
    buttons: [
      {
        label: "Download SVG",
        file: "/Downloads/logo.svg", 
        className: "bg-[#20376D]",
      },
      {
        label: "Download PNG",
        file: "/Downloads/logo.png",
        className: "bg-[#20376D]",
      },
    ],
  },
];


  return (
    <>
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 "></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold text-center">Download Center</h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Download Center
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          ALFA is a prominent player in the marine, offshore, oil & gas,
          renewable energy, and defense sectors within Saudi Arabia and beyond,
          renowned for its expertise and commitment to excellence. Discover more
          about our innovative approach, diverse range of services, and
          forward-looking vision by accessing the latest reports, insights, and
          updates from the ALFA team.
        </p>
        <h1
          className="mt-12 text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Digital Media Toolkit
        </h1>
        <div className="space-y-6 p-4 max-w-md">
          {downloads.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div>{item.icon}</div>
              <div className="flex-1">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <div className="mt-2 space-x-2">
                  {item.buttons.map((btn, bIdx) => (
                    <a
                      href={btn.file}
                      download
                      className="text-sm text-white px-3 py-1 rounded bg-[#20376D]"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DownloadCenter;
