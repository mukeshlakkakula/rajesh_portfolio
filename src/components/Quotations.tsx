"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import quoteImg from "@/assets/quote_image.png";

const Quotations = () => {
  return (
    <section className="py-12 bg-[#010310] relative overflow-hidden font-futuristic">
      {/* Background Texture/Accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left Side: Illustration / Quote Box */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
            {/* Dot Pattern Decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 hidden md:block">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-brand rounded-full" />
                ))}
              </div>
            </div>

            {/* Geometric L-Border */}
            <div className="absolute -top-8 -left-8 w-40 h-40 border-t-4 border-l-4 border-brand/30" />

            <div className="relative z-10">
              {/* Quote Box */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-[#050B1B] p-10 md:p-14 border border-white/10 shadow-2xl relative max-w-[450px]"
              >
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-brand fill-brand/20 opacity-50" />

                <p className="text-xl md:text-3xl font-medium text-white leading-relaxed">
                  <span className="text-brand font-black">Success</span> is the
                  result of good preparation, hard work, and learning from
                  failure.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-brand/40" />
                  <span className="text-xs tracking-[0.3em] font-black text-white/40 uppercase">
                    COLIN POWELL
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] max-w-[450px] mx-auto group">
              {/* Subtle Frame */}
              <div className="absolute inset-0 border border-brand/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />

              <div className="relative h-full w-full overflow-hidden rounded-sm border border-white/5">
                <Image
                  src={quoteImg}
                  alt="Professional Portrait"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010310]/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quotations;
