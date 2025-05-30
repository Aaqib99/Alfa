import React, {useEffect} from "react";
import profileImg from "../Assets/Images/ceo-image1.jpg";
import SustainbilityBG from "../Assets/Images/SustainbilityBG.png";

const Leadership = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <div
        className="bg-cover bg-center h-[110vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${SustainbilityBG})` }}
      >
        <h1 className="text-5xl text-white font-bold mb-4">
          Our Leadership
        </h1>
      </div>
      <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-12">
        {/* Hexagonal Image */}
        <div className="w-28 h-28">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full"
            style={{
            //   WebkitMaskImage:
            //     "url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexagon.svg')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
            //   maskImage:
            //     "url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexagon.svg')",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-[#20376D]">
            Thamer BaJunayd
          </h3>
          <p className="text-[#4B5563] mt-2 text-sm leading-relaxed max-w-xl">
            He is a Managing Director responsible for leading the company&apos;s
            strategic direction, operations, and overall performance. They
            ensure sustainable growth, profitability, and alignment with
            organizational goals.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-12">
        {/* Hexagonal Image */}
        <div className="w-28 h-28">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full"
            style={{
            //   WebkitMaskImage:
            //     "url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexagon.svg')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
            //   maskImage:
            //     "url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexagon.svg')",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-[#20376D]">
            Abdullah Allauddin
          </h3>
          <p className="text-[#4B5563] mt-2 text-sm leading-relaxed max-w-xl">
            As CEO, he leads the company’s vision, strategy, and growth, ensuring long-term success and operational excellence. He is responsible for overall leadership, decision-making, and driving organizational performance.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-12">
        {/* Hexagonal Image */}
        <div className="w-28 h-28">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full"
            style={{
            //   WebkitMaskImage:
            //     "url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexagon.svg')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
            //   maskImage:
            //     "url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexagon.svg')",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-[#20376D]">
            Naresh Gaja
          </h3>
          <p className="text-[#4B5563] mt-2 text-sm leading-relaxed max-w-xl">
            He is the Finance Director, overseeing all financial operations, budgeting, and reporting activities. He ensures financial integrity, supports strategic planning, and drives the company's fiscal success.
          </p>
        </div>
      </div>
    </>
  );
};

export default Leadership;
