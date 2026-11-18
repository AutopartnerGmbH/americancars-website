'use client';
import { useEffect } from 'react';

// Parallax-Effekte der Startseite:
// 1. Startbild (Pacifica) bleibt stehen, der Text schiebt sich darüber nach oben.
// 2. Bild im "Unser Anspruch"-Band bewegt sich deutlich langsamer als die Seite.
export default function BandParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Startbild: bleibt per CSS (position: fixed + clip-path) stehen, ohne Scroll-Berechnung pro Bild.
    const box = document.querySelector<HTMLElement>('.h3-img');
    const place = () => {
      if (!box) return;
      box.classList.remove('fx');
      const r = box.getBoundingClientRect();
      box.style.setProperty('--hx-top', `${Math.round(r.top + window.scrollY)}px`);
      box.style.setProperty('--hx-h', `${Math.round(r.height)}px`);
      box.classList.add('fx');
    };
    const bands = Array.from(document.querySelectorAll<HTMLElement>('.band [data-px]'));
    let raf = 0;
    const update = () => {
      raf = 0;
      bands.forEach((img) => {
        const band = img.parentElement as HTMLElement;
        const r = band.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight));
        img.style.transform = `translate3d(0,${(p * -0.3 * r.height).toFixed(1)}px,0)`;
      });
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    place();
    const ro = new ResizeObserver(() => place());
    ro.observe(document.body);
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { ro.disconnect(); box?.classList.remove('fx'); window.removeEventListener('scroll', on); window.removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return null;
}
