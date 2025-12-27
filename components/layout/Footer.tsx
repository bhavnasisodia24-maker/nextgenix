import Link from 'next/link';
import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#services' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <footer className="border-t border-white/5 bg-background relative z-10">
            <div className="container px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-lg italic">
                            N
                        </div>
                        <span className="text-xl font-display font-bold text-white tracking-tighter">
                            NEXT<span className="text-primary">GENIX</span>
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6 md:gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Socials & Copyright */}
                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                                <Youtube size={18} />
                            </Link>
                        </div>
                        <div className="flex gap-6 mt-4 md:mt-0 text-xs text-white/50">
                            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        </div>
                        <p className="text-text-secondary text-xs mt-2">
                            &copy; {new Date().getFullYear()} NextGenixx. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
