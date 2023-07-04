/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};

module.exports = nextConfig;
