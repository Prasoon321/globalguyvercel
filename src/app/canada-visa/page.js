// app/canada-visa/page.js

import Link from 'next/link';

export const metadata = {
    title: 'Canada Visa from UAE | GlobalVisaGuy',
    description: 'Expert guidance for obtaining a Canada visa or eTA from Dubai and the UAE.',
};

export default function CanadaVisaPage() {
    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            {/* Page Header Box Start */}
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">CANADA</h1>
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
                        {/* Sidebar (Order 1 for small screens, Order 2 for large screens) - Identical to Australia Page */}
                        <div className="col-lg-4 order-lg-1 order-2">
                            {/* Page Single Sidebar Start */}
                            <div className="page-single-sidebar">

                                {/* Page Single Form Start - Keep form fields, convert classes */}
                                <div className="page-single-form wow fadeInUp">
                                    <h3>Quick contact</h3>

                                    {/* Contact Form Start */}
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

                                {/* Sidebar CTA Box Start - Convert classes, ensure image path is correct */}
                                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="sidebar-cta-content">
                                        <h3>how can we help</h3>
                                        <p>If you need any helps, please feel free to contact us.</p>
                                    </div>
                                    <div className="sidebar-cta-contact">
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                {/* Local image: /public/images/icon-phone-accent.svg */}
                                                <img src="/images/icon-phone-accent.svg" alt="" />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>+91 1234567890</p>
                                            </div>
                                        </div>
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                {/* Local image: /public/images/icon-mail-accent.svg */}
                                                <img src="/images/icon-mail-accent.svg" alt="" />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>info@domain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar CTA Box End */}
                            </div>
                            {/* Page Single Sidebar End */}
                        </div>

                        {/* Main Content */}
                        <div className="col-lg-8 order-lg-2 order-1">
                            {/* Country Single Content Start */}
                            <div className="country-single-content">
                                <h2 className="text-anime-style-3">Canada Visa from UAE</h2>

                                <p className="wow fadeInUp">
                                    Canada remains one of the top destinations for UAE residents looking
                                    to travel for tourism, business, study, or to visit family. Whether
                                    you're a UAE citizen or an expat living in the Emirates, this guide
                                    will walk you through the process of applying for a Canada visa from
                                    Dubai and other cities in the UAE.
                                </p>

                                {/* Country Featured Image Start */}
                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        {/* External image: keeping as <img> for now */}
                                        <img
                                            src="https://visaguy.ae/wp-content/uploads/2023/05/1920x1080-australia.jpg"
                                            alt="Canada Visa from Dubai"
                                        />
                                    </figure>
                                </div>
                                {/* Country Featured Image End */}

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Do UAE Citizens Need a Visa for Canada?
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    UAE passport holders do not require a traditional visa for short
                                    stays in Canada. Instead, they need to apply for an
                                    <strong className="font-weight-bold">Electronic Travel Authorization (eTA)</strong>. The eTA is
                                    quick to obtain online and allows for multiple entries of up to 6
                                    months each.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                                    Documents Required for Canada Visa from UAE
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>
                                        Valid passport (must not expire within 6 months of departure)
                                    </li>
                                    <li>One recent digital passport-sized photo</li>
                                    <li>
                                        Completed Canada visa application form (online or at visa center)
                                    </li>
                                    <li>
                                        Proof of financial support (bank statements, salary slips, etc.)
                                    </li>
                                    <li>Letter explaining purpose and duration of visit</li>
                                    <li>
                                        Optional: Itinerary, travel insurance, and police clearance
                                        certificate
                                    </li>
                                </ul>

                                <p className="wow fadeInUp" data-wow-delay="0.35s">
                                    Requirements may vary depending on your profile. Additional
                                    documents could be requested, so it’s best to consult with an expert
                                    for guidance.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    How to Apply for a Canada Visa from Dubai
                                </h3>
                                <ol className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>Visit the official Government of Canada website</li>
                                    <li>Create an account and choose the correct visa category</li>
                                    <li>
                                        Fill out the application form and upload necessary documents
                                    </li>
                                    <li>Pay the visa or eTA fee online</li>
                                    <li>Schedule biometrics (if required)</li>
                                    <li>Track your application status online</li>
                                </ol>

                                <div className="country-single-image mt-4 mb-4">
                                    <figure className="image-anime reveal">
                                        {/* Local image: /public/images/country-entry-img-1.jpg */}
                                        <img
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Canada Visa Assistance UAE"
                                        />
                                    </figure>
                                </div>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.5s">
                                    <strong>What is a Canada eTA?</strong><br />
                                    An eTA is a visa waiver that allows UAE citizens to enter Canada for
                                    up to 6 months without applying for a visa. It is valid for multiple
                                    entries and is processed entirely online.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.55s">
                                    <strong>Do I need an eTA if I have a UAE passport?</strong><br />
                                    Yes, all UAE citizens must apply for an eTA before entering Canada
                                    for short stays under 6 months.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    <strong>Who is exempt from the eTA?</strong><br />
                                    Individuals who plan to work or study for more than 6 months,
                                    Canadian permanent residents, or citizens do not need an eTA and
                                    must apply through alternative channels.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.65s">
                                    <strong>What types of Canadian visas are available?</strong><br />
                                    Visitor Visa, Student Visa, Work Permit, and Permanent Residency are
                                    the main categories for Canada visa applications from the UAE.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>How long does visa processing take?</strong><br />
                                    Tourist visa processing may take a few weeks to a few months. eTAs
                                    are typically approved within a few hours to a couple of days.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.75s">
                                    <strong>How much does it cost to apply?</strong><br />
                                    The eTA costs CAD 7. A visitor visa costs CAD 100. Additional fees
                                    may apply for biometrics and document processing.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>Can I extend my stay in Canada?</strong><br />
                                    Yes, but you must apply for an extension at least 30 days before
                                    your current visa/eTA expires. Approval is not guaranteed.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.85s">
                                    <strong>Why apply with GlobalVisaGuy?</strong><br />
                                    We simplify your Canada visa journey by providing end-to-end
                                    assistance — from document collection to final submission. Our
                                    experts ensure your application is accurate, timely, and
                                    professionally managed.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="0.9s">
                                    {/* Use Link component and ensure the destination is /contact */}
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