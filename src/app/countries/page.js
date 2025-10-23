// app/countries/page.js

import Link from 'next/link';
import Image from 'next/image'; // <-- MUST import Image

export const metadata = {
    title: 'Countries We Serve | GlobalVisaGuy',
    description: 'Explore the list of countries for which we provide visa services.',
};

export default function CountriesPage() {
    // Define a standard placeholder width/height for the card images
    const CARD_WIDTH = 500;
    const CARD_HEIGHT = 300;

    return (
        <>
            {/* Page Header Start */}
            <div className="page-header bg-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-header-box">
                                <h1 className="text-anime-style-3" data-cursor="-opaque">Countries</h1>
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

            {/* Page Content Start */}
            <div className="page-coaching">
                <div className="container">
                    <div className="row">

                        {/* USA Visa Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="coaching-item wow fadeInUp">
                                <div className="coaching-featured-image">
                                    <Link href="/usa-visa" target="_blank" data-cursor-text="View">
                                        <figure className="image-anime">
                                            {/* FIXED: Image Component (External) */}
                                            <Image
                                                src="https://visaguy.ae/wp-content/uploads/2025/07/1920x1080-usa-1536x864-1-1024x576.jpg"
                                                alt="USA Visa"
                                                width={CARD_WIDTH}
                                                height={CARD_HEIGHT}
                                                unoptimized={true}
                                            />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="coaching-item-body">
                                    <div className="coaching-item-btn">
                                        <Link href="/usa-visa" target="_blank" className="readmore-btn">
                                            APPLY USA VISA
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UK Visa Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="coaching-item wow fadeInUp">
                                <div className="coaching-featured-image">
                                    <Link href="/uk-visa" target="_blank" data-cursor-text="View">
                                        <figure className="image-anime">
                                            {/* FIXED: Image Component (External) */}
                                            <Image
                                                src="https://visaguy.ae/wp-content/uploads/2025/07/1920x1080-uk-1024x576.jpg"
                                                alt="UK Visa"
                                                width={CARD_WIDTH}
                                                height={CARD_HEIGHT}
                                                unoptimized={true}
                                            />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="coaching-item-body">
                                    <div className="coaching-item-btn">
                                        <Link href="/uk-visa" target="_blank" className="readmore-btn">
                                            APPLY UK VISA
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Canada Visa Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="coaching-item wow fadeInUp">
                                <div className="coaching-featured-image">
                                    <Link href="/canada-visa" target="_blank" data-cursor-text="View">
                                        <figure className="image-anime">
                                            {/* FIXED: Image Component (External) */}
                                            <Image
                                                src="https://visaguy.ae/wp-content/uploads/elementor/thumbs/Canada-rbhzfaczxih5w131cq4pcnqs1dd4c108rlx89ljfso.webp"
                                                alt="Canada Visa"
                                                width={CARD_WIDTH}
                                                height={CARD_HEIGHT}
                                                unoptimized={true}
                                            />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="coaching-item-body">
                                    <div className="coaching-item-btn">
                                        <Link href="/canada-visa" target="_blank" className="readmore-btn">
                                            APPLY CANADA VISA
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Australia Visa Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="coaching-item wow fadeInUp">
                                <div className="coaching-featured-image">
                                    <Link href="/australia-visa" target="_blank" data-cursor-text="View">
                                        <figure className="image-anime">
                                            {/* FIXED: Image Component (External) */}
                                            <Image
                                                src="https://visaguy.ae/wp-content/uploads/elementor/thumbs/Australia-02-rbhzf8hbjuel8t5rnpbg7o7uulmdwmss3cm9b1m854.webp"
                                                alt="Australia Visa"
                                                width={CARD_WIDTH}
                                                height={CARD_HEIGHT}
                                                unoptimized={true}
                                            />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="coaching-item-body">
                                    <div className="coaching-item-btn">
                                        <Link href="/australia-visa" target="_blank" className="readmore-btn">
                                            APPLY AUSTRALIA VISA
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Turkey Visa Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="coaching-item wow fadeInUp">
                                <div className="coaching-featured-image">
                                    <Link href="/turkey-visa" target="_blank" data-cursor-text="View">
                                        <figure className="image-anime">
                                            {/* FIXED: Image Component (External) */}
                                            <Image
                                                src="https://visaguy.ae/wp-content/uploads/elementor/thumbs/Turkey-2-rbhzfaczxih5w131cq4pcnqs1dd4c108rlx89ljfso.webp"
                                                alt="Turkey Visa"
                                                width={CARD_WIDTH}
                                                height={CARD_HEIGHT}
                                                unoptimized={true}
                                            />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="coaching-item-body">
                                    <div className="coaching-item-btn">
                                        <Link href="/turkey-visa" target="_blank" className="readmore-btn">
                                            APPLY TURKEY VISA
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Italy Visa Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="coaching-item wow fadeInUp">
                                <div className="coaching-featured-image">
                                    <Link href="/italy-visa" target="_blank" data-cursor-text="View">
                                        <figure className="image-anime">
                                            {/* FIXED: Image Component (External) */}
                                            <Image
                                                src="https://visaguy.ae/wp-content/uploads/2025/07/Italy.webp"
                                                alt="Italy Visa"
                                                width={CARD_WIDTH}
                                                height={CARD_HEIGHT}
                                                unoptimized={true}
                                            />
                                        </figure>
                                    </Link>
                                </div>
                                <div className="coaching-item-body">
                                    <div className="coaching-item-btn">
                                        <Link href="/italy-visa" target="_blank" className="readmore-btn">
                                            APPLY ITALY VISA
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Content End */}
        </>
    );
}