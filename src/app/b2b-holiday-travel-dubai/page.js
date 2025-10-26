// app/b2b-holiday-travel-dubai/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// External URLs that must be configured in next.config.mjs:
// 1. https://www.gokite.travel/ (for Burj Khalifa)
// 2. https://images.mercuryholidays.co.uk/ (for Dubai Parks)
// 3. https://esdubai.com/ (for La Perle)
// 4. https://kykagroup.com/ (for Garden Glow)
// 5. https://media01.stockfood.com/ (for Ski Dubai 1)
// 6. https://media.cntraveler.com/ (for Ski Dubai 2)
// 7. https://smartbulltourism.com/ (for IMG Worlds)
// 8. https://mma.prnewswire.com/ (for Yas Waterworld)
// 9. https://kenzly.com/ (for Aquaventure)
// 10. https://tripventura.com/ (for Lost Chambers)


// NOTE: You must ensure all these hostnames are added to your next.config.mjs remotePatterns array 
// or the images from those domains will not load!

export default function DubaiActivitiesPage() {

    // Initialize WOW.js for animations (needed because this is a client component)
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();
        }
    }, []);

    // Helper component for the Accordion Button (to keep things clean)
    const AccordionButton = ({ targetId, isCollapsed, buttonText, headingId }) => (
        <h2 className="accordion-header" id={headingId}>
            <button
                className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${targetId}`}
                aria-expanded={!isCollapsed}
            >
                {buttonText}
            </button>
        </h2>
    );

    // Helper component for Image to manage the inline style
    const AccordionImage = ({ src, alt, width = 600, height = 420 }) => (
        <Image
            src={src}
            alt={alt}
            className="img-fluid rounded mb-3"
            width={width} // Adjusted to be larger for better quality, ensure these fit your actual image ratio
            height={height}
            style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                maxHeight: '420px',
                objectFit: 'cover',
            }}
        />
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
                                    DUBAI ACTIVITES INTENORY
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
                        
                        {/* 1. Dubai Mall Activities start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="dubaiMallAccordion">
                                    <h2 className="mb-4 text-anime-style-3">Dubai Mall Activities</h2>

                                    {/* Burj Khalifa Tickets */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseBurj" isCollapsed={false} buttonText="Burj Khalifa – At The Top" headingId="headingBurj" />
                                        <div id="collapseBurj" className="accordion-collapse collapse show" data-bs-parent="#dubaiMallAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://www.gokite.travel/wp-content/uploads/2024/05/1.-Dubai-Aquarium-Underwater-Zoo.webp" 
                                                    alt="Burj Khalifa View" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Adult</th>
                                                            <th>Child</th>
                                                            <th>Timing</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Level 124 + Café (Prime Time)</td>
                                                            <td>AED 315</td>
                                                            <td>AED 275</td>
                                                            <td>12:00 – 18:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Level 124 (Non-Prime) Open Ticket</td>
                                                            <td>AED 155</td>
                                                            <td>AED 124</td>
                                                            <td>09:00 – 15:30, 19:00 – 21:00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Level 148 SKY Lounge – VIP</td>
                                                            <td>AED 899</td>
                                                            <td>—</td>
                                                            <td>Prime Hours</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dubai Aquarium & Underwater Zoo */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapseAquarium" isCollapsed={true} buttonText="Dubai Aquarium &amp; Underwater Zoo" headingId="headingAquarium" />
                                        <div id="collapseAquarium" className="accordion-collapse collapse" data-bs-parent="#dubaiMallAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Package</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Explorer Experience</td>
                                                            <td>AED 140</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VIP Line Buster</td>
                                                            <td>AED 199</td>
                                                        </tr>
                                                        <tr>
                                                            <td>All-Access (VR + Penguin + Glass Boat)</td>
                                                            <td>AED 289</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* ... other Dubai Mall activities ... */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton targetId="collapseRink" isCollapsed={true} buttonText="Dubai Ice Rink" headingId="headingRink" />
                                        <div id="collapseRink" className="accordion-collapse collapse" data-bs-parent="#dubaiMallAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>General Admission (90 mins)</td>
                                                            <td>AED 95</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Snowfall Session</td>
                                                            <td>AED 120</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Disco Session</td>
                                                            <td>AED 135</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                        <AccordionButton targetId="collapseVR" isCollapsed={true} buttonText="VR Park Dubai (Pay &amp; Play)" headingId="headingVR" />
                                        <div id="collapseVR" className="accordion-collapse collapse" data-bs-parent="#dubaiMallAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Card Value</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>AED 275 (Worth AED 400)</td>
                                                            <td>AED 275</td>
                                                        </tr>
                                                        <tr>
                                                            <td>AED 200 (Worth AED 300)</td>
                                                            <td>AED 200</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Dubai Mall Activities end */}

                        {/* --- */}

                        {/* 2. Dubai Parks and Resorts start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="dubaiParksAccordion">
                                    <h2 className="mb-4 text-anime-style-3">Dubai Parks &amp; Resorts</h2>

                                    {/* 1 Day Any 1 Park */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseAny1" isCollapsed={false} buttonText="1 Day – Any 1 Park" headingId="headingAny1" />
                                        <div id="collapseAny1" className="accordion-collapse collapse show" data-bs-parent="#dubaiParksAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://images.mercuryholidays.co.uk/hotel/8105/539281a_hb_a_001.jpg?w=1920" 
                                                    alt="Dubai Parks and Resorts" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                            <th>Child Policy</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Motiongate / Bollywood / Legoland (Any One)</td>
                                                            <td>AED 330</td>
                                                            <td>Child goes FREE (3–12 yrs)</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* 1 Day 2 Parks */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapse2Parks" isCollapsed={true} buttonText="1 Day – 2 Parks" headingId="heading2Parks" />
                                        <div id="collapse2Parks" className="accordion-collapse collapse" data-bs-parent="#dubaiParksAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Combo</th>
                                                            <th>Price</th>
                                                            <th>Child Policy</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Any 2 Parks in 1 Day</td>
                                                            <td>AED 553</td>
                                                            <td>Applicable to kids aged 3–12 yrs</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Annual Passes & Offers */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton targetId="collapseAnnual" isCollapsed={true} buttonText="Special Offers &amp; Upgrades" headingId="headingAnnual" />
                                        <div id="collapseAnnual" className="accordion-collapse collapse" data-bs-parent="#dubaiParksAccordion">
                                            <div className="accordion-body">
                                                <ul className="list-unstyled">
                                                    <li>🎟 Combo ticket upgrades available at gate</li>
                                                    <li>🎢 Fast Track passes can be purchased inside the parks</li>
                                                    <li>👨‍👩‍👧 Family discounts available for 4+ travelers</li>
                                                    <li>📸 Free digital photo voucher with select packages</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Dubai Parks and Resorts end */}

                        {/* --- */}

                        {/* 3. La Perle Show start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="laPerleAccordion">
                                    <h2 className="mb-4 text-anime-style-3">La Perle Show – Dubai</h2>

                                    {/* Standard Ticket Types */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseStandard" isCollapsed={false} buttonText="Standard Ticket Options" headingId="headingStandard" />
                                        <div id="collapseStandard" className="accordion-collapse collapse show" data-bs-parent="#laPerleAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://esdubai.com/wp-content/uploads/2024/11/Es-Dubai-Banner-1.jpg" 
                                                    alt="La Perle Show" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Category</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Bronze</td>
                                                            <td>AED 235</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Silver</td>
                                                            <td>AED 270</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gold</td>
                                                            <td>AED 315</td>
                                                        </tr>
                                                        <tr>
                                                            <td>VIP</td>
                                                            <td>AED 385</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Early Bird Offer */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapseEarlyBird" isCollapsed={true} buttonText="Early Bird Offers (Book 24+ Hours in Advance)" headingId="headingEarlyBird" />
                                        <div id="collapseEarlyBird" className="accordion-collapse collapse" data-bs-parent="#laPerleAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Category</th>
                                                            <th>Early Bird Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Bronze</td><td>AED 200</td></tr>
                                                        <tr><td>Silver</td><td>AED 230</td></tr>
                                                        <tr><td>Gold</td><td>AED 270</td></tr>
                                                        <tr><td>VIP</td><td>AED 345</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* VIP Lounge Tickets */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton targetId="collapseVIP" isCollapsed={true} buttonText="VIP Lounge Access Tickets" headingId="headingVIP" />
                                        <div id="collapseVIP" className="accordion-collapse collapse" data-bs-parent="#laPerleAccordion">
                                            <div className="accordion-body">
                                                <p>
                                                    <strong>VIP Experience:</strong> Includes luxury seating,
                                                    VIP lounge access, free welcome drink, and premium view.
                                                </p>
                                                <ul className="list-unstyled">
                                                    <li>🎟 VIP Prime Lounge Ticket: <strong>AED 499</strong></li>
                                                    <li>
                                                        🕘 Show Timings: Daily slots from 9:00 AM to 11:00 PM
                                                    </li>
                                                    <li>
                                                        📌 Subject to availability – prior booking recommended
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* La Perle Show end */}

                        {/* --- */}

                        {/* 4. Glow Garden & Miracle Garden start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="gardenAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Glow Garden &amp; Miracle Garden
                                    </h2>

                                    {/* Dubai Garden Glow */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseGlow" isCollapsed={false} buttonText="Dubai Garden Glow – Combo Offers" headingId="headingGlow" />
                                        <div id="collapseGlow" className="accordion-collapse collapse show" data-bs-parent="#gardenAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://kykagroup.com/wp-content/uploads/2024/03/Book-Tour-Packages.jpeg" 
                                                    alt="Dubai Garden Glow" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Combo</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Glow Garden + Dinosaur Park</td><td>AED 70</td></tr>
                                                        <tr><td>Glow Garden + 3 Parks Combo</td><td>AED 90</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Child Policy:</strong> Free entry for children under
                                                    3 years. Valid for all days including weekends.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dubai Miracle Garden */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapseMiracle" isCollapsed={true} buttonText="Dubai Miracle Garden" headingId="headingMiracle" />
                                        <div id="collapseMiracle" className="accordion-collapse collapse" data-bs-parent="#gardenAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Adult</th>
                                                            <th>Child</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>General Admission</td>
                                                            <td>AED 80</td>
                                                            <td>AED 60</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Note:</strong> Open from November to May. Best time
                                                    to visit is between 9 AM and 4 PM.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Combo Deals */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton targetId="collapseCombo" isCollapsed={true} buttonText="Special Combo Deals" headingId="headingCombo" />
                                        <div id="collapseCombo" className="accordion-collapse collapse" data-bs-parent="#gardenAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Combo</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Miracle Garden + Storm Coaster</td><td>AED 145</td></tr>
                                                        <tr><td>Louvre + Storm Coaster</td><td>AED 160</td></tr>
                                                        <tr><td>IMG World + Storm Coaster</td><td>AED 185</td></tr>
                                                    </tbody>
                                                </table>
                                                <p className="mb-0">
                                                    <strong>Note:</strong> Combo passes must be used within 7
                                                    days of first activation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Glow Garden & Miracle Garden end */}
                        
                        {/* --- */}

                        {/* 5. Ski Dubai Tickets start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="skiDubaiAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Ski Dubai – Mall of the Emirates
                                    </h2>

                                    {/* Classic & Snow Plus */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseClassic" isCollapsed={false} buttonText="Classic &amp; Snow Plus Packages" headingId="headingClassic" />
                                        <div id="collapseClassic" className="accordion-collapse collapse show" data-bs-parent="#skiDubaiAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://media01.stockfood.com/largepreviews/MjE3NDExNjgwMA==/70132800-Dubai-Mall-of-Emirates-Ski-dubai-Indoor-skiing.jpg" 
                                                    alt="Ski Dubai Slope" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Package</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Ski Dubai Classic + Hot Chocolate</td><td>AED 245</td></tr>
                                                        <tr><td>Ski Dubai Snow Plus + Hot Chocolate</td><td>AED 320</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Inclusions:</strong> Snow park access, chairlift,
                                                    and fleece gloves. Clothing &amp; boots provided.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Polar & Premium Passes */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapsePolar" isCollapsed={true} buttonText="Polar Pass &amp; Premium Options" headingId="headingPolar" />
                                        <div id="collapsePolar" className="accordion-collapse collapse" data-bs-parent="#skiDubaiAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://media.cntraveler.com/photos/5a847e608ea5f04e2cf773f5/16:9/w_2560,c_limit/Ski-Dubai_2018_GettyImages-543932050.jpg" 
                                                    alt="Ski Dubai Penguins" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Package</th>
                                                            <th>Price</th>
                                                            <th>Booking Note</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Ski Dubai Polar Pass</td><td>AED 240</td><td>Walk-in</td></tr>
                                                        <tr><td>Ski Dubai Premium Pass</td><td>AED 410</td><td>Book 24 hours in advance</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Tip:</strong> Premium includes locker, meals, and
                                                    multiple activities in one pass.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Penguin Encounter */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton targetId="collapsePenguin" isCollapsed={true} buttonText="Penguin Encounters" headingId="headingPenguin" />
                                        <div id="collapsePenguin" className="accordion-collapse collapse" data-bs-parent="#skiDubaiAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Experience</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Penguin Cove + Nursery Visit</td><td>AED 365</td></tr>
                                                        <tr><td>Ultimate Penguin Encounter</td><td>AED 399</td></tr>
                                                    </tbody>
                                                </table>
                                                <p className="mb-0">
                                                    <strong>Note:</strong> Limited slots. Prior booking
                                                    recommended. Age restrictions may apply.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Ski Dubai Tickets end */}
                        
                        {/* --- */}

                        {/* 6. IMG Worlds of Adventure start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="imgAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        IMG Worlds of Adventure – Dubai
                                    </h2>

                                    {/* General Admission */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseIMG" isCollapsed={false} buttonText="General Admission" headingId="headingIMG" />
                                        <div id="collapseIMG" className="accordion-collapse collapse show" data-bs-parent="#imgAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://smartbulltourism.com/product-images/1_6.jpg" 
                                                    alt="IMG Worlds of Adventure" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Type</th>
                                                            <th>Adult</th>
                                                            <th>Child</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Standard Entry</td>
                                                            <td>AED 309</td>
                                                            <td>AED 259</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Note:</strong> Free entry for children under 1.05
                                                    meters. Open daily 12:00 PM – 10:00 PM.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* IMG Worlds of Adventure end */}
                        
                        {/* --- */}

                        {/* 7. Yas Island Parks start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="yasAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Yas Island Parks – Abu Dhabi
                                    </h2>

                                    {/* Ferrari World */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseFerrari" isCollapsed={false} buttonText="Ferrari World Abu Dhabi" headingId="headingFerrari" />
                                        <div id="collapseFerrari" className="accordion-collapse collapse show" data-bs-parent="#yasAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://mma.prnewswire.com/media/2276225/Miral_Yas_Waterworld.jpg?p=twitter" 
                                                    alt="Ferrari World" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>1 Day Standard</td><td>AED 315</td></tr>
                                                        <tr><td>With Fast Track</td><td>AED 410</td></tr>
                                                        <tr><td>With Meal</td><td>AED 390</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Warner Bros World */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapseWB" isCollapsed={true} buttonText="Warner Bros World Abu Dhabi" headingId="headingWB" />
                                        <div id="collapseWB" className="accordion-collapse collapse" data-bs-parent="#yasAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Standard</td><td>AED 315</td></tr>
                                                        <tr><td>With Meal</td><td>AED 390</td></tr>
                                                        <tr><td>With Fast Track</td><td>AED 425</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Yas Waterworld */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <AccordionButton targetId="collapseYasWater" isCollapsed={true} buttonText="Yas Waterworld" headingId="headingYasWater" />
                                        <div id="collapseYasWater" className="accordion-collapse collapse" data-bs-parent="#yasAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Standard Entry</td><td>AED 295</td></tr>
                                                        <tr><td>With Meal</td><td>AED 345</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Yas Island Parks end */}
                        
                        {/* --- */}

                        {/* 8. Aquaventure + Lost Chambers start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="atlantisAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Aquaventure + Lost Chambers – Atlantis
                                    </h2>

                                    {/* Aquaventure */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseAqua" isCollapsed={false} buttonText="Aquaventure Waterpark" headingId="headingAqua" />
                                        <div id="collapseAqua" className="accordion-collapse collapse show" data-bs-parent="#atlantisAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://kenzly.com/wp-content/uploads/2025/05/Atlantis-Aquaventure-Water-Park-Lost-Chambers-Tour-with-Private-Transfer-5.webp" 
                                                    alt="Aquaventure Waterpark" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Standard Entry</td><td>AED 275</td></tr>
                                                        <tr><td>Combo (Aquaventure + Lost Chambers)</td><td>AED 355</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Note:</strong> Open daily from 10 AM to sunset.
                                                    Children under 1.2m must wear life jackets (provided).
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Lost Chambers Aquarium */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <AccordionButton targetId="collapseLost" isCollapsed={true} buttonText="Lost Chambers Aquarium" headingId="headingLost" />
                                        <div id="collapseLost" className="accordion-collapse collapse" data-bs-parent="#atlantisAccordion">
                                            <div className="accordion-body">
                                                <AccordionImage 
                                                    src="https://tripventura.com/cdn/shop/articles/c870x524_fb09344b-130f-43ce-b0d7-f10858f81906.jpg?v=1726268931" 
                                                    alt="Lost Chambers Aquarium" 
                                                />
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Type</th>
                                                            <th>Adult</th>
                                                            <th>Child</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>General Entry</td><td>AED 125</td><td>AED 95</td></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Aquaventure + Lost Chambers end */}

                        {/* --- */}

                        {/* 9. Dubai Dolphinarium start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="dolphinariumAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Dubai Dolphinarium – Creek Park
                                    </h2>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseDolphinShow" isCollapsed={false} buttonText="Dolphin &amp; Seal Show" headingId="headingDolphinShow" />
                                        <div id="collapseDolphinShow" className="accordion-collapse collapse show" data-bs-parent="#dolphinariumAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Standard Entry</td><td>AED 120</td></tr>
                                                        <tr><td>VIP Seating</td><td>AED 140</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Note:</strong> Show duration approx. 45 minutes.
                                                    Creek Park AED 5 entrance ticket required separately.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Dubai Dolphinarium end */}
                        
                        {/* --- */}

                        {/* 10. Flying Cup start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="flyingCupAccordion">
                                    <h2 className="mb-4 text-anime-style-3">Flying Cup – JBR Beach</h2>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseFlying" isCollapsed={false} buttonText="Sky Dining &amp; Panoramic Ride" headingId="headingFlying" />
                                        <div id="collapseFlying" className="accordion-collapse collapse show" data-bs-parent="#flyingCupAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Option</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Without Snack</td><td>AED 60</td></tr>
                                                        <tr><td>With Popcorn &amp; Drink</td><td>AED 75</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Height Requirement:</strong> Minimum 105 cm.
                                                    Experience lasts approx. 15–20 minutes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Flying Cup end */}
                        
                        {/* --- */}

                        {/* 11. Museum of the Future start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="futureMuseumAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Museum of the Future – Sheikh Zayed Road
                                    </h2>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseFuture" isCollapsed={false} buttonText="Entry Tickets" headingId="headingFuture" />
                                        <div id="collapseFuture" className="accordion-collapse collapse show" data-bs-parent="#futureMuseumAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Adult (3+ years)</td><td>AED 149</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Note:</strong> Prior booking essential. Museum is
                                                    fully immersive – allow 2–3 hours for visit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Museum of the Future end */}
                        
                        {/* --- */}

                        {/* 12. Big Bus Tours start */}
                        <section className="excursion-section pb-5">
                            <div className="container">
                                <div className="accordion" id="bigBusAccordion">
                                    <h2 className="mb-4 text-anime-style-3">
                                        Big Bus Hop-On Hop-Off Tours
                                    </h2>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <AccordionButton targetId="collapseBigBus" isCollapsed={false} buttonText="Dubai &amp; Abu Dhabi Routes" headingId="headingBigBus" />
                                        <div id="collapseBigBus" className="accordion-collapse collapse show" data-bs-parent="#bigBusAccordion">
                                            <div className="accordion-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>City</th>
                                                            <th>Ticket Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td>Dubai</td><td>1 Day</td><td>AED 260</td></tr>
                                                        <tr><td>Dubai</td><td>2 Day Premium</td><td>AED 315</td></tr>
                                                        <tr><td>Abu Dhabi</td><td>1 Day</td><td>AED 250</td></tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    <strong>Inclusions:</strong> Audio commentary, free walking
                                                    tours, creek cruise (Dubai), and flexible stop options.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Big Bus Tours end */}

                    </div>
                </div>
            </div>
        </>
    );
}