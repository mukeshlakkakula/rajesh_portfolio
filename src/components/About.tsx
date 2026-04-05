"use client";

import { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
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
            icon: <Zap className="w-6 h-6 text-brand-light" />
        },
        {
            title: "Cybersecurity Analyst",
            desc: "Expertise in Kali Linux & ZAP for identifying critical vulnerabilities.",
            icon: <ShieldCheck className="w-6 h-6 text-brand-light" />
        },
        {
            title: "Performance Engineer",
            desc: "Robust testing with JMeter to ensure secure and efficient software.",
            icon: <Monitor className="w-6 h-6 text-brand-light" />
        }
    ];

    return (
        <section id="about" className="py-24 md:py-24 bg-[#010310] relative overflow-hidden font-futuristic">
            {/* Background Glows */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-dark/5 blur-[120px] rounded-full pointer-events-none" />

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
                            <div className="w-8 h-[1px] bg-brand/50" />
                            <span className="text-sm font-bold tracking-[0.3em] text-brand uppercase">
                                About Rajesh
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Strategic Testing For
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand">
                                {"\n"}Robust Software Solutions
                            </span>
                        </h2>

                        <p className="text-base text-white/60 leading-relaxed max-w-2xl">
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
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/5 border border-brand/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
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
                        className="relative order-1 lg:order-2 max-w-[320px] sm:max-w-[400px] mx-auto w-full lg:ml-auto"
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
                            className="hidden sm:block absolute -bottom-8 -left-8 md:-left-12 w-[180px] md:w-[220px] aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-[#010310] shadow-2xl z-20"
                        >
                            <Image
                                src={secondImg}
                                alt="Rajesh Working"
                                className="object-cover scale-110"
                                fill
                            />
                        </motion.div>

                        {/* Floating Experience Badge - Relocated to bottom-left on mobile */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-4 left-4 sm:left-auto sm:bottom-12 sm:-right-4 w-20 h-20 sm:w-28 md:w-32 sm:h-28 md:h-32 rounded-full bg-brand flex flex-col items-center justify-center text-center p-2 sm:p-4 border-2 sm:border-4 border-[#010310] shadow-[0_0_30px_rgba(35,169,189,0.3)] z-30"
                        >
                            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tighter">8+</span>
                            <span className="text-[7px] sm:text-[9px] md:text-[10px] font-bold text-white/90 leading-tight uppercase tracking-widest mt-0.5">
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5 mt-12"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors tracking-tight">
                                <StatCounter value={stat.value} />
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

const StatCounter = ({ value }: { value: string }) => {
    const num = parseInt(value.replace(/[^0-9]/g, ''));
    const suffix = value.replace(/[0-9]/g, '');
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (inView && nodeRef.current) {
            const controls = animate(0, num, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest: number) => {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(latest).toString() + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [inView, num, suffix]);

    return <span ref={nodeRef}>0{suffix}</span>;
};

export default About;

