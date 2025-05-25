import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import logo from "../Assets/Icons/white-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
  faPhoneAlt,
  faEnvelope,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20" style={{ backgroundColor: "#20376D" }}>
      <div className="relative mx-auto max-w-screen-xl space-y-8 px-8 py-16 sm:px-12 lg:space-y-16 lg:px-16">
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="image1" className="w-44 text-white" />
            </Link>
            <p className="mt-8 max-w-xs text-white text-lg">
              Prince Muhammad Ibn Saud Dist, Dammam, Kingdom of Saudi Arabia
            </p>
            {/* <div className="mt-6">
              <h4 className="text-white mb-2">Enter Your Email</h4>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-md font-bold text-custom-green px-4 py-4 sm:rounded-bl-3xl"
                />
                <button
                  type="submit"
                  className="bg-custom-dark-right text-md font-bold text-white px-6 py-4 sm:rounded-bl-none sm:rounded-tr-3xl mt-2 sm:mt-0"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
            <div className="mt-6">
              {/* Contact Info */}
              <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                <span className="whitespace-nowrap text-[#2C95D2] hover:text-white cursor-pointer">
                  +966 13 805 2528
                </span>
                <span className="whitespace-nowrap text-white">|</span>
                <span className="whitespace-nowrap text-[#2C95D2] hover:text-white cursor-pointer">
                  info@alfamarinesa.com
                </span>
              </div>

              {/* Horizontal Gray Line */}
              <div className="w-full border-t border-gray-500 my-4"></div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-blue-400">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-white text-2xl pb-1 cursor-pointer">
                <span className="border-b-2 border-blue-400 inline-block">
                  Quick Links
                </span>
              </p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    About us
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="aboutcompany"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    Sustainability
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contactus"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    Fabrication
                  </ScrollLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-14 space-y-4 text-lg">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    Facility
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    ICT division
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="aboutcompany"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    Trading
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contactus"
                    smooth={true}
                    duration={500}
                    offset={-70} // Adjust based on your navbar height
                    className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                  >
                    Marine
                  </ScrollLink>
                </li>
              </ul>
            </div>
            <ul className="mt-14 space-y-4 text-lg">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust based on your navbar height
                  className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                >
                  Core Values
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust based on your navbar height
                  className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                >
                  HSE Policy
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="aboutcompany"
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust based on your navbar height
                  className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                >
                  Accreditations
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contactus"
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust based on your navbar height
                  className="text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer"
                >
                  Ethics & Compliance
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-xs text-white">
              Copyright © 2025 Alfa Technologies. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <p className="text-xs text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer">
              Privacy Policy |
            </p>
            <p className="text-xs text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer">
              Policy Center |
            </p>
            <p className="text-xs text-white transition hover:text-blue-400 hover:border-b-2 border-blue-400 pb-1 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
