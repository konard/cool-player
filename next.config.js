/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: false,
  },
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig
