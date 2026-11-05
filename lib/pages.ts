export type Block = { h?: string; p?: string[]; ul?: string[]; ol?: string[]; links?: [string, string][]; box?: string };
export type Page = {
  slug: string;
  title: string;
  eyebrow: string;
  lead: string;
  desc: string;
  blocks: Block[];
  cta?: [string, string];
};

export const pages: Page[] = [
  {
    slug: 'werkstatt-service',
    title: 'Werkstatt & Service',
    eyebrow: 'KFZ-Meisterwerkstatt · alle Marken',
    lead: 'Wartung, Reparatur, Umbau und Unfallinstandsetzung für alle Fabrikate, nicht nur für US-Fahrzeuge.',
    desc: 'KFZ-Meisterwerkstatt in Hagen für alle Marken: Inspektion, Klimaservice, Motordiagnose, Reparatur, TÜV- und AU-Prüfung. Autopartner GmbH American Cars.',
    blocks: [
      { h: 'Service & Inspektion', p: ['Wartung und Inspektion erfolgen in unserer Meisterwerkstatt nach Herstellervorgaben, für Kundenfahrzeuge genauso wie für unsere Verkaufsfahrzeuge. Regelmäßige Kontrollen erkennen Sicherheitsmängel früh und verhindern teure Folgeschäden.', 'Umfang und Wechselintervalle richten sich nach Ihrem Fahrzeug. Unsere Checkliste umfasst unter anderem:'], ul: ['Beleuchtung und elektrische Einrichtungen', 'Kühlsystem, Bremsflüssigkeit, Batterie, Scheibenwaschanlage', 'Luft-, Pollen- und Kraftstofffilter, Motoröl und Ölfilter', 'Zündkerzen und Dichtheit der Antriebskomponenten', 'Bremsleitungen und Bremsbelagstärke', 'Achs- und Lenkungskomponenten auf Spiel und Verschleiß', 'Reifenzustand und Radbefestigung'] },
      { h: 'Klimaservice', p: ['Eine jährliche Prüfung hält die Kühlleistung hoch und beugt warmer Luft, beschlagenen Scheiben und Gerüchen vor. Wir arbeiten mit einem Kombi-Gerät von SNAP-ON für die Kältemittel R134a und 1234yf.'], ol: ['Hoch- und Niederdruck vergleichen und den Zustand bewerten', 'Kompressor, Trockner, Verdampfer und Kondensator prüfen, Innenraumtemperatur messen', 'Innenraumfilter erneuern', 'Kältemittel absaugen und das System evakuieren', 'Mit der vorgeschriebenen Menge Kältemittel befüllen'] },
      { h: 'Motordiagnose und Fehlerauslesen', p: ['Moderne Fahrzeuge speichern Fehler im Bordcomputer. Wir lesen den Fehlerspeicher mit SNAP-ON-Diagnosegeräten über den OBD-Anschluss aus. Manche Fehler lassen sich direkt löschen, andere analysieren wir anhand der Schaltpläne. Die Diagnosesoftware halten wir aktuell.'] },
      { h: 'Alles aus einer Hand', ul: ['Wartung und Reparatur für alle Marken', 'HU und AU als Prüfstützpunkt TÜV NORD', 'Umbau und Tuning', 'Unfall-Instandsetzung mit Schadensabwicklung', 'Ersatzschlüssel für Ford Mustang, Chevrolet Camaro und Dodge Challenger'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    slug: 'tuev-und-homologation',
    title: 'TÜV & Homologation',
    eyebrow: 'Prüfstützpunkt TÜV NORD',
    lead: 'Umrüstung, Homologation, TÜV-Abnahme und Zulassung: der Rundum-Service für Importfahrzeuge.',
    desc: 'TÜV-Vollabnahme nach § 21 StVZO, Homologation und AU für US-Importfahrzeuge in Hagen. Prüfstützpunkt TÜV NORD für alle Hersteller.',
    blocks: [
      { h: 'Umrüstung und TÜV-Abnahme für US-Cars', p: ['Wir führen die TÜV-Vollabnahme für US-Importfahrzeuge nach § 21 StVZO durch, die für den Straßenverkehr in Deutschland nötig ist. Die erforderlichen Unterlagen beschaffen wir für Sie:'], ul: ['Zollunbedenklichkeitsbescheinigung', 'KBA-Auskunft', 'Herkunftsdokumente (US-Title bzw. MSO)', 'Fahrzeugdatenblatt', 'Lichttechnisches Gutachten'] },
      { h: 'So geht es weiter', ol: ['Umrüstung nach den geltenden StVZO-Vorgaben', 'Antrag auf den deutschen Fahrzeugbrief', 'TÜV-Vorführung und Abnahme', 'Deutsche Papiere inklusive nötiger Ausnahmegenehmigungen', 'Abgasuntersuchung (AU)'], p: ['Danach können Sie das Fahrzeug beim Straßenverkehrsamt anmelden.'] },
      { h: 'TÜV- und AU-Untersuchungen für alle Marken', p: ['Wir sind zertifizierter Prüfstützpunkt für alle Hersteller. AU- und TÜV-Untersuchungen sind nach kurzer Terminvereinbarung möglich, Inspektionen und Voruntersuchungen meist kurzfristig. Auch Mercedes, BMW, Audi, VW und Porsche sind bei uns willkommen.'] },
      { h: 'Homologation und Typzulassung', p: ['Importierte Fahrzeuge müssen die deutschen Vorschriften erfüllen, damit sie zugelassen werden. Die größte Hürde sind meist die Abgasvorschriften, die von Land zu Land abweichen. Mit Homologation ist die Einhaltung dieser Vorschriften und die Erteilung der Betriebserlaubnis gemeint. Ohne Umrüstung geht es in der Regel nicht.', 'Das richtet sich an alle, die ein Fahrzeug mit ausländischen Papieren fahren und deutsche Papiere brauchen.'] },
      { h: 'Umzugsgut', p: ['Sie kehren nach längerem Auslandsaufenthalt zurück und bringen Ihr Fahrzeug mit? Wir unterstützen bei Abholung in den USA, Anmeldung mit deutschen Papieren und Auslieferung bis vor die Haustür.'], links: [['Mehr zum Umzugsgut', '/umzugsgut']] },
    ],
    cta: ['Anfrage senden', '/kontakt'],
  },
  {
    slug: 'us-fahrzeug-tunen',
    title: 'Fahrzeug umbauen & tunen',
    eyebrow: 'Umbau & Tuning',
    lead: 'Sie nennen uns Ihren Wunsch, wir setzen fast alles um.',
    desc: 'US-Fahrzeug tunen und umbauen in Hagen: Höher- und Tieferlegung, Verbreiterung, Felgen, Auspuff, Lightbars und mehr. Autopartner GmbH American Cars.',
    blocks: [
      { h: 'US-Fahrzeug tunen und umbauen', p: ['US-Fahrzeuge machen Spaß und sind individuell, bieten aber oft Potenzial für Verbesserungen. Erst die persönliche Umsetzung macht ein Auto zum Traumwagen. Wir haben jahrelange Erfahrung und legen Wert auf Individualität, Qualität und liebevolle Details.'] },
      { h: 'Das setzen wir um', ul: ['Auspuffanlagen und Sound', 'Felgen und Reifen', 'Bodykits und Flammendesign', 'Verkabelung, Scheinwerfer, Arbeitsleuchten und Lightbars', 'Höher- und Tieferlegung', 'Kotflügel- und Spurverbreiterungen', 'Flügeltüren („LamboDoors“) auf Wunsch'] },
    ],
    cta: ['Umbau anfragen', '/kontakt'],
  },
  {
    slug: 'unfall-instandsetzung',
    title: 'Unfall-Instandsetzung',
    eyebrow: 'Karosserie & Schadensabwicklung',
    lead: 'Von der kleinen Delle bis zum größeren Unfallschaden: wir kümmern uns um alles.',
    desc: 'Unfall-Instandsetzung in Hagen für alle Marken: Gutachter, Versicherungsabwicklung, Ersatzteile, Lack, Ersatzfahrzeug. Autopartner GmbH.',
    blocks: [
      { h: 'Unfallreparatur für alle Marken', p: ['Ein Unfall bringt viele Aufgaben mit sich: Polizei, Versicherung, Gutachter und ein Auto, das eine Weile ausfällt. Wenn das Fahrzeug kein Totalschaden ist, reparieren wir es so, dass es technisch und optisch wieder uneingeschränkt verkehrssicher ist.', 'Wir reparieren alle Marken, vom VW bis zum Porsche. Bei US-Fahrzeugen kennen wir die Besonderheiten bei Teilen und Reparaturablauf.'] },
      { h: 'Das übernehmen wir für Sie', ul: ['Abschleppen oder Abholung am aktuellen Standort', 'Fahrzeugannahme und Schadensaufnahme', 'Beauftragung eines Gutachters und Schadensdokumentation', 'Abstimmung mit Ihrer Versicherung bis zur Reparaturfreigabe', 'Beschaffung von Ersatzteilen, auch für US-Fahrzeuge (nur Teile in Originalqualität)', 'Lackierung und Einbau, auch von Teilen aus den USA', 'Ersatzfahrzeug, gegebenenfalls gegen Aufpreis', 'Endmontage und Finish'] },
      { p: ['Alle Modelle und Baujahre, vom Glasschaden über den Auffahrunfall bis zum Wildunfall. Der Umgang mit Versicherungen ist für uns Routine. Rufen Sie uns einfach an.'] },
    ],
    cta: ['Jetzt anfragen', '/kontakt'],
  },
  {
    slug: 'import-umruestung',
    title: 'Import & Umrüstung',
    eyebrow: 'Dein Autopartner',
    lead: 'Von der Fahrzeugprüfung in Florida bis zur deutschen Zulassung: so kommt Ihr US-Fahrzeug zu Ihnen.',
    desc: 'US-Fahrzeug importieren: Prüfung in Florida, Transport nach Bremerhaven, Zoll, Umrüstung und TÜV-Vollabnahme in Hagen. Autopartner GmbH American Cars.',
    blocks: [
      { h: 'Unser Anspruch', p: ['Ein langjähriger Partner in Florida prüft die Fahrzeuge, bevor wir sie kaufen.'], ul: ['Nur unfallfreie Fahrzeuge, belegt per Carfax oder Autocheck', 'Direkter Transport von den USA nach Deutschland, ohne Umweg über osteuropäische Werkstätten', 'Keine Fahrzeuge mit Wasserschäden, defekter Bordelektronik oder defekten Steuergeräten'] },
      { h: 'Transport und Ankunft', ol: ['Nach dem Kauf holt ein Transportunternehmen das Fahrzeug ab und bringt es zum Hafen Miami.', 'Die Überfahrt nach Bremerhaven dauert etwa vier bis sechs Wochen, je nach Route und Wetter.', 'Nach Entladung und Verzollung kommt das Fahrzeug zu uns nach Hagen.'] },
      { h: 'Umrüstung und Zulassung', p: ['Die Umrüstung erfolgt in unserer Meisterwerkstatt nach TÜV-Vorgaben. Danach folgt die Vollabnahme nach § 21 StVZO durch den TÜV NORD mit einem mehrseitigen Gutachten. Mit Gutachten und Papieren ist die Zulassung nach deutschem Standard möglich.', 'Typische Anpassungen sind eine nachgerüstete Nebelschlussleuchte, weil US-Fahrzeuge ab Werk keine haben, und gelbe statt rote Blinker.'] },
      { h: 'Wissenswertes zum Import', ul: ['Das „Certificate of Title“ (kurz Title) entspricht in etwa Fahrzeugbrief und Fahrzeugschein.', 'Zoll: 10 % des Kaufpreises', 'Einfuhrumsatzsteuer: 19 % auf Kaufpreis plus Zollgebühren', 'Nach Zahlung von Zoll und Steuer gibt es die Zoll-Unbedenklichkeitsbescheinigung (ZUB).', 'Mit Title, ZUB und TÜV-Gutachten entstehen die deutschen Fahrzeugpapiere.'], p: ['Ein zuverlässiger Verschiffer ist unverzichtbar und der Papierkram ist aufwendig. Genau das nehmen wir Ihnen ab.'] },
    ],
    cta: ['Import anfragen', '/kontakt'],
  },
  {
    slug: 'carfax',
    title: 'Carfax',
    eyebrow: 'Fahrzeughistorie',
    lead: 'Zu jedem unserer Fahrzeuge erhalten Sie einen unfallfreien Carfax-Bericht, kostenlos.',
    desc: 'Carfax-Fahrzeughistorie für US-Fahrzeuge: was der Bericht zeigt und warum wir jedem Fahrzeug einen unfallfreien Carfax mitgeben. Autopartner GmbH Hagen.',
    blocks: [
      { h: 'Was ist Carfax?', p: ['Carfax ist eine Online-Fahrzeughistorie für US-Fahrzeuge. Jedes ab 1981 aus den USA importierte Fahrzeug ist dort registriert. Für die Abfrage genügt die 17-stellige Fahrgestellnummer (VIN).', 'Der Bericht kann zum Beispiel enthalten:'], ul: ['Totalschaden und schwere Unfälle', 'Anzahl der Vorbesitzer', 'Airbag-Auslösungen', 'Tachomanipulationen', 'Wasser- oder Feuerschäden', 'Diebstahl', 'Service- und Inspektionsintervalle'] },
      { p: ['Nicht erfasst werden Schäden, die weder polizeilich noch versicherungstechnisch gemeldet und in nicht zugelassenen Werkstätten repariert wurden. Fragen Sie deshalb vor jedem Kauf nach der VIN und lassen Sie die Historie prüfen. Seriöse Händler legen den Bericht von sich aus vor.'] },
      { h: 'Unser Angebot', p: ['Alle Fahrzeuge bei uns haben eine unfallfreie Carfax-Historie. Den Bericht stellen wir Ihnen kostenlos zur Verfügung.'], links: [['Carfax selbst abfragen (carfax.eu)', 'https://www.carfax.eu']] },
    ],
    cta: ['Fahrzeuge ansehen', '/fahrzeuge'],
  },
  {
    slug: 'tipps-hinweise',
    title: 'Tipps & Hinweise',
    eyebrow: 'Ratgeber',
    lead: 'Acht Tipps für den Kauf eines US-Fahrzeugs und woran Sie schlechte Angebote erkennen.',
    desc: 'Tipps zum Kauf eines US-Fahrzeugs: Carfax, Kaufvertrag, Vorschäden, Warnsignale bei Importangeboten. Ratgeber von Autopartner GmbH American Cars Hagen.',
    blocks: [
      { h: 'Acht Tipps zum Kauf', ol: ['Machen Sie eine Carfax-Abfrage.', 'Fragen Sie den Händler nach der Fahrzeughistorie.', 'Schließen Sie den Kaufvertrag möglichst mit einer deutschen Firma. Bei Verträgen im Auftrag ausländischer Firmen haben Käufer oft kaum Ansprüche.', 'Lassen Sie Vorschäden wie Getriebe- oder Motorschäden und nachlackierte Teile im Vertrag festhalten.', 'Ein gutes TÜV-Gutachten schließt frühere Unfälle oder Schäden in den USA nicht aus.', 'Verkäufer, die nur telefonisch erreichbar sein wollen, erschweren schriftliche Nachweise. Das ist oft ein Warnsignal.', 'Standardisierte Haftungsausschlüsse in Inseraten wirken häufig unseriös. Fragen Sie nach Vorschäden und Wasserschäden.', 'Gasanlagen deuten oft auf Unfallschäden hin. Prüfen Sie Wartungsintervalle, Serviceheft und TÜV-Berichte.'] },
      { h: 'Vertrauen ist gut, Kontrolle ist besser', p: ['Fragen Sie immer nach der Fahrgestellnummer (VIN). Für US-Fahrzeuge ab Baujahr 1981 gibt es eine Carfax-Auskunft. Wer die VIN verweigert, verschweigt oft noch mehr.'] },
      { h: 'Woran Sie einen schlechten US-Gebrauchten erkennen', ul: ['Viele Importe laufen über Litauen und werden aus Total- oder Wasserschäden zusammengebaut, manchmal aus zwei Unfallwagen.', 'Billige Gasanlagen mit kurzer Lebensdauer', 'Aufwendige Beklebung, Verzierungen oder Tuningteile können einen Unfallwagen verdecken.', 'Verkäufer, die keine E-Mails beantworten', 'Fehlende ausgewiesene Mehrwertsteuer deutet oft auf einen Import hin.', 'Sehr hochwertige Ausstattung bei niedrigem Preis'], p: ['Lassen Sie sich nicht blenden: VIN erfragen und Carfax abfragen.'] },
      { box: 'Die Hinweise beruhen auf unseren Erfahrungswerten. Für ihre Richtigkeit übernehmen wir keine Haftung.' },
    ],
    cta: ['Beratung anfragen', '/kontakt'],
  },
  {
    slug: 'betrugsmasche',
    title: 'Betrugsmasche bei US-Unfallfahrzeugen',
    eyebrow: 'Warnung',
    lead: 'Preise, die zu schön sind, um wahr zu sein: so läuft die Masche mit aufgebauten US-Unfallwagen.',
    desc: 'Betrugsmasche bei US-Fahrzeugen: Salvage Title, Wiederaufbau in Osteuropa, zusammengesetzte Unfallwagen, manipulierte Airbags. Warnung von Autopartner GmbH Hagen.',
    blocks: [
      { p: ['Medien haben über Händler berichtet, die unfallbeschädigte US-Modelle wie Mustang, Challenger, Camaro, Pacifica oder Grand Caravan anbieten, oft zu auffällig günstigen Preisen. Unser Partner in Florida sieht solche Fahrzeuge vor dem Kauf.'] },
      { h: 'So läuft es typischerweise ab', ol: ['In den USA hat ein Fahrzeug einen schweren Unfall. Die Versicherung erklärt es zum Totalschaden und es erhält einen „Salvage Title“. Das steht im Carfax. In den USA darf das Auto so nicht mehr zugelassen werden.', 'Die Versicherung verkauft das nicht fahrbereite Fahrzeug an den Meistbietenden, häufig an ausländische Aufkäufer.', 'Die Aufkäufer lassen die Fahrzeuge etwa in Litauen günstig reparieren. Bis hierhin ist nichts zu beanstanden.'] },
      { h: 'Wo es unseriös wird', ul: ['Zwei Unfallwagen werden zu einem verbunden, zum Beispiel einer mit Front- und einer mit Heckschaden.', 'Airbags werden durch Stecker simuliert, die das Steuergerät täuschen, oder der Airbagstoff wird durch wirkungslose Materialien ersetzt.', 'Lack, Streifen, Hauben, Spoiler, Auspuffanlagen und angebliche Edeltuning-Teile werten das Fahrzeug optisch auf.', 'Kunstleder und Schriftzüge in Kopfstützen oder Türen können auf einen Wiederaufbau hinweisen.', 'Eine Gasanlage ist oft eingebaut und im Preis enthalten, das macht das Angebot attraktiver.'] },
      { h: 'Grenzen der TÜV-Prüfung', p: ['Der TÜV prüft, ob das Fahrzeug zum Zeitpunkt der Abnahme verkehrssicher ist. Er prüft nicht, ob es frühere Unfallschäden gab. Airbags werden mit Diagnosegeräten getestet. Sind sie überbrückt, sind weitere Kontrollen nicht möglich.'] },
    ],
    cta: ['Beratung anfragen', '/kontakt'],
  },
  {
    slug: 'team',
    title: 'Unser Team',
    eyebrow: 'Autopartner GmbH',
    lead: 'Seit 1988 im Autohandel, mit Werkstattmeistern, Gesellen, Auszubildenden und Kollegen in Büro und Verkauf.',
    desc: 'Das Team der Autopartner GmbH American Cars in Hagen: Geschäftsführung, Werkstattmeister, Mechatroniker, Auszubildende. Seit 1988.',
    blocks: [
      { p: ['Qualität und Verlässlichkeit in Werkstatt und Verkauf sind uns wichtig. Diese Werte geben wir Auszubildenden von Beginn an mit.'] },
      { h: 'Wer wir sind', ul: ['Willi, Geschäftsführung', 'Christoph, Geschäftsführung und Verkauf', 'Erik, Werkstattmeister', 'Dominik, KFZ-Mechatroniker', 'Tomas, Auszubildender'] },
      { p: ['Wir suchen aktuell KFZ-Mechatroniker, Auszubildende und Aufbereiter.'], links: [['Zur Karriereseite', '/karriere']] },
    ],
    cta: ['Kontakt aufnehmen', '/kontakt'],
  },
  {
    slug: 'karriere',
    title: 'Karriere',
    eyebrow: 'Offene Stellen',
    lead: 'Du hast Leidenschaft für Autos? Bei uns arbeitest du täglich mit außergewöhnlichen Fahrzeugen.',
    desc: 'Jobs bei Autopartner GmbH American Cars in Hagen: KFZ-Mechatroniker und Aufbereiter gesucht. Jetzt bewerben.',
    blocks: [
      { h: 'KFZ-Mechatroniker (m/w/d)', p: ['Aufgaben: Wartung und Instandhaltung aller Marken, Nachrüstung von Zubehör, elektrische Umrüstungen an US-Fahrzeugen, Einhaltung von Qualitäts- und Sicherheitsstandards.', 'Voraussetzungen: abgeschlossene Ausbildung als KFZ-Mechatroniker oder KFZ-Mechaniker, Führerschein Klasse B oder die Bereitschaft, ihn zu machen, Interesse an fachlicher Weiterentwicklung.'] },
      { h: 'KFZ-Aufbereiter / Fahrzeugpfleger (m/w/d)', p: ['Aufgaben: Innen- und Außenreinigung, Aufbereitung und Pflege, unter anderem von Lack und Leder.', 'Wir bieten modernes Equipment, eine voll ausgestattete Aufbereitungshalle, Hebebühnen für ergonomisches Arbeiten und ein familiäres Team.'] },
      { p: ['Bewerbungen per E-Mail an info@autopartner-hagen.de oder telefonisch unter 02334 / 80814-0.'] },
    ],
    cta: ['Jetzt bewerben', 'mailto:info@autopartner-hagen.de?subject=Bewerbung'],
  },
  {
    slug: 'blog',
    title: 'Blog',
    eyebrow: 'Ratgeber & Neuigkeiten',
    lead: 'Wissen rund um Import, Zulassung und US-Fahrzeuge.',
    desc: 'Ratgeber und Neuigkeiten rund um US-Fahrzeuge, Import und Zulassung von Autopartner GmbH American Cars in Hagen.',
    blocks: [
      { h: 'Aktuelle Beiträge', links: [['Umzugsgut: Auto aus den USA importieren', '/umzugsgut'], ['Tipps & Hinweise zum Kauf eines US-Fahrzeugs', '/tipps-hinweise'], ['Betrugsmasche bei US-Unfallfahrzeugen', '/betrugsmasche']] },
    ],
  },
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
