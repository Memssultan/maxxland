import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://maxxfine.kz',
      lastModified: new Date(),
    }
  ]
}