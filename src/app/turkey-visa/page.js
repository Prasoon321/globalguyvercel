// app/turkey-visa/page.js

import Link from 'next/link';
import Image from 'next/image'; // <-- Added Image component import

export const metadata = {
    title: 'Turkey Visa from UAE | GlobalVisaGuy',
    description: 'Expert guidance for obtaining a Turkey visa or e-Visa from Dubai and the UAE.',
};

export default function TurkeyVisaPage() {
    // Define constants for image size
    const CONTENT_WIDTH = 900;
    const CONTENT_HEIGHT = 500;
    const ICON_SIZE = 25; // For sidebar icons

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">TURKEY</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-1 order-2">
                            <div className="page-single-sidebar">
                                <div className="page-single-form wow fadeInUp">
                                    <h3>Quick contact</h3>
                                    <div className="contact-form">
                                        <form
                                            id="contactForm"
                                            action="#"
                                            method="POST"
                                            data-toggle="validator"
                                            className="wow fadeInUp"
                                            data-wow-delay="0.25s"
                                        >
                                            <div className="row">
                                                <div className="form-group col-md-12 mb-4">
                                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group col-md-12 mb-4">
                                                    <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group col-md-12 mb-4">
                                                    <input type="text" name="phone" className="form-control" id="phone" placeholder="Your Phone" required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group col-md-12 mb-4">
                                                    <textarea name="message" className="form-control" id="message" rows="4" placeholder="Write Message.."></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn-default">send message</button>
                                                    <div id="msgSubmit" className="h3 hidden"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Sidebar CTA Box Start */}
                                <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="sidebar-cta-content">
                                        <h3>how can we help</h3>
                                        <p>If you need any helps, please feel free to contact us.</p>
                                    </div>
                                    <div className="sidebar-cta-contact">
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                {/* FIXED: Converted to Image component. */}
                                                <Image src="/images/icon-phone-accent.svg" alt="Phone Icon" width={ICON_SIZE} height={ICON_SIZE} />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>+91 1234567890</p>
                                            </div>
                                        </div>
                                        <div className="sidebar-cta-contact-item">
                                            <div className="icon-box">
                                                {/* FIXED: Converted to Image component. */}
                                                <Image src="/images/icon-mail-accent.svg" alt="Mail Icon" width={ICON_SIZE} height={ICON_SIZE} />
                                            </div>
                                            <div className="cta-contact-item-content">
                                                <p>info@domain.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Page Single Form End */}

                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col-lg-8 order-lg-2 order-1">
                            <div className="country-single-content">
                                <h2 className="text-anime-style-3">Turkey Visa from UAE</h2>

                                <p className="wow fadeInUp">
                                    Planning a trip to Turkey? Whether you&apos;re visiting for tourism,
                                    education, business, or research, GlobalVisaGuy makes the process of
                                    obtaining a Turkey visa from the UAE smooth and stress-free. From
                                    appointment booking to documentation and processing, we guide you
                                    every step of the way.
                                </p>

                                {/* Country Featured Image Start */}
                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        {/* FIXED: Converted to Image component (External Image). */}
                                        <Image
                                            src="https://visaguy.ae/wp-content/uploads/2021/08/1920x1080-turkey.jpg"
                                            alt="Turkey Visa from Dubai"
                                            width={CONTENT_WIDTH} height={CONTENT_HEIGHT}
                                            unoptimized={true}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    How to Apply for a Turkey Visa from UAE
                                </h3>
                                <ol className="wow fadeInUp" data-wow-delay="0.2s">
                                    <li>
                                        Select the appropriate visa type (Tourist, Student, Business,
                                        etc.)
                                    </li>
                                    <li>
                                        Book an appointment at the VFS Turkey Visa Application Center
                                    </li>
                                    <li>Fill out the Turkey visa application form accurately</li>
                                    <li>Submit the required documents and attend the appointment</li>
                                </ol>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                                    Documents Required for Turkey Visa
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>Completed and signed visa application form</li>
                                    <li>Original passport with minimum 6-month validity</li>
                                    <li>Photocopy of passport (first and last pages)</li>
                                    <li>Passport-size photos with a white background</li>
                                    <li>UAE residence visa valid for at least 3 more months</li>
                                    <li>
                                        Bank statement for the last 3 months (minimum AED 10,000 balance)
                                    </li>
                                    <li>Hotel booking, flight reservation, and travel itinerary</li>
                                    <li>No objection letter from employer or sponsor</li>
                                    <li>Travel insurance with minimum EUR 30,000 coverage</li>
                                    <li>Salary certificate or sponsor’s passport copy</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    Types of Turkish Visas
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>
                                        <strong>Tourist Visa:</strong> Valid for up to 90 days;
                                        single-entry unless otherwise stated.
                                    </li>
                                    <li>
                                        <strong>Business Visa:</strong> Requires documents proving company
                                        activity in Turkey.
                                    </li>
                                    <li>
                                        <strong>Student Visa:</strong> Requires admission letter from a
                                        Turkish school or university.
                                    </li>
                                    <li>
                                        <strong>Residence Visa:</strong> For long-term stays; must
                                        register with Turkish immigration.
                                    </li>
                                    <li>
                                        <strong>Work Visa:</strong> Apply 2 months in advance. Employer
                                        must submit documents to the Turkish Ministry.
                                    </li>
                                    <li>
                                        <strong>Research Visa:</strong> Apply via Turkish Embassy for
                                        archaeological or academic research.
                                    </li>
                                    <li>
                                        <strong>Film Visa:</strong> For commercial/documentary filming,
                                        apply via Turkish Ministry of Culture.
                                    </li>
                                </ul>

                                <div className="country-single-image mt-4 mb-4">
                                    <figure className="image-anime reveal">
                                        {/* FIXED: Converted to Image component (Local Image). */}
                                        <Image
                                            src="/images/country-entry-img-1.jpg"
                                            alt="Turkey Visa Assistance UAE"
                                            width={CONTENT_WIDTH} height={CONTENT_HEIGHT}
                                        />
                                    </figure>
                                </div>

                                <h3 className="text-anime-style-3">Frequently Asked Questions (FAQs)</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.5s">
                                    <strong>Do UAE citizens need a visa for Turkey?</strong><br />
                                    Yes, UAE nationals require a visa or e-Visa to enter Turkey. They
                                    can apply for the e-Visa online for short-term visits.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.55s">
                                    <strong>Do children need a separate visa?</strong><br />
                                    Yes, infants and children must have their own visas to travel to
                                    Turkey.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    <strong>How long does the Turkey visa process take?</strong><br />
                                    The standard processing time is 4 to 7 business days. Delays may
                                    occur if additional documents are requested.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.65s">
                                    <strong>Is the visa fee refundable if my application is rejected?</strong><br />
                                    No, the Turkish immigration authority does not refund visa
                                    application fees after submission.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.7s">
                                    <strong>Can UAE residents apply for a Turkey visa?</strong><br />
                                    Yes. Residents of the UAE can apply through the Turkey Visa
                                    Application Center in Dubai or Abu Dhabi, or apply for an e-Visa
                                    online.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.75s">
                                    <strong>Is there a multiple-entry Turkey visa?</strong><br />
                                    Yes, applicants can request a multiple-entry visa if they have
                                    previously been issued a single-entry visa.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>How is GlobalVisaGuy different from others?</strong><br />
                                    We offer fast, reliable, and professional visa services with a
                                    dedicated team that ensures your documents are submitted correctly
                                    and promptly.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.85s">
                                    <strong>Why should I visit Turkey?</strong><br />
                                    From its rich cuisine and heritage to the stunning scenery across
                                    two continents, Turkey is a destination like no other. Apply now and
                                    start your adventure.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>Can I apply for a Turkey visa using my Emirates ID?</strong><br />
                                    Yes. Your Emirates ID must be valid for at least 3 months beyond
                                    your return date. Our team will guide you through the document
                                    checklist and the process.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.0s">
                                    <Link href="/contact" className="btn-default">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Country Single End */}
        </>
    );
}