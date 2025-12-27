'use client';

import React from 'react';

const TermsPage = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-12">
                    Terms & <span className="text-gradient-primary">Conditions</span>
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-white/70 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p className="text-white/60">
                            By accessing our website at NextGenixx, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                        <p className="text-white/60 mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on NextGenixx's website for personal, non-commercial transitory viewing only.
                        </p>
                        <ul className="list-disc pl-6 text-white/60 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on NextGenixx's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                        <p className="text-white/60">
                            The materials on NextGenixx's website are provided on an 'as is' basis. NextGenixx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
