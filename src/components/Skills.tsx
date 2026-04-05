"use client";

import { motion } from 'framer-motion';

const allSkills = [
    "Selenium WebDriver", "Appium", "JMeter", "Postman", "Maven", "Test Rigor",
    "Java", "REST APIs", "XPath", "Apache", "CI/CD Pipelines",
    "Burp Suite", "ZAP", "Kali Linux", "Forta Frontline", "Penetration Testing",
    "Azure", "AWS", "GCP", "Kubernetes", "Docker", "Cybersecurity"
];

const Skills = () => {
    return (
        <section id="skills" className="py-12 bg-[#010310] relative overflow-hidden border-t border-white/5">
            <div className="relative flex overflow-hidden py-16">
                <motion.div
                    initial={{ x: "-50%" }}
                    animate={{ x: 0 }}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear"
                    }}
                    className="flex whitespace-nowrap gap-16 px-8 items-center"
                >
                    {/* Triple the array to ensure perfect infinite loop without gaps */}
                    {[...allSkills, ...allSkills, ...allSkills].map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-10"
                        >
                            <span className="text-4xl md:text-8xl font-black tracking-[0.1em] text-white/10 hover:text-brand transition-all uppercase cursor-default">
                                {skill}
                            </span>
                            <span className="w-4 h-4 bg-brand rounded-full blur-[2px] opacity-30 shadow-[0_0_20px_rgba(35,169,189,0.5)]" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Edge Fading for Smooth Transition */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#010310] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#010310] to-transparent z-10 pointer-events-none" />
        </section>
    );
};

export default Skills;
