/** @type {import('next').NextConfig} */
const nextConfig = {
  // REMOVED: output: 'export' — static export drops all API routes.
  // Deploy on Vercel, Railway, or any Node.js host to keep API routes alive.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
