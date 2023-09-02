/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgd.aeplcdn.com",
        port: "",
        pathname: "/0X0/**",
      },
    ],
  },
};

module.exports = nextConfig;
