'use client';
import { useState } from 'react';
import { EFF, TERMS, calc, eur } from '@/lib/finance';

export default function Finanzierung({ price }: { price: number }) {
  const [down, setDown] = useState(Math.round((price * 0.1) / 100) * 100);
  const [months, setMonths] = useState(60);
  const d = Math.min(Math.max(0, down || 0), price);
  const r = calc(price, d, months);
  return (
    <div className='calc'>
      <h3>Finanzierungsbeispiel</h3>
      <div className='r2'>
        <label className='f'>Anzahlung (€)
          <input type='number' inputMode='numeric' min={0} max={price} step={500} value={down}
            onChange={(e) => setDown(Number(e.target.value))} />
        </label>
        <label className='f'>Laufzeit
          <select value={months} onChange={(e) => setMonths(Number(e.target.value))}>
            {TERMS.map((t) => <option key={t} value={t}>{t} Monate</option>)}
          </select>
        </label>
      </div>
      <div className='out'>
        <span>Monatliche Rate</span>
        <b>{eur(r.rate)}</b>
      </div>
      <dl>
        <div><dt>Fahrzeugpreis</dt><dd>{eur(price)}</dd></div>
        <div><dt>Anzahlung</dt><dd>{eur(d)}</dd></div>
        <div><dt>Nettodarlehensbetrag</dt><dd>{eur(r.loan)}</dd></div>
        <div><dt>Sollzins p. a. (gebunden)</dt><dd>{r.nominal.toFixed(2).replace('.', ',')} %</dd></div>
        <div><dt>Effektiver Jahreszins</dt><dd>{EFF.toFixed(2).replace('.', ',')} %</dd></div>
        <div><dt>Laufzeit</dt><dd>{months} Monate</dd></div>
        <div><dt>Gesamtbetrag der Raten</dt><dd>{eur(r.total)}</dd></div>
      </dl>
      <p className='note'>
        Unverbindliches Berechnungsbeispiel, kein Angebot. Ein Darlehen erfordert Bonität und wird von der Santander Consumer Bank AG,
        Santander-Platz 1, 41061 Mönchengladbach, gewährt. Die Autopartner GmbH vermittelt den Kredit. Für Ihr persönliches Angebot sprechen Sie uns an.
      </p>
    </div>
  );
}
