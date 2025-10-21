// app/components/Header.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        // Initialize jQuery-based menu scripts after mount (if used)
        if (typeof window !== "undefined" && window.$) {
            // You can reinitialize any scripts here if needed (optional)
        }
    }, []);

    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link className="navbar-brand" href="/">
                            <Image
                                src="/images/logoglobalguy2.png"
                                alt="Logo"
                                width={180}
                                height={50}
                                priority
                            />
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/countries">
                                            Countries
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Now Box Start */}
                            <div className="contact-now-box d-inline-flex">
                                <div className="icon-box">
                                    <Image
                                        src="/images/icon-phone.svg"
                                        alt="Phone"
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className="contact-now-box-content">
                                    <p>call us now</p>
                                    <h3>
                                        <a href="tel:789987645">(+01) 789 987 645</a>
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
