'use client';

import React from 'react';
import { ShieldCheck, Zap, Users, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSection = () => {
    const features = [
        {
            title: 'Proven Reliability',
            icon: ShieldCheck,
            desc: 'Enterprise-grade guarantees with 99.9% uptime for all critical systems.'
        },
        {
            title: 'Expert Support',
            icon: Users,
            desc: 'Direct access to senior engineering teams. No chatbots, just solutions.'
        },
        {
            title: 'Rapid Delivery',
            icon: Zap,
            desc: 'Accelerated development timelines using our proprietary AI-driven workflows.'
        },
        {
            title: 'Transparent Process',
            icon: FileText,
            desc: 'Clear roadmaps, daily updates, and honest pricing with no hidden costs.'
        }
    ];

    return (
        <section className="section-padding relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
                            Why Global Brands Choose <br />
                            <span className="text-gradient-primary">NextGenixx as Their Tech Partner</span>
                        </h1>
                        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            We help ambitious brands design, build, and scale high-performance digital systems. From strategy to execution, we deliver secure, scalable, and future-ready solutions that power long-term growth.
                        </p>
                        {/* <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            We don't just write code; we partner with you to build resilient, scalable digital infrastructure that stands the test of time.
                        </p>
                        <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            We don't just write code; we partner with you to build resilient, scalable digital infrastructure that stands the test of time.
                        </p> */}

                        {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-12">
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">250+</h3>
                                <p className="text-sm text-white/50 uppercase tracking-widest">Projects Delivered</p>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden sm:block" />
                            <div>
                                <h3 className="text-4xl font-bold text-white mb-1">98%</h3>
                                <p className="text-sm text-white/50 uppercase tracking-widest">Client Retention</p>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Grid */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-background transition-all duration-300">
                                        <f.icon size={24} className="text-primary group-hover:text-background transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        </section>
    );
};

export default TrustSection;
