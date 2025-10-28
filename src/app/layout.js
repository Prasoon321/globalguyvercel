// app/layout.js
import Script from "next/script";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "GlobalVisaGuy",
  description: "Immigration and Visa Consulting services.",
  icons: {
    icon: "/images/favicon.png",
  },
  other: [
    // GOOGLE FONTS: Loaded correctly here
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
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <body>

        {/* FIX: Standard style tag to prevent hydration mismatch */}
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
            width={30}
            height={30}
          />
        </a>
        {/* Whatsupp floating end */}

        {/* NOTE: Preloader HTML content removed to eliminate perpetual hang */}

        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
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
              </div>

              <div className="col-lg-4">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* =================================================================== */}
        {/* SCRIPT LOADING FIXES */}

        {/* 1. JQUERY CORE: Must be loaded first */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* 2. GSAP SCRIPTS: Load after JQuery, required for text animations (GSAP Reference Error Fix) */}
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />

        {/* 3. WOW.js (Animation setup): Load early but lazily (WOW Reference Error Fix) */}
        <Script src="/js/wow.min.js" strategy="afterInteractive" />

        {/* 4. Tawk.to Script (Third Party) */}
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

        {/* 5. Other Utility Scripts (Lazy Load) */}
        {/* Consolidated the redundant bootstrap import */}
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/validator.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.slicknav.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/js/magiccursor.js" strategy="lazyOnload" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        <Script src="/js/function.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
