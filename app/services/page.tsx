'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, BarChart3, Rocket, Code2, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const ServicesPage = () => {
    const services = [
        {
            title: 'Web Development',
            icon: Globe,
            desc: 'Fast, secure, and scalable websites built to represent your brand and drive business results. We use the latest modern tech stacks to deliver uncompromised quality.',
            features: ['Corporate Websites', 'Landing Pages', 'E-commerce Development', 'CMS Integration', 'Web Maintenance'],
        },
        {
            title: 'Application Development',
            icon: Code2,
            desc: 'Custom applications built to solve complex business problems and support long-term growth. From internal dashboards to consumer-facing mobile apps.',
            features: ['Progressive Web Apps (PWA)', 'iOS & Android Apps', 'API Integrations', 'Custom Dashboards', 'SaaS Development'],
        },
        {
            title: 'AI Automation & Workflow',
            icon: Zap,
            desc: 'Intelligent automation solutions that reduce manual work and improve operational efficiency. Future-proof your business with cutting-edge AI integrations.',
            features: ['Custom AI Chatbots', 'Workflow Automation', 'CRM Automation', 'Tool Integrations', 'Data Processing'],
        },
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container px-6">
                
                {/* Hero Section */}
                <div className="text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-black text-white mb-6"
                    >
                        Our <span className="text-gradient-primary">Services</span>
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to elevate your brand, streamline your operations, and drive exponential growth.
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-12 md:space-y-24 mb-32">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                            {/* Visual Side */}
                            <div className="w-full md:w-1/2">
                                <Card className="aspect-[4/3] flex flex-col items-center justify-center p-8 text-center group hover:border-primary/50 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <service.icon size={80} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                                    <h3 className="text-2xl font-bold text-white z-10">{service.title}</h3>
                                </Card>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold mb-2">
                                    0{index + 1}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-white/70 leading-relaxed">
                                    {service.desc}
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {service.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                                            <span className="text-white/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <Link href="/contact">
                                        <Button className="shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                                            Discuss this service
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 relative z-10">
                        Not sure what you <span className="text-primary">need?</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto relative z-10">
                        Let's hop on a quick discovery call. We'll analyze your business goals and propose a custom strategy tailored to you.
                    </p>
                    <div className="relative z-10">
                        <Link href="/contact">
                            <Button size="lg" className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.5)]">
                                Book a Free Consultation
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
            
            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        </div>
    );
};

export default ServicesPage;
