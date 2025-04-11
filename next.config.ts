import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // { protocol: 'https', hostname: 'res.cloudinary.com' },
      // { protocol: 'https', hostname: 'nsui.irung.me' },
      // { protocol: 'https', hostname: 'images.immediate.co.uk' },
      // { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: '*' },
      
    ]
  }
};

export default nextConfig;
