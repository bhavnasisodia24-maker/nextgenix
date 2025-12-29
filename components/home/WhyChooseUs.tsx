'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Clock, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
    // const reasons = [
    //     {
    //         title: 'Visionary Innovation',
    //         icon: Lightbulb,
    //         description: 'We stay ahead of the curve, integrating emerging technologies like AI and WebGL before they become industry standards.'
    //     },
    //     {
    //         title: 'Result-Oriented Strategy',
    //         icon: Target,
    //         description: 'Every line of code and every pixel is crafted with a single goal: to drive measurable growth for your business.'
    //     },
    //     {
    //         title: '24/7 Rapid Support',
    //         icon: Clock,
    //         description: 'Our global team ensures that your digital infrastructure is monitored and supported around the clock, worldwide.'
    //     },
    //     {
    //         title: 'Award-Winning Design',
    //         icon: Trophy,
    //         description: 'We blend aesthetics with functionality, creating digital experiences that are recognised for their excellence.'
    //     }
    // ];

    // return (
    //     <section className="section-padding relative overflow-hidden">
    //         <div className="container">
    //             <div className="flex flex-col lg:flex-row gap-16 items-start">

    //                 {/* Left: Sticky Heading & Text */}
    //                 <div className="lg:w-1/3 lg:sticky lg:top-32">
    //                     <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8 leading-tight">
    //                         Why Leading Brands <br />
    //                         <span className="text-gradient-primary">Choose NextGenixx</span>
    //                     </h2>
    //                     <p className="text-white/60 text-lg mb-8 leading-relaxed">
    //                         In a crowded digital landscape, we stand out by delivering more than just software. We deliver competitive advantages.
    //                     </p>
    //                     <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm">
    //                         <p className="text-white font-medium text-lg italic">
    //                             "NextGenixx didn't just build a website; they built a revenue engine for our company."
    //                         </p>
    //                         <div className="mt-4 flex items-center gap-3">
    //                             <div className="w-8 h-8 rounded-full bg-white/20" />
    //                             <span className="text-sm text-white/50 uppercase tracking-widest">Global Tech Partner</span>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* Right: Grid of Reasons */}
    //                 <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
    //                     {reasons.map((r, i) => (
    //                         <motion.div
    //                             key={r.title}
    //                             initial={{ opacity: 0, y: 20 }}
    //                             whileInView={{ opacity: 1, y: 0 }}
    //                             viewport={{ once: true }}
    //                             transition={{ delay: i * 0.1 }}
    //                             className="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all duration-300"
    //                         >
    //                             <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
    //                                 <r.icon className="text-primary" size={32} />
    //                             </div>
    //                             <h3 className="text-xl font-bold text-white mb-4">{r.title}</h3>
    //                             <p className="text-white/60 leading-relaxed">
    //                                 {r.description}
    //                             </p>
    //                         </motion.div>
    //                     ))}
    //                 </div>

    //             </div>
    //         </div>

    //         {/* Background Decor */}
    //         <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
    //     </section>
    // );
};

export default WhyChooseUs;
