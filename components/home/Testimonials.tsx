'use client';

import React from 'react';
import Card from '../ui/Card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Sarah Chen',
            role: 'CTO',
            company: 'TechFlow',
            content: 'NextGenixx made our systems faster, smarter, and more cost-efficient. The automation they implemented had an immediate impact.'
        },
        {
            name: 'Marcus Thorne',
            role: 'Founder',
            company: 'Nexus Ventures',
            content: 'Excellent technical expertise and smooth execution. The platform they built is powerful, secure, and easy to use.'
        },
        {
            name: 'Elena Rodriguez',
            role: 'VP of Marketing',
            company: 'GlobalShift',
            content: 'Real growth, real results. Their marketing strategy helped us attract better leads in a short time.'
        },
    ];

    return (
        <section className="section-padding relative">
            <div className="container">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
                        Client <span className="text-gradient-primary">Success Stories</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. See what industry leaders are saying about their partnership with NextGenixx.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <Card key={r.name} className="flex flex-col p-8 relative hover:bg-white/5 transition-colors group">
                            <div className="absolute top-8 right-8">
                                <Quote className="text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />
                            </div>

                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-primary fill-primary" />
                                ))}
                            </div>

                            <p className="text-lg text-white/80 mb-8 font-medium italic leading-relaxed flex-grow">
                                "{r.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-primary/20">
                                    {r.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{r.name}</h4>
                                    <p className="text-xs text-primary font-bold uppercase tracking-widest leading-none mt-1">
                                        {r.role} @ {r.company}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
