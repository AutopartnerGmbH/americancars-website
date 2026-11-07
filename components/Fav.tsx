'use client';
import { useFavs } from '@/lib/favs';

export default function FavButton({ slug, label }: { slug: string; label?: boolean }) {
  const { favs, toggle } = useFavs();
  const on = favs.includes(slug);
  return (
    <button
      type='button'
      className={'fav' + (on ? ' on' : '') + (label ? ' lab' : '')}
      aria-pressed={on}
      aria-label={on ? 'Von der Merkliste entfernen' : 'Auf die Merkliste setzen'}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(slug); }}
    >
      <svg viewBox='0 0 24 24' width='20' height='20' aria-hidden='true'>
        <path d='M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 5 6.1 5c2 0 3.4 1.1 3.9 2.2h4c.5-1.1 1.9-2.2 3.9-2.2 3.4 0 5.2 3.4 3.7 6.800C19.5 16.400 12 21 12 21z' fill={on ? 'currentColor' : 'none'} stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
      </svg>
      {label && <span>{on ? 'Gemerkt' : 'Merken'}</span>}
    </button>
  );
}

export function FavCount() {
  const { favs } = useFavs();
  return (
    <a className='favlink' href='/merkliste' aria-label={`Merkliste, ${favs.length} Fahrzeuge`}>
      <svg viewBox='0 0 24 24' width='18' height='18' aria-hidden='true'><path d='M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 5 6.1 5c2 0 3.4 1.1 3.9 2.2h4c.5-1.1 1.9-2.2 3.9-2.2 3.4 0 5.2 3.4 3.7 6.800C19.5 16.400 12 21 12 21z' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' /></svg>
      {favs.length > 0 && <b>{favs.length}</b>}
    </a>
  );
}
