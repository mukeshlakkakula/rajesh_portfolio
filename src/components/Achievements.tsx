"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImg from "@/assets/achievements_bg.jpg";

const achievements = [
  {
    title: "State Badminton League",
    desc: "Representative of Telangana in the State Badminton League Championship. Forge a resilient, high-performance mindset.",
  },
  {
    title: "TBA Selection",
    desc: "Selected for the Telangana Badminton Association after a series of consistent medal wins in major tournaments.",
  },
  {
    title: "Rising Star Award",
    desc: "Recognized for exceptional performance and rapid growth in automation delivery for global enterprise clients.",
  },
  {
    title: "Quarter Finalist",
    desc: "Consistent performance in the State Ranking Tournaments, reaching multiple quarter-final stages.",
  },
];

const Achievements = () => {
  const [activeId1, setActiveId1] = useState<number | null>(null);
  const [activeId2, setActiveId2] = useState<number | null>(null);

  // Auto-resume after 5 seconds
  useEffect(() => {
    if (activeId1 !== null) {
      const timer = setTimeout(() => setActiveId1(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [activeId1]);

  useEffect(() => {
    if (activeId2 !== null) {
      const timer = setTimeout(() => setActiveId2(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [activeId2]);

  // Split achievements into two rows with infinite duplication
  const row1 = [...achievements, ...achievements, ...achievements];
  const row2 = [
    ...achievements.slice().reverse(),
    ...achievements.slice().reverse(),
    ...achievements.slice().reverse(),
  ];

  return (
    <section
      id="achievements"
      className="py-12 md:py-12 bg-[#010310] relative overflow-hidden font-futuristic"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none opacity-30" />

      <div className="relative">
        <div className="container mx-auto px-6 max-w-6xl mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.4em] font-black text-brand uppercase mb-6"
          >
            04. BEYOND THE CODE
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight"
          >
            WINS & <span className="text-glow text-brand">MILESTONES</span>
          </motion.h3>
        </div>

        {/* Infinite Marquee Rows */}
        <div className="flex flex-col gap-10">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden">
            <div
              className="flex gap-4 whitespace-nowrap animate-marquee-left hover-pause"
              style={{
                animationPlayState: activeId1 !== null ? "paused" : "running",
              }}
            >
              {row1.map((item, idx) => (
                <AchievementCard
                  key={`row1-${idx}`}
                  item={item}
                  isActive={activeId1 === idx}
                  onClick={() => {
                    setActiveId1(activeId1 === idx ? null : idx);
                    setActiveId2(null);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden">
            <div
              className="flex gap-4 whitespace-nowrap animate-marquee-right hover-pause"
              style={{
                animationPlayState: activeId2 !== null ? "paused" : "running",
              }}
            >
              {row2.map((item, idx) => (
                <AchievementCard
                  key={`row2-${idx}`}
                  item={item}
                  isActive={activeId2 === idx}
                  onClick={() => {
                    setActiveId2(activeId2 === idx ? null : idx);
                    setActiveId1(null);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-[#010310] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-60 bg-gradient-to-l from-[#010310] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

const AchievementCard = ({
  item,
  isActive,
  onClick,
}: {
  item: any;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    className={`flex-shrink-0 w-[200px] md:w-[450px] h-[170px] md:h-[300px] rounded-[1rem] overflow-hidden border border-white/5 backdrop-blur-xl transition-all duration-500 group relative cursor-pointer ${isActive ? "border-brand/60 bg-white/[0.12] ring-2 ring-brand/20" : "hover:border-brand/30"}`}
  >
    {/* Background Image */}
    <Image
      src={bgImg}
      alt={item.title}
      fill
      className={`object-cover transition-all duration-700 ${isActive ? "opacity-100 scale-110" : "opacity-60 group-hover:opacity-100 group-hover:scale-110"}`}
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

    <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-left">
      <div className="space-y-2 md:space-y-4">
        <h4
          className={`text-lg md:text-3xl font-black text-white transition-colors uppercase tracking-tight leading-tight ${isActive ? "text-brand-light" : "group-hover:text-brand-light"}`}
        >
          {item.title}
        </h4>

        {/* Description - visible on hover OR if active (clicked) */}
        <div
          className={`${isActive ? "h-auto opacity-100 mt-2" : "h-0 group-hover:h-auto opacity-0 group-hover:opacity-100"} overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <p className="text-[10px] md:text-base font-medium text-white/80 leading-relaxed whitespace-normal">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Achievements;
