const items = [
  'Melodic Techno',
  'Out now on Beatport',
  'Nocturne Drift',
  'Warehouse sets',
  'Cold Signal EP',
  'Bookings open',
]

export function Marquee() {
  const track = [...items, ...items, ...items, ...items]

  return (
    <div className="relative flex overflow-hidden border-y border-border bg-card py-3">
      <div className="marquee-track flex w-max shrink-0 items-center gap-8 pr-8">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
          >
            {item}
            <span aria-hidden="true" className="text-primary">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
