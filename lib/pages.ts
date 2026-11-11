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
      { h: 'Weitere Leistungen', links: [['Alle Werkstatt-Leistungen im Überblick', '/werkstatt-leistungen']] },
      { h: 'Alles aus einer Hand', ul: ['Wartung und Reparatur für alle Marken', 'HU und AU als Prüfstützpunkt des TÜV NORD', 'Umbau und Tuning', 'Unfall-Instandsetzung mit Schadensabwicklung', 'Ersatzschlüssel für Ford Mustang, Chevrolet Camaro und Dodge Challenger'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    slug: 'tuev-und-homologation',
    title: 'TÜV & Homologation',
    eyebrow: 'Prüfstützpunkt des TÜV NORD',
    lead: 'Umrüstung, Homologation, TÜV-Abnahme und Zulassung: der Rundum-Service für Importfahrzeuge.',
    desc: 'TÜV-Vollabnahme nach § 21 StVZO, Homologation und AU für US-Importfahrzeuge in Hagen. Prüfstützpunkt des TÜV NORD für alle Hersteller.',
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
      { h: 'Ihr Wunsch steht nicht dabei?', p: ['Wir setzen gerne auch individuelle Wünsche um, die in dieser Liste nicht aufgeführt sind. Sprechen Sie uns einfach an: Rufen Sie an, schreiben Sie uns oder kommen Sie vorbei. Wir beraten Sie persönlich und sagen Ihnen ehrlich, was machbar ist.'], links: [['Jetzt Kontakt aufnehmen', '/kontakt']] },
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
    desc: 'Betrugsmasche bei US-Fahrzeugen: Salvage Title, Wiederaufbau in Osteuropa, zusammengesetzte Unfallwagen, manipulierte Airbags. Warnung aus Hagen.',
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
      { h: 'Aktuelle Beiträge', links: [['Umzugsgut: Auto aus den USA importieren', '/umzugsgut'], ['Tipps & Hinweise zum Kauf eines US-Fahrzeugs', '/tipps-hinweise'], ['Betrugsmasche bei US-Unfallfahrzeugen', '/betrugsmasche'], ['Unfallwagen aus Litauen erkennen', '/unfallwagen-litauen-erkennen'], ['Dodge RAM 5.7 Hemi: Krümmerdichtung', '/dodge-ram-5-7-hemi'], ['Autokauf: vom Kauf bis zur Übergabe', '/kauf-und-uebergabe']] },
    ],
  },
  {
    slug: 'klimaservice',
    title: 'Klimaservice in Hagen',
    eyebrow: 'KFZ-Meisterwerkstatt · alle Marken',
    lead: 'Kalte Luft im Sommer, klare Scheiben im Winter: Prüfung, Wartung und Befüllung Ihrer Klimaanlage.',
    desc: 'Klimaservice in Hagen für alle Marken: Klimaanlage prüfen, absaugen, evakuieren und befüllen, Kältemittel R134a und 1234yf. KFZ-Meisterwerkstatt.',
    blocks: [
      { h: 'Wann Sie die Klimaanlage prüfen lassen sollten', ul: ['Die Luft wird nicht mehr richtig kalt', 'Die Scheiben beschlagen schnell', 'Es riecht muffig aus den Lüftungsdüsen', 'Die Klimaanlage läuft laut oder schaltet sich häufig ein und aus', 'Die letzte Prüfung liegt länger als ein Jahr zurück'], p: ['Eine jährliche Prüfung hält die Kühlleistung hoch und beugt Folgeschäden am Kompressor vor.'] },
      { h: 'So läuft der Klimaservice ab', ol: ['Hoch- und Niederdruck vergleichen und den Zustand bewerten', 'Kompressor, Trockner, Verdampfer und Kondensator prüfen, Innenraumtemperatur messen', 'Innenraumfilter erneuern', 'Kältemittel absaugen und das System evakuieren', 'Mit der vorgeschriebenen Menge Kältemittel befüllen'] },
      { h: 'Für alle Fahrzeuge und beide Kältemittel', p: ['Wir arbeiten mit einem Kombi-Gerät von SNAP-ON für die Kältemittel R134a und 1234yf. So bedienen wir ältere und neuere Fahrzeuge, ob Golf oder Dodge RAM.'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    slug: 'hu-au-hagen',
    title: 'HU und AU in Hagen',
    eyebrow: 'Prüfstützpunkt des TÜV NORD',
    lead: 'Hauptuntersuchung und Abgasuntersuchung für alle Hersteller, direkt bei uns in der Werkstatt.',
    desc: 'HU und AU in Hagen-Hohenlimburg: Prüfstützpunkt des TÜV NORD für alle Marken, Vorabcheck in der Meisterwerkstatt, auch für US-Fahrzeuge. Autopartner GmbH.',
    blocks: [
      { h: 'TÜV und AU aus einer Hand', p: ['Wir sind Prüfstützpunkt des TÜV NORD und prüfen Fahrzeuge aller Hersteller, vom Kleinwagen bis zum US-Pickup. Hauptuntersuchung (HU) und Abgasuntersuchung (AU) erledigen Sie bei uns in einem Termin.', 'Pkw müssen in der Regel alle zwei Jahre zur HU, die erste Untersuchung steht nach drei Jahren an.'] },
      { h: 'Das bringen Sie mit', ul: ['Ihr Fahrzeug', 'Die Zulassungsbescheinigung Teil I (Fahrzeugschein)', 'Bei Umbauten die zugehörigen Papiere, zum Beispiel Gutachten oder Teilegutachten'] },
      { h: 'Vorab-Check gegen Überraschungen', p: ['Auf Wunsch schauen wir Ihr Fahrzeug vor der Prüfung in unserer Meisterwerkstatt an. Kleine Mängel wie Beleuchtung oder Bremsbeläge beheben wir direkt, damit die Plakette beim ersten Mal klappt.', 'Ohne Mängel dauert die Prüfung normalerweise keine 60 Minuten.'] },
      { h: 'Auch für Importfahrzeuge', p: ['Für US-Importe führen wir zusätzlich die Vollabnahme nach § 21 StVZO durch.'], links: [['Mehr zu TÜV und Homologation', '/tuev-und-homologation']] },
    ],
    cta: ['Termin anfragen', '/#werkstatt'],
  },
  {
    slug: 'motordiagnose',
    title: 'Motordiagnose und Fehlerauslesen',
    eyebrow: 'KFZ-Meisterwerkstatt · alle Marken',
    lead: 'Warnleuchte an? Wir lesen den Fehlerspeicher aus und finden die Ursache.',
    desc: 'Motordiagnose und Fehlerspeicher auslesen in Hagen: Diagnosegeräte von SNAP-ON, alle Marken, auch US-Fahrzeuge. Autopartner GmbH American Cars.',
    blocks: [
      { h: 'Wenn eine Warnleuchte aufleuchtet', p: ['Moderne Fahrzeuge speichern Fehler im Bordcomputer. Wir lesen den Fehlerspeicher mit SNAP-ON-Diagnosegeräten über den OBD-Anschluss aus. Manche Fehler lassen sich direkt löschen, andere analysieren wir anhand der Schaltpläne.', 'Die Diagnosesoftware halten wir aktuell, damit auch neuere Modelle zuverlässig ausgelesen werden.'] },
      { h: 'Typische Anlässe', ul: ['Motorkontrollleuchte oder Warnleuchten im Kombiinstrument', 'Leistungsverlust oder unruhiger Motorlauf', 'Erhöhter Verbrauch', 'Probleme beim Starten', 'Elektrikfehler und Fehlermeldungen im Display'] },
      { h: 'Für US-Fahrzeuge und alle anderen Marken', p: ['Wir kennen amerikanische Fahrzeuge in jedem Detail und diagnostizieren genauso Fahrzeuge deutscher und asiatischer Hersteller.'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    slug: 'bremsen-service',
    title: 'Bremsen prüfen und reparieren',
    eyebrow: 'KFZ-Meisterwerkstatt · alle Marken',
    lead: 'Bremsbeläge, Bremsscheiben und Bremsflüssigkeit: sicher bremsen ist keine Nebensache.',
    desc: 'Bremsen prüfen und reparieren in Hagen: Beläge, Scheiben, Bremsflüssigkeit und Bremsleitungen für alle Marken. KFZ-Meisterwerkstatt Autopartner GmbH.',
    blocks: [
      { h: 'Woran Sie merken, dass die Bremse Aufmerksamkeit braucht', ul: ['Quietschen oder Schleifen beim Bremsen', 'Vibrieren im Lenkrad oder Bremspedal', 'Der Pedalweg wird länger oder weich', 'Das Fahrzeug zieht beim Bremsen zur Seite', 'Die Bremsenwarnleuchte brennt'] },
      { h: 'Das prüfen und erneuern wir', ul: ['Bremsbeläge und Bremsscheiben', 'Bremsflüssigkeit', 'Bremsleitungen und Bremsschläuche', 'Bremssättel und Bremsbelagstärke', 'Radlager und Achskomponenten auf Spiel und Verschleiß'] },
      { h: 'Auch für schwere US-Fahrzeuge', p: ['Pickups und SUV aus den USA sind schwer und beanspruchen die Bremsen stark. Wir kennen die Besonderheiten und verbauen die passenden Teile.'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    slug: 'getriebe-motor-reparatur',
    title: 'Getriebe und Motor reparieren',
    eyebrow: 'KFZ-Meisterwerkstatt · alle Marken',
    lead: 'Erst die Diagnose, dann der Preis: Getriebe- und Motorinstandsetzung in der Meisterwerkstatt.',
    desc: 'Getriebe und Motor reparieren in Hagen: Diagnose, Getriebeservice und Motoreninstandsetzung für alle Marken und US-Fahrzeuge. Autopartner GmbH American Cars.',
    blocks: [
      { h: 'Schäden früh erkennen', ul: ['Ruckeln oder verzögertes Schalten', 'Ungewöhnliche Geräusche aus Getriebe oder Motor', 'Ölverlust unter dem Fahrzeug', 'Leistungsverlust oder starker Ölverbrauch', 'Warnleuchten im Kombiinstrument'] },
      { h: 'So gehen wir vor', ol: ['Wir lesen den Fehlerspeicher aus und prüfen das Fahrzeug.', 'Wir erklären Ihnen den Befund und die Reparaturmöglichkeiten.', 'Sie entscheiden. Erst danach beginnen wir mit der Reparatur.'] },
      { h: 'Erfahrung mit amerikanischer Technik', p: ['Viele US-Fahrzeuge fahren mit Automatikgetrieben und großvolumigen Motoren. Wir reparieren sie in unserer eigenen Meisterwerkstatt, genauso wie Fahrzeuge aller anderen Marken.'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    "slug": "oelwechsel",
    "title": "Ölservice und Ölwechsel in Hagen",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Frisches Öl und ein neuer Filter halten den Motor lange leistungsfähig.",
    "desc": "Ölwechsel mit Filter in Hagen für alle Marken und US-Fahrzeuge, nach Herstellervorgabe. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Das Wartungsintervall Ihres Fahrzeugs ist erreicht",
          "Die Ölwarnleuchte oder eine Service-Meldung erscheint",
          "Der Ölstand sinkt spürbar",
          "Sie fahren viel Kurzstrecke oder ziehen regelmäßig einen Anhänger"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Altöl ablassen und Ölfilter erneuern",
          "Motoröl in der für Ihr Fahrzeug vorgeschriebenen Spezifikation einfüllen",
          "Ölstand kontrollieren und Dichtheit der Ablassschraube prüfen",
          "Service-Intervallanzeige zurücksetzen"
        ]
      },
      {
        "h": "Auch für große US-Motoren",
        "p": [
          "V8-Motoren aus den USA haben oft größere Ölmengen und eigene Spezifikationen. Wir kennen die Vorgaben und füllen das passende Öl ein."
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "zahnriemen-steuerkette",
    "title": "Zahnriemen und Steuerkette erneuern",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Steuertrieb rechtzeitig prüfen oder wechseln, bevor ein Motorschaden entsteht.",
    "desc": "Zahnriemenwechsel und Steuerkette erneuern in Hagen, alle Marken. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Der Wechselintervall des Zahnriemens ist erreicht",
          "Rasselnde oder klappernde Geräusche beim Kaltstart",
          "Der Motor läuft unruhig oder springt schlecht an",
          "Eine Warnleuchte weist auf Steuerzeiten hin"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Zustand des Steuertriebs prüfen",
          "Zahnriemen mit Spannrolle und, wo vorgesehen, Wasserpumpe erneuern",
          "Steuerkette, Spanner und Führungsschienen ersetzen",
          "Steuerzeiten einstellen und Probefahrt durchführen"
        ]
      },
      {
        "h": "Warum rechtzeitig wechseln",
        "p": [
          "Reißt ein Zahnriemen oder springt eine Steuerkette, kann der Motor erheblich beschädigt werden. Ein planmäßiger Wechsel ist deutlich günstiger als eine Motorinstandsetzung."
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "kupplungswechsel",
    "title": "Kupplungswechsel",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Rutschende oder schwergängige Kupplung? Wir prüfen und erneuern sie.",
    "desc": "Kupplungswechsel in Hagen für alle Marken, Diagnose und Reparatur in der Meisterwerkstatt. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Die Kupplung rutscht, besonders unter Last",
          "Das Kupplungspedal fühlt sich schwammig oder schwergängig an",
          "Der Gang lässt sich schwer einlegen",
          "Es riecht verbrannt oder es treten Geräusche beim Auskuppeln auf"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Kupplungsanlage prüfen, auch Hydraulik und Ausrücklager",
          "Kupplungssatz mit Druckplatte und Scheibe erneuern",
          "Schwungrad prüfen und, wenn nötig, erneuern",
          "Probefahrt und Funktionskontrolle"
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "fluessigkeiten-zuendkerzen-batterie",
    "title": "Bremsflüssigkeit, Zündkerzen und Batterie",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Kleine Wartungsarbeiten mit großer Wirkung für Sicherheit und Zuverlässigkeit.",
    "desc": "Bremsflüssigkeit wechseln, Zündkerzen erneuern und Batteriewechsel in Hagen. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Bremsflüssigkeit: spätestens nach dem vom Hersteller vorgesehenen Zeitraum, sie nimmt mit der Zeit Wasser auf",
          "Zündkerzen: bei unruhigem Lauf, Startproblemen oder erhöhtem Verbrauch",
          "Batterie: wenn der Motor nur zögerlich startet oder Bordspannung schwankt"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Bremsflüssigkeit erneuern und das System entlüften",
          "Zündkerzen ausbauen, prüfen und passende Kerzen einsetzen",
          "Batterie prüfen, bei Bedarf tauschen und das Bordnetz kontrollieren"
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "auspuff-katalysator",
    "title": "Auspuff und Katalysator",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Defekte Abgasanlage? Wir reparieren oder tauschen die betroffenen Teile.",
    "desc": "Auspuffreparatur und Katalysator in Hagen, Prüfung durch den TÜV NORD Prüfstützpunkt im Haus. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Der Motor klingt lauter als gewohnt",
          "Es klappert unter dem Fahrzeug",
          "Die Abgaswerte bei der AU sind nicht in Ordnung",
          "Eine Warnleuchte weist auf den Katalysator hin"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Abgasanlage auf Rost, Undichtigkeiten und Aufhängungen prüfen",
          "Endschalldämpfer, Mittelschalldämpfer oder Rohre erneuern",
          "Katalysator und Lambdasonden prüfen und bei Bedarf ersetzen",
          "Abgasuntersuchung (AU) direkt bei uns"
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "stossdaempfer-fahrwerk",
    "title": "Stoßdämpfer und Fahrwerk",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Sicheres Fahrverhalten braucht ein intaktes Fahrwerk.",
    "desc": "Stoßdämpfer und Fahrwerk prüfen und erneuern in Hagen, alle Marken und US-Fahrzeuge. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Das Fahrzeug schaukelt nach Bodenwellen nach",
          "Der Bremsweg wird länger oder das Auto taucht beim Bremsen stark ein",
          "Klopfgeräusche aus dem Fahrwerk",
          "Reifen nutzen sich ungleichmäßig ab"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Stoßdämpfer, Federn, Lager und Querlenker prüfen",
          "Verschlissene Teile achsweise erneuern",
          "Spur und Sturz prüfen, bei Bedarf Achsvermessung anschließen"
        ]
      },
      {
        "h": "Schwere US-Fahrzeuge",
        "p": [
          "Pickups und SUV aus den USA belasten das Fahrwerk stark. Wir wählen passende Teile aus und beraten Sie auch zu Fahrwerksumbauten."
        ],
        "links": [
          [
            "Fahrwerksumbau und Höherlegung",
            "/fahrwerksumbau-hoeherlegung"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "achsvermessung",
    "title": "Achsvermessung",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Gerader Lauf, weniger Reifenverschleiß, sicheres Lenken.",
    "desc": "Achsvermessung in Hagen für alle Marken und US-Fahrzeuge. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Das Fahrzeug zieht zu einer Seite",
          "Das Lenkrad steht bei Geradeausfahrt schief",
          "Die Reifen verschleißen ungleichmäßig",
          "Nach neuen Reifen, Fahrwerksarbeiten, Unfall oder Bordsteinkontakt"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Spur, Sturz und Nachlauf messen",
          "Einstellbare Werte auf die Herstellervorgabe bringen",
          "Messprotokoll mit den Werten vor und nach der Einstellung"
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "autoelektrik",
    "title": "Autoelektrik und Elektronik",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Elektrikfehler suchen und beheben, vom Licht bis zum Steuergerät.",
    "desc": "Autoelektrik und Fahrzeugelektronik in Hagen: Fehlersuche, Reparatur, Diagnose. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Beleuchtung, Fensterheber oder Zentralverriegelung fallen aus",
          "Die Batterie entlädt sich über Nacht",
          "Fehlermeldungen im Display oder Warnleuchten",
          "Defekte Sensoren oder Steuergeräte"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Fehlerspeicher mit SNAP-ON-Diagnosegeräten auslesen",
          "Fehler anhand der Schaltpläne eingrenzen",
          "Leitungen, Stecker, Sensoren und Steuergeräte prüfen und instandsetzen",
          "Ruhestrom messen und Verbraucher aufspüren"
        ]
      },
      {
        "links": [
          [
            "Mehr zur Motordiagnose",
            "/motordiagnose"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "motoreninstandsetzung",
    "title": "Motoreninstandsetzung",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Wenn der Motor mehr braucht als eine kleine Reparatur.",
    "desc": "Motoreninstandsetzung in Hagen: Diagnose, Reparatur und Überholung für alle Marken und US-Fahrzeuge. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Starker Ölverbrauch oder blauer Rauch",
          "Kompressionsverlust oder Leistungseinbruch",
          "Klopfen, Klackern oder Metallgeräusche aus dem Motor",
          "Kühlmittel im Öl oder Öl im Kühlmittel"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Diagnose und Befund mit Erklärung der Reparaturmöglichkeiten",
          "Teilinstandsetzung, zum Beispiel Zylinderkopf oder Dichtungen",
          "Austausch oder Überholung des Motors, abgestimmt mit Ihnen",
          "Probefahrt und Funktionskontrolle"
        ]
      },
      {
        "p": [
          "Sie entscheiden, was gemacht wird. Erst danach beginnen wir mit der Reparatur."
        ],
        "links": [
          [
            "Getriebe und Motor reparieren",
            "/getriebe-motor-reparatur"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "reifenservice",
    "title": "Reifenservice",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Montage, Wuchten und Radwechsel aus einer Hand.",
    "desc": "Reifenservice in Hagen: Reifenmontage, Wuchten, Radwechsel für alle Fahrzeuge inklusive US-Pickups. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Saisonaler Wechsel zwischen Sommer- und Winterreifen",
          "Neue Reifen oder Felgen sind fällig",
          "Das Lenkrad vibriert bei höherer Geschwindigkeit",
          "Reifenschaden oder Luftverlust"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Reifen von der Felge ab- und aufziehen, Räder wuchten",
          "Komplette Räder wechseln",
          "Reifenzustand, Profiltiefe und Luftdruck prüfen",
          "Reifendruckkontrollsystem (RDKS) anlernen"
        ]
      },
      {
        "links": [
          [
            "Reifeneinlagerung",
            "/reifeneinlagerung"
          ],
          [
            "Reifen und Felgen",
            "/reifen-und-felgen"
          ],
          [
            "RDKS",
            "/rdks-reifendruckkontrolle"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "reifeneinlagerung",
    "title": "Reifeneinlagerung",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Ihre Sommer- oder Winterräder sicher aufbewahrt, bis Sie sie wieder brauchen.",
    "desc": "Reifeneinlagerung in Hagen: Sommer- und Winterräder einlagern lassen. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Sie haben keinen Platz für zwei Radsätze",
          "Sie möchten die Räder trocken und sicher lagern",
          "Sie wechseln im Frühjahr und Herbst ohnehin bei uns"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Komplette Räder oder Reifen einlagern",
          "Beim saisonalen Wechsel bringen wir den eingelagerten Satz ans Fahrzeug",
          "Zustand der Reifen vor der Einlagerung prüfen"
        ]
      },
      {
        "p": [
          "Fragen Sie bei der Terminvereinbarung nach Einlagerung und Konditionen."
        ],
        "links": [
          [
            "Zum Reifenservice",
            "/reifenservice"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "reifen-und-felgen",
    "title": "Reifen und Felgen kaufen",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Passende Reifen und Felgen für Pkw, SUV und US-Pickups.",
    "desc": "Reifenverkauf und Felgen in Hagen, Beratung und Montage für alle Fahrzeuge. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Ihre Reifen sind abgefahren oder gealtert",
          "Sie möchten Sommer-, Winter- oder Ganzjahresreifen",
          "Sie wünschen neue Felgen oder einen zweiten Radsatz",
          "Sie brauchen Größen für Pickups oder SUV"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Beratung zu Reifengröße, Tragfähigkeit und Geschwindigkeitsindex",
          "Reifen- und Felgenverkauf mit Montage und Wuchten",
          "Eintragungspflichtige Rad-Reifen-Kombinationen mit dem TÜV-Prüfstützpunkt klären"
        ]
      },
      {
        "links": [
          [
            "Zum Reifenservice",
            "/reifenservice"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "rdks-reifendruckkontrolle",
    "title": "RDKS: Reifendruckkontrollsystem",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Sensoren prüfen, anlernen und tauschen.",
    "desc": "RDKS in Hagen: Reifendruck-Sensoren prüfen, anlernen und erneuern. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Die Reifendruck-Warnleuchte leuchtet dauerhaft",
          "Beim Radwechsel müssen die Sensoren angelernt werden",
          "Ein Sensor ist defekt oder die Batterie ist leer"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Sensoren auslesen und prüfen",
          "Sensoren anlernen oder ersetzen",
          "Reifendruck auf die Herstellervorgabe einstellen und das System zurücksetzen"
        ]
      },
      {
        "p": [
          "Bei Fahrzeugen aus den USA ist RDKS serienmäßig verbaut. Wir kennen die gängigen Systeme."
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "fahrwerksumbau-hoeherlegung",
    "title": "Fahrwerksumbau und Höherlegung",
    "eyebrow": "US-Fahrzeuge",
    "lead": "Mehr Höhe, mehr Geländeeigenschaft oder ein anderer Look, sauber umgesetzt.",
    "desc": "Fahrwerksumbau und Höherlegung für US-Fahrzeuge in Hagen, mit Eintragung beim TÜV-Prüfstützpunkt. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Sie möchten Ihren Pickup oder SUV höherlegen",
          "Sie wünschen größere Reifen und mehr Freigang",
          "Sie möchten das Fahrwerk für Zugbetrieb oder Gelände anpassen"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Beratung zu passenden Fahrwerkskomponenten",
          "Einbau und Einstellung inklusive Achsvermessung",
          "Abnahme und Eintragung über unseren Prüfstützpunkt des TÜV NORD"
        ]
      },
      {
        "p": [
          "Umbauten müssen zugelassen und eingetragen sein, sonst erlischt die Betriebserlaubnis. Wir klären das vorab mit Ihnen."
        ],
        "links": [
          [
            "Umbau und Tuning",
            "/us-fahrzeug-tunen"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "ersatzteile-zubehoer-us",
    "title": "Ersatzteile und Zubehör für US-Fahrzeuge",
    "eyebrow": "US-Fahrzeuge",
    "lead": "Teile für Dodge, RAM, Chevrolet, Ford und mehr.",
    "desc": "Ersatzteile und Zubehör für US-Fahrzeuge in Hagen: Beratung, Beschaffung und Einbau. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Sie brauchen Verschleißteile für Ihren US-Wagen",
          "Ein Teil ist defekt und muss beschafft werden",
          "Sie wünschen Zubehör wie Anhängerkupplung, Trittbretter oder Laderaumabdeckungen"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Beratung und Beschaffung passender Teile",
          "Einbau in unserer Meisterwerkstatt",
          "Passgenaue Lösungen für amerikanische Modelle"
        ]
      },
      {
        "p": [
          "Nennen Sie uns Modell, Baujahr und, wenn möglich, die Fahrgestellnummer. Dann können wir Teile gezielt anfragen."
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "autoglas-steinschlag",
    "title": "Autoglas: Steinschlag und Scheibentausch",
    "eyebrow": "KFZ-Meisterwerkstatt · Karosserie",
    "lead": "Steinschlag oder Scheibenschaden? Wir erledigen alles und rechnen direkt mit Ihrer Versicherung ab.",
    "desc": "Autoglas in Hagen: Steinschlag reparieren, Frontscheiben für nahezu alle US-Fahrzeuge besorgen und einbauen, Direktabrechnung mit der Versicherung.",
    "blocks": [
      {
        "h": "Wann Sie handeln sollten",
        "ul": [
          "Ein Steinschlag in der Frontscheibe, solange er klein ist",
          "Die Scheibe hat einen Riss",
          "Der Sichtbereich des Fahrers ist beeinträchtigt"
        ]
      },
      {
        "h": "Ohne Aufwand für Sie",
        "p": [
          "Wir rechnen direkt mit Ihrer Versicherung ab und übernehmen die gesamte Abwicklung. Für Sie entsteht kein Aufwand: Sie bringen das Fahrzeug, den Rest erledigen wir.",
          "Ob und in welcher Höhe eine Selbstbeteiligung anfällt, hängt von Ihrem Versicherungsvertrag ab. Das klären wir gern vorab mit Ihnen."
        ]
      },
      {
        "h": "Frontscheiben für US-Fahrzeuge",
        "p": [
          "Wir besorgen Frontscheiben für nahezu alle US-Fahrzeuge und bauen sie fachgerecht in unserer Meisterwerkstatt ein. Das gilt für Pickups, SUV und Limousinen amerikanischer Hersteller."
        ]
      },
      {
        "h": "Unser Leistungsumfang",
        "ul": [
          "Steinschlag bewerten und, wenn möglich, reparieren",
          "Front-, Heck- oder Seitenscheibe tauschen",
          "Beschaffung der passenden Scheibe, auch für US-Modelle",
          "Kamera- und Sensorsysteme im Scheibenbereich beachten",
          "Abrechnung mit der Versicherung und komplette Abwicklung"
        ]
      }
    ],
    "cta": [
      "Termin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "unfallgutachten",
    "title": "Gutachten bei Unfallschäden",
    "eyebrow": "KFZ-Meisterwerkstatt · Karosserie",
    "lead": "Nach dem Unfall: Schaden dokumentieren und richtig abwickeln.",
    "desc": "Gutachten bei Unfallschäden in Hagen: Unfallinstandsetzung mit Schadensabwicklung. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Ihr Fahrzeug wurde bei einem Unfall beschädigt",
          "Sie brauchen eine verlässliche Schadensaufstellung für die Versicherung",
          "Sie möchten Reparatur und Abwicklung aus einer Hand"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Schaden aufnehmen und dokumentieren",
          "Reparaturweg und Kosten mit Ihnen besprechen",
          "Abwicklung mit der Versicherung begleiten"
        ]
      },
      {
        "links": [
          [
            "Unfall-Instandsetzung",
            "/unfall-instandsetzung"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "fahrzeugaufbereitung",
    "title": "Fahrzeugaufbereitung und Politur",
    "eyebrow": "KFZ-Meisterwerkstatt · Pflege",
    "lead": "Lack, Felgen und Innenraum wieder auf Hochglanz.",
    "desc": "Fahrzeugaufbereitung und Politur in Hagen: Lackpflege, Innenreinigung, Wertsteigerung. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Sie möchten Ihr Fahrzeug verkaufen und den Wert steigern",
          "Der Lack ist matt oder zeigt feine Kratzer",
          "Der Innenraum soll gründlich gereinigt werden"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Außenwäsche, Lackpflege und Politur",
          "Innenraumreinigung",
          "Felgen und Kunststoffteile pflegen"
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "ersatzwagen",
    "title": "Ersatzwagen und Leihwagen",
    "eyebrow": "KFZ-Meisterwerkstatt · Komfort",
    "lead": "Mobil bleiben, während Ihr Fahrzeug in der Werkstatt ist.",
    "desc": "Ersatzwagen und Leihwagen in Hagen bei Reparatur und Unfallinstandsetzung. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Ihr Fahrzeug bleibt für Reparatur oder Unfallinstandsetzung länger bei uns",
          "Sie sind auf Ihr Auto beruflich angewiesen"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Einen Ersatzwagen bekommen Sie nach Verfügbarkeit gegen eine Gebühr",
          "Einen Hol- und Bringservice bieten wir nicht an",
          "Sprechen Sie uns bei der Terminvereinbarung darauf an"
        ]
      },
      {
        "p": [
          "Verfügbarkeit und Gebühr besprechen wir persönlich mit Ihnen."
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "saison-checks",
    "title": "Saison-Checks: Winter, Sommer und Urlaub",
    "eyebrow": "KFZ-Meisterwerkstatt · Check",
    "lead": "Gut vorbereitet durch jede Jahreszeit und in den Urlaub.",
    "desc": "Wintercheck, Sommercheck und Urlaubscheck in Hagen: Fahrzeug prüfen lassen. Autopartner GmbH American Cars in Hagen.",
    "blocks": [
      {
        "h": "Wann das sinnvoll ist",
        "ul": [
          "Vor dem Winter: Batterie, Beleuchtung, Frostschutz, Reifen",
          "Vor dem Sommer: Klimaanlage, Kühlmittel, Bremsen",
          "Vor einer langen Fahrt: Reifen, Flüssigkeiten, Bremsen, Beleuchtung"
        ]
      },
      {
        "h": "Das machen wir",
        "ul": [
          "Beleuchtung, Batterie, Flüssigkeiten und Wischer prüfen",
          "Bremsen und Reifen kontrollieren",
          "Klimaanlage auf Funktion prüfen",
          "Kurzer Prüfbericht mit Empfehlungen"
        ]
      },
      {
        "links": [
          [
            "Klimaservice",
            "/klimaservice"
          ],
          [
            "Bremsen",
            "/bremsen-service"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "werkstatt-leistungen",
    "title": "Alle Werkstatt-Leistungen",
    "eyebrow": "KFZ-Meisterwerkstatt · alle Marken",
    "lead": "Wartung, Reparatur, Reifen, Karosserie und Umbau für alle Fabrikate, mit besonderer Erfahrung bei US-Fahrzeugen.",
    "desc": "Alle Werkstatt-Leistungen der Autopartner GmbH in Hagen: Wartung, Reparatur, Reifenservice, Klimaservice, HU und AU, Unfallinstandsetzung, Umbau.",
    "blocks": [
      {
        "h": "Wartung und Reparatur",
        "links": [
          [
            "Inspektion und Wartung",
            "/werkstatt-service"
          ],
          [
            "Ölservice und Ölwechsel",
            "/oelwechsel"
          ],
          [
            "Zahnriemen und Steuerkette",
            "/zahnriemen-steuerkette"
          ],
          [
            "Kupplungswechsel",
            "/kupplungswechsel"
          ],
          [
            "Bremsflüssigkeit, Zündkerzen, Batterie",
            "/fluessigkeiten-zuendkerzen-batterie"
          ],
          [
            "Bremsen",
            "/bremsen-service"
          ],
          [
            "Auspuff und Katalysator",
            "/auspuff-katalysator"
          ],
          [
            "Stoßdämpfer und Fahrwerk",
            "/stossdaempfer-fahrwerk"
          ],
          [
            "Achsvermessung",
            "/achsvermessung"
          ],
          [
            "Autoelektrik und Elektronik",
            "/autoelektrik"
          ],
          [
            "Motordiagnose",
            "/motordiagnose"
          ],
          [
            "Motoreninstandsetzung",
            "/motoreninstandsetzung"
          ],
          [
            "Getriebe und Motor",
            "/getriebe-motor-reparatur"
          ],
          [
            "Klimaservice",
            "/klimaservice"
          ],
          [
            "HU und AU",
            "/hu-au-hagen"
          ]
        ]
      },
      {
        "h": "Reifen und Räder",
        "links": [
          [
            "Reifenservice",
            "/reifenservice"
          ],
          [
            "Reifeneinlagerung",
            "/reifeneinlagerung"
          ],
          [
            "Reifen und Felgen",
            "/reifen-und-felgen"
          ],
          [
            "RDKS",
            "/rdks-reifendruckkontrolle"
          ]
        ]
      },
      {
        "h": "Speziell für US-Fahrzeuge",
        "links": [
          [
            "Umbau und Tuning",
            "/us-fahrzeug-tunen"
          ],
          [
            "Fahrwerksumbau und Höherlegung",
            "/fahrwerksumbau-hoeherlegung"
          ],
          [
            "Ersatzteile und Zubehör",
            "/ersatzteile-zubehoer-us"
          ],
          [
            "Import, Umrüstung und Homologation",
            "/import-umruestung"
          ],
          [
            "TÜV und Homologation",
            "/tuev-und-homologation"
          ]
        ]
      },
      {
        "h": "Karosserie, Lack und Pflege",
        "links": [
          [
            "Unfall-Instandsetzung",
            "/unfall-instandsetzung"
          ],
          [
            "Gutachten bei Unfallschäden",
            "/unfallgutachten"
          ],
          [
            "Autoglas und Steinschlag",
            "/autoglas-steinschlag"
          ],
          [
            "Fahrzeugaufbereitung und Politur",
            "/fahrzeugaufbereitung"
          ]
        ]
      },
      {
        "h": "Komfort",
        "links": [
          [
            "Ersatzwagen und Leihwagen",
            "/ersatzwagen"
          ],
          [
            "Saison-Checks",
            "/saison-checks"
          ]
        ]
      }
    ],
    "cta": [
      "Werkstatttermin anfragen",
      "/#werkstatt"
    ]
  },
  {
    "slug": "us-cars-iserlohn",
    "title": "US-Fahrzeuge und Werkstatt für Iserlohn",
    "eyebrow": "Autopartner GmbH · Hagen-Hohenlimburg",
    "lead": "Wir sitzen in Hagen-Hohenlimburg und bedienen Kunden aus Iserlohn und der Umgebung.",
    "desc": "US-Fahrzeuge, KFZ-Meisterwerkstatt und TÜV NORD Prüfstützpunkt für Kunden aus Iserlohn. Autopartner GmbH American Cars, Hagen-Hohenlimburg.",
    "blocks": [
      {
        "h": "Das bieten wir Kunden aus Iserlohn",
        "ul": [
          "Geprüfte US-Fahrzeuge mit Carfax, importiert und umgerüstet in Hagen",
          "KFZ-Meisterwerkstatt für alle Marken",
          "HU und AU als Prüfstützpunkt des TÜV NORD",
          "Ankauf Ihres Fahrzeugs und Inzahlungnahme"
        ]
      },
      {
        "h": "Unser Standort",
        "p": [
          "Autopartner GmbH, Auf dem Lölfert 37, 58119 Hagen-Hohenlimburg. Telefon 02334 / 80814-0."
        ],
        "links": [
          [
            "Route von Iserlohn in Google Maps",
            "https://www.google.com/maps/dir/?api=1&origin=Iserlohn&destination=Auf%20dem%20L%C3%B6lfert%2037%2C%2058119%20Hagen"
          ]
        ]
      },
      {
        "h": "Gleich mehr erfahren",
        "links": [
          [
            "Fahrzeuge im Bestand",
            "/fahrzeuge"
          ],
          [
            "Alle Werkstatt-Leistungen",
            "/werkstatt-leistungen"
          ],
          [
            "Import und Umrüstung",
            "/import-umruestung"
          ],
          [
            "Kontakt",
            "/kontakt"
          ]
        ]
      }
    ],
    "cta": [
      "Anfrage senden",
      "/kontakt"
    ]
  },
  {
    "slug": "us-cars-dortmund",
    "title": "US-Fahrzeuge und Werkstatt für Dortmund",
    "eyebrow": "Autopartner GmbH · Hagen-Hohenlimburg",
    "lead": "Wir sitzen in Hagen-Hohenlimburg und bedienen Kunden aus Dortmund und der Umgebung.",
    "desc": "US-Fahrzeuge, KFZ-Meisterwerkstatt und TÜV NORD Prüfstützpunkt für Kunden aus Dortmund. Autopartner GmbH American Cars, Hagen-Hohenlimburg.",
    "blocks": [
      {
        "h": "Das bieten wir Kunden aus Dortmund",
        "ul": [
          "Geprüfte US-Fahrzeuge mit Carfax, importiert und umgerüstet in Hagen",
          "KFZ-Meisterwerkstatt für alle Marken",
          "HU und AU als Prüfstützpunkt des TÜV NORD",
          "Ankauf Ihres Fahrzeugs und Inzahlungnahme"
        ]
      },
      {
        "h": "Unser Standort",
        "p": [
          "Autopartner GmbH, Auf dem Lölfert 37, 58119 Hagen-Hohenlimburg. Telefon 02334 / 80814-0."
        ],
        "links": [
          [
            "Route von Dortmund in Google Maps",
            "https://www.google.com/maps/dir/?api=1&origin=Dortmund&destination=Auf%20dem%20L%C3%B6lfert%2037%2C%2058119%20Hagen"
          ]
        ]
      },
      {
        "h": "Gleich mehr erfahren",
        "links": [
          [
            "Fahrzeuge im Bestand",
            "/fahrzeuge"
          ],
          [
            "Alle Werkstatt-Leistungen",
            "/werkstatt-leistungen"
          ],
          [
            "Import und Umrüstung",
            "/import-umruestung"
          ],
          [
            "Kontakt",
            "/kontakt"
          ]
        ]
      }
    ],
    "cta": [
      "Anfrage senden",
      "/kontakt"
    ]
  },
  {
    "slug": "us-cars-wuppertal",
    "title": "US-Fahrzeuge und Werkstatt für Wuppertal",
    "eyebrow": "Autopartner GmbH · Hagen-Hohenlimburg",
    "lead": "Wir sitzen in Hagen-Hohenlimburg und bedienen Kunden aus Wuppertal und der Umgebung.",
    "desc": "US-Fahrzeuge, KFZ-Meisterwerkstatt und TÜV NORD Prüfstützpunkt für Kunden aus Wuppertal. Autopartner GmbH American Cars, Hagen-Hohenlimburg.",
    "blocks": [
      {
        "h": "Das bieten wir Kunden aus Wuppertal",
        "ul": [
          "Geprüfte US-Fahrzeuge mit Carfax, importiert und umgerüstet in Hagen",
          "KFZ-Meisterwerkstatt für alle Marken",
          "HU und AU als Prüfstützpunkt des TÜV NORD",
          "Ankauf Ihres Fahrzeugs und Inzahlungnahme"
        ]
      },
      {
        "h": "Unser Standort",
        "p": [
          "Autopartner GmbH, Auf dem Lölfert 37, 58119 Hagen-Hohenlimburg. Telefon 02334 / 80814-0."
        ],
        "links": [
          [
            "Route von Wuppertal in Google Maps",
            "https://www.google.com/maps/dir/?api=1&origin=Wuppertal&destination=Auf%20dem%20L%C3%B6lfert%2037%2C%2058119%20Hagen"
          ]
        ]
      },
      {
        "h": "Gleich mehr erfahren",
        "links": [
          [
            "Fahrzeuge im Bestand",
            "/fahrzeuge"
          ],
          [
            "Alle Werkstatt-Leistungen",
            "/werkstatt-leistungen"
          ],
          [
            "Import und Umrüstung",
            "/import-umruestung"
          ],
          [
            "Kontakt",
            "/kontakt"
          ]
        ]
      }
    ],
    "cta": [
      "Anfrage senden",
      "/kontakt"
    ]
  },
  {
    "slug": "us-cars-witten",
    "title": "US-Fahrzeuge und Werkstatt für Witten",
    "eyebrow": "Autopartner GmbH · Hagen-Hohenlimburg",
    "lead": "Wir sitzen in Hagen-Hohenlimburg und bedienen Kunden aus Witten und der Umgebung.",
    "desc": "US-Fahrzeuge, KFZ-Meisterwerkstatt und TÜV NORD Prüfstützpunkt für Kunden aus Witten. Autopartner GmbH American Cars, Hagen-Hohenlimburg.",
    "blocks": [
      {
        "h": "Das bieten wir Kunden aus Witten",
        "ul": [
          "Geprüfte US-Fahrzeuge mit Carfax, importiert und umgerüstet in Hagen",
          "KFZ-Meisterwerkstatt für alle Marken",
          "HU und AU als Prüfstützpunkt des TÜV NORD",
          "Ankauf Ihres Fahrzeugs und Inzahlungnahme"
        ]
      },
      {
        "h": "Unser Standort",
        "p": [
          "Autopartner GmbH, Auf dem Lölfert 37, 58119 Hagen-Hohenlimburg. Telefon 02334 / 80814-0."
        ],
        "links": [
          [
            "Route von Witten in Google Maps",
            "https://www.google.com/maps/dir/?api=1&origin=Witten&destination=Auf%20dem%20L%C3%B6lfert%2037%2C%2058119%20Hagen"
          ]
        ]
      },
      {
        "h": "Gleich mehr erfahren",
        "links": [
          [
            "Fahrzeuge im Bestand",
            "/fahrzeuge"
          ],
          [
            "Alle Werkstatt-Leistungen",
            "/werkstatt-leistungen"
          ],
          [
            "Import und Umrüstung",
            "/import-umruestung"
          ],
          [
            "Kontakt",
            "/kontakt"
          ]
        ]
      }
    ],
    "cta": [
      "Anfrage senden",
      "/kontakt"
    ]
  },
  {
    "slug": "us-cars-sauerland",
    "title": "US-Fahrzeuge und Werkstatt fürs Sauerland",
    "eyebrow": "Autopartner GmbH · Hagen-Hohenlimburg",
    "lead": "Wir sitzen in Hagen-Hohenlimburg und bedienen Kunden aus dem Sauerland und der Umgebung.",
    "desc": "US-Fahrzeuge, KFZ-Meisterwerkstatt und TÜV NORD Prüfstützpunkt für Kunden aus Sauerland. Autopartner GmbH American Cars, Hagen-Hohenlimburg.",
    "blocks": [
      {
        "h": "Das bieten wir Kunden aus Sauerland",
        "ul": [
          "Geprüfte US-Fahrzeuge mit Carfax, importiert und umgerüstet in Hagen",
          "KFZ-Meisterwerkstatt für alle Marken",
          "HU und AU als Prüfstützpunkt des TÜV NORD",
          "Ankauf Ihres Fahrzeugs und Inzahlungnahme"
        ]
      },
      {
        "h": "Unser Standort",
        "p": [
          "Autopartner GmbH, Auf dem Lölfert 37, 58119 Hagen-Hohenlimburg. Telefon 02334 / 80814-0."
        ],
        "links": [
          [
            "Route von Sauerland in Google Maps",
            "https://www.google.com/maps/dir/?api=1&origin=Sauerland&destination=Auf%20dem%20L%C3%B6lfert%2037%2C%2058119%20Hagen"
          ]
        ]
      },
      {
        "h": "Gleich mehr erfahren",
        "links": [
          [
            "Fahrzeuge im Bestand",
            "/fahrzeuge"
          ],
          [
            "Alle Werkstatt-Leistungen",
            "/werkstatt-leistungen"
          ],
          [
            "Import und Umrüstung",
            "/import-umruestung"
          ],
          [
            "Kontakt",
            "/kontakt"
          ]
        ]
      }
    ],
    "cta": [
      "Anfrage senden",
      "/kontakt"
    ]
  },
  {
    slug: 'unfallwagen-litauen-erkennen',
    title: 'Unfallwagen aus Litauen erkennen',
    eyebrow: 'Ratgeber',
    lead: 'Schlechte Schweißnähte, laienhafte Elektrik, überbrückte Airbags: Das sehen wir bei Importen aus Litauen in der Werkstatt immer wieder.',
    desc: 'Unfallwagen aus Litauen erkennen: typische versteckte Schäden bei US-Importen und wie die Carfax-Abfrage hilft. Erfahrung der Meisterwerkstatt in Hagen.',
    blocks: [
      { h: 'Was wir in der Werkstatt am häufigsten sehen', ul: ['Schlecht verarbeitete Schweißnähte', 'Extrem schlecht ausgeführte Elektrik, teilweise laienhaft repariert mit Klammern, Kabelbindern und Isolierband', 'Airbags, die schlecht verbaut sind oder ganz fehlen und nur überbrückt wurden', 'Sehr schlechte Lackierarbeiten', 'Minderwertige Teile, teilweise gebrauchte Teile aus anderen Fahrzeugen, die in einem Fahrzeug vereint wurden'] },
      { h: 'Innenraum: schön, aber nicht original', p: ['Leder- und Stickarbeiten im Innenraum sind häufig aufwendig und schön gestaltet. Sie sind aber nicht original, denn diese Ausstattung oder dieses Design hat es vom Hersteller offiziell nie gegeben.'] },
      { h: 'So erkennen Sie einen Unfallwagen', p: ['Am einfachsten ist eine Carfax-Abfrage. Dafür benötigen Sie die Fahrgestellnummer (VIN) des Fahrzeugs. Bei jedem unserer Fahrzeuge stellen wir Ihnen den Bericht zur Verfügung.'], links: [['Mehr zu Carfax', '/carfax'], ['Tipps & Hinweise zum Kauf', '/tipps-hinweise'], ['So läuft die Betrugsmasche', '/betrugsmasche']] },
      { box: 'Die Hinweise beruhen auf unseren Erfahrungen aus der Werkstatt. Für ihre Richtigkeit im Einzelfall übernehmen wir keine Haftung.' },
    ],
    cta: ['Fahrzeuge mit Carfax ansehen', '/fahrzeuge'],
  },
  {
    slug: 'dodge-ram-5-7-hemi',
    title: 'Dodge RAM 5.7 Hemi: Krümmerdichtung',
    eyebrow: 'Ratgeber aus der Werkstatt',
    lead: 'Ein typischer Fall beim 5,7-Liter-Hemi V8: Die Dichtung am Auspuffkrümmer wird undicht.',
    desc: 'Dodge RAM 5.7 Hemi V8: defekte Krümmerdichtung erkennen und richtig reparieren, abgerissene Bolzen, verzogener Krümmer. Meisterwerkstatt Hagen.',
    blocks: [
      { h: 'Grundsätzlich robust', p: ['Amerikanische Motoren sind grundsätzlich sehr pflegeleicht und beständig. Voraussetzung ist, dass die Service- und Ölwechselintervalle eingehalten werden.'] },
      { h: 'Defekte Krümmerdichtung beim 5.7 Hemi', p: ['Beim Dodge RAM mit 5,7-Liter-Hemi-V8 ist häufig die Dichtung des Auspuffkrümmers kaputt. Erkennen lässt sich das an einem typischen Geräusch beim Kaltstart.'] },
      { h: 'Darauf achten wir bei der Reparatur', ul: ['Beim Ausbau dürfen die Krümmerbolzen nicht abreißen. Sind sie abgerissen, setzen wir neue Bolzen ein.', 'Der Krümmer wird darauf geprüft, ob er verzogen ist.', 'Ist er verzogen, kommt entweder ein neuer Krümmer drauf, oder der vorhandene Krümmer wird plan bearbeitet, wenn das noch möglich ist.'] },
      { h: 'Kosten', p: ['Reparaturen an diesen Fahrzeugen sind sehr individuell. Deshalb nennen wir hier keine Preise. Sprechen Sie uns an, wir sagen Ihnen nach der Prüfung, was nötig ist.'] },
    ],
    cta: ['Werkstatttermin anfragen', '/#werkstatt'],
  },
  {
    slug: 'kauf-und-uebergabe',
    title: 'Autokauf: vom Kauf bis zur Übergabe',
    eyebrow: 'Ihr Autokauf bei uns',
    lead: 'So läuft es ab: Anzahlung, Zahlungsarten, Probefahrt, Zulassung und Übergabe auf einen Blick.',
    desc: 'Autokauf bei Autopartner GmbH in Hagen: Anzahlung, Zahlungsarten, Probefahrt, Zulassung gegen Aufpreis, Lieferung und Garantie über die Intec AG.',
    blocks: [
      { h: 'Das machen wir vor der Übergabe', ul: ['Wir kontrollieren das Fahrzeug', 'Wir machen meistens einen neuen TÜV drauf', 'Wir reinigen und bereiten das Fahrzeug auf', 'Wir checken alles noch einmal durch', 'Wir führen eine Inspektion und einen Ölwechsel durch'] },
      { h: 'Anzahlung statt Reservierung', p: ['Bei uns ist eine Anzahlung möglich. Dazu schreiben wir einen Kaufvertrag und vereinbaren darin die Anzahlung. Eine Reservierung auf Zuruf ist leider nicht möglich.'] },
      { h: 'Zahlungsarten', ul: ['Bargeld (es gelten die gesetzlichen Vorgaben)', 'Banküberweisung', 'EC-Karte, aber keine Kreditkarten. Viele Karten haben Sicherheitslimits, deshalb ist die Zahlung eines gesamten Autos per EC-Karte nur selten möglich.', 'Finanzierung und Leasing über verschiedene Bankpartner'], links: [['Zur Finanzierung', '/#finanzierung']] },
      { h: 'Probefahrt', p: ['Probefahrten sind nach Terminvereinbarung möglich. Zuerst besprechen wir den Kaufpreis und klären die Zahlung. Soll finanziert werden, stellen wir vorher eine Finanzierungsanfrage. Fällt sie positiv aus, machen wir kurz vor dem Kauf gerne eine Probefahrt.'] },
      { h: 'Zulassung durch uns', p: ['Die Zulassung übernehmen wir gegen Aufpreis. Dafür benötigen wir von Ihnen:'], ul: ['Original-Personalausweis', 'Ausgefülltes und unterschriebenes SEPA-Mandat', 'Vollmacht zur Zulassung', 'eVB-Nummer', 'Gegebenenfalls die Reservierungsbestätigung für das Wunschkennzeichen'] },
      { h: 'Wie lange dauert es?', p: ['Von unserer Seite dauert es in der Regel maximal eine Woche. Am längsten dauert meist der Zulassungsprozess, der ist zusätzlich einzuplanen.'] },
      { h: 'Lieferung', p: ['Wir liefern das Fahrzeug gegen Aufpreis. Der Preis richtet sich nach der Entfernung. Diesel und Maut sind aktuell teuer, deshalb nennen wir den Preis im Einzelfall.'] },
      { h: 'Garantie und Inzahlungnahme', p: ['Garantiegeber ist die Intec AG. Die Garantie kostet 595 € pro Jahr und ist bis zu 3 Jahre abschließbar. Den Umfang finden Sie in den AGB der Intec AG.', 'Wir nehmen Fahrzeuge in Zahlung, aber nur nach vorheriger Prüfung.'] },
    ],
    cta: ['Fahrzeuge ansehen', '/fahrzeuge'],
  },
];

export const getPage = (slug: string) => pages.find((p) => p.slug === slug);
