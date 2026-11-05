import type { Metadata } from 'next';
import '@fontsource/montserrat/latin-400.css';
import '@fontsource/montserrat/latin-500.css';
import '@fontsource/montserrat/latin-600.css';
import '@fontsource/montserrat/latin-700.css';
import '@fontsource/montserrat/latin-800.css';
import './globals.css';
import './extra.css';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Fab from '@/components/Fab';
import FormsInit from '@/components/FormsInit';

const live = process.env.NEXT_PUBLIC_LIVE === '1';

export const metadata: Metadata = {
  title: {
    default: 'US-Fahrzeuge in Hagen kaufen | American Cars – Autopartner GmbH',
    template: '%s | American Cars Hagen',
  },
  description:
    'US-Fahrzeuge in Hagen: geprüfte Fahrzeuge mit Carfax, KFZ-Meisterwerkstatt, Prüfstützpunkt TÜV NORD, Import, Umrüstung und Umzugsgut. Autopartner GmbH – American Cars.',
  openGraph: {
    title: 'American Cars Hagen – US-Fahrzeuge, Meisterwerkstatt, TÜV NORD',
    description: 'Geprüfte US-Fahrzeuge mit Carfax, eigene Meisterwerkstatt und Prüfstützpunkt TÜV NORD in Hagen.',
    type: 'website',
  },
  // Testseite wird nicht von Google indexiert, bis NEXT_PUBLIC_LIVE=1 gesetzt ist.
  robots: live ? { index: true, follow: true } : { index: false, follow: false },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: site.name,
  telephone: '+49 2334 808140',
  foundingDate: '1988',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '15:30' },
  ],
  email: 'info@autopartner-hagen.de',
  address: { '@type': 'PostalAddress', streetAddress: 'Auf dem Lölfert 37', postalCode: '58119', addressLocality: 'Hagen', addressCountry: 'DE' },
  sameAs: ['https://www.instagram.com/autopartner_american.cars/', 'https://www.youtube.com/@AutopartnerAmericanCars'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='de'>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Fab />
        <FormsInit />
      </body>
    </html>
  );
}
