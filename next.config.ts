import type { NextConfig } from "next";

// Set automatically by the GitHub Actions workflow. Empty for a user/org
// page (repo named <username>.github.io), "/repo-name" for a project page.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    // GitHub Pages has no server to run Next's image optimizer on.
    unoptimized: true,
  },
};

export default nextConfig;
