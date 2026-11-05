import Car from '@/components/Car';
import { activeCategories, brandsInStock } from '@/lib/categories';
import { vehicles, type Vehicle } from '@/lib/vehicles';

export default function Listing({ title, intro, list, current }: { title: string; intro: string; list: Vehicle[]; current: string }) {
  const cats = activeCategories();
  const chip = (href: string, label: string, key: string) => (
    <a key={key} className={current === key ? 'on' : ''} href={href}>{label}</a>
  );
  return (
    <main id='top'>
      <section className='stock s-a' style={{ paddingTop: 72 }}>
        <div className='wrap'>
          <div className='crumbs' style={{ paddingTop: 0, marginBottom: 24 }}><a href='/'>Startseite</a> › <a href='/fahrzeuge'>Fahrzeuge</a></div>
          <div className='head'>
            <div>
              <h1 className='ltitle'>{title}</h1>
              <p className='lead' style={{ marginTop: 14 }}>{intro}</p>
            </div>
          </div>
          <div className='filters' style={{ marginBottom: 48 }}>
            {chip('/fahrzeuge', `Alle (${vehicles.length})`, 'alle')}
            {cats.map((c) => chip(`/fahrzeuge/kategorie/${c.key}`, `${c.label} (${c.count})`, c.key))}
            {brandsInStock().map((b) => chip(`/fahrzeuge/marke/${b.toLowerCase()}`, b, b.toLowerCase()))}
          </div>
          <div className='grid'>{list.map((v) => <Car key={v.slug} v={v} />)}</div>
        </div>
      </section>
    </main>
  );
}
