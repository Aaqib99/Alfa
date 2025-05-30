import React from "react";
import { Link } from "react-router-dom";
import Marine from "../Assets/Icons/Marine.svg";
import Construction from "../Assets/Icons/Construction.svg";
import Fabrication from "../Assets/Icons/Fabrication.svg";
import Trading from "../Assets/Icons/Trading.svg";
import ICT from "../Assets/Icons/ICT.svg";
import Facility from "../Assets/Icons/Facility.svg";
import Joinery from "../Assets/Icons/Joinery.svg";

const ServiceCard = () => {
  const cards = [
    {
      id: 1,
      link: "marine-and-offshore-division",
      logo: Marine,
      title: "Marine & Offshore Division",
      description:
        "Our Marine & Offshore Division specializes in providing comprehensive services for the maritime and offshore industries. We support shipbuilding, repair, and offshore platform maintenance with a strong focus on safety and technical excellence. Our team is experienced in delivering turnkey solutions that meet international marine standards. From hull fabrication to systems integration, we ensure robust, sea-worthy performance. We serve commercial fleets, offshore drilling units, and support vessels.",
    },
    {
      id: 2,
      link: "construction-division",
      logo: Construction,
      title: "Construction Division",
      description:
        "The Construction Division handles a wide range of civil, structural, and infrastructure development projects. We deliver end-to-end solutions for commercial, industrial, and institutional buildings. Our services include project planning, execution, and quality control to ensure timely completion and client satisfaction. We integrate sustainable construction practices with modern techniques. With a commitment to safety and compliance, we deliver durable, high-performance structures.",
    },
    {
      id: 3,
      link: "fabrication-and-machining-division",
      logo: Fabrication,
      title: "Fabrication & Machining Division",
      description:
        "Our Fabrication & Machining Division offers precision metalwork, including welding, CNC machining, and custom component manufacturing. We cater to industries like oil & gas, petrochemicals, and heavy engineering. With advanced machinery and skilled technicians, we produce parts that meet strict tolerances and quality standards. We support both high-volume and specialized custom fabrication needs. From concept to completion, we guarantee structural integrity and performance.",
    },
    {
      id: 4,
      link: "trading-division",
      logo: Trading,
      title: "Trading Division",
      description:
        "The Trading Division provides reliable sourcing and supply chain solutions for industrial and commercial clients. We offer a broad portfolio of equipment, tools, spare parts, and raw materials. Leveraging strong supplier relationships, we ensure timely procurement and competitive pricing. Our logistics and inventory management systems enhance operational efficiency. We are committed to supporting client needs with accuracy and accountability.",
    },
    {
      id: 5,
      link: "ict-division",
      logo: ICT,
      title: "ICT Division",
      description:
        "Our ICT Division delivers innovative technology solutions for enterprise needs. Services include IT infrastructure, cybersecurity, cloud integration, and software development. We help organizations embrace digital transformation with scalable and secure solutions. From network setups to data management, our experts ensure reliable and future-ready IT ecosystems. We empower businesses to thrive in an increasingly connected world.",
    },
    {
      id: 6,
      link: "facility-management-division",
      logo: Facility,
      title: "Facility Management Division",
      description:
        "The Facility Management Division ensures the seamless operation, maintenance, and optimization of built environments. Our services range from HVAC and electrical maintenance to cleaning, landscaping, and security. We use modern tools and smart technologies to manage facilities efficiently. Our goal is to enhance comfort, safety, and productivity within client premises. Tailored service models ensure cost-effectiveness and reliability.",
    },
    {
      id: 7,
      link: "joinery-division",
      logo: Joinery,
      title: "Joinery Division",
      description:
        "The Joinery Division specializes in custom woodwork, including doors, windows, cabinetry, and bespoke furniture. We blend craftsmanship with modern techniques to deliver high-quality interior and exterior joinery. Our team works with a variety of woods and finishes to meet architectural and design specifications. From residential to commercial projects, we provide durable and aesthetic wood solutions. Attention to detail and fine finishing are our hallmarks.",
    },
  ];

  return (
    <div className="mt-12 container mx-auto mb-16 px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-transparent border border-custom-green p-4 rounded-lg shadow-xl"
        >
          <div className="mb-4 grid ">
            <img
              src={card.logo}
              alt={card.title}
              className="justify-items-start h-16 w-16  group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3
            className="text-xl font-bold mb-2 group-hover:text-white"
            style={{ color: "#20376D" }}
          >
            {card.title}
          </h3>
          <p
            className="mb-4 group-hover:text-white"
            style={{ color: "#20376D" }}
          >
            {card.description}
          </p>
          {/* <Link to={`/${card.link}`}>
            <button
              className="text-white text-md font-bold px-8 py-2 rounded-bl-3xl rounded-tr-3xl"
              style={{ backgroundColor: "#20376D" }}
            >
              Read More
            </button>
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
