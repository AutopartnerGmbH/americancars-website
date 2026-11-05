// Google-Bewertungen. Mit GOOGLE_PLACES_API_KEY und GOOGLE_PLACE_ID (Vercel-Einstellungen) werden
// die neuesten 5-Sterne-Bewertungen automatisch geladen und stündlich aktualisiert.
type R = { author_name: string; rating: number; text: string; relative_time_description: string; profile_photo_url?: string };
type Result = { rating?: number; user_ratings_total?: number; reviews?: R[] };

async function load(): Promise<Result | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const id = process.env.GOOGLE_PLACE_ID;
  if (!key || !id) return null;
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=rating,user_ratings_total,reviews&reviews_sort=newest&language=de&key=${key}`;
    const r = await fetch(url, { next: { revalidate: 3600 } });
    const j = await r.json();
    return j.status === 'OK' ? j.result : null;
  } catch {
    return null;
  }
}

const G = (
  <svg viewBox='0 0 48 48' width='22' height='22' aria-hidden='true'>
    <path fill='#EA4335' d='M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z' />
    <path fill='#4285F4' d='M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.2 5.5-4.7 7.2l7.6 5.9c4.4-4.1 6.9-10.1 6.9-17.6z' />
    <path fill='#FBBC05' d='M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.9-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z' />
    <path fill='#34A853' d='M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.8 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z' />
  </svg>
);
const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);

export default async function Reviews() {
  const data = await load();
  const live = (data?.reviews ?? []).filter((r) => r.rating === 5 && r.text).slice(0, 5);
  const rating = data?.rating ? data.rating.toFixed(1).replace('.', ',') : '4,8';
  const total = data?.user_ratings_total ?? 140;
  const place = process.env.GOOGLE_PLACE_ID;
  const all = 'https://www.google.com/maps/search/?api=1&query=Autopartner+GmbH+Auf+dem+L%C3%B6lfert+37+Hagen';
  const write = place ? `https://search.google.com/local/writereview?placeid=${place}` : all;

  return (
    <section className='rev s-a' id='bewertungen'>
      <div className='wrap'>
        <span className='eyebrow'>Kundenstimmen</span>
        <div className='gsum'>
          {G}
          <b>{rating}</b>
          <span className='gst'>{stars(5)}</span>
          <span>{data ? `${total} Google-Bewertungen` : `über ${total} Google-Bewertungen`}</span>
        </div>
        <div className='grow'>
          {live.length > 0 ? (
            live.map((r, i) => (
              <article className='gcard' key={i}>
                <header>
                  {r.profile_photo_url ? (
                    <img src={r.profile_photo_url} alt='' referrerPolicy='no-referrer' loading='lazy' />
                  ) : (
                    <span className='av'>{r.author_name.slice(0, 1)}</span>
                  )}
                  <div><b>{r.author_name}</b><small>{r.relative_time_description}</small></div>
                  {G}
                </header>
                <div className='gst'>{stars(5)}</div>
                <p>{r.text}</p>
              </article>
            ))
          ) : (
            <article className='gcard'>
              <header>
                <span className='av'>G</span>
                <div><b>Kundenbewertung</b><small>bei Google</small></div>
                {G}
              </header>
              <div className='gst'>{stars(5)}</div>
              <p>Top Fahrzeuge, super Team, tolle Werkstatt und dazu noch ehrlich!</p>
            </article>
          )}
        </div>
        <p className='glinks'>
          <a className='link' href={all} target='_blank' rel='noopener noreferrer'>Alle Bewertungen bei Google</a>
          <a className='link' href={write} target='_blank' rel='noopener noreferrer'>Bewertung schreiben</a>
          <span className='gsum' style={{ margin: 0 }}>157 Bewertungen bei mobile.de</span>
        </p>
      </div>
    </section>
  );
}
