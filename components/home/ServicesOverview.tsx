'use client';

import React from 'react';
import Card from '../ui/Card';
import { Globe, Cpu, BarChart3, Rocket, Code2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const ServicesOverview = () => {
    const services = [
        { title: 'Web Development', icon: Globe, desc: 'High-performance Next.js applications built for scale.' },
        { title: 'AI Automation', icon: Cpu, desc: 'Smart workflows that save hundreds of hours.' },
        { title: 'Data Analytics', icon: BarChart3, desc: 'Actionable insights derived from complex datasets.' },
        { title: 'SEO Acceleration', icon: Rocket, desc: 'Dominate search rankings with technical precision.' },
        { title: 'Custom Software', icon: Code2, desc: 'Tailored solutions solving unique business challenges.' },
        { title: 'Cyber Security', icon: ShieldCheck, desc: 'Bank-grade protection for your digital assets.' },
    ];

    return (
        <section className="section-padding relative">
            <div className="container">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
                        Our <span className="text-gradient-primary">Capabilities</span>
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        End-to-end digital solutions designed to propel your business into the future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((s, i) => (
                        <Card key={s.title} hover glow className="group cursor-pointer">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <s.icon size={28} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-white/60 mb-6 text-sm leading-relaxed">{s.desc}</p>
                            <Link href="/services" className="text-primary text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                                Explore &rarr;
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
