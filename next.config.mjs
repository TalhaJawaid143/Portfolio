/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint errors ko build phase me ignore karega
  },
};

export default nextConfig;
