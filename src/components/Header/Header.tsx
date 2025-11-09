"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
const Header = () => {
   const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex items-center flex-wrap md:flex-nowrap gap-4 relative">

      {/* LOGO */}
      <div className="w-1/2 md:w-1/3 flex justify-start">
        <Image src={"/images/logo.png"} alt="Sabme Studio" width={180} height={100} />
      </div>

      {/* MOBILE MENU ICON */}
      <button 
        className="md:hidden ml-auto text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={32}/> : <Menu size={32}/> }
      </button>

      {/* LINKS */}
      <div className={`w-full md:w-3/4 flex-col md:flex-row flex flex-wrap items-center justify-around transition-200 text-white gap-6 md:gap-0 order-last md:order-none
        ${open ? 'flex' : 'hidden md:flex'}
      `}>
        <Link href={"#About"} className="group relative inline-block pb-0.5">
          About Us
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#3DD47E] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
        </Link>
        <Link href={"#Service"} className="group relative inline-block pb-0.5">
          Services
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#3DD47E] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
        </Link>
        <Link href={"#LatestWork"} className="group relative inline-block pb-0.5">
          Latest Work
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#3DD47E] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
        </Link>
        <Link href={"#Testimonials"} className="group relative inline-block pb-0.5">
          Testimonials
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#3DD47E] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
        </Link>
        <Link href={"#CaseStudy"} className="group relative inline-block pb-0.5">
          Case Study
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-[#3DD47E] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
        </Link>
      </div>

      {/* BUTTON */}
      <div className={`w-full md:w-1/3 flex justify-center md:justify-end order-last md:order-0
        ${open ? 'flex' : 'hidden md:flex'}
      `}>
        <Link href={"#Contact"} className="bg-[#652a8b] text-[#0D0D0D] font-bold py-2 px-6 rounded-full cursor-pointer">
          Contact Us
        </Link>
      </div>
      
    </div>

    </>
  );
};

export default Header;
