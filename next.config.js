/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "test-bucket-bold.s3.ap-south-1.amazonaws.com",
      "products-bold.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
