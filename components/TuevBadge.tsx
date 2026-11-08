export default function TuevBadge({ size = 'l' }: { size?: 's' | 'l' }) {
  return (
    <span className={'tuevbadge ' + size}>
      <span className='tb-txt'>Prüfstützpunkt des</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/img/tuev-nord.png' alt='TÜV NORD' width={666} height={98} />
    </span>
  );
}
