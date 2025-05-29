import React from "react";
import sustainability from "../Assets/Images/ceo-image.jpeg";

const CeoMessage = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-8 mb-16">
          {/* Left Section */}
          <div className="md:w-2/2 mb-6 md:mb-0">
            <h1
              className="text-4xl font-bold mb-6 text-center md:text-left"
              style={{ color: "#20376D" }}
            >
              CEO Message
            </h1>
            <div className="text-lg space-y-4" style={{ color: "#20376D" }}>
              <p>
                At ALFA Group, we are driven by a simple yet powerful vision: to
                provide our clients with exceptional services and solutions that
                exceed expectations and create lasting value.
              </p>
              <p>
                Since our establishment in 2014, we have worked tirelessly to
                build a company that thrives on quality, innovation, and
                integrity. Our growth has been shaped by our dedication to
                safety, excellence, and customer satisfaction.
                We are a one-stop solution provider serving diverse sectors including Oil & Gas, Renewable Energy, Marine, Defense, Construction, and more—delivering tailored solutions through our specialized divisions.
              </p>
              <p>
                As we look to the future, we remain focused on our goal of
                expanding our portfolio and reaching new heights of success,
                ensuring that ALFA Group continues to be a trusted partner for
                businesses across the globe.
              </p>
              <p>
                Sincerely,
                <br />
                <strong>Chief Executive Officer</strong>
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-2/5 flex justify-center md:justify-end mr-12">
            <img
              src={sustainability}
              alt="CEO"
              className="w-full max-w-sm shadow-lg mt-24"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CeoMessage;

