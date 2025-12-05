import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion } from "motion/react";
import { Link, Links } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const closeWhenClicked = ()=>{
    setOpen(false)
  }
  return (
    <div className="fixed top-0 left-0 right-0 z-20 flex justify-center  bg-white/60 backdrop-blur-lg border-b-2 border-neutral-200">
      <div className="w-6xl flex items-center justify-between h-20 px-4  xl:px-0">
        {/* Logo */}
        <Link to="/">
          <img src="logo.svg" alt="logo" className="w-12" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden relative md:flex items-center gap-10 text-lg uppercase font-semibold">
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
          <li
            onClick={() => {
              setValue(!value);
            }}
            className="flex items-center gap-1 cursor-pointer hover:bg-gray-300 px-2 rounded"
          >
            More <IoIosArrowDown />
          </li>
          {/* More Drop down button */}
          {value && (
            <div className="absolute top-10 -right-20 bg-white text-zinc-900 drop-shadow-xl border border-zinc-300/70 rounded-xl">
              <ul className="">
                <Link onClick={closeWhenClicked} to={'/DonateAndSupport'} className="flex gap-4 items-center border-b border-zinc-200/90 p-4 cursor-pointer hover:bg-[#f5f5f5] rounded-tl-xl rounded-tr-xl transition-all ease-in-out duration-300">
                  <img src="./images/money_box.png" alt="money box image" />
                  <span>Donate & Support</span>
                </Link>

                <Link onClick={closeWhenClicked} to={'/Blog'} className="flex gap-4 items-center border-b border-zinc-200/90 p-4 cursor-pointer hover:bg-[#f5f5f5] transition-all ease-in-out duration-100">
                  <img src="./images/blog.png" alt="blog image" />
                  <span>Blog</span>
                </Link>

                <Link onClick={closeWhenClicked} to={'/Media'} className="flex gap-4 items-center border-b border-zinc-200/90 p-4 cursor-pointer hover:bg-[#f5f5f5] transition-all ease-in-out duration-100">
                  <img src="./images/gallery.png" alt="gallery image" />
                  <span>Media Gallery</span>
                </Link>

                <Link onClick={closeWhenClicked} to={'/Contact'} className="flex gap-4 items-center border-b border-zinc-200/90 p-4 cursor-pointer hover:bg-[#f5f5f5] transition-all ease-in-out duration-100">
                  <img src="./images/call.png" alt="contact image" />
                  <span>Contact Us</span>
                </Link>

                <Link onClick={closeWhenClicked} to={'/Terms'} className="flex gap-4 items-center border-b border-zinc-200/90 p-4 cursor-pointer hover:bg-[#f5f5f5] rounded-bl-xl rounded-br-xl transition-all ease-in-out duration-100">
                  <img src="./images/analyze.png" alt="analyze image" />
                  <span>Terms & Conditions</span>
                </Link>
              </ul>
            </div>
          )}
        </ul>

        {/* Desktop Donate Button */}
        <button className="hidden md:block px-4 py-2 bg-[#005EFF] text-white hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
          <a href="#">
            Donate Now
            <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
          </a>
        </button>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-start gap-4 p-6 text-lg uppercase font-semibold">
          <li onClick={() => setOpen(false)}>
            <Link to={"/"}>Home</Link>
          </li>

          <a href="#about" onClick={() => setOpen(false)}>
            <li>About Us</li>
          </a>

          <li onClick={() => setOpen(false)}>
            <Link to={'/Campaign'}>Campaign</Link>
          </li>


          <li onClick={() => setOpen(false)}>
            <a href="#join-us">join us</a>
          </li>

        <li onClick={() => setValue(!value)} className="flex items-center gap-1">
          More <IoIosArrowDown />
        </li>

        {value && (
          <div className="text-zinc-900 w-full">
            <ul className="space-y-3 w-full">
              <Link onClick={closeWhenClicked} to={'/DonateAndSupport'} className="flex gap-4  items-center bg-[#F1EFEF] hover:bg-blue-50 transition-all ease-in-out duration-300 px-3 text-sm py-1.5 w-full cursor-pointer">
                <img
                  src="./images/money_box.png"
                  alt="money box image"
                  className="w-6"
                />
                <span>Donate & Support</span>
              </Link>

              <Link onClick={closeWhenClicked} to={'/Blog'} className="flex  gap-4  items-center bg-[#F1EFEF] hover:bg-blue-50 transition-all ease-in-out duration-300 px-3 text-sm py-1.5 w-full cursor-pointer">
                <img
                  src="./images/blog.png"
                  alt="blog image"
                  className="w-6"
                />
                <span>Blog</span>
              </Link>

              <Link onClick={closeWhenClicked} to={'/Media'} className="flex gap-4  items-center bg-[#F1EFEF] hover:bg-blue-50 transition-all ease-in-out duration-300 px-3 text-sm py-1.5 w-full cursor-pointer">
                <img
                  src="./images/gallery.png"
                  alt="gallery image"
                  className="w-6"
                />
                <span>Media Gallery</span>
              </Link>

              <Link onClick={closeWhenClicked} to={'/Contact'} className="flex gap-4  items-center bg-[#F1EFEF] hover:bg-blue-50 transition-all ease-in-out duration-300 px-3 text-sm py-1.5 w-full cursor-pointer">
                <img
                  src="./images/call.png"
                  alt="contact image"
                  className="w-6"
                />
                <span>Contact Us</span>
              </Link>

              <Link onClick={closeWhenClicked} to={'/Terms'} className="flex gap-4  items-center bg-[#F1EFEF] hover:bg-blue-50 transition-all ease-in-out duration-300 px-3 text-sm py-1.5 w-full cursor-pointer">
                <img
                  src="./images/analyze.png"
                  alt="analyze image"
                  className="w-6"
                />
                <span>Terms & Conditions</span>
              </Link>
            </ul>
          </div>
        )}

        <button className="mt-4 w-full px-4 py-2 bg-[#005EFF] text-white hover:bg-black font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer">
          <a href="#">
            Donate Now
            <span className="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span>
          </a>
        </button>
      </ul>
    </div>
    </div >
  );
};

export default Header;
