import React, { useEffect } from "react";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";
import Digitization from "../Assets/Icons/Digitization.svg";
import ClientCentric from "../Assets/Icons/ClientCentric.svg";
import IndustryStandards from "../Assets/Icons/IndustryStandards.svg";
import SustainabilityComp from "../Components/SustainabilityComp";
import investInTalent from "../Assets/Icons/investInTalent.svg";
import EndtoEndSolution from "../Assets/Icons/EndtoEndSolution.svg";
import SustainabilityIntegration from "../Assets/Icons/SustainabilityIntegration.svg";

const Strategy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DigitizationText =
    "Leveraging cutting-edge technologies and innovative solutions to set new industry benchmarks.";
  const ClientCentricApproachText =
    "Focus on understanding client needs to offer customized, cost-effective, and innovative solutions.";
  const IndustryStandardsText =
    "Maintain strict adherence to internationally recognized standards to ensure quality, safety, and reliability.";
  const InvestInTalentText =
    "Develop a skilled workforce and leverage state-of-the-art technology to deliver exceptional results.";
  const EndToEndSolutionText =
    "Provide comprehensive services, ensuring seamless integration and execution of projects.";
  const SustainabilityIntegrationText =
    "Embed sustainable practices into operations, from material selection to project execution.";

  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${SustainbilityBG})` }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">
          Our Strategy
        </h1>
      </div>
      <h2
        className="text-3xl items-center flex justify-center font-bold mt-24 mb-12"
        style={{ color: "#20376D" }}
      >
        Core Strategic Pillars
      </h2>
      <p
        className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center mt-24 mb-8"
      >
        At ALFA, we are committed to delivering differentiated and competitive products and solutions to the energy sector, creating sustainable value across all aspects of our operations.
      </p>

      <SustainabilityComp
        title="Digitization"
        description={DigitizationText}
        icon={Digitization}
      />
      <SustainabilityComp
        title="Client-Centric Approach"
        description={ClientCentricApproachText}
        icon={ClientCentric}
      />
      <SustainabilityComp
        title="Industry Standards"
        description={IndustryStandardsText}
        icon={IndustryStandards}
      />
      <SustainabilityComp
        title="Invest In Talent & Technology"
        description={InvestInTalentText}
        icon={investInTalent}
      />
      <SustainabilityComp
        title="End-to-End Solutions"
        description={EndToEndSolutionText}
        icon={EndtoEndSolution}
      />
      <SustainabilityComp
        title="Sustainability Integration"
        description={SustainabilityIntegrationText}
        icon={SustainabilityIntegration}
      />
    </>
  );
};

export default Strategy;
