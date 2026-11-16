// Redaktionelle Einleitungstexte für Listen-Seiten (Google braucht eigenen Text neben der Fahrzeugliste).
const common =
  'Unsere Fahrzeuge werden nach unseren Standards geprüft. Zu unseren importierten Fahrzeugen erhalten Sie auf Anfrage den Carfax-Bericht, damit Sie die Historie vor dem Kauf kennen. Import, Umrüstung, TÜV-Abnahme und Zulassung erledigen wir in Hagen, und Ihre Finanzierung rechnen Sie direkt auf der Fahrzeugseite durch.';

const texts: Record<string, string[]> = {
  alle: [
    'Bei Autopartner American Cars in Hagen-Hohenlimburg finden Sie US-Fahrzeuge, die wir selbst importieren und kennen: Pickups, SUV, Sportwagen und Vans amerikanischer Hersteller. ' + common,
    'Sie suchen ein bestimmtes Modell, das gerade nicht dabei ist? Sprechen Sie uns an. Wir importieren auch nach Ihren Wünschen und beraten Sie persönlich, auf Wunsch auch auf Englisch.',
  ],
  pickup: [
    'Pickups aus den USA stehen für Nutzwert und Präsenz: große Ladefläche, hohe Anhängelast und kräftige Motoren, etwa beim Dodge RAM. Vor dem Kauf sollten Sie Größe, Verbrauch sowie Steuer und Versicherung bedenken. Wer einen Pickup in Deutschland zulassen will, braucht eine saubere Umrüstung und die TÜV-Abnahme, beides übernehmen wir. ' + common,
  ],
  suv: [
    'US-SUV und Offroad-Fahrzeuge verbinden Alltagstauglichkeit mit Geländefähigkeit. Beim Import achten wir auf Unfallfreiheit, Zustand von Fahrwerk und Antrieb sowie vollständige Papiere für die deutsche Zulassung. Umbauten wie Felgen oder Höherlegung klären wir vorab mit dem TÜV. ' + common,
  ],
  sport: [
    'Sportwagen und Muscle Cars aus den USA stehen für Fahrspaß und Auftritt. Der Ford Mustang ist dafür das bekannteste Beispiel. Unsere Meisterwerkstatt kümmert sich nach dem Kauf um Wartung, Reifen, Fahrwerk und Umbauten. ' + common,
  ],
  van: [
    'Vans wie der Chrysler Pacifica bieten viel Platz für Familie und Gepäck, dazu den Komfort amerikanischer Großraumfahrzeuge. Stellplatz, Versicherung und Steuer sollten Sie vorab klären. Als Prüfstützpunkt des TÜV NORD sind wir bei Zulassungsfragen und HU/AU direkt Ihr Ansprechpartner. ' + common,
  ],
  chevrolet: [
    'Chevrolet-Fahrzeuge aus den USA importieren wir selbst, rüsten sie für die deutsche Zulassung um und übernehmen die TÜV-Abnahme. Nach dem Kauf betreuen wir sie in unserer Meisterwerkstatt. ' + common,
  ],
  chrysler: [
    'Chrysler ist bei uns vor allem mit dem Pacifica vertreten, einem geräumigen Van für Familien. Wir importieren Chrysler-Fahrzeuge selbst, rüsten sie für die deutsche Zulassung um und übernehmen die TÜV-Abnahme. ' + common,
  ],
  dodge: [
    'Dodge steht bei uns vor allem für den RAM-Pickup mit kräftigen Motoren. Wir kennen die Technik und kümmern uns um Import, Umrüstung und Service aus einer Hand. ' + common,
  ],
  ford: [
    'Ford aus den USA bedeutet bei uns vor allem den Mustang. Wir importieren selbst und kümmern uns um Umrüstung und TÜV-Abnahme. Für den Mustang bieten wir auch Ersatzschlüssel an. ' + common,
  ],
};

export const listingText = (key: string): string[] => texts[key] ?? [];

const links: Record<string, [string, string][]> = {
  pickup: [['Dodge RAM kaufen', '/modelle/dodge-ram'], ['US-Auto im Alltag', '/us-fahrzeug-alltag'], ['Winterreifen für Pickup und SUV', '/winterreifen-pickup-suv']],
  suv: [['Umbauten, Felgen und Höherlegung', '/umbauten-eintragung-felgen-hoeherlegung'], ['Fahrwerksumbau und Höherlegung', '/fahrwerksumbau-hoeherlegung']],
  sport: [['Ford Mustang kaufen', '/modelle/ford-mustang'], ['Umbauten, Felgen und Höherlegung', '/umbauten-eintragung-felgen-hoeherlegung'], ['Checkliste: Besichtigung und Probefahrt', '/checkliste-besichtigung-probefahrt']],
  van: [['Chrysler Pacifica kaufen', '/modelle/chrysler-pacifica'], ['US-Auto im Alltag', '/us-fahrzeug-alltag']],
  dodge: [['Dodge RAM kaufen', '/modelle/dodge-ram'], ['Dodge RAM 5.7 Hemi: Krümmerdichtung', '/dodge-ram-5-7-hemi']],
  ford: [['Ford Mustang kaufen', '/modelle/ford-mustang']],
  chrysler: [['Chrysler Pacifica kaufen', '/modelle/chrysler-pacifica']],
  chevrolet: [['Import und Umrüstung', '/import-umruestung'], ['Lohnt sich ein US-Import?', '/lohnt-sich-us-import']],
  alle: [['Import und Umrüstung', '/import-umruestung'], ['Lohnt sich ein US-Import?', '/lohnt-sich-us-import'], ['Carfax', '/carfax']],
};
export const listingLinks = (key: string): [string, string][] => links[key] ?? [];
