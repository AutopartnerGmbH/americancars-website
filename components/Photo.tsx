import { availablePhotos } from '@/lib/photos';

// Zeigt das Foto, falls die Datei hochgeladen ist. Externe Bilder (https://...) werden immer gezeigt.
export default function Photo({ src, alt }: { src: string; alt: string }) {
  if (src.startsWith('http') || availablePhotos.includes(src)) {
    return <img src={src} alt={alt} loading='lazy' />;
  }
  return <span className='ph' role='img' aria-label={alt}></span>;
}
