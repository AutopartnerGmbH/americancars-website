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
      ['Bekomme ich bei Ihnen einen Carfax-Bericht?', 'Ja, zu jedem unserer Fahrzeuge stellen wir den Carfax-Bericht zur Verfügung.'],
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
  'tuev-und-homologation': {
    signsTitle: 'Das sollten Sie vor der Abnahme bereithalten',
    signs: ['US-Title bzw. MSO als Herkunftsnachweis', 'Zollunbedenklichkeitsbescheinigung', 'Rechnung bzw. Kaufvertrag', 'Fahrzeugdatenblatt und KBA-Auskunft', 'Lichttechnisches Gutachten, wenn erforderlich'],
    faq: [
      ['Was ist die TÜV-Vollabnahme nach § 21 StVZO?', 'Bei Importfahrzeugen ohne EU-Typgenehmigung prüft der Prüfer das Fahrzeug einzeln und erstellt ein Gutachten. Mit diesem Gutachten und den Papieren kann das Fahrzeug nach deutschem Standard zugelassen werden.'],
      ['Müssen US-Fahrzeuge umgerüstet werden?', 'Meist ja, zum Beispiel mit nachgerüsteter Nebelschlussleuchte und gelben statt roten Blinkern. Welche Anpassungen nötig sind, hängt vom Fahrzeug ab. Das klären wir vor dem Kauf.'],
      ['Kann ich auch mit einem normalen Pkw zur HU kommen?', 'Ja. Wir sind Prüfstützpunkt des TÜV NORD und prüfen Fahrzeuge aller Hersteller.'],
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
      ['Brauche ich ein Gutachten?', 'Bei größeren Schäden ist ein Gutachten meist sinnvoll, weil es die Schadenshöhe belegt. Ab welcher Höhe es nötig ist, besprechen wir mit Ihnen.'],
    ],
  },
  'klimaservice': {
    signsTitle: 'Anzeichen für einen Klimaservice',
    signs: ['Die Luft wird nicht mehr richtig kalt', 'Scheiben beschlagen schnell von innen', 'Muffiger Geruch aus den Lüftungsdüsen', 'Der Kompressor ist laut oder schaltet häufig', 'Letzter Service liegt länger als zwei Jahre zurück'],
    faq: [
      ['Wie oft sollte ich die Klimaanlage warten lassen?', 'Üblich ist eine Prüfung etwa alle zwei Jahre. Sie erhält die Kühlleistung und beugt Schäden am Kompressor vor.'],
      ['Warum riecht die Klimaanlage muffig?', 'Feuchtigkeit im Verdampfer fördert Bakterien und Schimmel. Eine Desinfektion und ein neuer Innenraumfilter beseitigen den Geruch meist.'],
      ['Warten Sie auch Klimaanlagen von US-Fahrzeugen?', 'Ja, wir warten Klimaanlagen aller Marken, auch von amerikanischen Fahrzeugen.'],
    ],
  },
  'hu-au-hagen': {
    signsTitle: 'So bereiten Sie sich auf die HU vor',
    signs: ['Fahrzeugschein und, falls vorhanden, letzten Prüfbericht mitbringen', 'Licht, Blinker und Bremslicht vorab prüfen', 'Reifenprofil und Reifendruck kontrollieren', 'Warnleuchten im Cockpit ansprechen', 'Bei Bedarf einen Vorab-Check in der Werkstatt machen'],
    faq: [
      ['Wie oft muss ich zur Hauptuntersuchung?', 'Pkw müssen in der Regel alle zwei Jahre zur HU, die erste Untersuchung steht nach drei Jahren an.'],
      ['Wie lange dauert die HU?', 'Wenn keine Mängel vorliegen, dauert die Prüfung normalerweise keine 60 Minuten.'],
      ['Kann ich HU und AU in einem Termin erledigen?', 'Ja, bei uns erledigen Sie Hauptuntersuchung und Abgasuntersuchung in einem Termin.'],
      ['Was passiert bei Mängeln?', 'Bei erheblichen Mängeln gibt es keine Plakette. Wir können die Mängel in unserer Meisterwerkstatt beheben und das Fahrzeug anschließend erneut vorführen.'],
    ],
  },
  'motordiagnose': {
    signsTitle: 'Wann lohnt sich eine Diagnose?',
    signs: ['Motorkontrollleuchte leuchtet oder blinkt', 'Der Motor läuft unruhig oder verliert Leistung', 'Erhöhter Verbrauch ohne erkennbaren Grund', 'Das Fahrzeug geht im Leerlauf aus', 'Vor dem Kauf eines Gebrauchtwagens'],
    faq: [
      ['Was bedeutet eine leuchtende Motorkontrollleuchte?', 'Das Steuergerät hat einen Fehler gespeichert. Bei blinkender Leuchte sollten Sie nicht weiterfahren, sondern sofort die Werkstatt aufsuchen.'],
      ['Können Sie auch US-Fahrzeuge auslesen?', 'Ja, wir arbeiten mit professionellen Diagnosegeräten und lesen den Fehlerspeicher fahrzeugübergreifend aus.'],
      ['Reicht das Auslesen, um das Problem zu lösen?', 'Der Fehlercode zeigt, wo das Problem liegt. Die genaue Ursache finden wir anschließend durch Prüfung der betroffenen Bauteile.'],
    ],
  },
  'bremsen-service': {
    signsTitle: 'Warnzeichen an der Bremse',
    signs: ['Quietschen, Schleifen oder Rubbeln beim Bremsen', 'Das Bremspedal fühlt sich weich an oder sinkt durch', 'Das Fahrzeug zieht beim Bremsen zur Seite', 'Warnleuchte für Bremsbeläge oder ABS', 'Bremsflüssigkeit ist älter als zwei Jahre'],
    faq: [
      ['Wann müssen Bremsbeläge gewechselt werden?', 'Spätestens, wenn die Verschleißanzeige warnt oder die Beläge die Mindestdicke erreichen. Das hängt stark von Fahrstil und Fahrzeug ab.'],
      ['Wie oft sollte die Bremsflüssigkeit erneuert werden?', 'Meist alle zwei Jahre, denn sie nimmt Feuchtigkeit auf und verliert dadurch an Wirkung.'],
      ['Ist Rubbeln im Pedal gefährlich?', 'Oft sind verzogene Bremsscheiben die Ursache. Lassen Sie die Bremse zeitnah prüfen, denn Sicherheit geht vor.'],
    ],
  },
  'getriebe-motor-reparatur': {
    signsTitle: 'Warnzeichen bei Getriebe und Motor',
    signs: ['Ruckeln oder Verzögerung beim Schalten', 'Ölflecken unter dem Fahrzeug', 'Mahlende oder pfeifende Geräusche', 'Leistungsverlust oder Überhitzung', 'Warn- oder Kontrollleuchten im Cockpit'],
    faq: [
      ['Reparieren Sie Automatikgetriebe?', 'Wir kennen amerikanische Technik und kümmern uns um Diagnose und Reparatur von Getriebe und Motor. Umfang und Möglichkeiten klären wir nach der Diagnose.'],
      ['Lohnt sich eine Reparatur oder ist ein Austausch besser?', 'Das entscheiden wir nach der Diagnose gemeinsam mit Ihnen. Sie bekommen eine ehrliche Einschätzung.'],
      ['Wie lange dauert eine Getriebereparatur?', 'Das hängt von Schaden und Teileverfügbarkeit ab. Nach der Diagnose nennen wir Ihnen einen realistischen Zeitrahmen.'],
    ],
  },
  'oelwechsel': {
    signsTitle: 'Wann ist ein Ölwechsel fällig?',
    signs: ['Laut Serviceheft nach Kilometern oder Zeit', 'Die Ölwarnleuchte oder Serviceanzeige meldet sich', 'Das Öl ist dunkel und dickflüssig', 'Der Motor läuft lauter als gewohnt', 'Vor langen Fahrten oder dem Winter'],
    faq: [
      ['Wie oft sollte ich das Öl wechseln?', 'Das steht im Serviceheft Ihres Herstellers. Üblich sind Intervalle von einem Jahr oder einer bestimmten Laufleistung, bei Kurzstrecken eher früher.'],
      ['Welches Öl brauche ich für mein US-Fahrzeug?', 'Maßgeblich sind die Herstellerfreigabe und die Viskosität für Ihren Motor. Wir verwenden das passende Öl nach Vorgabe.'],
      ['Wechseln Sie auch den Ölfilter?', 'Ja, zum Ölwechsel gehört in der Regel auch ein neuer Ölfilter.'],
    ],
  },
  'zahnriemen-steuerkette': {
    signsTitle: 'Wann ist Handeln nötig?',
    signs: ['Wechselintervall laut Hersteller ist erreicht', 'Rasselnde Geräusche beim Kaltstart (Kette)', 'Der Motor läuft unrund oder springt schlecht an', 'Sichtbare Risse am Zahnriemen', 'Vor dem Kauf eines Gebrauchtwagens ohne Nachweis'],
    faq: [
      ['Warum ist der Zahnriemenwechsel so wichtig?', 'Reißt der Zahnriemen, kann bei vielen Motoren ein Totalschaden entstehen. Deshalb sollte das Herstellerintervall eingehalten werden.'],
      ['Hält eine Steuerkette ein Leben lang?', 'Nicht immer. Auch Ketten, Spanner und Führungen verschleißen und zeigen das oft durch Geräusche an.'],
      ['Sollte die Wasserpumpe gleich mitgewechselt werden?', 'Oft ja, weil der Aufwand ohnehin anfällt. Wir beraten Sie, was bei Ihrem Fahrzeug sinnvoll ist.'],
    ],
  },
  'kupplungswechsel': {
    signsTitle: 'Anzeichen für eine verschlissene Kupplung',
    signs: ['Die Kupplung rutscht beim Beschleunigen', 'Das Pedal fühlt sich schwammig oder hart an', 'Schwierigkeiten beim Einlegen der Gänge', 'Ein Brandgeruch nach dem Anfahren', 'Ruckeln beim Anfahren'],
    faq: [
      ['Wie lange hält eine Kupplung?', 'Das hängt von Fahrstil, Fahrzeug und Einsatz ab. Häufiges Anfahren am Berg oder mit Anhänger verkürzt die Lebensdauer.'],
      ['Wird die Kupplung komplett getauscht?', 'In der Regel wird der Kupplungssatz mit Druckplatte, Scheibe und Ausrücklager gemeinsam erneuert.'],
      ['Wie lange dauert ein Kupplungswechsel?', 'Je nach Fahrzeug meist ein bis zwei Werkstatttage. Genaues sagen wir Ihnen nach der Prüfung.'],
    ],
  },
  'fluessigkeiten-zuendkerzen-batterie': {
    signsTitle: 'Wann zum Check?',
    signs: ['Der Motor springt schlecht an', 'Die Batterie ist älter als fünf Jahre', 'Der Motor ruckelt oder verbraucht mehr', 'Bremsflüssigkeit oder Kühlmittel sind lange nicht gewechselt', 'Vor dem Winter'],
    faq: [
      ['Wie lange hält eine Autobatterie?', 'Im Schnitt vier bis sechs Jahre. Kurzstrecken und Kälte verkürzen die Lebensdauer.'],
      ['Wann sollten Zündkerzen gewechselt werden?', 'Nach Herstellerangabe, oft nach mehreren zehntausend Kilometern. Alte Kerzen führen zu Startproblemen und höherem Verbrauch.'],
      ['Prüfen Sie die Batterie kostenlos?', 'Eine Batterieprüfung ist schnell erledigt. Sprechen Sie uns auf Konditionen an.'],
    ],
  },
  'auspuff-katalysator': {
    signsTitle: 'Warnzeichen am Auspuff',
    signs: ['Lautes oder dröhnendes Auspuffgeräusch', 'Abgasgeruch im Innenraum', 'Sichtbarer Rost oder Löcher', 'Leistungsverlust oder Motorkontrollleuchte', 'Klappern von lockeren Teilen'],
    faq: [
      ['Darf ich eine Sport-Auspuffanlage montieren?', 'Ja, wenn sie zulässig ist und eingetragen wird. Wir beraten Sie zu Sound und Zulassung.'],
      ['Wann ist der Katalysator defekt?', 'Typisch sind Leistungsverlust, Motorkontrollleuchte und erhöhte Abgaswerte bei der AU.'],
      ['Können Sie Auspuffanlagen für US-Fahrzeuge einbauen?', 'Ja, auch Auspuffanlagen und Sound-Umbauten für US-Fahrzeuge gehören zu unserem Angebot.'],
    ],
  },
  'stossdaempfer-fahrwerk': {
    signsTitle: 'Anzeichen für defekte Stoßdämpfer',
    signs: ['Das Fahrzeug wippt nach Bodenwellen nach', 'Verlängerter Bremsweg', 'Klappern oder Poltern aus dem Fahrwerk', 'Ungleichmäßiger Reifenverschleiß', 'Ölspuren am Dämpfer'],
    faq: [
      ['Wann sollten Stoßdämpfer gewechselt werden?', 'Etwa nach 80.000 bis 100.000 Kilometern oder bei den typischen Anzeichen. Eine Prüfung gibt Klarheit.'],
      ['Werden Dämpfer paarweise getauscht?', 'Ja, achsweise, damit das Fahrverhalten ausgewogen bleibt.'],
      ['Bieten Sie auch Fahrwerksumbauten an?', 'Ja, mit Höher- oder Tieferlegung, auch eingetragen.'],
    ],
  },
  'achsvermessung': {
    signsTitle: 'Wann sollten Sie die Achsen vermessen lassen?',
    signs: ['Das Lenkrad steht schief bei Geradeausfahrt', 'Das Fahrzeug zieht zur Seite', 'Reifen nutzen sich einseitig ab', 'Nach einem Bordsteinkontakt oder Unfall', 'Nach dem Tausch von Fahrwerksteilen'],
    faq: [
      ['Warum ist die Achsvermessung wichtig?', 'Falsche Spur und Sturz belasten Reifen und Fahrwerk und beeinträchtigen die Sicherheit.'],
      ['Wie lange dauert eine Achsvermessung?', 'In der Regel nicht lange. Zusammen mit Einstellarbeiten sollten Sie etwas mehr Zeit einplanen.'],
      ['Vermessen Sie auch höhergelegte Fahrzeuge?', 'Ja, nach Fahrwerksumbauten ist eine Vermessung besonders wichtig.'],
    ],
  },
  'autoelektrik': {
    signsTitle: 'Typische Elektrikprobleme',
    signs: ['Die Batterie ist immer wieder leer', 'Licht, Fensterheber oder Zentralverriegelung fallen aus', 'Sicherungen brennen wiederholt durch', 'Kontrollleuchten flackern', 'Nach Nachrüstung von Zusatzgeräten'],
    faq: [
      ['Können Sie Zusatzscheinwerfer oder Lightbars einbauen?', 'Ja, wir verkabeln Scheinwerfer, Arbeitsleuchten und Lightbars fachgerecht.'],
      ['Warum entlädt sich meine Batterie?', 'Häufig verursachen Ruhestromverbraucher oder eine schwache Lichtmaschine das Problem. Wir messen und finden die Ursache.'],
      ['Reparieren Sie auch Elektronik bei US-Fahrzeugen?', 'Ja, wir kennen amerikanische Fahrzeugelektronik und lesen die Steuergeräte aus.'],
    ],
  },
  'motoreninstandsetzung': {
    signsTitle: 'Wann kommt eine Instandsetzung infrage?',
    signs: ['Hoher Ölverbrauch oder blauer Rauch', 'Kompressionsverlust oder Leistungsabfall', 'Klopfgeräusche aus dem Motor', 'Kühlmittelverlust, Überhitzung', 'Nach einem Motorschaden'],
    faq: [
      ['Lohnt sich eine Motorinstandsetzung?', 'Das hängt von Fahrzeugwert und Schaden ab. Wir beraten Sie ehrlich, was wirtschaftlich sinnvoll ist.'],
      ['Wie lange dauert eine Instandsetzung?', 'Je nach Umfang und Teileverfügbarkeit. Nach der Diagnose nennen wir einen Zeitrahmen.'],
      ['Setzen Sie auch große V8-Motoren instand?', 'Wir kennen amerikanische Technik. Sprechen Sie uns zu Ihrem Motor an.'],
    ],
  },
  'reifenservice': {
    signsTitle: 'Wann ist ein Reifencheck nötig?',
    signs: ['Profiltiefe nähert sich der Mindestgrenze', 'Risse oder Beulen an der Flanke', 'Vibrationen im Lenkrad', 'Zum Saisonwechsel', 'Nach Reifenschäden oder Bordsteinkontakt'],
    faq: [
      ['Wann sollte ich Reifen wechseln?', 'Gesetzlich gelten mindestens 1,6 mm Profil, empfohlen werden für Winterreifen etwa vier Millimeter.'],
      ['Wann ist die Winterreifenzeit?', 'Als Faustregel von Oktober bis Ostern. Maßgeblich sind die Witterungsbedingungen.'],
      ['Montieren Sie auch große US-Felgen?', 'Ja, auch Reifen und Felgen für US-Fahrzeuge, bis hin zu großen Dimensionen.'],
    ],
  },
  'reifeneinlagerung': {
    signsTitle: 'Warum Reifen einlagern lassen?',
    signs: ['Kein Platz zu Hause für Reifen und Felgen', 'Sachgerechte Lagerung schont das Gummi', 'Komplettservice beim Saisonwechsel', 'Reifen müssen nicht transportiert werden', 'Überblick über Profil und Zustand'],
    faq: [
      ['Wie werden Reifen richtig gelagert?', 'Kühl, trocken und dunkel, möglichst stehend oder hängend und vor Öl und Sonne geschützt.'],
      ['Lagern Sie auch große US-Räder ein?', 'Sprechen Sie uns zu Ihren Rädern an, wir nennen Ihnen die Möglichkeiten.'],
      ['Wie läuft der Saisonwechsel ab?', 'Sie vereinbaren einen Termin, wir wechseln die Räder und lagern den anderen Satz wieder ein.'],
    ],
  },
  'reifen-und-felgen': {
    signsTitle: 'Darauf kommt es beim Reifenkauf an',
    signs: ['Passende Größe laut Fahrzeugschein', 'Tragfähigkeit und Geschwindigkeitsindex', 'Ausführung für Sommer, Winter oder Ganzjahr', 'Alter der Reifen (DOT-Nummer)', 'Eintragungspflicht bei Sonderfelgen'],
    faq: [
      ['Muss ich Sonderfelgen eintragen lassen?', 'Sonderfelgen brauchen eine Zulassung, entweder per ABE oder Eintragung. Das klären wir mit dem Prüfstützpunkt.'],
      ['Führen Sie auch Reifen für Pickups und SUV?', 'Ja, auch Reifen für US-Fahrzeuge in großen Dimensionen.'],
      ['Montieren Sie die Reifen auch?', 'Ja, Montage, Wuchten und Einlagerung gehören zum Reifenservice.'],
    ],
  },
  'rdks-reifendruckkontrolle': {
    signsTitle: 'Wann zum RDKS-Check?',
    signs: ['Die Reifendruck-Warnleuchte leuchtet', 'Beim Reifenwechsel, damit Sensoren korrekt angelernt sind', 'Batterie der Sensoren ist leer', 'Nach Felgenwechsel', 'Vor der Hauptuntersuchung'],
    faq: [
      ['Was ist das RDKS?', 'Das Reifendruckkontrollsystem warnt, wenn der Reifendruck zu niedrig ist. Seit 2014 ist es für Neufahrzeuge Pflicht.'],
      ['Warum leuchtet die RDKS-Warnleuchte?', 'Ursachen sind zu niedriger Druck, Temperaturwechsel oder defekte Sensoren.'],
      ['Müssen Sensoren beim Radwechsel angelernt werden?', 'Je nach System ja. Wir lernen die Sensoren fachgerecht an.'],
    ],
  },
  'fahrwerksumbau-hoeherlegung': {
    signsTitle: 'Was Sie vorab wissen sollten',
    signs: ['Höherlegung verändert Fahrverhalten und Lichteinstellung', 'Reifen- und Felgengrößen müssen passen', 'Eintragung beim Prüfstützpunkt ist meist nötig', 'Achsvermessung nach dem Umbau', 'Seriöse Teile mit Gutachten'],
    faq: [
      ['Muss eine Höherlegung eingetragen werden?', 'In der Regel ja. Wir übernehmen die Abstimmung mit dem Prüfstützpunkt.'],
      ['Wie viel Höherlegung ist möglich?', 'Das hängt vom Fahrzeug und den verfügbaren Kits ab. Wir beraten Sie zum Modell.'],
      ['Verändert sich das Fahrverhalten?', 'Ja, deshalb sind passendes Fahrwerk und Vermessung wichtig.'],
    ],
  },
  'ersatzteile-zubehoer-us': {
    signsTitle: 'Was wir für Sie beschaffen',
    signs: ['Verschleißteile für US-Modelle', 'Karosserieteile und Anbauteile', 'Zubehör wie Tonneau Covers oder Trittbretter', 'Original- und Nachrüstteile', 'Teile für ältere und neuere Fahrzeuge'],
    faq: [
      ['Besorgen Sie auch seltene Teile?', 'Wir beschaffen Ersatzteile und Zubehör für US-Fahrzeuge und sagen Ihnen, was verfügbar ist.'],
      ['Wie lange dauert die Lieferung?', 'Das hängt vom Teil ab. Nach Ihrer Anfrage nennen wir die Lieferzeit.'],
      ['Bauen Sie die Teile auch ein?', 'Ja, unsere Meisterwerkstatt übernimmt den Einbau.'],
    ],
  },
  'autoglas-steinschlag': {
    signsTitle: 'Wann handeln?',
    signs: ['Steinschlag im Sichtfeld des Fahrers', 'Riss, der sich vergrößert', 'Scheibe beschlägt oder beschädigte Dichtung', 'Vor der HU', 'Nach Einbruch oder Vandalismus'],
    faq: [
      ['Rechnen Sie direkt mit der Versicherung ab?', 'Ja, wir rechnen direkt mit Versicherungen ab und übernehmen die gesamte Abwicklung für Sie.'],
      ['Können Sie Frontscheiben für US-Fahrzeuge besorgen?', 'Ja, wir besorgen und tauschen Frontscheiben für nahezu alle US-Fahrzeuge.'],
      ['Reparieren oder tauschen?', 'Kleine Steinschläge außerhalb des Sichtfeldes lassen sich oft reparieren, größere Schäden erfordern einen Tausch.'],
    ],
  },
  'unfallgutachten': {
    signsTitle: 'Wann ist ein Gutachten sinnvoll?',
    signs: ['Größerer Schaden am Fahrzeug', 'Unklare Schadenshöhe', 'Verdacht auf verdeckte Schäden', 'Wertminderung nach dem Unfall', 'Streit mit der Versicherung'],
    faq: [
      ['Wer zahlt das Gutachten?', 'Bei unverschuldeten Unfällen in der Regel die gegnerische Versicherung. Das klären wir im Einzelfall.'],
      ['Wie läuft die Begutachtung ab?', 'Ein Sachverständiger begutachtet das Fahrzeug und dokumentiert Schäden und Kosten.'],
      ['Helfen Sie bei der Abwicklung?', 'Ja, wir unterstützen Sie bei der Schadensabwicklung.'],
    ],
  },
  'fahrzeugaufbereitung': {
    signsTitle: 'Wann lohnt sich eine Aufbereitung?',
    signs: ['Vor dem Verkauf des Fahrzeugs', 'Lack wirkt matt oder verkratzt', 'Innenraum ist verschmutzt oder riecht', 'Nach dem Winter', 'Zur Werterhaltung'],
    faq: [
      ['Was gehört zur Aufbereitung?', 'Typisch sind Innenreinigung, Lackpflege und Politur. Den Umfang stimmen wir mit Ihnen ab.'],
      ['Steigert Aufbereitung den Wiederverkaufswert?', 'Ein gepflegtes Fahrzeug lässt sich meist besser verkaufen.'],
      ['Bereiten Sie auch US-Fahrzeuge auf?', 'Ja, Fahrzeuge aller Marken.'],
    ],
  },
  'ersatzwagen': {
    signsTitle: 'Wann brauchen Sie einen Ersatzwagen?',
    signs: ['Reparatur dauert länger', 'Unfallinstandsetzung', 'Umbauten', 'Wartung bei knappem Zeitplan', 'Urlaub oder Dienstreise'],
    faq: [
      ['Bekomme ich einen Ersatzwagen?', 'Ja, nach Verfügbarkeit und gegen eine Gebühr. Sprechen Sie uns bei der Terminvereinbarung darauf an.'],
      ['Gibt es einen Hol- und Bringservice?', 'Nein, einen Hol- und Bringservice bieten wir nicht an.'],
      ['Wer zahlt den Ersatzwagen bei einem Unfall?', 'Bei unverschuldetem Unfall übernimmt in der Regel die gegnerische Versicherung die Kosten. Das klären wir im Einzelfall.'],
      ['Wie reserviere ich?', book],
    ],
  },
  'saison-checks': {
    signsTitle: 'Wann welcher Check?',
    signs: ['Vor dem Winter: Batterie, Kühlmittel, Reifen, Licht', 'Vor dem Sommer: Klimaanlage und Bremsen', 'Vor dem Urlaub: Flüssigkeiten und Reifen', 'Nach längerer Standzeit', 'Vor der HU'],
    faq: [
      ['Was wird beim Winter-Check geprüft?', 'Typisch sind Batterie, Frostschutz, Reifen, Beleuchtung und Scheibenwischer.'],
      ['Wie lange dauert ein Check?', 'In der Regel nicht lange, ein Termin ist aber sinnvoll.'],
      ['Gilt das auch für US-Fahrzeuge?', 'Ja, für alle Marken.'],
    ],
  },
};

const cityFaq = (city: string): Extra => ({
  signsTitle: `Für Kunden aus ${city}`,
  signs: ['Termin für Werkstatt oder TÜV vorab telefonisch vereinbaren', 'Fahrzeugschein und, falls vorhanden, Serviceheft mitbringen', 'Für den Fahrzeugkauf: Besichtigung nach Vereinbarung, auch am Samstag', 'Finanzierung vorab am Rechner auf der Fahrzeugseite durchrechnen', 'Bei Importwünschen: Wunschfahrzeug und Budget nennen'],
  faq: [
    [`Kommen Kunden aus ${city} zu Ihnen?`, `Ja, zu uns kommen Kunden aus Hagen, ${city} und dem gesamten Umland. Wir sind in Hagen-Hohenlimburg zu finden.`],
    ['Kann ich einen Besichtigungstermin vereinbaren?', 'Ja, rufen Sie uns an oder schreiben Sie uns per WhatsApp. Samstags nach Vereinbarung.'],
    ['Erledigen Sie Import und Zulassung für mich?', 'Ja. Von Prüfung und Transport bis Zoll, Umrüstung und TÜV-Vollabnahme übernehmen wir den Ablauf.'],
  ],
});
extras['us-cars-iserlohn'] = cityFaq('Iserlohn');
extras['us-cars-dortmund'] = cityFaq('Dortmund');
extras['us-cars-wuppertal'] = cityFaq('Wuppertal');
extras['us-cars-witten'] = cityFaq('Witten');
extras['us-cars-sauerland'] = cityFaq('dem Sauerland');
