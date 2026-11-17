import { blogExtras } from './blogposts';
import { schluesselExtra } from './schluessel';
// Zusatzinhalte für Unterseiten: Anzeichen/Wann-Abschnitt und FAQ. Allgemeines Fachwissen, keine Preis- oder Terminzusagen.
export type Extra = { signsTitle?: string; signs?: string[]; faq: [string, string][] };

const book = 'Rufen Sie uns an oder schreiben Sie uns, wir vereinbaren einen Termin in unserer Werkstatt in Hagen-Hohenlimburg.';

export const extras: Record<string, Extra> = {
  'unfallwagen-litauen-erkennen': {
    signsTitle: 'Warnsignale beim Kauf',
    signs: ['Der Verkäufer nennt die Fahrgestellnummer (VIN) nicht', 'Sehr hochwertige Ausstattung bei auffällig niedrigem Preis', 'Aufwendige Leder- oder Stickarbeiten, die es ab Werk nie gab', 'Sichtbar schlechter Lack oder grobe Schweißnähte', 'Kabel, die mit Kabelbindern oder Isolierband befestigt sind'],
    faq: [
      ['Wie erkenne ich als Laie einen Unfallwagen?', 'Am einfachsten mit einer Carfax-Abfrage. Dafür brauchen Sie die Fahrgestellnummer (VIN).'],
      ['Was finden Sie bei Importen aus Litauen am häufigsten?', 'Schlecht verarbeitete Schweißnähte, laienhaft reparierte Elektrik, schlecht lackierte Teile, gebrauchte Teile aus anderen Fahrzeugen und teils fehlende oder überbrückte Airbags.'],
      ['Bekomme ich bei Ihnen einen Carfax-Bericht?', 'Ja, zu unseren Fahrzeugen erhalten Sie den Carfax-Bericht nach Ihrer Anfrage bei uns.'],
    ],
  },
  'dodge-ram-5-7-hemi': {
    signsTitle: 'Woran Sie das Problem erkennen',
    signs: ['Typisches Geräusch beim Kaltstart', 'Das Problem tritt am 5,7-Liter-Hemi V8 häufig auf'],
    faq: [
      ['Welches typische Problem hat der 5.7 Hemi im Dodge RAM?', 'Häufig ist die Dichtung des Auspuffkrümmers defekt. Das fällt durch ein typisches Geräusch beim Kaltstart auf.'],
      ['Worauf achten Sie bei der Reparatur?', 'Beim Ausbau dürfen die Krümmerbolzen nicht abreißen, sonst werden neue eingesetzt. Außerdem prüfen wir, ob der Krümmer verzogen ist, und ersetzen oder bearbeiten ihn dann.'],
      ['Was kostet die Reparatur?', 'Reparaturen an diesen Fahrzeugen sind sehr individuell, deshalb nennen wir keine Pauschalpreise. Sprechen Sie uns an.'],
    ],
  },
  'kauf-und-uebergabe': {
    faq: [
      ['Kann ich ein Fahrzeug reservieren?', 'Eine Reservierung auf Zuruf ist nicht möglich. Wir schreiben einen Kaufvertrag und vereinbaren darin eine Anzahlung.'],
      ['Kann ich mit EC-Karte oder Kreditkarte bezahlen?', 'EC-Karte ja, Kreditkarte nein. Viele Karten haben Sicherheitslimits, ein ganzes Auto lässt sich damit selten bezahlen.'],
      ['Wann ist eine Probefahrt möglich?', 'Nach Terminvereinbarung, sobald Kaufpreis und Zahlung geklärt sind. Bei einer Finanzierung nach positiver Finanzierungsanfrage.'],
      ['Wie lange dauert es bis zur Übergabe?', 'Von unserer Seite in der Regel maximal eine Woche, dazu kommt die Zulassung.'],
      ['Nehmen Sie mein Auto in Zahlung?', 'Ja, nach vorheriger Prüfung.'],
    ],
  },
  'werkstatt-service': {
    signsTitle: 'Wann sollten Sie in die Werkstatt?',
    signs: ['Die Inspektion oder der Ölwechsel ist laut Serviceheft fällig', 'Warnleuchten im Cockpit leuchten oder blinken', 'Ungewohnte Geräusche, Vibrationen oder Geruch', 'Vor dem Urlaub, vor der Winter- oder Sommersaison', 'Vor der HU, damit es keine Überraschung gibt'],
    faq: [
      ['Reparieren Sie nur US-Fahrzeuge?', 'Nein. Unsere Meisterwerkstatt wartet und repariert Fahrzeuge aller Marken, vom Kleinwagen bis zum US-Pickup.'],
      ['Verliere ich die Herstellergarantie, wenn ich bei Ihnen warten lasse?', 'Wartung in einer freien Meisterwerkstatt nach Herstellervorgaben und mit Teilen entsprechender Qualität ist grundsätzlich zulässig. Ob für Ihr Fahrzeug Besonderheiten gelten, klären wir gern vorab mit Ihnen.'],
      ['Wie bekomme ich einen Termin?', book],
    ],
  },
  'betrugsmasche': {
    faq: [
      ['Was ist ein Salvage Title?', 'Einen Salvage Title erhält ein Fahrzeug in den USA, wenn die Versicherung es als Totalschaden eingestuft hat. Er steht im Carfax. In den USA darf das Fahrzeug so nicht mehr zugelassen werden.'],
      ['Verkaufen Sie Fahrzeuge mit Salvage Title?', 'Nein. Fahrzeuge mit Salvage Title verkaufen wir nicht. Wir verkaufen ausschließlich Fahrzeuge mit unfallfreier Carfax-Historie.'],
      ['Wie schütze ich mich vor einem aufgebauten Unfallwagen?', 'Fragen Sie nach der Fahrgestellnummer und lassen Sie sich die Carfax-Historie zeigen. Lassen Sie Vorschäden im Kaufvertrag festhalten und das Fahrzeug vor dem Kauf in einer Werkstatt prüfen. Seien Sie vorsichtig bei auffällig günstigen Preisen.'],
      ['Erkennt der TÜV einen Unfallwagen?', 'Nicht zuverlässig. Der TÜV prüft, ob das Fahrzeug zum Zeitpunkt der Abnahme verkehrssicher ist, nicht ob es frühere Unfallschäden gab. Airbags lassen sich sicher nur einzeln überprüfen, zum Beispiel durch Ausbau. Das können wir in unserer Werkstatt tun.'],
    ],
  },
  'tipps-hinweise': {
    faq: [
      ['Worauf muss ich beim Kauf eines US-Fahrzeugs achten?', 'Fragen Sie nach der Fahrgestellnummer und der Carfax-Historie, lassen Sie Vorschäden im Kaufvertrag festhalten und seien Sie vorsichtig bei Angeboten, die auffällig günstig sind. Die Tipps auf dieser Seite helfen Ihnen bei der Einschätzung.'],
      ['Wie erkenne ich einen Unfallwagen aus den USA?', 'Eine Carfax-Abfrage zeigt gemeldete Unfälle und Totalschäden. Schäden, die weder gemeldet noch in zugelassenen Werkstätten repariert wurden, zeigt sie nicht. Verdächtig sind außerdem aufwendige Beklebungen, die Schäden verdecken können, und sehr hochwertige Ausstattung zu einem niedrigen Preis.'],
      ['Was ist die VIN und wo finde ich sie?', 'Die VIN ist die 17-stellige Fahrgestellnummer. Sie finden sie meist am unteren Rand der Frontscheibe auf der Fahrerseite und in den Fahrzeugpapieren.'],
    ],
  },
  'carfax': {
    faq: [
      ['Erhalte ich zu Ihren Fahrzeugen einen Carfax-Bericht, und kostet er etwas?', 'Ja. Zu unseren angebotenen Fahrzeugen erhalten Sie die Carfax-Abfrage nach Ihrer Anfrage bei uns, kostenlos. Alle importierten Fahrzeuge bei uns haben eine unfallfreie Carfax-Historie. Pauschale Abfragen für beliebige andere Fahrzeuge bieten wir nicht an.'],
      ['Gibt es Carfax auch für Fahrzeuge aus Deutschland?', 'Nein. Carfax gilt nur für Fahrzeuge aus den USA und Kanada. Für ein Fahrzeug, das nie dort war, liegen in der Regel keine Daten vor.'],
      ['Kann Carfax eine Tachomanipulation anzeigen?', 'Der Bericht kann Hinweise liefern, etwa wenn die Kilometerstände in der Historie nicht zusammenpassen. Deshalb lohnt sich der Blick auf den Kilometerverlauf.'],
      ['Was bedeutet Salvage Title?', 'Einen Salvage Title erhält ein Fahrzeug in den USA, wenn die Versicherung es als Totalschaden eingestuft hat. Solche Fahrzeuge verkaufen wir nicht.'],
      ['Reicht der Carfax-Bericht allein aus?', 'Der Bericht ist ein wichtiger Baustein, aber nicht der einzige. Bei den Fahrzeugen, die wir selbst einkaufen, lassen wir diese zusätzlich vor dem Kauf nach unseren Standards durch unsere Partner in den USA und Kanada prüfen.'],
    ],
  },
  'import-umruestung': {
    faq: [
      ['Wie lange dauert ein Import insgesamt?', 'Die Gesamtdauer hängt von vielen Faktoren ab, etwa vom Verschiffungshafen. In der Regel sollten Sie mit mindestens drei Monaten rechnen. Die Überfahrt allein dauert sechs bis acht Wochen, je nach Hafen.'],
      ['Wie lange dauern Umrüstung und TÜV-Abnahme?', 'Sobald das Fahrzeug bei uns in Hagen angekommen ist, rechnen Sie für Umrüstung und TÜV-Abnahme mit etwa fünf bis sieben Tagen.'],
      ['Welche Marken und Modelle können importiert werden?', 'Wir können nahezu alle Marken und Modelle importieren. Sprechen Sie uns einfach mit Ihrem Wunschmodell an.'],
      ['Kann ich mein Wunschfahrzeug selbst in den USA kaufen und von Ihnen importieren lassen?', 'Ja. Die Suche und den Kauf Ihres Traumautos übernehmen Sie selbst. Wir holen das Fahrzeug beim Verkäufer ab und wickeln den gesamten restlichen Importprozess für Sie ab: Transport, Verzollung, Umrüstung und TÜV-Abnahme, auf Wunsch auch die Zulassung gegen Aufpreis.'],
      ['Worin unterscheidet sich ein selbst gekauftes Fahrzeug von Ihren eigenen Fahrzeugen?', 'Der Importprozess ist identisch. Der Unterschied liegt vor dem Kauf: Fahrzeuge, die wir selbst kaufen, lassen wir nach unseren Standards durch unsere Partner in den USA und Kanada prüfen. Wenn Sie selbst kaufen, haben Sie diese Kontrolle vor dem Kauf nicht.'],
      ['Kann ich ein Fahrzeug kaufen, das noch auf dem Schiff ist?', 'Ja, wir verkaufen viele Fahrzeuge direkt vom Schiff. Das ist bei uns möglich, weil uns Historie, Fotos und Daten der Fahrzeuge bereits vorliegen.'],
      ['Machen Sie Umrüstung und Abnahme auch für Fahrzeuge, die ich selbst importiert habe?', 'Ja, das machen wir sehr häufig. Die Preise nennen wir Ihnen gern auf Anfrage.'],
      ['Was kostet ein Import?', 'Die Kosten hängen vom Einzelfall ab. Bitte stellen Sie uns eine Anfrage, dann nennen wir Ihnen die Preise.'],
      ['Ist eine Finanzierung oder Leasing möglich?', 'Ja, beides ist möglich. Wir arbeiten mit verschiedenen Banken zusammen und berechnen Ihnen gern ein individuelles Angebot, sowohl für Privat- als auch für Gewerbekunden.'],
      ['Gilt die Garantie auch für importierte Fahrzeuge?', 'Ja, unsere Garantie gilt auch für importierte Fahrzeuge. Sie wird über die Intec AG abgeschlossen, kostet 595 € pro Jahr und kann bis zu 3 Jahren abgeschlossen werden.'],
      ['Aus welchen Ländern importieren Sie?', 'Wir importieren aus den USA und Kanada. Je nach Verschiffungshafen, zum Beispiel in Kalifornien, Texas oder Kanada, können die Transportzeiten abweichen.'],
      ['Was ist die Zoll-Unbedenklichkeitsbescheinigung (ZUB)?', 'Die ZUB erhalten Sie, nachdem Zoll und Einfuhrumsatzsteuer bezahlt sind. Für die TÜV-Abnahme ist sie nicht notwendig. Erst für die Erstellung der deutschen Fahrzeugpapiere wird sie benötigt.'],
      ['Welche Unterlagen brauche ich für TÜV-Abnahme und deutsche Fahrzeugpapiere?', 'Für die TÜV-Abnahme benötigen wir die Herkunftsdokumente (US-Title bzw. MSO). Für die Erstellung der deutschen Fahrzeugpapiere kommen die Zollunbedenklichkeitsbescheinigung sowie die Rechnung bzw. der Kaufvertrag hinzu.'],
      ['Übernehmen Sie auch die Zulassung?', 'Ja, auf Wunsch übernehmen wir auch die Zulassung, gegen Aufpreis. Dafür benötigen wir Ihren Ausweis, ein SEPA-Mandat, eine Vollmacht und die eVB-Nummer, gegebenenfalls außerdem die Bestätigung Ihres Wunschkennzeichens.'],
    ],
  },
  'tuev-und-homologation': {
    faq: [
      ['Was ist die TÜV-Vollabnahme nach § 21 StVZO?', 'Bei Importfahrzeugen ohne EU-Typgenehmigung prüft der Prüfer das Fahrzeug einzeln und erstellt ein Gutachten. Mit diesem Gutachten und den Papieren kann das Fahrzeug nach deutschem Standard zugelassen werden.'],
      ['Müssen US-Fahrzeuge umgerüstet werden?', 'Meist ja, zum Beispiel mit nachgerüsteter Nebelschlussleuchte und gelben statt roten Blinkern. Welche Anpassungen nötig sind, hängt vom Fahrzeug ab. Das klären wir vor dem Kauf.'],
    ],
  },
  'us-fahrzeug-tunen': {
    signsTitle: 'Beliebte Umbauten',
    signs: ['Auspuffanlage mit mehr Sound', 'Felgen und Reifen in anderen Größen', 'Höher- oder Tieferlegung', 'Zusatzscheinwerfer und Lightbars', 'Kotflügel- und Spurverbreiterungen'],
    faq: [
      ['Muss ich Umbauten eintragen lassen?', 'Viele Umbauten wie andere Felgen, Fahrwerke oder Verbreiterungen sind eintragungspflichtig. Wir klären das vor dem Umbau mit dem Prüfstützpunkt und achten auf eine saubere Abnahme.'],
      ['Setzen Sie auch Sonderwünsche um?', 'Ja, wir setzen gern auch individuelle Wünsche um, die nicht in der Liste stehen. Sprechen Sie uns einfach an.'],
      ['Erlischt die Betriebserlaubnis durch einen Umbau?', 'Nicht pauschal, aber bei nicht eingetragenen Veränderungen kann sie erlöschen. Deshalb lassen wir Umbauten fachgerecht abnehmen und eintragen.'],
    ],
  },
  'unfall-instandsetzung': {
    signsTitle: 'Nach einem Unfall',
    signs: ['Fahrzeug sichern und Unfallstelle dokumentieren', 'Polizei rufen, wenn Personen verletzt sind oder Streit über die Schuld besteht', 'Fotos von Schäden und Unfallstelle machen', 'Gutachten oder Kostenvoranschlag einholen', 'Schaden bei der gegnerischen Versicherung melden'],
    faq: [
      ['Übernehmen Sie die Abwicklung mit der Versicherung?', 'Ja, wir unterstützen Sie bei der Schadensabwicklung, damit Sie möglichst wenig Aufwand haben.'],
      ['Reparieren Sie auch US-Fahrzeuge?', 'Ja. Wir kennen amerikanische Technik und beschaffen auch Ersatzteile für US-Modelle.'],
      ['Setzen Sie auch Glasbruchschäden instand?', 'Ja, wir tauschen Front-, Heck- und Seitenscheiben, vor allem auch bei US-Fahrzeugen, und rechnen direkt mit Ihrer Versicherung ab.'],
      ['Brauche ich ein Gutachten?', 'Bei größeren Schäden ist ein Gutachten meist sinnvoll, weil es die Schadenshöhe belegt. Ab welcher Höhe es nötig ist, besprechen wir mit Ihnen.'],
    ],
  },
  'klimaservice': {
    faq: [
      ['Wie oft sollte ich die Klimaanlage warten lassen?', 'Wir empfehlen eine Prüfung einmal im Jahr. Sie erhält die Kühlleistung und beugt Schäden am Kompressor vor.'],
      ['Warum riecht die Klimaanlage muffig?', 'Feuchtigkeit im Verdampfer fördert Bakterien und Schimmel. Eine Desinfektion der Klimaanlage und ein neuer Innenraumfilter beseitigen den Geruch meist. Beides bieten wir an.'],
      ['Warten Sie auch Klimaanlagen von US-Fahrzeugen?', 'Ja, wir warten Klimaanlagen aller Marken, auch von amerikanischen Fahrzeugen.'],
    ],
  },
  'hu-au-hagen': {
    signsTitle: 'So bereiten Sie sich auf die HU vor',
    signs: ['Fahrzeugschein und, falls vorhanden, letzten Prüfbericht mitbringen', 'Licht, Blinker und Bremslicht vorab prüfen', 'Reifenprofil und Reifendruck kontrollieren', 'Warnleuchten im Cockpit ansprechen', 'Bei Bedarf einen Vorab-Check in der Werkstatt machen'],
    faq: [
      ['Wie oft muss ich zur Hauptuntersuchung?', 'Pkw müssen in der Regel alle zwei Jahre zur HU.'],
      ['Wie lange dauert die HU?', 'Wenn keine Mängel vorliegen, dauert die Prüfung normalerweise keine 60 Minuten.'],
      ['Kann ich HU und AU in einem Termin erledigen?', 'Ja, bei uns erledigen Sie Hauptuntersuchung und Abgasuntersuchung in einem Termin.'],
      ['Was passiert bei Mängeln?', 'Bei erheblichen Mängeln gibt es keine Plakette. Wir können die Mängel in unserer Meisterwerkstatt beheben und das Fahrzeug anschließend erneut vorführen.'],
    ],
  },
  'motordiagnose': {
    faq: [
      ['Was bedeutet eine leuchtende Motorkontrollleuchte?', 'Das Steuergerät hat einen Fehler gespeichert. Wir lesen den Fehler aus und prüfen die Ursache.'],
      ['Können Sie auch US-Fahrzeuge auslesen?', 'Ja, wir arbeiten mit professionellen Diagnosegeräten und lesen den Fehlerspeicher fahrzeugübergreifend aus.'],
      ['Reicht das Auslesen, um das Problem zu lösen?', 'Der Fehlercode zeigt, wo das Problem liegt. Die genaue Ursache finden wir anschließend durch Prüfung der betroffenen Bauteile.'],
    ],
  },
  'bremsen-service': {
    faq: [
      ['Wann müssen Bremsbeläge gewechselt werden?', 'Spätestens, wenn die Verschleißanzeige warnt oder die Beläge die Mindestdicke erreichen. Das hängt stark von Fahrstil und Fahrzeug ab.'],
      ['Wie oft sollte die Bremsflüssigkeit erneuert werden?', 'Meist alle zwei Jahre, denn sie nimmt Feuchtigkeit auf und verliert dadurch an Wirkung.'],
      ['Ist Rubbeln im Pedal gefährlich?', 'Oft sind verzogene Bremsscheiben die Ursache. Lassen Sie die Bremse zeitnah prüfen, denn Sicherheit geht vor.'],
    ],
  },
  'getriebe-motor-reparatur': {
    faq: [
      ['Reparieren Sie Getriebe?', 'Wir diagnostizieren Getriebeprobleme und führen Getriebespülungen für alle Marken durch. Motorinstandsetzungen machen wir selbst. Getriebeinstandsetzungen führen wir nicht selbst durch, sondern vergeben sie extern. Umfang und Möglichkeiten klären wir nach der Diagnose.'],
      ['Lohnt sich eine Reparatur oder ist ein Austausch besser?', 'Das entscheiden wir nach der Diagnose gemeinsam mit Ihnen. Sie bekommen eine ehrliche Einschätzung.'],
      ['Wie lange dauert eine Getriebereparatur?', 'Das hängt von Schaden und Teileverfügbarkeit ab. Nach der Diagnose nennen wir Ihnen einen realistischen Zeitrahmen.'],
    ],
  },
  'oelwechsel': {
    faq: [
      ['Wie oft sollte ich das Öl wechseln?', 'Das steht im Serviceheft Ihres Herstellers. Üblich sind Intervalle von einem Jahr oder einer bestimmten Laufleistung, bei Kurzstrecken eher früher.'],
      ['Welches Öl brauche ich für mein US-Fahrzeug?', 'Maßgeblich sind die Herstellerfreigabe und die Viskosität für Ihren Motor. Wir verwenden das passende Öl nach Vorgabe.'],
      ['Wechseln Sie auch den Ölfilter?', 'Ja, zum Ölwechsel gehört in der Regel auch ein neuer Ölfilter.'],
    ],
  },
  'zahnriemen-steuerkette': {
    faq: [
      ['Warum ist der Zahnriemenwechsel so wichtig?', 'Reißt der Zahnriemen, kann bei vielen Motoren ein Totalschaden entstehen. Deshalb sollte das Herstellerintervall eingehalten werden.'],
      ['Hält eine Steuerkette ein Leben lang?', 'Nicht immer. Auch Ketten, Spanner und Führungen verschleißen und zeigen das oft durch Geräusche an.'],
      ['Sollte die Wasserpumpe gleich mitgewechselt werden?', 'Oft ja, weil der Aufwand ohnehin anfällt. Wir beraten Sie, was bei Ihrem Fahrzeug sinnvoll ist.'],
    ],
  },
  'kupplungswechsel': {
    faq: [
      ['Wie lange hält eine Kupplung?', 'Das hängt von Fahrstil, Fahrzeug und Einsatz ab. Häufiges Anfahren am Berg oder mit Anhänger verkürzt die Lebensdauer.'],
      ['Wird die Kupplung komplett getauscht?', 'In der Regel wird der Kupplungssatz mit Druckplatte, Scheibe und Ausrücklager gemeinsam erneuert.'],
      ['Wie lange dauert ein Kupplungswechsel?', 'Das hängt vom Fahrzeug ab. Genaues sagen wir Ihnen nach der Prüfung.'],
    ],
  },
  'fluessigkeiten-zuendkerzen-batterie': {
    faq: [
      ['Wie lange hält eine Autobatterie?', 'Im Schnitt vier bis sechs Jahre. Kurzstrecken und Kälte verkürzen die Lebensdauer.'],
      ['Wann sollten Zündkerzen gewechselt werden?', 'Nach Herstellerangabe, oft nach mehreren zehntausend Kilometern. Alte Kerzen führen zu Startproblemen und höherem Verbrauch.'],
      ['Prüfen Sie die Batterie kostenlos?', 'Eine Batterieprüfung ist schnell erledigt. Fragen Sie uns bei der Terminvereinbarung danach.'],
    ],
  },
  'auspuff-katalysator': {
    faq: [
      ['Darf ich eine Sport-Auspuffanlage montieren?', 'Ja, wenn sie zulässig ist und eingetragen wird. Wir beraten Sie zu Sound und Zulassung.'],
      ['Wann ist der Katalysator defekt?', 'Typisch sind Leistungsverlust, Motorkontrollleuchte und erhöhte Abgaswerte bei der AU.'],
      ['Können Sie Auspuffanlagen für US-Fahrzeuge einbauen?', 'Ja, auch Auspuffanlagen und Sound-Umbauten für US-Fahrzeuge gehören zu unserem Angebot.'],
    ],
  },
  'stossdaempfer-fahrwerk': {
    faq: [
      ['Wann sollten Stoßdämpfer gewechselt werden?', 'Das hängt von Fahrzeug, Fahrstil und Straßenzustand ab. Eine Prüfung gibt Klarheit.'],
      ['Werden Dämpfer achsweise getauscht?', 'Ja, achsweise, damit das Fahrverhalten ausgewogen bleibt.'],
      ['Bieten Sie auch Fahrwerksumbauten an?', 'Ja, mit Höher- oder Tieferlegung, auch eingetragen.'],
    ],
  },
  'achsvermessung': {
    faq: [
      ['Warum ist die Achsvermessung wichtig?', 'Falsche Spur und Sturz belasten Reifen und Fahrwerk und beeinträchtigen die Sicherheit.'],
      ['Wie lange dauert eine Achsvermessung?', 'Das hängt vom Fahrzeug ab. Genaues sagen wir Ihnen bei der Terminvereinbarung.'],
      ['Bieten Sie Achsvermessung für alle Marken an?', 'Ja, wir vermessen Fahrzeuge aller Marken, auch US-Fahrzeuge, Pickups und SUV.'],
      ['Vermessen Sie auch höhergelegte Fahrzeuge?', 'Ja, nach Fahrwerksumbauten ist eine Vermessung besonders wichtig.'],
    ],
  },
  'autoelektrik': {
    faq: [
      ['Können Sie Zusatzscheinwerfer oder Lightbars einbauen?', 'Ja, wir verkabeln Scheinwerfer, Arbeitsleuchten und Lightbars fachgerecht.'],
      ['Reparieren Sie auch Elektronik bei US-Fahrzeugen?', 'Ja, wir kennen amerikanische Fahrzeugelektronik und lesen die Steuergeräte aus.'],
    ],
  },
  'motoreninstandsetzung': {
    faq: [
      ['Wie lange dauert eine Instandsetzung?', 'Das hängt vom Fahrzeug ab. Genaues sagen wir Ihnen nach der Diagnose.'],
      ['Setzen Sie auch große V8-Motoren instand?', 'Ja, wir setzen auch Motoren amerikanischer Fahrzeuge instand, zum Beispiel V8-Motoren. Sprechen Sie uns zu Ihrem Motor an.'],
    ],
  },
  'reifenservice': {
    faq: [
      ['Ab wann sollte ich Reifen wechseln?', 'Gesetzlich gelten mindestens 1,6 mm Profil. Für Winterreifen werden etwa vier Millimeter empfohlen.'],
      ['Wann ist die Winterreifenzeit?', 'Als Faustregel von Oktober bis Ostern. Maßgeblich sind die Witterungsbedingungen. Bei Glätte, Schnee oder Eis gilt die situative Winterreifenpflicht.'],
      ['Montieren Sie auch Reifen und Felgen für Pickups und SUV?', 'Ja, auch Reifen und Felgen für Pickups und SUV.'],
    ],
  },
  'reifeneinlagerung': {
    faq: [
      ['Wie werden Reifen richtig gelagert?', 'Kühl, trocken und dunkel, möglichst stehend oder hängend und vor Öl und Sonne geschützt.'],
      ['Lagern Sie auch Räder von Pickups und SUV ein?', 'Ja, auch Räder von Pickups und SUV. Sprechen Sie uns zu Ihren Rädern an.'],
      ['Wie läuft der Saisonwechsel ab?', 'Sie vereinbaren einen Termin, wir wechseln die Räder und lagern den anderen Satz wieder ein.'],
    ],
  },
  'reifen-und-felgen': {
    faq: [
      ['Muss ich Sonderfelgen eintragen lassen?', 'Sonderfelgen brauchen eine Zulassung, entweder per ABE oder Eintragung. Das klären wir mit dem Prüfstützpunkt.'],
      ['Führen Sie auch Reifen für Pickups und SUV?', 'Ja, auch Reifen für Pickups und SUV.'],
      ['Montieren Sie die Reifen auch?', 'Ja, Montage und Wuchten gehören zu unserem Reifenservice. Auf Wunsch lagern wir Ihre Räder auch ein.'],
    ],
  },
  'rdks-reifendruckkontrolle': {
    faq: [
      ['Warum leuchtet die RDKS-Warnleuchte?', 'Ursachen sind zu niedriger Druck, Temperaturwechsel oder defekte Sensoren.'],
      ['Müssen Sensoren beim Radwechsel angelernt werden?', 'Je nach System ja. Wir lernen die Sensoren fachgerecht an.'],
      ['Kann ich die Sensoren selbst bestellen?', 'Das raten wir nicht. Häufig werden falsche Sensoren gekauft, die nicht zum Fahrzeug passen. Fragen Sie uns vor dem Kauf, wir sagen Ihnen, welcher Sensor passt.'],
      ['Funktionieren europäische Sensoren in einem US-Fahrzeug?', 'Das hängt vom Fahrzeug ab. US-Sensoren senden oft auf 315 MHz, europäische meist auf 433 MHz. Wir prüfen vorab, welcher Sensor passt.'],
    ],
  },
  'fahrwerksumbau-hoeherlegung': {
    faq: [
      ['Muss eine Höherlegung eingetragen werden?', 'In der Regel ja. Wir klären jeden Umbau vorab mit dem TÜV.'],
      ['Wie viel Höherlegung ist möglich?', 'Das hängt vom Fahrzeug und den verfügbaren Kits ab. Wir beraten Sie zum Modell.'],
    ],
  },
  'ersatzteile-zubehoer-us': {
    faq: [
      ['Besorgen Sie auch seltene Teile?', 'Wir beschaffen Ersatzteile und Zubehör für US-Fahrzeuge und sagen Ihnen, was verfügbar ist.'],
      ['Wie lange dauert die Lieferung?', 'Das hängt vom Teil ab. Nach Ihrer Anfrage nennen wir die Lieferzeit.'],
      ['Bauen Sie die Teile auch ein?', 'Ja, unsere Meisterwerkstatt übernimmt den Einbau.'],
    ],
  },
  'autoglas-steinschlag': {
    faq: [
      ['Muss ich bei einem Steinschlag selbst etwas tun?', 'Fahren Sie möglichst bald zu uns. Wir bewerten den Schaden und klären die Abwicklung mit Ihrer Versicherung.'],
    ],
  },
  'unfallgutachten': {
    faq: [
      ['Wie läuft die Begutachtung ab?', 'Ein Sachverständiger begutachtet das Fahrzeug und dokumentiert Schäden und Kosten.'],
      ['Darf ich den Gutachter selbst wählen?', 'Bei einem unverschuldeten Unfall in der Regel ja. Wir beraten Sie dazu.'],
    ],
  },
  'fahrzeugaufbereitung': {
    faq: [
      ['Bereiten Sie auch US-Fahrzeuge auf?', 'Ja, wir bereiten Fahrzeuge aller Marken auf, auch US-Fahrzeuge wie Pickups und SUV.'],
      ['Wie lange dauert eine Aufbereitung?', 'Das hängt vom Zustand und vom Umfang ab. Nach der Besichtigung nennen wir Ihnen den Zeitrahmen.'],
    ],
  },
  'ersatzwagen': {
    faq: [
      ['Gibt es einen Hol- und Bringservice?', 'Nein, einen Hol- und Bringservice bieten wir nicht an.'],
      ['Wie bekomme ich einen Ersatzwagen?', 'Fragen Sie bei der Terminvereinbarung danach, per Telefon unter 02334 / 80814-0 oder über unser Formular. Wir planen dann für Sie.'],
    ],
  },
  'saison-checks': {
    faq: [
      ['Wie lange dauert ein Check?', 'Das hängt vom Umfang ab. Bei einem Termin planen wir die Zeit für Sie ein.'],
      ['Gilt das auch für US-Fahrzeuge?', 'Ja, wir prüfen Fahrzeuge aller Marken, auch US-Fahrzeuge.'],
    ],
  },
};

const cityFaq = (city: string): Extra => ({
  signsTitle: `Für Kunden aus ${city}`,
  signs: ['Termin für Werkstatt oder TÜV vorab telefonisch vereinbaren', 'Fahrzeugschein und, falls vorhanden, Serviceheft mitbringen', 'Für den Fahrzeugkauf: Besichtigung nach Vereinbarung, auch am Samstag', 'Finanzierung vorab am Rechner auf der Fahrzeugseite durchrechnen', 'Bei Importwünschen: Wunschfahrzeug und Budget nennen'],
  faq: [
    ['Erledigen Sie Import und Zulassung für mich?', 'Ja. Von Prüfung und Transport bis Zoll, Umrüstung und TÜV-Vollabnahme übernehmen wir den Ablauf.'],
  ],
});
extras['us-cars-iserlohn'] = cityFaq('Iserlohn');
extras['us-cars-dortmund'] = cityFaq('Dortmund');
extras['us-cars-wuppertal'] = cityFaq('Wuppertal');
extras['us-cars-witten'] = cityFaq('Witten');
extras['us-cars-sauerland'] = cityFaq('dem Sauerland');

Object.assign(extras, blogExtras);
extras['ersatzschluessel-us-fahrzeuge'] = schluesselExtra;
