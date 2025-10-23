/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // 1. Cloudinary (for Logo)
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dl3pt7avj/image/upload/**',
            },
            // 2. Wikimedia (for WhatsApp Icon)
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                port: '',
                pathname: '/wikipedia/commons/**',
            },
            // 3. Gokite (for Burj Khalifa image)
            {
                protocol: 'https',
                hostname: 'www.gokite.travel',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            // 4. Mercury Holidays (for Dubai Parks image)
            {
                protocol: 'https',
                hostname: 'images.mercuryholidays.co.uk',
                port: '',
                pathname: '/**',
            },
            // 5. Es Dubai (for La Perle image)
            {
                protocol: 'https',
                hostname: 'esdubai.com',
                port: '',
                pathname: '/**',
            },
            // 6. Kyka Group (for Garden Glow image)
            {
                protocol: 'https',
                hostname: 'kykagroup.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            // 7. Stockfood (for Ski Dubai image 1)
            {
                protocol: 'https',
                hostname: 'media01.stockfood.com',
                port: '',
                pathname: '/**',
            },
            // 8. CNTraveler (for Ski Dubai image 2)
            {
                protocol: 'https',
                hostname: 'media.cntraveler.com',
                port: '',
                pathname: '/**',
            },
            // 9. Smart Bull Tourism (for IMG Worlds image)
            {
                protocol: 'https',
                hostname: 'smartbulltourism.com',
                port: '',
                pathname: '/product-images/**',
            },
            // 10. PR Newswire (for Yas Parks image)
            {
                protocol: 'https',
                hostname: 'mma.prnewswire.com',
                port: '',
                pathname: '/**',
            },
            // 11. Kenzly (for Aquaventure image)
            {
                protocol: 'https',
                hostname: 'kenzly.com',
                port: '',
                pathname: '/**',
            },
            // 12. Trip Ventura (for Lost Chambers image)
            {
                protocol: 'https',
                hostname: 'tripventura.com',
                port: '',
                pathname: '/cdn/shop/**',
            },
        ],
    },
    // Ensure we keep strict mode on for best practices
    reactStrictMode: true,
};

export default nextConfig;