'use client';
import { useEffect, useState } from 'react';
import { chatSvg, mailSvg, phoneSvg } from '@/lib/icons';
import { site } from '@/lib/site';

export default function Fab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 420);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className={'fab' + (show ? ' show' : '')}>
      <a className='fab-w' href={`https://wa.me/${site.whatsapp}`} target='_blank' rel='noopener noreferrer' aria-label='Per WhatsApp schreiben' tabIndex={show ? 0 : -1} dangerouslySetInnerHTML={{ __html: chatSvg }} />
      <a className='fab-m' href={`mailto:${site.mail}`} aria-label={`E-Mail schreiben: ${site.mail}`} tabIndex={show ? 0 : -1} dangerouslySetInnerHTML={{ __html: mailSvg }} />
      <a className='fab-c' href={`tel:${site.phoneTel}`} aria-label={`Anrufen: ${site.phone}`} tabIndex={show ? 0 : -1} dangerouslySetInnerHTML={{ __html: phoneSvg }} />
    </div>
  );
}
