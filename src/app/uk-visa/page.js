// app/usa-visa/page.js

import Link from 'next/link';
import Image from 'next/image'; // <-- Must import Image for optimization

export const metadata = {
    title: 'US Visa from UAE | GlobalVisaGuy',
    description: 'Expert guidance for the detailed US visa application process, including DS-160 and interview support.',
};

export default function USAVisaPage() {
    // Define constants for image size placeholders
    const CONTENT_WIDTH = 900;
    const CONTENT_HEIGHT = 500;
    const ICON_SIZE = 25;

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">USA</h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">home</Link></li>
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
                        {/* Sidebar (Order 1 for small screens, Order 2 for large screens) */}
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
                                {/* Page Single Form End */}

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
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col-lg-8 order-lg-2 order-1">
                            <div className="country-single-content">
                                <h2 className="text-anime-style-3">US Visa from UAE</h2>

                                <p className="wow fadeInUp">
                                    Planning to travel to the United States from the UAE? Whether you&apos;re
                                    visiting for tourism, business, or family, applying for a US visa
                                    can be a detailed process. At GlobalVisaGuy, we make it simple. Our
                                    experts assist you at every step — from application to interview.
                                </p>

                                {/* Country Featured Image Start */}
                                <div className="country-single-image">
                                    <figure className="image-anime reveal">
                                        {/* FIXED: Converted to Image component (External Image). */}
                                        <Image
                                            src="https://visaguy.ae/wp-content/uploads/2025/07/1920x1080-uk-1024x576.jpg" // Assuming this image path is for the US page
                                            alt="US Visa from UAE"
                                            width={CONTENT_WIDTH} height={CONTENT_HEIGHT}
                                            unoptimized={true}
                                        />
                                    </figure>
                                </div>

                                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                                    Who Can Apply for a US Visa in UAE?
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">
                                    All UAE nationals and residents are eligible to apply for a US visa
                                    through the US Embassy or Consulate in Dubai or Abu Dhabi.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.3s">
                                    Steps to Apply for a US Visa from Dubai
                                </h3>
                                <ol className="wow fadeInUp" data-wow-delay="0.3s">
                                    <li>
                                        Identify the type of US visa you need (Tourist, Business, etc.).
                                    </li>
                                    <li>Complete the DS-160 application form online.</li>
                                    <li>Pay the visa fee via designated methods.</li>
                                    <li>Book a visa interview at the US Embassy or Consulate.</li>
                                    <li>Prepare and organize the required documents.</li>
                                    <li>Attend the visa interview or use Dropbox if eligible.</li>
                                </ol>

                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                                    Required Documents for a US Tourist Visa
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.4s">
                                    <li>DS-160 application confirmation page</li>
                                    <li>Visa interview appointment confirmation</li>
                                    <li>NOC from employer or sponsor</li>
                                    <li>Original passport + residence visa &amp; Emirates ID copy</li>
                                    <li>Bank statements for the last 6 months</li>
                                    <li>
                                        Invitation letter (if invited by family, friends, or a company)
                                    </li>
                                    <li>Passport-size photo (white background)</li>
                                    <li>Trade license copy (for business owners)</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                                    Dropbox Cases: Document Checklist
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.5s">
                                    <li>Original passport with previous US visa</li>
                                    <li>Recent passport-sized photo (white background)</li>
                                    <li>Emirates ID &amp; residence visa copy</li>
                                    <li>Previous US visa copy (if applicable)</li>
                                    <li>DS-160 confirmation page and courier receipt</li>
                                </ul>

                                <h3 className="wow fadeInUp" data-wow-delay="0.6s">
                                    Visa Interview Guidelines
                                </h3>
                                <p className="wow fadeInUp" data-wow-delay="0.6s">
                                    All applicants between 14 and 79 years must attend a visa interview
                                    unless eligible for Dropbox. Make sure to arrive on time — late
                                    arrivals will not be accommodated. You&apos;ll be asked about your
                                    purpose of visit, so ensure your answers match your documents.
                                </p>

                                <h3 className="wow fadeInUp" data-wow-delay="0.7s">
                                    Dropbox Eligibility Criteria
                                </h3>
                                <ul className="wow fadeInUp" data-wow-delay="0.7s">
                                    <li>
                                        Applicants with a US visa that expired within the last 48 months
                                    </li>
                                    <li>Children under 14 whose parents hold valid US visas</li>
                                </ul>

                                <div className="country-single-image mt-4 mb-4">
                                    <figure className="image-anime reveal">
                                        {/* FIXED: Converted to Image component (Local Image). */}
                                        <Image src="/images/country-entry-img-1.jpg" alt="US Visa Support" width={CONTENT_WIDTH} height={CONTENT_HEIGHT} />
                                    </figure>
                                </div>

                                <h3 className="text-anime-style-3">Frequently Asked Questions</h3>

                                <p className="wow fadeInUp" data-wow-delay="0.8s">
                                    <strong>How long does US visa processing take?</strong><br />
                                    After your interview, visa processing usually takes between 5 to 10
                                    working days.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="0.9s">
                                    <strong>Is the visa fee refundable if the application is denied?</strong><br />
                                    No, the visa fee is non-refundable even if the visa is rejected.
                                </p>

                                <p className="wow fadeInUp" data-wow-delay="1.0s">
                                    <strong>Why apply with GlobalVisaGuy?</strong><br />
                                    We simplify the complex US visa application process by guiding you
                                    through document preparation, appointment booking, and interview
                                    support — ensuring a faster and stress-free experience.
                                </p>

                                <div className="about-us-btn wow fadeInUp mt-4" data-wow-delay="1.1s">
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