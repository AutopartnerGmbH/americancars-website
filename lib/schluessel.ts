import type { Page } from './pages';
import type { Extra } from './extras';

export const schluesselPage: Page = {
  slug: 'ersatzschluessel-us-fahrzeuge',
  title: 'Ersatzschlüssel für US-Fahrzeuge in Hagen',
  eyebrow: 'KFZ-Meisterwerkstatt · Service',
  lead: 'Sie haben ein US-Fahrzeug mit nur einem Schlüssel? Wir fertigen Ersatz- und Zweitschlüssel für viele Fahrzeuge von Ford, Chevrolet, Chrysler, Jeep und Dodge.',
  desc: 'Zweitschlüssel für Ford, Chevrolet, Chrysler, Jeep und Dodge: Zündschlüssel, Fernbedienung und Funkschlüssel in Hagen. Jetzt Termin anfragen.',
  blocks: [
    {
      h: 'Schlüssel für Mustang, Camaro, Challenger, Pacifica und mehr',
      p: ['Ob Ford Mustang, Chevrolet Camaro, Dodge Challenger oder Chrysler Pacifica: Mit Expertise, Equipment und Erfahrung fertigen wir in unserer Meisterwerkstatt in Hagen Schlüssel für viele US-Fahrzeuge.'],
    },
    { h: 'Das können wir für Sie anfertigen', ul: ['Zündschlüssel, auch mit Schlüsselbart nach Vorlage geschliffen', 'Fernbedienungen', 'Funkschlüssel'] },
    { h: 'Was wir dafür brauchen', ol: ['Das Fahrzeug', 'Einen vorhandenen Schlüssel'], p: ['Bitte vereinbaren Sie vorher einen Termin, damit wir die Schlüsselart bei Ihrem Fahrzeug klären können.'] },
    {
      h: 'Wichtig zu wissen',
      p: ['Ob und wie wir einen Schlüssel anfertigen können, hängt vom Fahrzeug ab. Wir prüfen jedes Fahrzeug einzeln. Der Preis richtet sich nach Fahrzeug und Schlüsselart und wird nach der Prüfung genannt.'],
    },
    { h: 'Für alle Kunden', p: ['Der Service steht jedem offen, auch für Fahrzeuge, die Sie nicht bei uns gekauft haben.'] },
    { h: 'Mehr aus unserer Werkstatt', links: [['Alle Werkstatt-Leistungen', '/werkstatt-leistungen'], ['Fahrzeuge im Bestand', '/fahrzeuge'], ['Kontakt und Termin', '/kontakt']] },
  ],
  cta: ['Termin anfragen', '/kontakt'],
};

export const schluesselExtra: Extra = {
  faq: [
    ['Welche Marken und Modelle machen Sie?', 'Wir arbeiten an Fahrzeugen der Marken Ford, Chevrolet, Chrysler, Jeep und Dodge. Welche Schlüssel für Ihr Modell und Baujahr möglich sind, prüfen wir einzeln. Fragen Sie uns einfach an.'],
    ['Was kostet ein Ersatzschlüssel?', 'Der Preis hängt vom Fahrzeug und von der Schlüsselart ab. Nach der Prüfung nennen wir Ihnen den Preis.'],
    ['Kann ich auch einen Funkschlüssel oder eine Fernbedienung bekommen?', 'Ja, grundsätzlich fertigen wir Zündschlüssel, Fernbedienungen und Funkschlüssel an. Ob das bei Ihrem Fahrzeug geht, klären wir vorab.'],
    ['Brauche ich einen vorhandenen Schlüssel?', 'Ja. Wir brauchen das Fahrzeug und einen vorhandenen Schlüssel.'],
    ['Muss ich das Fahrzeug bei Ihnen gekauft haben?', 'Nein. Der Service gilt für alle Kunden.'],
    ['Wie vereinbare ich einen Termin?', 'Rufen Sie uns an unter 02334 / 80814-0, schreiben Sie uns per WhatsApp oder über das Kontaktformular.'],
  ],
};
