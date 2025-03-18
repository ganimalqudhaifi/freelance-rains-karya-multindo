import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom', // Menggunakan custom loader
    loaderFile: './my-loader.ts', // Menunjukkan file custom loader
  },

  /* config options here */
};

export default nextConfig;
