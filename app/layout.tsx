import type { Metadata } from 'next';
import '@fontsource/montserrat/latin-400.css';
import '@fontsource/montserrat/latin-500.css';
import '@fontsource/montserrat/latin-600.css';
import '@fontsource/montserrat/latin-700.css';
import '@fontsource/montserrat/latin-800.css';
import './globals.css';
import './extra.css';
import { site } from '@/lib/site';
import { BASE } from '@/lib/url';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Fab from '@/components/Fab';
import ScrollProgress from '@/components/ScrollProgress';
import FormsInit from '@/components/FormsInit';
import Consent from '@/components/Consent';

const live = process.env.NEXT_PUBLIC_LIVE === '1';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  alternates: { canonical: './' },
  title: {
    default: 'US-Fahrzeuge in Hagen kaufen | American Cars Autopartner',
    template: '%s | American Cars',
  },
  description:
    'US-Fahrzeuge in Hagen: geprüft, mit Carfax. KFZ-Meisterwerkstatt, Prüfstützpunkt des TÜV NORD, Import und Umrüstung. Autopartner GmbH – American Cars.',
  openGraph: {
    title: 'American Cars Hagen – US-Fahrzeuge, Meisterwerkstatt, TÜV NORD',
    description: 'Geprüfte US-Fahrzeuge mit Carfax, eigene Meisterwerkstatt und Prüfstützpunkt des TÜV NORD in Hagen.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Autopartner GmbH – American Cars',
  },
  twitter: { card: 'summary_large_image' },
  // Testseite wird nicht von Google indexiert, bis NEXT_PUBLIC_LIVE=1 gesetzt ist.
  robots: live ? { index: true, follow: true } : { index: false, follow: false },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['AutoDealer', 'AutoRepair'],
  '@id': `${BASE}/#autohaus`,
  name: site.name,
  url: BASE,
  logo: `${BASE}/img/logo-dark.png`,
  image: `${BASE}/img/hero.jpg`,
  description: 'US-Fahrzeuge kaufen, importieren und umrüsten, KFZ-Meisterwerkstatt für alle Marken und Prüfstützpunkt des TÜV NORD in Hagen-Hohenlimburg.',
  telephone: '+49 2334 808140',
  foundingDate: '1988',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '15:30' },
  ],
  email: 'info@autopartner-hagen.de',
  paymentAccepted: 'Überweisung, EC-Karte, Bargeld',
  knowsLanguage: ['de', 'en'],
  areaServed: ['Hagen', 'Wetter', 'Herdecke', 'Iserlohn', 'Dortmund', 'Witten', 'Wuppertal', 'Sauerland', 'Ruhrgebiet'].map((n) => ({ '@type': 'City', name: n })),
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Autopartner+GmbH+Auf+dem+L%C3%B6lfert+37+Hagen',
  address: { '@type': 'PostalAddress', streetAddress: 'Auf dem Lölfert 37', postalCode: '58119', addressLocality: 'Hagen', addressRegion: 'NRW', addressCountry: 'DE' },
  sameAs: ['https://www.instagram.com/autopartner_american.cars/', 'https://www.youtube.com/@AutopartnerAmericanCars'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='de'>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <Fab />
        <FormsInit />
        <Consent />
      </body>
    </html>
  );
}
