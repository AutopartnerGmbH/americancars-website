'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const SEL = '.car, .why .col, .tiles a, .stats .wrap>div, .post article>*, .svc ul.list li, .duo>div, .rev blockquote';

export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.setAttribute('data-rv', '');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
