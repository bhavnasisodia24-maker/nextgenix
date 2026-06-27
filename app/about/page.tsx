'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, Search, Lightbulb, Rocket, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';

const AboutPage = () => {

    return (
        <div className="pt-32 pb-20">
            <div className="container px-6">

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-black text-white mb-6"
                    >
                        We Are <span className="text-gradient-primary">NextGenixx</span>
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        A collective of visionaries, engineers, and strategists dedicated to redefining the digital landscape.
                    </p>
                </div>

                {/* Company Description */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <Card className="p-8">
                        <Target className="text-primary mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-white/60">To empower businesses with future-proof technology that drives sustainable growth and efficiency.</p>
                    </Card>
                    <Card className="p-8">
                        <Globe className="text-primary mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-4">Global Reach</h3>
                        <p className="text-white/60">Serving clients across 15+ countries, delivering world-class digital solutions without boundaries.</p>
                    </Card>
                    <Card className="p-8">
                        <Users className="text-primary mb-6" size={32} />
                        <h3 className="text-xl font-bold text-white mb-4">Human-Centric</h3>
                        <p className="text-white/60">Technology is our tool, but people are our focus. We build for the human experience.</p>
                    </Card>
                </div>

                {/* Our Process Section */}
                <div className="text-center mb-16 mt-32">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
                        How We <span className="text-gradient-primary">Work</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto mb-12">
                        A streamlined, transparent process designed to turn your vision into reality efficiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 -translate-y-1/2 hidden md:block z-0" />

                    {[
                        { title: 'Discovery', desc: 'Understanding your goals, audience, and challenges.', icon: Search },
                        { title: 'Strategy', desc: 'Crafting a customized roadmap for success.', icon: Lightbulb },
                        { title: 'Execution', desc: 'Building and launching with precision and speed.', icon: Rocket },
                        { title: 'Optimization', desc: 'Continuous testing and improvement for maximum ROI.', icon: CheckCircle },
                    ].map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <Card className="p-6 text-center h-full flex flex-col items-center group hover:border-primary/50 transition-colors bg-background">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary">
                                    <step.icon size={28} className="text-primary group-hover:text-background transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">0{i + 1}. {step.title}</h3>
                                <p className="text-sm text-white/60">{step.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        </div>
    );
};

export default AboutPage;
