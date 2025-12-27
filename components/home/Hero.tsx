'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Buusinesses";
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < fullText.length) {
                setText((prev) => prev + fullText.charAt(i));
                i++;
            } else {
                setIsTyping(false);
                clearInterval(typingEffect);
            }
        }, 150);
        return () => clearInterval(typingEffect);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vh] h-[50vh] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vh] h-[60vh] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 text-primary text-sm font-bold mb-8 shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                >
                    <Zap size={16} className="fill-primary" />
                    <span className="tracking-wide">NEXT-GEN AGENCY PROTOCOL</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter text-white mb-6 md:mb-8 leading-[1.1]">
                    Building Smart Digital <br className="hidden md:block" />
                    Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">{text}</span>
                    <span className="animate-pulse text-primary">_</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 md:mb-12 px-4"
                >
                    We help brands grow faster with digital marketing, high-performance websites & apps, stunning designs, and AI-powered automation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="/#contact">
                        <Button size="lg" className="group h-14 px-8">
                            Start Your Project
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <a href="/#services">
                        <Button variant="glass" size="lg" className="h-14 px-8">
                            View Our Services
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-[20%] right-[10%] w-24 h-24 glass rounded-2xl rotate-12 animate-float opacity-30 pointer-events-none hidden lg:block" />
            <div className="absolute bottom-[20%] left-[10%] w-32 h-32 glass rounded-full animate-float opacity-20 pointer-events-none animation-delay-2000 hidden lg:block" />
        </section>
    );
};

export default Hero;
