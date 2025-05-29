import React from "react";
import ServiceCard from "./ServiceCard";
import ChooseUsCard from "./ChooseUsCard";

const WhyChooseUs = () => {
  return (
    <>
      <div className="mt-24 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <div className="md:w-full text-center">
            <h3
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#20376D" }}
            >
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-700" style={{ color: "#20376D" }}>
              At ALFA Group, we don’t just deliver services — we build lasting
              partnerships. Driven by passion, precision, and innovation, we
              bring your vision to life with solutions that exceed expectations.
              Backed by years of expertise, we listen closely, act with
              integrity, and execute flawlessly — every time. With ALFA Group,
              your success isn’t just a goal — it’s our commitment.
            </p>
            <h5
              className="text-2xl md:text-2xl font-medium mb-2 mt-8"
              style={{ color: "#20376D" }}
            >
              Our Advantages
            </h5>
          </div>
          {/* <div className="md:w-1/3 mt-4 md:mt-0 flex justify-end">
      <button className="bg-custom-blue text-lg font-bold text-white px-10 py-3 rounded-bl-3xl rounded-tr-3xl border-2 border-sky-500 hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:transition hover:duration-500 hover:from-transparent hover:bg-transparent hover:to-sky-500">
        See All Services
      </button>
    </div> */}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-16">
        <ChooseUsCard />
      </div>
    </>
  );
};

export default WhyChooseUs;
