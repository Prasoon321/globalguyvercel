// app/australia-visa/page.js

import Link from 'next/link';
// Optional: If you want to use Next.js Image component for optimization,
// you would import it and wrap your images.
// import Image from 'next/image'; 

export const metadata = {
    title: 'Australia Visa from UAE | GlobalVisaGuy',
    description: 'Expert guidance for obtaining an Australia visa from Dubai and the UAE.',
};

export default function AustraliaVisaPage() {
    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">AUSTRALIA</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        {/* Use Link component */}
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

            {/* Page Country Single Start */}
            <div className="page-country-single">
                <div className="container">
                    <div className="row">
                        {/* Sidebar (Order 1 for small screens, Order 2 for large screens) */}
                        <div className="col-lg-4 order-lg-1 order-2">
                            {/* Page Single Sidebar Start */}
                            <div className="page-single-sidebar">

                                {/* Page Single Form Start */}
                                <div className="page-single-form wow fadeInUp">
                                    <h3>Quick contact</h3>

                                    {/* Contact Form Start - Note: Form submission needs a backend handler (API Route or Server Action) */}
                                    <div className="contact-form">
                                        <form
                                            id="contactForm"
                                            action="#"
                                            method="POST"
                                            data-toggle="validator"
                                            className="wow fadeInUp" // class -> className
                                            data-wow-delay="0.25s"
                                        >
                                            <div className="row">
                                                <div className="form-group col-md-12 mb-4">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control" // class -> className
                                                        id="name"
                                                        placeholder="Your Name"
                                                        required
                                                    />
                                                    <div className="help-block with-errors"></div> {/* class -> className */}
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
                                                    <div className="help-block with-errors"></div>
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
                                                    <div className="help-block with-errors"></div>
                                                </div>

                                                <div className="form-group col-md-12 mb-4">
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
                                                    <button type="submit" className="btn-default">
                                                        send message
                                                    </button>
                                                    <div id="msgSubmit" className="h3 hidden"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Contact Form End */}
                                </div>
                                {/* Page Single Form End */}

                                {/* Sidebar CTA Box Start */}
                                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                    {/* Sidebar CTA Content Start */}
                                    <div className="sidebar-cta-content">
                                        <h3>how can we help</h3>
                                        <p>If you need any helps, please feel free to contact us.</p>
                                    </div>
                                    {/* Sidebar CTA Content End */}

                                    {/* Sidebar CTA Contact Start */}
                                    <div className="sidebar-cta-contact">
                                        {/* Sidebar CTA Contact Item Start */}
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                {/* Local image: /public/images/icon-phone-accent.svg */}
                                                <img src="/images/icon-phone-accent.svg" alt="" />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>+91 1234567890</p>
                                            </div>
                                        </div>
                                        {/* Sidebar CTA Contact Item End */}

                                        {/* Sidebar CTA Contact Item Start */}
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                {/* Local image: /public/images/icon-mail-accent.svg */}
                                                <img src="/images/icon-mail-accent.svg" alt="" />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>info@domain.com</p>
                                            </div>
                                        </div>
                                        {/* Sidebar CTA Contact Item End */}
                                    </div>
                                    {/* Sidebar CTA Contact End */}
                                </div>
                                {/* Sidebar CTA Box End */}
                            </div>
                            {/* Page Single Sidebar End */}
                        </div>

                        {/* Main Content */}
                        <div className="col-lg-8 order-lg-2 order-1">
                            {/* Country Single Content Start */}
                            <div className="country-single-content">
                                <h2 className="text-anime-style-3">Australia Visa from UAE</h2>

                                <p className="wow fadeInUp">
                                    Planning to visit Australia from Dubai or elsewhere in the UAE?
                                    Whether you're traveling for tourism, business, or study,
                                    GlobalVisaGuy makes the process easy. With expert guidance, document
                                    verification, and complete application handling, we’re your trusted
                                    partner in getting an Australia visa from the UAE.
                                </p>

                                {/* Country Featured Image Start */}
                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        {/* External image: keeping as <img> for now */}
                                        <img
                                            src="https://visaguy.ae/wp-content/uploads/2023/05/1920x1080-australia.jpg"
                                            alt="Australia Visa from Dubai UAE"
                                        />
                                    </figure>
                                </div>
                                {/* Country Featured Image End */}

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    How to Apply for an Australia Visa from Dubai
                                </h3>
                                <ol className="wow fadeInUp" data-wow-delay="0.2s">
                                    <li>Select your visa category: tourist, student, or business</li>
                                    <li>Fill out the application form online with accurate details</li>
                                    <li>Pay the visa fee securely online</li>
                                    <li>Upload required documents (passport, photo, etc.)</li>
                                    <li>
                                        Our team reviews your application and submits it to the embassy
                                    </li>
                                    <li>Receive updates and tracking until visa decision is made</li>
                                </ol>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                                    Documents Required for Australia Visa
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Scanned copies of current and old passports (used pages)</li>
                                    <li>Digital passport-sized photograph (white background)</li>
                                    <li>Emirates ID copy</li>
                                    <li>Marriage certificate (if applicable)</li>
                                    <li>Children’s birth certificates (if traveling with children)</li>
                                    <li>Tenancy contract (proof of residence)</li>
                                    <li>NOC and salary certificate from employer</li>
                                    <li>Trade license (for business owners)</li>
                                    <li>6-month bank statement (original and stamped)</li>
                                    <li>Additional proof of income or investments</li>
                                </ul>

                                <p className="wow fadeInUp" data-wow-delay="0.35s">
                                    *Note: Additional documents may be requested based on your profile
                                    or visa type.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    Get Your Australia Tourist Visa from Dubai
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.4s">
                                    Planning a holiday in Australia? Let us handle your tourist visa
                                    with complete support — from documentation to embassy coordination.
                                    We’ll help you avoid delays and ensure your application is submitted
                                    correctly the first time.
                                </p>

                                <div className="country-single-image mt-4 mb-4">
                                    <figure className="image-anime reveal">
                                        {/* Local image: /public/images/country-entry-img-1.jpg */}
                                        <img
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Australia Visa Assistance UAE"
                                        />
                                    </figure>
                                </div>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.5s">
                                    <strong>1. How long does it take to get an Australia visa?</strong><br />
                                    Visa processing typically takes 15 to 35 working days depending on
                                    the visa type and embassy load.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.55s">
                                    <strong>2. What is the cost of an Australia visa from UAE?</strong><br />
                                    The fee varies by visa type. Our team will guide you through the
                                    cost during the application process.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    <strong>3. Can non-residents apply from Dubai?</strong><br />
                                    You must hold a valid UAE residence visa and provide proof of
                                    residency to apply from Dubai.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.65s">
                                    <strong>4. Can I get an Australia visa urgently?</strong><br />
                                    In some cases, faster processing may be available. Contact our
                                    consultants for priority application options.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>5. How long can I stay in Australia with a tourist visa?</strong><br />
                                    Tourist visas allow stays of 3, 6, or 12 months depending on your
                                    travel purpose and visa approval.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.75s">
                                    <strong>6. What are the main requirements for an Australia visitor visa?</strong><br />
                                    A valid passport, visa application, proof of financial capacity,
                                    return plans, and ties to the UAE (job or family).
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>7. Why choose GlobalVisaGuy for your visa?</strong><br />
                                    We eliminate errors, reduce wait time, and ensure you meet all
                                    embassy requirements. We handle your visa end-to-end with
                                    personalized support.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="0.9s">
                                    {/* Use Link component, and fix the destination: it should be /contact */}
                                    <Link href="/contact" className="btn-default">Apply Now</Link>
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