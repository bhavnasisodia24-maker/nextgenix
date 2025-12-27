'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe } from 'lucide-react';
import Card from '@/components/ui/Card';

const AboutPage = () => {
    const team = [
        { name: 'Alex Rivera', role: 'CEO & Founder', image: 'AR' },
        { name: 'Sarah Chen', role: 'CTO', image: 'SC' },
        { name: 'Marcus Thorne', role: 'Head of Design', image: 'MT' },
    ];

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

                {/* Team Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
                        Meet the <span className="text-gradient-primary">Team</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="group text-center">
                            <div className="w-32 h-32 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-black text-primary mb-6 group-hover:bg-primary/10 transition-colors">
                                {member.image}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-primary text-sm uppercase tracking-widest">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        </div>
    );
};

export default AboutPage;
