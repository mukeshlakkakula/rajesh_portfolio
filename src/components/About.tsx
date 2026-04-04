"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const services = [
        {
            title: "Advanced Test Automation Frameworks",
            desc: "Expertise in building scalable Selenium & Appium frameworks from scratch. Leveraging Java and Maven to ensure robust E2E testing for web and mobile platforms."
        },
        {
            title: "Cybersecurity & Pentesting Solutions",
            desc: "Strategic security audits using Burp Suite, ZAP, and Kali Linux. Identifying vulnerabilities and ensuring systems meet rigorous security standards."
        }
    ];

    return (
        <section id="about" className="py-40 bg-[#020205] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    
                    {/* Left Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-2 text-[11px] tracking-[0.4em] font-bold text-purple-500 uppercase">
                            <span>//</span> EXPERTISE
                        </div>
                        <h2 className="text-5xl md:text-6xl font-semibold text-white leading-[1.2] max-w-xl">
                            Strategic Testing <br /> That Drives Solutions
                        </h2>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-[11px] tracking-[0.2em] font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all uppercase"
                        >
                            <span className="w-2 h-2 bg-purple-500 rounded-full" />
                            VIEW EXPERIENCE DETAILS
                        </motion.button>
                    </motion.div>

                    {/* Right Side - Cards */}
                    <div className="space-y-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="p-12 rounded-[2.5rem] bg-[#0A0A0F] border border-white/[0.03] hover:border-purple-500/20 transition-all group"
                            >
                                <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-400 transition-colors leading-[1.3]">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-white/40 leading-relaxed font-light">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
