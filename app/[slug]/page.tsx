import TuevBadge from '@/components/TuevBadge';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage, pages } from '@/lib/pages';
import JsonLd, { crumbs } from '@/components/JsonLd';
import { BASE } from '@/lib/url';
import { extras } from '@/lib/extras';

export const dynamicParams = false;

const hidden = ['team'];
const notService = ['blog', 'betrugsmasche', 'karriere', 'team', 'tipps-hinweise', 'carfax', 'werkstatt-leistungen', 'unfallwagen-litauen-erkennen', 'dodge-ram-5-7-hemi', 'kauf-und-uebergabe'];
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
  const ex = extras[p.slug];
  return (
    <main id='top'>
      <JsonLd data={[
        crumbs([[p.title, `/${p.slug}`]]),
        ...(notService.includes(p.slug) ? [] : [{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: p.title,
          description: p.desc,
          url: `${BASE}/${p.slug}`,
          provider: { '@id': `${BASE}/#autohaus` },
          areaServed: { '@type': 'City', name: 'Hagen' },
        }]),
        ...(ex ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: ex.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
        }] : []),
      ]} />
      <section className='post s-b nobord'>
        <div className='wrap'>
          <aside>
            {/TÜV NORD/.test(p.eyebrow) ? <TuevBadge /> : <span className='eyebrow'>{p.eyebrow}</span>}
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
            {ex?.signs && (
              <div>
                <h3>{ex.signsTitle ?? 'Darauf sollten Sie achten'}</h3>
                <ul>{ex.signs.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            )}
            {ex && (
              <div>
                <h3>Häufige Fragen</h3>
                {ex.faq.map(([q, a]) => (
                  <details key={q} className='pfaq'>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            )}
            {p.cta && <p className='cta2'><a className='b1' href={p.cta[1]}>{p.cta[0]}</a></p>}
          </article>
        </div>
      </section>
    </main>
  );
}
