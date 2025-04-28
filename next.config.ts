import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['dev-data-enpointe.s3.ap-southeast-1.amazonaws.com'],
  },
};

export default nextConfig;
