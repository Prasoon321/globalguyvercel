// app/components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        // This useEffect is kept to allow client-side scripts (like SlickNav 
        // for the responsive menu) to initialize properly after the component mounts.
        // If you were using any custom jQuery menu script, it would be initialized here.
        if (typeof window !== "undefined" && window.$) {
            // Example: window.$('#menu').slicknav(); 
            // The actual menu initialization is likely in your 'function.js' file.
        }
    }, []);

    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">

                        {/* Logo Start: Converted <img> to <Image> and using the latest Cloudinary URL */}
                        <Link className="navbar-brand" href="/">
                            <Image
                                // The latest image source from header.ejs
                                src="https://res.cloudinary.com/dl3pt7avj/image/upload/v1748626894/hp2knneb8bdevl5ds6fh.png"
                                alt="Logo"
                                // Add appropriate width and height for Next.js Image
                                width={180}
                                height={50}
                                priority // High priority for the main logo
                            />
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start (Updated Navigation links) */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/global-visa">Global Visa</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/b2b-holiday-travel-dubai">
                                            Dubai Excursion
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Now Box Start (Updated phone number and icon) */}
                            <div className="contact-now-box d-inline-flex">
                                <div className="icon-box">
                                    <Image
                                        src="/images/icon-phone.svg"
                                        alt="Phone Icon"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className="contact-now-box-content">
                                    <p>Call Us Now</p>
                                    <h3>
                                        <a href="tel:+971 509170635">+971 509170635</a>
                                    </h3>
                                </div>
                            </div>
                            {/* Contact Now Box End */}

                        </div>
                        {/* Main Menu End */}

                        <div className="navbar-toggle"></div>
                    </div>
                </nav>

                <div className="responsive-menu"></div>
            </div>
        </header>
    );
}