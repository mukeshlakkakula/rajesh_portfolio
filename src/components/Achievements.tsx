"use client";

import { motion } from 'framer-motion';

const achievements = [
    {
        title: "State Badminton League",
        desc: "Representative of Telangana in the State Badminton League Championship.",
        icon: "TELANGANA"
    },
    {
        title: "TBA Selection",
        desc: "Multiple Medal wins led to selection in the Telangana Badminton Association.",
        icon: "CHAMPION"
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-40 bg-[#010310] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-[10px] tracking-[0.3em] font-bold text-brand-light uppercase mb-8">04. BEYOND CODE</h2>
                        <h3 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
                            Winning <br />
                            <span className="text-brand">On The Court.</span>
                        </h3>
                        <p className="mt-8 text-white/30 text-lg font-light leading-relaxed max-w-xl">
                            A sportsman's mindset applied to professional excellence. Representing Telangana at the state level taught me resilience and precision.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achievements.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-brand/20 transition-all duration-500 hover:bg-white/[0.04] text-center"
                            >
                                <div className="text-[10px] tracking-[0.4em] font-black text-white/10 uppercase mb-8 group-hover:text-brand transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-semibold text-white mb-6 group-hover:text-brand-light transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-lg text-white/30 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="mt-12 h-[1px] w-0 bg-brand mx-auto group-hover:w-full transition-all duration-700 opacity-30" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
