/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,       // Helps catch potential problems in React code
  swcMinify: true,             // Enables Next.js' faster compiler minification
  images: {
    domains: [],               // Add any domains if you plan to load external images
  },
};

module.exports = nextConfig;