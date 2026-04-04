"use client";

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Senior SDET",
        company: "Experian",
        period: "2025 - PRESENT",
        desc: "Contribute to Experian’s commitment to innovation, quality, and excellence. Enhanced testing practices and drove impactful solutions for a product-based organization.",
    },
    {
        role: "Senior Test Automation Engineer",
        company: "Accenture",
        period: "2021 - 2025",
        desc: "Currently working as Penetration Tester for one of the top client and Involving into different platform app's like Web, Mobile based along with the Network penetration testing using commercial and open source tools.",
    },
    {
        role: "QA Automation Engineer",
        company: "Pramati Technologies",
        period: "2020 - 2021",
        desc: "Quality Assurance Automation Engineer Lead developing scalable frameworks for top tier clients.",
    },
    {
        role: "Test Automation Consultant",
        company: "Kaara (Contract for Microsoft)",
        period: "2020 - 2020",
        desc: "I have worked for the Microsoft as a Contract and got opportunity to work for AT & T Client as Senior Test Automation Specialist.",
    },
    {
        role: "Test Automation Specialist",
        company: "Tecra Systems",
        period: "2017 - 2020",
        desc: "Working as Test Automation specialist, great experience with many automation projects, creating frameworks, developing scripts.",
    }
];

const Experience = () => {
    return (
        <section 
            id="experience" 
            className="py-40 bg-[#020104] relative flex items-center justify-center overflow-hidden"
        >
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20">
                     <div className="sticky top-40 max-w-sm">
                        <h2 className="text-[10px] tracking-[0.3em] font-bold text-purple-400 uppercase mb-8">03. JOURNEY</h2>
                        <h3 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                            The Evolution of <br />
                            <span className="text-purple-500">Expertise.</span>
                        </h3>
                        <p className="mt-8 text-white/30 text-lg font-light leading-relaxed">
                            Crafting high-quality software experiences for global industry leaders over the last 8+ years.
                        </p>
                    </div>

                    <div className="flex flex-col gap-32 flex-1 pt-12">
                        {experiences.map((exp, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col md:flex-row gap-12"
                            >
                                <div className="text-[12px] tracking-[0.4em] font-bold text-purple-500 uppercase flex-shrink-0 w-40 text-glow">
                                    {exp.period}
                                </div>
                                <div className="flex flex-col gap-6">
                                    <h4 className="text-4xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                                        {exp.role.toUpperCase()}
                                    </h4>
                                    <div className="text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase group-hover:text-white transition-colors">
                                        {exp.company}
                                    </div>
                                    <p className="text-xl md:text-2xl font-light text-white/40 group-hover:text-white/60 transition-colors leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
