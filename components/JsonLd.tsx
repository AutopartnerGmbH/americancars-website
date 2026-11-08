import { BASE } from '@/lib/url';

export function crumbs(items: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Startseite', '/'] as [string, string], ...items].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: BASE + path,
    })),
  };
}

export default function JsonLd({ data }: { data: object | object[] }) {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
