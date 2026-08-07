"use client"

import { SectionHeading } from "@/components/section-heading"

export function LatestReleases() {
  return (
    <section
      id="releases"
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        label="01 / Discography"
        title="Latest releases"
        description="Stream Endru Van releases directly on Spotify or buy extended mixes on Beatport."
      />

      <div className="mt-12 w-full h-[480px] overflow-hidden rounded-xl border border-border bg-card">
        <iframe
          title="Endru Van Discography on Spotify"
          src="https://open.spotify.com/embed/artist/5fmyXU0h8SRdGyh3WwINz8?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full h-full border-0"
        />
      </div>
    </section>
  )
}
