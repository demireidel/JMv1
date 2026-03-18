import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "english.news.cn" },
      { hostname: "assets.weforum.org" },
      { hostname: "www.argentina.gob.ar" },
    ],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
