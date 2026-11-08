import TuevBadge from '@/components/TuevBadge';
import Photo from '@/components/Photo';
import Reviews, { RatingChip } from '@/components/Reviews';
import Marquee from '@/components/Marquee';
import Ablauf from '@/components/Ablauf';
import Faq from '@/components/Faq';
import Car from '@/components/Car';
import { vehicles } from '@/lib/vehicles';
import { models } from '@/lib/models';
import { activeCategories, brandsInStock } from '@/lib/categories';
import { site } from '@/lib/site';

export const revalidate = 3600;

export default function Home() {
  const cats = activeCategories();
  const brands = brandsInStock();
  const popular = models
    .map((m) => ({ m, n: vehicles.filter((v) => m.match.test(v.name)).length }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n)
    .map((x) => x.m);
  const hero = vehicles.find((v) => /pacifica/i.test(v.name));

  return (
    <main id='top'>
      <section className='hero3'>
        <div className='h3-img'>
          <Photo src='/img/hero.jpg' alt='Schwarzer Chrysler Pacifica von Autopartner American Cars auf der Autobahn' />
          {hero ? (
            <a className='hero-chip' href={`/fahrzeuge/${hero.slug}`}>Chrysler Pacifica ab {hero.price} →</a>
          ) : (
            <a className='hero-chip' href='/fahrzeuge'>Aktuelle US-Fahrzeuge ansehen →</a>
          )}
        </div>
        <div className='wrap h3-text'>
          <div className='h3-tuev'><TuevBadge /></div>
          <h1>US-Fahrzeuge, <span className='mark'>persönlich ausgewählt.</span></h1>
          <p>Unfallfrei, mit Carfax-Bericht und eigener Meisterwerkstatt. Seit {site.since} in Hagen.</p>
          <div className='acts'><a className='b1' href='/fahrzeuge'>Bestand ansehen</a></div>
        </div>
      </section>
      <Marquee />
      <div className='ratestrip'><RatingChip /></div>
      <section className='intro s-a'><div className='wrap'>
        <span className='eyebrow'>Autopartner GmbH</span>
        <p>Wir importieren amerikanische Fahrzeuge und kennen jedes einzelne. <span>Bei uns kaufen Sie kein Auto aus dem Katalog, sondern eines, das wir selbst geprüft haben.</span></p>
      </div></section>

      <section className='cats s-b'><div className='wrap'>
        <div className='head'><h2>Was suchen Sie?</h2><div className='brands'>{brands.map((b) => <a key={b} href={`/fahrzeuge/marke/${b.toLowerCase()}`}>{b}</a>)}</div></div>
      </div></section>

      <section className='stock s-a' id='bestand'><div className='wrap'>
        <div className='head'>
          <h2>Aktueller Bestand</h2>
          <div className='filters'>
            <a className='on' href='/fahrzeuge'>Alle ({vehicles.length})</a>
            {cats.map((c) => <a key={c.key} href={`/fahrzeuge/kategorie/${c.key}`}>{c.label}</a>)}
          </div>
        </div>
        <div className='grid'>{vehicles.slice(0, 6).map((v) => <Car key={v.slug} v={v} />)}</div>
        <div className='more'><a className='link' href='/fahrzeuge'>Alle {vehicles.length} Fahrzeuge ansehen</a></div>
      </div></section>

      <section className='band'><Photo src='/img/silverado.jpg' alt='Chevrolet Silverado mit Offroad-Umbau' /><div className='wrap'><span className='eyebrow'>Unser Anspruch</span><p>Jedes Fahrzeug haben wir selbst geprüft. <span>Bevor Sie es sehen.</span></p></div></section>

      <section className='pop s-b'><div className='wrap'>
        {popular.length > 0 && (
          <div><span className='eyebrow'>Aktuell im Bestand</span>
            <ul className='poplist'>
              {popular.map((m) => <li key={m.slug}><a href={`/modelle/${m.slug}`}>{m.name}</a></li>)}
            </ul></div>
        )}
        <div><span className='eyebrow'>Werkstatt-Leistungen</span>
          <ul className='poplist'>
            <li><a href='/hu-au-hagen'>HU & AU</a></li>
            <li><a href='/klimaservice'>Klimaservice</a></li>
            <li><a href='/motordiagnose'>Motordiagnose</a></li>
            <li><a href='/bremsen-service'>Bremsen</a></li>
            <li><a href='/getriebe-motor-reparatur'>Getriebe & Motor</a></li>
            <li><a href='/unfall-instandsetzung'>Unfallreparatur</a></li>
            <li><a href='/werkstatt-leistungen'>Alle Leistungen</a></li>
          </ul></div>
      </div></section>

      <section className='why s-c' id='warum'><div className='wrap'>
        <span className='eyebrow'>Warum American Cars</span>
        <div className='cols'>
          <div className='col'><h3>Carfax zu jedem Fahrzeug</h3><p>Sie sehen die Historie, bevor Sie sich entscheiden. Kostenlos und ohne Nachfragen.</p></div>
          <div className='col'><h3>Meisterwerkstatt im Haus</h3><p>Wir kennen amerikanische Technik und reparieren alle Marken, vor dem Verkauf und danach.</p></div>
          <div className='col'><h3>Prüfstützpunkt des TÜV NORD</h3><p>HU, AU und Vollabnahmen direkt bei uns in Hagen, für alle Hersteller.</p></div>
          <div className='col'><h3>Ehrliche Beratung</h3><p>Auch wenn am Ende kein Kauf zustande kommt, loben Kunden unsere offene Art.</p></div>
        </div>
      </div></section>

      <Ablauf />

      <section className='svc s-b' id='werkstatt'><div className='wrap two'>
        <div>
          <span className='eyebrow'>KFZ-Meisterwerkstatt · Prüfstützpunkt des TÜV NORD</span>
          <h2>Große Meisterwerkstatt für alle Fabrikate.</h2>
          <p className='lead'>Ob amerikanisch, deutsch oder asiatisch: Wir reparieren, warten, bauen um und prüfen Fahrzeuge aller Marken, direkt bei uns in Hagen.</p>
          <ul className='list'>
            <li><a href='/werkstatt-service'>Wartung & Reparatur</a><span>alle Marken</span></li>
            <li><a href='/tuev-und-homologation'>TÜV, AU & Homologation</a><span>Prüfstützpunkt des TÜV NORD</span></li>
            <li><a href='/us-fahrzeug-tunen'>Umbau & Tuning</a><span>nach Ihren Wünschen</span></li>
            <li><a href='/unfall-instandsetzung'>Unfall-Instandsetzung</a><span>mit Versicherungsabwicklung</span></li>
            <li><a href='/import-umruestung'>Import, Umrüstung & Umzugsgut</a><span>US-Fahrzeuge</span></li>
          </ul>
        </div>
        <form className='form js-form' noValidate>
          <h3>Werkstatttermin anfragen</h3>
          <div className='r2'><label className='f'>Name<input type='text' name='name' autoComplete='name' /></label><label className='f'>Telefon<input type='tel' name='tel' autoComplete='tel' /></label></div>
          <div className='r2'><label className='f'>Fahrzeug (Marke, Modell)<input type='text' name='fz' /></label><label className='f'>Amtl. Kennzeichen<input type='text' name='kz' /></label></div>
          <div className='r2'><label className='f'>Anliegen<select name='anl'><option>Wartung / Inspektion</option><option>Reparatur</option><option>TÜV / AU</option><option>Umbau / Tuning</option><option>Unfallschaden</option><option>Umzugsgut / Import</option><option>Sonstiges</option></select></label><label className='f'>Wunschtermin<input type='date' name='wt' /></label></div>
          <label className='f'>Nachricht<textarea name='msg' /></label>
          <button className='btn' type='submit'>Termin anfragen</button>
          <p className='ok' role='status'></p>
          <p className='note'>Wir melden uns zur Terminbestätigung bei Ihnen.</p>
        </form>
      </div></section>

      <section className='ank s-a' id='ankauf'><div className='wrap two'>
        <form className='form js-form' noValidate>
          <h3>Fahrzeug zum Ankauf anbieten</h3>
          <div className='r2'><label className='f'>Marke<input type='text' name='marke' /></label><label className='f'>Modell<input type='text' name='modell' /></label></div>
          <div className='r2'><label className='f'>Erstzulassung<input type='text' name='ez' placeholder='MM/JJJJ' /></label><label className='f'>Kilometerstand<input type='text' name='km' /></label></div>
          <label className='f'>Fotos (Front, Heck, Innenraum, Tacho)<input type='file' name='fotos' accept='image/*' multiple /></label>
          <div className='r2'><label className='f'>Name<input type='text' name='name' autoComplete='name' /></label><label className='f'>Telefon oder E-Mail<input type='text' name='kontakt' /></label></div>
          <button className='btn' type='submit'>Angebot anfordern</button>
          <p className='ok' role='status'></p>
          <p className='note'>Sie erhalten von uns ein Angebot. Ohne Verpflichtung.</p>
        </form>
        <div>
          <span className='eyebrow'>Ankauf & Inzahlungnahme</span>
          <h2>Ihr Fahrzeug in guten Händen.</h2>
          <p className='lead'>Schicken Sie uns die Eckdaten und ein paar Fotos. Wir melden uns mit einem Angebot, auch für die Inzahlungnahme beim Kauf eines unserer Fahrzeuge. [Konditionen ergänzen]</p>
        </div>
      </div></section>

      <section className='fin s-c' id='finanzierung'><div className='wrap'>
        <div><span className='eyebrow'>Finanzierung</span><h2>Die Monatsrate sehen Sie sofort.</h2></div>
        <div><p className='lead'>Bei jedem Fahrzeug steht die Rate direkt neben dem Preis. Berechnungsgrundlage: [Laufzeit, Anzahlung und Zins ergänzen].</p><p style={{ margin: '24px 0 0' }}><a className='link' href='/kontakt'>Finanzierung anfragen</a></p></div>
      </div></section>

      <section className='fin s-b' id='umzugsgut-info'><div className='wrap'>
        <div><span className='eyebrow'>Ratgeber · Import</span><h2>Ihr Auto aus den USA mitbringen?</h2></div>
        <div><p className='lead'>Wer aus den USA nach Deutschland zieht, kann sein Fahrzeug unter Bedingungen als Umzugsgut einführen. Wir erklären, wie das geht, und erledigen Prüfung und Umrüstung.</p><p style={{ margin: '24px 0 0' }}><a className='link' href='/umzugsgut'>Mehr zum Umzugsgut</a></p></div>
      </div></section>

      <Reviews />

      <Faq />

      <section className='contact s-d' id='kontakt'><div className='wrap'>
        <div>
          <h2>Besuchen Sie uns in Hagen.</h2>
          <address>{site.name}<br />{site.street}, {site.city}</address>
          <ul className='hours'>{site.hours.map(([d, t]) => <li key={d}><span>{d}</span><span>{t}</span></li>)}</ul>
          <ul className='hours info2'><li><span>Zahlung</span><span>{site.payment}</span></li><li><span>Sprachen</span><span>{site.languages}</span></li></ul>
        </div>
        <div>
          <a className='tel' href={`tel:${site.phoneTel}`}>{site.phone}</a>
          <a className='mail' href={`mailto:${site.mail}`}>{site.mail}</a>
          <div className='cta'><a href={`tel:${site.phoneTel}`}>Anrufen</a><a href={`https://wa.me/${site.whatsapp}`}>WhatsApp</a><a href='#werkstatt'>Werkstatttermin</a><a href='/kontakt'>Kontaktformular</a></div>
        </div>
      </div></section>
    </main>
  );
}
