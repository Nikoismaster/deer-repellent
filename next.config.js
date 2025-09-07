/** @type {import('next').NextConfig} */
const nextConfig = {
    // 启用严格模式
    reactStrictMode: true,
    
    // 图片优化配置
    images: {
      domains: [
        'images.unsplash.com',
        'via.placeholder.com',
        'res.cloudinary.com'
      ],
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  
    // SEO和性能优化
    poweredByHeader: false,
    generateEtags: true,
    compress: true,
  
    // 环境变量
    env: {
      MAIN_SITE_URL: 'https://rodentlab.com',
      SITE_URL: 'https://deerrepellent.store',
      SITE_NAME: 'DeerRepellent.store',
    },
  
    // 重定向配置（如果需要）
    async redirects() {
      return [
        {
          source: '/buy',
          destination: 'https://rodentlab.com/products/deer-repellent-single?utm_source=deerrepellent.store&utm_medium=redirect&utm_campaign=buy',
          permanent: false,
        },
      ]
    },
  
    // 页面头部优化
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
          ],
        },
      ]
    },
  }
  
  module.exports = nextConfig