// app/global-visa/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// NOTE: This component does not contain a specific form, so no custom handler is needed.
// It relies on the WOW.js script for animations, loaded in layout.js.

export default function GlobalVisaPage() {

    // Initialize WOW.js for animations
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();
        }
    }, []);

    // Helper component for the standard sidebar CTA box
    const SidebarCTA = ({ price, priceNote }) => (
        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
            <div className="sidebar-cta-content">
                <h3>{price}</h3>
                <p>{priceNote}</p>
            </div>
            <div className="sidebar-cta-contact">
                {/* Contact Item - Phone 1 */}
                <div className="sidebar-cta-contact-item">
                    <div className="icon-box">
                        <Image src="/images/icon-phone-accent.svg" alt="Phone Icon" width={24} height={24} />
                    </div>
                    <div className="cta-contact-item-content">
                        <p>+971 509170635</p>
                        <p>+91 8448558118</p>
                    </div>
                </div>
                {/* Contact Item - Mail */}
                <div className="sidebar-cta-contact-item">
                    <div className="icon-box">
                        <Image src="/images/icon-mail-accent.svg" alt="Mail Icon" width={24} height={24} />
                    </div>
                    <div className="cta-contact-item-content">
                        <p>Info@globalvisaguy.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
    // Helper function for Apply Button (common WhatsApp link)
    const ApplyButton = ({ countryName }) => (
        <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="0.5s">
            <a
                href="https://wa.me/918448558118"
                target="_blank"
                className="btn-default"
                rel="noopener noreferrer"
            >
                {`Apply for ${countryName} Visa`}
            </a>
        </div>
    );
    
    // Helper component for the standard layout wrapper
    const VisaSectionWrapper = ({ children }) => (
        <div className="page-country-single">
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    );

    const SidebarWrapper = ({ children }) => (
        <div className="col-lg-4 order-lg-1 order-2">
            <div className="page-single-sidebar">
                {children}
            </div>
        </div>
    );

    const ContentWrapper = ({ children }) => (
        <div className="col-lg-8 order-lg-2 order-1">
            <div className="country-single-content">
                {children}
            </div>
        </div>
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
                                    LIST OF ALL GLOBAL VISA
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

            {/* --- */}

            {/* South Korea Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 1150" priceNote="Visa Assistance Fee" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">South Korea Visa</h2>
                    <p className="wow fadeInUp">
                        Planning a trip to South Korea? Our tourist visa assistance package
                        costs AED 1150 and includes your application, appointment booking,
                        and document support.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Minimum 2 years UAE residency</li>
                        <li>Original Passport (valid for at least 6 months)</li>
                        <li>UAE Residence Visa &amp; Emirates ID (valid for 6+ months)</li>
                        <li>1 Passport-size photo with white background</li>
                        <li>NOC from employer &amp; company trade license copy</li>
                        <li>Original bank statement (last 3 months)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Visa Details</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.3s">
                        <li><strong>Validity:</strong> 90 days from issue date</li>
                        <li><strong>Stay Duration:</strong> 30 days (Single Entry)</li>
                        <li><strong>Processing Time:</strong> 14–15 working days</li>
                        <li>
                            <strong>Appointment Location:</strong> Abu Dhabi (as of now)
                        </li>
                        <li>
                            <strong>Additional Visa Fee at Center:</strong> Approx. AED 160
                        </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fees may vary depending on the nationality of the applicant.
                        Appointments in Dubai expected to open after the 15th of this month.
                    </p>
                    <ApplyButton countryName="South Korea" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* South Korea Visa Section End */}

            {/* --- */}

            {/* Japan Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 400" priceNote="Assistance Fee (Excludes Consulate Fee)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Japan Visa</h2>
                    <p className="wow fadeInUp">
                        We provide complete assistance for your Japan e-Visa, including
                        documentation, hotel and flight reservations, and application
                        processing for AED 400. Processing takes approximately 2–3 weeks.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Original Passport (valid for at least 6 months)</li>
                        <li>UAE Residence Visa copy (valid for 3+ months after trip)</li>
                        <li>Emirates ID copy</li>
                        <li>1 Passport-size photo (white background)</li>
                        <li>Dummy hotel and flight bookings (provided by us)</li>
                        <li>Original employer letter with employment details</li>
                        <li>Trade license copy (for business owners)</li>
                        <li>Bank statement (last 6 months, stamped)</li>
                        <li>Dummy travel itinerary (provided by us)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Processing Time</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        2 to 3 weeks from submission.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fees charged by the embassy are additional and may vary based
                        on the applicant&apos;s nationality.
                    </p>
                    <ApplyButton countryName="Japan" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Japan Visa Section End */}

            {/* --- */}

            {/* India Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 400 / 600 / 750" priceNote="Depending on Visa Type" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">India Visa</h2>
                    <p className="wow fadeInUp">
                        We offer assistance for India Tourist e-Visa with multiple options:
                        AED 400 for 30 days (Single Entry), AED 600 for 1 Year (Multiple
                        Entry), and AED 750 for 5 Years (Multiple Entry).
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Copy of Passport</li>
                        <li>Passport-size photo</li>
                        <li>Departure and arrival airport details</li>
                        <li>Indian address details</li>
                        <li>Local contact person name and address in India</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Processing Details</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        All services include verification, documentation, and submission
                        support. The visa is issued electronically.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fees may vary based on the applicant&apos;s nationality. Prices
                        listed are standard for UAE residents.
                    </p>
                    <ApplyButton countryName="India" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* India Visa Section End */}

            {/* --- */}

            {/* Schengen Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 650" priceNote="Visa Assistance Fee (Excludes Consulate Fee)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Schengen Visa</h2>
                    <p className="wow fadeInUp">
                        Planning a trip to Europe? We assist with Schengen Visa applications
                        for AED 650, including hotel &amp; flight bookings, document
                        verification, appointment scheduling, and application form filling.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Original Passport (6+ months validity)</li>
                        <li>UAE Residence Visa valid 3+ months beyond return</li>
                        <li>Emirates ID Copy</li>
                        <li>Two (2) Passport-size photos (white background)</li>
                        <li>Hotel &amp; Flight bookings (provided by us)</li>
                        <li>Letter from employer with employment details</li>
                        <li>Trade license (for business owners)</li>
                        <li>Bank statement (last 6 months, stamped)</li>
                        <li>Travel insurance and itinerary (provided by us)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Visa Fees</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Embassy visa fees to be paid during appointment: approx. AED 350–650
                        depending on the consulate.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Embassy fees vary based on the applicant&apos;s nationality and the
                        specific Schengen country.
                    </p>
                    <ApplyButton countryName="Schengen" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Schengen Visa Section End */}

            {/* --- */}

            {/* Turkey Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 550" priceNote="Visa Assistance Fee (Excludes Consulate Fee)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Turkey Visa</h2>
                    <p className="wow fadeInUp">
                        Get your Turkey Tourist Visa with expert support for AED 550. Our
                        services include document verification, dummy hotel and flight
                        booking, appointment scheduling, and application support.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Original Passport (valid 6+ months from travel date)</li>
                        <li>UAE Emirates ID &amp; Residence Visa (valid 6+ months)</li>
                        <li>Passport-size photo (white background)</li>
                        <li>Hotel &amp; Flight bookings (provided by us)</li>
                        <li>NOC from sponsor with full details</li>
                        <li>6-month Bank Statement (stamped)</li>
                        <li>Travel Insurance (provided at application center)</li>
                        <li>
                            Tenancy Contract or Explanation Letter (if in shared housing)
                        </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Visa Fees</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Approx. AED 500 payable at the visa center in addition to our
                        assistance fee.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Embassy fees may vary depending on the nationality of the applicant.
                    </p>
                    <ApplyButton countryName="Turkey" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Turkey Visa Section End */}

            {/* --- */}

            {/* Malaysia Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 400" priceNote="Visa Assistance Fee (e-Visa)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Malaysia Visa</h2>
                    <p className="wow fadeInUp">
                        Get your Malaysia e-Visa assistance for just AED 400. Our package
                        includes hotel &amp; flight reservation, document verification, and
                        application form filling. Available for various nationalities.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Passport (valid 6+ months)</li>
                        <li>UAE Residence Visa (valid till return date)</li>
                        <li>Emirates ID Copy</li>
                        <li>Passport-size photo (white background, dark shirt)</li>
                        <li>Hotel &amp; Flight bookings (provided by us)</li>
                        <li>Salary Certificate (not required for Partner Visa holders)</li>
                        <li>NOC from Sponsor (not required for Partner Visa holders)</li>
                        <li>Trade License copy (for business owners)</li>
                        <li>6-month bank statement (stamped)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Processing Time</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Processing varies based on nationality. e-Visa issuance typically
                        within 3–7 working days.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fee may vary depending on the nationality of the applicant.
                        Contact us to confirm eligibility.
                    </p>
                    <ApplyButton countryName="Malaysia" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Malaysia Visa Section End */}

            {/* --- */}

            {/* UK Visa Section Start (First Instance) */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 1150" priceNote="Visa Assistance + Embassy Fee (6 Months Visa)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">UK Visa</h2>
                    <p className="wow fadeInUp">
                        Planning to visit the UK? Get expert visa assistance for AED 1150,
                        including hotel and flight bookings, application form support,
                        document verification, and appointment scheduling. Standard
                        processing includes a 6-month tourist visa.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Scanned Passport (valid for 6+ months)</li>
                        <li>Scanned UAE Residence Visa page (valid for 6+ months)</li>
                        <li>Emirates ID Copy</li>
                        <li>Two (2) Passport-size photos (white background)</li>
                        <li>Hotel &amp; Flight bookings (provided by us)</li>
                        <li>NOC from employer or sponsor</li>
                        <li>6-month Bank Statement (stamped)</li>
                        <li>Trade license (for business owners)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                        Long-Term Visa Options
                    </h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.3s">
                        <li>2-Year Multiple Entry Visa</li>
                        <li>5-Year Multiple Entry Visa</li>
                        <li>10-Year Multiple Entry Visa</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fee may vary by nationality. Longer duration visas may be
                        available based on travel history and purpose.
                    </p>
                    <ApplyButton countryName="UK" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* UK Visa Section End */}

            {/* --- */}

            {/* Saudi Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 650" priceNote="1-Year Multiple Entry Visa (UAE Residents)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Saudi Visa</h2>
                    <p className="wow fadeInUp">
                        We offer 1-year multiple entry Saudi tourist visas for AED 650,
                        exclusively for UAE residents. The visa allows a maximum stay of 90
                        days in a year and is also valid for performing Umrah (except during
                        Hajj).
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Required Documents</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Passport copy</li>
                        <li>Recent passport-size photo</li>
                        <li>UAE Residence Visa copy (minimum 3 months validity)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Important Notes</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.3s">
                        <li>Applicants with certain professions may be rejected</li>
                        <li>Physical appearance at the embassy may be required</li>
                        <li>
                            Insurance surcharges apply:
                            <ul>
                                <li>Age 45–60: AED 50</li>
                                <li>Above 60: AED 600</li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Fees may differ based on nationality and profession. Kindly share
                        your visa copy with us for verification before processing.
                    </p>
                    <ApplyButton countryName="Saudi" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Saudi Visa Section End */}

            {/* --- */}

            {/* Spain Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 650" priceNote="Visa Assistance Fee (Excludes Consulate Fee)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Spain Visa</h2>
                    <p className="wow fadeInUp">
                        Planning a trip to Spain? We assist you with complete Schengen visa
                        processing for AED 650, including hotel and flight bookings,
                        document verification, and appointment scheduling.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Required Documents</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Original Passport (valid 6+ months)</li>
                        <li>UAE Residence Visa (valid 3+ months post trip)</li>
                        <li>Emirates ID Copy</li>
                        <li>Two (2) Passport-size photos (white background)</li>
                        <li>Hotel and Flight Bookings (provided by us)</li>
                        <li>Employer Letter with full employment details</li>
                        <li>Trade License copy (if business owner)</li>
                        <li>6-month Bank Statement (stamped)</li>
                        <li>Travel Itinerary and Insurance (provided by us)</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Visa Fees</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Additional visa fees to be paid at the consulate: approx. AED
                        650–850 depending on the consulate and nationality.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Prices and procedures may vary by nationality. Contact us for your
                        personalized quote and timeline.
                    </p>
                    <ApplyButton countryName="Spain" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Spain Visa Section End */}

            {/* --- */}

            {/* China Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 600 / AED 950" priceNote="Tourist & Business Visa Options" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">China Visa</h2>
                    <p className="wow fadeInUp">
                        Apply for a China Tourist or Business visa with complete assistance.
                        We guide you through documentation, scheduling, and processing with
                        fast turnaround times.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                        Tourist Visa – AED 600
                    </h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Validity: 14 days</li>
                        <li>Processing Time: 12–14 working days</li>
                        <li>
                            Required Documents:
                            <ul>
                                <li>Digital Photo</li>
                                <li>Original Passport</li>
                                <li>UAE Visa Page (6 months old + valid)</li>
                                <li>Emirates ID Copy</li>
                                <li>NOC from sponsor or trade license if self-employed</li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                        Business Visa – AED 950
                    </h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.3s">
                        <li>Validity: 30 days</li>
                        <li>
                            Additional Documents:
                            <ul>
                                <li>Invitation Letter from China Company</li>
                                <li>China Company Trade License</li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fees and processing may vary depending on nationality and
                        purpose of visit. Contact us to confirm.
                    </p>
                    <ApplyButton countryName="China" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* China Visa Section End */}

            {/* --- */}

            {/* Singapore Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 450" priceNote="Includes Documentation + Processing" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Singapore Visa</h2>
                    <p className="wow fadeInUp">
                        Planning a trip to Singapore? We provide full assistance for your
                        e-Visa application for just AED 450, including document verification
                        and processing support.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Requirements</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Original Passport (valid for more than 6 months)</li>
                        <li>UAE Residence Visa (valid for more than 3 months)</li>
                        <li>Emirates ID Copy</li>
                        <li>New studio-taken passport-size photo (white background)</li>
                        <li>NOC letter from sponsor/employer</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Processing Time</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        10 to 12 working days.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fees may vary depending on the nationality of the applicant.
                        Make sure the photo hasn&apos;t been used in your passport or UAE visa.
                    </p>
                    <ApplyButton countryName="Singapore" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Singapore Visa Section End */}

            {/* --- */}

            {/* Thailand Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 450" priceNote="Visa Assistance (Excludes Embassy Fee)" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Thailand Visa</h2>
                    <p className="wow fadeInUp">
                        Apply for a Thailand tourist visa with full support for AED 450. Our
                        service includes dummy hotel &amp; flight booking, document checks, and
                        application form assistance.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Documents Required</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Original Passport and 1 Copy</li>
                        <li>Two recent photos (3.5 x 4.5 cm, white background)</li>
                        <li>UAE Residence Visa</li>
                        <li>NOC from Sponsor</li>
                        <li>
                            Bank Statement:
                            <ul>
                                <li>
                                    Single Entry: 3-month salary account statement or pay slip
                                </li>
                                <li>
                                    Multiple Entry: 6-month statement with min. AED 25,000 balance
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">Visa Fee at Center</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        AED 400 for Single Entry<br />
                        AED 1,000 for Multiple Entry (payable directly at the center)
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Fees may differ by nationality. Bank statement must be from a salary
                        account and stamped.
                    </p>
                    <ApplyButton countryName="Thailand" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Thailand Visa Section End */}

            {/* --- */}

            {/* Kyrgyzstan Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 400" priceNote="Includes Visa Fee + Full Documentation Assistance" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Kyrgyzstan Visa</h2>
                    <p className="wow fadeInUp">
                        Get your Kyrgyzstan visa processed quickly and affordably with full
                        assistance for AED 400. This includes all documentation preparation
                        and government fees.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Required Documents</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Passport copy</li>
                        <li>1 Passport-size photo (any background accepted)</li>
                        <li>UAE Emirates ID</li>
                        <li>UAE Residence Visa</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                        Additional Information
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        We recommend purchasing travel medical insurance. Coverage for
                        unexpected emergencies is available at additional cost through
                        Seaman Tours.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fee may differ based on applicant&apos;s nationality. All documents
                        must be clear and recent.
                    </p>
                    <ApplyButton countryName="Kyrgyzstan" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Kyrgyzstan Visa Section End */}

            {/* --- */}

            {/* Armenia Visa Section Start */}
            <VisaSectionWrapper>
                <SidebarWrapper>
                    <SidebarCTA price="AED 400" priceNote="Visa Fee + Documentation Processing" />
                </SidebarWrapper>
                <ContentWrapper>
                    <h2 className="text-anime-style-3">Armenia Visa</h2>
                    <p className="wow fadeInUp">
                        Apply for your Armenia visa easily with full assistance for AED 400.
                        This package includes visa fee, document verification, and complete
                        processing support.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.2s">Required Documents</h3>
                    <ul className="wow fadeInUp" data-wow-delay="0.2s">
                        <li>Passport copy</li>
                        <li>1 Passport-size photo (any background accepted)</li>
                        <li>UAE Emirates ID</li>
                        <li>UAE Residence Visa</li>
                    </ul>
                    <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                        Additional Information
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                        Travel medical insurance is highly recommended. Seaman Tours can
                        assist with insurance coverage at an additional cost.
                    </p>
                    <h3 className="wow fadeInUp" data-wow-delay="0.4s">Note</h3>
                    <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Visa fee may differ based on nationality. Ensure all documents are
                        clear and valid.
                    </p>
                    <ApplyButton countryName="Armenia" />
                </ContentWrapper>
            </VisaSectionWrapper>
            {/* Armenia Visa Section End */}
        </>
    );
}