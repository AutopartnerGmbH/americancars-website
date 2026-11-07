export type Vehicle = {
  slug: string;
  brand: string;
  category: string;
  name: string;
  tag: string;
  meta: string;
  price: string;
  vat?: 'ausweisbar' | 'differenz'; // Steuerart; solange nicht gesetzt, wird keine MwSt.-Angabe gezeigt
  image: string | null;
  alt: string;
  specs: [string, string][];
};

// Beispieldaten. Später kommen diese automatisch von mobile.de.
export const vehicles: Vehicle[] = [
  {
    slug: 'ram-1500',
    brand: 'Dodge',
    category: 'pickup',
    name: 'Dodge RAM 1500 5.7 V8 HEMI Sport',
    tag: 'Neuwagen',
    meta: '401 PS · Benzin · sofort verfügbar',
    price: '74.990 €',
    image: '/img/ram.jpg',
    alt: 'Schwarzer Dodge RAM 1500',
    specs: [['Zustand', 'Neuwagen'], ['Leistung', '401 PS'], ['Kraftstoff', 'Benzin'], ['Verfügbarkeit', 'sofort'], ['Farbe', 'Schwarz']],
  },
  {
    slug: 'silverado-high-country',
    brand: 'Chevrolet',
    category: 'pickup',
    name: 'Chevrolet Silverado High Country',
    tag: 'Unfallfrei',
    meta: 'EZ 10/2024 · 12.256 km · 426 PS',
    price: '64.990 €',
    image: '/img/silverado.jpg',
    alt: 'Chevrolet Silverado High Country mit Offroad-Umbau',
    specs: [['Zustand', 'Unfallfrei'], ['Erstzulassung', '10/2024'], ['Kilometerstand', '12.256 km'], ['Leistung', '426 PS']],
  },
  {
    slug: 'pacifica-select',
    brand: 'Chrysler',
    category: 'van',
    name: 'Chrysler Pacifica Select, 7-Sitzer',
    tag: 'Neuwagen',
    meta: '291 PS · 360°-Kamera',
    price: '54.990 €',
    image: '/img/pacifica.jpg',
    alt: 'Schwarzer Chrysler Pacifica',
    specs: [['Zustand', 'Neuwagen'], ['Leistung', '291 PS'], ['Sitzplätze', '7'], ['Ausstattung', '360°-Kamera']],
  },
  {
    slug: 'mustang-v6-coupe',
    brand: 'Ford',
    category: 'sport',
    name: 'Ford Mustang V6 Coupé',
    tag: 'Unfallfrei',
    meta: 'EZ 11/2015 · 107.652 km · 305 PS',
    price: '21.990 €',
    image: '/img/mustang.jpg',
    alt: 'Grauer Ford Mustang V6 Coupé',
    specs: [['Zustand', 'Unfallfrei'], ['Erstzulassung', '11/2015'], ['Kilometerstand', '107.652 km'], ['Leistung', '305 PS']],
  },
  {
    slug: 'bronco-big-bend',
    brand: 'Ford',
    category: 'suv',
    name: 'Ford Bronco Big Bend 4x4, Soft Top',
    tag: 'Unfallfrei',
    meta: 'EZ 01/2022 · 19.942 km · 275 PS',
    price: '33.990 €',
    image: null,
    alt: 'Ford Bronco Big Bend',
    specs: [['Zustand', 'Unfallfrei'], ['Erstzulassung', '01/2022'], ['Kilometerstand', '19.942 km'], ['Leistung', '275 PS']],
  },
  {
    slug: 'mustang-v6-cabrio',
    brand: 'Ford',
    category: 'sport',
    name: 'Ford Mustang V6 Cabrio',
    tag: 'Unfallfrei',
    meta: 'EZ 01/2016 · 153.467 km · 305 PS',
    price: '19.990 €',
    image: null,
    alt: 'Ford Mustang V6 Cabrio',
    specs: [['Zustand', 'Unfallfrei'], ['Erstzulassung', '01/2016'], ['Kilometerstand', '153.467 km'], ['Leistung', '305 PS']],
  },
];

export const getVehicle = (slug: string) => vehicles.find((v) => v.slug === slug);

export const priceNum = (v: Vehicle): number | null => {
  const n = parseInt(v.price.replace(/\D/g, ''), 10);
  return Number.isFinite(n) && n > 0 ? n : null;
};
