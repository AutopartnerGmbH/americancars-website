import type { Block } from './pages';

// Erweiterte Texte: werden hinter die bestehenden Abschnitte der jeweiligen Seite gehängt.
// Nur bekannte Fakten und allgemeines Fachwissen, keine Preise, keine Terminzusagen.
const city = (name: string, intro: string, extra: string): Block[] => [
  { h: `Warum Kunden aus ${name} zu uns kommen`, p: [intro] },
  { h: 'So planen Sie den Besuch', p: ['Wir empfehlen, vorher einen Termin zu vereinbaren, damit sich die Fahrt lohnt und das gewünschte Fahrzeug bereitsteht. Probefahrten sind nach Terminvereinbarung möglich. Wir sind Montag bis Donnerstag von 08:00 bis 17:00 Uhr, freitags von 08:00 bis 15:30 Uhr und samstags nach Vereinbarung für Sie da.', extra] },
];

export const longtext: Record<string, Block[]> = {
  'werkstatt-service': [
    { h: 'Alle Marken, ein Ansprechpartner', p: ['In unserer Werkstatt sehen wir viele amerikanische Fahrzeuge, vor allem Dodge, RAM, Ford, Chevrolet und Chrysler. Genauso kommen Audi, BMW, VW, Mercedes und Porsche zu uns. Sie müssen sich also nicht entscheiden, ob Sie für Ihr Auto die „richtige“ Werkstatt finden: Wir arbeiten an allen Marken.'] },
    { h: 'Was wir besonders gut können', ul: ['Diagnose und Elektrik', 'Getriebespülungen für alle Marken', 'Achsvermessung', 'Umbauten und Beleuchtung', 'Individuelle Umbauten wie Baustellenbeleuchtung, Signalleuchten oder Offroad-Umbau', 'Höherlegung, Spurverbreiterung und Kotflügelverbreiterung', 'Bereifung für Pkw, SUV und Pickups'] },
    { h: 'So kommen Sie zu Ihrem Termin', p: ['Rufen Sie uns an, schreiben Sie uns oder nutzen Sie das Formular auf der Startseite. Sagen Sie uns, worum es geht, am besten mit Marke, Modell und Baujahr. Dann können wir den Termin passend einplanen und, wenn nötig, Teile vorab bestellen.'] },
  ],
  'hu-au-hagen': [
    { h: 'So läuft Ihr Termin ab', p: ['Sie vereinbaren einen Termin und bringen Ihr Fahrzeug zu uns. Wenn keine Mängel vorliegen, dauert die Prüfung normalerweise keine 60 Minuten.', 'Werden Mängel festgestellt, besprechen wir mit Ihnen, was zu tun ist. Viele Mängel können wir in unserer eigenen Werkstatt beheben, anschließend erfolgt die Nachprüfung.'] },
    { h: 'Für jedes Fahrzeug', p: ['Ob Kleinwagen, Kombi, SUV oder US-Pickup: Wir prüfen Fahrzeuge aller Hersteller. Auch Umbauten, etwa an Fahrwerk, Rädern oder Beleuchtung, prüfen wir, sofern die zugehörigen Papiere vorliegen.'] },
  ],
  'us-fahrzeug-tunen': [
    { h: 'So läuft ein Umbau bei uns ab', p: ['Am Anfang steht das Gespräch: Sie schildern Ihre Idee, wir sehen uns das Fahrzeug an und sagen Ihnen ehrlich, was technisch und rechtlich machbar ist. Danach besprechen wir Teile und Ablauf, bevor wir mit der Arbeit beginnen.', 'Gerade bei amerikanischen Fahrzeugen lohnt sich die Planung: Viele Teile müssen beschafft werden, und nicht jede Kombination ist in Deutschland zulassungsfähig.'] },
    { h: 'Zulassung und Eintragung', p: ['Umbauten an Fahrwerk, Rädern, Verbreiterungen oder Beleuchtung können die Betriebserlaubnis berühren. Deshalb klären wir vorab, welche Teile ein Gutachten oder eine Eintragung brauchen. Die Abnahme erfolgt über unseren Prüfstützpunkt des TÜV NORD.'] },
    { h: 'Qualität im Detail', p: ['Saubere Kabelwege, passende Stecker und sorgfältig montierte Teile sind uns wichtiger als ein schneller Einbau. Ein Umbau soll nicht nur gut aussehen, sondern auch im Alltag zuverlässig funktionieren.'] },
  ],
  'unfall-instandsetzung': [
    { h: 'Schritt für Schritt nach dem Unfall', p: ['Nach einem Unfall ist vieles gleichzeitig zu klären. Wir nehmen Ihnen so viel wie möglich ab: Wir sehen uns den Schaden an, dokumentieren ihn und stimmen uns mit Gutachter und Versicherung ab. So wissen Sie jederzeit, wo Ihr Fahrzeug steht und wie es weitergeht.'] },
    { h: 'Mehr als nur Optik', p: ['Bei der Instandsetzung geht es nicht allein um Karosserie und Lack. Wichtig ist, dass Sicherheitsbauteile, Fahrwerk und Elektrik nach dem Schaden wieder einwandfrei arbeiten. Wir prüfen deshalb auch Bereiche, die man von außen nicht sieht.'] },
    { h: 'Glasbruchschäden: Scheiben reparieren und tauschen', p: ['Auch Glasbruchschäden setzen wir instand, zum Beispiel nach einem Unfall oder bei einem Steinschlag. Wir tauschen Frontscheiben, Heckscheiben und Seitenscheiben, vor allem auch bei US-Fahrzeugen.', 'Frontscheiben besorgen wir für nahezu alle US-Fahrzeuge und bauen sie fachgerecht in unserer Meisterwerkstatt ein. Das gilt für Pickups, SUV und Limousinen amerikanischer Hersteller. Bei Fahrzeugen mit Kamera- oder Sensorsystemen im Bereich der Scheibe berücksichtigen wir das beim Einbau.', 'Die Abrechnung läuft direkt mit Ihrer Versicherung, und wir übernehmen die komplette Abwicklung. Ob und in welcher Höhe eine Selbstbeteiligung anfällt, hängt von Ihrem Versicherungsvertrag ab. Das klären wir vorab mit Ihnen.'], links: [['Mehr zu Autoglas und Steinschlag', '/autoglas-steinschlag']] },
    { h: 'Ihre Werkstatt, Ihre Wahl', p: ['Nach einem unverschuldeten Unfall können Sie in der Regel selbst entscheiden, in welcher Werkstatt repariert wird. Sie müssen nicht die Werkstatt nehmen, die eine Versicherung vorschlägt. Rufen Sie uns an, wir sagen Ihnen, was Sie jetzt beachten sollten.'] },
  ],
  'klimaservice': [
    { h: 'Warum die Klimaanlage Pflege braucht', p: ['Auch wenn die Anlage noch kühlt, geht über die Jahre etwas Kältemittel verloren. Das Kältemittel transportiert zugleich das Öl, das den Kompressor schmiert. Fehlt davon zu viel, wird der Kompressor belastet. Ein Defekt an dieser Stelle gehört zu den aufwendigeren Reparaturen.'] },
    { h: 'Nicht nur im Sommer sinnvoll', p: ['Die Klimaanlage entfeuchtet die Luft und hilft, beschlagene Scheiben schneller klar zu bekommen. Deshalb lohnt sich der Check nicht nur im Frühjahr, sondern das ganze Jahr.'] },
    { h: 'Welches Kältemittel braucht mein Fahrzeug?', p: ['Ältere Fahrzeuge arbeiten meist mit R134a, neuere mit R1234yf. Welches Kältemittel Ihr Fahrzeug braucht, steht in der Regel auf einem Aufkleber im Motorraum. Wir bedienen beide.'] },
    { h: 'Desinfektion der Klimaanlage', p: ['Riecht es muffig aus den Lüftungsdüsen, bieten wir auch eine Desinfektion der Klimaanlage an. Feuchtigkeit im Verdampfer fördert Bakterien und Schimmel, mit der Desinfektion und einem neuen Innenraumfilter verschwindet der Geruch meist.'] },
  ],
  'motordiagnose': [
    { h: 'Was der Fehlerspeicher sagt, und was nicht', p: ['Ein gespeicherter Fehlercode nennt den Bereich, in dem ein Wert nicht stimmt. Er ist noch keine fertige Diagnose. Deshalb prüfen wir anschließend Sensoren, Leitungen und Bauteile und vergleichen mit den Schaltplänen, bevor wir Teile tauschen.'] },
    { h: 'Erst prüfen, dann besprechen', p: ['Sie erfahren, was wir gefunden haben, und entscheiden mit uns, was repariert wird. So vermeiden Sie unnötige Teiletausche.'] },
    { h: 'Das hilft uns beim Termin', ul: ['Seit wann tritt das Problem auf?', 'Nur beim Kaltstart oder auch bei warmem Motor?', 'Bei bestimmter Drehzahl oder unter Last?', 'Welche Warnleuchte brennt, und leuchtet sie dauerhaft oder blinkt sie?'] },
  ],
  'bremsen-service': [
    { h: 'Warum Sie bei der Bremse nicht warten sollten', p: ['Die Bremse ist eines der wichtigsten Sicherheitsbauteile. Verschleiß entsteht langsam und wird oft erst bemerkt, wenn die Beläge weit abgefahren sind. Dann können auch die Bremsscheiben Schaden nehmen, und die Reparatur wird aufwendiger.'] },
    { h: 'Bremsflüssigkeit wird oft vergessen', p: ['Bremsflüssigkeit nimmt mit der Zeit Wasser auf. Dadurch sinkt ihr Siedepunkt, und die Bremsleistung kann bei starker Beanspruchung nachlassen. Darum sollte sie regelmäßig nach Herstellervorgabe erneuert werden.'] },
    { h: 'Nach dem Bremsenwechsel', p: ['Nach der Reparatur prüfen wir die Funktion der Bremse. Bei neuen Belägen und Scheiben empfehlen wir, die ersten Fahrten mit Gefühl zu bremsen, bis sich alles eingeschliffen hat.'] },
  ],
  'getriebe-motor-reparatur': [
    { h: 'Warum zuerst der Befund kommt', p: ['Bei Getriebe und Motor sehen Fehlerbilder oft ähnlich aus. Ruckeln kann am Getriebe liegen, an der Elektronik oder am Motor. Deshalb legen wir uns nicht vorschnell fest, sondern lesen den Fehlerspeicher aus, prüfen das Fahrzeug und erklären Ihnen dann, was wir gefunden haben.'] },
    { h: 'Getriebespülung für alle Marken', p: ['Wir bieten Getriebespülungen für alle Marken an. Dabei wird das alte Getriebeöl durch frisches Öl ersetzt. Ob und wann das bei Ihrem Fahrzeug sinnvoll ist, hängt vom Getriebe und von der Laufleistung ab. Wir beraten Sie dazu.'] },
    { h: 'Regelmäßige Wartung schützt', p: ['Frisches Öl und passende Flüssigkeiten halten Getriebe und Motor lange leistungsfähig. Amerikanische Motoren gelten als robust, vorausgesetzt, die Service- und Ölwechselintervalle werden eingehalten.'], links: [['Zum Ölservice', '/oelwechsel']] },
    { h: 'Das hilft uns bei der Anfrage', ul: ['Marke, Modell und Baujahr', 'Wann und in welcher Situation tritt das Problem auf?', 'Gab es zuletzt Arbeiten am Fahrzeug?'] },
  ],
  'oelwechsel': [
    { h: 'Warum frisches Öl so wichtig ist', p: ['Motoröl schmiert, kühlt und transportiert Schmutz zum Ölfilter. Mit der Zeit altert es und verliert diese Eigenschaften. Alter Ölschlamm und Abrieb belasten dann den Motor.'] },
    { h: 'Intervalle einhalten', p: ['Das Wartungsintervall steht im Serviceheft oder wird im Bordcomputer angezeigt. Wer viel Kurzstrecke fährt oder regelmäßig einen Anhänger zieht, sollte eher früher wechseln. Amerikanische Motoren sind grundsätzlich pflegeleicht und beständig, wenn die Intervalle eingehalten werden.'] },
    { h: 'Gleich mit erledigen', p: ['Auf Wunsch verbinden wir den Ölwechsel mit einer Inspektion. So fallen mögliche Mängel früh auf, bevor sie teuer werden.'] },
  ],
  'zahnriemen-steuerkette': [
    { h: 'Zahnriemen oder Steuerkette: Was ist der Unterschied?', p: ['Der Zahnriemen besteht aus Gummi mit Verzahnung und wird nach Herstellervorgabe nach einer bestimmten Laufleistung oder Zeit erneuert. Die Steuerkette aus Metall ist auf eine lange Lebensdauer ausgelegt. Trotzdem können Spanner, Führungsschienen oder die Kette selbst verschleißen.'] },
    { h: 'Die Wasserpumpe gleich mitwechseln', p: ['Wenn der Zahnriemen ohnehin ausgebaut ist, wird die Wasserpumpe häufig gleich mit erneuert, sofern sie vom Zahnriemen angetrieben wird. So vermeiden Sie, dass dieselbe Arbeit später ein zweites Mal anfällt.'] },
  ],
  'kupplungswechsel': [
    { h: 'So funktioniert die Kupplung', p: ['Die Kupplung verbindet Motor und Getriebe. Beim Anfahren und Schalten reibt die Kupplungsscheibe an Schwungrad und Druckplatte und verschleißt dadurch. Stadtverkehr, Anhängerbetrieb und eine unruhige Fahrweise beschleunigen den Verschleiß.'] },
    { h: 'Schaltgetriebe und Automatik', p: ['Wir arbeiten an Fahrzeugen mit Schaltgetriebe und mit Automatikgetriebe.'] },
    { h: 'Warum wir den Kupplungssatz erneuern', p: ['Druckplatte, Scheibe und Ausrücklager arbeiten zusammen und sind aufeinander abgestimmt. Weil für den Wechsel das Getriebe ausgebaut werden muss, erneuern wir den Satz im Zusammenhang und prüfen dabei auch das Schwungrad.'] },
  ],
  'fluessigkeiten-zuendkerzen-batterie': [
    { h: 'Bremsflüssigkeit', p: ['Bremsflüssigkeit nimmt Wasser auf. Dadurch sinkt der Siedepunkt, und die Bremse kann bei starker Beanspruchung nachlassen. Wir erneuern sie nach Herstellervorgabe und entlüften das System.'], links: [['Mehr zu Bremsen', '/bremsen-service']] },
    { h: 'Kühlmittel', p: ['Das Kühlmittel schützt den Motor vor Überhitzung und Frost und den Kühlkreislauf vor Korrosion. Es altert mit der Zeit und sollte nach Herstellervorgabe erneuert werden.'] },
    { h: 'Zündkerzen', p: ['Bei Benzinern sorgen die Zündkerzen für die Zündung des Gemischs. Verschlissene Kerzen führen zu unruhigem Lauf, Startproblemen und höherem Verbrauch. Dieselfahrzeuge haben stattdessen Glühkerzen.'] },
    { h: 'Batterie', p: ['Kurzstrecken, Kälte und lange Standzeiten setzen der Batterie zu. Lassen Sie sie vor dem Winter prüfen, damit der Motor auch bei Frost zuverlässig startet.'] },
  ],
  'auspuff-katalysator': [
    { h: 'Mehr als nur Lärm', p: ['Die Abgasanlage leitet die Abgase ab, dämpft das Motorgeräusch und reinigt die Abgase über den Katalysator. Undichte Stellen sind nicht nur laut, sondern können Abgase in Fahrzeugnähe austreten lassen.'] },
    { h: 'Lambdasonde und Katalysator', p: ['Die Lambdasonde misst den Sauerstoffgehalt im Abgas und hilft dem Motor, das Gemisch richtig einzustellen. Eine defekte Sonde kann den Verbrauch erhöhen und den Katalysator schädigen. Deshalb prüfen wir beides zusammen.'] },
    { h: 'AU direkt bei uns', p: ['Die Abgasuntersuchung machen wir direkt bei uns. Wenn die Abgaswerte nicht stimmen, suchen wir in der Werkstatt die Ursache und beheben sie.'], links: [['Zur HU und AU', '/hu-au-hagen']] },
    { h: 'Mehr Sound gewünscht?', p: ['Auspuffanlagen und Sound-Umbauten für US-Fahrzeuge gehören zu unserem Angebot. Wir beraten Sie zu Sound und Zulassung.'], links: [['Zu Umbau und Tuning', '/us-fahrzeug-tunen']] },
  ],
  'stossdaempfer-fahrwerk': [
    { h: 'Was der Stoßdämpfer wirklich tut', p: ['Stoßdämpfer sorgen nicht nur für Komfort. Sie halten die Räder auf der Straße. Verschlissene Stoßdämpfer verlängern den Bremsweg und machen das Fahrzeug in Kurven und bei Ausweichmanövern instabiler.'] },
    { h: 'Warum achsweise tauschen?', p: ['Wir erneuern verschlissene Teile achsweise, damit beide Seiten gleich arbeiten. Ein einseitiger Tausch kann das Fahrverhalten ungleichmäßig machen.'] },
    { h: 'Danach zur Achsvermessung', p: ['Nach Arbeiten am Fahrwerk sollten Spur und Sturz kontrolliert werden, damit die Reifen gleichmäßig abnutzen und das Fahrzeug sauber geradeaus läuft.'], links: [['Zur Achsvermessung', '/achsvermessung']] },
    { h: 'Fahrwerksumbau', p: ['Wir bieten auch Fahrwerksumbauten mit Höher- oder Tieferlegung an, auch eingetragen.'], links: [['Zum Fahrwerksumbau', '/fahrwerksumbau-hoeherlegung']] },
  ],
  'achsvermessung': [
    { h: 'Was Spur, Sturz und Nachlauf bedeuten', p: ['Die Spur beschreibt die Stellung der Räder zueinander, von oben gesehen. Der Sturz ist die Neigung der Räder, von vorn gesehen. Der Nachlauf beeinflusst den Geradeauslauf und die Lenkrückstellung. Stimmen diese Werte nicht, leiden Fahrverhalten und Reifen.'] },
    { h: 'Schief eingestellt kostet Reifen', p: ['Eine falsche Spur nutzt die Reifen ungleichmäßig ab. Mit der Achsvermessung beugen Sie vorzeitigem Verschleiß vor und merken, ob am Fahrwerk etwas nicht stimmt.'] },
    { h: 'Nach Umbauten', p: ['Auch nach einer Höher- oder Tieferlegung gehört die Achsvermessung dazu, weil sich die Achswinkel verändern.'], links: [['Zum Fahrwerksumbau', '/fahrwerksumbau-hoeherlegung']] },
  ],
  'autoelektrik': [
    { h: 'Fehlersuche statt Teile tauschen', p: ['Elektrikfehler lassen sich nur mit System finden. Wir lesen den Fehlerspeicher aus, grenzen den Fehler anhand der Schaltpläne ein und prüfen Leitungen, Stecker und Bauteile. So tauschen wir nur das, was wirklich defekt ist.'] },
    { h: 'Wenn die Batterie über Nacht leer wird', p: ['Dann fließt oft ein Verbraucher dauerhaft Strom, obwohl das Fahrzeug steht. Mit der Messung des Ruhestroms spüren wir ihn auf.'] },
    { h: 'Nachrüstungen sauber ausführen', p: ['Zusatzscheinwerfer, Lightbars oder Arbeitsleuchten müssen fachgerecht verkabelt und abgesichert werden. Unsaubere Lösungen sind eine häufige Fehlerquelle.'], links: [['Zu Umbau und Tuning', '/us-fahrzeug-tunen']] },
  ],
  'motoreninstandsetzung': [
    { h: 'Wann lohnt sich eine Instandsetzung?', p: ['Ob eine Teilinstandsetzung, eine Überholung oder ein Austausch sinnvoll ist, hängt vom Schaden, vom Motortyp und vom Fahrzeug ab. Wir erklären Ihnen die Möglichkeiten, bevor etwas gemacht wird.'] },
    { h: 'Früh handeln', p: ['Je früher ein Motorproblem erkannt wird, desto eher reicht oft eine kleinere Reparatur. Ungewöhnliche Geräusche, Ölverbrauch oder Leistungsverlust sollten Sie deshalb nicht aufschieben.'] },
    { h: 'Vorbeugen mit Wartung', p: ['Regelmäßiger Ölwechsel und die Einhaltung der Intervalle sind der beste Schutz für den Motor.'], links: [['Zum Ölservice', '/oelwechsel']] },
  ],
  'reifenservice': [
    { h: 'Warum wuchten?', p: ['Eine Unwucht im Rad macht sich als Vibration im Lenkrad bemerkbar, vor allem bei höherer Geschwindigkeit. Beim Wuchten werden Gewichte am Rad so angebracht, dass es rund läuft. Das schont Reifen und Fahrwerk.'] },
    { h: 'Profil, Alter und Druck', p: ['Das gesetzliche Mindestprofil beträgt 1,6 Millimeter. Für sicheres Fahren, besonders bei Nässe und Winter, sollte das Profil deutlich darüber liegen. Reifen altern zudem auch ohne Fahrleistung. Das Herstellungsdatum steht in der DOT-Nummer auf der Reifenflanke. Der richtige Luftdruck spart Kraftstoff und erhöht die Sicherheit.'] },
  ],
  'reifeneinlagerung': [
    { h: 'Warum einlagern lassen?', p: ['Komplette Räder amerikanischer Pickups und SUV sind groß und schwer. Zu Hause braucht man dafür Platz und muss sie zweimal im Jahr transportieren. Bei uns müssen Sie sich um beides nicht kümmern.'] },
    { h: 'Richtig gelagert halten Reifen länger', p: ['Reifen sollten trocken und kühl liegen, geschützt vor direkter Sonne und Chemikalien. Wir prüfen den Zustand vor der Einlagerung, damit Sie wissen, ob die Räder noch eine Saison halten.'], links: [['Zum Reifenservice', '/reifenservice']] },
  ],
  'reifen-und-felgen': [
    { h: 'Die richtige Größe finden', p: ['Neben der Dimension zählen Tragfähigkeit (Load Index) und Geschwindigkeitsindex. Gerade bei SUV und Pickups ist die Tragfähigkeit wichtig. Wir beraten Sie, welche Reifen zu Ihrem Fahrzeug und Ihrer Nutzung passen.'] },
    { h: 'Eintragung nicht vergessen', p: ['Nicht jede Kombination aus Rad und Reifen ist ohne Weiteres zulässig. Wir klären vorab mit unserem Prüfstützpunkt des TÜV NORD, ob eine Eintragung nötig ist, damit Ihre Betriebserlaubnis nicht erlischt.'] },
    { h: 'Mehr zu Reifen', p: ['Montage, Wuchten und Einlagerung finden Sie auf diesen Seiten.'], links: [['Zum Reifenservice', '/reifenservice'], ['Zur Reifeneinlagerung', '/reifeneinlagerung']] },
  ],
  'import-umruestung': [
    { h: 'Zwei Wege zu Ihrem US-Fahrzeug', p: ['Sie haben zwei Möglichkeiten: Sie kaufen eines der Fahrzeuge, die wir selbst einkaufen, oder Sie lassen Ihr eigenes Wunschfahrzeug von uns importieren. Der Importprozess ist in beiden Fällen derselbe.'] },
    { h: 'Fahrzeuge, die wir selbst einkaufen', p: ['Diese Fahrzeuge kaufen wir in den USA und Kanada selbst und lassen sie vor dem Kauf nach unseren Standards von unseren Partnern vor Ort prüfen. Viele davon verkaufen wir direkt vom Schiff, weil uns Historie, Fotos und Daten der Fahrzeuge schon vorliegen.'] },
    { h: 'Ihr eigenes Wunschfahrzeug', p: ['Sie suchen und kaufen Ihr Traumauto in den USA selbst. Wir holen es beim Verkäufer ab und wickeln den gesamten restlichen Importprozess für Sie ab, von Transport und Verzollung bis zu Umrüstung und TÜV-Abnahme.', 'Der Unterschied zu unseren eigenen Fahrzeugen liegt vor dem Kauf: Wir lassen unsere Fahrzeuge durch unsere Partner in den USA prüfen. Wenn Sie selbst kaufen, haben Sie diese Kontrolle vor dem Kauf nicht.'] },
  ],
  'rdks-reifendruckkontrolle': [
    { h: 'Wofür das RDKS da ist', p: ['Das Reifendruckkontrollsystem warnt Sie bei Druckverlust. Es gibt direkt messende Systeme mit Sensoren im Rad und indirekte Systeme, die den Druck über die Raddrehzahl erkennen.'] },
    { h: 'Beim Radwechsel beachten', p: ['Die Batterie im Sensor ist nach einigen Jahren leer, dann muss der Sensor getauscht werden. Nach dem Radwechsel oder bei zwei Radsätzen müssen die Sensoren angelernt werden. Das übernehmen wir für Sie.'] },
    { h: 'Sensoren für US- und EU-Fahrzeuge', p: ['US-Sensoren senden oft auf 315 MHz, Sensoren für europäische Fahrzeuge meist auf 433 MHz. Beim Tausch oder bei einem zweiten Radsatz ist deshalb wichtig, dass der Sensor zum Fahrzeug passt. Wir prüfen das vorab und lernen den Sensor anschließend an.'] },
    { h: 'Sensoren nicht auf eigene Faust kaufen', p: ['Zu einem Reifensatz werden häufig die falschen Sensoren gekauft. Dann funktionieren sie nicht oder lassen sich nicht anlernen, und das Geld ist verloren. Fragen Sie uns deshalb vor dem Kauf. Wir sagen Ihnen, welcher Sensor zu Ihrem Fahrzeug passt.'] },
  ],
  'fahrwerksumbau-hoeherlegung': [
    { h: 'Das sollten Sie bei einer Höherlegung wissen', p: ['Eine Höherlegung verändert Achswinkel und Fahrverhalten. Deshalb gehört die Achsvermessung dazu. Bei größeren Reifen müssen zudem Freigang und Tragfähigkeit passen.'] },
    { h: 'Eintragung', p: ['Wir klären vorab mit dem TÜV, welche Teile mit Gutachten oder Teilegutachten verfügbar sind und was eingetragen werden muss. Die Abnahme erfolgt über unseren Prüfstützpunkt des TÜV NORD.'], links: [['Zu Umbau und Tuning', '/us-fahrzeug-tunen']] },
  ],
  'ersatzteile-zubehoer-us': [
    { h: 'Das richtige Teil finden', p: ['Bei amerikanischen Modellen unterscheiden sich Teile je nach Motor, Ausstattung und Baujahr. Mit Modell, Baujahr und Fahrgestellnummer lässt sich das passende Teil sicher bestimmen.'] },
    { h: 'Zubehör nachrüsten', p: ['Anhängerkupplung, Trittbretter oder Laderaumabdeckungen bauen wir in unserer Meisterwerkstatt ein und klären, ob dafür eine Eintragung nötig ist.'] },
  ],
  'autoglas-steinschlag': [
    { h: 'Kleine Schäden früh reparieren', p: ['Ein kleiner Steinschlag lässt sich oft noch reparieren. Durch Temperaturwechsel und Erschütterungen kann daraus ein Riss werden, dann ist meist ein Tausch der ganzen Scheibe nötig.'] },
    { h: 'Kameras und Sensoren', p: ['Bei vielen Fahrzeugen sitzen Kameras und Sensoren im Bereich der Frontscheibe. Nach einem Scheibentausch müssen diese Systeme je nach Fahrzeug neu eingestellt werden. Wir berücksichtigen das bei der Arbeit.'] },
  ],
  'unfallgutachten': [
    { h: 'Wozu ein Gutachten dient', p: ['Ein Gutachten hält fest, welche Schäden entstanden sind und welche Reparatur nötig ist. Es ist die Grundlage für die Abwicklung mit der Versicherung.'] },
    { h: 'Wer es bezahlt', p: ['Bei einem unverschuldeten Unfall übernimmt in der Regel die gegnerische Versicherung die Kosten des Gutachtens. Das klären wir im Einzelfall mit Ihnen.'] },
    { h: 'Reparatur und Abwicklung aus einer Hand', p: ['Wir vermitteln Ihnen einen Gutachter, begleiten die Abwicklung mit der Versicherung und reparieren Ihr Fahrzeug anschließend in unserer Werkstatt.'], links: [['Zur Unfall-Instandsetzung', '/unfall-instandsetzung']] },
  ],
  'fahrzeugaufbereitung': [
    { h: 'Mehr als Waschen', p: ['Bei der Aufbereitung kümmern wir uns um Lack, Felgen, Kunststoffteile und Innenraum, auf Wunsch auch um Leder. Dafür haben wir eine eigene Aufbereitungshalle.'] },
    { h: 'Was Politur kann', p: ['Eine Politur entfernt feine Kratzer und gibt dem Lack seinen Glanz zurück. Tiefe Kratzer und Steinschläge lassen sich damit nicht beseitigen. Wir sagen Ihnen vorab, was machbar ist.'] },
  ],
  'ersatzwagen': [
    { h: 'Rechtzeitig anfragen', p: ['Ersatzwagen sind nur begrenzt verfügbar. Fragen Sie deshalb schon bei der Terminvereinbarung danach, damit wir für Sie planen können.'] },
    { h: 'Nach einem Unfall', p: ['Bei einem unverschuldeten Unfall übernimmt in der Regel die gegnerische Versicherung die Kosten des Ersatzfahrzeugs. Das klären wir im Einzelfall.'] },
  ],
  'saison-checks': [
    { h: 'Wintercheck', p: ['Vor der kalten Jahreszeit prüfen wir Batterie, Beleuchtung, Frostschutz und Reifen. Das beugt Pannen bei Kälte vor.'] },
    { h: 'Sommer- und Urlaubscheck', p: ['Vor dem Sommer stehen Klimaanlage, Kühlmittel und Bremsen im Fokus. Vor einer langen Fahrt kontrollieren wir Reifen, Flüssigkeiten, Bremsen und Beleuchtung.'] },
  ],
  'us-cars-iserlohn': city('Iserlohn', 'Iserlohn liegt im Märkischen Kreis. Wer dort einen Händler sucht, der amerikanische Fahrzeuge wirklich kennt, ist bei uns richtig.', 'Fahrzeuge liefern wir auf Wunsch gegen Aufpreis, der Preis richtet sich nach der Entfernung.'),
  'us-cars-dortmund': city('Dortmund', 'Dortmund liegt im Ruhrgebiet. Wer dort ein geprüftes US-Fahrzeug mit Carfax-Bericht und eine eigene Meisterwerkstatt sucht, ist bei uns richtig.', 'Fahrzeuge liefern wir auf Wunsch gegen Aufpreis, der Preis richtet sich nach der Entfernung.'),
  'us-cars-wuppertal': city('Wuppertal', 'Wuppertal liegt im Bergischen Land. Wer dort ein US-Fahrzeug kaufen, warten oder umbauen lassen möchte, ist bei uns richtig.', 'Fahrzeuge liefern wir auf Wunsch gegen Aufpreis, der Preis richtet sich nach der Entfernung.'),
  'us-cars-witten': city('Witten', 'Witten liegt im Ennepe-Ruhr-Kreis. Wer dort eine Werkstatt für Wartung, HU und AU oder ein US-Fahrzeug sucht, ist bei uns richtig.', 'Fahrzeuge liefern wir auf Wunsch gegen Aufpreis, der Preis richtet sich nach der Entfernung.'),
  'us-cars-sauerland': city('dem Sauerland', 'Wer im Sauerland einen Pickup oder SUV kaufen, umbauen oder warten lassen möchte, ist bei uns richtig.', 'Fahrzeuge liefern wir auf Wunsch gegen Aufpreis, der Preis richtet sich nach der Entfernung.'),
};
