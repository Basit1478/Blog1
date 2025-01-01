// Import the necessary type from 'next'
import { NextConfig } from 'next';

// Define the Next.js configuration object
const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
