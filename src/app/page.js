// app/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect } from 'react';

// Client-side function to handle the WhatsApp Contact Form submission
const sendWhatsAppMessage = (event) => {
  event.preventDefault(); // Stop actual form submission

  // Access form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("❌ Please fill in all the fields.");
    return;
  }

  // Construct the WhatsApp message
  const fullMessage = `Hello, I would like to inquire about a free visa assessment:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappNumber = "918448558118";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank"); // Open WhatsApp in new tab
  document.getElementById("contactForm").reset(); // Clear form fields
};


export default function HomePage() {

  // NOTE: This useEffect is critical for initializing WOW.js (animations) 
  // and the Counter scripts, which are loaded in layout.js.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.WOW && window.$) {
      // Initialize WOW.js for animations
      new window.WOW({ live: false }).init();

      // Initialize Counter scripts (jQuery dependent)
      window.$('.counter').counterUp({
        delay: 10,
        time: 1000
      });

      // Ensure other animation libraries like GSAP/SplitText 
      // used for text-anime-style-3 are initialized if needed.
    }
  }, []);

  return (
    <>
      {/* Hero Section Start */}
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Hero Content Start */}
              <div className="hero-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">Your Gateway to Global Visas</h3>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Hassle-Free Visa Assistance for Every Journey
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    At GlobalVisaGuy, we simplify your visa process with expert
                    guidance, fast-track services, and end-to-end documentation
                    support. Whether it&apos;s for tourism, business, or education — we&apos;ve
                    got your back.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Hero Button Start */}
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/services" target="_blank" className="btn-default">
                    Explore Services
                  </Link>
                  <a
                    href="https://wa.me/918448558118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-default"
                  >
                    Get a Free Consultation
                  </a>
                </div>
                {/* Hero Button End */}
              </div>
              {/* Hero Content End */}
            </div>

            <div className="col-lg-6">
              {/* Hero Images Start: All <img> converted to <Image /> */}
              <div className="hero-images">
                {/* Country Circle Image Start */}
                <div className="country-circle-img">
                  <Image
                    src="/images/hero-country-circle-img.png"
                    alt="Countries Icon"
                    width={500} // Set appropriate dimensions
                    height={500}
                  />
                </div>
                {/* Country Circle Image End */}

                {/* Hero Image Start */}
                <div className="hero-image">
                  <figure className="image-anime">
                    <Image src="/images/hero-image.jpg" alt="Visa Support Visual" width={550} height={400} />
                  </figure>

                  {/* Country Flag Image Start */}
                  <div className="country-flag-img-1">
                    <Image src="/images/hero-country-flag-img-1.svg" alt="Flag 1" width={80} height={80} />
                  </div>
                  {/* Country Flag Image End */}

                  {/* Country Flag Image Start */}
                  <div className="country-flag-img-2">
                    <Image src="/images/hero-country-flag-img-2.svg" alt="Flag 2" width={80} height={80} />
                  </div>
                  {/* Country Flag Image End */}
                </div>
                {/* Hero Image End */}
              </div>
              {/* Hero Images End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* --- */}

      {/* Scrolling Ticker Section Start: All <img> converted to <Image /> */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          {/* First Scrolling Content Block (Duplicated in EJS for the effect) */}
          <div className="scrolling-content">
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dubai UAE Visas</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Worldwide Visit Visas</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />All Visa Prices</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />US Visa Service</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Saudi Visa Services</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />UK Visa Services</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />World Visit Visa Services from GCC Countries</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Air Tickets, Hotel Bookings &amp; Insurance</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Hajj, Umrah Package &amp; Umrah Visa</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />VFS Appointments Worldwide</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dummy Air Tickets &amp; Hotel Bookings</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />More Useful Services</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Tour Packages</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dubai Tour Packages</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />New Year Celebration in Dubai</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />World Wide Tours</span>
          </div>
          {/* Second Scrolling Content Block */}
          <div className="scrolling-content">
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dubai UAE Visas</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Worldwide Visit Visas</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />All Visa Prices</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />US Visa Service</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Saudi Visa Services</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />UK Visa Services</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />World Visit Visa Services from GCC Countries</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Air Tickets, Hotel Bookings &amp; Insurance</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Hajj, Umrah Package &amp; Umrah Visa</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />VFS Appointments Worldwide</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dummy Air Tickets &amp; Hotel Bookings</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />More Useful Services</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Tour Packages</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dubai Tour Packages</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />New Year Celebration in Dubai</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />World Wide Tours</span>
          </div>
        </div>
      </div>
      {/* Scrolling Ticker Section End */}

      {/* --- */}

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* About Us Images Start: All <img> converted to <Image /> */}
              <div className="about-us-images">
                {/* About Image 1 Start */}
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <Image src="/images/about-img-1.jpg" alt="Our Team at Work" width={300} height={400} />
                  </figure>
                </div>
                {/* About Image 1 End */}

                {/* About Image 2 Start */}
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <Image src="/images/about-img-2.jpg" alt="Client Visa Success" width={250} height={200} />
                  </figure>
                </div>
                {/* About Image 2 End */}

                {/* Success Rating Box Start (Counter relies on client-side script) */}
                <div className="success-rating-box">
                  <div className="Success-rating-content">
                    <h2><span className="counter">100</span>%</h2>
                    <p>visa application success rate</p>
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
                  <h3 className="wow fadeInUp">who we are</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Empowering Your Global Journey with Expertise
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    At GlobalVisaGuy, we&apos;re more than just visa consultants — we are
                    your partners in exploring global opportunities. From student and
                    tourist visas to work permits and permanent residency, our team
                    provides transparent, tailored solutions that help thousands of
                    clients travel with confidence.
                  </p>
                </div>
                {/* Section Title End */}

                {/* About Us List Start */}
                <div className="about-us-list wow fadeInUp" data-wow-delay="0.4s">
                  <ul>
                    <li>Personalized guidance for every visa type</li>
                    <li>Transparent, ethical, and efficient process</li>
                    <li>Available support through phone, chat, and email</li>
                  </ul>
                </div>
                {/* About Us List End */}

                {/* About Experience Box Start (Counter relies on client-side script) */}
                <div className="about-experience-box">
                  <div className="about-experience-image">
                    <figure className="image-anime reveal">
                      <Image
                        src="/images/about-experience-image.jpg"
                        alt="GlobalVisaGuy Experience"
                        width={100}
                        height={100}
                      />
                    </figure>
                  </div>
                  <div className="about-experience-content">
                    <p>
                      <span className="counter">25</span>+ years of visa and immigration
                      experience helping clients across 40+ countries.
                    </p>
                  </div>
                </div>
                {/* About Experience Box End */}

                {/* About Us Button Start */}
                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.6s">
                  <Link href="/services" className="btn-default">learn more</Link>
                </div>
                {/* About Us Button End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* --- */}

      {/* Our Services Section Start: All <img> converted to <Image /> */}
      <div className="our-services">
        <div className="container">
          {/* ... Section Title content ... */}
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">how we assist our clients</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  End-to-End Visa &amp; Immigration Services
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  From choosing the right visa type to final approval, GlobalVisaGuy
                  provides personalized support every step of the way. Our expert
                  consultants make your journey stress-free and successful.
                </p>
              </div>
            </div>
          </div>
          {/* ... Service Items ... */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <Image src="/images/icon-services-1.svg" alt="Dubai Visa Icon" width={60} height={60} />
                </div>
                <div className="service-content">
                  <h3>Dubai UAE Visas</h3>
                  <p>
                    Fast and reliable visa services for Dubai, tailored for tourists,
                    families, and business travelers. Hassle-free approvals.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/dubai-visa-change" className="readmore-btn">learn more</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <Image src="/images/icon-services-2.svg" alt="Worldwide Visa Icon" width={60} height={60} />
                </div>
                <div className="service-content">
                  <h3>Global Visa</h3>
                  <p>
                    Apply for visit visas to the USA, UK, Europe, and more. Full
                    support with documentation, appointments, and embassy submissions.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/global-visa" className="readmore-btn">learn more</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <Image src="/images/icon-services-3.svg" alt="Tourist Visa Icon" width={60} height={60} />
                </div>
                <div className="service-content">
                  <h3>Dubai Freelance Visa</h3>
                  <p>
                    Our freelance visa packages offer hassle-free setup, legal residency, and the freedom to work independently in the UAE. Ideal for creatives, consultants, and digital nomads ready to thrive.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/dubai-freelance" className="readmore-btn">learn more</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <Image src="/images/icon-services-4.svg" alt="Umrah Package Icon" width={60} height={60} />
                </div>
                <div className="service-content">
                  <h3>World Tour Packages</h3>
                  <p>
                    From tropical beaches to iconic cityscapes, our expertly crafted
                    world tour packages offer unforgettable experiences for every kind
                    of traveler. Let us handle the planning while you focus on making
                    memories.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/world-tour-packages" className="readmore-btn">learn more</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="service-contact-text wow fadeInUp" data-wow-delay="0.8s">
                <p>
                  Unsure which visa fits your profile?
                  <Link href="/services">Talk to an expert now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* --- */}

      {/* Why Choose Us Section Start: All <img> converted to <Image /> */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="why-choose-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose globalvisaguy</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Trusted. Transparent. Tailored to You.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Navigating immigration rules can be complex — that&apos;s why
                    GlobalVisaGuy makes it simple. With decades of experience, proven
                    success, and a client-first mindset, we&apos;re here to make your
                    global dreams a reality.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Why Choose Content Body Start */}
                <div className="why-choose-content-body">
                  {/* Why Choose Item 1 */}
                  <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-1.svg" alt="Legal Success Icon" width={60} height={60} />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>99% Visa Approval Success</h3>
                      <p>
                        Our immigration experts ensure every detail is covered, giving
                        you the best possible chance at visa approval.
                      </p>
                    </div>
                  </div>
                  {/* Why Choose Item 2 */}
                  <div className="why-choose-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-2.svg" alt="Document Support Icon" width={60} height={60} />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Complete Document Guidance</h3>
                      <p>
                        We guide you through every document needed — no confusion, no
                        missing forms, just streamlined processing.
                      </p>
                    </div>
                  </div>
                  {/* Why Choose Item 3 */}
                  <div className="why-choose-item wow fadeInUp" data-wow-delay="0.8s">
                    <div className="icon-box">
                      <Image src="/images/icon-why-choose-3.svg" alt="Client Support Icon" width={60} height={60} />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Dedicated Client Support</h3>
                      <p>
                        Reach our team via phone, email, or WhatsApp — we&apos;re here when
                        you need us, from start to stamp.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Why Choose Content Body End */}
              </div>
            </div>

            <div className="col-lg-7">
              <div className="why-choose-image">
                {/* Apply Now Image Start */}
                <div className="apply-now-img">
                  <Image src="/images/apply-now-circle-img.svg" alt="Apply Now Icon" width={100} height={100} />
                </div>

                {/* Why Choose Image 1 Start */}
                <div className="why-choose-img-1">
                  <figure className="image-anime reveal">
                    <Image src="/images/why-choose-img-1.jpg" alt="Visa Consultant Meeting" width={400} height={500} />
                  </figure>
                </div>

                {/* Why Choose Image 2 Start */}
                <div className="why-choose-img-2">
                  <figure className="image-anime reveal">
                    <Image src="/images/why-choose-img-2.jpg" alt="Happy Client" width={200} height={200} />
                  </figure>
                </div>

                {/* Experience Counter Box Start (Counter relies on client-side script) */}
                <div className="experience-counter-box">
                  <h2><span className="counter">24</span></h2>
                  <p>Years of Excellence</p>
                </div>
                {/* Experience Counter Box End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* --- */}

      {/* Customer Benefit Ticker Start: All <img> converted to <Image /> */}
      <div className="our-scrolling-ticker customer-benefit-ticker">
        <div className="scrolling-ticker-box">
          <div className="scrolling-content">
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Free Visa Assessment – Apply Now</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />100% Document Support for Every Client</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Track Your Application in Real-Time</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Dedicated Advisors for Every Case</span>
          </div>

          <div className="scrolling-content">
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />24/7 Support via WhatsApp &amp; Email</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Visa Consultation with Experts – Book Free</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Tailored Visa Strategies for Your Country</span>
            <span><Image src="/images/asterisk-icon.svg" alt="Asterisk" width={16} height={16} />Fast-Track Options Available – Ask Us</span>
          </div>
        </div>
      </div>
      {/* Customer Benefit Ticker End */}

      {/* --- */}

      {/* CTA Box Start: WhatsApp Form Converted */}
      <div className="cta-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/* CTA Box Content Start */}
              <div className="cta-box-content">
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">start your journey with us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Have questions? We&apos;re here to help.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Whether you&apos;re planning to study, work, or travel abroad, our team
                    is ready to guide you. Get personalized advice and quick responses
                    to make your process stress-free.
                  </p>
                </div>

                {/* CTA Box Button Start */}
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a
                    href="https://wa.me/918448558118"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-default"
                  >
                    talk to an expert
                  </a>
                  <span>or</span>
                  <Link href="/services" target="_blank" className="cta-btn">
                    apply for your visa
                  </Link>
                </div>
                {/* CTA Box Button End */}
              </div>
              {/* CTA Box Content End */}
            </div>

            <div className="col-lg-7">
              {/* CTA Form Start */}
              <div className="contact-form cta-form">
                <div className="cta-box-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Get your free visa assessment
                  </h2>
                </div>

                {/* The WhatsApp form logic is attached to the onSubmit event */}
                <form
                  id="contactForm"
                  className="wow fadeInUp"
                  data-wow-delay="0.25s"
                  onSubmit={sendWhatsAppMessage}
                >
                  <div className="row">
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Tell us about your visa requirements..."
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="btn-default">Send Message</button>
                    </div>
                  </div>
                </form>
                {/* CTA Form End */}
              </div>
              {/* CTA Form End */}
            </div>
          </div>
        </div>
      </div>
      {/* CTA Box End */}
    </>
  );
}