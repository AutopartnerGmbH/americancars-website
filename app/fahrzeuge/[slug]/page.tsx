import Photo from '@/components/Photo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVehicle, vehicles, priceNum } from '@/lib/vehicles';
import Finanzierung from '@/components/Finanzierung';
import FavButton from '@/components/Fav';
import { site } from '@/lib/site';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://americancars-website.vercel.app';
import Car from '@/components/Car';

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) return {};
  return {
    title: `${v.name} kaufen in Hagen`,
    description: `${v.name}, ${v.meta}, ${v.price}. Autopartner GmbH American Cars in Hagen, Prüfstützpunkt des TÜV NORD.`,
  };
}

export default async function Fahrzeug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) notFound();
  const pn = priceNum(v);
  const ld = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'Car'],
    name: v.name,
    brand: { '@type': 'Brand', name: v.brand },
    description: v.meta,
    url: `${BASE}/fahrzeuge/${v.slug}`,
    ...(v.image ? { image: v.image.startsWith('http') ? v.image : BASE + v.image } : {}),
    ...(pn
      ? {
          offers: {
            '@type': 'Offer',
            price: pn,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'AutoDealer', name: site.name },
          },
        }
      : {}),
  };
  const similar = vehicles.filter((x) => x.slug !== v.slug).slice(0, 3);
  const specs: [string, string][] = [...v.specs, ['Getriebe', '[aus mobile.de]'], ['Carfax', '[Bericht verlinken]']];

  return (
    <main id='top'>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className='wrap crumbs'>
        <a href='/'>Startseite</a> › <a href='/fahrzeuge'>Fahrzeuge</a> › {v.name}
      </div>
      <section className='veh'>
        <div className='wrap two'>
          <div className='gal'>
            {v.image ? <Photo src={v.image} alt={v.alt} /> : <span className='ph'></span>}
            <span className='tag'>{v.tag}</span>
          </div>
          <div className='info'>
            <h1>{v.name}</h1>
            <p className='sub'>{v.meta}</p>
            <div className='priceline'>
              <b>{v.price}</b>
              {pn && v.vat === 'ausweisbar' && <span>Netto {(pn / 1.19).toLocaleString('de-DE', { maximumFractionDigits: 0 })} € · MwSt. ausweisbar</span>}
              {v.vat === 'differenz' && <span>Differenzbesteuert, MwSt. nicht ausweisbar</span>}
            </div>
            <p className='warr'><b>Garantie optional:</b> 595 € pro Jahr. Details besprechen wir gern persönlich mit Ihnen.</p>
            <dl className='specs'>
              {specs.map(([k, val]) => (
                <div key={k}><dt>{k}</dt><dd>{val}</dd></div>
              ))}
            </dl>
            <div className='acts2'>
              <a className='b1' href='tel:+492334808140'>Jetzt anrufen</a>
              <a className='b2' href='#anfrage'>Anfrage senden</a>
              <FavButton slug={v.slug} label />
            </div>
          </div>
        </div>
      </section>
      <section className='svc s-b' id='anfrage'>
        <div className='wrap two'>
          <div className='desc'>
            <span className='eyebrow'>Fahrzeugbeschreibung</span>
            <h2>Ausstattung &amp; Details</h2>
            <p>[Hier erscheint später automatisch der Beschreibungstext und die Ausstattungsliste aus Ihrem mobile.de-Inserat, dazu die weiteren Fotos als Galerie.]</p>
            <p>Jedes Fahrzeug haben wir selbst geprüft. Fragen zur Historie, zur Garantie oder zur Lieferung beantworten wir Ihnen persönlich.</p>
          </div>
          <form className='form js-form' noValidate>
            <h3>Anfrage zu diesem Fahrzeug</h3>
            <div className='r2'>
              <label className='f'>Name<input type='text' name='name' autoComplete='name' /></label>
              <label className='f'>Telefon<input type='tel' name='tel' autoComplete='tel' /></label>
            </div>
            <label className='f'>Ich möchte
              <select name='w'>
                <option>Informationen zum Fahrzeug</option>
                <option>Probefahrt vereinbaren</option>
                <option>Finanzierung anfragen</option>
                <option>Mein Auto in Zahlung geben</option>
              </select>
            </label>
            <label className='f'>Nachricht<textarea name='msg' defaultValue={`Ich interessiere mich für: ${v.name}.`} /></label>
            <button className='btn' type='submit'>Anfrage senden</button>
            <p className='ok' role='status'></p>
            <p className='note'>Wir melden uns schnellstmöglich bei Ihnen.</p>
          </form>
        </div>
      </section>
      {pn && (
        <section className='s-c calcs'>
          <div className='wrap'><Finanzierung price={pn} /></div>
        </section>
      )}
      <section className='stock s-a'>
        <div className='wrap'>
          <div className='head'><h2>Ähnliche Fahrzeuge</h2></div>
          <div className='grid'>
            {similar.map((x) => (<Car key={x.slug} v={x} />))}
          </div>
        </div>
      </section>
    </main>
  );
}
