import Script from "next/script";
import Image from "next/image";
import Header from "./components/Header"; // Assuming this is your Header component
import Footer from "./components/Footer"; // Assuming this is your Footer component

// NOTE: Ensure your global CSS file is imported correctly, usually in a parent file like /app/layout.js
// If you were using a file named 'globals.css' in the 'app' directory, uncomment the line below.
import "./globals.css";

export const metadata = {
  title: "GlobalVisaGuy",
  description: "Immigration and Visa Consulting services.",
  icons: {
    icon: "/images/favicon.png",
  },

  // 2. ONLY KEEP EXTERNAL LINKS (like Google Fonts)
  other: [
    // GOOGLE FONTS: Handled as external link metadata
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: "anonymous"
    }
    // ❌ All local CSS files were REMOVED from this list!
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">

      <body>
        {/* 2. Custom styles for WhatsApp float (moved from <style> tag) */}
        <style dangerouslySetInnerHTML={{
          __html: `
          #whatsapp-float {
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 999;
            background-color: #25d366;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
          }

          #whatsapp-float:hover {
            transform: scale(1.1);
          }
        `}} />

        {/* Whatsupp floating start (using Next.js <Image />) */}
        <a
          href="https://wa.me/918448558118"
          target="_blank"
          id="whatsapp-float"
          title="Chat with us on WhatsApp"
          rel="noopener noreferrer"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={30} // Explicit width and height are required for <Image>
            height={30}
          />
        </a>
        {/* Whatsupp floating end */}

        {/* 4. Preloader Start (using Next.js <Image />) */}
        {/* <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <Image src="/images/loader.svg" alt="Loading" width={50} height={50} />
            </div>
          </div>
        </div> */}
        {/* Preloader End */}

        {/* Topbar Section Start (using className) */}
        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                {/* Topbar Contact Information Start (Updated content) */}
                <div className="topbar-contact-info">
                  <ul>
                    <li>
                      <Image src="/images/icon-mail.svg" alt="Mail Icon" width={18} height={18} />
                      <span>Email:</span>
                      <a href="mailto:Info@globalvisaguy.com">
                        Info@globalvisaguy.com
                      </a>
                      &nbsp;&amp;&nbsp;&nbsp;
                      <a href="mailto:sales@globalvisaguy.in">
                        sales@globalvisaguy.in
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Topbar Contact Information End */}
              </div>

              <div className="col-lg-4">
                {/* Header Social Icons Start (Updated content) */}
                <div className="topbar-social-icons">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/globalvisaguy?igsh=dnA5M3VuaTRscncz&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    {/* The EJS code commented out the Facebook and Dribbble links, so I&apos;m removing them here */}
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

        {/* 5. Tawk.to Script (Using Next.js Script component) */}
        <Script id="tawk-to-chat" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6837e69270b161070119fd85/1isd5pbgl';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* Other JavaScript files are included using Next.js <Script> with appropriate strategies */}
        {/* <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/validator.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.slicknav.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/magiccursor.js" strategy="lazyOnload" />
        <Script src="/js/SplitText.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        <Script src="/js/function.js" strategy="lazyOnload" />
        */}
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}