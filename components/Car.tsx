import Photo from '@/components/Photo';
import FavButton from '@/components/Fav';
import type { Vehicle } from '@/lib/vehicles';

export default function Car({ v }: { v: Vehicle }) {
  return (
    <div className='carw'>
    <FavButton slug={v.slug} />
    <a className='car' href={`/fahrzeuge/${v.slug}`}>
      <div className='pic'>
        {v.image ? (
          <Photo src={v.image} alt={v.alt} />
        ) : (
          <>
            <span className='ph'></span>
            <small>Foto folgt</small>
          </>
        )}
        <span className='tag'>{v.tag}</span>
      </div>
      <div className='cbody'>
        <h3>{v.name}</h3>
        <span className='meta'>{v.meta}</span>
        <div className='pr'>
          <b>{v.price}</b>
        </div>
      </div>
    </a>
    </div>
  );
}
