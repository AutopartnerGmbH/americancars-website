export const faqs: [string, string][] = [
  ['Kann ich ein Fahrzeug direkt aus den USA oder Kanada importieren lassen?', 'Ja. Wir kümmern uns um die Fahrzeugprüfung durch unsere Partner in den USA und Kanada, den Transport, die Verzollung, die Umrüstung und die Abnahme beim TÜV in Hagen. Danach kann das Fahrzeug nach deutschem Standard zugelassen werden.'],
  ['Bekomme ich zu Ihren Fahrzeugen einen Carfax-Bericht?', 'Ja. Zu unseren importierten Fahrzeugen aus den USA und Kanada erhalten Sie nach Ihrer Anfrage bei uns den Carfax-Bericht kostenlos. Alle importierten Fahrzeuge bei uns haben eine unfallfreie Carfax-Historie. Pauschale Abfragen für beliebige andere Fahrzeuge bieten wir nicht an.'],
  ['Kann ich ein Fahrzeug finanzieren oder leasen?', 'Ja, privat und gewerblich. Wir arbeiten mit verschiedenen Banken zusammen. Bei jedem Fahrzeug sehen Sie mit dem Rechner direkt eine unverbindliche Monatsrate. Verbindlich ist das Angebot der Bank.'],
  ['Gibt es eine Garantie?', 'Ja. Wir bieten eine Garantie über die Intec AG an. Sie kostet 595 € pro Jahr, kann bis zu 3 Jahren abgeschlossen werden und gilt auch für importierte Fahrzeuge. Sie wird beim Kauf gesondert vereinbart.'],
  ['Wie kann ich bezahlen?', 'Per Überweisung, mit EC-Karte oder bar. Kreditkarten wie Mastercard, Visa oder Amex nehmen wir nicht an.'],
  ['Nehmen Sie mein Fahrzeug in Zahlung?', 'Ja, nach vorheriger Prüfung des Fahrzeugs. Schicken Sie uns dazu einfach die Eckdaten und ein paar Fotos.'],
  ['Reparieren Sie auch Fahrzeuge anderer Marken?', 'Ja. Unsere Meisterwerkstatt wartet und repariert alle Marken, nicht nur amerikanische Fahrzeuge. Als Prüfstützpunkt des TÜV NORD erledigen wir HU und AU in einem Termin.'],
];

export default function Faq() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
  return (
    <section className='faq s-b' id='faq'>
      <div className='wrap'>
        <span className='eyebrow'>FAQ</span>
        <h2>Fragen, die uns oft gestellt werden.</h2>
        <div className='faqlist'>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <p className='faqmore'>Ihre Frage fehlt? <a href='/kontakt'>Schreiben Sie uns</a> oder rufen Sie an.</p>
      </div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </section>
  );
}
