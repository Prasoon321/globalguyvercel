// app/components/Footer.jsx
"use client"; // REQUIRED because of the client-side logic (localStorage, alert)

import Link from 'next/link';
import Image from 'next/image';
// import { useCallback, useRef } from 'react';

// Client-side function to handle newsletter submission
const handleNewsletterSubscription = (event) => {
    event.preventDefault();

    // Use event.target to access form elements
    const form = event.target;
    const emailInput = form.elements.mail;
    const email = emailInput.value.trim().toLowerCase();

    if (!email) {
        alert("❌ Please enter a valid email.");
        return;
    }

    // Check localStorage for existing emails
    // IMPORTANT: LocalStorage is a browser API and can only be accessed client-side.
    if (typeof window !== 'undefined') {
        const subscribedEmails = JSON.parse(localStorage.getItem("newsletterEmails")) || [];

        if (subscribedEmails.includes(email)) {
            alert("⚠️ You are already subscribed with this email.");
        } else {
            subscribedEmails.push(email);
            localStorage.setItem(
                "newsletterEmails",
                JSON.stringify(subscribedEmails)
            );
            alert("✅ Thank you for subscribing!");
            emailInput.value = ""; // Clear input field
        }
    } else {
        // Fallback for server-side render (shouldn't happen with "use client")
        alert("Client environment not ready.");
    }
};

export default function Footer() {

    // We will use the handleNewsletterSubscription function directly on the form

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1: About */}
                    <div className="col-lg-3 col-md-12">
                        <div className="about-footer">
                            {/* Footer Logo Start: Converted to <Image> with latest Cloudinary URL */}
                            <div className="footer-logo">
                                <Image
                                    // The latest image source from footer.ejs
                                    src="https://res.cloudinary.com/dl3pt7avj/image/upload/v1748626971/yz1agulz7wcupxyqygfx.png"
                                    alt="GlobalVisaGuy Logo"
                                    width={150} // Required dimension
                                    height={40} // Required dimension
                                />
                            </div>
                            {/* Footer Logo End */}

                            <div className="about-footer-content">
                                <p>Your Global Journey Starts Here Trusted Visa Experts</p>
                            </div>

                            {/* Footer Social Link Start (Updated social links) */}
                            <div className="footer-social-links">
                                <ul>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/globalvisaguy?igsh=dnA5M3VuaTRscncz&utm_source=qr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.facebook.com/profile.php?id=61562838842199&mibextid=rS40aB7S9Ucbxw6v"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://youtube.com/@globalvisaguy?si=yZ0_B-ceWavql2qi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.tiktok.com/@jihan.guy?_t=ZS-8xCTJVQ2Qug&_r=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-tiktok"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Footer Social Link End */}
                        </div>
                    </div>

                    {/* Column 2: Visa Services (Updated Links) */}
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="footer-links">
                            <h3>Visa Services</h3>
                            <ul>
                                {/* Links from latest footer.ejs */}
                                <li><Link href="/dubai-visa-change">DUBAI VISA</Link></li>
                                <li><Link href="/india-tour">INDIA PACKAGE</Link></li>
                                <li><Link href="/world-tour-packages">WORLD PACKAGE</Link></li>
                                <li><Link href="/global-visa">GLOBAL VISA</Link></li>
                                <li><Link href="/b2b-holiday-travel-dubai">DUBAI ACTIVITIES</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Quick Links (Updated Links) */}
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                {/* Links from latest footer.ejs */}
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Countries We Serve</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="col-lg-3 col-md-5">
                        <div className="footer-newsletter-box footer-links">
                            <h3>Subscribe Our Newsletter</h3>
                            <p>
                                Enter your email address to get latest updates and offers from us.
                            </p>

                            {/* Newsletter Form: Converted to use the handleNewsletterSubscription function */}
                            <div className="footer-latest-news-form">
                                <form
                                    id="latestnewsForm"
                                    action="#"
                                    method="POST"
                                    onSubmit={handleNewsletterSubscription}
                                >
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            id="mail"
                                            placeholder="Enter your email"
                                            required
                                        />
                                        <button type="submit" className="latestnews-btn">
                                            <Image
                                                src="/images/arrow-accent.svg"
                                                alt="Submit"
                                                width={20}
                                                height={20}
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright Section */}
                <div className="footer-copyright">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="footer-copyright-text">
                                <p>Copyright &copy; 2025 All Rights Reserved.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="footer-menu">
                                <ul>
                                    {/* Footer menu links from EJS */}
                                    <li><Link href="/">home</Link></li>
                                    <li><Link href="/about">about us</Link></li>
                                    <li><Link href="/contact">contact us</Link></li>
                                    <li><Link href="/services">services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}