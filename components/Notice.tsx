'use client';
import { useEffect, useState } from 'react';

// Zeitgesteuerter Hinweis: erscheint ab "von" und verschwindet automatisch ab "bis" (Zeiten in deutscher Winterzeit).
const notice = {
  id: 'betriebsferien-2026',
  from: '2026-12-01T00:00:00+01:00',
  until: '2027-01-04T00:00:00+01:00',
  title: 'Betriebsferien:',
  text: 'Über Weihnachten und Neujahr haben wir vom',
  dates: '19.12.2026 bis 03.01.2027',
  after: 'geschlossen. Ab dem 04.01.2027 sind wir wieder für Sie da.',
};

export default function Notice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const now = Date.now();
    if (now < Date.parse(notice.from) || now >= Date.parse(notice.until)) return;
    try {
      if (localStorage.getItem('ac_notice_' + notice.id) === '1') return;
    } catch {}
    setShow(true);
  }, []);

  if (!show) return null;
  const close = () => {
    setShow(false);
    try {
      localStorage.setItem('ac_notice_' + notice.id, '1');
    } catch {}
  };
  return (
    <div className='notice' role='status'>
      <p>
        <b>{notice.title}</b> {notice.text} <b>{notice.dates}</b> {notice.after}
      </p>
      <button type='button' onClick={close} aria-label='Hinweis schließen'>×</button>
    </div>
  );
}
