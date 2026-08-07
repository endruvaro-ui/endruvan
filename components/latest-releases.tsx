'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { type Release, releases } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

type Platform = 'spotify' | 'beatport'

function spotifyEmbedSrc(release: Release) {
  return `https://open.spotify.com/embed/${release.spotifyType}/${release.spotifyId}?utm_source=generator&theme=0`
}

function beatportEmbedSrc(release: Release) {
  return `https://embed.beatport.com/?id=${release.beatportId}&type=${release.beatportType}`
}

export function LatestReleases() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [platform, setPlatform] = useState<Platform>('spotify')

  const release = releases[activeIndex]
  const hasBeatport = Boolean(release.beatportId)
  const active: Platform = hasBeatport ? platform : 'spotify'

  return (
    <section
      id="releases"
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        label="01 / Discography"
        title="Latest releases"
        description="Stream on Spotify or buy the extended mixes on Beatport. Select a release to load its player."
      />

      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-14">
        {/* Release list */}
        <ol className="flex min-w-0 flex-col border-t border-border lg:w-[46%]">
          {releases.map((r, i) => {
            const isActive = i === activeIndex
            return (
              <li key={r.title} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group flex w-full items-center gap-4 py-4 pl-4 pr-3 text-left transition-colors ${
                    isActive
                      ? 'bg-card'
                      : 'hover:bg-card/60'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-10 w-px shrink-0 transition-colors ${
                      isActive ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                  <span className="relative size-12 shrink-0 overflow-hidden bg-muted">
                    <Image
                      src={r.cover}
                      alt={`${r.title} cover art`}
                      fill
                      sizes="48px"
                      className={`object-cover transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-90'
                      }`}
                    />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span
                      className={`truncate text-sm font-semibold uppercase tracking-tight transition-colors md:text-base ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {r.title}
                    </span>
                    <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {r.label} · {r.released}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        {/* Player panel */}
        <div className="flex min-w-0 flex-1 flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col gap-2">
            <h3 className="text-balance text-2xl font-semibold uppercase leading-tight tracking-tight md:text-3xl">
              {release.title}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {release.artists}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {hasBeatport && (
              <div
                role="tablist"
                aria-label={`Listen to ${release.title} on`}
                className="flex w-fit border border-border"
              >
                {(['spotify', 'beatport'] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    role="tab"
                    aria-selected={active === p}
                    onClick={() => setPlatform(p)}
                    className={`px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                      active === p
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            <a
              href={release.smartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              All platforms
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>

          {active === 'spotify' ? (
            <iframe
              key={`spotify-${release.spotifyId}`}
              title={`${release.title} on Spotify`}
              src={spotifyEmbedSrc(release)}
              width="100%"
              height={release.spotifyType === 'track' ? 152 : 352}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="w-full border border-border bg-card"
            />
          ) : (
            <iframe
              key={`beatport-${release.beatportId}`}
              title={`${release.title} on Beatport`}
              src={beatportEmbedSrc(release)}
              width="100%"
              height={260}
              loading="lazy"
              className="w-full border border-border bg-card"
            />
          )}
        </div>
      </div>
    </section>
  )
}
