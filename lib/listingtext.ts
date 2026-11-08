// Redaktionelle Einleitungstexte für Listen-Seiten (Google braucht eigenen Text neben der Fahrzeugliste).
const common =
  'Alle Fahrzeuge aus unserem Bestand haben wir selbst geprüft. Zu jedem Fahrzeug gibt es einen Carfax-Bericht, damit Sie die Historie vor dem Kauf kennen. Import, Umrüstung, TÜV-Vollabnahme und Zulassung erledigen wir in Hagen, und Ihre Finanzierung rechnen Sie direkt auf der Fahrzeugseite durch.';

const texts: Record<string, string[]> = {
  alle: [
    'Bei Autopartner American Cars in Hagen-Hohenlimburg finden Sie US-Fahrzeuge, die wir selbst importieren und kennen: Pickups, SUV, Sportwagen und Vans amerikanischer Hersteller. ' + common,
    'Sie suchen ein bestimmtes Modell, das gerade nicht dabei ist? Sprechen Sie uns an. Wir importieren auch nach Ihren Wünschen und beraten Sie persönlich, auf Wunsch auch auf Englisch.',
  ],
  pickup: [
    'Pickups aus den USA stehen für Nutzwert und Präsenz: große Ladefläche, hohe Anhängelast und kräftige V8-Motoren, etwa beim Dodge RAM oder Chevrolet Silverado. Wer einen Pickup in Deutschland zulassen will, braucht eine saubere Umrüstung und die TÜV-Vollabnahme, beides übernehmen wir. ' + common,
  ],
  suv: [
    'US-SUV und Offroad-Fahrzeuge wie der Ford Bronco verbinden Alltagstauglichkeit mit Geländefähigkeit. Beim Import achten wir auf Unfallfreiheit, Zustand von Fahrwerk und Antrieb sowie vollständige Papiere für die deutsche Zulassung. ' + common,
  ],
  sport: [
    'Sportwagen und Muscle Cars wie der Ford Mustang, Chevrolet Camaro oder Dodge Challenger sind Klassiker mit V8-Sound. Wir prüfen jedes Fahrzeug vor dem Verkauf, und unsere Meisterwerkstatt kümmert sich auch danach um Wartung, Ersatzschlüssel und Umbauten. ' + common,
  ],
  van: [
    'Vans wie der Chrysler Pacifica bieten viel Platz für Familie und Gepäck, dazu den Komfort amerikanischer Großraumfahrzeuge. Als Prüfstützpunkt des TÜV NORD sind wir bei Zulassungsfragen und HU/AU direkt Ihr Ansprechpartner. ' + common,
  ],
  chevrolet: [
    'Chevrolet steht bei uns vor allem für den Silverado-Pickup, daneben auch für Modelle wie Tahoe, Camaro und Corvette. Wir importieren Chevrolet-Fahrzeuge selbst, prüfen sie in unserer Meisterwerkstatt und betreuen sie nach dem Kauf. ' + common,
  ],
  chrysler: [
    'Chrysler ist bei uns vor allem mit dem Pacifica vertreten, einem geräumigen Van für Familien. Wir importieren Chrysler-Fahrzeuge selbst, rüsten sie für die deutsche Zulassung um und übernehmen die TÜV-Abnahme. ' + common,
  ],
  dodge: [
    'Dodge ist die Marke für kräftige V8-Motoren, vom Challenger bis zum RAM-Pickup. Wir kennen die Technik und kümmern uns um Import, Umrüstung und Service aus einer Hand. ' + common,
  ],
  ford: [
    'Ford aus den USA bedeutet Mustang, F-150 und Bronco. Wir importieren selbst, prüfen jedes Fahrzeug und kümmern uns um Umrüstung und TÜV-Abnahme. Für den Mustang bieten wir auch Ersatzschlüssel an. ' + common,
  ],
};

export const listingText = (key: string): string[] => texts[key] ?? [];
