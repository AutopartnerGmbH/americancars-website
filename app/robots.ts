import type { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://americancars-website.vercel.app';
const live = process.env.NEXT_PUBLIC_LIVE === '1';

export default function robots(): MetadataRoute.Robots {
  if (!live) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/merkliste'] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
