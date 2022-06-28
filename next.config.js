/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "products-boldstore.s3.ap-south-1.amazonaws.com",
      "profile-pics-boldstore.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
