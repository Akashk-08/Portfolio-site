import type { NextConfig } from "next";
import path from "node:path";

// Security headers that do not depend on the per request nonce.
// The Content-Security-Policy is set in middleware.ts so it can carry a nonce.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Pin the project root so a stray package-lock.json in the home folder is ignored.
  turbopack: { root: path.resolve(__dirname) },
  poweredByHeader: false,
  // Always put title and meta tags in the <head>, for every crawler and audit tool.
  htmlLimitedBots: /.*/,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/:all*(jpg|png|svg|ico|woff2|pdf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
