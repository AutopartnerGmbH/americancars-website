import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt',
  description: 'Kontakt zu Autopartner GmbH American Cars in Hagen: Adresse, Öffnungszeiten, Telefon, WhatsApp und Kontaktformular.',
};

export default function Kontakt() {
  return (
    <main id='top'>
      <section className='post s-b nobord'>
        <div className='wrap'>
          <aside>
            <span className='eyebrow'>Kontakt</span>
            <h1>Besuchen Sie uns in Hagen.</h1>
            <p className='lead'>Beratung und Besichtigung sind während der Öffnungszeiten möglich. Am Wochenende gern nach Vereinbarung.</p>
          </aside>
          <article>
            <h3>Adresse</h3>
            <p>{site.name}<br />{site.street}<br />{site.city}</p>
            <p><a className='link' href='https://www.google.com/maps/search/?api=1&query=Autopartner+GmbH+Auf+dem+L%C3%B6lfert+37+Hagen' target='_blank' rel='noopener noreferrer'>Route in Google Maps</a></p>
            <h3>Öffnungszeiten</h3>
            <ul>{site.hours.map(([d, t]) => <li key={d}>{d}: {t}</li>)}</ul>
            <h3>Erreichbar unter</h3>
            <ul>
              <li>Telefon: <a href={`tel:${site.phoneTel}`}>{site.phone}</a></li>
              <li>Mobil und WhatsApp: <a href={`https://wa.me/${site.whatsapp}`}>{site.mobile}</a></li>
              <li>E-Mail: <a href={`mailto:${site.mail}`}>{site.mail}</a></li>
            </ul>
            <form className='form js-form' noValidate style={{ marginTop: 40 }}>
              <h3 style={{ marginTop: 0 }}>Nachricht senden</h3>
              <div className='r2'><label className='f'>Name<input type='text' name='name' autoComplete='name' /></label><label className='f'>Telefon oder E-Mail<input type='text' name='kontakt' /></label></div>
              <label className='f'>Worum geht es?
                <select name='thema'><option>Fahrzeugkauf</option><option>Werkstatt / Service</option><option>Import / Umzugsgut</option><option>Ankauf</option><option>Sonstiges</option></select>
              </label>
              <label className='f'>Nachricht<textarea name='msg' /></label>
              <button className='btn' type='submit'>Absenden</button>
              <p className='ok' role='status'></p>
            </form>
          </article>
        </div>
      </section>
    </main>
  );
}
