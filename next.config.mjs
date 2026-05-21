/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  // This forces Vercel to use stable Webpack compilation for production builds
  // instead of tripping up on Clerk's internal files with Turbopack.
  productionBrowserSourceMaps: false,
};

export default nextConfig;