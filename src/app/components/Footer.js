// app/components/Footer.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';

// Client-side function to handle newsletter submission (using localStorage)
const handleNewsletterSubscription = (event) => {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.elements.mail;
    const email = emailInput.value.trim().toLowerCase();

    if (!email) {
        alert("❌ Please enter a valid email.");
        return;
    }

    // Client-side local storage access check
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
        // Fallback for server-side render (though this component is client-side)
        console.warn("Attempted to access localStorage on server.");
    }
};

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1: About */}
                    <div className="col-lg-3 col-md-12">
                        <div className="about-footer">
                            {/* Footer Logo Start: Using <Image /> with Cloudinary URL */}
                            <div className="footer-logo">
                                <Image
                                    src="https://res.cloudinary.com/dl3pt7avj/image/upload/v1748626971/yz1agulz7wcupxyqygfx.png"
                                    alt="GlobalVisaGuy Logo"
                                    width={150}
                                    height={40}
                                />
                            </div>
                            {/* Footer Logo End */}

                            <div className="about-footer-content">
                                <p>Your Global Journey Starts Here Trusted Visa Experts</p>
                            </div>

                            {/* Footer Social Link Start */}
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

                    {/* Column 2: Visa Services */}
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="footer-links">
                            <h3>Visa Services</h3>
                            <ul>
                                {/* Use <Link> for internal navigation */}
                                <li><Link href="/dubai-visa-change">DUBAI VISA</Link></li>
                                <li><Link href="/india-tour">INDIA PACKAGE</Link></li>
                                <li><Link href="/world-tour-packages">WORLD PACKAGE</Link></li>
                                <li><Link href="/global-visa">GLOBAL VISA</Link></li>
                                <li><Link href="/b2b-holiday-travel-dubai">DUBAI ACTIVITIES</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                {/* Use <Link> for internal navigation */}
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

                            {/* Newsletter Form Start */}
                            <div className="footer-latest-news-form">
                                <form
                                    id="latestnewsForm"
                                    // React handler applied here
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
                                            {/* Using <Image /> for the arrow icon */}
                                            <Image
                                                src="/images/arrow-accent.svg"
                                                alt="Submit Arrow"
                                                width={20}
                                                height={20}
                                            />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* Newsletter Form End */}
                        </div>
                    </div>
                </div>

                {/* Footer Copyright Section Start */}
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
                                    <li><Link href="/">home</Link></li>
                                    <li><Link href="/about">about us</Link></li>
                                    <li><Link href="/contact">contact us</Link></li>
                                    <li><Link href="/services">services</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Copyright Section End */}
            </div>
        </footer>
    );
}