import { chatSvg, phoneSvg } from '@/lib/icons';
import { site } from '@/lib/site';

export default function Fab() {
  return (
    <div className='fab'>
      <a className='fab-w' href={`https://wa.me/${site.whatsapp}`} target='_blank' rel='noopener noreferrer' aria-label='Per WhatsApp schreiben' dangerouslySetInnerHTML={{ __html: chatSvg }} />
      <a className='fab-c' href={`tel:${site.phoneTel}`} aria-label={`Anrufen: ${site.phone}`} dangerouslySetInnerHTML={{ __html: phoneSvg }} />
    </div>
  );
}
