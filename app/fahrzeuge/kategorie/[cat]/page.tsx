import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Listing from '@/components/Listing';
import { activeCategories } from '@/lib/categories';
import { vehicles } from '@/lib/vehicles';

export const dynamicParams = false;
export const generateStaticParams = () => activeCategories().map((c) => ({ cat: c.key }));

export async function generateMetadata({ params }: { params: Promise<{ cat: string }> }): Promise<Metadata> {
  const { cat } = await params;
  const c = activeCategories().find((x) => x.key === cat);
  return c ? { title: `${c.label} aus den USA kaufen`, description: `${c.label} aus den USA im aktuellen Bestand von Autopartner GmbH American Cars in Hagen: geprüft, mit Carfax-Bericht und Finanzierungsrechner.` } : {};
}

export default async function Page({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const c = activeCategories().find((x) => x.key === cat);
  if (!c) notFound();
  return <Listing title={c.label} intro='Diese Fahrzeuge haben wir aktuell für Sie.' list={vehicles.filter((v) => v.category === cat)} current={cat} />;
}
