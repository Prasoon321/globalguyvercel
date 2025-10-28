// app/services/page.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// External URLs that must be configured in next.config.mjs:
// All images come from https://www.seamantours.in

export default function ServicesPage() {

    // Initialize WOW.js for animations
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW({ live: false }).init();
        }
    }, []);

    // Helper component for a single Service/Coaching Item
    const ServiceItem = ({ href, imageSrc, buttonText, dataDelay }) => (
        <div className="col-lg-4 col-md-6">
            <div className="coaching-item wow fadeInUp" data-wow-delay={dataDelay}>
                {/* Coaching Featured Image Start*/}
                <div className="coaching-featured-image">
                    <Link
                        href={href}
                        target="_blank"
                        data-cursor-text="View"
                        rel="noopener noreferrer"
                    >
                        <figure className="image-anime">
                            <Image
                                src={imageSrc}
                                alt={buttonText}
                                // Setting appropriate dimensions (approximate based on EJS 700x500 crop)
                                width={700}
                                height={500}
                                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            />
                        </figure>
                    </Link>
                </div>
                {/* Coaching Featured Image End */}

                {/* Coaching Item Body Start */}
                <div className="coaching-item-body">
                    {/* Coaching Item Button Start*/}
                    <div className="coaching-item-btn">
                        <Link
                            href={href}
                            target="_blank"
                            className="readmore-btn"
                            rel="noopener noreferrer"
                        >
                            {buttonText}
                        </Link>
                    </div>
                    {/* Coaching Item Button End*/}
                </div>
                {/* Coaching Item Body End */}
            </div>
        </div>
    );

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">
                                    Services We Deal In
                                </h1>
                                <nav className="wow fadeInUp" data-wow-delay="0.25s">
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

            {/* Page Blog Start */}
            <div className="page-coaching">
                <div className="container">
                    <div className="row">

                        {/* 1. Dubai visa change */}
                        <ServiceItem
                            href="/dubai-visa-change"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2020/08/atlantis.jpg"
                            buttonText="DUBAI VISA CHANGE"
                            dataDelay="0.1s"
                        />

                        {/* 2. Bahrain sponsored visa for 14 days */}
                        <ServiceItem
                            href="/baharain-sponsored-visa-for-14-days"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2021/04/BAH_961_original-700x500.jpg"
                            buttonText="BAHARAIN SPONSORED VISA FOR 14 DAYS"
                            dataDelay="0.2s"
                        />

                        {/* 3. Oman Visa */}
                        <ServiceItem
                            href="/oman-visa"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2020/04/oman-visa-from-india-700x440.jpeg"
                            buttonText="APPLY OMAN VISA"
                            dataDelay="0.3s"
                        />

                        {/* 4. Qatar quarantine visa */}
                        <ServiceItem
                            href="/qatar-quarantine-package"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2021/07/dohaqatar_1-1-700x500.jpg"
                            buttonText="APPLY QATAR QUARANTINE PACKAGE"
                            dataDelay="0.4s"
                        />

                        {/* 5. Singapore visa */}
                        <ServiceItem
                            href="/singapore-visa"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2018/09/singapore-visa.jpg"
                            buttonText="APPLY SINGAPORE VISA"
                            dataDelay="0.5s"
                        />

                        {/* 6. Uae visa 30 days */}
                        <ServiceItem
                            href="/uae-visa-for-30-days"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2020/04/a9812f49da590c4aa48a4c4b2c04ca18-700x500.jpg"
                            buttonText="APPLY UAE VISA FOR 30 DAYS"
                            dataDelay="0.6s"
                        />

                        {/* 7. Uae visa 60 days */}
                        <ServiceItem
                            href="/uae-visa-for-60-days"
                            imageSrc="https://www.seamantours.in/wp-content/uploads/2020/04/a9812f49da590c4aa48a4c4b2c04ca18-700x500.jpg"
                            buttonText="APPLY UAE VISA FOR 60 DAYS"
                            dataDelay="0.7s"
                        />

                        {/* Note: I added a placeholder delay for the last two items, 
                           adjusting the count based on the previous items. */}

                    </div>
                </div>
            </div>
            {/* Page Blog End */}
        </>
    );
}