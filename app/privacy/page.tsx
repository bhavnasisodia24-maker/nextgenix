'use client';

import React from 'react';

const PrivacyPage = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-12">
                    Privacy <span className="text-gradient-primary">Policy</span>
                </h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-white/70 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="text-white/60 mb-4">
                            We collect information you provide directly to us when you fill out a contact form, request a demo, or communicate with us. The types of information we may collect include:
                        </p>
                        <ul className="list-disc pl-6 text-white/60 space-y-2">
                            <li>Name and contact information</li>
                            <li>Company details</li>
                            <li>Message content and feedback</li>
                            <li>Technical usage data</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="text-white/60">
                            We use the information we collect to provide, maintain, and improve our services, to respond to your comments and questions, and to send you related information including confirmations, invoices, and technical notices.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                        <p className="text-white/60">
                            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
