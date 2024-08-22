import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
      
      },
  
    ],
    sitemap: 'https://morecopysystems.in/sitemap.xml',
  }
}