"use client";

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Milestone, Flag, Compass } from 'lucide-react';

const experiences = [
    {
        role: "Test Automation Specialist",
        company: "Tecra Systems",
        period: "2017 - 2020",
        desc: "Built numerous automation projects and frameworks, specializing in script development and testing life-cycles.",
        icon: <Briefcase className="w-6 h-6" />
    },
    {
        role: "Test Automation Consultant",
        company: "Kaara (For Microsoft)",
        period: "2020",
        desc: "Contracted for Microsoft/AT&T as a Senior Test Automation Specialist, bringing robust QA processes to large-scale products.",
        icon: <Flag className="w-6 h-6" />
    },
    {
        role: "QA Automation Engineer",
        company: "Pramati Technologies",
        period: "2020 - 2021",
        desc: "Leading automation quality assurance, focused on building scalable frameworks for enterprise-level clients.",
        icon: <Milestone className="w-6 h-6" />
    },
    {
        role: "Senior Test Automation Engineer",
        company: "Accenture",
        period: "2021 - 2025",
        desc: "Currently working as Penetration Tester for a top-tier client, performing extensive Web, Mobile, and Network penetration testing.",
        icon: <Compass className="w-6 h-6" />
    },
    {
        role: "Senior SDET",
        company: "Experian",
        period: "2025 - PRESENT",
        desc: "Contribute to Experian’s commitment to innovation, quality, and excellence. Enhanced testing practices and drove impactful solutions.",
        icon: <Briefcase className="w-6 h-6" />
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section
            id="experience"
            ref={containerRef}
            className="py-40 bg-[#010310] relative overflow-hidden font-futuristic"
        >
            <div className="container mx-auto px-6 max-w-6xl relative">
                {/* Header Section */}
                <div className="text-center mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] tracking-[0.4em] font-black text-brand uppercase mb-6"
                    >
                        JOURNEY & CAREER
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white leading-tight uppercase tracking-tight"
                    >
                        THE <span className="text-glow text-brand">ROADMAP</span>
                    </motion.h3>
                </div>

                {/* Vertical Path Line for Mobile & Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[400px] bottom-0 w-[4px] bg-white/5 hidden md:block" />

                {/* Animated Path Filler */}
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 top-[400px] bottom-0 w-[4px] bg-brand shadow-[0_0_20px_rgba(35,169,189,0.5)] hidden md:block z-10"
                />

                <div className="space-y-32 relative">
                    {/* Start Flag */}
                    <div className="flex justify-center mb-16">
                        <div className="p-4 rounded-full bg-brand-dark/20 border-2 border-brand/40 text-brand animate-pulse">
                            <span className="text-xs font-black tracking-widest px-4">START</span>
                        </div>
                    </div>

                    {experiences.map((exp, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className="relative">
                                {/* Desktop Layout */}
                                <div className={`hidden md:flex items-center justify-center gap-20 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7 }}
                                        className={`w-1/2 flex ${isEven ? 'justify-end text-right' : 'justify-start text-left'}`}
                                    >
                                        <div className="max-w-md group">
                                            <div className="text-[12px] tracking-[0.3em] font-black text-brand mb-3 opacity-60">
                                                {exp.period}
                                            </div>
                                            <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors leading-tight">
                                                {exp.role}
                                            </h4>
                                            <div className="text-xs tracking-[0.2em] font-semibold text-white/40 uppercase mb-6">
                                                {exp.company}
                                            </div>
                                            <p className="text-lg font-light text-white/30 leading-relaxed group-hover:text-white/60 transition-colors">
                                                {exp.desc}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Central Node Circle */}
                                    <div className="relative z-20">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            className="w-16 h-16 rounded-full bg-brand flex items-center justify-center text-[#010310] shadow-[0_0_40px_rgba(35,169,189,0.4)] border-4 border-[#010310]"
                                        >
                                            {exp.icon}
                                        </motion.div>
                                    </div>

                                    {/* Spacer for layout */}
                                    <div className="w-1/2" />
                                </div>

                                {/* Mobile Layout */}
                                <div className="md:hidden flex flex-col gap-8 relative pl-12">
                                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/5" />

                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-[#010310] text-[10px] font-bold z-10 shadow-lg">
                                        {idx + 1}
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-4"
                                    >
                                        <div className="text-[10px] tracking-[0.3em] font-black text-brand uppercase">{exp.period}</div>
                                        <h4 className="text-2xl font-bold text-white leading-tight">{exp.role}</h4>
                                        <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase italic">{exp.company}</div>
                                        <p className="text-base font-light text-white/40 leading-relaxed">{exp.desc}</p>
                                    </motion.div>
                                </div>
                            </div>
                        );
                    })}

                    {/* End Flag */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center pt-24"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-1 h-20 bg-gradient-to-b from-brand to-transparent" />
                            <div className="px-8 py-3 rounded-full bg-brand text-[#010310] font-black tracking-widest text-sm shadow-[0_0_30px_rgba(35,169,189,0.6)]">
                                GOAL
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Aesthetic Layers */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none -mr-48" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark/5 blur-[150px] rounded-full pointer-events-none -ml-48" />
        </section>
    );
};

export default Experience;
