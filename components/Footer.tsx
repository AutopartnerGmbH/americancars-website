import { nav } from '@/lib/nav';
import { site } from '@/lib/site';

const cols: [string, [string, string][]][] = [
  ['Fahrzeuge', [['Fahrzeugangebote', '/fahrzeuge'], ['Ankauf', '/#ankauf'], ['Finanzierung', '/#finanzierung']]],
  ['Service', nav[1].sub as [string, string][]],
  ['Dein Autopartner', nav[2].sub as [string, string][]],
  ['Unternehmen', [['Karriere', '/karriere'], ['Kundenstimmen', '/#bewertungen'], ['Kontakt', '/kontakt']]],
];

const searches: [string, string][] = [
  ['US-Fahrzeuge Hagen', '/fahrzeuge'],
  ['US-Autohändler NRW', '/fahrzeuge'],
  ['Dodge RAM kaufen', '/fahrzeuge/marke/dodge'],
  ['Chevrolet Silverado kaufen', '/fahrzeuge/marke/chevrolet'],
  ['Ford Mustang kaufen', '/fahrzeuge/marke/ford'],
  ['Ford Bronco kaufen', '/fahrzeuge/marke/ford'],
  ['Chrysler Pacifica kaufen', '/fahrzeuge/marke/chrysler'],
  ['Pickup kaufen', '/fahrzeuge/kategorie/pickup'],
  ['US-Import Hagen', '/import-umruestung'],
  ['Auto aus den USA importieren', '/import-umruestung'],
  ['Umzugsgut Auto USA', '/umzugsgut'],
  ['Carfax Fahrzeughistorie', '/carfax'],
  ['TÜV Hagen', '/tuev-und-homologation'],
  ['Vollabnahme § 21 StVZO', '/tuev-und-homologation'],
  ['HU und AU Hagen', '/tuev-und-homologation'],
  ['KFZ-Meisterwerkstatt Hagen', '/werkstatt-service'],
  ['Klimaservice Hagen', '/werkstatt-service'],
  ['Unfallreparatur Hagen', '/unfall-instandsetzung'],
  ['US-Auto tunen', '/us-fahrzeug-tunen'],
  ['Fahrzeugankauf Hagen', '/#ankauf'],
];

export default function Footer() {
  return (
    <footer>
      <div className='wrap map'>
        {cols.map(([h, links]) => (
          <div key={h}>
            <h4>{h}</h4>
            <ul>
              {links.map(([l, href]) => (
                <li key={l}><a href={href}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='wrap seo'>
        <h4>Häufig gesucht</h4>
        <p>
          Autopartner GmbH – American Cars in Hagen: US-Fahrzeuge kaufen, importieren und umrüsten, KFZ-Meisterwerkstatt für alle Marken und Prüfstützpunkt TÜV NORD für Hagen, Wetter, Herdecke, Iserlohn, Dortmund und das Ruhrgebiet.
        </p>
        <ul>
          {searches.map(([l, h]) => (
            <li key={l}><a href={h}>{l}</a></li>
          ))}
        </ul>
      </div>
      <div className='wrap legal'>
        <span>© {site.name} · Prüfstützpunkt TÜV NORD</span>
        <span>
          <a href='/impressum'>Impressum</a>
          <a href='/datenschutz'>Datenschutz</a>
          <a href='https://www.instagram.com/autopartner_american.cars/'>Instagram</a>
          <a href='https://www.youtube.com/@AutopartnerAmericanCars'>YouTube</a>
        </span>
      </div>
    </footer>
  );
}
