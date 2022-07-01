/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "products-bold.s3.ap-south-1.amazonaws.com",
      "profile-pics-bold.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
