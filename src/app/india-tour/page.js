// app/india-tour/page.jsx
"use client";

import Link from 'next/link';
import { useEffect } from 'react';

export default function IndiaTourPage() {

    // Initialize WOW.js for animations and Accordion functionality
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();

            // Note: Bootstrap's collapse/accordion relies on the bootstrap.min.js script.
        }
    }, []);

    // Helper component for the Accordion Button (to handle styles and props)
    const AccordionButton = ({ targetId, isCollapsed, buttonText, headingId }) => (
        <h2 className="accordion-header" id={headingId}>
            <button
                className={`accordion-button fw-bold text-primary bg-light ${isCollapsed ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${targetId}`}
                aria-expanded={!isCollapsed}
            >
                <span style={{ fontSize: '1.1rem' }}>{buttonText}</span>
            </button>
        </h2>
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

    // Helper function to create the Itinerary list items
    const renderItinerary = (highlights) => (
        <ul>
            {highlights.map((item, index) => (
                <li key={index}>
                    <strong>{`Day ${item.day}:`}</strong> {item.text}
                </li>
            ))}
        </ul>
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
                                    INDIA TOUR PACAKGES
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

                        {/* 1. Jaipur Holiday Packages start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <h2 className="mb-4 ">Jaipur Holiday Packages</h2>

                                {/* Marvels of Rajasthan - 8N/9D */}
                                <div className="accordion" id="jaipurPackagesAccordion1">
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <AccordionButton
                                            targetId="collapseRajasthan"
                                            isCollapsed={false}
                                            buttonText="Marvels of Rajasthan – 8 Nights &amp; 9 Days"
                                            headingId="headingRajasthan"
                                        />
                                        <div id="collapseRajasthan" className="accordion-collapse collapse show" data-bs-parent="#jaipurPackagesAccordion1">
                                            <div className="accordion-body">
                                                <p>
                                                    <strong>Destinations:</strong> Jaipur (2N), Bikaner (2N),
                                                    Jaisalmer (2N), Jodhpur (2N)
                                                </p>
                                                <p>
                                                    <strong>Recommended For:</strong> Family | Family with Kids
                                                </p>
                                                <p>
                                                    <strong>Starting Price Per Adult:</strong> AED 1,780 – AED 1,978
                                                </p>
                                                <p><strong>Departure City:</strong> Jaipur (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Economy</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Local Sightseeing Tours</li>
                                                    <li>Transfers between cities</li>
                                                    <li>Meals Included</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrival in Jaipur and hotel transfer. Overnight stay.' },
                                                    { day: 2, text: 'Jaipur sightseeing. Overnight stay.' },
                                                    { day: 3, text: 'Jaipur to Bikaner. Overnight stay.' },
                                                    { day: 4, text: 'Bikaner sightseeing. Overnight stay.' },
                                                    { day: 5, text: 'Bikaner to Jaisalmer. Overnight at camp.' },
                                                    { day: 6, text: 'Jaisalmer sightseeing. Overnight stay.' },
                                                    { day: 7, text: 'Jaisalmer to Jodhpur. Overnight stay.' },
                                                    { day: 8, text: 'Jodhpur sightseeing. Overnight stay.' },
                                                    { day: 9, text: 'Departure transfer to Jodhpur Airport/Railway Station.' },
                                                ])}
                                                <WhatsAppQueryLink message="Inquiry for: Marvels of Rajasthan – 8 Nights & 9 Days package." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Jaipur Short Break-II - 3N/4D */}
                                <div className="accordion" id="jaipurPackagesAccordion2">
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton
                                            targetId="collapseJaipurShortBreak"
                                            isCollapsed={true}
                                            buttonText="Jaipur Short Break-II – 3 Nights &amp; 4 Days"
                                            headingId="headingJaipurShortBreak"
                                        />
                                        <div id="collapseJaipurShortBreak" className="accordion-collapse collapse" data-bs-parent="#jaipurPackagesAccordion2">
                                            <div className="accordion-body">
                                                <p><strong>Destinations:</strong> Jaipur (3N)</p>
                                                <p>
                                                    <strong>Recommended For:</strong> Heritage | Family with Kids
                                                </p>
                                                <p>
                                                    <strong>Starting Price Per Adult:</strong> AED 702 – AED 780
                                                </p>
                                                <p><strong>Departure City:</strong> Jaipur (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Economy</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Local Sightseeing Tours</li>
                                                    <li>Transfers</li>
                                                    <li>Meals Included</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrival in Jaipur and transfer to hotel. Evening visit to Laxminarayan Temple and Chokhi Dhani. Overnight stay.' },
                                                    { day: 2, text: 'Full-day Jaipur sightseeing including Amber Fort, Jal Mahal, City Palace, Jantar Mantar, Hawa Mahal. Overnight stay.' },
                                                    { day: 3, text: 'Excursion to Ajmer and Pushkar (Dargah, Ana Sagar Lake, Brahma Temple). Overnight stay.' },
                                                    { day: 4, text: 'Check-out and transfer to Jaipur Airport for departure.' },
                                                ])}
                                                <p>
                                                    <strong>Fare Summary:</strong><br />
                                                    Package Cost: AED 1,560<br />
                                                    Discount (VACAY10): AED 156<br />
                                                    <strong>After Discount:</strong> AED 1,404
                                                </p>
                                                <WhatsAppQueryLink message="Inquiry for: Jaipur Short Break-II – 3 Nights & 4 Days package." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Astonishing Rajasthan - 4N/5D */}
                                <div className="accordion" id="jaipurPackagesAccordion3">
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton
                                            targetId="collapseAstonishingRajasthan"
                                            isCollapsed={true}
                                            buttonText="Astonishing Rajasthan – 4 Nights &amp; 5 Days"
                                            headingId="headingAstonishingRajasthan"
                                        />
                                        <div id="collapseAstonishingRajasthan" className="accordion-collapse collapse" data-bs-parent="#jaipurPackagesAccordion3">
                                            <div className="accordion-body">
                                                <p>
                                                    <strong>Destinations:</strong> Jaipur (2N), Jodhpur (2N)
                                                </p>
                                                <p><strong>Recommended For:</strong> Family with Kids</p>
                                                <p>
                                                    <strong>Starting Price Per Adult:</strong> AED 967 – AED 1,075
                                                </p>
                                                <p><strong>Departure City:</strong> Jaipur (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Economy</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Local Sightseeing Tours</li>
                                                    <li>Intercity Transfers</li>
                                                    <li>Meals Included</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrive in Jaipur. Transfer and check-in. Overnight stay.' },
                                                    { day: 2, text: 'Jaipur city sightseeing. Overnight stay.' },
                                                    { day: 3, text: 'Transfer from Jaipur to Jodhpur. Overnight stay.' },
                                                    { day: 4, text: 'Jodhpur sightseeing. Overnight stay.' },
                                                    { day: 5, text: 'Departure transfer to Jodhpur Airport/Railway Station.' },
                                                ])}
                                                <p>
                                                    <strong>Fare Summary:</strong><br />
                                                    Package Cost: AED 2,150<br />
                                                    Discount (VACAY10): AED 215<br />
                                                    <strong>After Discount:</strong> AED 1,935
                                                </p>
                                                <WhatsAppQueryLink message="Inquiry for: Astonishing Rajasthan – 4 Nights & 5 Days package." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Manali Holiday Packages start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <h2 className="mb-4 ">Manali Holiday Packages</h2>
                                <div className="accordion" id="manaliPackagesAccordion">

                                    {/* Manali Short Break-I - 3N/4D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <AccordionButton
                                            targetId="collapseManali1"
                                            isCollapsed={false}
                                            buttonText="Manali Short Break-I – 3 Nights &amp; 4 Days"
                                            headingId="headingManali1"
                                        />
                                        <div id="collapseManali1" className="accordion-collapse collapse show" data-bs-parent="#manaliPackagesAccordion">
                                            <div className="accordion-body">
                                                <p><strong>Destinations:</strong> Manali (3N)</p>
                                                <p><strong>Recommended For:</strong> Family | Honeymoon | Shopping | Family with Kids</p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 809 – AED 899</p>
                                                <p><strong>Departure City:</strong> Chandigarh (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Standard</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Local Sightseeing Tours</li>
                                                    <li>Transfers</li>
                                                    <li>Meals Included</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrive Chandigarh & transfer to Manali. Overnight at Hotel.' },
                                                    { day: 2, text: 'Manali local sightseeing. Overnight at Hotel.' },
                                                    { day: 3, text: 'Solang Valley or optionally Rohtang Pass (on own). Overnight at Hotel.' },
                                                    { day: 4, text: 'Drive to Chandigarh. Transfer to Airport/Railway Station.' },
                                                ])}
                                                <p><strong>Fare Summary:</strong><br />
                                                    Package Cost: AED 1,798<br />
                                                    Discount (VACAY10): AED 180<br />
                                                    <strong>After Discount:</strong> AED 1,618
                                                </p>
                                                <WhatsAppQueryLink message="Inquiry for: Manali Short Break-I – 3 Nights & 4 Days package." />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manali Short Break-II - 4N/5D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton
                                            targetId="collapseManali2"
                                            isCollapsed={true}
                                            buttonText="Manali Short Break-II – 4 Nights &amp; 5 Days"
                                            headingId="headingManali2"
                                        />
                                        <div id="collapseManali2" className="accordion-collapse collapse" data-bs-parent="#manaliPackagesAccordion">
                                            <div className="accordion-body">
                                                <p><strong>Destinations:</strong> Manali (4N)</p>
                                                <p><strong>Recommended For:</strong> Family | Family with Kids</p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 977 – AED 1,086</p>
                                                <p><strong>Departure City:</strong> Chandigarh (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Standard</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Local Sightseeing Tours</li>
                                                    <li>Excursion to Manikaran</li>
                                                    <li>Transfers</li>
                                                    <li>Meals Included</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrive Chandigarh & transfer to Manali. Overnight at Hotel.' },
                                                    { day: 2, text: 'Visit Hadimba Temple, Manu Mandir, Vashisth Kund, Tibetan Monastery, Handicraft Centre. Overnight at Hotel.' },
                                                    { day: 3, text: 'Excursion to Manikaran. Overnight at Hotel.' },
                                                    { day: 4, text: 'Visit Solang Valley or optionally Rohtang Pass (on own). Overnight at Hotel.' },
                                                    { day: 5, text: 'Drive to Chandigarh. Transfer to Airport/Railway Station.' },
                                                ])}
                                                <p><strong>Fare Summary:</strong><br />
                                                    Package Cost: AED 2,172<br />
                                                    Discount (VACAY10): AED 217<br />
                                                    <strong>After Discount:</strong> AED 1,955
                                                </p>
                                                <WhatsAppQueryLink message="Inquiry for: Manali Short Break-II – 4 Nights & 5 Days package." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Manali Holiday Packages end */}

                        {/* 3. Goa Holiday Packages start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <h2 className="mb-4 ">Goa Holiday Packages</h2>
                                <div className="accordion" id="goaPackagesAccordion">

                                    {/* Goa Escape Neelam The Grand - 3N/4D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <AccordionButton
                                            targetId="collapseGoaNeelam"
                                            isCollapsed={false}
                                            buttonText="Goa Escape Neelam The Grand – 3 Nights &amp; 4 Days"
                                            headingId="headingGoaNeelam"
                                        />
                                        <div id="collapseGoaNeelam" className="accordion-collapse collapse show" data-bs-parent="#goaPackagesAccordion">
                                            <div className="accordion-body">
                                                <p><strong>Destinations:</strong> Goa (3N)</p>
                                                <p><strong>Recommended For:</strong> Beach | Akbar Choice | Monsoon Special</p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 702</p>
                                                <p><strong>Departure City:</strong> Goa (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Deluxe</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Free Leisure Time</li>
                                                    <li>Meals Included</li>
                                                    <li>Airport Transfers</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrival, check into the Hotel. Overnight in Goa.' },
                                                    { day: 2, text: 'Leisure day in Goa. Overnight stay.' },
                                                    { day: 3, text: 'Day at leisure for independent activities. Overnight stay.' },
                                                    { day: 4, text: 'After breakfast, transfer to Goa Airport.' },
                                                ])}
                                                <p><strong>Fare Summary:</strong><br />
                                                    Package Cost: AED 1,404<br />
                                                    <strong>Total Amount:</strong> AED 1,404
                                                </p>
                                                <WhatsAppQueryLink message="Inquiry for: Goa Escape Neelam The Grand – 3 Nights & 4 Days package." />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Goa Escape Resort De Alturas - 3N/4D */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton
                                            targetId="collapseGoaAlturas"
                                            isCollapsed={true}
                                            buttonText="Goa Escape Resort De Alturas – 3 Nights &amp; 4 Days"
                                            headingId="headingGoaAlturas"
                                        />
                                        <div id="collapseGoaAlturas" className="accordion-collapse collapse" data-bs-parent="#goaPackagesAccordion">
                                            <div className="accordion-body">
                                                <p><strong>Destinations:</strong> Goa (3N)</p>
                                                <p><strong>Recommended For:</strong> Beach | Honeymoon | Family with Kids | Goa Escape</p>
                                                <p><strong>Starting Price Per Adult:</strong> AED 763</p>
                                                <p><strong>Departure City:</strong> Goa (Land Only)</p>
                                                <p><strong>Tour Date:</strong> 03 Jun 2025 (Tuesday)</p>
                                                <p><strong>Rooms &amp; Guests:</strong> 1 Room, 2 Guests</p>
                                                <p><strong>Price Category:</strong> Deluxe</p>
                                                <p><strong>Inclusions:</strong></p>
                                                <ul>
                                                    <li>Hotel Accommodation</li>
                                                    <li>Free Leisure Time</li>
                                                    <li>Meals Included</li>
                                                    <li>Airport Transfers</li>
                                                </ul>
                                                <p><strong>Itinerary Highlights:</strong></p>
                                                {renderItinerary([
                                                    { day: 1, text: 'Arrival, check into the Hotel. Overnight in Goa.' },
                                                    { day: 2, text: 'Breakfast, full leisure day. Overnight stay.' },
                                                    { day: 3, text: 'Breakfast and leisure. Overnight stay.' },
                                                    { day: 4, text: 'After breakfast, transfer to Goa Airport.' },
                                                ])}
                                                <p><strong>Fare Summary:</strong><br />
                                                    Package Cost: AED 1,526<br />
                                                    <strong>Total Amount:</strong> AED 1,526
                                                </p>
                                                <WhatsAppQueryLink message="Inquiry for: Goa Escape Resort De Alturas – 3 Nights & 4 Days package." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Goa Holiday Packages end */}
                    </div>
                </div>
            </div>
        </>
    );
}