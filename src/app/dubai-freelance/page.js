// app/dubai-freelance/page.jsx
"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function DubaiFreelanceVisaPage() {

    // Initialize WOW.js for animations and Accordion logic
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();

            // Note: Bootstrap's collapse/accordion functionality relies on 
            // the bootstrap.min.js script loaded in your layout.js.
        }
    }, []);

    // Helper component for the Accordion Button
    const AccordionButton = ({ targetId, isCollapsed, buttonText, headingId }) => (
        <h2 className="accordion-header" id={headingId}>
            <button
                className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${targetId}`}
                aria-expanded={!isCollapsed}
            >
                {buttonText}
            </button>
        </h2>
    );

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    DUBAI FREELANCE VISA FOR 1/2 YEAR
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">HOME</Link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            <div className="page-country-single">
                <div className="container">
                    <div className="row">
                        {/* Dubai Freelance Visa Section Start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="freelanceVisaAccordion">
                                    <h2 className="mb-4 text-anime-style-3">Dubai Freelance Visa</h2>

                                    {/* 2 Year Visa Package */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton
                                            targetId="collapseFreelance2"
                                            isCollapsed={true}
                                            buttonText="2-Year Dubai Freelance Visa – From AED 7,499!"
                                            headingId="headingFreelance2"
                                        />
                                        <div id="collapseFreelance2" className="accordion-collapse collapse" data-bs-parent="#freelanceVisaAccordion">
                                            <div className="accordion-body">
                                                <h5>Total Cost: Starting from AED 7,499</h5>
                                                <p>
                                                    Work independently and legally in the UAE with your own
                                                    2-Year Dubai Freelance Visa. Fast processing in just 10–12
                                                    days!
                                                </p>
                                                <ul>
                                                    <li>✔ Offer Letter</li>
                                                    <li>✔ Labour Card</li>
                                                    <li>✔ Entry Permit</li>
                                                    <li>✔ Change Status</li>
                                                    <li>✔ Medical Test</li>
                                                    <li>✔ Emirates ID Typing</li>
                                                    <li>✔ Visa Stamping</li>
                                                    <li>✔ Final Submission</li>
                                                    <li>✔ NOC</li>
                                                </ul>
                                                <p>
                                                    <strong>Need help?</strong> Contact us anytime:
                                                    <br />
                                                    📞
                                                    <a
                                                        href="https://wa.me/918448558118"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        +91 8448558118
                                                    </a>
                                                    |
                                                    <a
                                                        href="https://wa.me/971509170635"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        +971 509170635
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 1 Year Visa Package */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton
                                            targetId="collapseFreelance1"
                                            isCollapsed={false} // Keeping the first defined package open by default
                                            buttonText="1-Year Freelance Visa Package"
                                            headingId="headingFreelance1"
                                        />
                                        <div
                                            id="collapseFreelance1"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#freelanceVisaAccordion"
                                        >
                                            <div className="accordion-body">
                                                <h5>Total Cost: 5500 AED</h5>
                                                <ul>
                                                    <li>1-Year Freelance Visa (Dubai Mainland)</li>
                                                    <li>Establishment Card + Medical + Emirates ID</li>
                                                    <li>100% freelance legal setup – no office required</li>
                                                    <li>Eligible for bank account and UAE license</li>
                                                    <li>Processing time: 7–10 working days</li>
                                                </ul>
                                                <p>
                                                    <strong>Ideal for:</strong> Designers, content creators,
                                                    marketers, coders, and consultants.
                                                </p>
                                                <p>
                                                    <strong>Note:</strong> Price may vary slightly depending on
                                                    nationality and optional add-ons (e.g., health insurance).
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Call to Action */}
                                    <div className="mt-4 text-center">
                                        <a
                                            href="https://wa.me/918448558118"
                                            target="_blank"
                                            className="btn-default"
                                            rel="noopener noreferrer"
                                        >
                                            Apply for Dubai Freelance Visa
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Dubai Freelance Visa Section End */}
                    </div>
                </div>
            </div>
        </>
    );
}