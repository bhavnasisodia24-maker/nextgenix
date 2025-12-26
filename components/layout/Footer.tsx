import Link from 'next/link';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-background relative z-10">
            <div className="container px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-lg italic">
                            N
                        </div>
                        <span className="text-xl font-display font-bold text-white tracking-tighter">
                            NEXT<span className="text-primary">GENIX</span>
                        </span>
                    </div>

                    <p className="text-text-secondary text-sm">
                        &copy; {new Date().getFullYear()} NextGenix. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                            <Twitter size={18} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full glass hover:bg-primary hover:text-background transition-all">
                            <Github size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
