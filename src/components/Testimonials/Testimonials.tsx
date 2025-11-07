"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/images/haris.jpeg",
    name: "Muhammad Haris Khalil",
    role: "Fintech Solution",
    text: "I recently got my LinkedIn profile revamped and optimized by SABME Studio, and I’m genuinely impressed with the results. They understood my personal brand, highlighted my strengths, and gave my profile a clean, professional, and high-converting look. The attention to detail, design aesthetics, and strategic copy were on point. Highly recommend their services if you’re looking to upgrade your LinkedIn presence!",
  },
  {
    img: "/images/kitchen.jpeg",
    name: "United Kitchen & Interior",
    role: "Interior Design",
    text: "Working with SABMÉ Studio was a great experience! They managed my kitchen interior posts, handled my social media, and also ran ads. I really liked their designs — very clean and creative. Communication was smooth, and they always understood what I wanted. Highly recommend them!",
  },
  {
    img: "/images/drazeem.jpeg",
    name: "Dr. Azeem",
    role: "Doctor",
    text: "Their team didn’t just manage my pages — they built a complete brand around my medical practice. Within a few weeks, my page started reaching the right audience, and I began receiving regular patient inquiries through online campaigns. The content looks professional, the communication is clear, and my patients now recognize and trust my name online. I’m extremely satisfied with the results and truly appreciate their dedication and strategy.",
  },
  {
    img: "/images/voiceofwomen.jpeg",
    name: "Mahnoor Jamil",
    role: "CEO Voice of Women",
    text: "Working with SABME Studio has been an incredible experience. Their team truly understood the essence of my brand and helped me translate my message into meaningful, impactful visuals and content. As a counsellor and life coach, authenticity and emotional connection matter deeply — and SABME Studio captured that perfectly.",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      next();
    }, 4000);

    return () => clearInterval(t);
  }, []);

  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  const slide = slides[i];

  return (
    <div id="Testimonials" className="w-full relative px-4 md:px-9 lg:px-14 overflow-hidden bg-[#0D0D0D]">
      <h2 className="text-center text-white font-bold text-4xl">Testimonials</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 items-center gap-6 p-6 mb-6"
        >
          <div className="w-full aspect-square relative overflow-hidden rounded-lg order-2">
            <Image
              src={slide.img}
              alt={slide.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="order-1">
            <h2 className="text-2xl md:text-4xl italic font-semibold mb-3 text-white text-start md:text-justify">
              {slide.name}
            </h2>
            <p className="text-base opacity-80 text-white text-justify">
              {slide.text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
        onClick={prev}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
        onClick={next}
      >
        <ChevronRight size={20} />
      </button>

      {/* dots */}
      <div className="flex gap-2 absolute bottom-4 left-1/2 -translate-x-1/2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-3 w-3 rounded-full ${
              idx === i ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
