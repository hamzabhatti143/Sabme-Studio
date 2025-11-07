"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    name: "Muhammad Haris Khalil",
    role: "Fintech Solution",
    text: "I recently got my LinkedIn profile revamped and optimized by SABME Studio, and I’m genuinely impressed with the results. They understood my personal brand, highlighted my strengths, and gave my profile a clean, professional, and high-converting look. The attention to detail, design aesthetics, and strategic copy were on point. Highly recommend their services if you’re looking to upgrade your LinkedIn presence!",
  },
  {
    name: "United Kitchen & Interior",
    role: "Interior Design",
    text: "Working with SABMÉ Studio was a great experience! They managed my kitchen interior posts, handled my social media, and also ran ads. I really liked their designs — very clean and creative. Communication was smooth, and they always understood what I wanted. Highly recommend them!",
  },
  {
    name: "Dr. Azeem",
    role: "Doctor",
    text: "Their team didn’t just manage my pages — they built a complete brand around my medical practice. Within a few weeks, my page started reaching the right audience, and I began receiving regular patient inquiries through online campaigns. The content looks professional, the communication is clear, and my patients now recognize and trust my name online. I’m extremely satisfied with the results and truly appreciate their dedication and strategy.",
  },
  {
    name: "Mahnoor Jamil",
    role: "CEO Voice of Women",
    text: "Working with SABME Studio has been an incredible experience. Their team truly understood the essence of my brand and helped me translate my message into meaningful, impactful visuals and content. As a counsellor and life coach, authenticity and emotional connection matter deeply — and SABME Studio captured that perfectly.",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const [slideWidth, setSlideWidth] = useState(100);

  // responsive width fix
  useEffect(() => {
    const calc = () => {
      if (window.innerWidth >= 1024) return setSlideWidth(33.33);
      if (window.innerWidth >= 640) return setSlideWidth(50);
      return setSlideWidth(100);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const next = () => setI((p) => (p + 1) % data.length);
  const prev = () => setI((p) => (p - 1 + data.length) % data.length);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden py-10 bg-[#131313] px-4 md:px-9 lg:px-14"
      id="Testimonials"
    >
      <h2 className="text-white font-bold text-4xl pb-6">Testimonials</h2>

      {/* cards wrapper */}
      <div
        className="flex gap-5 transition-all duration-500"
        style={{ transform: `translateX(-${i * slideWidth}%)` }}
      >
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#0D0D0D] p-6 rounded-2xl w-[100%] sm:w-[50%] lg:w-[33.33%] shrink-0"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-4">
              <p className="font-medium text-white">{item.name}</p>
              <p className="text-xs opacity-70 text-white">{item.role}</p>
            </div>

            <p className="opacity-80 text-sm text-white">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronRight size={20} />
      </button>

      {/* dots */}
      <div className="flex gap-2 justify-center mt-6">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`h-1.5 w-6 rounded-full transition ${
              i === idx ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
