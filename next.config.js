/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"],
    unoptimized: true,
  },
  output: 'export'
};

module.exports = nextConfig;