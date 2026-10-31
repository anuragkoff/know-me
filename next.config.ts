
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages configuration */
  output: "export",
  basePath: "/know-me",

  /* Existing image configuration */
  images: {
    unoptimized: true,
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sl.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "designnotes.blog.gov.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**",
      },
    ],
  },

  /* Existing React configuration */
  reactCompiler: true,

  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
