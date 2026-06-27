'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className={`mx-auto w-[92%] max-w-7xl rounded-full transition-all duration-300 ${isScrolled ? 'glass px-6 py-3 shadow-lg' : 'bg-transparent px-0'
                    }`}>
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-background font-black text-xl italic group-hover:scale-105 transition-transform">
                                N
                            </div>
                            <span className="text-xl font-display font-bold text-white tracking-tighter">
                                NEXT<span className="text-primary">GENIXX</span>
                            </span> */}
                            <img src="/logo.png" alt="logo" className="w-33 h-7" />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:glow"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA / Hamburger */}
                        <div className="flex items-center gap-4">
                            <Link href="/contact" className="hidden sm:block">
                                <Button variant="neon" size="sm" className="h-10 px-6">
                                    Get a Free Consultation
                                </Button>
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-white hover:text-primary transition-colors"
                            >
                                {isMobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>

                        {/* Edited by Bhavna - Changing the Hamburger Menu*/}
                        {/* <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-foreground hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button> */}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-[60] glass bg-background/80 rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-2xl border border-white/10 backdrop-blur-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-display font-bold text-white hover:text-primary transition-colors text-center block"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t border-white/10">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="neon" className="w-full h-12">
                                    Get a Free Consultation
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
