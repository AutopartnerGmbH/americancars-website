'use client';
import { useEffect } from 'react';

// Parallax-Effekte der Startseite:
// 1. Startbild (Pacifica) bleibt stehen, der Text schiebt sich darüber nach oben.
// 2. Bild im "Unser Anspruch"-Band bewegt sich deutlich langsamer als die Seite.
export default function BandParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = document.querySelector<HTMLElement>('.h3-img img');
    const bands = Array.from(document.querySelectorAll<HTMLElement>('.band [data-px]'));
    let raf = 0;
    const update = () => {
      raf = 0;
      if (hero) {
        const box = hero.parentElement as HTMLElement;
        const y = Math.max(0, Math.min(window.scrollY, box.offsetHeight));
        hero.style.transform = `translate3d(0,${y}px,0)`;
      }
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
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return null;
}
