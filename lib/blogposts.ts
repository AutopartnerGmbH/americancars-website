import type { Page } from './pages';
import type { Extra } from './extras';

const cta: [string, string] = ['Beratung anfragen', '/kontakt'];

export const blogPages: Page[] = [
  {
    slug: 'us-fahrzeug-alltag',
    title: 'US-Fahrzeug im Alltag: Was Sie vor dem Kauf bedenken sollten',
    eyebrow: 'Ratgeber',
    lead: 'Ein amerikanisches Fahrzeug fährt sich anders als ein typischer Kompaktwagen. Wer vorher die richtigen Fragen stellt, hat im Alltag mehr Freude daran.',
    desc: 'Ratgeber: Worauf Sie im Alltag mit einem US-Fahrzeug achten sollten, von Größe und Verbrauch bis Versicherung und Service. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Größe und Platzbedarf', p: ['Modelle wie der Dodge RAM, der Chevrolet Silverado oder der Chrysler Pacifica sind deutlich größer als die meisten europäischen Fahrzeuge. Prüfen Sie vorab, ob das Fahrzeug in Ihre Garage, auf Ihren Stellplatz und in Parkhäuser passt, die Sie regelmäßig nutzen.'] },
      { h: 'Verbrauch und Fahrverhalten', p: ['Große Motoren und hohes Gewicht wirken sich auf den Verbrauch aus. Das Fahrverhalten ist meist komfortorientiert. Eine ausgiebige Probefahrt nach Terminvereinbarung zeigt Ihnen, ob das Fahrzeug zu Ihrem Alltag passt.'] },
      { h: 'Steuer und Versicherung vorab klären', p: ['Kfz-Steuer und Versicherungsbeitrag hängen unter anderem von Hubraum, Emissionswerten und Typklassen ab und können sich von einem europäischen Vergleichsfahrzeug deutlich unterscheiden. Fragen Sie beides vor dem Kauf bei Ihrer Versicherung und beim Zoll- bzw. Steuerportal nach.'] },
      { h: 'Anhängelast und Nutzung', p: ['Wenn Sie einen Anhänger oder Wohnwagen ziehen möchten, sind die in den deutschen Fahrzeugpapieren eingetragenen Werte maßgeblich. Sprechen Sie uns vor dem Kauf darauf an.'] },
      { h: 'Service und Werkstatt', p: ['In unserer Meisterwerkstatt in Hagen-Hohenlimburg betreuen wir täglich Fahrzeuge von Dodge, RAM, Ford, Chevrolet und Chrysler. Wartung, Reparatur und Ersatzteilbeschaffung für US-Fahrzeuge sind für uns Alltag.'], links: [['Zur Werkstatt', '/werkstatt-leistungen'], ['Tipps & Hinweise zum Kauf', '/tipps-hinweise']] },
    ],
  },
  {
    slug: 'winterreifen-pickup-suv',
    title: 'Winterreifen für Pickup und SUV: Was Pflicht ist und worauf Sie achten sollten',
    eyebrow: 'Ratgeber',
    lead: 'In Deutschland gilt eine situative Winterreifenpflicht. Für große US-Fahrzeuge kommen Reifengröße, Tragfähigkeit und Reifendruckkontrolle hinzu.',
    desc: 'Ratgeber: Winterreifen für Pickup und SUV. Pflicht, Alpine-Symbol, Last- und Geschwindigkeitsindex, RDKS-Sensoren und Einlagerung. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Was die Winterreifenpflicht bedeutet', p: ['Bei Glätte, Schneematsch, Schneeglätte, Eis- oder Reifglätte dürfen Sie nur mit geeigneter Bereifung fahren. Geeignet sind Reifen mit dem Alpine-Symbol (Bergpiktogramm mit Schneeflocke). Reifen, die ausschließlich mit „M+S“ gekennzeichnet sind, genügen nicht mehr.'] },
      { h: 'Die richtige Größe und Tragfähigkeit', p: ['Pickups und große SUVs sind schwer. Achten Sie deshalb auf Lastindex und Geschwindigkeitsindex. Beide müssen zu den Angaben in den Fahrzeugpapieren passen. Abweichende Reifengrößen sind nur zulässig, wenn sie eingetragen oder freigegeben sind.'] },
      { h: 'Reifendruckkontrolle (RDKS)', p: ['Viele US-Fahrzeuge haben Reifendrucksensoren in den Rädern. Bei einem Radwechsel müssen passende Sensoren verbaut und anschließend angelernt werden. Sensoren, die nicht zum Fahrzeug passen, führen zu Fehlermeldungen.'], links: [['Mehr zur Reifendruckkontrolle', '/rdks-reifendruckkontrolle']] },
      { h: 'Reifenservice und Einlagerung', p: ['Wir wechseln, wuchten und lagern Ihre Räder in unserer Werkstatt in Hagen-Hohenlimburg, von O bis O: von Oktober bis Ostern ist der übliche Zeitraum für Winterreifen. Vereinbaren Sie rechtzeitig einen Termin, bevor es voll wird.'] },
    ],
  },
  {
    slug: 'fahrgestellnummer-vin-erklaert',
    title: 'Fahrgestellnummer (VIN) erklärt: So lesen Sie die 17 Zeichen',
    eyebrow: 'Ratgeber',
    lead: 'Die Fahrgestellnummer identifiziert jedes Fahrzeug eindeutig. Sie ist die Grundlage für Carfax-Abfragen, Ersatzteilbestellungen und Zulassung.',
    desc: 'Ratgeber: Aufbau der 17-stelligen Fahrgestellnummer (VIN) bei US-Fahrzeugen, Herkunft, Modelljahr und Fundorte. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Aufbau der VIN', p: ['Die Fahrgestellnummer besteht aus 17 Zeichen. Die Buchstaben I, O und Q werden nicht verwendet, damit es keine Verwechslung mit Ziffern gibt.'] },
      { h: 'Was die einzelnen Stellen verraten', ul: ['Erstes Zeichen: Herstellungsland. 1, 4 und 5 stehen für die USA, 2 für Kanada, 3 für Mexiko.', 'Zehntes Zeichen: das Modelljahr.', 'Die übrigen Stellen enthalten unter anderem Hersteller, Modell, Motor und die laufende Fahrzeugnummer.'] },
      { h: 'Wo Sie die VIN finden', p: ['Bei US-Fahrzeugen finden Sie die VIN in der Regel unten an der Windschutzscheibe auf der Fahrerseite, im Türrahmen auf einem Aufkleber sowie im Title und in den Zulassungspapieren.'] },
      { h: 'Wofür Sie die VIN brauchen', p: ['Mit der VIN lassen sich die Fahrzeughistorie abfragen und passende Ersatzteile bestimmen. Bei importierten Fahrzeugen ist sie außerdem Grundlage für die Papiere und die Zulassung.'], links: [['Carfax-Fahrzeughistorie', '/carfax'], ['Ersatzteile für US-Fahrzeuge', '/ersatzteile-fuer-us-fahrzeuge-finden']] },
    ],
  },
  {
    slug: 'title-arten-usa-erklaert',
    title: 'US-Title erklärt: Clean, Salvage, Rebuilt und MSO',
    eyebrow: 'Ratgeber',
    lead: 'Der Title ist das wichtigste Eigentums- und Statusdokument eines US-Fahrzeugs. Die Art des Titles verrät viel über die Vorgeschichte.',
    desc: 'Ratgeber: Title-Arten in den USA (Clean, Salvage, Rebuilt, MSO) und warum der Title beim Import und bei der TÜV-Abnahme wichtig ist. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Was ein Title ist', p: ['Der Title entspricht in etwa dem deutschen Fahrzeugbrief. Er weist den Eigentümer aus und enthält unter anderem die Fahrgestellnummer. Für die Abnahme eines importierten Fahrzeugs beim TÜV wird der US-Title benötigt.'] },
      { h: 'Die wichtigsten Title-Arten', ul: ['Clean Title: Das Fahrzeug trägt keinen Schadensvermerk.', 'Salvage Title: Das Fahrzeug wurde von der Versicherung als Totalschaden eingestuft.', 'Rebuilt Title: Ein ehemaliges Salvage-Fahrzeug wurde repariert und neu abgenommen.', 'MSO (Manufacturer’s Statement of Origin): Herkunftsnachweis bei Neufahrzeugen.'] },
      { h: 'Regeln unterscheiden sich je Bundesstaat', p: ['Die Bezeichnungen und Voraussetzungen sind nicht in allen Bundesstaaten einheitlich. Lassen Sie sich Title-Angaben im Zweifel erklären, bevor Sie kaufen.'] },
      { h: 'Unsere Linie', p: ['Wir verkaufen keine Fahrzeuge mit Salvage Title. Bei importierten Fahrzeugen bieten wir ausschließlich Fahrzeuge mit unfallfreier Carfax-Historie an.'], links: [['Betrugsmasche bei US-Unfallfahrzeugen', '/betrugsmasche'], ['Carfax', '/carfax']] },
    ],
  },
  {
    slug: 'direkt-vom-schiff-kaufen',
    title: 'Direkt vom Schiff kaufen: So läuft es ab',
    eyebrow: 'Ratgeber',
    lead: 'Bei vielen unserer Fahrzeuge steht der Verkauf fest, bevor sie in Hagen ankommen. Historie, Fotos und Daten liegen zu diesem Zeitpunkt bereits vor.',
    desc: 'Ratgeber: Fahrzeug direkt vom Schiff kaufen. Ablauf, Überfahrt, Umrüstung, Abnahme und worauf Sie achten sollten. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Was „direkt vom Schiff“ bedeutet', p: ['Das Fahrzeug ist bereits in den USA oder Kanada eingekauft und befindet sich auf dem Weg nach Deutschland oder wurde gerade erst angeliefert. Fahrzeughistorie, Fotos und Fahrzeugdaten liegen vor.'] },
      { h: 'Der zeitliche Ablauf', ul: ['Überfahrt: in der Regel 6 bis 8 Wochen, je nach Hafen.', 'Umrüstung und Abnahme: etwa 5 bis 7 Tage.', 'Insgesamt sollten Sie mindestens 3 Monate einplanen.'] },
      { h: 'Worauf Sie achten sollten', p: ['Lassen Sie sich die Fahrzeughistorie zeigen und klären Sie Zahlungsmodalitäten im Kaufvertrag. Eine verbindliche Reservierung ist nur auf Grundlage eines Vertrags sinnvoll, nicht auf Zuruf.'], links: [['Carfax', '/carfax'], ['Vom Kauf bis zur Übergabe', '/kauf-und-uebergabe']] },
    ],
  },
  {
    slug: 'zoll-und-einfuhrumsatzsteuer-us-import',
    title: 'Zoll und Einfuhrumsatzsteuer beim US-Import',
    eyebrow: 'Ratgeber',
    lead: 'Beim Import eines Fahrzeugs aus den USA fallen Zoll und Einfuhrumsatzsteuer an. Wir erklären, wie die Abgaben grundsätzlich funktionieren.',
    desc: 'Ratgeber: Zoll und Einfuhrumsatzsteuer beim Import eines US-Fahrzeugs, Zollunbedenklichkeitsbescheinigung und Abwicklung. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Welche Abgaben anfallen', p: ['Beim Import eines Pkw aus einem Drittland wie den USA wird in der Regel ein Zollsatz von 10 Prozent erhoben, zusätzlich fällt Einfuhrumsatzsteuer von 19 Prozent an. Berechnet werden die Abgaben auf Grundlage des Warenwerts zuzüglich der Zollgebühren. Die Abgaben können sich ändern, hier gelten die jeweils gültigen gesetzlichen Regelungen.'] },
      { h: 'Zollunbedenklichkeitsbescheinigung', p: ['Nach Verzollung erhalten Sie die Zollunbedenklichkeitsbescheinigung. Sie wird für die deutschen Fahrzeugpapiere benötigt, nicht für die TÜV-Abnahme.'] },
      { h: 'Was wir für Sie übernehmen', p: ['Wir wickeln die Verzollung für Sie ab. Sie müssen sich nicht selbst mit dem Zoll auseinandersetzen.'], links: [['Import und Umrüstung', '/import-umruestung']] },
    ],
  },
  {
    slug: 'ersatzteile-fuer-us-fahrzeuge-finden',
    title: 'Ersatzteile für US-Fahrzeuge finden: So gehen Sie vor',
    eyebrow: 'Ratgeber',
    lead: 'Mit den richtigen Angaben lässt sich das passende Teil schneller bestimmen. Das spart Zeit und Fehlbestellungen.',
    desc: 'Ratgeber: Ersatzteile für US-Fahrzeuge finden. Welche Angaben Sie brauchen und worin sich Original- und Nachrüstteile unterscheiden. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Diese Angaben brauchen wir', ul: ['Modell und Baujahr', 'Fahrgestellnummer (VIN)', 'Motor und Ausstattung', 'Falls vorhanden: Teilenummer des alten Teils'] },
      { h: 'Original- oder Nachrüstteile', p: ['Originalteile entsprechen dem Hersteller-Standard. Nachrüstteile sind oft günstiger, die Qualität kann aber stark schwanken. Wir beraten Sie, welche Variante für Ihr Fahrzeug sinnvoll ist.'] },
      { h: 'Lieferzeit', p: ['Die Lieferzeit hängt vom jeweiligen Teil ab. Nennen Sie uns Ihre Angaben, wir geben Ihnen eine Einschätzung.'], links: [['Ersatzteile & Zubehör', '/ersatzteile-zubehoer-us'], ['Fahrgestellnummer erklärt', '/fahrgestellnummer-vin-erklaert']] },
    ],
  },
  {
    slug: 'hu-au-us-fahrzeuge',
    title: 'HU und AU bei US-Fahrzeugen: Das sollten Sie wissen',
    eyebrow: 'Ratgeber',
    lead: 'Auch US-Fahrzeuge müssen regelmäßig zur Hauptuntersuchung. Mit guter Vorbereitung verläuft sie meist unkompliziert.',
    desc: 'Ratgeber: Hauptuntersuchung und Abgasuntersuchung bei US-Fahrzeugen. Intervalle, Dauer und Vorbereitung. Autopartner GmbH, TÜV-NORD-Prüfstützpunkt, Hagen.',
    cta,
    blocks: [
      { h: 'Wie oft ist die HU fällig', p: ['Bei Pkw ist die Hauptuntersuchung in der Regel alle zwei Jahre fällig. Den Termin sehen Sie an der Prüfplakette auf dem hinteren Kennzeichen.'] },
      { h: 'Wie lange dauert die Prüfung', p: ['Ohne Mängel dauert die Prüfung in der Regel unter 60 Minuten. Wir sind Prüfstützpunkt der TÜV NORD.'] },
      { h: 'Vorbereitung', p: ['Lassen Sie Beleuchtung, Bremsen, Reifen und Fahrwerk vorab prüfen. Bei Umbauten sollten die zugehörigen Papiere bereitliegen, damit sie bei der Prüfung nachvollzogen werden können.'], links: [['TÜV und Homologation', '/tuev-und-homologation'], ['Zur Werkstatt', '/werkstatt-leistungen']] },
    ],
  },
  {
    slug: 'umbauten-eintragung-felgen-hoeherlegung',
    title: 'Umbauten am US-Fahrzeug: Felgen, Höherlegung und Eintragung',
    eyebrow: 'Ratgeber',
    lead: 'Umbauten verändern das Fahrzeug und können die Betriebserlaubnis berühren. Wer vorher klärt, was zulässig ist, vermeidet Ärger.',
    desc: 'Ratgeber: Umbauten am US-Fahrzeug, Felgen, Höherlegung und Eintragung. Betriebserlaubnis, Gutachten und Abstimmung mit dem TÜV. Autopartner GmbH, Hagen.',
    cta,
    blocks: [
      { h: 'Warum die Betriebserlaubnis wichtig ist', p: ['Wird ein Fahrzeug verändert, kann die Betriebserlaubnis erlöschen, wenn die Änderung nicht zulässig oder nicht eingetragen ist. Das kann auch Folgen für den Versicherungsschutz haben.'] },
      { h: 'Gutachten, Teilegutachten und ABE', p: ['Je nach Umbau reicht ein Teilegutachten oder eine allgemeine Betriebserlaubnis (ABE) des Teils, oder es ist ein Einzelgutachten nötig. Welche Lösung passt, hängt vom Teil und vom Fahrzeug ab.'] },
      { h: 'Unsere Vorgehensweise', p: ['Wir klären jeden Umbau vorab mit dem TÜV. Nach Fahrwerksänderungen gehören Achsvermessung und Lichteinstellung dazu.'], links: [['Fahrwerksumbau und Höherlegung', '/fahrwerksumbau-hoeherlegung'], ['US-Fahrzeug tunen', '/us-fahrzeug-tunen']] },
    ],
  },
  {
    slug: 'checkliste-besichtigung-probefahrt',
    title: 'Checkliste: Besichtigung und Probefahrt eines US-Fahrzeugs',
    eyebrow: 'Ratgeber',
    lead: 'Mit einer klaren Checkliste behalten Sie bei der Besichtigung den Überblick und sehen, worauf es ankommt.',
    desc: 'Checkliste für Besichtigung und Probefahrt eines US-Fahrzeugs: Papiere, Karosserie, Technik, Probefahrt. Autopartner GmbH American Cars, Hagen.',
    cta,
    blocks: [
      { h: 'Termin und Ablauf', p: ['Besichtigungen finden nach Vereinbarung statt, auch samstags. Eine Probefahrt ist nach Termin möglich.'] },
      { h: 'Das sollten Sie prüfen', ul: ['Papiere und Fahrgestellnummer: stimmen die Angaben überein?', 'Fahrzeughistorie: liegt ein Carfax-Bericht vor?', 'Karosserie: Spaltmaße, Lackunterschiede, Roststellen', 'Innenraum: Verschleiß, Funktion von Elektrik und Klima', 'Reifen: Profil, Alter und Zustand', 'Unterboden und Flüssigkeiten: Undichtigkeiten, Ölstand'] },
      { h: 'Bei der Probefahrt', p: ['Achten Sie auf Geräusche, Lenkverhalten, Bremsen und Schaltvorgänge. Fahren Sie nach Möglichkeit auch Strecken, die Ihrem Alltag entsprechen.'], links: [['Vom Kauf bis zur Übergabe', '/kauf-und-uebergabe'], ['Carfax', '/carfax'], ['Tipps & Hinweise', '/tipps-hinweise']] },
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
    ['Wie oft muss ein US-Fahrzeug zur HU?', 'Bei Pkw in der Regel alle zwei Jahre.'],
    ['Wie lange dauert die HU?', 'Ohne Mängel in der Regel unter 60 Minuten.'],
  ] },
  'umbauten-eintragung-felgen-hoeherlegung': { faq: [
    ['Muss ich Umbauten eintragen lassen?', 'Das hängt vom Umbau ab. Je nach Teil genügt ein Teilegutachten oder eine ABE, in manchen Fällen ist ein Einzelgutachten nötig.'],
    ['Was passiert bei einem nicht zulässigen Umbau?', 'Die Betriebserlaubnis kann erlöschen. Das kann auch den Versicherungsschutz betreffen.'],
  ] },
  'checkliste-besichtigung-probefahrt': { faq: [
    ['Kann ich auch samstags besichtigen?', 'Ja, Besichtigungen sind nach Vereinbarung auch samstags möglich.'],
    ['Ist eine Probefahrt ohne Termin möglich?', 'Nein, eine Probefahrt ist nur nach Termin möglich.'],
  ] },
};
