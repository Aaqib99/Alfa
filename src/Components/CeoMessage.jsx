import React from "react";
import sustainability from "../Assets/Images/ceo-image.jpeg";

const CeoMessage = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between p-6 mt-24 mb-16">
          {/* Left Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
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
              </p>
              <p>
                As a multi-division organization, we pride ourselves on being a
                one-stop solution provider, offering a wide range of services
                across Oil & Gas, Renewable Energy, Power & Utilities, Marine &
                Offshore, Defense, Petrochemical, Construction, Industrial,
                Commercial, and Entertainment sectors. Each division plays a
                crucial role in enabling us to deliver tailored solutions that
                are designed to meet the unique needs of our clients.
              </p>
              <p>
                Our success is the result of the collective efforts of our
                talented professionals, who continuously strive for excellence
                in everything they do. We are committed to maintaining the
                highest standards of safety and quality, while adapting to the
                ever-changing needs of the industries we serve.
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

