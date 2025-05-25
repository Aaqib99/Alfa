import React from "react";
import { Link } from "react-router-dom";
import OneStop from "../Assets/Icons/one-stop.svg";
import Industry from "../Assets/Icons/industry.svg";
import Proven from "../Assets/Icons/proven.svg";
import Quality from "../Assets/Icons/quality.svg";
import Experienced from "../Assets/Icons/experienced.svg";
import Innovation from "../Assets/Icons/innovation.svg";
import Regional from "../Assets/Icons/regional.svg";

const ChooseUsCard = () => {
  const delayClasses = [
    "delay-0",
    "delay-1",
    "delay-2",
    "delay-3",
    "delay-4",
    "delay-5",
  ];
  const randomDelay =
    delayClasses[Math.floor(Math.random() * delayClasses.length)];
  const cards = [
    {
      id: 1,
      link: "one-stop-solution-provider",
      logo: OneStop,
      title: "One-Stop Solution Provider",
    },
    {
      id: 2,
      link: "industry-diversification",
      logo: Industry,
      title: "Industry Diversification",
    },
    {
      id: 3,
      link: "proven-track-record",
      logo: Proven,
      title: "Proven Track Record",
    },
    {
      id: 4,
      link: "quality-and-compliance",
      logo: Quality,
      title: "Quality & Compliance",
    },
    {
      id: 5,
      link: "experienced-and-dedicated-teams",
      logo: Experienced,
      title: "Experienced & Dedicated Teams",
    },
    {
      id: 6,
      link: "innovation-and-investment",
      logo: Innovation,
      title: "Innovation & Investment",
    },
    {
      id: 7,
      link: "regional-reach-and-responsiveness",
      logo: Regional,
      title: "Regional Reach & Responsiveness",
    },
  ];

  return (
    <div className="mt-12 container mx-auto mb-16 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-transparent border border-custom-green p-6 rounded-lg shadow-xl text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl"
        >
          <div className="mb-4">
            <img
              src={card.logo}
              alt={card.title}
              className={`h-8 w-8 scale-pulse ${randomDelay}`}
            />
          </div>

          <h3 className="text-xl font-bold mb-2" style={{ color: "#20376D" }}>
            {card.title}
          </h3>

          {/* You can add card.description if available */}
          {/* <p className="text-sm" style={{ color: "#20376D" }}>{card.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default ChooseUsCard;
