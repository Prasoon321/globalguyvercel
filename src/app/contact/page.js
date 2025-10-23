// app/contact/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// Client-side function to handle the main WhatsApp Contact Form submission
const sendToWhatsApp = (event) => {
    event.preventDefault();

    const form = document.getElementById("contactForm");
    // Use optional chaining/null checks for safety in client components
    const name = document.getElementById("name")?.value.trim() || '';
    const email = document.getElementById("email")?.value.trim() || '';
    const phone = document.getElementById("phone")?.value.trim() || '';
    const message = document.getElementById("message")?.value.trim() || '';

    if (!name || !email || !phone || !message) {
        alert("❌ Please fill in all fields.");
        return;
    }

    const finalMessage = `Hello, I have a new inquiry:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encoded = encodeURIComponent(finalMessage);
    const whatsappURL = `https://wa.me/918448558118?text=${encoded}`;

    window.open(whatsappURL, "_blank");
    alert("✅ WhatsApp window opened. Thank you!");
    form.reset();
};


export default function ContactPage() {

    // Initialize WOW.js for animations
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();
        }
    }, []);

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">Contact us</h1>
                                <nav className="wow fadeInUp" data-wow-delay="0.25s">
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

            {/* Page Contact Us Start (Contact Info Grid) */}
            <div className="page-contact-us">
                <div className="container">
                    <div className="row">
                        {/* 1. Contact Phone */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp">
                                <div className="icon-box">
                                    <Image src="/images/icon-phone.svg" alt="Phone Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>Contact</h3>
                                    <p>+971 509170635</p>
                                    <p>+91 8448558118</p>
                                </div>
                            </div>
                        </div>

                        {/* 2. Contact Email */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <Image src="/images/icon-mail.svg" alt="Mail Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>Email</h3>
                                    <p>info@globalvisaguy.com</p>
                                    <p>sales@globalvisaguy.in</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. Address */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <Image src="/images/icon-location.svg" alt="Location Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>Address</h3>
                                    <p>Headquarters : Dubai</p>
                                    <p>Gurugram business center</p>
                                    <p>Branch - Delhi&nbsp;and&nbsp;Bangalore</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Time */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <Image src="/images/icon-watch.svg" alt="Clock Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>time</h3>
                                    <p>Mon - Fri, 9 AM - 5 PM</p>
                                    <p>Saturday, 9 AM - 5 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Contact Us End */}

            {/* Contact Form Section Start */}
            <div className="contact-form-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Content Form Content Start */}
                            <div className="contact-form-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">contact information</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Let your wanderlust guide you
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        For all your needs, feel free to reach out to us. Our expert team
                                        is ready to assist you with personalized solutions.
                                    </p>
                                </div>
                            </div>
                            {/* Content Form Content End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Contact Form Start */}
                            <div className="contact-form">
                                <form
                                    id="contactForm"
                                    onSubmit={sendToWhatsApp} // React handler
                                    className="wow fadeInUp"
                                    data-wow-delay="0.4s"
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

                                        <div className="form-group col-md-6 mb-4">
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

                                        <div className="form-group col-md-6 mb-4">
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

                                        <div className="form-group col-md-12 mb-5">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                id="message"
                                                rows="4"
                                                placeholder="Write Message.."
                                            ></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" className="btn-default">send message</button>
                                            <div id="msgSubmit" className="h3 hidden"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Contact Form Start */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form Section End */}
        </>
    );
}