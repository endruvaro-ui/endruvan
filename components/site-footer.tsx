import { artist } from '@/lib/site-data'

const socials = [
  { label: 'Instagram', href: artist.socials.instagram },
  { label: 'Spotify', href: artist.socials.spotify },
  { label: 'Beatport', href: artist.socials.beatport },
  { label: 'SoundCloud', href: artist.socials.soundcloud },
  { label: 'YouTube', href: artist.socials.youtube },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Bookings worldwide
            </p>
            <h2 className="text-balance text-4xl font-bold uppercase leading-none tracking-tight md:text-6xl">
              Book Endru Van
            </h2>
          </div>
          <a
            href={`mailto:${artist.bookingEmail}`}
            className="w-fit bg-primary px-7 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            {artist.bookingEmail}
          </a>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} {artist.name} — All rights reserved
        </p>
      </div>
    </footer>
  )
}
