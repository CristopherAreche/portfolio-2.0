/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
