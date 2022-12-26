/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com','img.shields.io'],
  },
}

module.exports = nextConfig
