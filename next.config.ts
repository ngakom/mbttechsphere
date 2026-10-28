import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Allow viewing the dev server from other devices on the local network
  allowedDevOrigins: ["192.168.8.77"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
