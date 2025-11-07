import React from "react";
import Header from "../Header/Header";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/images/background.png')] px-4 md:px-9 lg:px-14 bg-[#0D0D0D] bg-contain bg-center bg-no-repeat bg-fixed">
        <Header />

        <div className="w-full flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0" id="Hero">
          <div className="w-full md:w-1/2 space-y-4 order-2 md:order-1">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-semibold">Branding & Social Media Studio for the Self-Made.</h1>
            <p className="text-white leading-7 text-lg">SABMÉ stands for more than just letters. It’s a creative space built for the Self-Made. Where Smart Strategy, Authentic Branding, and Minimal Design come together to build bold businesses.</p>
            <button className="bg-[#652a8b] text-[#0D0D0D] font-bold py-2 px-6 rounded-full cursor-pointer">
            Contact Us
          </button>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
            <Image
              src={"/images/cover-image.png"}
              alt="Hero Image"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
