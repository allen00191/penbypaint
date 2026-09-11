const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import("next").NextConfig} */
const nextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        trailingSlash: true,
        basePath: "/penbypaint",
        assetPrefix: "/penbypaint/",
      }
    : {}),
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
