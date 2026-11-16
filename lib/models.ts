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
  faq: [string, string][];
};

const check: Block = {
  h: 'Worauf Sie beim Kauf achten sollten',
  ul: [
    'Einen Carfax-Bericht zur Fahrzeughistorie. Zu unseren importierten Fahrzeugen erhalten Sie ihn auf Anfrage kostenlos.',
    'Unfallfreiheit, bestätigt durch Carfax und eine Prüfung in der Meisterwerkstatt',
    'Wartungsnachweise und den Zustand von Getriebe und Fahrwerk',
    'Vollständige Papiere für die deutsche Zulassung',
  ],
};
const service: Block = {
  h: 'Import, Zulassung und Service aus einer Hand',
  p: ['Wir importieren US-Fahrzeuge selbst. Umrüstung, TÜV-Vollabnahme nach § 21 StVZO und die Vorbereitung der deutschen Zulassung erledigen wir in Hagen. Danach betreuen wir Ihr Fahrzeug in unserer Meisterwerkstatt.'],
  links: [['So läuft der Import', '/import-umruestung'], ['Carfax-Fahrzeughistorie', '/carfax']],
};

export const models: Model[] = [
  {
    slug: 'dodge-ram',
    brandSlug: 'dodge',
    name: 'Dodge RAM',
    match: /ram/i,
    title: 'Dodge RAM kaufen in Hagen',
    desc: 'Dodge RAM 1500 kaufen in Hagen: US-Pickups, Carfax-Bericht auf Anfrage, Umrüstung, TÜV-Abnahme und Meisterwerkstatt. Autopartner GmbH American Cars.',
    lead: 'Der Dodge RAM 1500 ist ein Pickup in voller Größe, kräftig und alltagstauglich. Wir kennen ihn aus Verkauf, Import und Werkstatt.',
    blocks: [
      { h: 'Der RAM 1500 im Überblick', p: ['Der RAM 1500 ist ein Full-Size-Pickup mit großer Ladefläche. Er eignet sich als Zugfahrzeug, für den Betrieb und als Alltagsfahrzeug. Motor, Ausstattung und Ausführung unterscheiden sich von Fahrzeug zu Fahrzeug. Die Angaben finden Sie in der jeweiligen Fahrzeuganzeige.'] },
      { h: 'Der RAM in unserer Werkstatt', p: ['Fahrzeuge von Dodge und RAM betreuen wir täglich. Wartung, Diagnose und Reparatur erledigen wir in unserer Meisterwerkstatt in Hagen-Hohenlimburg.'], links: [['Dodge RAM 5.7 Hemi: Krümmerdichtung', '/dodge-ram-5-7-hemi'], ['Winterreifen für Pickup und SUV', '/winterreifen-pickup-suv']] },
      check,
      service,
    ],
    faq: [
      ['Welche Motoren gibt es beim RAM 1500?', 'Das hängt vom jeweiligen Fahrzeug ab. Motor und Ausstattung stehen in der Fahrzeuganzeige. Wir beraten Sie gern, welche Ausführung zu Ihrem Einsatz passt.'],
      ['Wie hoch ist die Anhängelast?', 'Maßgeblich sind die in den deutschen Fahrzeugpapieren eingetragenen Werte. Sprechen Sie uns vor dem Kauf an, wenn Sie einen Anhänger ziehen möchten.'],
      ['Kann ich einen RAM nach meinen Wünschen importieren lassen?', 'Ja. Wir importieren nahezu alle Marken und Modelle. Rechnen Sie insgesamt mit mindestens drei Monaten.'],
    ],
  },
  {
    slug: 'ford-mustang',
    brandSlug: 'ford',
    name: 'Ford Mustang',
    match: /mustang/i,
    title: 'Ford Mustang kaufen in Hagen',
    desc: 'Ford Mustang kaufen in Hagen: Coupé und Cabrio aus den USA, Carfax-Bericht auf Anfrage, eigene Meisterwerkstatt und Prüfstützpunkt des TÜV NORD.',
    lead: 'Der Ford Mustang ist der Klassiker unter den amerikanischen Sportwagen. Wir bieten ihn als Coupé und Cabrio an, je nach Verfügbarkeit.',
    blocks: [
      { h: 'Mustang als Coupé und Cabrio', p: ['Der Mustang ist der Einstieg in die amerikanische Sportwagenwelt: gut zu fahren, auffällig im Auftritt und alltagstauglich. Motor und Ausstattung unterscheiden sich von Fahrzeug zu Fahrzeug. Die Angaben finden Sie in der jeweiligen Fahrzeuganzeige.'] },
      { h: 'Der Mustang in unserer Werkstatt', p: ['Wartung, Reifen und Fahrwerk erledigen wir in unserer Meisterwerkstatt in Hagen-Hohenlimburg. Umbauten wie Felgen oder Fahrwerk klären wir vorab mit dem TÜV.'], links: [['Umbauten, Felgen und Höherlegung', '/umbauten-eintragung-felgen-hoeherlegung']] },
      check,
      service,
      { h: 'Ersatzschlüssel', p: ['Für Ford Mustang, Chevrolet Camaro und Dodge Challenger fertigen wir auch Ersatzschlüssel.'] },
    ],
    faq: [
      ['Gibt es den Mustang als Coupé und als Cabrio?', 'Ja, wir bieten beide Karosserieformen an, je nach aktuellem Bestand. Was verfügbar ist, sehen Sie unten auf dieser Seite.'],
      ['Ist ein Mustang alltagstauglich?', 'Ja, viele Kunden fahren ihn täglich. Bedenken Sie Verbrauch, Versicherung und Steuer vorab. Holen Sie sich dazu vor dem Kauf ein Angebot Ihrer Versicherung.'],
      ['Kann ich Felgen oder Fahrwerk ändern lassen?', 'Ja. Wir klären jeden Umbau vorab mit dem TÜV, damit er zulässig und eingetragen ist.'],
    ],
  },
  {
    slug: 'chrysler-pacifica',
    brandSlug: 'chrysler',
    name: 'Chrysler Pacifica',
    match: /pacifica/i,
    title: 'Chrysler Pacifica kaufen in Hagen',
    desc: 'Chrysler Pacifica kaufen in Hagen: komfortabler Van aus den USA, Carfax-Bericht auf Anfrage, Meisterwerkstatt und Prüfstützpunkt des TÜV NORD. Autopartner GmbH.',
    lead: 'Der Chrysler Pacifica ist der komfortable Familien-Van aus den USA, mit viel Platz und Ausstattung.',
    blocks: [
      { h: 'Der Pacifica im Überblick', p: ['Der Pacifica ist ein geräumiger Van für Familie und Beruf. Sitzplätze, Motor und Ausstattung unterscheiden sich von Fahrzeug zu Fahrzeug. Die Angaben finden Sie in der jeweiligen Fahrzeuganzeige.'] },
      { h: 'Der Pacifica im Alltag', p: ['Ein Van dieser Größe ist ein anderer Fahralltag als ein Kompaktwagen. Prüfen Sie vorab Stellplatz und Parkhäuser, und holen Sie sich ein Versicherungsangebot für das konkrete Fahrzeug.'], links: [['US-Auto im Alltag', '/us-fahrzeug-alltag'], ['Checkliste: Besichtigung und Probefahrt', '/checkliste-besichtigung-probefahrt']] },
      check,
      service,
    ],
    faq: [
      ['Wie viele Sitzplätze hat der Pacifica?', 'Das hängt von der Ausführung ab. Die Sitzplätze stehen in der jeweiligen Fahrzeuganzeige.'],
      ['Was muss ich bei Versicherung und Steuer beachten?', 'Beides kann sich von einem europäischen Vergleichsfahrzeug unterscheiden. Holen Sie sich vor dem Kauf ein Angebot für das konkrete Fahrzeug.'],
      ['Betreuen Sie den Pacifica auch in der Werkstatt?', 'Ja. Wartung und Reparatur für US-Fahrzeuge gehören bei uns zum Alltag, in unserer Meisterwerkstatt in Hagen-Hohenlimburg.'],
    ],
  },
];

export const getModel = (slug: string) => models.find((m) => m.slug === slug);
