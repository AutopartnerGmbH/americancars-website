const steps: [string, string, string, string][] = [
  ['01', 'Fahrzeug auswählen', 'Sie suchen sich ein Fahrzeug aus unserem Bestand aus oder nennen uns Ihr Wunschfahrzeug aus den USA. Wir beraten Sie persönlich, auf Wunsch auch auf Englisch.', 'Ein Anruf, eine WhatsApp oder ein Besuch in Hagen.'],
  ['02', 'Wir kümmern uns um alles', 'Carfax, Prüfung, Finanzierung und bei Importen Transport, Zoll, Umrüstung und TÜV-Vollabnahme. Die nötigen Unterlagen beschaffen wir für Sie.', 'Keiner. Wir halten Sie auf dem Laufenden.'],
  ['03', 'Übergabe und Zulassung', 'Sie holen Ihr Fahrzeug bei uns ab, mit allen Papieren. Danach können Sie es zulassen, und die Werkstatt steht Ihnen auch später zur Seite.', 'Ein Termin zur Übergabe.'],
];

export default function Ablauf() {
  return (
    <section className='abl s-a' id='ablauf'>
      <div className='wrap'>
        <span className='eyebrow'>So läuft es ab</span>
        <h2>In drei Schritten zu Ihrem US-Fahrzeug.</h2>
        <ol className='steps3'>
          {steps.map(([n, h, p, a]) => (
            <li key={n}>
              <span className='sn'>{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
              <p className='aufw'><b>Ihr Aufwand</b>{a}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
