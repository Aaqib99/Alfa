import React, { useEffect } from "react";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import missionIcon from "../Assets/Icons/missionicon.svg";
import visionIcon from "../Assets/Icons/visionicon.svg";
import goalsIcon from "../Assets/Icons/goalsicon.svg";
import SustainabilityComp from "../Components/SustainabilityComp";

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const missionText =
    "To deliver innovative, high-quality, and sustainable solutions across multiple industries by providing integrated services through our specialized divisions. We are dedicated to exceeding client expectations through operational excellence, safety, integrity, and a commitment to continuous improvement.";
  const visionText =
    "To be a leading multi-division enterprise recognized globally for our reliability, innovation, and excellence—serving as the preferred one-stop solution provider across the Oil & Gas, Renewable Energy, Power & Utilities, Marine & Offshore, Defense, Petrochemical, Construction, Industrial, Commercial, and Entertainment sectors.";
  const goalsText =
    "Deliver high-quality solutions with global standards, build lasting relationships through tailored services that exceed customer expectations, promote sustainable growth with eco-friendly practices, advance through technology and expertise, and expand capabilities to reach new sectors and regions.";

  return (
    <>
      <div
        className="bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${SustainbilityBG})` }}
      >
        <h1 className="text-5xl text-white font-bold mt-24 mb-4">
          Sustainability
        </h1>
      </div>

      <SustainabilityComp
        title="Mission"
        description={missionText}
        icon={missionIcon}
      />
      <SustainabilityComp
        title="Vision"
        description={visionText}
        icon={visionIcon}
      />
      <SustainabilityComp
        title="Goals"
        description={goalsText}
        icon={goalsIcon}
      />
    </>
  );
};

export default Sustainability;
