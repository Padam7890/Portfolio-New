/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-new-backend-od98.onrender.com',
      },
    ],
  },
};

module.exports = nextConfig;
