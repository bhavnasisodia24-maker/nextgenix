'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="text-center mb-12 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-display font-black text-white mb-6"
                        >
                            Let's Build the <span className="text-gradient-primary">Future</span>
                        </motion.h2>
                        <p className="text-white/60">
                            Ready to scale? Tell us about your project.
                        </p>
                    </div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Name</label>
                                <input
                                    type="text"
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Email</label>
                                <input
                                    type="email"
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Business Name</label>
                                <input
                                    type="text"
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="Restaurant, Travel Agency"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Business Website (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="www.example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Project Details</label>
                            <textarea
                                className="w-full h-40 bg-white/5 rounded-3xl p-6 md:p-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all resize-none placeholder:text-white/20"
                                placeholder="I need to automate my..."
                            />
                        </div>

                        <div className="pt-4 text-center">
                            <Button size="lg" className="w-full md:w-auto h-14 px-12" fullWidth={false}>
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-32" />
        </section>
    );
};

export default Contact;
