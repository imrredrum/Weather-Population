import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX ?? '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
}

export default nextConfig
