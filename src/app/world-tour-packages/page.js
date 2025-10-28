// app/world-tour-packages/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// NOTE: External images from acko-cms.ackoassets.com, img.veenaworld.com,
// www.travoticholidays.com, expat.hsbc.com, www.tripmagics.com, 
// dynamic-media-cdn.tripadvisor.com, cf.bstatic.com, c.regencyholidays.com,
// and www.datocms-assets.com must be added to next.config.mjs remotePatterns.

export default function WorldTourPackagesPage() {

    // Initialize WOW.js for animations and Accordion functionality
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();
        }
    }, []);

    // Helper component for the Accordion Button (to handle styles and props)
    const AccordionButton = ({ targetId, isCollapsed, buttonText, headingId, isSmallText = false }) => (
        <h2 className="accordion-header" id={headingId}>
            <button
                className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${targetId}`}
                aria-expanded={!isCollapsed}
            >
                <span style={{ fontSize: isSmallText ? '1.0rem' : '1.1rem' }}>{buttonText}</span>
            </button>
        </h2>
    );

    // Helper component for Image to manage the complex inline style and ensure <Image /> usage
    const AccordionImage = ({ src, alt }) => (
        <Image
            src={src}
            alt={alt}
            className="img-fluid rounded mb-3"
            width={750} // Default width/height, adjust based on ratio (approximate 16:9 or 4:3 from EJS)
            height={420}
            style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                maxHeight: '420px',
                objectFit: 'cover',
            }}
        />
    );

    // Helper function for sending WhatsApp Query (common link)
    const WhatsAppQueryLink = ({ message }) => (
        <a
            href={`https://wa.me/918448558118?text=${encodeURIComponent(message)}`}
            target="_blank"
            className="btn-default"
            rel="noopener noreferrer"
        >
            Send Query
        </a>
    );

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    WORLD TOUR PACAKGES
                                </h1>
                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">HOME</Link></li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            <div className="page-country-single">
                <div className="container">
                    <div className="row">

                        {/* 1. Thailand Holiday Packages start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <h2 className="mb-4">Thailand Holiday Packages</h2>
                                <div className="accordion" id="thailandPackagesAccordion">

                                    {/* Beaches of Thailand – 6N/7D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <AccordionButton
                                            targetId="collapseBeaches"
                                            isCollapsed={false}
                                            buttonText="Beaches of Thailand – 6 Nights &amp; 7 Days"
                                            headingId="headingBeaches"
                                        />
                                        <div id="collapseBeaches" className="accordion-collapse collapse show" data-bs-parent="#thailandPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://acko-cms.ackoassets.com/Beaches_in_Thailand_429ff648bf.png"
                                                    alt="Beaches of Thailand"
                                                />
                                                <p>
                                                    <strong>Destinations:</strong> Krabi (2N), Phi Phi Island
                                                    (2N), Phuket (2N)
                                                </p>
                                                <p>
                                                    <strong>Recommended For:</strong> Beach | Family with Kids
                                                </p>
                                                <p>
                                                    <strong>Starting Price Per Adult:</strong> AED 1,280 – AED 1,422
                                                </p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Beaches of Thailand – 6 Nights & 7 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spectacular Phuket and Krabi – 5N/6D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton
                                            targetId="collapseSpectacular"
                                            isCollapsed={true}
                                            buttonText="Spectacular Phuket and Krabi – 5 Nights &amp; 6 Days"
                                            headingId="headingSpectacular"
                                        />
                                        <div id="collapseSpectacular" className="accordion-collapse collapse" data-bs-parent="#thailandPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://img.veenaworld.com/customized-holidays/world/south-east-asia/shth3/shth3-bnn-1.jpg"
                                                    alt="Phuket and Krabi"
                                                />
                                                <p><strong>Destinations:</strong> Krabi (2N), Phuket (3N)</p>
                                                <p>
                                                    <strong>Recommended For:</strong> Family with Kids | Honeymoon
                                                </p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 1,564</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Spectacular Phuket and Krabi – 5 Nights & 6 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Thailand Fully Loaded – 5N/6D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton
                                            targetId="collapseFullyLoaded"
                                            isCollapsed={true}
                                            buttonText="Thailand Fully Loaded – 5 Nights &amp; 6 Days"
                                            headingId="headingFullyLoaded"
                                        />
                                        <div id="collapseFullyLoaded" className="accordion-collapse collapse" data-bs-parent="#thailandPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://www.travoticholidays.com/wp-content/uploads/2025/05/thailand-visitor-guide-things-to-do-4406.jpg"
                                                    alt="Thailand Fully Loaded"
                                                />
                                                <p>
                                                    <strong>Destinations:</strong> Pattaya (3N), Bangkok (2N)
                                                </p>
                                                <p><strong>Recommended For:</strong> Family with Kids</p>
                                                <p>
                                                    <strong>Starting Price Per Adult:</strong> AED 1,179 – AED 1,310
                                                </p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Thailand Fully Loaded – 5 Nights & 6 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Simply Thailand – 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton
                                            targetId="collapseSimply"
                                            isCollapsed={true}
                                            buttonText="Simply Thailand – 4 Nights &amp; 5 Days"
                                            headingId="headingSimply"
                                        />
                                        <div id="collapseSimply" className="accordion-collapse collapse" data-bs-parent="#thailandPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://www.expat.hsbc.com/content/dam/hsbc/mbos/img/international-banking/16-9/3347-thailand-2-2000x1125.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
                                                    alt="Simply Thailand"
                                                />
                                                <p>
                                                    <strong>Destinations:</strong> Pattaya (2N), Bangkok (2N)
                                                </p>
                                                <p>
                                                    <strong>Recommended For:</strong> City Breaks | Family with Kids
                                                </p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 711</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Simply Thailand – 4 Nights & 5 Days" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Thailand Holiday Packages end */}

                        {/* --- */}

                        {/* 2. Maldives Holiday Packages start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <h2 className="mb-4">Maldives Holiday Packages</h2>
                                <div className="accordion" id="maldivesPackagesAccordion">

                                    {/* Medhufushi Island Resort – 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <AccordionButton
                                            targetId="collapseMedhufushi"
                                            isCollapsed={false}
                                            buttonText="Maldives with Medhufushi Island Resort – 4 Nights &amp; 5 Days"
                                            headingId="headingMedhufushi"
                                            isSmallText={true}
                                        />
                                        <div id="collapseMedhufushi" className="accordion-collapse collapse show" data-bs-parent="#maldivesPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://www.tripmagics.com/images/1694095428Medhufushi%20Island%20Resort%20image%202.jpg"
                                                    alt="Medhufushi Island Resort"
                                                />
                                                <p><strong>Destinations:</strong> Male (4N)</p>
                                                <p><strong>Recommended For:</strong> Beach | Romantic</p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 4,147</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Maldives with Medhufushi Island Resort – 4 Nights & 5 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Holiday Inn Kandooma – 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton
                                            targetId="collapseKandooma"
                                            isCollapsed={true}
                                            buttonText="Mesmerizing Maldives with Holiday Inn Kandooma – 4 Nights &amp; 5 Days"
                                            headingId="headingKandooma"
                                            isSmallText={true}
                                        />
                                        <div id="collapseKandooma" className="accordion-collapse collapse" data-bs-parent="#maldivesPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ff/18/db/aerial-view-of-holiday.jpg?w=900&h=500&s=1"
                                                    alt="Holiday Inn Kandooma"
                                                />
                                                <p><strong>Destinations:</strong> Male (4N)</p>
                                                <p>
                                                    <strong>Recommended For:</strong> Beach | Family with Kids | Visa on Arrival
                                                </p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 4,690</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Mesmerizing Maldives with Holiday Inn Kandooma – 4 Nights & 5 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sandies Bathala – 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton
                                            targetId="collapseBathala"
                                            isCollapsed={true}
                                            buttonText="Marvellous Maldives with Sandies Bathala – 4 Nights &amp; 5 Days"
                                            headingId="headingBathala"
                                            isSmallText={true}
                                        />
                                        <div id="collapseBathala" className="accordion-collapse collapse" data-bs-parent="#maldivesPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/200342785.jpg?k=a522e3e136b78b46a3d618d6a13ad12449f3b9537003775812d3555a1fe4dd18&o=&hp=1"
                                                    alt="Sandies Bathala"
                                                />
                                                <p><strong>Destinations:</strong> Maldives (4N)</p>
                                                <p><strong>Recommended For:</strong> Beach</p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 5,390</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Marvellous Maldives with Sandies Bathala – 4 Nights & 5 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Makunudu Island Resort – 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton
                                            targetId="collapseMakunudu"
                                            isCollapsed={true}
                                            buttonText="Maldives Best Seller with Makunudu Island Resort – 4 Nights &amp; 5 Days"
                                            headingId="headingMakunudu"
                                            isSmallText={true}
                                        />
                                        <div id="collapseMakunudu" className="accordion-collapse collapse" data-bs-parent="#maldivesPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://media1.thrillophilia.com/filestore/muny72c8gyzjoxv81emnn1sy7oic_Resort%20Galley-12.webp?w=753&h=450&dpr=2.0"
                                                    alt="Makunudu Island Resort"
                                                />
                                                <p><strong>Destinations:</strong> Male (4N)</p>
                                                <p>
                                                    <strong>Recommended For:</strong> Beach | Family with Kids | Honeymoon | Visa on Arrival
                                                </p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 3,141</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Maldives Best Seller with Makunudu Island Resort – 4 Nights & 5 Days" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Villa Park Sun Island Resort – 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                        <AccordionButton
                                            targetId="collapseVillaPark"
                                            isCollapsed={true}
                                            buttonText="Mesmerizing Maldives with Villa Park on Sun Island Resort and Spa – 4 Nights &amp; 5 Days"
                                            headingId="headingVillaPark"
                                            isSmallText={true}
                                        />
                                        <div id="collapseVillaPark" className="accordion-collapse collapse" data-bs-parent="#maldivesPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://c.regencyholidays.com/packages/3671c34e-257f-4026-9308-0ea1b8478cfc/original/2381bd4b-ffbe-4713-89b8-5b61176e488b.webp"
                                                    alt="Villa Park Sun Island Resort"
                                                />
                                                <p><strong>Destinations:</strong> Male (4N)</p>
                                                <p>
                                                    <strong>Recommended For:</strong> Beach | Family with Kids | Honeymoon
                                                </p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 3,786</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Mesmerizing Maldives with Villa Park on Sun Island Resort and Spa – 4 Nights & 5 Days" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Maldives Holiday Packages end */}

                        {/* --- */}

                        {/* 3. Philippines Holiday Packages start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <h2 className="mb-4">Philippines Holiday Packages</h2>
                                <div className="accordion" id="philippinesPackagesAccordion">

                                    {/* Vibrant Philippines – 6N/7D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <AccordionButton
                                            targetId="collapsePhilippines"
                                            isCollapsed={false}
                                            buttonText="Vibrant Philippines – 6 Nights &amp; 7 Days"
                                            headingId="headingPhilippines"
                                        />
                                        <div id="collapsePhilippines" className="accordion-collapse collapse show" data-bs-parent="#philippinesPackagesAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage
                                                    src="https://www.datocms-assets.com/32623/1732563126-cliffside_beach_philippines.jpeg"
                                                    alt="Vibrant Philippines"
                                                />
                                                <p>
                                                    <strong>Destinations:</strong> Manila (2N), Boracay Island
                                                    (2N), Cebu (2N)
                                                </p>
                                                <p>
                                                    <strong>Recommended For:</strong> Beach | Family with Kids | Honeymoon
                                                </p>
                                                <p>
                                                    <strong>Starting Price Per Adult:</strong> AED 3,407 – AED 3,786
                                                </p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Customized Holidays</li>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Sightseeing Tours</li>
                                                    <li>Airport Transfers</li>
                                                    <li>Meals Included</li>
                                                    <li>No Cost EMI Available</li>
                                                </ul>
                                                <WhatsAppQueryLink message="Inquiry: Vibrant Philippines – 6 Nights & 7 Days" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Philippines Holiday Packages end */}

                    </div>
                </div>
            </div>
        </>
    );
}