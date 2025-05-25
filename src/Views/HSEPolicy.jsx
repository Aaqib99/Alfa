import React, { useEffect } from "react";
import backgroundImage from "../Assets/Images/about-us.png";
import aboutinnerbg from "../Assets/Images/our-solution.jpg";
import sustainability from "../Assets/Images/sustainability.png";
import innovative from "../Assets/Images/innovative.png";
import yellowicon from "../Assets/Icons/yellowicon.svg";
import pinkicon from "../Assets/Icons/pinkicon.svg";
import AwarenessIcon from "../Assets/Icons/AwarenessIcon.svg";
import RiskIcon from "../Assets/Icons/RiskIcon.svg";
import ClearIcon from "../Assets/Icons/ClearIcon.svg";
import TrainingIcon from "../Assets/Icons/TrainingIcon.svg";
import SafeIcon from "../Assets/Icons/SafeIcon.svg";
import ThirdIcon from "../Assets/Icons/ThirdIcon.svg";
import EmergencyIcon from "../Assets/Icons/EmergencyIcon.svg";
import CommunityIcon from "../Assets/Icons/CommunityIcon.svg";
import ImprovementIcon from "../Assets/Icons/ImprovementIcon.svg";
import { CheckCircle, Info } from "lucide-react";
// import AboutUSComp from '../Components/AboutUSComp';
const HSEPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center pt-8 pb-8 h-[165vh] h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-64 text-center">HSE Policy</h1>
        </div>
      </div>
      <div className="w-full p-4 md:p-24">
        <h1
          className="text-4xl font-bold mb-4 text-center md:text-left"
          style={{ color: "#20376D" }}
        >
          Health, Safety & Enviromental (HSE) Policy
        </h1>
        <p className="text-lg mt-4" style={{ color: "#20376D" }}>
          ALFA is dedicated to providing a safe and secure workplace for
          employees, clients, contractors, suppliers/vendors, and visitors
          across all facilities and project sites. We believe that through
          collaboration with clients and partners, occupational risks and
          environmental impacts can be effectively prevented. ALFA is committed
          to protecting people, property, and communities, preventing pollution,
          and upholding the highest industrial standards for safety, health, and
          environmental sustainability in all its operations.
        </p>
        <p className="text-lg mt-4 font-bold" style={{ color: "#20376D" }}>
          To achieve this, the Company pledges to:
        </p>

        <div className="w-full p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Each HSE Item */}
            {[
              {
                icon: AwarenessIcon,
                title: "Promote Awareness and Accountability",
                bullets: [
                  "Ensure all employees and visitors understand their responsibilities regarding health, safety, and environmental protection.",
                  "Regularly measure and review their performance to maintain compliance and drive improvement.",
                ],
              },
              {
                icon: RiskIcon,
                title: "Risk Management",
                bullets: [
                  "Identify, assess, and mitigate HSE risks proactively before starting any operation or activity.",
                ],
              },
              {
                icon: ClearIcon,
                title: "Clear Communication",
                bullets: [
                  "Consistently communicate HSE objectives, policies, and procedures to all employees and stakeholders.",
                ],
              },
              {
                icon: TrainingIcon,
                title: "Training and Resources",
                bullets: [
                  "Equip employees with the necessary training, education, and tools to uphold HSE accountability.",
                ],
              },
              {
                icon: SafeIcon,
                title: "Facility Design Excellence",
                bullets: [
                  "Design and build facilities using recognized best practices to protect people, property, and the environment.",
                ],
              },
              {
                icon: ThirdIcon,
                title: "Safe Operations",
                bullets: [
                  "Operate and maintain facilities to safeguard the health and safety of all personnel and visitors.",
                ],
              },
              {
                icon: EmergencyIcon,
                title: "Emergency Readiness",
                bullets: [
                  "Maintain preparedness and respond swiftly and effectively to any emergencies or incidents.",
                ],
              },
              {
                icon: CommunityIcon,
                title: "Incident Management",
                bullets: [
                  "Report, investigate, and analyze all incidents to promote transparency and continuous improvement.",
                ],
              },
              {
                icon: ImprovementIcon,
                title: "Community Safety",
                bullets: [
                  "Encourage practices that promote health and safety both within the workplace and the wider community.",
                ],
              },
            ].map(({ icon, title, bullets }, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <img src={icon} alt={title} className="w-9 h-9 mt-1" />
                <div>
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "#20376D" }}
                  >
                    {title}
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {bullets.map((text, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-green-500 mr-2 mt-1"
                        />
                        <span style={{ color: "#20376D" }}>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover h-[340px] bg-center pt-8 pb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutinnerbg})` }}
      ></div>
    </>
  );
};

export default HSEPolicy;
