import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Listing from '@/components/Listing';
import { brandsInStock } from '@/lib/categories';
import { vehicles } from '@/lib/vehicles';

export const dynamicParams = false;
export const generateStaticParams = () => brandsInStock().map((b) => ({ brand: b.toLowerCase() }));

const find = (slug: string) => brandsInStock().find((b) => b.toLowerCase() === slug);

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand } = await params;
  const b = find(brand);
  return b ? { title: `${b} kaufen in Hagen`, description: `${b} im aktuellen Bestand von Autopartner GmbH American Cars in Hagen.` } : {};
}

export default async function Page({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const b = find(brand);
  if (!b) notFound();
  return <Listing title={b} intro={`Unsere aktuellen ${b}-Fahrzeuge.`} list={vehicles.filter((v) => v.brand === b)} current={brand} />;
}
