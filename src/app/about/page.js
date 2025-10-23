// app/about/page.js

import Link from 'next/link';
import Image from 'next/image'; // <-- Added Image component import

export const metadata = {
    title: 'About Us | GlobalVisaGuy - Expert Visa Consultancy',
    description: 'Learn about GlobalVisaGuy’s two decades of experience redefining visa and immigration services.',
};

export default function AboutPage() {
    // Define standard placeholder width/height for local images
    const IMAGE_SIZE = 350;
    const ICON_SIZE = 40;

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">About us</h1>
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

            {/* About Us Section Start */}
            <div className="about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {/* About Us Images Start */}
                            <div className="about-us-images">
                                {/* About Image 1 Start */}
                                <div className="about-img-1">
                                    <figure className="image-anime reveal">
                                        {/* FIXED: Image Component */}
                                        <Image src="/images/about-img-1.jpg" alt="Visa consultancy team" width={IMAGE_SIZE} height={IMAGE_SIZE} />
                                    </figure>
                                </div>
                                {/* About Image 1 End */}

                                {/* About Image 2 Start */}
                                <div className="about-img-2">
                                    <figure className="image-anime reveal">
                                        {/* FIXED: Image Component */}
                                        <Image src="/images/about-img-2.jpg" alt="GlobalVisaGuy office" width={250} height={200} />
                                    </figure>
                                </div>
                                {/* About Image 2 End */}

                                {/* Success Rating Box Start */}
                                <div className="success-rating-box">
                                    <div className="Success-rating-content">
                                        <h2><span className="counter">100</span>%</h2>
                                        <p>Visa approval success rate</p>
                                    </div>
                                </div>
                                {/* Success Rating Box End */}
                            </div>
                            {/* About Us Images End */}
                        </div>

                        <div className="col-lg-6">
                            {/* About Us Content Start */}
                            <div className="about-us-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">Who We Are</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">
                                        Redefining Visa &amp; Immigration Services
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        GlobalVisaGuy is a leading visa and immigration consultancy based
                                        in the UAE. With over two decades of experience, we&apos;ve helped
                                        thousands of clients navigate the complexities of international
                                        travel and relocation. Our mission is to simplify the visa process
                                        through transparency, professionalism, and personalized support.
                                    </p>
                                </div>
                                {/* Section Title End */}

                                {/* About Us List Start */}
                                <div className="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Flexible consultation hours to suit your schedule</li>
                                        <li>Dedicated visa experts with global experience</li>
                                        <li>Personalized support tailored to your case</li>
                                    </ul>
                                </div>
                                {/* About Us List End */}

                                {/* About Experience Box Start */}
                                <div className="about-experience-box">
                                    <div className="about-experience-image">
                                        <figure className="image-anime reveal">
                                            {/* FIXED: Image Component */}
                                            <Image
                                                src="/images/about-experience-image.jpg"
                                                alt="25 years of visa experience"
                                                width={200} height={150} // Placeholder, adjust as needed
                                            />
                                        </figure>
                                    </div>
                                    <div className="about-experience-content">
                                        <p>
                                            <span className="counter">25</span>+ years of successfully managing
                                            student, tourist, business, and work visas across the globe.
                                        </p>
                                    </div>
                                </div>
                                {/* About Experience Box End */}

                                {/* About Us Button Start */}
                                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.6s">
                                    <Link href="/contact" className="btn-default">Contact Now</Link>
                                </div>
                                {/* About Us Button End */}
                            </div>
                            {/* About Us Content End */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Features Start */}
            <div className="our-features">
                <div className="container">
                    <div className="row section-row align-items-center">
                        <div className="col-lg-6">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">Why Choose Us</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    Expertise, Efficiency, and Personalized Guidance
                                </h2>
                            </div>
                            {/* Section Title End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Features Title Content Start */}
                            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                                <p>
                                    At GlobalVisaGuy, we turn complex visa procedures into smooth
                                    journeys. Whether you&apos;re traveling for business, study, or leisure,
                                    our comprehensive services are tailored to meet your exact needs.
                                </p>
                            </div>
                            {/* Features Title Content End */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            {/* Features Item Start */}
                            <div className="features-item wow fadeInUp">
                                <div className="icon-box">
                                    {/* FIXED: Image Component */}
                                    <Image src="/images/icon-features-1.svg" alt="Expert Consultation" width={ICON_SIZE} height={ICON_SIZE} />
                                </div>
                                <div className="features-content">
                                    <h3>Expert Visa Consultation</h3>
                                    <p>
                                        Our experienced consultants provide in-depth guidance on
                                        documentation, eligibility, and embassy expectations—ensuring a
                                        higher success rate for your visa.
                                    </p>
                                </div>
                                <div className="features-btn">
                                    <a href="/contact" className="readmore-btn">read more</a>
                                </div>
                            </div>
                            {/* Features Item End */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* Features Item Start */}
                            <div className="features-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    {/* FIXED: Image Component */}
                                    <Image src="/images/icon-features-2.svg" alt="Custom Visa Solutions" width={ICON_SIZE} height={ICON_SIZE} />
                                </div>
                                <div className="features-content">
                                    <h3>Tailored Visa Solutions</h3>
                                    <p>
                                        We understand that every applicant is unique. That&apos;s why we build
                                        custom strategies based on your profile, travel goals, and visa
                                        category.
                                    </p>
                                </div>
                                <div className="features-btn">
                                    <a href="/contact" className="readmore-btn">read more</a>
                                </div>
                            </div>
                            {/* Features Item End */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* Features Item Start */}
                            <div className="features-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    {/* FIXED: Image Component */}
                                    <Image src="/images/icon-features-3.svg" alt="Multilingual Support" width={ICON_SIZE} height={ICON_SIZE} />
                                </div>
                                <div className="features-content">
                                    <h3>Multilingual Assistance</h3>
                                    <p>
                                        Our team speaks multiple languages, making communication seamless
                                        and efficient—ensuring you&apos;re fully supported, no matter your
                                        background.
                                    </p>
                                </div>
                                <div className="features-btn">
                                    <a href="/contact" className="readmore-btn">read more</a>
                                </div>
                            </div>
                            {/* Features Item End */}
                        </div>

                        <div className="col-lg-12">
                            {/* Features Contact Text Start */}
                            <div className="features-contact-text wow fadeInUp" data-wow-delay="0.6s">
                                <p>
                                    Need help with your visa or immigration process?
                                    <a
                                        href="https://wa.me/918448558118"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Contact us today</a
                                    >
                                </p>
                            </div>
                            {/* Features Contact Text End */}
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section End */}
        </>
    );
}