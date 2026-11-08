export default function TuevBadge({ size = 'l' }: { size?: 's' | 'l' }) {
  return (
    <span className={'tuevbadge ' + size}>
      <span className='tb-txt'>Prüfstützpunkt des</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/img/tuev-nord-kontur.png' alt='TÜV NORD' width={694} height={126} />
    </span>
  );
}
