'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        website: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        // DEBUG LOGGING
        console.log('Attempting to submit form...');
        console.log('Script URL present:', !!scriptUrl);

        if (!scriptUrl) {
            console.error('ERROR: Google Sheets URL is missing. Check .env.local and RESTART SERVER.');
            setStatus('error');
            alert('Configuration Error: Google Sheets URL is missing. You may need to restart your terminal/server if you just added it.');
            return;
        }

        try {
            // Log the date we are sending
            console.log('Sending data:', formData);

            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors', // 'no-cors' is required for Google Apps Script web apps
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // With no-cors, we assume success if the request completes
            console.log('Fetch request sent successfully (no-cors mode)');
            setStatus('success');
            setFormData({ name: '', email: '', businessName: '', website: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('SUBMISSION ERROR:', error);
            setStatus('error');
            alert('Submission Failed. Check console for details.');
        }
    };

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

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
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
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="Restaurant, Travel Agency"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Business Website (Optional)</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="w-full h-12 md:h-14 bg-white/5 rounded-full px-6 md:px-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all placeholder:text-white/20"
                                    placeholder="www.example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/50 uppercase tracking-widest pl-4">Project Details</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full h-40 bg-white/5 rounded-3xl p-6 md:p-8 text-white border border-white/10 focus:border-primary focus:bg-white/10 focus:outline-none transition-all resize-none placeholder:text-white/20"
                                placeholder="I need to automate my..."
                            />
                        </div>

                        <div className="pt-4 text-center space-y-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full md:w-auto h-14 px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                                fullWidth={false}
                                disabled={status === 'submitting' || status === 'success'}
                            >
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </Button>

                            {status === 'success' && (
                                <p className="text-green-400 text-sm animate-pulse">
                                    Thanks! We've received your inquiry and will be in touch shortly.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-sm">
                                    Something went wrong. Please email us directly or try again later.
                                </p>
                            )}
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
