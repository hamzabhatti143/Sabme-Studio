"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/images/personal-study.png",
    title: "Personal Brand Case Study",
    description:
      "The company Sabme Studio enhanced the LinkedIn image of Muhammad Haris Khalil — a Fintech Solutions Architect and Technical Lead located in Lahore. At first, his profile seemed 'just a profile' — ordinary banner, low positioning, and an About section lacking any story. We totally cleaned out the experience and rebuilt it around trust, clarity, and authority. From visuals that were clean, and scalable, with a consistent color philosophy to a keyword-rich headline to a human, story-centric About section. The outcome: a LinkedIn presence that now conveys credibility in seconds, draws higher-quality connections and establishes Haris as a trusted brand in the Fintech & Tech leadership arena.",
  },
  {
    img: "/images/brand-study.png",
    title: "Local Brand Case Study",
    description:
      "Sabme Studio was instrumental for Dr. Azeem, a medical doctor from Sargodha, in creating a trustworthy online persona that turns the local population into actual patients. Rather than random posting, we first delved into the market + competitor research and found out the communication gaps that needed to be filled. We altered his branding voice, gave him a crisp visual identity, made educational videos in a local tone that is easily understandable, and did ads targeting the local people using the Meta Ads Manager. By constantly tracking the data with Meta Insights, we were able to post, design, and time ads in a way that people saw them the most. The organic followers went up, the patient engagement increased, the appointment inquiries became consistent, and his image of being a local specialist who can be trusted became stronger within the first few weeks. This time the doctor’s digital brand was seen to grow not through more posting but through trust, clarity, and consistency.",
  },
];
const Slider = () => {
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
    <div id="CaseStudy" className="w-full relative px-4 md:px-9 lg:px-14 overflow-hidden bg-[#0D0D0D]">
      <h2 className="text-center text-white font-bold text-4xl">Case Studies</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 items-center gap-6 p-6"
        >
          <div className="w-full aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl italic font-semibold mb-3 text-white text-start md:text-justify">
              {slide.title}
            </h2>
            <p className="text-base opacity-80 text-white text-justify">
              {slide.description}
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

export default Slider;
