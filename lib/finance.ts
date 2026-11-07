// Beispielrechnung Finanzierung (Santander Consumer Bank), Annuitätendarlehen ohne Schlussrate.
export const EFF = 6.99; // effektiver Jahreszins in %
export const TERMS = [24, 36, 48, 60, 72, 84];

export function calc(price: number, down: number, months: number) {
  const loan = Math.max(0, price - down);
  const i = Math.pow(1 + EFF / 100, 1 / 12) - 1; // Monatszins aus effektivem Jahreszins
  const rate = loan === 0 ? 0 : (loan * i) / (1 - Math.pow(1 + i, -months));
  const nominal = i * 12 * 100; // gebundener Sollzins p. a. in %
  return { loan, rate, nominal, total: rate * months };
}
export const eur = (n: number) =>
  n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
