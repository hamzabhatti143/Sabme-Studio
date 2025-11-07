import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="w-full bg-[url('/images/about-bg.png')] bg-no-repeat bg-left bg-[#0D0D0D] px-4 md:px-9 lg:px-14 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0"
      id="About"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <Image
          src={"/images/ab.png"}
          alt="Hero Image"
          width={400}
          height={100}
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4 py-8">
        <h2 className="text-white text-3xl font-semibold">
          About SABME studio 

        </h2>
        <p className="text-white">
          We Build Presence for the Self-Made. At SABME Studio, we help
          entrepreneurs, coaches, doctors, and service providers build
          meaningful, memorable, and money-making brands. We specialize in
          Personal Branding and Business Branding & Management, creating a
          strong digital presence that reflects your story, your values, and
          your expertise. Our approach combines strategy, storytelling, and
          social design, turning your online identity into a brand that
          attracts trust, clients, and consistent growth. Whether you’re a
          consultant, a creative, or a clinic owner, we build the systems and
          visuals that make your audience remember you. We don’t just manage
          social media, we manage perception. We don’t just design, we design
          authority.
        </p>
        <h4 className="text-white text-2xl font-semibold"> Our Focus</h4>
        <p className="text-white">
          Personal Branding: for coaches, consultants, and founders <br />
          Business Branding & Management: for SMEs, startups, and service
          providers<br /> Doctor & Clinic Branding: helping healthcare
          professionals grow digitally and ethically<br /> Social Media Growth:
          authentic visibility through content, design, and engagement
        </p>
        <button className="bg-[#652a8b] text-[#0D0D0D] font-bold py-2 px-6 rounded-full cursor-pointer">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
