// app/dubai-visa-change/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// Client-side function to handle the WhatsApp Contact Form submission
const sendWhatsAppMessage = (event) => {
    event.preventDefault(); // prevent actual form submission

    const form = document.getElementById("contactForm");
    const name = document.getElementById("name")?.value.trim() || '';
    const email = document.getElementById("email")?.value.trim() || '';
    const phone = document.getElementById("phone")?.value.trim() || '';
    const message = document.getElementById("message")?.value.trim() || '';

    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    const whatsappNumber = "971509170635";
    // Using URL encoding for message body
    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Reset form after sending
    form.reset();

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
};

export default function DubaiVisaChangePage() {

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
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    DUBAI VISA CHANGE
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

            {/* Page Country Single Start */}
            <div className="page-country-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 order-2">
                            {/* Page Single Sidebar Start */}
                            <div className="page-single-sidebar">

                                {/* Sidebar CTA Box Start */}
                                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Sidebar CTA Content Start */}
                                    <div className="sidebar-cta-content">
                                        <p>Help your friends or family members stuck in Dubai</p>
                                        <h3 style={{ textDecoration: 'line-through' }}>From Rs.25,000</h3>
                                        <h3>To Rs.24,000</h3>
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
                                                <p>+971 509170635</p>
                                                <p>+91 8448558118</p>
                                            </div>
                                        </div>
                                        {/* Sidebar CTA Contact Item End - Phone */}

                                        {/* Sidebar CTA Contact Item Start - Email */}
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                <Image src="/images/icon-mail-accent.svg" alt="Mail Icon" width={24} height={24} />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>Info@globalvisaguy.com</p>
                                            </div>
                                        </div>
                                        {/* Sidebar CTA Contact Item End - Email */}
                                    </div>
                                    {/* Sidebar CTA Contact End */}
                                </div>
                                {/* Sidebar CTA Box End */}

                                {/* Page Single Form Start */}
                                <div className="page-single-form wow fadeInUp">
                                    <h3>ENQUIRY FORM</h3>

                                    {/* Contact Form Start */}
                                    <div className="contact-form">
                                        <form
                                            id="contactForm"
                                            onSubmit={sendWhatsAppMessage}
                                            className="wow fadeInUp"
                                            data-wow-delay="0.25s"
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
                                                </div>

                                                <div className="form-group col-md-12 mb-4">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        id="message"
                                                        rows="4"
                                                        placeholder="Write Message.."
                                                        required
                                                    ></textarea>
                                                </div>

                                                <div className="col-md-12">
                                                    <button type="submit" className="btn-default">
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Contact Form Start */}
                                </div>
                                {/* Page Single Form End */}
                            </div>
                            {/* Page Single Sidebar End */}
                        </div>

                        <div className="col-lg-8 order-lg-2 order-1">
                            {/* Country Single Content Start */}
                            <div className="country-single-content">
                                <h2 className="text-anime-style-3">
                                    30 and 90 Days Inside UAE Visa Extension
                                </h2>

                                <p className="wow fadeInUp">
                                    Extend your friends&apos; or family&apos;s UAE visit visa without exiting the
                                    country with our hassle-free inside-country visa change packages. No
                                    more long hours at the airport or expensive travel to Oman. Now, you
                                    can process your visa extension from the comfort of your home with
                                    our 30-day and 90-day visa change options.
                                </p>

                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Visa Extension in UAE"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Who Can Apply for Inside-Country Visa Change?
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    - Tourist visa holders already inside UAE<br />
                                    - On-arrival nationalities seeking a tourist visa<br />
                                    - Individuals with recently cancelled employment visas
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">Documents Required</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Passport copy</li>
                                    <li>Passport-sized photograph (white background)</li>
                                    <li>Old visa copy or cancelled employment visa</li>
                                    <li>For on-arrival nationals: passport and photo only</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    Application Timeline
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.4s">
                                    Applicants should submit all documents at least 2–3 days before the
                                    visa expiry date. The process is 100% online — no physical visit
                                    required.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">What&apos;s Included</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.5s">
                                    <li>30/90 days UAE visa</li>
                                    <li>Status change approval</li>
                                    <li>Service fee</li>
                                    <li>Currency conversion charges</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.6s">
                                    What&apos;s Not Included
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.6s">
                                    <li>Overstay fines (if any)</li>
                                    <li>Airfare (if exit is required)</li>
                                    <li>Urgent/express processing fees</li>
                                    <li>Accommodation or add-on services</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.7s">Important Note</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    Visa holders on cancelled employment visas must ensure their grace
                                    period hasn&apos;t expired. Overstays may result in fines. Please check
                                    your visa status on the official ICA portal:
                                    <a
                                        href="https://beta.smartservices.ica.gov.ae/echannels/web/client/default.html#/fileValidity"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Click here to verify
                                    </a>.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    For more details or personalized support, talk to our visa experts
                                    today. We&apos;ll ensure your extension process is smooth and
                                    stress-free.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="0.9s">
                                    <a
                                        href="https://wa.me/971509170635"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-default"
                                    >
                                        Extend Visa Now
                                    </a>
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