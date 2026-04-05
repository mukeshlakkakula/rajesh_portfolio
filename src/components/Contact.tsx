"use client";

import { motion } from 'framer-motion';
import { Mail, Send, ArrowRight, Link } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-12 bg-[#010310] relative overflow-hidden font-futuristic">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-20">
                <div className="bg-gradient-to-br from-white/10 to-transparent p-1 md:p-px rounded-[2.5rem]">
                    <div className="bg-[#050B1B]/70 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-20 flex flex-col lg:flex-row gap-20 items-center border border-white/5 shadow-2xl">

                        {/* Left Side: Call to Action */}
                        <div className="w-full lg:w-1/2 text-left space-y-8 md:space-y-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                className="w-16 h-16 md:w-24 md:h-24 bg-brand/10 border border-brand/20 rounded-3xl flex items-center justify-center text-brand shadow-[0_0_40px_rgba(35,169,189,0.3)] backdrop-blur-md"
                            >
                                <Send size={32} className="md:w-11 md:h-11 group-hover:scale-110 transition-transform" />
                            </motion.div>

                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight tracking-tight">
                                    Let's build <br /><span className="text-2xl md:text-6xl text-glow text-brand">Something Great.</span>
                                </h3>
                                <p className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-lg">
                                    Drop a message and I'll get back to you within 24 hours. The future of your project starts with a single transmission.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 pt-2 md:pt-6">
                                <a href="mailto:contact@rajeshbathula.com" className="flex items-center gap-4 text-white/70 hover:text-brand transition-colors text-[9px] md:text-sm font-black tracking-widest uppercase">
                                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-brand" /> EMAIL ME DIRECTLY
                                </a>
                                <a href="https://linkedin.com/in/rajeshbathula" target="_blank" className="flex items-center gap-4 text-white/70 hover:text-brand transition-colors text-[9px] md:text-sm font-black tracking-widest uppercase">
                                    <Link className="w-4 h-4 md:w-5 md:h-5 text-brand" /> CONNECT ON LINKEDIN
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-y-5"
                            >
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] tracking-[0.3em] font-black text-white/40 uppercase ml-2">IDENTITY</label>
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full bg-white/[0.04] border border-white/5 rounded-2xl md:rounded-3xl px-5 py-4 md:px-8 md:py-6 text-white focus:bg-white/[0.08] focus:border-brand/40 focus:ring-1 focus:ring-brand/10 transition-all outline-none placeholder:text-white/10 text-sm"
                                    />
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] tracking-[0.3em] font-black text-white/40 uppercase ml-2">ENCRYPTION EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-white/[0.04] border border-white/5 rounded-2xl md:rounded-3xl px-5 py-4 md:px-8 md:py-6 text-white focus:bg-white/[0.08] focus:border-brand/40 focus:ring-1 focus:ring-brand/10 transition-all outline-none placeholder:text-white/10 text-sm"
                                    />
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <label className="text-[9px] md:text-[10px] tracking-[0.3em] font-black text-white/40 uppercase ml-2">DATA PACKET MESSAGE</label>
                                    <textarea
                                        rows={4}
                                        placeholder="How can I assist you today?"
                                        className="w-full bg-white/[0.04] border border-white/5 rounded-2xl md:rounded-3xl px-5 py-4 md:px-8 md:py-6 text-white focus:bg-white/[0.08] focus:border-brand/40 focus:ring-1 focus:ring-brand/10 transition-all outline-none resize-none placeholder:text-white/10 text-sm"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full group mt-2 md:mt-4 h-14 md:h-20 bg-brand rounded-xl md:rounded-3xl text-[#010310] font-black tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs flex items-center justify-center gap-4 md:gap-6 shadow-[0_10px_30px_rgba(35,169,189,0.3)] hover:bg-brand-light transition-all"
                                >
                                    <span>TRANSMIT MESSAGE</span>
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-3 transition-transform">
                                        <ArrowRight size={16} className="md:w-5 md:h-5" />
                                    </div>
                                </motion.button>
                            </motion.div>
                        </div>

                    </div>
                </div>

                {/* Final Footer Credits */}
                <div className="mt-24 mb-24 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase">
                    <div>© 2026 RAJESH BATHULA • ESTABLISHED SINCE 2017</div>
                    <div className="flex gap-12">
                        <a href="https://linkedin.com/in/rajeshbathula" target="_blank" className="hover:text-brand transition-colors">LINKEDIN</a>
                        <a href="#home" className="hover:text-brand transition-colors">BACK TO TOP</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
