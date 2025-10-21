import Image from "next/image";
// app/page.js

import Link from 'next/link';

export function HomePageContent() {
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
                    support. Whether it’s for tourism, business, or education — we’ve
                    got your back.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Hero Button Start */}
                <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="#services" className="btn-default">Explore Services</a>
                  {/* Use Link component for /contact route */}
                  <Link href="/contact" className="btn-default">
                    Get a Free Consultation
                  </Link>
                </div>
                {/* Hero Button End */}
              </div>
              {/* Hero Content End */}
            </div>

            <div className="col-lg-6">
              {/* Hero Images Start */}
              <div className="hero-images">
                {/* Country Circle Image Start (Local Image) */}
                <div className="country-circle-img">
                  <img
                    src="/images/hero-country-circle-img.png"
                    alt="Countries Icon"
                  />
                </div>
                {/* Country Circle Image End */}

                {/* Hero Image Start (Local Images) */}
                <div className="hero-image">
                  <figure className="image-anime">
                    <img src="/images/hero-image.jpg" alt="Visa Support Visual" />
                  </figure>

                  {/* Country Flag Image Start */}
                  <div className="country-flag-img-1">
                    <img src="/images/hero-country-flag-img-1.svg" alt="Flag 1" />
                  </div>
                  {/* Country Flag Image End */}

                  {/* Country Flag Image Start */}
                  <div className="country-flag-img-2">
                    <img src="/images/hero-country-flag-img-2.svg" alt="Flag 2" />
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

      {/* Scrolling Ticker Section Start */}
      <div className="our-scrolling-ticker">
        <div className="scrolling-ticker-box">
          {/* Note: This section relies on JS (`function.js`) for animation */}
          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Study in Canada</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Tourist Visa for Dubai</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Work Permit – Germany</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Business Visa for Australia</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />UK Spouse Visa Support</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />PR Assistance – Canada</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Visit Europe with Schengen Visa</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Student Visa for USA</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />UAE Golden Visa Guidance</span>
          </div>

          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Study in Canada</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Tourist Visa for Dubai</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Work Permit – Germany</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Business Visa for Australia</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />UK Spouse Visa Support</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />PR Assistance – Canada</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Visit Europe with Schengen Visa</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Student Visa for USA</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />UAE Golden Visa Guidance</span>
          </div>
        </div>
      </div>
      {/* Scrolling Ticker Section End */}

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
                    <img src="/images/about-img-1.jpg" alt="Our Team at Work" />
                  </figure>
                </div>
                {/* About Image 1 End */}

                {/* About Image 2 Start */}
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src="/images/about-img-2.jpg" alt="Client Visa Success" />
                  </figure>
                </div>
                {/* About Image 2 End */}

                {/* Success Rating Box Start */}
                <div className="success-rating-box">
                  <div className="Success-rating-content">
                    {/* Counter relies on JS (`jquery.counterup.min.js`) */}
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
                    At GlobalVisaGuy, we’re more than just visa consultants — we are
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

                {/* About Experience Box Start */}
                <div className="about-experience-box">
                  <div className="about-experience-image">
                    <figure className="image-anime reveal">
                      <img
                        src="/images/about-experience-image.jpg"
                        alt="GlobalVisaGuy Experience"
                      />
                    </figure>
                  </div>
                  <div className="about-experience-content">
                    <p>
                      {/* Counter relies on JS */}
                      <span className="counter">25</span>+ years of visa and immigration
                      experience helping clients across 40+ countries.
                    </p>
                  </div>
                </div>
                {/* About Experience Box End */}

                {/* About Us Button Start */}
                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.6s">
                  {/* Link to /about page */}
                  <Link href="/about" className="btn-default">learn more</Link>
                </div>
                {/* About Us Button End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">how we assist our clients</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  End-to-End Visa & Immigration Services
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Title Content Start */}
              <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                <p>
                  From choosing the right visa type to final approval, GlobalVisaGuy
                  provides personalized support every step of the way. Our expert
                  consultants make your journey stress-free and successful.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row">
            {/* Services Item 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-services-1.svg" alt="Student Visa Icon" />
                </div>
                <div className="service-content">
                  <h3>Student Visa</h3>
                  <p>
                    Apply to top universities abroad with complete student visa
                    assistance, from SOPs to embassy interview prep.
                  </p>
                </div>
                <div className="service-btn">
                  <a href="#" className="readmore-btn">learn more</a>
                </div>
              </div>
            </div>

            {/* Services Item 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="/images/icon-services-2.svg" alt="Tourist Visa Icon" />
                </div>
                <div className="service-content">
                  <h3>Tourist Visa</h3>
                  <p>
                    Whether it’s a holiday or a family visit, we help you get tourist
                    visas quickly with proper documentation.
                  </p>
                </div>
                <div className="service-btn">
                  <a href="#" className="readmore-btn">learn more</a>
                </div>
              </div>
            </div>

            {/* Services Item 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="/images/icon-services-3.svg" alt="Business Visa Icon" />
                </div>
                <div className="service-content">
                  <h3>Business Visa</h3>
                  <p>
                    Expand your international ventures with hassle-free business visa
                    support for conferences, meetings, and trade.
                  </p>
                </div>
                <div className="service-btn">
                  <a href="#" className="readmore-btn">learn more</a>
                </div>
              </div>
            </div>

            {/* Services Item 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="/images/icon-services-4.svg" alt="Work Visa Icon" />
                </div>
                <div className="service-content">
                  <h3>Work Permit</h3>
                  <p>
                    Secure job-based work permits with our employer verification
                    support, LMIA documentation, and embassy coordination.
                  </p>
                </div>
                <div className="service-btn">
                  <a href="#" className="readmore-btn">learn more</a>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              {/* Service Contact Text Start */}
              <div className="service-contact-text wow fadeInUp" data-wow-delay="0.8s">
                <p>
                  Unsure which visa fits your profile?
                  {/* Link to /contact page */}
                  <Link href="/contact">Talk to an expert now</Link>
                </p>
              </div>
              {/* Service Contact Text End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* Our Consultancy Section Start */}
      <div className="our-consultancy">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Consultancy images Start */}
              <div className="our-consultancy-images">
                <div className="consultancy-image-box-1">
                  <div className="consultancy-img-1">
                    <figure className="image-anime reveal">
                      <img src="/images/consultancy-img-1.jpg" alt="Visa Consulting" />
                    </figure>
                  </div>
                </div>

                <div className="consultancy-image-box-2">
                  <div className="consultancy-img-2">
                    <figure className="image-anime reveal">
                      <img
                        src="/images/consultancy-img-2.jpg"
                        alt="Visa Documents Support"
                      />
                    </figure>
                  </div>

                  <div className="consultancy-img-3">
                    <figure className="image-anime reveal">
                      <img src="/images/consultancy-img-3.jpg" alt="Happy Clients" />
                    </figure>
                  </div>
                </div>

                {/* Trusted Customer Box Start */}
                <div className="trusted-customer-box">
                  <div className="trusted-customer-item">
                    <div className="trusted-customer-content">
                      {/* Counter relies on JS */}
                      <p><span className="counter">10</span>m+ Trusted Clients</p>
                    </div>
                    <div className="customer-images">
                      <div className="customer-img">
                        <img src="/images/customer-img-1.jpg" alt="Client 1" />
                      </div>
                      <div className="customer-img">
                        <img src="/images/customer-img-2.jpg" alt="Client 2" />
                      </div>
                      <div className="customer-img">
                        <img src="/images/customer-img-3.jpg" alt="Client 3" />
                      </div>
                      <div className="customer-img add-more">
                        <a href="#"><i className="fa-solid fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Trusted Customer Box End */}
              </div>
              {/* Our Consultancy images End */}
            </div>

            <div className="col-lg-6">
              {/* Our Consultancy Content Start */}
              <div className="our-consultancy-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">our consultancy</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Expert Immigration Advice You Can Rely On
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Whether you’re applying for a student visa, work permit, or
                    permanent residency, our expert consultants simplify the journey
                    with personalized guidance, document support, and real-time
                    updates.
                  </p>
                </div>

                {/* Tab navigation and content. Note: Tab functionality relies on Bootstrap JS (`data-bs-toggle`) */}
                <div className="our-consultancy-box tab-content" id="myTabContent">
                  <div className="our-consultancy-nav wow fadeInUp" data-wow-delay="0.4s">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="apply-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#apply"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Apply Visa Online
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="important-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#important"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Important Information
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="immigration-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#immigration"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Immigration Resources
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Apply Visa Online Tab */}
                  <div
                    className="consultancy-tab-item tab-pane fade show active"
                    id="apply"
                    role="tabpanel"
                  >
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="consultancy-tab-image">
                          <img
                            src="/images/consultancy-tab-image-1.jpg"
                            alt="Online Visa Application"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="consultancy-tab-content">
                          <ul>
                            <li>Secure digital application process</li>
                            <li>Step-by-step guidance by professionals</li>
                            <li>Track your visa status in real-time</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Information Tab */}
                  <div
                    className="consultancy-tab-item tab-pane fade"
                    id="important"
                    role="tabpanel"
                  >
                    {/* Content for Important Tab - using placeholder image */}
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="consultancy-tab-image">
                          <img
                            src="/images/consultancy-tab-image-1.jpg"
                            alt="Important Visa Guidelines"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="consultancy-tab-content">
                          <ul>
                            <li>Latest embassy rules & deadlines</li>
                            <li>COVID-19 travel documentation</li>
                            <li>Updates on application timelines</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Immigration Resources Tab */}
                  <div
                    className="consultancy-tab-item tab-pane fade"
                    id="immigration"
                    role="tabpanel"
                  >
                    {/* Content for Immigration Tab - using placeholder image */}
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="consultancy-tab-image">
                          <img
                            src="/images/consultancy-tab-image-1.jpg"
                            alt="Immigration Resources"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="consultancy-tab-content">
                          <ul>
                            <li>Guides for every visa category</li>
                            <li>Document checklists & samples</li>
                            <li>Frequently asked questions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="our-consultancy-btn wow fadeInUp">
                  {/* Link to /contact page */}
                  <Link href="/contact" className="btn-default">
                    Start Your Application
                  </Link>
                </div>
              </div>
              {/* Our Consultancy Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Consultancy Section End */}

      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/* Why Choose Content Start */}
              <div className="why-choose-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose globalvisaguy</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Trusted. Transparent. Tailored to You.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Navigating immigration rules can be complex — that’s why
                    GlobalVisaGuy makes it simple. With decades of experience, proven
                    success, and a client-first mindset, we’re here to make your
                    global dreams a reality.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Why Choose Content Body Start */}
                <div className="why-choose-content-body">
                  {/* Why Choose Item 1 */}
                  <div className="why-choose-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img
                        src="/images/icon-why-choose-1.svg"
                        alt="Legal Success Icon"
                      />
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
                      <img
                        src="/images/icon-why-choose-2.svg"
                        alt="Document Support Icon"
                      />
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
                      <img
                        src="/images/icon-why-choose-3.svg"
                        alt="Client Support Icon"
                      />
                    </div>
                    <div className="why-choose-item-content">
                      <h3>Dedicated Client Support</h3>
                      <p>
                        Reach our team via phone, email, or WhatsApp — we’re here when
                        you need us, from start to stamp.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Why Choose Content Body End */}
              </div>
              {/* Why Choose Content End */}
            </div>

            <div className="col-lg-7">
              {/* Why Choose Image Start */}
              <div className="why-choose-image">
                {/* Apply Now Image Start */}
                <div className="apply-now-img">
                  <img src="/images/apply-now-circle-img.svg" alt="Apply Now Icon" />
                </div>

                {/* Why Choose Image 1 Start */}
                <div className="why-choose-img-1">
                  <figure className="image-anime reveal">
                    <img
                      src="/images/why-choose-img-1.jpg"
                      alt="Visa Consultant Meeting"
                    />
                  </figure>
                </div>

                {/* Why Choose Image 2 Start */}
                <div className="why-choose-img-2">
                  <figure className="image-anime reveal">
                    <img src="/images/why-choose-img-2.jpg" alt="Happy Client" />
                  </figure>
                </div>

                {/* Experience Counter Box Start */}
                <div className="experience-counter-box">
                  {/* Counter relies on JS */}
                  <h2><span className="counter">24</span></h2>
                  <p>Years of Excellence</p>
                </div>
                {/* Experience Counter Box End */}
              </div>
              {/* Why Choose Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Customer Benefit Ticker Start */}
      <div className="our-scrolling-ticker customer-benefit-ticker">
        <div className="scrolling-ticker-box">
          {/* Note: This relies on JS for animation */}
          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />Free Visa Assessment – Apply Now</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />100% Document Support for Every Client</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Track Your Application in Real-Time</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Dedicated Advisors for Every Case</span>
          </div>

          <div className="scrolling-content">
            <span><img src="/images/asterisk-icon.svg" alt="" />24/7 Support via WhatsApp & Email</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Visa Consultation with Experts – Book Free</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Tailored Visa Strategies for Your Country</span>
            <span><img src="/images/asterisk-icon.svg" alt="" />Fast-Track Options Available – Ask Us</span>
          </div>
        </div>
      </div>
      {/* Customer Benefit Ticker End */}

      {/* CTA Box Start */}
      <div className="cta-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/* CTA Box Content Start */}
              <div className="cta-box-content">
                {/* Section Title Start */}
                <div className="section-title dark-section">
                  <h3 className="wow fadeInUp">start your journey with us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Have questions? We're here to help.
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    Whether you're planning to study, work, or travel abroad, our team
                    is ready to guide you. Get personalized advice and quick responses
                    to make your process stress-free.
                  </p>
                </div>
                {/* Section Title End */}

                {/* CTA Box Button Start */}
                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="/contact" className="btn-default">talk to an expert</a> {/* Updated to /contact */}
                  <span>or</span>
                  <a href="#" className="cta-btn">apply for your visa</a>
                </div>
                {/* CTA Box Button End */}
              </div>
              {/* CTA Box Content End */}
            </div>

            <div className="col-lg-7">
              {/* CTA Form Start */}
              <div className="contact-form cta-form">
                {/* CTA Box Title Start */}
                <div className="cta-box-title">
                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Get your free visa assessment
                  </h2>
                </div>
                {/* CTA Box Title End */}

                {/* CTA Form Start - Form submission needs backend handling */}
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
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Full Name"
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
                        placeholder="Your Email Address"
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
                        placeholder="Your Phone Number"
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
                        placeholder="Tell us about your visa requirements..."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="btn-default">send message</button>
                      <div id="msgSubmit" className="h3 hidden"></div>
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


export const metadata = {
  title: 'Hassle-Free Visa Assistance | GlobalVisaGuy Home',
};

export default function Home() {
  return <HomePageContent />;
}
