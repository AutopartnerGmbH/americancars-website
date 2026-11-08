import type { MetadataRoute } from 'next';
import { pages } from '@/lib/pages';
import { models } from '@/lib/models';
import { vehicles } from '@/lib/vehicles';
import { activeCategories, brandsInStock } from '@/lib/categories';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://americancars-website.vercel.app';
const hidden = ['team'];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/fahrzeuge',
    '/kontakt',
    '/umzugsgut',
    '/impressum',
    '/datenschutz',
    ...pages.filter((p) => !hidden.includes(p.slug)).map((p) => `/${p.slug}`),
    ...models.map((m) => `/modelle/${m.slug}`),
    ...vehicles.map((v) => `/fahrzeuge/${v.slug}`),
    ...activeCategories().map((c) => `/fahrzeuge/kategorie/${c.key}`),
    ...brandsInStock().map((b) => `/fahrzeuge/marke/${b.toLowerCase()}`),
  ];
  return paths.map((p) => ({ url: BASE + p }));
}
