import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  return (
    <div className='fixed top-2 z-10 flex w-6xl items-center justify-between h-20'>
        <a href="#home">
            <img src="logo.svg" alt="logo" />
        </a>
        <ul className='flex items-center gap-10 text-lg uppercase font-semibold'>
            <li className='cursor-pointer hover:bg-gray-100'><a href="#home">Home</a></li>
            <li className='cursor-pointer hover:bg-gray-100'><a href="#about-us">About Us</a></li>
            <li className='cursor-pointer hover:bg-gray-100'><a href="#campaign">Campaign</a></li>
            <li className='cursor-pointer hover:bg-gray-100'><a href="#join-us">Join Us</a></li>
            <li className='flex items-center gap-1 cursor-pointer hover:bg-gray-100'>More<IoIosArrowDown /></li>
        </ul>
        <button  className='px-4 py-2 bg-[#005EFF] text-neutral-50 hover:bg-black hover:text-neutral-50 font-semibold text-lg relative group transition-all duration-200 ease-in cursor-pointer'
        ><a href="#">Donate Now <span class="absolute group-hover:translate-x-0 group-hover:translate-y-0 inset-0 bg-black translate-x-1.5 translate-y-1.5 -z-1 transition-all duration-200 ease-in"></span></a></button>
    </div>
  )
}

export default Header