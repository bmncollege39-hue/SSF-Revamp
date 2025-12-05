import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion } from "motion/react";
import { Link } from "react-router";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex justify-center  bg-white/60 backdrop-blur-lg border-b-2 border-neutral-200">
      <div className="w-6xl flex items-center justify-between h-20 px-4  xl:px-0">

        {/* Logo */}
        <a href="/">
          <img src="logo.svg" alt="logo" className="w-12" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg uppercase font-semibold">
          <li className="cursor-pointer hover:bg-gray-300 px-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:bg-gray-300 px-2 rounded">
            <a href="#about">About Us</a>
          </li>

          <li className="cursor-pointer hover:bg-gray-300 px-2 rounded">
            <a href="#join-us">Join Us</a>
          </li>
           <li className="cursor-pointer hover:bg-gray-300 px-2 rounded">
            <Link to="/Campaign">Campaign</Link>
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 px-2 rounded">
            More <IoIosArrowDown />
          </li>
        </ul>

        {/* Desktop Donate Button */}
        <button className="hidden md:block px-4 py-2 bg-[#005EFF] text-white hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
          <a href="#">
            Donate Now
            <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
          </a>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-start gap-4 p-6 text-lg uppercase font-semibold">
          <Link><li onClick={() => setOpen(false)}><a href="#home">Home</a></li></Link>
          <Link to="/About" onClick={() => setOpen(false)}>
            <li>About Us</li>
          </Link>
          <Link><li onClick={() => setOpen(false)}><a href="#campaign">Campaign</a></li></Link>
          <Link><li onClick={() => setOpen(false)}><a href="#join-us">Join Us</a></li></Link>
          <li className="flex items-center gap-1">
            More <IoIosArrowDown />
          </li>

          <button className="mt-4 w-full px-4 py-2 bg-[#005EFF] text-white hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
            <a href="#">
              Donate Now
              <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
            </a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
