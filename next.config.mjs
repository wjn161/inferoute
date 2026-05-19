/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
