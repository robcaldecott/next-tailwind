/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: [
      "components",
      "containers",
      "mocks",
      "pages",
      "providers",
      "queries",
      "types",
      "utils",
    ],
  },
};

module.exports = nextConfig;
