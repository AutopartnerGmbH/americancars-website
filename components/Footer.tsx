import { nav } from '@/lib/nav';
import { site } from '@/lib/site';

const cols: [string, [string, string][]][] = [
  ['Fahrzeuge', [['Fahrzeugangebote', '/fahrzeuge'], ['Ankauf', '/#ankauf'], ['Finanzierung', '/#finanzierung']]],
  ['Service', nav[1].sub as [string, string][]],
  ['Dein Autopartner', nav[2].sub as [string, string][]],
  ['Unternehmen', [['Karriere', '/karriere'], ['Kundenstimmen', '/#bewertungen'], ['Kontakt', '/kontakt']]],
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
      <div className='wrap legal'>
        <span>© {site.name} · Prüfstützpunkt TÜV NORD</span>
        <span>
          <a href={`${site.oldSite}/impressum`}>Impressum</a>
          <a href={`${site.oldSite}/datenschutz`}>Datenschutz</a>
          <a href='https://www.instagram.com/autopartner_american.cars/'>Instagram</a>
          <a href='https://www.youtube.com/@AutopartnerAmericanCars'>YouTube</a>
        </span>
      </div>
    </footer>
  );
}
