"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
            });
            setCurrentTime(`HYDERABAD, IN • ${timeStr}`);
        };
        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'ABOUT', href: '#about' },
        { name: 'EXPERIENCE', href: '#experience' },
        { name: 'SKILLS', href: '#skills' },
    ];

    return (
        <>
            {/* Top Bar matching image */}
            <div className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] tracking-[0.2em] font-medium text-white/80 uppercase">
                <div className="hidden sm:block">{currentTime}</div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    READY FOR WORK
                </div>
            </div>

            {/* Bottom Nav matching image */}
            <div className="fixed bottom-6 md:bottom-10 left-0 right-0 z-50 px-4 flex justify-center">
                <motion.nav
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-nav px-1 py-1 md:px-2 md:py-2 flex items-center gap-0 md:gap-1 shadow-2xl max-w-full overflow-x-auto no-scrollbar"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-3 md:px-6 py-3 text-[9px] md:text-[11px] tracking-[0.15em] font-medium text-white/70 hover:text-white transition-all uppercase whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="hidden md:block w-[1px] h-4 bg-white/10 mx-2" />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="hidden md:block px-6 py-3 rounded-[40px] bg-white/5 border border-white/10 text-[11px] tracking-[0.15em] font-medium text-white hover:bg-white/10 transition-all uppercase whitespace-nowrap"
                    >
                        BOOK FOR A CALL
                    </motion.button>
                </motion.nav>
            </div>
        </>
    );
};

export default Navbar;
