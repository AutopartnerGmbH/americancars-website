import { vehicles, type Vehicle } from '@/lib/vehicles';

export type Cat = { key: string; label: string };

// Mögliche Kategorien. Auf der Seite erscheinen nur die, für die gerade ein Fahrzeug im Bestand ist.
export const allCategories: Cat[] = [
  { key: 'pickup', label: 'Pickups' },
  { key: 'suv', label: 'Offroad & SUV' },
  { key: 'sport', label: 'Sportwagen' },
  { key: 'van', label: 'Vans & Familie' },
  { key: 'limousine', label: 'Limousinen' },
];

export const activeCategories = (): (Cat & { count: number; cover: Vehicle })[] =>
  allCategories
    .map((c) => {
      const list = vehicles.filter((v) => v.category === c.key);
      return { ...c, count: list.length, cover: list[0] };
    })
    .filter((c) => c.count > 0);

export const brandsInStock = () => Array.from(new Set(vehicles.map((v) => v.brand))).sort();
