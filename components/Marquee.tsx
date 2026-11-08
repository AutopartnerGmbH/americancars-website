const items = ['Seit 1988 in Hagen', 'Carfax zu jedem Fahrzeug', 'Finanzierung und Leasing möglich', 'KFZ-Meisterbetrieb für alle Marken', 'Familienbetrieb in 2. Generation', 'Deutsch & Englisch'];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined}>
      <li className='mq-tuev'>
        <span>Prüfstützpunkt des</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/img/tuev-nord-kontur.png' alt={hidden ? '' : 'TÜV NORD'} height={26} width={113} />
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
