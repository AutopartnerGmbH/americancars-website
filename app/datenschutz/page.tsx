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

            <h3>3. Verschlüsselung</h3>
            <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Sie erkennen das an „https://“ in der Adresszeile und am Schloss-Symbol Ihres Browsers. Daten, die Sie an uns übermitteln, können dadurch nicht von Dritten mitgelesen werden.</p>

            <h3>4. Cookies und Tracking</h3>
            <p>Technisch notwendige Daten (zum Beispiel Ihre Cookie-Auswahl und Ihre Merkliste, gespeichert im lokalen Speicher Ihres Browsers; die Merkliste verlässt Ihr Gerät nicht) verarbeiten wir auf Grundlage von § 25 Abs. 2 TDDDG. Marketing-Dienste laden wir nur, wenn Sie im Cookie-Hinweis ausdrücklich zustimmen (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO). Ohne Ihre Zustimmung werden keine Daten an Google oder Meta übertragen.</p>
            <p>Bei Zustimmung können folgende Dienste eingesetzt werden: zur Reichweitenmessung Google Analytics und, um Besuchern passende Fahrzeuge auch auf anderen Seiten anzuzeigen (Remarketing), Google Ads / Google Tag (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) und Meta Pixel (Meta Platforms Ireland Limited, Merrion Road, Dublin 4, Irland). Dabei werden Cookies gesetzt und Daten wie IP-Adresse, aufgerufene Seiten und Geräteinformationen übertragen, auch in Drittländer wie die USA. Ihre Einwilligung können Sie jederzeit über den Link „Cookie-Einstellungen“ in der Fußzeile mit Wirkung für die Zukunft widerrufen.</p>

            <p>Zur Reichweitenmessung kann außerdem Matomo eingesetzt werden. Das ist eine Open-Source-Software, die auf unserem eigenen Server läuft, die IP-Adresse wird gekürzt. Es werden keine Daten an Dritte weitergegeben.</p>

            <h3>5. Schriftarten</h3>
            <p>Die verwendeten Schriftarten liegen auf unserem eigenen Server. Es werden keine Daten an Google übertragen.</p>

            <h3>6. Anfragen über die Formulare</h3>
            <p>Wenn Sie ein Formular nutzen (Kontakt, Werkstatttermin, Fahrzeuganfrage, Ankauf), verarbeiten wir Ihre Angaben, also Name, Telefonnummer oder E-Mail, Fahrzeugdaten, Ihre Nachricht und gegebenenfalls hochgeladene Fotos, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) beziehungsweise Art. 6 Abs. 1 lit. f DSGVO. Für den Versand der Formulare per E-Mail nutzen wir den Dienst FormSubmit (formsubmit.co), der Ihre Eingaben an uns weiterleitet. Dabei kann Ihre IP-Adresse verarbeitet werden. Eine Übermittlung in Drittländer ist dabei nicht auszuschließen. Wir löschen Anfragen, sobald sie erledigt sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

            <h3>7. Kunden- und Vertragsdaten</h3>
            <p>Wenn Sie bei uns ein Fahrzeug kaufen oder eine Werkstattleistung beauftragen, verarbeiten wir Ihre Kunden- und Vertragsdaten nur für die Vertragsabwicklung (Art. 6 Abs. 1 lit. b DSGVO). Nach Abschluss löschen wir die Daten, soweit keine gesetzlichen Aufbewahrungsfristen bestehen. Wir geben Ihre Daten nur an Dritte weiter, wenn das für die Abwicklung nötig ist, zum Beispiel an das mit der Zahlungsabwicklung beauftragte Kreditinstitut oder an die Finanzierungs- und Garantiepartner, wenn Sie diese Leistungen wünschen.</p>

            <h3>8. Kontakt per Telefon, E-Mail und WhatsApp</h3>
            <p>Wenn Sie uns anrufen, per E-Mail oder per WhatsApp schreiben, verarbeiten wir Ihre Kontaktdaten und den Inhalt Ihrer Nachricht zur Bearbeitung Ihres Anliegens (Art. 6 Abs. 1 lit. b und f DSGVO). Der WhatsApp-Button auf dieser Seite ist nur ein Link. Erst wenn Sie ihn anklicken, öffnet sich WhatsApp (WhatsApp Ireland Limited, Meta). Dabei gelten die Datenschutzbestimmungen von WhatsApp.</p>

            <h3>9. Newsletter</h3>
            <p>Wenn Sie unseren Newsletter beziehen möchten, brauchen wir Ihre E-Mail-Adresse und Ihre Bestätigung, dass Sie der Inhaber der Adresse sind und den Newsletter wünschen (Double-Opt-In, Art. 6 Abs. 1 lit. a DSGVO). Weitere Daten erheben wir nicht oder nur freiwillig. Sie können Ihre Einwilligung jederzeit widerrufen, zum Beispiel über den Abmeldelink im Newsletter. Danach löschen wir Ihre Daten.</p>

            <h3>10. Google-Bewertungen und Google Maps</h3>
            <p>Die auf dieser Seite angezeigten Google-Bewertungen laden wir über unseren Server von Google ab. Ihr Browser baut dazu keine Verbindung zu Google auf, es werden also keine Daten von Ihnen an Google übertragen. Die Links zu Google Maps und zur Bewertungsabgabe sind einfache Verweise. Erst nach Ihrem Klick verlassen Sie unsere Seite, dann gelten die Datenschutzbestimmungen von Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).</p>

            <h3>11. Externe Links</h3>
            <p>Unsere Seite verlinkt auf Instagram, YouTube, mobile.de und andere Angebote. Mit dem Anklicken verlassen Sie unsere Seite. Für die Datenverarbeitung dort sind die jeweiligen Anbieter verantwortlich.</p>

            <h3>12. Widerspruch gegen Werbe-Mails</h3>
            <p>Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Bei unverlangter Zusendung von Werbung, etwa durch Spam-E-Mails, behalten wir uns rechtliche Schritte vor.</p>

            <h3>13. Ihre Rechte</h3>
            <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch gegen die Verarbeitung (Art. 21). Wenn Sie uns eine Einwilligung gegeben haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich dazu an die oben genannte Adresse.</p>

            <h3>14. Beschwerderecht</h3>
            <p>Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig für uns ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf, <a href='https://www.ldi.nrw.de' target='_blank' rel='noopener noreferrer'>www.ldi.nrw.de</a>.</p>

            <h3>15. Aktualität</h3>
            <p>Wir passen diese Erklärung an, wenn sich unsere Seite oder die rechtlichen Vorgaben ändern. Es gilt die jeweils hier veröffentlichte Fassung.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
