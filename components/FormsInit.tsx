'use client';
import { useEffect } from 'react';

// Entwurf: Formulare zeigen nur eine Bestätigung. Der echte Versand kommt später.
export default function FormsInit() {
  useEffect(() => {
    const handler = (e: Event) => {
      const f = e.target as HTMLElement;
      if (f.classList?.contains('js-form')) {
        e.preventDefault();
        const ok = f.querySelector<HTMLElement>('.ok');
        if (ok) ok.style.display = 'block';
      }
    };
    document.addEventListener('submit', handler);
    return () => document.removeEventListener('submit', handler);
  }, []);
  return null;
}
