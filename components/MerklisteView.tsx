'use client';
import { useState } from 'react';
import Photo from '@/components/Photo';
import FavButton from '@/components/Fav';
import { useFavs } from '@/lib/favs';

type V = { slug: string; name: string; meta: string; price: string; tag: string; image: string | null; alt: string; specs: [string, string][] };

export default function MerklisteView({ all }: { all: V[] }) {
  const { favs } = useFavs();
  const [sel, setSel] = useState<string[]>([]);
  const list = favs.map((s) => all.find((v) => v.slug === s)).filter(Boolean) as V[];
  const pick = (slug: string) =>
    setSel((c) => (c.includes(slug) ? c.filter((x) => x !== slug) : c.length >= 3 ? c : [...c, slug]));
  const cmp = sel.map((s) => all.find((v) => v.slug === s)).filter(Boolean) as V[];
  const keys = Array.from(new Set(cmp.flatMap((v) => v.specs.map(([k]) => k))));

  if (list.length === 0)
    return (
      <p className='lead'>
        Ihre Merkliste ist noch leer. Mit dem Herz an einem Fahrzeug merken Sie es sich. Die Liste bleibt nur auf Ihrem Gerät gespeichert. <a className='link' href='/fahrzeuge'>Fahrzeuge ansehen</a>
      </p>
    );

  return (
    <>
      <div className='grid'>
        {list.map((v) => (
          <div className='carw' key={v.slug}>
            <FavButton slug={v.slug} />
            <a className='car' href={`/fahrzeuge/${v.slug}`}>
              <div className='pic'>
                {v.image ? <Photo src={v.image} alt={v.alt} /> : (<><span className='ph'></span><small>Foto folgt</small></>)}
                <span className='tag'>{v.tag}</span>
              </div>
              <div className='cbody'>
                <h3>{v.name}</h3>
                <span className='meta'>{v.meta}</span>
                <div className='pr'><b>{v.price}</b></div>
              </div>
            </a>
            <label className='cmpb'>
              <input type='checkbox' checked={sel.includes(v.slug)} onChange={() => pick(v.slug)} /> Vergleichen
            </label>
          </div>
        ))}
      </div>
      {cmp.length >= 2 && (
        <div className='cmp'>
          <h3>Fahrzeugvergleich</h3>
          <div className='cmpscroll'>
            <table>
              <thead><tr><th></th>{cmp.map((v) => <th key={v.slug}><a href={`/fahrzeuge/${v.slug}`}>{v.name}</a></th>)}</tr></thead>
              <tbody>
                <tr><td>Preis</td>{cmp.map((v) => <td key={v.slug}><b>{v.price}</b></td>)}</tr>
                {keys.map((k) => (
                  <tr key={k}><td>{k}</td>{cmp.map((v) => <td key={v.slug}>{v.specs.find(([x]) => x === k)?.[1] ?? '–'}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {cmp.length === 1 && <p className='note' style={{ marginTop: 24 }}>Wählen Sie ein weiteres Fahrzeug aus (bis zu 3), um zu vergleichen.</p>}
    </>
  );
}
