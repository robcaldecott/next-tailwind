/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["components", "mocks", "pages", "providers", "types"],
  },
  experimental: {
    appDir: true,
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

module.exports = withBundleAnalyzer(nextConfig);
