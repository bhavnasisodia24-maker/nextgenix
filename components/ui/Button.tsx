'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'glass' | 'neon' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', loading, fullWidth, children, disabled, ...props }, ref) => {

        const variants = {
            primary: 'bg-primary text-background hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] border border-transparent',
            glass: 'glass glass-hover text-white',
            neon: 'bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]',
            ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <motion.button
                ref={ref as any}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={disabled || loading}
                className={cn(
                    'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300',
                    'focus:outline-none focus:ring-2 focus:ring-primary/50', 'cursor-pointer',
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none',
                    className
                )}
                {...(props as any)}
            >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;