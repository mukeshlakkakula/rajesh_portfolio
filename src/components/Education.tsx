"use client";

import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-40 bg-[#020205] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                 <div className="flex flex-col md:flex-row justify-between items-start gap-20">
                     <div className="sticky top-40 max-w-sm">
                        <h2 className="text-[10px] tracking-[0.3em] font-bold text-purple-400 uppercase mb-8">05. EDUCATION</h2>
                        <h3 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                            The Academic <br />
                            <span className="text-purple-500">Foundation.</span>
                        </h3>
                        <p className="mt-8 text-white/30 text-lg font-light leading-relaxed">
                            B.Tech in Electrical, Electronics and Communications Engineering from JNTUH Hyderabad (2012-2016).
                        </p>
                    </div>

                    <div className="flex-1 w-full pt-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="p-16 md:p-24 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all duration-700 hover:bg-white/[0.04]"
                        >
                            <div className="flex flex-col gap-10">
                                <div className="text-[12px] tracking-[0.5em] font-black text-purple-500/50 uppercase">DEGREE</div>
                                <h4 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
                                    BACHELOR'S <br /> DEGREE
                                </h4>
                                <p className="text-2xl md:text-3xl text-white/40 leading-relaxed font-light">
                                    Electrical, Electronics and Communications Engineering
                                </p>
                                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pt-12 border-t border-white/5">
                                    <div>
                                        <div className="text-[10px] tracking-[0.3em] font-medium text-white/30 uppercase mb-4">INSTITUTION</div>
                                        <div className="text-xl md:text-2xl font-light text-white italic">JNTUH College of Engineering Hyderabad</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] tracking-[0.3em] font-medium text-white/30 uppercase mb-4">YEAR</div>
                                        <div className="text-xl md:text-2xl font-light text-white italic">2012 - 2016</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
