import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Force apex domain to canonical www + https
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "darylsmithconsulting.com",
          },
        ],
        destination: "https://www.darylsmithconsulting.com/:path*",
        permanent: true,
      },
      // Force https for www host
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.darylsmithconsulting.com" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://www.darylsmithconsulting.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
