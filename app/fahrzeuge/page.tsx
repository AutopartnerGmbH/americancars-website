import type { Metadata } from 'next';
import Listing from '@/components/Listing';
import { vehicles } from '@/lib/vehicles';

export const metadata: Metadata = {
  title: 'US-Fahrzeuge kaufen: aktueller Bestand',
  description: 'Aktueller Bestand an US-Fahrzeugen in Hagen: Pickups, SUV, Sportwagen und Vans, alle mit Carfax. Autopartner GmbH American Cars.',
};

export default function Page() {
  return <Listing title='Aktueller Bestand' intro='Alle Fahrzeuge haben wir selbst geprüft. Zu jedem gibt es einen Carfax-Bericht.' list={vehicles} current='alle' />;
}
