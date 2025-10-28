// app/uae-visa-for-30-days/page.jsx
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
    const text = `30-Day UAE Visa Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Reset form after sending
    form.reset();

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
};

export default function Uae30DayVisaPage() {

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
                                    UAE VISA FOR 30 DAYS
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

                                {/* Sidebar CTA Box Start - Price */}
                                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="sidebar-cta-content">
                                        <p>Uae visa for 3o days Price</p>
                                        <h3>AED 380</h3>
                                        <h3>Per Person</h3>
                                    </div>

                                    {/* Sidebar CTA Box Start - Renewal Price (Nested) */}
                                    <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                        <div className="sidebar-cta-content">
                                            <h3>AED 1100</h3>
                                            <h3>VISA RENEWAL</h3>
                                        </div>
                                    </div>
                                    {/* Sidebar CTA Box End - Renewal Price (Nested) */}

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
                                {/* Sidebar CTA Box End - Price */}

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
                                <h2 className="text-anime-style-3">30-Day UAE Tourist Visa</h2>

                                <p className="wow fadeInUp">
                                    Planning to explore Dubai, Abu Dhabi, or Sharjah? Our 30-day UAE
                                    tourist visa is ideal for travelers looking to stay longer and
                                    experience the vibrant lifestyle, shopping, and attractions the UAE
                                    has to offer. Seaman Tours makes visa processing seamless with a
                                    quick turnaround time and dedicated support.
                                </p>

                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="UAE 30 Day Visa"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">Visa Validity</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    You must enter the UAE within 60 days from the date of visa
                                    approval.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">What&apos;s Included</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Visa Typing Fee</li>
                                    <li>Embassy Submission</li>
                                    <li>Service Charges</li>
                                    <li>OK to Board Assistance</li>
                                    <li>All Taxes and GST</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    What&apos;s Not Included
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>Airfare</li>
                                    <li>Accommodation</li>
                                    <li>OK to Board for Labour Category</li>
                                    <li>Overstay Penalties</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">Add-On Services</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.5s">
                                    <li>Flight Booking and Hotel Packages</li>
                                    <li>Dummy Return Ticket</li>
                                    <li>Airport Pickup &amp; Transfers</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.6s">
                                    Visa Processing Details
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    Visa applications are processed within 4-5 days under standard
                                    service. Express visas are available in 1-2 days, while
                                    urgent/emergency visas may be approved within 24 hours. After
                                    payment, you will receive a document upload link by email.
                                </p>

                                <ul className="wow fadeInUp" data-wow-delay="0.7s">
                                    <li>Send clear passport and photo documents</li>
                                    <li>Do not book tickets before visa approval</li>
                                    <li>Flight ticket required for OK to board process</li>
                                    <li>No immigration ban should exist in UAE records</li>
                                </ul>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="0.8s">
                                    <Link href="/contact" className="btn-default">Apply for 30-Day UAE Visa</Link>
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