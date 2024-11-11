/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    minimumCacheTTL: 60,
    unoptimized: true, // Добавляем эту опцию для отключения оптимизации
  },
}

module.exports = nextConfig