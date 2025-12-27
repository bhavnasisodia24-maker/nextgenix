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
        { name: 'Services', href: '/#services' },
        { name: 'Contact', href: '/#contact' },
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
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-background font-black text-xl italic group-hover:scale-105 transition-transform">
                                N
                            </div>
                            <span className="text-xl font-display font-bold text-white tracking-tighter">
                                NEXT<span className="text-primary">GENIXX</span>
                            </span>
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
                            <Link href="/#contact" className="hidden sm:block">
                                <Button variant="neon" size="sm" className="h-10 px-6">
                                    Get a Free Consultation
                                </Button>
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="md:hidden p-2 text-white hover:text-primary transition-colors"
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-3xl flex flex-col justify-center items-center gap-8"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-2 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl md:text-4xl font-display font-bold text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
