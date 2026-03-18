import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "english.news.cn" },
      { hostname: "assets.weforum.org" },
      { hostname: "www.argentina.gob.ar" },
    ],
  },
};

export default nextConfig;
