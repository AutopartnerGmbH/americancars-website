'use client';
import { useEffect } from 'react';

export default function BandParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('.band [data-px]'));
    if (!els.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      els.forEach((img) => {
        const band = img.parentElement as HTMLElement;
        const r = band.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight));
        img.style.transform = `translate3d(0,${(p * -0.12 * r.height).toFixed(1)}px,0)`;
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
