// app/qatar-quarantine-package/page.jsx
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
    const text = `Qatar Quarantine Package Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Reset form after sending
    form.reset();

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
};

export default function QatarQuarantinePage() {

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
                                    QATAR QURANTINE PACKAGE
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
                                        <p>Qatar Quarantine package</p>
                                        <h3 style={{ textDecoration: 'line-through' }}>From Rs.75,000</h3>
                                        <h3>To Rs.71,000</h3>
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
                                <h2 className="text-anime-style-3">
                                    15-Day Quarantine Package via Qatar (Travel to Saudi Arabia)
                                </h2>

                                <p className="wow fadeInUp">
                                    Travel to Saudi Arabia through Qatar with our specially designed
                                    15-day quarantine package. Perfect for individuals returning to
                                    Saudi after a vacation in India, this package includes hotel stay,
                                    meals, PCR tests, and full EHTERAZ support. Qatar, a GCC country
                                    with strong ties to Saudi Arabia, allows onward travel after
                                    quarantine is completed.
                                </p>

                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Qatar Quarantine Package"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Departure &amp; Return Location
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    Travel to Saudi Arabia via Doha, Qatar — Available in July, August,
                                    and September
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">What&apos;s Included</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>3-Star Hotel Accommodation (14 nights)</li>
                                    <li>Daily Breakfast, Lunch, and Dinner</li>
                                    <li>Airport Pickup and Drop in Qatar</li>
                                    <li>PCR Tests (Arrival &amp; End of Quarantine)</li>
                                    <li>EHTERAZ Registration &amp; Support</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    What&apos;s Not Included
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>Airfare (Can be arranged at additional cost)</li>
                                    <li>Room Service &amp; Personal Expenses</li>
                                    <li>Tips for Hotel/Service Staff</li>
                                    <li>Travel Insurance (Optional via tripsurance.com)</li>
                                    <li>Dummy Return Ticket (Optional via dummyticket.com)</li>
                                    <li>Sightseeing Tours</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">What to Expect</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.5s">
                                    Once you arrive in Qatar, you will undergo a PCR test at the airport
                                    (approx. QR 300 / INR 6000). You will then quarantine in a hotel for
                                    14 days in single or twin-sharing rooms. Our team will assist with
                                    EHTERAZ app support and approvals. After successful completion,
                                    travelers may continue to Saudi Arabia as per updated travel norms.
                                </p>
                                <ul className="wow fadeInUp" data-wow-delay="0.6s">
                                    <li>
                                        Full support from our team from arrival to quarantine completion
                                    </li>
                                    <li>On-arrival Qatar visa assistance with hotel voucher</li>
                                    <li>Qatar entry allowed for fully vaccinated Indian citizens</li>
                                </ul>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>1. What is EHTERAZ?</strong><br />
                                    EHTERAZ is a health monitoring application required by Qatar
                                    authorities. PCR test results must be uploaded for entry approval
                                    before traveling.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>2. What type of food is provided during quarantine?</strong><br />
                                    Basic meal kits including breakfast, lunch, and dinner are provided
                                    with limited options in parcel format.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>3. How many PCR tests are required?</strong><br />
                                    Two PCR tests: one upon arrival and one after 14 days. The second
                                    test is included in the package.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                    <strong>4. Can vaccinated travelers enter Qatar?</strong><br />
                                    Yes, travelers who have received two doses of approved vaccines and
                                    completed 14 days post-vaccination are eligible for on-arrival visa
                                    in Qatar.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.1s">
                                    <strong>Approved Vaccines:</strong><br />
                                    Pfizer-BioNTech, Moderna, AstraZeneca, Johnson &amp; Johnson, Covishield
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.2s">
                                    <a href="/contact" className="btn-default">
                                        Book Qatar Quarantine Package
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