const items = ['Seit 1988 in Hagen', 'Carfax zu jedem Fahrzeug', 'Finanzierung über Santander Bank', 'Meisterbetrieb · HWK Arnsberg', 'Werkstatt für alle Marken', 'Deutsch & Englisch'];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      <li className='mq-tuev'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/img/tuev-nord-kontur.png' alt={hidden ? '' : 'TÜV NORD'} height={26} width={113} />
        <span>Prüfstützpunkt</span>
      </li>
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
  return (
    <div className='mq' aria-label='Qualität und Partner'>
      <div className='mq-track'>{row(false)}{row(true)}</div>
    </div>
  );
}
