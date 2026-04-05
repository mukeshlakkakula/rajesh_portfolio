"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010310] pt-34 pb-24"
        >
            {/* Top Spotlight Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Portrait with Glow */}
            <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center -mt-19 md:-mt-34">
                <motion.div
                    style={{ y: yImg, scale, opacity }}
                    className="relative w-[340px] md:w-[430px] aspect-[4/5] z-0"
                >
                    <Image
                        src="/rajesh_profile.png"
                        alt="Rajesh Portrait"
                        fill
                        className="object-cover opacity-100 transition-opacity duration-700"
                        priority
                    />
                    {/* Shadow masking to blend bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010310] via-transparent to-transparent opacity-80" />
                </motion.div>

                {/* Name Overlay matching image style */}
                <motion.div

                    className="relative z-10 -mt-20 md:-mt-20 text-center px-4"
                >
                    <div className="relative inline-block">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.1em] text-white uppercase opacity-90 text-glow">
                            RAJESH BATHULA
                        </h1>
                    </div>
                </motion.div>

                {/* Subtitle/Tagline */}
                {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative z-10 mt-12 md:mt-12 text-[13px] md:text-lg tracking-[0.15em] font-light text-white/50 text-center max-w-2xl px-6"
                >
                    Helping Organizations Build Robust, Secure, and Efficient Software Solutions
                </motion.p> */}
            </div>

            {/* Stars background effect */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>
        </section>
    );
};

export default Hero;
