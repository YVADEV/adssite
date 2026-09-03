import type { NextConfig } from "next";

const cacheImmutable = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1680],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*.mp4",
        headers: [{ key: "Cache-Control", value: cacheImmutable }],
      },
      {
        source: "/:path*.{jpg,jpeg,png,webp,avif}",
        headers: [{ key: "Cache-Control", value: cacheImmutable }],
      },
      {
        source: "/:path*.{woff,woff2}",
        headers: [{ key: "Cache-Control", value: cacheImmutable }],
      },
    ];
  },
};

export default nextConfig;
