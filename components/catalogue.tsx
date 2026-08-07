import { ArrowUpRight } from 'lucide-react'
import { artist, preSaves, remixes } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Catalogue() {
  return (
    <section
      id="catalogue"
      className="border-y border-border bg-card/40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          label="02 / Catalogue"
          title="Pre-save & remixes"
          description="Upcoming releases on Proton, plus the official remix catalogue."
        />

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="min-w-0 flex-1">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Pre-save
            </h3>
            <ul className="mt-5 flex flex-col border-t border-border">
              {preSaves.map((item) => (
                <li key={item.title} className="border-b border-border">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
                  >
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="truncate text-sm font-semibold uppercase tracking-tight md:text-base">
                        {item.title}
                      </span>
                      <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.artists}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Official remixes
            </h3>
            <ul className="mt-5 flex flex-col border-t border-border">
              {remixes.map((item) => (
                <li key={item.title} className="border-b border-border">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
                  >
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="truncate text-sm font-semibold uppercase tracking-tight md:text-base">
                        {item.title}
                      </span>
                      <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.original}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            {artist.playlist.name}
          </h3>
          <iframe
            title={`${artist.playlist.name} on Spotify`}
            src={`https://open.spotify.com/embed/playlist/${artist.playlist.id}?utm_source=generator&theme=0`}
            width="100%"
            height={352}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="w-full border border-border bg-card"
          />
        </div>
      </div>
    </section>
  )
}
