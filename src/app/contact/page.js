// app/contact/page.js

import Link from 'next/link';
import Image from 'next/image'; // <-- MUST import Image

export const metadata = {
    title: 'Contact Us | GlobalVisaGuy',
    description: 'Get in touch with the GlobalVisaGuy expert team for personalized visa and immigration assistance.',
};

export default function ContactPage() {
    return (
        <>
            {/* Page Header Start */}
            <div className="page-header bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">Contact us</h1>
                                <nav className="wow fadeInUp" data-wow-delay="0.25s">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                    </ol>
                                </nav>
                            </div>
                            {/* Page Header Box End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            {/* Page Contact Us Start */}
            <div className="page-contact-us">
                <div className="container">
                    <div className="row">
                        {/* Contact Info Item 1: Phone */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp">
                                <div className="icon-box">
                                    {/* FIXED: Converted to Image component. */}
                                    <Image src="/images/icon-phone.svg" alt="Phone Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>contact</h3>
                                    <p>+01 789 852 654</p>
                                    <p>+02 458 458 987</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Item 2: Email */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    {/* FIXED: Converted to Image component. */}
                                    <Image src="/images/icon-mail.svg" alt="Mail Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>email</h3>
                                    <p>info@domainname.com</p>
                                    <p>sales@domainname.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Item 3: Address */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    {/* FIXED: Converted to Image component. */}
                                    <Image src="/images/icon-location.svg" alt="Location Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>address</h3>
                                    <p>1029 Brighton Beach Ave, New York, United States</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Item 4: Time */}
                        <div className="col-lg-3 col-md-6">
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    {/* FIXED: Converted to Image component. */}
                                    <Image src="/images/icon-watch.svg" alt="Watch Icon" width={30} height={30} />
                                </div>
                                <div className="contact-info-content">
                                    <h3>time</h3>
                                    <p>Mon - Fri, 8 AM - 6 AM</p>
                                    <p>Saturday, 8 AM - 4 AM</p>
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
                                {/* Section Title Start */}
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
                                {/* Section Title End */}
                            </div>
                            {/* Content Form Content End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Contact Form Start */}
                            <div className="contact-form">
                                <form
                                    id="contactForm"
                                    action="#" // ACTION needs to be updated to a Next.js API Route or Server Action
                                    method="POST"
                                    data-toggle="validator"
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
                            {/* Contact Form End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form Section End */}

            {/* Google Map Start */}
            <div className="google-map">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Google Map Start */}
                            <div className="google-map-iframe">
                                {/* Note: The src is invalid. You will need to replace this with a valid Google Maps embed URL */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                                    allowFullScreen="" // attribute becomes allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade" // attribute becomes referrerPolicy
                                ></iframe>
                            </div>
                            {/* Google Map End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map End */}
        </>
    );
}