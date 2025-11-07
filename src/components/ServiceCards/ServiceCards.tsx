import React from "react";
import Image from "next/image";

const ServiceCards = () => {
  return (
    <>
      <div id="Service" className="w-full px-4 md:px-9 lg:px-14 gap-4 space-y-4 md:space-y-6 lg:space-y-0 flex flex-col md:flex-row flex-wrap items-center justify-center py-6 bg-[#0D0D0D] text-[#C9C9C9] bg-[url('/images/service-bg.png')] bg-no-repeat bg-right bg-auto">
        <div className="w-full md:w-[45%] lg:w-[32%] border rounded-xl px-3 py-2 h-40">
          <Image src={"/images/brand.png"} alt="" width={100} height={20}/>
          <h3 className="font-bold text-xl leading-7">Brand Strategy & Identity</h3>
        </div>
        <div className="w-full md:w-[45%] lg:w-[32%] border rounded-xl px-3 py-2 h-40">
          <Image src={"/images/social-media.png"} alt="" width={100} height={20}/>
          <h3 className="font-medium text-xl leading-7">Social Media Growth & Management</h3>
        </div>
        <div className="w-full md:w-[45%] lg:w-[32%] py-2 h-40 space-y-4">
          <h3 className="font-bold text-3xl text-white">Our Core Expertise in Branding & Social Media</h3>
          <p className="text-justify md:text-start">We design strategy, identity, voice & system — then translate it into content that performs.</p>
          
        </div>
       <div className="w-full md:w-[45%] lg:w-[32%] border rounded-xl px-3 py-2 h-40">
        <Image src={"/images/creative-design.png"} alt="" width={100} height={20}/>
          <h3 className="font-medium text-xl leading-7">Creative Design & Visuals</h3>
        </div>
        <div className="w-full md:w-[45%] lg:w-[32%] border rounded-xl px-3 py-2 h-40">
          <Image src={"/images/paid-media.png"} alt="" width={100} height={20}/>
          <h3 className="font-medium text-xl leading-7">Paid Marketing & Lead Generation</h3>
        </div>
        <div className="w-full md:w-[45%] lg:w-[32%] border rounded-xl px-3 py-2 h-40">
          <Image src={"/images/web.png"} alt="" width={100} height={20}/>
          <h3 className="font-medium text-xl leading-7">Web & Presentation</h3>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
