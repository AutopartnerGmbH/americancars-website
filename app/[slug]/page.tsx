import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, pages } from '@/lib/pages';

export const dynamicParams = false;

const hidden = ['team'];
const visible = pages.filter((p) => !hidden.includes(p.slug));

export function generateStaticParams() {
  return visible.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = hidden.includes(slug) ? undefined : getPage(slug);
  return p ? { title: p.title, description: p.desc } : {};
}

export default async function SubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = hidden.includes(slug) ? undefined : getPage(slug);
  if (!p) notFound();
  return (
    <main id='top'>
      <section className='post s-b nobord'>
        <div className='wrap'>
          <aside>
            <span className='eyebrow'>{p.eyebrow}</span>
            {/TÜV NORD/.test(p.eyebrow) && (
              <span className='tuev tuev-page'>{/* eslint-disable-next-line @next/next/no-img-element */}<img src='/img/tuev-nord-weiss.png' alt='TÜV NORD' width={200} height={37} /></span>
            )}
            <h1>{p.title}</h1>
            <p className='lead'>{p.lead}</p>
          </aside>
          <article>
            {p.blocks.map((b, i) => (
              <div key={i}>
                {b.h && <h3>{b.h}</h3>}
                {b.p?.map((t, j) => <p key={j}>{t}</p>)}
                {b.ul && <ul>{b.ul.map((t) => <li key={t}>{t}</li>)}</ul>}
                {b.ol && <ol>{b.ol.map((t) => <li key={t}>{t}</li>)}</ol>}
                {b.links && (
                  <p>{b.links.map(([l, h]) => (
                    <span key={h} style={{ display: 'block', margin: '10px 0' }}><a className='link' href={h}>{l}</a></span>
                  ))}</p>
                )}
                {b.box && <p className='box'>{b.box}</p>}
              </div>
            ))}
            {p.cta && <p className='cta2'><a className='b1' href={p.cta[1]}>{p.cta[0]}</a></p>}
          </article>
        </div>
      </section>
    </main>
  );
}
