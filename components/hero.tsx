import Image from 'next/image'
import { artist, releases, remixes } from '@/lib/site-data'

const stats = [
  { k: 'Genre', v: artist.genre },
  { k: 'Based', v: artist.based },
  { k: 'Releases', v: `56+` },
  { k: 'Remixes', v: `68` },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* atmospheric backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-endru-van.png"
          alt="Endru Van performing behind a CDJ setup in a fog-filled warehouse"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      {/* single ice-blue beam — the one loud element */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[18%] w-px bg-linear-to-b from-transparent via-primary to-transparent opacity-70 blur-[1px]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
          <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{artist.role}</span>
          <span className="text-muted-foreground">/</span>
          <span className="text-muted-foreground">{artist.genre}</span>
        </div>

        <h1 className="text-balance font-sans text-6xl font-bold uppercase leading-[0.86] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Endru
          <br />
          <span className="text-primary">Van</span>
        </h1>

        <div className="flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            {artist.tagline}
          </p>

          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s) => (
              <div key={s.k} className="flex flex-col gap-1">
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {s.k}
                </dt>
                <dd className="font-mono text-sm text-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#releases"
            className="bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Latest releases
          </a>
          <a
            href={artist.socials.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Spotify
          </a>
          <a
            href={artist.socials.beatport}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Beatport
          </a>
        </div>
      </div>
    </section>
  )
}
