'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Globe, Cpu, BarChart3, Rocket, Code2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
    const services = [
        {
            title: 'Web Experience',
            icon: Globe,
            desc: 'We build immersive, high-performance web applications using the latest Next.js and React technologies.',
            features: ['3D WebGL Interactions', 'Headless CMS Integration', 'PWA Development', 'Global CDN Deployment']
        },
        {
            title: 'AI & Automation',
            icon: Cpu,
            desc: 'Streamline your operations with intelligent agents and custom automation workflows.',
            features: ['Language Model Integration', 'Automated Customer Support', 'Data Processing Pipelines', 'Predictive Analytics']
        },
        {
            title: 'Digital Marketing',
            icon: BarChart3,
            desc: 'Data-driven campaigns that target your ideal customer with surgical precision.',
            features: ['Conversion Rate Optimization', 'Multi-channel Attribution', 'Programmatic Advertising', 'Viral Content Strategy']
        },
        {
            title: 'SEO Foundations',
            icon: Rocket,
            desc: 'Technical SEO architectures that ensure your platform dominates search engine results.',
            features: ['Core Web Vitals Optimization', 'Schema Markup Strategy', 'Backlink Authority Building', 'Semantic Content Structure']
        },
        {
            title: 'Custom Engineering',
            icon: Code2,
            desc: 'Bespoke software solutions architected to solve your most complex business challenges.',
            features: ['Microservices Architecture', 'Legacy System Modernization', 'API Development', 'Real-time Systems']
        },
        {
            title: 'Cyber Security',
            icon: ShieldCheck,
            desc: 'Fortress-level security audits and implementation to protect your digital assets.',
            features: ['Penetration Testing', 'Compliance (GDPR/SOC2)', 'Identity Management', 'DDoS Mitigation']
        },
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container px-6">

                {/* Header */}
                <div className="text-center mb-24 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl md:text-7xl font-display font-black text-white mb-6 md:mb-8"
                    >
                        Our <span className="text-gradient-primary">Expertise</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-4"
                    >
                        A comprehensive suite of digital services designed to accelerate your growth in the new economy.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full flex flex-col p-6 md:p-10 hover:border-primary/30 transition-colors group">
                                <div className="flex items-start justify-between mb-6 md:mb-8">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                        <s.icon size={28} className="text-primary group-hover:text-background transition-colors md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-xs font-bold text-white/30 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                                        0{i + 1}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-display font-bold text-white mb-4">{s.title}</h2>
                                <p className="text-white/60 mb-8 text-lg leading-relaxed">{s.desc}</p>

                                <div className="mt-auto space-y-3">
                                    {s.features.map((f) => (
                                        <div key={f} className="flex items-center gap-3 text-sm font-medium text-white/80">
                                            <CheckCircle2 size={18} className="text-primary" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 text-center">
                    <div className="glass inline-block rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                        <h2 className="text-3xl font-bold text-white mb-8">Ready to start your project?</h2>
                        <Link href="/#contact">
                            <Button size="lg" className="h-14 px-10">
                                Get in Touch
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>

            {/* Background Element */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[200px] pointer-events-none -z-10" />
        </div>
    );
};

export default ServicesPage;
