import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Your global CSS entry point (make sure you have this file)
// If your old CSS is completely handled by the <link> tags below, you may not need this.
// For Next.js to work correctly, you usually need a root global CSS file.
// import "./globals.css";


export const metadata = {
  title: "GlobalVisaGuy - Immigration and Visa Consulting HTML Template",
  description: "",
  // Handling favicon via metadata is the modern way in Next.js
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap"
        rel="stylesheet"
      />

      {/* CSS Files - Loaded from the public directory */}
      <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/css/slicknav.min.css" rel="stylesheet" />
      <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
      <link href="/css/all.min.css" rel="stylesheet" />
      <link href="/css/animate.css" rel="stylesheet" />
      <link href="/css/magnific-popup.css" rel="stylesheet" />
      <link href="/css/mousecursor.css" rel="stylesheet" />
      <link href="/css/custom.css" rel="stylesheet" />

      <body>
        {/* Preloader Start */}
        {/* <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <img src="/images/loader.svg" alt="" />
            </div>
          </div>
        </div> */}
        {/* Preloader End */}

        {/* Topbar Section Start */}
        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                {/* Topbar Contact Information Start */}
                <div className="topbar-contact-info">
                  <ul>
                    <li>
                      <img src="/images/icon-watch.svg" alt="" />
                      <span>Working Hour:</span> 08:00am to 09:00pm
                    </li>
                    <li>
                      <img src="/images/icon-mail.svg" alt="" /> <span>Email:</span>
                      <a href="#"> info@domainname.com</a>
                    </li>
                  </ul>
                </div>
                {/* Topbar Contact Information End */}
              </div>

              <div className="col-lg-4">
                {/* Header Social Icons Start */}
                <div className="topbar-social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Header Social Icons End */}
              </div>
            </div>
          </div>
        </div>
        {/* Topbar Section End */}

        {/* Header (Component) */}
        <Header />

        {/* Main Content Area */}
        <main>{children}</main>

        {/* Footer (Component) */}
        <Footer />

        {/* Scripts - Use next/script and place at the end of the body */}
        {/* <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" />
        <Script src="/js/validator.min.js" />
        <Script src="/js/jquery.slicknav.js" />
        <Script src="/js/swiper-bundle.min.js" />
        <Script src="/js/jquery.waypoints.min.js" />
        <Script src="/js/jquery.counterup.min.js" />
        <Script src="/js/jquery.magnific-popup.min.js" />
        <Script src="/js/SmoothScroll.js" />
        <Script src="/js/parallaxie.js" />
        <Script src="/js/gsap.min.js" />
        <Script src="/js/magiccursor.js" />
        <Script src="/js/SplitText.js" />
        <Script src="/js/ScrollTrigger.min.js" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" />
        <Script src="/js/wow.min.js" />
        <Script src="/js/function.js" /> */}
      </body>
    </html>
  );
}