// app/singapore-tour/page.jsx
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
    const text = `Singapore-Switzerland Tour Inquiry:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Reset form after sending
    form.reset();

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
};

export default function SingaporeSwitzerlandTourPage() {

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
                                    SINGAPORE-SWITZERLAND TOUR
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
                                        <p>Singapore Visa Price</p>
                                        <h3 style={{ textDecoration: 'line-through' }}>From Rs.2,900</h3>
                                        <h3>To Rs.2,400</h3>
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
                                    30-Day Tour Package – Explore the Beauty of Singapore &amp; Switzerland
                                </h2>

                                <p className="wow fadeInUp">
                                    Embark on a captivating 30-day journey through Singapore and
                                    Switzerland, exploring iconic cities, serene lakes, majestic
                                    mountains, and medieval castles. This tour is curated for travelers
                                    seeking a perfect blend of nature, culture, and luxury. From the
                                    vibrant streets of Singapore to the tranquil Swiss Alps, enjoy
                                    guided tours, scenic train rides, and unforgettable experiences.
                                </p>

                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Singapore Switzerland Tour Package"
                                            width={800} // Set appropriate dimensions
                                            height={500}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Departure &amp; Return Location
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    John F. Kennedy International Airport (New York, USA) – Round Trip
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">What&apos;s Included</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Round-trip Airfare</li>
                                    <li>3 Nights Hotel Accommodation in Singapore</li>
                                    <li>
                                        Multiple Nights in Lucerne, Engelberg, Lausanne (Switzerland)
                                    </li>
                                    <li>Daily Breakfast at All Hotels</li>
                                    <li>All Transportation Within Destination</li>
                                    <li>English-speaking Tour Guide</li>
                                    <li>All Major Entrance Fees</li>
                                    <li>Boat Cruise on Lake Geneva</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    What&apos;s Not Included
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>Guide Service Tips</li>
                                    <li>Driver Gratuities</li>
                                    <li>Private Expenses</li>
                                    <li>Room Service Charges</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">Complementaries</h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.5s">
                                    <li>Tour T-shirt</li>
                                    <li>Umbrella</li>
                                    <li>Sunscreen</li>
                                    <li>Entrance Fee Souvenirs</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.6s">What to Expect</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    This comprehensive itinerary is designed to offer a balanced mix of
                                    sightseeing, relaxation, and cultural immersion. Visit Zürich&apos;s old
                                    town, stroll along the shores of Neuchâtel, tour medieval castles
                                    like Château de Chillon, and experience Europe&apos;s highest railway at
                                    Jungfraujoch. Each day is packed with unforgettable sights and
                                    enriching experiences, curated to ensure maximum comfort and
                                    enjoyment.
                                </p>

                                <ul className="wow fadeInUp" data-wow-delay="0.7s">
                                    <li>Evening walk through Lucerne and lakeside townscapes</li>
                                    <li>Explore Geneva, Biel, Neuchâtel, Interlaken, and Engelberg</li>
                                    <li>Excursion to Jungfrau Massif and the Ice Palace</li>
                                    <li>Boat cruise and market visit in Lausanne</li>
                                </ul>

                                <h3 className="text-anime-style-3">Itinerary Highlights</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>Day 1:</strong> Arrival in Lucerne, evening welcome walk and
                                    dinner
                                </p>
                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>Day 2:</strong> Zurich to Geneva via Biel and Neuchâtel with
                                    guided tours
                                </p>
                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                    <strong>Day 3:</strong> Travel to Engelberg, Abbey tour, and free
                                    village walk
                                </p>
                                <p className="wow fadeInUp" data-wow-delay="1.1s">
                                    <strong>Day 4:</strong> Full-day trip to Jungfraujoch – Top of
                                    Europe
                                </p>
                                <p className="wow fadeInUp" data-wow-delay="1.2s">
                                    <strong>Day 5:</strong> Market day in Lausanne, boat cruise to
                                    Château de Chillon
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.3s">
                                    <Link href="/contact" className="btn-default">
                                        Book Singapore-Switzerland Tour
                                    </Link>
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