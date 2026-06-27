'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import Card from '@/components/ui/Card';

const ContactPage = () => {
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

        try {
            const response = await fetch('https://formsubmit.co/ajax/bhavnasisodia.work@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    businessName: formData.businessName,
                    website: formData.website,
                    message: formData.message,
                    _subject: `New NextGenix Contact from ${formData.name}`,
                    _template: "table"
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                businessName: '',
                website: '',
                message: '',
            });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-display font-black text-white mb-6"
                    >
                        Get in <span className="text-gradient-primary">Touch</span>
                    </motion.h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Whether you have a question, a project in mind, or just want to say hi, our team is ready to hear from you.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Left Side: Contact Information */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <Card className="p-8 h-full flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                                <Mail size={20} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/50 font-bold uppercase tracking-widest mb-1">Email</p>
                                                <a href="mailto:nextgenixx@gmail.com" className="text-white hover:text-primary transition-colors">nextgenixx@gmail.com</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                                <Phone size={20} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/50 font-bold uppercase tracking-widest mb-1">Phone</p>
                                                <a href="tel:+15551234567" className="text-white hover:text-primary transition-colors">(+91) 70895-57780</a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                                <MapPin size={20} className="text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/50 font-bold uppercase tracking-widest mb-1">Global HQ</p>
                                                <p className="text-white/80">Available Worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm text-white/50 font-bold uppercase tracking-widest mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <Link href="https://www.linkedin.com/company/nextgenixx/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all">
                                            <Linkedin size={20} />
                                        </Link>
                                        <Link href="https://www.instagram.com/nextgenixx/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all">
                                            <Instagram size={20} />
                                        </Link>
                                        <Link href="https://www.facebook.com/nextgenixx" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all">
                                            <Facebook size={20} />
                                        </Link>
                                        <Link href="https://www.youtube.com/@NextGenixx" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-primary hover:text-background transition-all">
                                            <Youtube size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
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

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full md:w-auto h-14 px-12 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                                        fullWidth={false}
                                        disabled={status === 'submitting' || status === 'success'}
                                    >
                                        {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                                    </Button>

                                    <div className="h-6 mt-4">
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
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        </div>
    );
};

export default ContactPage;
