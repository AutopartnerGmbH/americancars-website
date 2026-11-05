import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Datenschutzerklärung', description: 'Datenschutzerklärung der Autopartner GmbH – American Cars, Hagen.' };

export default function Datenschutz() {
  return (
    <main id='top'>
      <section className='post s-b nobord'>
        <div className='wrap'>
          <aside>
            <span className='eyebrow'>Rechtliches</span>
            <h1>Datenschutzerklärung</h1>
            <p className='lead'>Hier erfahren Sie, welche Daten wir beim Besuch dieser Seite verarbeiten und wofür.</p>
          </aside>
          <article>
            <h3>1. Verantwortlicher</h3>
            <p>Autopartner GmbH – American Cars, {site.street}, {site.city}<br />Telefon: {site.phone}<br />E-Mail: <a href={`mailto:${site.mail}`}>{site.mail}</a></p>

            <h3>2. Hosting und Server-Logfiles</h3>
            <p>Diese Seite wird bei Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf werden automatisch technische Daten verarbeitet, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp und Betriebssystem. Das ist technisch nötig, damit die Seite ausgeliefert werden kann und sicher bleibt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb). Mit Vercel besteht ein Auftragsverarbeitungsvertrag. Eine Übermittlung in die USA stützt sich auf die EU-Standardvertragsklauseln beziehungsweise das EU-US Data Privacy Framework.</p>

            <h3>3. Cookies und Tracking</h3>
            <p>Wir setzen auf dieser Seite keine Cookies zu Analyse- oder Werbezwecken ein und verwenden kein Tracking.</p>

            <h3>4. Schriftarten</h3>
            <p>Die verwendeten Schriftarten liegen auf unserem eigenen Server. Es werden keine Daten an Google übertragen.</p>

            <h3>5. Anfragen über die Formulare</h3>
            <p>Wenn Sie ein Formular nutzen (Kontakt, Werkstatttermin, Fahrzeuganfrage, Ankauf), verarbeiten wir Ihre Angaben, also Name, Telefonnummer oder E-Mail, Fahrzeugdaten, Ihre Nachricht und gegebenenfalls hochgeladene Fotos, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) beziehungsweise Art. 6 Abs. 1 lit. f DSGVO. Für den Versand der Formulare per E-Mail nutzen wir den Dienst FormSubmit (formsubmit.co), der Ihre Eingaben an uns weiterleitet. Dabei kann Ihre IP-Adresse verarbeitet werden. Eine Übermittlung in Drittländer ist dabei nicht auszuschließen. Wir löschen Anfragen, sobald sie erledigt sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

            <h3>6. Kontakt per Telefon, E-Mail und WhatsApp</h3>
            <p>Wenn Sie uns anrufen, per E-Mail oder per WhatsApp schreiben, verarbeiten wir Ihre Kontaktdaten und den Inhalt Ihrer Nachricht zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b und f DSGVO). Der WhatsApp-Button auf dieser Seite ist nur ein Link. Erst wenn Sie ihn anklicken, öffnet sich WhatsApp (WhatsApp Ireland Limited, Meta). Dabei gelten die Datenschutzbestimmungen von WhatsApp.</p>

            <h3>7. Google-Bewertungen und Google Maps</h3>
            <p>Die auf dieser Seite angezeigten Google-Bewertungen laden wir über unseren Server von Google ab. Ihr Browser baut dazu keine Verbindung zu Google auf, es werden also keine Daten von Ihnen an Google übertragen. Die Links zu Google Maps und zur Bewertungsabgabe sind einfache Verweise. Erst nach Ihrem Klick verlassen Sie unsere Seite, dann gelten die Datenschutzbestimmungen von Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).</p>

            <h3>8. Externe Links</h3>
            <p>Unsere Seite verlinkt auf Instagram, YouTube, mobile.de und andere Angebote. Mit dem Anklicken verlassen Sie unsere Seite. Für die Datenverarbeitung dort sind die jeweiligen Anbieter verantwortlich.</p>

            <h3>9. Ihre Rechte</h3>
            <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung (Art. 21). Wenn Sie uns eine Einwilligung gegeben haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dazu an die oben genannte Adresse.</p>

            <h3>10. Beschwerderecht</h3>
            <p>Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für uns ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, <a href='https://www.ldi.nrw.de' target='_blank' rel='noopener noreferrer'>www.ldi.nrw.de</a>.</p>

            <h3>11. Aktualität</h3>
            <p>Wir passen diese Erklärung an, wenn sich unsere Seite oder die rechtlichen Vorgaben ändern. Es gilt die jeweils hier veröffentlichte Fassung.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
