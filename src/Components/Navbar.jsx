import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Assets/Icons/white-logo.svg";
import { FaChevronDown } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaUser, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (path, section) => {
    navigate(path);
    closeMenu();
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const links = [
    {
      name: "WHO WE ARE",
      path: "/who-we-are",
      submenu: [
        { name: "Group Overview", path: "/groupoverview" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Core Values", path: "/core-values" },
        { name: "Our Strategy", path: "/our-strategy" },
        { name: "Meet Our Leadership", path: "/meet-our-leadership" },
        { name: "Our Culture", path: "/our-culture" },
        { name: "Our Facilities", path: "/our-facilities" },
        { name: "Our Capabilities", path: "/our-capabilities" },
        { name: "Accreditations", path: "/accreditations" },
      ],
    },
    {
      name: "OUR DIVISIONS",
      path: "/our-divisions",
      submenu: [
        { name: "Marine & Offshore", path: "/marine-and-offshore-division" },
        { name: "Construction", path: "/construction-division" },
        {
          name: "Fabrication & Machining",
          path: "/fabrication-and-machining-division",
        },
        { name: "Trading", path: "/trading-division" },
        { name: "ICT", path: "/ict-division" },
        { name: "Facility Management", path: "/facility-management-division" },
        { name: "Joinery", path: "/joinery-division" },
      ],
    },
    {
      name: "SUSTAINABILITY",
      path: "/sustainability",
      submenu: [
        {
          name: "Environmental Responsibility",
          path: "/environmental-responsibility",
        },
        {
          name: "Health, Safety & Environmental Policy",
          path: "/health-safety-and-environmental-policy",
        },
        { name: "Quality Assurance Policy", path: "/quality-assurance-policy" },
        { name: "Ethics and Compliance", path: "/ethics-and-compliance" },
      ],
    },
    {
      name: "MEDIA CENTER",
      path: "/media",
      submenu: [
        { name: "News", path: "/news" },
        { name: "Download Center", path: "/download-center" },
      ],
    },
    {
      name: "CONTACT US",
      path: "/contact",
      submenu: [
        { name: "Commercial Inquiries", path: "/commercial-inquiries" },
        { name: "Careers", path: "/Careers" },
        { name: "Become a Supplier", path: "/become-a-supplier" },
        { name: "Whistleblowing", path: "/Whistleblowing" },
      ],
    },
  ];

  return (
    <>
      <div className="flex right-0 justify-end absolute top-4 z-[1000] w-11/12 mx-auto">
        <div className=" flex justify-end text-white text-sm space-x-4 px-6 mb-2">

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-blue-400 transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-blue-400 transition" />
          </a>
          <Link to="/login">
            <FaUser className="hover:text-blue-400 transition cursor-pointer" />
          </Link>
          <button onClick={() => alert("Search clicked")}>
            <FaSearch className="hover:text-blue-400 transition cursor-pointer" />
          </button>

          {/* Language Selector */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-1 hover:text-blue-400 transition z-40">
              <FaGlobe />
              <IoIosArrowDown />
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 bg-[#A9A9A9]/90 text-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
              <ul className="w-32">
                <li className="flex items-center hover:bg-[#2C95D2] pl-4 py-2 w-full">
                  English
                </li>
                <li className="flex items-center hover:bg-[#2C95D2] pl-4 py-2 w-full">
                  العربية
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
      <div className="absolute top-8 z-[1000] w-11/12 mx-auto">
        <nav className="flex items-center justify-between px-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-auto w-36" />
          </Link>
          <div className="relative">
            <ul className="flex space-x-6 uppercase text-white text-sm font-medium relative">
              {links.map((menu, idx) => (
                <li
                  key={idx}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setOpenMenu(menu.name)}
                >
                  <div className="py-2">
                    <Link
                      to={menu.path}
                      className={`hover:text-blue-400 ${
                        openMenu === menu.name
                          ? "text-blue-400 border-b-2 border-blue-400"
                          : ""
                      }`}
                    >
                      {menu.name}
                      {menu.submenu && (
                        <FaChevronDown className="inline ml-1 text-xs" />
                      )}
                    </Link>
                  </div>

                  {openMenu === menu.name && (
                    <ul
                      className={`absolute ${
                        menu.name === "CONTACT US" ? "right-0" : "left-0"
                      } mt-2 bg-white/20 backdrop-blur-md text-white py-4 shadow-xl space-y-2 w-64 z-50 pointer-events-auto`}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      {menu.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.path}
                            className="block w-full py-3 px-4 text-left hover:bg-[#2C95D2] hover:text-white transition-all duration-300"
                          >
                            <span className="ml-3 block text-left">
                              {sub.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
