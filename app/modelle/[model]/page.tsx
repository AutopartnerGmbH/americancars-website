import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Car from '@/components/Car';
import { getModel, models } from '@/lib/models';
import { vehicles } from '@/lib/vehicles';
import JsonLd, { crumbs } from '@/components/JsonLd';

export const dynamicParams = false;
export const generateStaticParams = () => models.map((m) => ({ model: m.slug }));

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }): Promise<Metadata> {
  const { model } = await params;
  const m = getModel(model);
  return m ? { title: m.title, description: m.desc } : {};
}

export default async function ModelPage({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const m = getModel(model);
  if (!m) notFound();
  const list = vehicles.filter((v) => m.match.test(v.name));
  return (
    <main id='top'>
      <JsonLd data={crumbs([['Fahrzeuge', '/fahrzeuge'], [m.name, `/modelle/${m.slug}`]])} />
      <section className='post s-b nobord'>
        <div className='wrap'>
          <aside>
            <span className='eyebrow'>US-Fahrzeuge · Hagen</span>
            <h1>{m.title}</h1>
            <p className='lead'>{m.lead}</p>
          </aside>
          <article>
            {m.blocks.map((b, i) => (
              <div key={i}>
                {b.h && <h3>{b.h}</h3>}
                {b.p?.map((t, j) => <p key={j}>{t}</p>)}
                {b.ul && <ul>{b.ul.map((t) => <li key={t}>{t}</li>)}</ul>}
                {b.links && (
                  <p>{b.links.map(([l, h]) => (
                    <span key={h} style={{ display: 'block', margin: '10px 0' }}><a className='link' href={h}>{l}</a></span>
                  ))}</p>
                )}
              </div>
            ))}
            <p className='cta2'><a className='b1' href='/kontakt'>Anfrage senden</a></p>
          </article>
        </div>
      </section>
      <section className='stock s-a'>
        <div className='wrap'>
          <div className='head'><h2>{m.name} im Bestand</h2></div>
          {list.length > 0 ? (
            <div className='grid'>{list.map((v) => <Car key={v.slug} v={v} />)}</div>
          ) : (
            <p className='lead'>Aktuell steht kein {m.name} bei uns. Sprechen Sie uns an, wir suchen ihn gern für Sie. <a className='link' href='/kontakt'>Anfrage senden</a></p>
          )}
        </div>
      </section>
    </main>
  );
}
