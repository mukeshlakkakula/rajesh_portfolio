"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Monitor, Globe, Cpu, Database, Cloud, Lock } from 'lucide-react';

const skillOrbits = [
    {
        name: "CORE",
        radius: "min(35vw, 180px)",
        speed: 25,
        skills: [
            { name: "Selenium", icon: <Zap className="w-4 h-4" />, size: "text-sm md:text-xl" },
            { name: "Java", icon: <Cpu className="w-4 h-4" />, size: "text-sm md:text-xl" },
            { name: "Appium", icon: <Monitor className="w-4 h-4" />, size: "text-sm md:text-xl" },
            { name: "JMeter", icon: <Database className="w-4 h-4" />, size: "text-sm md:text-xl" }
        ]
    },
    {
        name: "TECHNICAL",
        radius: "min(55vw, 300px)",
        speed: -40,
        skills: [
            { name: "REST APIs", icon: <Globe className="w-3 h-3" />, size: "text-xs md:text-lg" },
            { name: "CI/CD", icon: <Zap className="w-3 h-3" />, size: "text-xs md:text-lg" },
            { name: "Azure", icon: <Cloud className="w-3 h-3" />, size: "text-xs md:text-lg" },
            { name: "AWS", icon: <Cloud className="w-3 h-3" />, size: "text-xs md:text-lg" },
            { name: "Postman", icon: <Database className="w-3 h-3" />, size: "text-xs md:text-lg" }
        ]
    },
    {
        name: "TOOLS",
        radius: "min(75vw, 420px)",
        speed: 55,
        skills: [
            { name: "Kali", icon: <Lock className="w-2.5 h-2.5" />, size: "text-[9px] md:text-sm" },
            { name: "Docker", icon: <Cpu className="w-2.5 h-2.5" />, size: "text-[9px] md:text-sm" },
            { name: "ZAP", icon: <ShieldCheck className="w-2.5 h-2.5" />, size: "text-[9px] md:text-sm" },
            { name: "K8s", icon: <Cloud className="w-2.5 h-2.5" />, size: "text-[9px] md:text-sm" },
            { name: "Sec", icon: <ShieldCheck className="w-2.5 h-2.5" />, size: "text-[9px] md:text-sm" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-40 bg-[#010310] relative overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[950px] font-futuristic">

            {/* Background Aesthetic */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-brand-dark/20 to-transparent blur-[120px]" />
            </div>

            {/* Central Sun / expertise Hub */}
            <div className="relative z-10 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-brand/10 border-2 border-brand/20 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(35,169,189,0.3)] backdrop-blur-md"
                >
                    <span className="text-[8px] tracking-[0.2em] font-black text-brand uppercase">My</span>
                    <span className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">Skills</span>
                </motion.div>

                {/* Orbits */}
                {skillOrbits.map((orbit, oIdx) => (
                    <div
                        key={oIdx}
                        className="absolute flex items-center justify-center pointer-events-none"
                        style={{ width: `calc(2 * ${orbit.radius})`, height: `calc(2 * ${orbit.radius})` }}
                    >
                        {/* Orbital Path Line */}
                        <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />

                        {/* Rotating Container */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: Math.abs(orbit.speed), ease: "linear" }}
                            className={`w-full h-full relative pointer-events-none`}
                            style={{ 
                                animationDirection: orbit.speed > 0 ? "normal" : "reverse" 
                            }}
                        >
                            {orbit.skills.map((skill, sIdx) => {
                                const angle = (sIdx / orbit.skills.length) * 360;
                                return (
                                    <div
                                        key={sIdx}
                                        className="absolute top-1/2 left-1/2"
                                        style={{
                                            transform: `rotate(${angle}deg) translate(${orbit.radius}) rotate(-${angle}deg)`
                                        }}
                                    >
                                        <motion.div
                                            animate={{ rotate: orbit.speed > 0 ? -360 : 360 }}
                                            transition={{ repeat: Infinity, duration: Math.abs(orbit.speed), ease: "linear" }}
                                            className="group relative -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
                                        >
                                            {/* Skill Icon */}
                                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand/10 transition-all duration-500 shadow-xl backdrop-blur-sm">
                                                <div className="text-white/70 group-hover:text-brand transition-colors">
                                                    {skill.icon}
                                                </div>
                                            </div>

                                            {/* Skill Label */}
                                            <div className={`${skill.size} font-bold text-white/60 group-hover:text-white transition-all duration-500 whitespace-nowrap tracking-tighter uppercase flex flex-col items-center`}>
                                                {skill.name}
                                                <div className="w-0 h-[1px] bg-brand transition-all duration-500 group-hover:w-full mt-1" />
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Orbital Dust / Particle aesthetic */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.5, 1],
                            x: Math.random() * 20 - 10,
                            y: Math.random() * 20 - 10
                        }}
                        transition={{ repeat: Infinity, duration: 3 + Math.random() * 3 }}
                        className="absolute w-1 h-1 bg-brand-light/30 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;

