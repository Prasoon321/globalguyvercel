// app/baharain-sponsored-visa-for-14-days/page.jsx
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


export default function BahrainVisaPage() {

    // Initialize WOW.js for animations (needed because this is a client component)
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
                                    BAHARAIN SPONSORED VISA FOR 14 DAYS
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
                                        <p>14 days sponsored visa for Bahrain</p>
                                        <h3 style={{ textDecoration: 'line-through' }}>From Rs.17,500</h3>
                                        <h3>Rs.16,900</h3>
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

                                {/* Page Single Form Start (WhatsApp Form) */}
                                <div className="page-single-form wow fadeInUp">
                                    <h3>ENQUIRY FORM</h3>

                                    {/* Contact Form Start */}
                                    <div className="contact-form">
                                        <form
                                            id="contactForm"
                                            onSubmit={sendWhatsAppMessage} // React onSubmit Handler
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
                                <h2 className="text-anime-style-3">14-Day Bahrain Sponsored Visa</h2>

                                <p className="wow fadeInUp">
                                    Get your 14-day Bahrain visa easily with our sponsored visa service.
                                    Perfect for travelers heading to Saudi Arabia, Dubai, or other
                                    countries through Bahrain for quarantine or transit purposes.
                                    Sponsored by a licensed tour operator in Bahrain, this visa has a
                                    very low rejection rate and minimal documentation requirements.
                                </p>

                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="14-Day Bahrain Visa"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Departure &amp; Return Location
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Bahrain – available throughout the year
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">What&apos;s Included</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Sponsor fee</li>
                                    <li>Visa typing and application charges</li>
                                    <li>All government taxes (VAT, GST, etc.)</li>
                                    <li>Government processing fee</li>
                                    <li>Service fee</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    What&apos;s Not Included
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>Airfare</li>
                                    <li>Hotel booking or quarantine package</li>
                                    <li>Dummy tickets or return tickets</li>
                                    <li>Group fares or tour packages</li>
                                    <li>Add-on services</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">What to Expect</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.5s">
                                    The Bahrain visa is processed within 2–3 business days. All we need
                                    is a clear scan of your passport (front and back) with visible
                                    barcodes, and a recent passport-size photo (soft copy). This visa is
                                    ideal for travelers using Bahrain as a stopover before entering
                                    Saudi Arabia or the UAE. The chances of rejection are very low as it
                                    is a company-sponsored visa.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.6s">Key Benefits</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.6s">
                                    <li>Minimal documentation</li>
                                    <li>Quick 2–3 day processing</li>
                                    <li>Ideal for onward travel to Saudi Arabia or Dubai</li>
                                    <li>Friendly and supportive visa experts</li>
                                    <li>Very low rejection probability</li>
                                </ul>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>1. What documents are required for processing?</strong><br />
                                    Passport front and back page (clear scan) and a recent passport-size
                                    photo (soft copy).
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>2. How fast is the visa processed?</strong><br />
                                    Typically within 2–3 days. In some cases, even faster.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>3. Can the visa be rejected?</strong><br />
                                    Rejections are rare because this is a sponsored visa. Final approval
                                    is at the discretion of Bahrain immigration.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                    <strong>4. Can I get more than 14 days?</strong><br />
                                    No, this visa is valid for 14 days only.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.1s">
                                    <strong>5. Can I use this visa for travel to Saudi Arabia?</strong><br />
                                    Yes, many travelers use this visa for quarantine purposes before
                                    entering Saudi Arabia or the UAE, especially in cases where direct
                                    entry is restricted.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.2s">
                                    <Link href="/contact" className="btn-default">Apply for Bahrain Visa</Link>
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