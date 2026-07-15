import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Demo #26: strip console.log in production (keep error/warn)
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
