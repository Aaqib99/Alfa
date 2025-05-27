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
            <div className="mt-6">
              {/* Contact Info */}
              <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                <a
                  href="tel:+966138052528"
                  className="whitespace-nowrap text-[#2C95D2] hover:text-white cursor-pointer"
                >
                  +966 13 805 2528
                </a>
                <span className="whitespace-nowrap text-white">|</span>
                <a
                  href="mailto:info@alfamarinesa.com"
                  className="whitespace-nowrap text-[#2C95D2] hover:text-white cursor-pointer"
                >
                  info@alfamarinesa.com
                </a>
              </div>

              {/* Horizontal Gray Line */}
              <div className="w-full border-t border-gray-500 my-4"></div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/afla-marine/"
                  className="text-white hover:text-[#2C95D2]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/alfa_marine_sa/"
                  className="text-white hover:text-[#2C95D2]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/alfamarinesa"
                  className="text-white hover:text-[#2C95D2]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-white text-2xl pb-1 cursor-pointer">
                <span className="border-b-2 border-[#2C95D2] inline-block">
                  Quick Links
                </span>
              </p>
              <ul className="mt-6 space-y-4 text-lg">
                <li>
                  <Link
                    to="/"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/readmoreaboutcompany"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sustainability"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    to="/fabrication-and-machining-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Fabrication
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-14 space-y-4 text-lg">
                <li>
                  <Link
                    to="/our-facilities"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Facility
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ict-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    ICT Division
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trading-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marine-and-offshore-division"
                    className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                  >
                    Marine
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="mt-14 space-y-4 text-lg">
              <li>
                <Link
                  to="/core-values"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  Core Values
                </Link>
              </li>
              <li>
                <Link
                  to="/health-safety-and-environmental-policy"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  HSE Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/accreditations"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  Accreditations
                </Link>
              </li>
              <li>
                <Link
                  to="/ethics-and-compliance"
                  className="text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer"
                >
                  Ethics & Compliance
                </Link>
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
            <Link to="/privacy-policy">
              <p className="text-xs text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer">
                Privacy Policy |
              </p>
            </Link>
            <Link to="/cookies-policy">
              <p className="text-xs text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer">
                Cookies Policy |
              </p>
            </Link>
            <Link to="/terms-and-conditions">
              <p className="text-xs text-white transition hover:text-[#2C95D2] hover:border-b-2 border-[#2C95D2] pb-1 cursor-pointer">
                Terms & Conditions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
