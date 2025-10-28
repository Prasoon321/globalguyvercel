/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // --- Core Assets & Social Icons ---
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dl3pt7avj/image/upload/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/wikipedia/commons/**',
            },

            // --- General/Shared Visa Images ---
            {
                protocol: 'https',
                hostname: 'visaguy.ae',
                port: '',
                pathname: '/wp-content/uploads/**',
            },

            // --- Services Page Images (Seamantours) ---
            {
                protocol: 'https',
                hostname: 'www.seamantours.in',
                port: '',
                pathname: '/wp-content/uploads/**',
            },

            // --- Dubai Excursions/World Tour Images ---
            {
                protocol: 'https',
                hostname: 'www.gokite.travel',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'images.mercuryholidays.co.uk',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'esdubai.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'kykagroup.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'media01.stockfood.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.cntraveler.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'smartbulltourism.com',
                port: '',
                pathname: '/product-images/**',
            },
            {
                protocol: 'https',
                hostname: 'mma.prnewswire.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'kenzly.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'tripventura.com',
                port: '',
                pathname: '/cdn/shop/**',
            },
            // --- World Tour Images (Maldives/Thailand/Philippines) ---
            {
                protocol: 'https',
                hostname: 'acko-cms.ackoassets.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.veenaworld.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.travoticholidays.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.expat.hsbc.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.tripmagics.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'dynamic-media-cdn.tripadvisor.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cf.bstatic.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media1.thrillophilia.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'c.regencyholidays.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.datocms-assets.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
