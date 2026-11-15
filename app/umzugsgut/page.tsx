import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umzugsgut: Auto aus den USA importieren',
  description:
    'Umzugsgut beim Fahrzeug-Import aus den USA: Voraussetzungen, Ablauf, Zoll und Zulassung. Prüfung und Umrüstung in Hagen, Prüfstützpunkt des TÜV NORD.',
};

const faq: [string, string][] = [
  ['Wer kann sein Auto als Umzugsgut einführen?', 'Wer seinen Wohnsitz von außerhalb der EU nach Deutschland verlegt. Das Fahrzeug muss Ihnen gehören und Sie müssen es vor dem Umzug mindestens 6 Monate genutzt haben. Der Wohnsitz außerhalb der EU muss in der Regel mindestens 12 Monate bestanden haben. Ob die Voraussetzungen erfüllt sind, entscheidet im Einzelfall der Zoll.'],
  ['Bis wann muss ich das Fahrzeug nach dem Umzug anmelden?', 'Innerhalb von 12 Monaten nach Ihrem Umzug.'],
  ['Darf ich das Fahrzeug nach der Einfuhr verkaufen?', 'Nicht sofort. Für 12 Monate ab Annahme der Zollanmeldung dürfen Sie das Fahrzeug nicht verkaufen, verschenken oder verleihen.'],
  ['Kann ich das Fahrzeug schon vor dem Umzug einführen?', 'Das ist in der Regel möglich, wenn Sie eine Sicherheit leisten und sich verpflichten, Ihren Wohnsitz innerhalb von 6 Monaten nach Deutschland zu verlegen. Sprechen Sie uns vorher an.'],
  ['Übernehmen Sie die Zollanmeldung für mich?', 'Ja, wir können die Zollanmeldung für Sie durchführen. Sie können sie auch selbst einreichen. Prüfung, Umrüstung und TÜV-Abnahme erledigen wir in Hagen.'],
];

export default function Umzugsgut() {
  return (
    <main id='top'>
<section className='post'><div className='wrap'>
<aside><span className='eyebrow'>Ratgeber · Import</span><h1>Umzugsgut beim Fahrzeug-Import</h1><p className='lead'>Wenn Sie aus den USA nach Deutschland ziehen und Ihr eigenes Auto mitbringen: So funktioniert es und das erledigen wir für Sie.</p></aside>
<article>
<h3>Was bedeutet Umzugsgut?</h3>
<p>Wer seinen Wohnsitz aus einem Land außerhalb der EU nach Deutschland verlegt, darf seinen Hausrat unter bestimmten Bedingungen zollfrei einführen. Der Zoll nennt das Übersiedlungsgut, im Alltag sagt man Umzugsgut. Auch das eigene Auto kann dazugehören.</p>
<p>Der Vorteil ist groß: Ohne diese Befreiung fallen beim Import eines Pkw aus einem Nicht-EU-Land in der Regel 10 % Zoll und 19 % Einfuhrumsatzsteuer an. Als Umzugsgut entfallen diese Abgaben. Die Abgaben können sich ändern, hier gelten die jeweils gültigen gesetzlichen Regelungen.</p>

<h3>Die Voraussetzungen</h3>
<ul>
<li>Sie haben Ihren gewöhnlichen Wohnsitz in der Regel mindestens 12 Monate ohne Unterbrechung außerhalb der EU gehabt und verlegen ihn nach Deutschland.</li>
<li>Das Fahrzeug gehört Ihnen und Sie haben es im Ausland mindestens 6 Monate vor dem Umzug genutzt.</li>
<li>Sie nutzen es in Deutschland weiter privat, zum gleichen Zweck wie vorher.</li>
<li>Sie melden das Fahrzeug innerhalb von 12 Monaten nach Ihrem Umzug beim Zoll an.</li>
<li>Sie dürfen das Fahrzeug 12 Monate lang nach der Zollanmeldung nicht verkaufen, verschenken oder verleihen.</li>
</ul>
<p>Nicht als Umzugsgut gelten Nutzfahrzeuge und gewerblich genutzte Gegenstände. Wer das Fahrzeug schon vor dem Umzug einführen möchte, muss in der Regel eine Sicherheit leisten und sich verpflichten, den Wohnsitz innerhalb von 6 Monaten nach Deutschland zu verlegen.</p>

<h3>So läuft es ab</h3>
<ol>
<li>Sie schildern uns Ihren Fall. Wir prüfen gemeinsam, ob Ihr Fahrzeug als Umzugsgut in Frage kommt.</li>
<li>Die Zollanmeldung für Übersiedlungsgut wird beim Zoll eingereicht, mit Nachweisen zu Wohnsitz und Fahrzeugbesitz. Wir können die Zollanmeldung für Sie durchführen. Sie können sie auch selbst einreichen.</li>
<li>Nach der Freigabe kommt das Fahrzeug in unsere Werkstatt. Wir erstellen den Prüfumfang für die deutsche Zulassung und führen nötige Umrüstungen durch.</li>
<li>Die Abnahme erfolgt bei uns im Haus als Prüfstützpunkt des TÜV NORD. Danach steht der Zulassung nichts mehr im Weg.</li>
</ol>

<h3>Was wir für Sie tun</h3>
<p>Wir sind KFZ-Meisterwerkstatt und kennen amerikanische Fahrzeuge in jedem Detail. Wir kümmern uns um Prüfung, Umrüstung und die Vorbereitung der deutschen Zulassung. So bekommen Sie alles aus einer Hand, ohne zwischen mehreren Stellen zu pendeln.</p>

<p className='box'><b>Wichtig:</b> Das ist eine allgemeine Orientierung und keine Rechtsberatung. Ob Ihr Fahrzeug als Umzugsgut anerkannt wird, entscheidet im Einzelfall der Zoll. Sprechen Sie uns am besten vor dem Umzug an.</p>
<p>Mehr dazu: <a className='link' href='/import-umruestung'>Import und Umrüstung</a> · <a className='link' href='/tuev-und-homologation'>TÜV und Homologation</a> · <a className='link' href='/zoll-und-einfuhrumsatzsteuer-us-import'>Zoll und Einfuhrumsatzsteuer</a></p>
<h3>Häufige Fragen</h3>
{faq.map(([q, a]) => (
<details key={q} className='pfaq'><summary>{q}</summary><p>{a}</p></details>
))}
<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }) }} />
<p className='cta2'><a className='link' href='/#werkstatt'>Umzugsgut anfragen</a></p>
</article>
</div></section>
    </main>
  );
}
