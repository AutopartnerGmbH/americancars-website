export const faqs: [string, string][] = [
  ['Kann ich ein Fahrzeug direkt aus den USA importieren lassen?', 'Ja. Wir übernehmen die Fahrzeugprüfung in Florida, den Transport nach Bremerhaven, die Verzollung, die Umrüstung und die TÜV-Vollabnahme nach § 21 StVZO in Hagen. Danach kann das Fahrzeug nach deutschem Standard zugelassen werden.'],
  ['Bekomme ich zu jedem Fahrzeug einen Carfax-Bericht?', 'Ja, zu jedem Fahrzeug gibt es den Carfax-Bericht. Sie sehen die Fahrzeughistorie, bevor Sie sich entscheiden, kostenlos und ohne Nachfragen.'],
  ['Kann ich ein Fahrzeug über Ihre Partnerbank finanzieren?', 'Ja, die Finanzierung läuft über die Santander Bank, derzeit mit 6,99 % effektivem Jahreszins. Bei jedem Fahrzeug sehen Sie mit dem Rechner direkt die Monatsrate. Verbindlich ist das Angebot der Bank.'],
  ['Gibt es eine Garantie?', 'Ja, auf Wunsch bieten wir eine Garantie für 595 € pro Jahr an. Sie ist immer kostenpflichtig und wird beim Kauf gesondert vereinbart.'],
  ['Wie kann ich bezahlen?', 'Per Überweisung, mit EC-Karte oder bar. Kreditkarten wie Mastercard, Visa oder Amex nehmen wir nicht an.'],
  ['Nehmen Sie mein Fahrzeug in Zahlung?', 'Ja. Schicken Sie uns die Eckdaten und ein paar Fotos, wir melden uns mit einem Angebot, auch für die Inzahlungnahme beim Kauf eines unserer Fahrzeuge.'],
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
