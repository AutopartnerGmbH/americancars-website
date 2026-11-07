import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Impressum', description: 'Impressum der Autopartner GmbH – American Cars, Hagen.' };

export default function Impressum() {
  return (
    <main id='top'>
      <section className='post s-b nobord'>
        <div className='wrap'>
          <aside>
            <span className='eyebrow'>Rechtliches</span>
            <h1>Impressum</h1>
          </aside>
          <article>
            <h3>Angaben gemäß § 5 DDG</h3>
            <p>Autopartner GmbH<br />American Cars<br />{site.street}<br />{site.city}</p>
            <h3>Vertreten durch</h3>
            <p>Geschäftsführer: Willi Lückel, Christoph Lückel</p>
            <h3>Kontakt</h3>
            <p>Telefon: {site.phone}<br />E-Mail: <a href={`mailto:${site.mail}`}>{site.mail}</a></p>
            <h3>Registereintrag</h3>
            <p>Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Hagen<br />Registernummer: HRB 2828</p>
            <h3>Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE153315731</p>
            <h3>Berufsrechtliche Angaben</h3>
            <p>Kfz-Meisterbetrieb. Zuständige Kammer: Handwerkskammer Dortmund. Berufsbezeichnung: [Kfz-Techniker-Meister, verliehen in der Bundesrepublik Deutschland – bitte bestätigen].</p>
            <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
            <p>Christoph Lückel<br />{site.street}<br />{site.city}</p>
            <h3>Verbraucherstreitbeilegung</h3>
            <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <h3>Haftung für Inhalte</h3>
            <p>Wir erstellen die Inhalte dieser Seite mit größter Sorgfalt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Preise und Fahrzeugdaten sind freibleibend. Irrtümer und Zwischenverkauf bleiben vorbehalten.</p>
            <h3>Haftung für Links</h3>
            <p>Unsere Seite enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Verantwortlich ist stets der jeweilige Anbieter. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Links umgehend.</p>
            <h3>Urheberrecht</h3>
            <p>Die Inhalte und Werke auf dieser Seite unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung des jeweiligen Rechteinhabers.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
