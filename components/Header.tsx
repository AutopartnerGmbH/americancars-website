'use client';
import { useEffect, useState } from 'react';
import { brandSvg } from '@/lib/icons';
import { nav as items } from '@/lib/nav';
import { site } from '@/lib/site';
import { FavCount } from '@/components/Fav';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const rs = () => window.innerWidth > 900 && setOpen(false);
    document.addEventListener('keydown', esc);
    window.addEventListener('resize', rs);
    return () => {
      document.removeEventListener('keydown', esc);
      window.removeEventListener('resize', rs);
    };
  }, [open]);

  return (
    <header className={'bar' + (open ? ' open' : '')} id='bar'>
      <div className='wrap bar-in'>
        <a className='brand' href='/' aria-label='Autopartner American Cars – Startseite'>
          <span style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: brandSvg }} />
          <span>
            <span className='t1'>Autopartner</span>
            <span className='t2'>American <i>Cars</i></span>
          </span>
        </a>
        <nav className='menu' id='menu' aria-label='Hauptnavigation'>
          <ul>
            {items.map((it) => (
              <li key={it.label} className={(it.sub ? 'has-sub' : '') + (subOpen === it.label ? ' sub-open' : '')}>
                {it.href ? (
                  <a href={it.href} onClick={() => setOpen(false)}>{it.label}</a>
                ) : (
                  <a aria-disabled='true' style={{ cursor: 'default', pointerEvents: 'none' }}>{it.label}</a>
                )}
                {it.sub && (
                  <>
                    <button
                      className='tg'
                      type='button'
                      aria-expanded={subOpen === it.label}
                      aria-label={'Untermenü ' + it.label}
                      onClick={() => setSubOpen(subOpen === it.label ? null : it.label)}
                    />
                    <ul className='sub'>
                      {it.sub.map(([l, h]) => (
                        <li key={l}><a href={h} onClick={() => setOpen(false)}>{l}</a></li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <FavCount />
        <a className='tel' href={`tel:${site.phoneTel}`}>{site.phone}</a>
        <button
          className='burger'
          type='button'
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls='menu'
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span>
        </button>
      </div>
    </header>
  );
}
