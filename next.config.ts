
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
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://curoaid.com/:path*",
  //       permanent: true,
  //     },
  //   ];
  // },

  async redirects() {
    return [
      // ==============================
      // VATHALA OLD SERVICE URLS
      // ==============================

      {
        source: "/doctor-visit-at-home",
        destination: "/doctor-at-home",
        permanent: true,
      },
      {
        source: "/elder-care",
        destination: "/elder-care-at-home",
        permanent: true,
      },
      {
        source: "/nursing-care",
        destination: "/home-nursing-services",
        permanent: true,
      },
      {
        source: "/physio-care",
        destination: "/physiotherapy-at-home",
        permanent: true,
      },
      {
        source: "/wound-care-dressing",
        destination: "/wound-care-at-home",
        permanent: true,
      },

      // ==============================
      // VATHALA OTHER PAGE URLS
      // ==============================

      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/enquiry-form",
        destination: "/enquiry",
        permanent: true,
      },
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },

      // ==============================
      // OLD BLOG URLS
      // ==============================

      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
