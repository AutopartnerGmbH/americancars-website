'use client';
import { useEffect, useState } from 'react';

const KEY = 'ac_consent';
const GA = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID; // z. B. AW-123456789 oder G-XXXX
const META = process.env.NEXT_PUBLIC_META_PIXEL_ID;

function load(src: string, id?: string, inline?: string) {
  const s = document.createElement('script');
  if (id) s.id = id;
  if (src) { s.src = src; s.async = true; }
  if (inline) s.text = inline;
  document.head.appendChild(s);
}

function startMarketing() {
  const w = window as unknown as Record<string, unknown>;
  if (w.__acTrack) return;
  w.__acTrack = true;
  if (GA) {
    load('https://www.googletagmanager.com/gtag/js?id=' + GA, 'ac-gtag');
    load('', 'ac-gtag-init', `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}');`);
  }
  if (META) {
    load('', 'ac-meta', `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META}');fbq('track','PageView');`);
  }
}

export default function Consent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let v: string | null = null;
    try { v = localStorage.getItem(KEY); } catch {}
    if (v === 'yes') startMarketing();
    if (v === null) setOpen(true);
    const reopen = () => setOpen(true);
    const click = (e: Event) => {
      const el = (e.target as HTMLElement).closest('#cookie-settings');
      if (el) { e.preventDefault(); reopen(); }
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);
  const choose = (v: 'yes' | 'no') => {
    try { localStorage.setItem(KEY, v); } catch {}
    setOpen(false);
    if (v === 'yes') startMarketing();
    else if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).__acTrack) location.reload();
  };
  // Ohne hinterlegte Werbe-IDs wird kein Banner angezeigt (es wird nichts geladen).
  if (!GA && !META) return null;
  if (!open) return null;
  return (
    <div className='consent' role='dialog' aria-label='Cookie-Hinweis'>
      <p>
        Wir möchten Ihnen passende Fahrzeuge auch auf anderen Seiten zeigen. Dafür setzen wir mit Ihrer Einwilligung Marketing-Cookies von Google und Meta. Ohne Einwilligung laden wir nichts nach.{' '}
        <a href='/datenschutz'>Datenschutz</a> · <a href='/impressum'>Impressum</a>
      </p>
      <div className='consent-b'>
        <button type='button' onClick={() => choose('no')}>Ablehnen</button>
        <button type='button' onClick={() => choose('yes')}>Akzeptieren</button>
      </div>
    </div>
  );
}
