'use client';
import { useEffect } from 'react';

// Anfragen gehen per E-Mail an info@autopartner-hagen.de (Dienst: FormSubmit).
const ENDPOINT = 'https://formsubmit.co/ajax/info@autopartner-hagen.de';

export default function FormsInit() {
  useEffect(() => {
    const handler = async (e: Event) => {
      const f = e.target as HTMLFormElement;
      if (!f.classList?.contains('js-form')) return;
      e.preventDefault();
      const ok = f.querySelector<HTMLElement>('.ok');
      const btn = f.querySelector<HTMLButtonElement>('button[type=submit]');
      const show = (msg: string) => {
        if (ok) {
          ok.textContent = msg;
          ok.style.display = 'block';
        }
      };
      const data = new FormData(f);
      const hasContact = ['tel', 'kontakt'].some((k) => String(data.get(k) ?? '').trim());
      if (!String(data.get('name') ?? '').trim() || !hasContact) {
        show('Bitte geben Sie Ihren Namen und eine Telefonnummer oder E-Mail an.');
        return;
      }
      const title = f.querySelector('h3')?.textContent ?? 'Anfrage';
      data.append('_subject', `Website: ${title}`);
      data.append('_template', 'table');
      data.append('_captcha', 'false');
      data.append('Seite', window.location.href);
      if (btn) btn.disabled = true;
      try {
        const r = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        const j = await r.json().catch(() => ({}));
        if (r.ok && j.success !== 'false') {
          show('Vielen Dank! Ihre Anfrage ist bei uns eingegangen. Wir melden uns bei Ihnen.');
          f.reset();
        } else {
          show('Das hat leider nicht geklappt. Bitte rufen Sie uns an: 02334 / 80814-0 oder schreiben Sie uns per WhatsApp.');
        }
      } catch {
        show('Das hat leider nicht geklappt. Bitte rufen Sie uns an: 02334 / 80814-0 oder schreiben Sie uns per WhatsApp.');
      } finally {
        if (btn) btn.disabled = false;
      }
    };
    document.addEventListener('submit', handler);
    return () => document.removeEventListener('submit', handler);
  }, []);
  return null;
}
