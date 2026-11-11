export type NavItem = { label: string; href: string; sub?: [string, string][] };

export const nav: NavItem[] = [
  { label: 'Fahrzeugangebote', href: '/fahrzeuge', sub: [['Fahrzeugüberblick', '/fahrzeuge']] },
  {
    label: 'Service',
    href: '/werkstatt-service',
    sub: [
      ['Werkstatt & Service', '/werkstatt-service'],
      ['TÜV & Homologation', '/tuev-und-homologation'],
      ['Fahrzeug umbauen & tunen', '/us-fahrzeug-tunen'],
      ['Unfall-Instandsetzung', '/unfall-instandsetzung'],
      ['Klimaservice', '/klimaservice'],
      ['HU & AU', '/hu-au-hagen'],
      ['Motordiagnose', '/motordiagnose'],
      ['Bremsen', '/bremsen-service'],
      ['Getriebe & Motor', '/getriebe-motor-reparatur'],
      ['Alle Werkstatt-Leistungen', '/werkstatt-leistungen'],
    ],
  },
  {
    label: 'Dein Autopartner',
    href: '/import-umruestung',
    sub: [
      ['Import & Umrüstung', '/import-umruestung'],
      ['Umzugsgut', '/umzugsgut'],
      ['Autokauf & Übergabe', '/kauf-und-uebergabe'],
      ['Carfax', '/carfax'],
      ['Tipps & Hinweise', '/tipps-hinweise'],
      ['Unfallwagen aus Litauen', '/unfallwagen-litauen-erkennen'],
      ['Betrugsmasche', '/betrugsmasche'],
      ['Blog', '/blog'],
    ],
  },
  { label: 'Team', href: '' },
  { label: 'Ankauf', href: '/#ankauf' },
  { label: 'Kundenstimmen', href: '/#bewertungen' },
  { label: 'Kontakt', href: '/kontakt' },
];
