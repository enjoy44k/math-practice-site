import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/math-practice-site",
  assetPrefix: "/math-practice-site",
};

export default nextConfig;