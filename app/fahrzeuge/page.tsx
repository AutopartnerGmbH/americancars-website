import type { Metadata } from 'next';
import Listing from '@/components/Listing';
import { vehicles } from '@/lib/vehicles';

export const metadata: Metadata = {
  title: 'US-Fahrzeuge kaufen: aktueller Bestand',
  description: 'Aktueller Bestand an US-Fahrzeugen in Hagen: Pickups, SUV, Sportwagen und Vans, Carfax-Bericht auf Anfrage. Autopartner GmbH American Cars.',
};

export default function Page() {
  return <Listing title='Aktueller Bestand' intro='Unsere Fahrzeuge werden nach unseren Standards geprüft. Den Carfax-Bericht erhalten Sie auf Anfrage.' list={vehicles} current='alle' />;
}
