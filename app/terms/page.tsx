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
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-white/60">
                            By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should discontinue use of our website and services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                        <p className="text-white/60 mb-4">
                            NextGenixx provides digital marketing, web and app development, UI/UX design, and AI automation services. The scope, timeline, and pricing of services are defined through proposals, agreements, or written communication with clients.
                        </p>
                        {/* <ul className="list-disc pl-6 text-white/60 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on NextGenixx's website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul> */}
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Payments and Billing</h2>
                        <p className="text-white/60">
                            All payments must be made according to the agreed terms outlined in proposals or contracts. Delayed or missed payments may result in service suspension. Fees paid for services are non-refundable unless otherwise stated in writing.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                        <p className="text-white/60">
                            All designs, code, content, and materials created by NextGenixx remain our intellectual property until full payment is received. Upon completion and payment, ownership may be transferred as agreed. Clients are responsible for ensuring they have legal rights to any content they provide.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Client Responsibilities</h2>
                        <p className="text-white/60">
                            Clients agree to provide accurate information, timely feedback, and necessary resources required for project completion. Delays caused by the client may affect delivery timelines and project outcomes.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                        <p className="text-white/60">
                            Both NextGenixx and the client agree to keep all confidential information private and not disclose it to third parties without written consent, except where legally required.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                        <p className="text-white/60">
                            NextGenixx shall not be held liable for indirect, incidental, or consequential damages, including loss of revenue, data, or business opportunities. Our liability is limited to the amount paid for the specific service provided.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                        <p className="text-white/60">
                            We reserve the right to terminate or suspend services if there is a violation of these terms, non-payment, misuse of services, or unlawful activity associated with the client or project.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                        <p className="text-white/60">
                            These Terms and Conditions are governed by the laws of India, and any disputes shall be subject to the jurisdiction of applicable courts.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                        <p className="text-white/60">
                            NextGenixx may update these Terms and Conditions at any time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">11. Contact</h2>
                        <p className="text-white/60">
                            For questions regarding these Terms and Conditions, you can contact us at contact@nextgenixx.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
