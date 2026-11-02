
import type { NextConfig } from "next";

/** Single source of truth for subpath deploys */
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  trailingSlash: false,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vathala-bucket.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },

  // Permanently redirect Vathala frontend URLs to CuroAid
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://curoaid.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
