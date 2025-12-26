'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    glow?: boolean;
}

const Card = ({ className, hover = false, glow = false, children, ...props }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={hover ? { y: -5 } : undefined}
            transition={{ duration: 0.5 }}
            className={cn(
                'rounded-3xl p-8 transition-all duration-300 relative overflow-hidden',
                'glass', // Base glass style from globals
                hover && 'glass-hover',
                glow && 'hover:shadow-[0_0_30px_rgba(0,242,255,0.1)] border-primary/20',
                className
            )}
            {...(props as any)}
        >
            {/* Optional inner glow gradient */}
            {glow && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
