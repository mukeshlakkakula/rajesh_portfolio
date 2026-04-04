"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, Link, Send, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-60 bg-[#020205] relative flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-[10px] tracking-[0.4em] font-bold text-purple-500 uppercase mb-12">06. LET'S TALK</h2>
                    <h3 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tight">
                        WANT TO <br /> <span className="text-glow text-purple-600">CONNECT?</span>
                    </h3>
                    <p className="mt-16 text-xl md:text-2xl font-light text-white/30 leading-relaxed max-w-2xl mx-auto">
                        Always open to new projects, collaborations, or just a friendly chat. Ready to transform complex ideas into secure reality.
                    </p>

                    <div className="mt-24 space-y-8 max-w-sm mx-auto">
                        <motion.a 
                            href="mailto:contact@rajeshbathula.com"
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="flex items-center gap-8 group cursor-pointer text-left"
                        >
                            <div className="p-4 bg-white/5 rounded-[40px] text-purple-600 border border-white/5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] tracking-[0.3em] font-black text-white/20 uppercase">EMAIL</div>
                                <div className="text-xl md:text-2xl font-light text-white group-hover:text-purple-400 transition-colors">contact@rajeshbathula.com</div>
                            </div>
                        </motion.a>
                        <motion.a 
                            href="https://linkedin.com/in/rajeshbathula" target="_blank"
                            whileHover={{ scale: 1.05, x: 5 }}
                            className="flex items-center gap-8 group cursor-pointer text-left"
                        >
                            <div className="p-4 bg-white/5 rounded-[40px] text-purple-600 border border-white/5 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                                <Link size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] tracking-[0.3em] font-black text-white/20 uppercase">LINKEDIN</div>
                                <div className="text-xl md:text-2xl font-light text-white group-hover:text-purple-400 transition-colors">/in/rajeshbathula</div>
                            </div>
                        </motion.a>
                    </div>

                    <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 group-hover:opacity-100 transition-opacity">
                         <div className="text-[10px] tracking-[0.3em] font-light text-white uppercase italic">© 2026 RAJESH BATHULA</div>
                         <div className="flex gap-12">
                            <a href="https://rajeshbathula.com" className="text-[10px] tracking-[0.3em] font-medium text-white hover:text-purple-500 transition-colors uppercase">WEBSITE</a>
                            <a href="#home" className="text-[10px] tracking-[0.3em] font-medium text-white hover:text-purple-500 transition-colors uppercase">BACK TO TOP</a>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
