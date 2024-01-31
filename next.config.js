/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
      },
      // Add the new hostname here
      {
        protocol: 'https',
        hostname: 'imgl.krone.at',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/admineral",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;