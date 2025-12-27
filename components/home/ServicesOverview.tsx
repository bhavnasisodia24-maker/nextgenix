'use client';

import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Globe, Zap, BarChart3, Rocket, Code2, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const ServicesOverview = () => {
    const services = [
        {
            title: 'Digital Marketing & Growth',
            icon: Rocket,
            desc: 'Strategic digital marketing solutions to increase brand visibility, traffic, and customer engagement.',
            features: ['Social Media Marketing', 'Content Marketing', 'Lead Generation', 'Campaign Strategy']
        },
        {
            title: 'Performance Marketing',
            icon: BarChart3,
            desc: 'Optimization-focused campaigns designed to improve rankings, conversions, and measurable performance.',
            features: ['Search Engine Optimization', 'Paid Advertising (PPC)', 'Conversion Optimization', 'Analytics & Reporting']
        },
        {
            title: 'Website Development',
            icon: Globe,
            desc: 'Fast, secure, and scalable websites built to represent your brand and drive business results.',
            features: ['Business Websites', 'Landing Pages', 'E-commerce Development', 'CMS Integration']
        },
        {
            title: 'Application Development',
            icon: Code2,
            desc: 'Custom applications built to solve business problems and support long-term growth.',
            features: ['Web Applications', 'Mobile App Development', 'API Integrations', 'Dashboard Systems']
        },
        {
            title: 'UI/UX Design (Web & Mobile)',
            icon: LayoutDashboard,
            desc: 'User-centered designs that deliver seamless, modern, and engaging digital experiences.',
            features: ['Website UI Design', 'Mobile App UI Design', 'Wireframing & Prototyping', 'UX Optimization']
        },
        {
            title: 'AI Automation & Workflow Optimization',
            icon: Zap,
            desc: 'Intelligent automation solutions that reduce manual work and improve operational efficiency.',
            features: ['AI Chatbots', 'Workflow Automation', 'CRM Automation', 'Tool Integrations']
        },
    ];

    return (
        <section id="services" className="section-padding relative">
            <div className="container">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
                        Our <span className="text-gradient-primary">Services</span>
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Everything you need to build, grow, and automate your digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((s, i) => (
                        <Card key={s.title} hover glow className="group flex flex-col h-full">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <s.icon size={28} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                            <p className="text-white/60 mb-6 text-sm leading-relaxed min-h-[60px]">{s.desc}</p>

                            <div className="space-y-3 mb-6 flex-grow">
                                {s.features.map((f) => (
                                    <div key={f} className="flex items-center gap-2 text-xs md:text-sm font-medium text-white/70">
                                        <div className="min-w-4 pt-1 sm:pt-0">
                                            <CheckCircle2 size={16} className="text-primary" />
                                        </div>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>


                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/#contact">
                        <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
