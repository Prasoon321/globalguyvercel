import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1: About */}
                    <div className="col-lg-3 col-md-12">
                        <div className="about-footer">
                            <div className="footer-logo">
                                {/* Use Next.js Image Component for /public/images/logoglobalguy.png */}
                                <Image
                                    src="/images/logoglobalguy.png"
                                    alt="GlobalVisaGuy Logo"
                                    width={150} // Approximate Width
                                    height={40} // Approximate Height
                                />
                            </div>

                            <div className="about-footer-content">
                                <p>Your Global Journey Starts Here Trusted Visa Experts</p>
                            </div>

                            <div className="footer-social-links">
                                <ul>
                                    <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Visa Services */}
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="footer-links">
                            <h3>Visa Services</h3>
                            <ul>
                                {/* Use <Link> for internal navigation */}
                                <li><Link href="/italy-visa">ITALY Visa</Link></li>
                                <li><Link href="/canada-visa">CANADA Visa</Link></li>
                                <li><Link href="/uk-visa">UK Visa</Link></li>
                                <li><Link href="/turkey-visa">TURKEY Visa</Link></li>
                                <li><Link href="/usa-visa">Tourist Visa</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="col-lg-3 col-md-3 col-6">
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/countries">Countries We Serve</Link></li>
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

                            <div className="footer-latest-news-form">
                                {/* Note: Form handling will likely need to be converted to a React component or Server Action */}
                                <form id="latestnewsForm" action="#" method="POST">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control" // class -> className
                                            id="mail"
                                            placeholder="Enter your email"
                                            required=""
                                        />
                                        <button type="submit" className="latestnews-btn">
                                            <Image
                                                src="/images/arrow-accent.svg"
                                                alt="Submit"
                                                width={20} // Approximate Width
                                                height={20} // Approximate Height
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
                                <p>Copyright © 2025 All Rights Reserved.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="footer-menu">
                                <ul>
                                    {/* Use <Link> for internal navigation */}
                                    <li><Link href="/">home</Link></li>
                                    <li><Link href="/about">about us</Link></li>
                                    <li><Link href="/contact">contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}