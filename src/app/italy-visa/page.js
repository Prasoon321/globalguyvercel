// app/italy-visa/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

const handleQuickContactSubmit = (event) => {
    event.preventDefault();
    alert("✅ Your quick contact message has been sent successfully. An expert will contact you shortly!");

    event.target.reset();
};

export default function ItalyVisaPage() {
    // Initialize WOW.js for animations
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();
        }
    }, []);

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">Italy</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            {/* Page Country Single Start */}
            <div className="page-country-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 order-2">
                            {/* Page Single Sidebar Start */}
                            <div className="page-single-sidebar">

                                {/* Page Single Form Start (Quick Contact Form) */}
                                <div className="page-single-form wow fadeInUp">
                                    <h3>Quick contact</h3>

                                    <div className="contact-form">
                                        <form
                                            id="contactForm"
                                            onSubmit={handleQuickContactSubmit}
                                            className="wow fadeInUp"
                                            data-wow-delay="0.25s"
                                        // EJS remnants: data-toggle="validator" and action/method removed
                                        >
                                            <div className="row">
                                                <div className="form-group col-md-12 mb-4">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        id="name"
                                                        placeholder="Your Name"
                                                        required
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="form-group col-md-12 mb-4">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Your Email"
                                                        required
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="form-group col-md-12 mb-4">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        id="phone"
                                                        placeholder="Your Phone"
                                                        required
                                                    />
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="form-group col-md-12 mb-4">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        id="message"
                                                        rows={4}
                                                        placeholder="Write Message.."
                                                    ></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="col-md-12">
                                                    <button type="submit" className="btn-default">
                                                        send message
                                                    </button>
                                                    <div id="msgSubmit" className="h3 hidden"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Page Single Form End */}

                                {/* Sidebar CTA Box Start */}
                                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Sidebar CTA Content Start */}
                                    <div className="sidebar-cta-content">
                                        <h3>how can we help</h3>
                                        <p>If you need any helps, please feel free to contact us.</p>
                                    </div>
                                    {/* Sidebar CTA Content End */}

                                    {/* Sidebar CTA Contact Start */}
                                    <div className="sidebar-cta-contact">
                                        {/* Sidebar CTA Contact Item Start - Phone */}
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                <Image src="/images/icon-phone-accent.svg" alt="Phone Icon" width={24} height={24} />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>+91 1234567890</p>
                                            </div>
                                        </div>
                                        {/* Sidebar CTA Contact Item End - Phone */}

                                        {/* Sidebar CTA Contact Item Start - Email */}
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                <Image src="/images/icon-mail-accent.svg" alt="Mail Icon" width={24} height={24} />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>info@domain.com</p>
                                            </div>
                                        </div>
                                        {/* Sidebar CTA Contact Item End - Email */}
                                    </div>
                                    {/* Sidebar CTA Contact End */}
                                </div>
                                {/* Sidebar CTA Box End */}
                            </div>
                            {/* Page Single Sidebar End */}
                        </div>

                        <div className="col-lg-8 order-lg-2 order-1">
                            {/* Country Single Content Start */}
                            <div className="country-single-content">
                                <h2 className="text-anime-style-3">Italy Visa from UAE</h2>

                                <p className="wow fadeInUp">
                                    Visiting Italy is a dream for many — from its iconic architecture
                                    and rich history to its world-renowned cuisine. If you&apos;re based in
                                    the UAE and planning a trip to Italy, understanding the visa process
                                    is essential. This guide will help you get started with your Italy
                                    visa application from the UAE.
                                </p>

                                {/* Country Featured Image Start */}
                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="https://visaguy.ae/wp-content/uploads/2021/08/1920x1080-italy.jpg"
                                            alt="Italy Visa from UAE"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>
                                {/* Country Featured Image End */}

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Who Needs an Italy Visa?
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    UAE nationals can enter Italy without a visa for stays up to 90
                                    days. However, expats living in the UAE must apply for a Schengen
                                    visa through VFS Global in Dubai.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                                    Italy Visa Requirements for UAE Nationals
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>
                                        Valid UAE passport (at least 3 months validity beyond return date)
                                    </li>
                                    <li>Purpose of visit and supporting documents</li>
                                    <li>Proof of sufficient funds for the stay</li>
                                    <li>Additional documents like business invitation if applicable</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    Italy Visa Requirements for UAE Residents
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>
                                        Valid passport with minimum 3-month validity and 2 blank pages
                                    </li>
                                    <li>Recent passport-sized photo with white background</li>
                                    <li>Confirmed flight bookings and hotel reservations</li>
                                    <li>Cover letter stating purpose of travel</li>
                                    <li>
                                        Proof of financial means – bank statements, credit card, or
                                        investment proof
                                    </li>
                                    <li>Travel insurance with adequate coverage</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                                    How to Apply for an Italy Visa from Dubai
                                </h3>
                                <ol className="wow fadeInUp" data-wow-delay="0.5s">
                                    <li>
                                        Determine if you need a visa and choose the appropriate visa type
                                    </li>
                                    <li>Book an appointment at VFS Global Dubai</li>
                                    <li>
                                        Prepare and bring all required documents as per the checklist
                                    </li>
                                    <li>
                                        Fill out the Schengen visa application form online or use
                                        assistance at the VFS office
                                    </li>
                                    <li>Submit your application and pay the applicable fee</li>
                                    <li>Once approved, your passport will be couriered to you</li>
                                </ol>

                                <div className="country-single-image mt-4 mb-4">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Visa Process UAE to Italy"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    <strong>How long does it take to get an Italy visa in Dubai?</strong><br />
                                    The average processing time is 14 working days from the date of
                                    document submission.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>Is the visa application fee refundable?</strong><br />
                                    No, the visa application fee is non-refundable if your visa is
                                    denied.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>Why apply with GlobalVisaGuy?</strong><br />
                                    Our experts handle all the documentation and formalities, making the
                                    visa process fast, accurate, and hassle-free. With years of visa
                                    processing experience, we ensure timely results.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>Can I visit other Schengen countries with an Italy visa?</strong><br />
                                    Yes, an Italy visa allows you to travel across the Schengen zone.
                                    However, if Italy is your primary destination, you must apply for
                                    the Italy visa.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                    <strong>What&apos;s the cost of an Italy visa from Dubai?</strong><br />
                                    The cost depends on the visa type. On average, a short-stay visa for
                                    adults is AED 297, while children under 12 may pay AED 149.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.1s">
                                    <Link href="/contact" className="btn-default">Apply Now</Link>
                                </div>
                            </div>
                            {/* Country Single Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Country Single End */}
        </>
    );
}