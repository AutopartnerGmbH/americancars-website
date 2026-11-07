'use client';
import { useEffect, useState } from 'react';

const KEY = 'ac_merkliste';
const read = (): string[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
};
export function useFavs() {
  const [favs, setFavs] = useState<string[]>([]);
  useEffect(() => {
    setFavs(read());
    const f = () => setFavs(read());
    window.addEventListener('ac-favs', f);
    window.addEventListener('storage', f);
    return () => { window.removeEventListener('ac-favs', f); window.removeEventListener('storage', f); };
  }, []);
  const toggle = (slug: string) => {
    const cur = read();
    const next = cur.includes(slug) ? cur.filter((x) => x !== slug) : [...cur, slug];
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
    window.dispatchEvent(new Event('ac-favs'));
  };
  return { favs, toggle };
}
