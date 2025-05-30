import React, { useRef, useState, useEffect } from "react";
import DivisionCard from "../Components/DivisionCard";
import Marine from "../Assets/Icons/Marine.svg";
import Construction from "../Assets/Icons/Construction.svg";
import Fabrication from "../Assets/Icons/Fabrication.svg";
import Trading from "../Assets/Icons/Trading.svg";
import ICT from "../Assets/Icons/ICT.svg";
import Facility from "../Assets/Icons/Facility.svg";
import Joinery from "../Assets/Icons/Joinery.svg";
import Marine2a from "../Assets/Images/marine2a.png";
import Construction2a from "../Assets/Images/construction2a.png";
import Fabrication2a from "../Assets/Images/fabrication2a.png";
import Trading2a from "../Assets/Images/trading2a.png";
import Ict2a from "../Assets/Images/ict2a.png";
import Facility2a from "../Assets/Images/facility2a.png";
import Joinery2a from "../Assets/Images/joinery2a.png";
import { motion } from "framer-motion";

// Original cards
const cards = [
  {
    icon: <img src={Marine} alt="Marine Logo" className="h-12 w-auto filter invert brightness-10" />,
    title: "Marine & Offshore Division",
    description: "Our Marine & Offshore Division specializes in providing comprehensive...",
    label: "MARINE",
    bgImage: Marine2a,
  },
  {
    icon: <img src={Construction} alt="Construction Logo" className="h-12 w-auto filter invert brightness-10" />,
    title: "Construction Division",
    description: "The Construction Division handles a wide range of civil, structural...",
    label: "CONSTRUCTION",
    bgImage: Construction2a,
  },
  {
    icon: <img src={Fabrication} alt="Fabrication Logo" className="h-12 w-auto filter invert brightness-10" />,
    title: "Fabrication & Machining Division",
    description: "Our Fabrication & Machining Division offers precision metalwork, including...",
    label: "FABRICATION",
    bgImage: Fabrication2a,
  },
  {
    icon: <img src={Trading} alt="Trading Logo" className="h-12 w-auto filter invert brightness-10" />,
    title: "Trading Division",
    description: "The Trading Division provides reliable sourcing and supply chain solutions...",
    label: "TRADING",
    bgImage: Trading2a,
  },
  {
    icon: <img src={ICT} alt="ICT Logo" className="h-12 w-auto filter invert brightness-10" />,
    title: "ICT Division",
    description: "Our ICT Division delivers innovative technology solutions for enterprise needs. Services...",
    label: "ICT",
    bgImage: Ict2a,
  },
  {
    icon: <img src={Facility} alt="Facility Logo" className="h-12 w-auto filter invert brightness-10" />,
    title: "Facility Management Division",
    description: "The Facility Management Division ensures the seamless operation...",
    label: "FACILITY MGMT",
    bgImage: Facility2a,
  },
  {
    icon: <img src={Joinery} alt="Joinery Logo" className="h-12 w-auto text-white" />,
    title: "Joinery Division",
    description: "The Joinery Division specializes in custom woodwork, including doors...",
    label: "JOINERY",
    bgImage: Joinery2a,
  },
];

// Clone for infinite scroll
const loopedCards = [
  ...cards.slice(-3),
  ...cards,
  ...cards.slice(0, 3),
];

function OurDivisions() {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(3); // 3 is the start of real cards in looped list
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const endDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollLeftVal = container.scrollLeft;
    const width = container.offsetWidth;
    const cardWidth = width / 3;
    const index = Math.round(scrollLeftVal / cardWidth);
    setCenterIndex(index);

    const totalCards = cards.length;
    if (index <= 2) {
      container.scrollLeft = cardWidth * (totalCards + index);
      setCenterIndex(totalCards + index);
    } else if (index >= totalCards + 3) {
      container.scrollLeft = cardWidth * (index - totalCards);
      setCenterIndex(index - totalCards);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.scrollLeft = (container.offsetWidth / 3) * 3;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <motion.div
            className="md:w-2/2 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="md:w-full text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#20376D" }}>
                Our Divisions
              </h3>
              <p className="text-lg text-gray-700" style={{ color: "#20376D" }}>
              ALFA Group Established in 2014 and headquartered in Dammam, Saudi
              Arabia. ALFA Group is a steadily growing multi-division company
              supporting major industries across the Middle East. We specialize
              as a reliable subcontractor, delivering high-quality Engineering
              Support, Procurement Assistance, Fabrication & Construction(EPFC)
              services tailored to our Client's Project Needs Our capabilities
              span a wide range of sectors, including Oil & Gas, Renewable
              Energy, Marine & Offshore, Power & Utilities, Defense,
              Construction & Infrastructure, Petrochemical, Industrial Plants,
              and Commercial Projects. ALFA Group operates with a strong focus
              on quality, safety, and client satisfaction, backed by ISO
              certifications and adherence to international standards. We invest
              continuously in skilled manpower, advanced technologies, and
              operational excellence to support the success of our clients’
              projects. Each division is managed by experienced teams and
              operates under robust systems to ensure timely, safe, and
              value-driven project delivery.
            </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="overflow-hidden px-6 mt-48">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar select-none"
          onMouseDown={startDrag}
          onMouseLeave={endDrag}
          onMouseUp={endDrag}
          onMouseMove={onDrag}
          onTouchStart={startDrag}
          onTouchMove={onDrag}
          onTouchEnd={endDrag}
          style={{ cursor: "grab" }}
        >
          {loopedCards.map((card, index) => {
            const isCenter = index === centerIndex;
            return (
              <div
                key={index}
                className={`transition-transform duration-300 ease-in-out flex-shrink-0 ${
                  isCenter ? "scale-105" : "scale-95"
                }`}
                style={{ width: "33.33%" }}
              >
                <DivisionCard {...card} isCenter={isCenter} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OurDivisions;
