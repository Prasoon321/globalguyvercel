// app/oman-visa/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// Client-side function to handle the WhatsApp Contact Form submission
const sendWhatsAppMessage = (event) => {
    event.preventDefault(); // prevent actual form submission

    const form = document.getElementById("contactForm");
    // Use optional chaining/null checks for safety in client components
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
    const text = `Oman Visa Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Reset form after sending
    form.reset();

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
};

export default function OmanVisaPage() {

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
                                <h1 className="text-anime-style-3" data-cursor="-opaque">OMAN VISA</h1>
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
                                        <p>Oman Visa processing</p>
                                        <h3 style={{ textDecoration: 'line-through' }}>From Rs.7,500</h3>
                                        <h3>To Rs.7,000</h3>
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
                                                        rows={4}
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
                                <h2 className="text-anime-style-3">10 &amp; 30-Day Oman Tourist Visa</h2>

                                <p className="wow fadeInUp">
                                    Oman welcomes Indian nationals with 10-day and 30-day tourist or
                                    visit visas. These visas are processed according to the Royal Oman
                                    Police guidelines. We also offer an express option with a 1–2 day
                                    processing time.
                                </p>

                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Oman Tourist Visa"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Departure &amp; Return Location
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Muscat, Salalah, and other cities in Oman — Travel within the next
                                    60 days
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">What&apos;s Included</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Oman visa application fees</li>
                                    <li>Typing fees</li>
                                    <li>All applicable taxes</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    What&apos;s Not Included
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>Airfare</li>
                                    <li>Accommodation</li>
                                    <li>Overstay fees</li>
                                    <li>Express visa surcharge</li>
                                    <li>OK To Board service</li>
                                    <li>Add-on services</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">What to Expect</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.5s">
                                    For the Oman visa, we require a clear copy of your passport&apos;s front
                                    and back pages and a passport-sized photo with a white background.
                                    Documents can be emailed or sent via WhatsApp. Payments are accepted
                                    via bank transfer, credit/debit card, or net banking.
                                </p>
                                <ul className="wow fadeInUp" data-wow-delay="0.6s">
                                    <li>Visa processed in 3–4 working days (1–2 for express)</li>
                                    <li>Secure and quick application process</li>
                                    <li>Minimal documentation</li>
                                </ul>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>1. How long will it take for my visa to be processed?</strong><br />
                                    Standard visa takes 3–4 days, express visa in 1–2 days.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>2. Can my visa application be rejected?</strong><br />
                                    All visas are subject to approval by the Royal Oman Police.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>3. Do I get a refund if my visa is rejected?</strong><br />
                                    Partial refunds may be available, minus application costs, on a
                                    case-by-case basis.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                    <strong>4. What documents are required?</strong><br />
                                    Passport copy (front and back) and a passport-size photo with a
                                    white background.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.1s">
                                    <strong>5. Can I cancel my visa application?</strong><br />
                                    Visa applications cannot be cancelled once submitted.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.2s">
                                    <strong>6. Can I get Oman travel insurance?</strong><br />
                                    Yes, we offer Oman insurance for INR 1500, including COVID-19
                                    coverage.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.3s">
                                    <Link href="/contact" className="btn-default">Apply for Oman Visa</Link>
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