"use client"

export function LatestReleases() {
  return (
    <section
      id="releases"
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mb-10 flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          01 / Discography
        </p>
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
          Latest Releases
        </h2>
        <p className="text-sm text-zinc-400">
          Stream Endru Van releases directly on Spotify or buy extended mixes on Beatport.
        </p>
      </div>

      {/* Container disesuaikan ukurannya agar fleksibel di mobile (min 352px - max 450px) */}
      <div className="w-full min-h-[352px] md:h-[450px] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
        <iframe
          title="Endru Van Discography on Spotify"
          src="https://open.spotify.com/embed/artist/5fmyXU0h8SRdGyh3WwINz8?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full h-[352px] md:h-[450px] border-0 rounded-xl"
        />
      </div>
    </section>
  )
}
