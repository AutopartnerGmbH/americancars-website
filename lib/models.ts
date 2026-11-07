import type { Block } from '@/lib/pages';

export type Model = {
  slug: string;
  brandSlug: string;
  name: string;
  match: RegExp;
  title: string;
  desc: string;
  lead: string;
  blocks: Block[];
};

const check: Block = {
  h: 'Worauf Sie beim Kauf achten sollten',
  ul: [
    'Einen Carfax-Bericht zur Fahrzeughistorie. Bei uns gibt es ihn zu jedem Fahrzeug.',
    'Unfallfreiheit, bestätigt durch Carfax und eine Prüfung in der Meisterwerkstatt',
    'Wartungsnachweise und den Zustand von Getriebe und Fahrwerk',
    'Vollständige Papiere für die deutsche Zulassung',
  ],
};
const service: Block = {
  h: 'Import, Zulassung und Service aus einer Hand',
  p: ['Wir importieren US-Fahrzeuge selbst. Umrüstung, TÜV-Vollabnahme nach § 21 StVZO und die Vorbereitung der deutschen Zulassung erledigen wir in Hagen. Danach betreuen wir Ihr Fahrzeug in unserer Meisterwerkstatt.'],
  links: [['So läuft der Import', '/import-umruestung'], ['Carfax zu jedem Fahrzeug', '/carfax']],
};

export const models: Model[] = [
  {
    slug: 'dodge-ram',
    brandSlug: 'dodge',
    name: 'Dodge RAM',
    match: /ram/i,
    title: 'Dodge RAM kaufen in Hagen',
    desc: 'Dodge RAM 1500 kaufen in Hagen: geprüfte US-Pickups mit Carfax, Umrüstung, TÜV-Abnahme und Meisterwerkstatt. Autopartner GmbH American Cars.',
    lead: 'Der Dodge RAM 1500 ist ein Pickup in voller Größe, kräftig und alltagstauglich. Wir haben ihn im Bestand und kennen ihn bis ins Detail.',
    blocks: [
      { h: 'Der RAM 1500 im Überblick', p: ['Der RAM 1500 ist ein Full-Size-Pickup mit großer Ladefläche. In unserem Bestand finden Sie ihn mit dem 5,7-Liter-V8-HEMI-Motor mit 401 PS. Er eignet sich als Zugfahrzeug, für den Betrieb und als Alltagsfahrzeug.'] },
      check,
      service,
    ],
  },
  {
    slug: 'ford-mustang',
    brandSlug: 'ford',
    name: 'Ford Mustang',
    match: /mustang/i,
    title: 'Ford Mustang kaufen in Hagen',
    desc: 'Ford Mustang kaufen in Hagen: Coupé und Cabrio aus den USA, unfallfrei mit Carfax, eigene Meisterwerkstatt und Prüfstützpunkt TÜV NORD.',
    lead: 'Der Ford Mustang ist der Klassiker unter den amerikanischen Sportwagen. Wir bieten Coupé und Cabrio, geprüft und mit Carfax.',
    blocks: [
      { h: 'Mustang als Coupé und Cabrio', p: ['Im Bestand haben wir den Mustang mit dem V6-Motor mit 305 PS, als Coupé und als Cabrio. Er ist der Einstieg in die amerikanische Sportwagenwelt: gut zu fahren, auffällig im Auftritt und alltagstauglich.'] },
      check,
      service,
      { h: 'Ersatzschlüssel', p: ['Für Ford Mustang, Chevrolet Camaro und Dodge Challenger fertigen wir auch Ersatzschlüssel.'] },
    ],
  },
  {
    slug: 'chevrolet-silverado',
    brandSlug: 'chevrolet',
    name: 'Chevrolet Silverado',
    match: /silverado/i,
    title: 'Chevrolet Silverado kaufen in Hagen',
    desc: 'Chevrolet Silverado kaufen in Hagen: US-Pickup mit Carfax, Umrüstung und TÜV-Abnahme aus einer Hand. Autopartner GmbH American Cars.',
    lead: 'Der Chevrolet Silverado ist ein kräftiger US-Pickup. Wir importieren, prüfen und rüsten ihn für die deutsche Straße um.',
    blocks: [
      { h: 'Silverado High Country', p: ['In unserem Bestand steht der Silverado als High Country, zum Beispiel mit 426 PS. Er ist ein vollwertiger Pickup mit hochwertiger Ausstattung und viel Platz.'] },
      check,
      service,
    ],
  },
  {
    slug: 'ford-bronco',
    brandSlug: 'ford',
    name: 'Ford Bronco',
    match: /bronco/i,
    title: 'Ford Bronco kaufen in Hagen',
    desc: 'Ford Bronco kaufen in Hagen: Offroad-SUV aus den USA mit 4x4 und Soft Top, geprüft mit Carfax. Autopartner GmbH American Cars.',
    lead: 'Der Ford Bronco ist ein Offroad-SUV mit Allradantrieb und Soft Top. Wir haben ihn geprüft und mit Carfax im Angebot.',
    blocks: [
      { h: 'Bronco Big Bend 4x4', p: ['In unserem Bestand steht der Bronco als Big Bend mit 4x4 und Soft Top, mit 275 PS. Er verbindet Geländetauglichkeit mit offenem Fahrspaß.'] },
      check,
      service,
    ],
  },
  {
    slug: 'chrysler-pacifica',
    brandSlug: 'chrysler',
    name: 'Chrysler Pacifica',
    match: /pacifica/i,
    title: 'Chrysler Pacifica kaufen in Hagen',
    desc: 'Chrysler Pacifica kaufen in Hagen: 7-Sitzer Van aus den USA mit 360°-Kamera, geprüft und mit Carfax. Autopartner GmbH American Cars.',
    lead: 'Der Chrysler Pacifica ist der komfortable Familien-Van aus den USA. Platz für sieben, viel Ausstattung und geprüfte Qualität.',
    blocks: [
      { h: 'Pacifica Select, 7-Sitzer', p: ['In unserem Bestand finden Sie den Pacifica Select mit sieben Sitzplätzen, 291 PS und 360°-Kamera. Er ist ein geräumiger Van für Familie und Beruf.'] },
      check,
      service,
    ],
  },
];

export const getModel = (slug: string) => models.find((m) => m.slug === slug);
