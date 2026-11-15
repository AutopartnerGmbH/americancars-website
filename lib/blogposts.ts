import type { Page } from './pages';
import type { Extra } from './extras';

const cta: [string, string] = ['Beratung anfragen', '/kontakt'];

export const blogPages: Page[] = [
  {
    slug: 'us-fahrzeug-alltag',
    title: 'US-Auto im Alltag: Sieben Annahmen auf dem Prüfstand',
    eyebrow: 'Ratgeber',
    lead: 'Über amerikanische Fahrzeuge kursieren viele Meinungen: zu groß, zu durstig, Ersatzteile kaum zu bekommen. Was davon stimmt, hängt vom Modell und von der Werkstatt ab. Ein nüchterner Blick auf sieben typische Annahmen.',
    desc: 'US-Auto im Alltag: Größe, Verbrauch, Werkstatt, Ersatzteile, Steuer und Versicherung. Sieben verbreitete Annahmen im Check. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: '1. „Das passt nirgends hin.“', p: ['Ein Dodge RAM oder ein Chevrolet Silverado ist deutlich länger und breiter als ein typischer Kombi. Ein Chrysler Pacifica oder ein Ford Mustang dagegen lässt sich meist problemlos parken. Entscheidend ist also das Modell. Messen Sie Garage und Stellplatz vorab nach und nehmen Sie das Fahrzeug bei der Probefahrt einmal in ein Parkhaus mit.'] },
      { h: '2. „Der Verbrauch ist untragbar.“', p: ['Große Motoren und hohes Gewicht wirken sich auf den Verbrauch aus. Wie stark, hängt vom Motor, vom Fahrprofil und vom Fahrstil ab. Planen Sie die laufenden Kosten deshalb realistisch ein und fragen Sie uns nach Erfahrungswerten zum jeweiligen Modell.'] },
      { h: '3. „Dafür gibt es keine Werkstatt.“', p: ['In unserer Meisterwerkstatt in Hagen-Hohenlimburg betreuen wir täglich Fahrzeuge von Dodge, RAM, Ford, Chevrolet und Chrysler. Wartung, Diagnose, Reparatur und Teilebeschaffung für US-Fahrzeuge gehören bei uns zum Alltag.'] },
      { h: '4. „Ersatzteile bekommt man nicht.“', p: ['Für gängige Modelle sind Original- und Nachrüstteile in der Regel gut erhältlich. Wie schnell ein Teil lieferbar ist, hängt vom Teil ab. Mit Modell, Baujahr und Fahrgestellnummer lässt sich das passende Teil schnell bestimmen.'], links: [['Ersatzteile für US-Fahrzeuge finden', '/ersatzteile-fuer-us-fahrzeuge-finden']] },
      { h: '5. „Steuer und Versicherung sind unberechenbar.“', p: ['Beides hängt unter anderem von Hubraum, Emissionswerten und Typklassen ab und kann sich von einem europäischen Vergleichsfahrzeug deutlich unterscheiden. Holen Sie sich vor dem Kauf ein Angebot Ihrer Versicherung für das konkrete Modell. Dann wissen Sie, womit Sie rechnen können.'] },
      { h: '6. „Ein Anhänger ist kein Problem.“', p: ['Pickups und große SUVs gelten als Zugfahrzeuge. Ausschlaggebend sind aber die in den deutschen Fahrzeugpapieren eingetragenen Werte. Sprechen Sie uns vor dem Kauf an, wenn Sie einen Anhänger oder Wohnwagen ziehen möchten.'] },
      { h: '7. „Im Winter taugt das nichts.“', p: ['Mit passender Bereifung und gepflegter Technik fahren auch große US-Fahrzeuge sicher durch den Winter. Mehr dazu finden Sie in unserem Beitrag zu Winterreifen für Pickup und SUV.'], links: [['Winterreifen für Pickup und SUV', '/winterreifen-pickup-suv'], ['Tipps & Hinweise zum Kauf', '/tipps-hinweise']] },
    ],
  },
  {
    slug: 'winterreifen-pickup-suv',
    title: 'Winterreifen für Pickup und SUV: Pflicht, Größe, Sensoren',
    eyebrow: 'Ratgeber',
    lead: 'Große US-Fahrzeuge stellen an den Reifensatz besondere Anforderungen: hohes Gewicht, große Räder und meist eine Reifendruckkontrolle. Das sollten Sie vor dem Winter wissen.',
    desc: 'Winterreifen für Pickup und SUV: situative Winterreifenpflicht, Alpine-Symbol, Last- und Geschwindigkeitsindex, RDKS-Sensoren, Wechsel und Einlagerung. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Was die Winterreifenpflicht verlangt', p: ['In Deutschland gilt eine situative Winterreifenpflicht: Bei Glätte, Schneematsch, Schneeglätte, Eis- oder Reifglätte darf nur mit geeigneter Bereifung gefahren werden. Als geeignet gelten Reifen mit dem Alpine-Symbol, also dem Bergpiktogramm mit Schneeflocke. Reifen, die nur mit „M+S“ gekennzeichnet sind, genügen nicht mehr.'] },
      { h: 'Schwer und groß: Worauf es bei der Reifenwahl ankommt', ul: ['Lastindex: Er gibt an, welches Gewicht ein Reifen tragen darf. Bei schweren Pickups und SUVs ist das besonders wichtig.', 'Geschwindigkeitsindex: Er muss mindestens den Angaben in den Fahrzeugpapieren entsprechen.', 'Reifengröße: Abweichende Größen sind nur zulässig, wenn sie eingetragen oder freigegeben sind.', 'Reifenart: Ob Straßen-, Allwetter- oder Gelände-Profil: Achten Sie darauf, dass der Winterreifen das Alpine-Symbol trägt.'] },
      { h: 'Pickup im Winter: Das Heck beachten', p: ['Ein Pickup mit leerer Ladefläche hat über der Hinterachse wenig Gewicht. Auf glatter Fahrbahn kann das die Traktion beeinflussen. Fahren Sie in der kalten Jahreszeit entsprechend vorsichtig und achten Sie auf einen passenden Reifendruck.'] },
      { h: 'Reifendruckkontrolle (RDKS)', p: ['Viele US-Fahrzeuge haben Sensoren in den Rädern. Beim Wechsel auf einen zweiten Radsatz müssen passende Sensoren verbaut und danach angelernt werden. Der Wechsel ohne passende Sensoren führt zu Fehlermeldungen im Fahrzeug.'], links: [['Mehr zur Reifendruckkontrolle', '/rdks-reifendruckkontrolle']] },
      { h: 'Wechsel und Einlagerung bei uns', p: ['Wir wechseln, wuchten und lagern Ihre Räder in unserer Werkstatt in Hagen-Hohenlimburg. Als Faustregel gilt „von O bis O“: Winterreifen von Oktober bis Ostern. Vereinbaren Sie Ihren Termin rechtzeitig, bevor die ersten kalten Tage kommen.'] },
    ],
  },
  {
    slug: 'fahrgestellnummer-vin-erklaert',
    title: 'Fahrgestellnummer (VIN) lesen: Was die 17 Zeichen verraten',
    eyebrow: 'Ratgeber',
    lead: 'Jedes Fahrzeug trägt eine eindeutige Nummer. Wer sie lesen kann, erkennt Herkunft und Modelljahr und kann Angaben in den Papieren schnell gegenprüfen.',
    desc: 'Fahrgestellnummer (VIN) bei US-Fahrzeugen: Aufbau, Herkunftsland, Modelljahr, Prüfziffer, Fundorte und Abgleich mit den Papieren. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'So ist die VIN aufgebaut', p: ['Die Fahrgestellnummer besteht aus 17 Zeichen. Die Buchstaben I, O und Q kommen nicht vor, damit es keine Verwechslung mit den Ziffern 1 und 0 gibt.'], ul: ['Zeichen 1 bis 3: Herstellerkennung, darin das Herstellungsland (1, 4 und 5 = USA, 2 = Kanada, 3 = Mexiko).', 'Zeichen 4 bis 8: Merkmale des Fahrzeugs, zum Beispiel Modell, Karosserie und Motor.', 'Zeichen 9: Prüfziffer, mit der sich die Nummer auf Plausibilität kontrollieren lässt.', 'Zeichen 10: Modelljahr.', 'Zeichen 11 bis 17: Werk und laufende Fahrzeugnummer.'] },
      { h: 'Wo Sie die VIN am Fahrzeug finden', p: ['Bei US-Fahrzeugen steht die VIN in der Regel unten an der Windschutzscheibe auf der Fahrerseite, außerdem auf einem Aufkleber im Türrahmen und in den Fahrzeugpapieren. Vergleichen Sie die Stellen miteinander. Sie müssen übereinstimmen.'] },
      { h: 'Abgleich mit den Papieren', p: ['Vor dem Kauf lohnt sich ein Blick darauf, ob die VIN am Fahrzeug mit der VIN im Title und in den weiteren Unterlagen übereinstimmt. Abweichungen sind ein Warnzeichen, das Sie vor dem Kauf klären sollten.'], links: [['US-Title erklärt', '/title-arten-usa-erklaert']] },
      { h: 'Wofür Sie die VIN brauchen', p: ['Mit der VIN lässt sich die Fahrzeughistorie abfragen, außerdem bestimmen wir damit passende Ersatzteile. Bei Importen ist sie die Grundlage für Papiere und Zulassung.'], links: [['Carfax-Fahrzeughistorie', '/carfax'], ['Ersatzteile für US-Fahrzeuge', '/ersatzteile-fuer-us-fahrzeuge-finden']] },
    ],
  },
  {
    slug: 'title-arten-usa-erklaert',
    title: 'US-Title erklärt: Clean, Salvage, Rebuilt und MSO',
    eyebrow: 'Ratgeber',
    lead: 'Der Title ist das wichtigste Dokument eines US-Fahrzeugs. Er sagt, wem das Fahrzeug gehört und in welchem Status es sich befindet.',
    desc: 'US-Title erklärt: Clean, Salvage, Rebuilt, MSO, Pfandvermerk und Bedeutung für Import und TÜV-Abnahme. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Was der Title ist', p: ['Der Title entspricht in etwa dem deutschen Fahrzeugbrief. Er weist den Eigentümer aus und enthält unter anderem die Fahrgestellnummer. Für die Abnahme eines importierten Fahrzeugs beim TÜV wird der US-Title benötigt.'] },
      { h: 'Die gängigen Title-Arten', ul: ['Clean Title: kein Schadensvermerk im Title.', 'Salvage Title: Das Fahrzeug wurde als Totalschaden eingestuft.', 'Rebuilt Title: Ein ehemaliges Salvage-Fahrzeug wurde repariert und erneut abgenommen.', 'MSO (Manufacturer’s Statement of Origin): Herkunftsnachweis für ein neues Fahrzeug, das noch keinen Title hat.'] },
      { h: 'Worauf Sie beim Title achten sollten', ul: ['Stimmt die Fahrgestellnummer mit dem Fahrzeug überein?', 'Ist der Title im Original vorhanden und eindeutig lesbar?', 'Gibt es Vermerke zu Schäden oder zu einem Pfandrecht auf dem Fahrzeug?', 'Passen Eigentümer und Angaben zum Verkäufer?'] },
      { h: 'Regeln unterscheiden sich je Bundesstaat', p: ['Bezeichnungen und Voraussetzungen sind nicht in allen Bundesstaaten gleich. Lassen Sie sich Angaben im Zweifel erklären, bevor Sie kaufen.'] },
      { h: 'Unsere Linie', p: ['Wir verkaufen keine Fahrzeuge mit Salvage Title. Bei importierten Fahrzeugen bieten wir ausschließlich Fahrzeuge mit unfallfreier Carfax-Historie an.'], links: [['Betrugsmasche bei US-Unfallfahrzeugen', '/betrugsmasche'], ['Carfax', '/carfax']] },
    ],
  },
  {
    slug: 'direkt-vom-schiff-kaufen',
    title: 'Direkt vom Schiff kaufen: Vom Hafen bis zur Übergabe',
    eyebrow: 'Ratgeber',
    lead: 'Bei vielen unserer Fahrzeuge steht der Kauf fest, noch bevor sie in Hagen eintreffen. Hier sehen Sie, wie der Weg vom amerikanischen Hafen bis zu Ihnen aussieht.',
    desc: 'Fahrzeug direkt vom Schiff kaufen: Ablauf von der Überfahrt bis zur Übergabe, Dauer, Umrüstung, Abnahme und Tipps. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Was „direkt vom Schiff“ bedeutet', p: ['Das Fahrzeug ist bereits in den USA oder Kanada eingekauft und wird nach Deutschland verschifft oder ist gerade angekommen. Fahrzeughistorie, Fotos und Fahrzeugdaten liegen vor. Sie wissen also, was auf Sie zukommt, bevor das Fahrzeug unseren Hof erreicht.'] },
      { h: 'Der Weg Schritt für Schritt', ol: ['Einkauf in den USA oder Kanada nach unseren Standards, geprüft durch unsere Partner vor Ort.', 'Überfahrt: in der Regel 6 bis 8 Wochen, je nach Hafen. Bei Verschiffung aus Kalifornien, Texas oder Kanada können die Transportzeiten abweichen.', 'Verzollung nach Ankunft.', 'Umrüstung und Abnahme: etwa 5 bis 7 Tage.', 'Deutsche Papiere, Zulassung und Übergabe.'] },
      { h: 'Was Sie vorab prüfen können', p: ['Lassen Sie sich Fahrzeugdaten, Fotos und Historie zeigen. Auf Anfrage erhalten Sie zu unseren angebotenen Fahrzeugen den Carfax-Bericht. Klären Sie außerdem im Kaufvertrag, wie und wann Zahlungen erfolgen. Eine verbindliche Reservierung ist nur auf Grundlage eines Vertrags sinnvoll, nicht auf Zuruf.'], links: [['Carfax', '/carfax'], ['Vom Kauf bis zur Übergabe', '/kauf-und-uebergabe']] },
      { h: 'Wie viel Zeit Sie einplanen sollten', p: ['Rechnen Sie insgesamt mit mindestens drei Monaten, wenn Sie ein Fahrzeug aus dem Import möchten. Wer zügig ein Fahrzeug braucht, schaut besser in unseren Bestand.'], links: [['Import und Umrüstung', '/import-umruestung']] },
    ],
  },
  {
    slug: 'zoll-und-einfuhrumsatzsteuer-us-import',
    title: 'Zoll und Einfuhrumsatzsteuer beim US-Import: Das müssen Sie wissen',
    eyebrow: 'Ratgeber',
    lead: 'Wer ein Fahrzeug aus den USA nach Deutschland holt, muss es verzollen. Wir erklären, welche Abgaben anfallen und welche Papiere Sie danach in der Hand halten.',
    desc: 'Zoll und Einfuhrumsatzsteuer beim US-Import: Abgaben, Zollunbedenklichkeitsbescheinigung, Ablauf und was wir für Sie übernehmen. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Welche Abgaben anfallen', p: ['Für einen Pkw aus einem Drittland wie den USA wird in der Regel ein Zoll von 10 Prozent erhoben. Dazu kommt Einfuhrumsatzsteuer von 19 Prozent. Die Abgaben können sich ändern, hier gelten die jeweils gültigen gesetzlichen Regelungen.'] },
      { h: 'Der Weg durch den Zoll', ol: ['Das Fahrzeug erreicht den europäischen Hafen und wird beim Zoll angemeldet.', 'Der Zoll prüft die Unterlagen und setzt die Abgaben fest.', 'Nach Zahlung wird das Fahrzeug freigegeben.', 'Sie erhalten die Zollunbedenklichkeitsbescheinigung.'] },
      { h: 'Wofür die Zollunbedenklichkeitsbescheinigung gebraucht wird', p: ['Sie wird für die deutschen Fahrzeugpapiere benötigt, nicht für die TÜV-Abnahme. Für die Abnahme selbst braucht der TÜV den US-Title.'] },
      { h: 'Was wir für Sie übernehmen', p: ['Wir wickeln die Verzollung für Sie ab. Sie müssen sich nicht selbst mit Zollformularen und Behörden auseinandersetzen.'], links: [['Import und Umrüstung', '/import-umruestung'], ['TÜV und Homologation', '/tuev-und-homologation']] },
    ],
  },
  {
    slug: 'ersatzteile-fuer-us-fahrzeuge-finden',
    title: 'Ersatzteile für US-Fahrzeuge: So kommen Sie schnell zum passenden Teil',
    eyebrow: 'Ratgeber',
    lead: 'Bei amerikanischen Fahrzeugen entscheiden oft Details wie Motor, Baujahr und Ausstattung darüber, welches Teil passt. Mit den richtigen Angaben spart man sich Fehlbestellungen.',
    desc: 'Ersatzteile für US-Fahrzeuge finden: benötigte Angaben, Original- und Nachrüstteile, Lieferzeit. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Diese Angaben helfen bei der Teilesuche', ul: ['Marke, Modell und Baujahr', 'Fahrgestellnummer (VIN)', 'Motor und Getriebe', 'Ausstattungsvariante, zum Beispiel 2WD oder 4WD', 'Wenn vorhanden: die Teilenummer des alten Teils'] },
      { h: 'Original- oder Nachrüstteil?', p: ['Originalteile entsprechen dem Hersteller-Standard und sind oft die sichere Wahl. Nachrüstteile sind häufig günstiger, ihre Qualität kann aber stark schwanken. Wir beraten Sie, welche Variante für Ihr Fahrzeug und Ihren Einsatz sinnvoll ist.'] },
      { h: 'Wie lange die Lieferung dauert', p: ['Das hängt vom jeweiligen Teil ab. Gängige Teile sind schneller verfügbar als seltene. Schicken Sie uns Ihre Angaben, dann nennen wir Ihnen eine Einschätzung.'] },
      { h: 'Teile, Zubehör und Einbau aus einer Hand', p: ['Wir beschaffen Teile und bauen sie in unserer Meisterwerkstatt in Hagen-Hohenlimburg direkt ein.'], links: [['Ersatzteile & Zubehör', '/ersatzteile-zubehoer-us'], ['Fahrgestellnummer lesen', '/fahrgestellnummer-vin-erklaert']] },
    ],
  },
  {
    slug: 'hu-au-us-fahrzeuge',
    title: 'HU und AU beim US-Fahrzeug: Ablauf und Vorbereitung',
    eyebrow: 'Ratgeber',
    lead: 'Auch US-Fahrzeuge müssen regelmäßig zur Hauptuntersuchung. Bei uns erledigen Sie das direkt vor Ort.',
    desc: 'HU und AU beim US-Fahrzeug: Intervall, Dauer, Vorbereitung und Prüfung beim Prüfstützpunkt der TÜV NORD in Hagen-Hohenlimburg. Autopartner GmbH American Cars.',
    cta,
    blocks: [
      { h: 'Wie oft ist die HU fällig?', p: ['Bei Pkw ist die Hauptuntersuchung in der Regel alle zwei Jahre fällig. Den Termin erkennen Sie an der Prüfplakette auf dem hinteren Kennzeichen.'] },
      { h: 'HU direkt bei uns', p: ['Wir sind Prüfstützpunkt der TÜV NORD. Die Hauptuntersuchung ist bei uns direkt in der Werkstatt in Hagen-Hohenlimburg möglich. Ohne Mängel dauert die Prüfung in der Regel unter 60 Minuten.'] },
      { h: 'So bereiten Sie sich vor', ul: ['Beleuchtung: Funktionieren alle Leuchten, auch bei umgerüsteten Fahrzeugen?', 'Reifen: Profil, Alter und Zustand', 'Bremsen: Beläge, Scheiben und Bremsflüssigkeit', 'Fahrwerk und Lenkung: Spiel, Geräusche, Undichtigkeiten', 'Unterboden und Auspuff: Rost, Undichtigkeiten', 'Papiere: Fahrzeugschein und, bei Umbauten, die zugehörigen Gutachten'] },
      { h: 'Und die Abgasuntersuchung?', p: ['Die Abgasuntersuchung gehört zur Hauptuntersuchung dazu und wird in der Regel gemeinsam durchgeführt.'], links: [['TÜV und Homologation', '/tuev-und-homologation'], ['Zur Werkstatt', '/werkstatt-leistungen']] },
    ],
  },
  {
    slug: 'umbauten-eintragung-felgen-hoeherlegung',
    title: 'Umbauten am US-Fahrzeug: Das müssen Sie vor Felgen und Höherlegung klären',
    eyebrow: 'Ratgeber',
    lead: 'Felgen, Fahrwerk, Auspuff: US-Fahrzeuge werden gern individualisiert. Entscheidend ist, dass Umbauten zulässig sind und die Betriebserlaubnis bestehen bleibt.',
    desc: 'Umbauten am US-Fahrzeug: Felgen, Höherlegung, Betriebserlaubnis, Gutachten, ABE und Abstimmung mit dem TÜV. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Warum die Betriebserlaubnis zählt', p: ['Wird ein Fahrzeug verändert, kann die Betriebserlaubnis erlöschen, wenn die Änderung nicht zulässig oder nicht eingetragen ist. Das kann auch Folgen für den Versicherungsschutz haben.'] },
      { h: 'Gutachten, Teilegutachten, ABE', p: ['Je nach Umbau reicht ein Teilegutachten oder eine allgemeine Betriebserlaubnis (ABE) des Teils. In anderen Fällen ist ein Einzelgutachten nötig. Welche Lösung passt, hängt vom Teil und vom Fahrzeug ab.'] },
      { h: 'Typische Umbauten', ul: ['Felgen und Reifen in anderer Größe', 'Höherlegung oder Tieferlegung', 'Auspuffanlagen', 'Zubehör wie Anhängerkupplung oder Stoßstangen'] },
      { h: 'So gehen wir vor', p: ['Wir klären jeden Umbau vorab mit dem TÜV, bevor wir ihn ausführen. Nach Fahrwerksänderungen gehören Achsvermessung und Lichteinstellung dazu. So gehen Sie sicher, dass Ihr Fahrzeug anschließend problemlos durch die Hauptuntersuchung kommt.'], links: [['Fahrwerksumbau und Höherlegung', '/fahrwerksumbau-hoeherlegung'], ['US-Fahrzeug tunen', '/us-fahrzeug-tunen']] },
    ],
  },
  {
    slug: 'checkliste-besichtigung-probefahrt',
    title: 'Checkliste: Besichtigung und Probefahrt eines US-Fahrzeugs',
    eyebrow: 'Ratgeber',
    lead: 'Wer weiß, worauf er achten muss, trifft die Kaufentscheidung sicherer. Diese Checkliste hilft Ihnen bei Besichtigung und Probefahrt.',
    desc: 'Checkliste für Besichtigung und Probefahrt eines US-Fahrzeugs: Papiere, Historie, Karosserie, Technik und Probefahrt. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Termin und Ablauf', p: ['Besichtigungen finden nach Vereinbarung statt. Samstags ist ein Besuch nur mit vorheriger Terminvereinbarung möglich. Eine Probefahrt ist nach Terminabsprache möglich.'] },
      { h: 'Papiere und Historie', ul: ['Stimmt die Fahrgestellnummer am Fahrzeug mit den Papieren überein?', 'Liegt ein Carfax-Bericht vor und passt er zum Fahrzeug?', 'Sind Serviceunterlagen vorhanden?'], links: [['Carfax', '/carfax'], ['Fahrgestellnummer lesen', '/fahrgestellnummer-vin-erklaert']] },
      { h: 'Außen und innen', ul: ['Karosserie: Spaltmaße, Lackunterschiede, Roststellen', 'Innenraum: Verschleiß, Funktion von Elektrik, Klima und Infotainment', 'Reifen: Profil, Alter, Zustand und Reifengröße laut Papieren', 'Unterboden und Motorraum: Undichtigkeiten, Ölstand, Zustand der Flüssigkeiten'] },
      { h: 'Bei der Probefahrt', p: ['Achten Sie auf Geräusche, Lenkverhalten, Bremsen und Schaltvorgänge. Fahren Sie nach Möglichkeit auch Strecken, die Ihrem Alltag entsprechen, zum Beispiel Stadt, Landstraße und, wenn sinnvoll, Autobahn.'], links: [['Vom Kauf bis zur Übergabe', '/kauf-und-uebergabe'], ['Tipps & Hinweise', '/tipps-hinweise']] },
    ],
  },
];

export const blogExtras: Record<string, Extra> = {
  'us-fahrzeug-alltag': { faq: [
    ['Passt ein US-Pickup in eine normale Garage?', 'Das hängt vom Modell ab. Viele Pickups sind länger und breiter als gewöhnliche Pkw. Messen Sie Ihren Stellplatz und vergleichen Sie ihn mit den Fahrzeugmaßen.'],
    ['Wird die Werkstattbetreuung aufwendiger als bei europäischen Fahrzeugen?', 'Das hängt vor allem von der Werkstatt ab. Wir betreuen US-Fahrzeuge täglich in unserer Meisterwerkstatt in Hagen-Hohenlimburg.'],
  ] },
  'winterreifen-pickup-suv': { faq: [
    ['Reichen Reifen mit „M+S“ im Winter aus?', 'Nein. Geeignet sind Reifen mit dem Alpine-Symbol. Reine M+S-Reifen genügen nicht mehr.'],
    ['Muss ich nach dem Radwechsel etwas an der Reifendruckkontrolle tun?', 'Bei Fahrzeugen mit Sensoren in den Rädern müssen passende Sensoren verbaut und gegebenenfalls angelernt werden.'],
  ] },
  'fahrgestellnummer-vin-erklaert': { faq: [
    ['Warum kommen in der VIN keine I, O und Q vor?', 'Damit es keine Verwechslungen mit den Ziffern 1 und 0 gibt.'],
    ['Wie erkenne ich, ob ein Fahrzeug in den USA gebaut wurde?', 'Das erste Zeichen verrät das Herstellungsland. 1, 4 und 5 stehen für die USA.'],
  ] },
  'title-arten-usa-erklaert': { faq: [
    ['Was ist der Unterschied zwischen Salvage und Rebuilt?', 'Ein Salvage-Fahrzeug wurde als Totalschaden eingestuft. Rebuilt bedeutet, dass ein solches Fahrzeug repariert und neu abgenommen wurde.'],
    ['Verkaufen Sie Fahrzeuge mit Salvage Title?', 'Nein. Wir verkaufen keine Fahrzeuge mit Salvage Title.'],
  ] },
  'direkt-vom-schiff-kaufen': { faq: [
    ['Wie lange dauert es, bis ich das Fahrzeug bekomme?', 'Die Überfahrt dauert in der Regel 6 bis 8 Wochen. Hinzu kommen Umrüstung und Abnahme. Insgesamt sollten Sie mindestens 3 Monate einplanen.'],
    ['Kann ich die Fahrzeughistorie vorher sehen?', 'Ja, für unsere angebotenen Fahrzeuge stellen wir auf Anfrage einen Carfax-Bericht zur Verfügung.'],
  ] },
  'zoll-und-einfuhrumsatzsteuer-us-import': { faq: [
    ['Kümmern Sie sich um die Verzollung?', 'Ja, wir wickeln die Verzollung für Sie ab.'],
    ['Bleiben Zoll und Steuer immer gleich?', 'Nein. Es gelten die jeweils gültigen gesetzlichen Regelungen.'],
  ] },
  'ersatzteile-fuer-us-fahrzeuge-finden': { faq: [
    ['Welche Angaben brauchen Sie für ein Ersatzteil?', 'Modell, Baujahr, Fahrgestellnummer sowie Motor und Ausstattung. Wenn vorhanden, auch die Teilenummer.'],
    ['Wie lange dauert die Lieferung?', 'Das hängt vom Teil ab. Wir nennen Ihnen eine Einschätzung, sobald wir Ihre Angaben haben.'],
  ] },
  'hu-au-us-fahrzeuge': { faq: [
    ['Kann ich die HU direkt bei Ihnen machen lassen?', 'Ja, wir sind Prüfstützpunkt der TÜV NORD und führen die Hauptuntersuchung in unserer Werkstatt in Hagen-Hohenlimburg durch.'],
    ['Wie oft muss ein US-Fahrzeug zur HU?', 'Bei Pkw in der Regel alle zwei Jahre.'],
    ['Wie lange dauert die HU?', 'Ohne Mängel in der Regel unter 60 Minuten.'],
  ] },
  'umbauten-eintragung-felgen-hoeherlegung': { faq: [
    ['Muss ich Umbauten eintragen lassen?', 'Das hängt vom Umbau ab. Je nach Teil genügt ein Teilegutachten oder eine ABE, in manchen Fällen ist ein Einzelgutachten nötig.'],
    ['Was passiert bei einem nicht zulässigen Umbau?', 'Die Betriebserlaubnis kann erlöschen. Das kann auch den Versicherungsschutz betreffen.'],
  ] },
  'checkliste-besichtigung-probefahrt': { faq: [
    ['Kann ich auch samstags besichtigen?', 'Samstags nur mit vorheriger Terminvereinbarung.'],
    ['Ist eine Probefahrt ohne Termin möglich?', 'Nein, eine Probefahrt ist nur nach Termin möglich.'],
  ] },
};
