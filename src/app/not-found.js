// app/not-found.js

// 1. Import Link for navigation
import Link from 'next/link';
// 2. Import the CSS module
import styles from './not-found.css';

// 3. Optional: Define page-specific metadata
export const metadata = {
    title: '404 - Page Not Found | GlobalVisaGuy',
    description: 'The requested page could not be found.',
};

// Next.js uses the default export from not-found.js as the 404 handler
export default function NotFound() {
    return (
        // We wrap the entire structure in a container and use Link for the navigation at the bottom
        <div className={styles.main_wrapper}>

            {/* --- Start of TV and Antenna Structure --- */}
            <div className={styles.main}>
                <div className={styles.antenna}>
                    <div className={styles.antenna_shadow}></div>
                    <div className={styles.a1}></div>
                    <div className={styles.a1d}></div>
                    <div className={styles.a2}></div>
                    <div className={styles.a2d}></div>
                    <div className={styles.a_base}></div>
                </div>
                <div className={styles.tv}>
                    <div className={styles.cruve}>
                        <svg
                            className={styles.curve_svg} // class -> className
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" // xmlns:xlink -> xmlnsXlink
                            viewBox="0 0 189.929 189.929"
                            xmlSpace="preserve" // xml:space -> xmlSpace
                        >
                            <path
                                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                            ></path>
                        </svg>
                    </div>
                    <div className={styles.display_div}>
                        <div className={styles.screen_out}>
                            <div className={styles.screen_out1}>
                                <div className={styles.screen}>
                                    <span className={styles.notfound_text}> NOT FOUND</span>
                                </div>
                                <div className={styles.screenM}>
                                    <span className={styles.notfound_text}> NOT FOUND</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lines}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                    </div>
                    <div className={styles.buttons_div}>
                        <div className={styles.b1}><div></div></div>
                        <div className={styles.b2}></div>
                        <div className={styles.speakers}>
                            <div className={styles.g1}>
                                <div className={styles.g11}></div>
                                <div className={styles.g12}></div>
                                <div className={styles.g13}></div>
                            </div>
                            <div className={styles.g}></div>
                            <div className={styles.g}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.base1}></div>
                    <div className={styles.base2}></div>
                    <div className={styles.base3}></div>
                </div>
            </div>
            <div className={styles.text_404}>
                <div className={styles.text_4041}>4</div>
                <div className={styles.text_4042}>0</div>
                <div className={styles.text_4043}>4</div>
            </div>
            {/* --- End of TV and Antenna Structure --- */}

            {/* Add a user-friendly link back to the homepage */}
            <Link href="/" className="btn-default" style={{ marginTop: '20px', zIndex: 100 }}>
                Go Back Home
            </Link>
        </div>
    );
}