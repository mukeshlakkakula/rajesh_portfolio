"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Zap, Monitor, CheckCircle2 } from 'lucide-react';
import mainImg from '@/assets/rajesh_full_white.png';
import secondImg from '@/assets/Rajesh_working_laptop - Copy.png';

const About = () => {
    const stats = [
        { label: "Years Of Experience", value: "8+" },
        { label: "Successful Projects", value: "50+" },
        { label: "Security Audits", value: "100%" },
        { label: "Positive Feedback", value: "99+" }
    ];

    const highlights = [
        {
            title: "Expert QA Automation",
            desc: "Scalable Selenium & Appium frameworks for web and mobile platforms.",
            icon: <Zap className="w-6 h-6 text-purple-400" />
        },
        {
            title: "Cybersecurity Analyst",
            desc: "Expertise in Kali Linux & ZAP for identifying critical vulnerabilities.",
            icon: <ShieldCheck className="w-6 h-6 text-purple-400" />
        },
        {
            title: "Performance Engineer",
            desc: "Robust testing with JMeter to ensure secure and efficient software.",
            icon: <Monitor className="w-6 h-6 text-purple-400" />
        }
    ];

    return (
        <section id="about" className="py-24 md:py-32 bg-[#020205] relative overflow-hidden font-futuristic">
            {/* Background Glows */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-900/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-purple-500/50" />
                            <span className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase">
                                About Rajesh
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Strategic Testing For
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                                {"\n"}Robust Software Solutions
                            </span>
                        </h2>

                        <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                            Hi, I’m Rajesh — an experienced QA and software testing professional with 8 years of expertise in automation, cybersecurity, and performance testing. Proficient in Java, Selenium, Appium, JMeter, REST APIs, and cloud platforms like AWS & Azure, I help organizations build secure, efficient, and reliable software. My toolkit also includes Kali Linux and ZAP for robust security testing.
                        </p>

                        <div className="space-y-6 pt-4">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/5 border border-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2 max-w-[450px] mx-auto lg:max-w-none w-full"
                    >
                        {/* Main Background Image */}
                        <div className="relative w-full aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-white/5">
                            <Image
                                src={mainImg}
                                alt="Rajesh Portrait"
                                className="object-cover"
                                fill
                                priority
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Overlapping Foreground Image - Hidden on Mobile */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="hidden sm:block absolute -bottom-10 -left-10 md:-left-20 w-[240px] md:w-[280px] aspect-square rounded-[2rem] overflow-hidden border-8 border-[#020205] shadow-2xl z-20"
                        >
                            <Image
                                src={secondImg}
                                alt="Rajesh Working"
                                className="object-cover scale-110"
                                fill
                            />
                        </motion.div>

                        {/* Floating Experience Badge - Relocated and Shrunk on Mobile */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-4 right-4 sm:top-auto sm:bottom-20 sm:-right-4 w-20 h-20 sm:w-32 md:w-40 sm:h-32 md:h-40 rounded-full bg-purple-600 flex flex-col items-center justify-center text-center p-2 sm:p-4 border-2 sm:border-4 border-[#020205] shadow-[0_0_30px_rgba(168,85,247,0.3)] z-30"
                        >
                            <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter">8+</span>
                            <span className="text-[7px] sm:text-[10px] md:text-xs font-bold text-white/90 leading-tight uppercase tracking-widest mt-0.5">
                                Years Of<br />Experience
                            </span>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Stats Footer Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-24 border-t border-white/5 mt-24"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm font-medium text-white/40 uppercase tracking-[0.2em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;

