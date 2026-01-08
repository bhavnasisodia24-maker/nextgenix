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
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-white/60 mb-4">
                            NextGenixx respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website, contact us, or use our services.
                        </p>
                        {/* <ul className="list-disc pl-6 text-white/60 space-y-2">
                            <li>Name and contact information</li>
                            <li>Company details</li>
                            <li>Message content and feedback</li>
                            <li>Technical usage data</li>
                        </ul> */}
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="text-white/60">
                            We may collect personal and business information such as your name, email address, phone number, company details, and any information you voluntarily submit through contact forms or communication channels. We also collect technical data like IP address, browser type, device information, and usage data to understand how visitors interact with our website.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                        <p className="text-white/60">
                            The information we collect is used to communicate with you, respond to inquiries, provide our services, improve website performance, analyze user behavior, and deliver relevant updates or offers. We use this data strictly for business purposes and never sell or misuse your personal information.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="text-white/60">
                            Our website uses cookies and analytics tools to enhance user experience, monitor traffic, and improve functionality. Cookies help us understand user preferences and website performance. You can manage or disable cookies through your browser settings at any time.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Third Parties</h2>
                        <p className="text-white/60">
                            We may share limited data with trusted third-party service providers such as hosting platforms, analytics tools, or CRM systems solely to operate our business efficiently. These parties are obligated to keep your information confidential. We may also disclose data if required by law or legal process.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                        <p className="text-white/60">
                            We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, misuse, or loss. While we strive to secure your information, no digital system can guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
                        <p className="text-white/60">
                            Our website may contain links to third-party websites. NextGenixx is not responsible for the privacy practices, content, or policies of external sites. We encourage users to review the privacy policies of those websites separately.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
                        <p className="text-white/60">
                            You have the right to request access, correction, or deletion of your personal data. You may also withdraw consent for data processing by contacting us directly, subject to legal and operational requirements.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Policy Updates</h2>
                        <p className="text-white/60">
                            We may update this Privacy Policy from time to time to reflect changes in legal, technical, or business requirements. Any updates will be published on this page, and continued use of our website indicates acceptance of the revised policy.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                        <p className="text-white/60">
                            If you have any questions or concerns regarding this Privacy Policy, you may contact us at contact@nextgenixx.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
