import type { Metadata } from 'next';
import MerklisteView from '@/components/MerklisteView';
import { vehicles } from '@/lib/vehicles';

export const metadata: Metadata = { title: 'Merkliste und Fahrzeugvergleich', robots: { index: false, follow: true } };

export default function Merkliste() {
  const all = vehicles.map(({ slug, name, meta, price, tag, image, alt, specs }) => ({ slug, name, meta, price, tag, image, alt, specs }));
  return (
    <main id='top'>
      <section className='stock s-a' style={{ paddingTop: 72 }}>
        <div className='wrap'>
          <div className='head'><h1 style={{ margin: 0, fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(28px,3.6vw,48px)' }}>Ihre Merkliste</h1></div>
          <MerklisteView all={all} />
        </div>
      </section>
    </main>
  );
}
