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

      {/* Perbaikan Utama: Memaksa tinggi fixed di mobile dengan h-[380px] */}
      {/* Kita tambahkan latar belakang gelap (bg-black) agar jika loading lama, tidak terlihat putih */}
      <div className="w-full h-[380px] md:h-[480px] overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-2xl">
        <iframe
          title="Endru Van Discography on Spotify"
          // URL dengan theme=0 dipastikan benar
          src="https://open.spotify.com/embed/artist/5fmyXU0h8SRdGyh3WwINz8?utm_source=generator&theme=0"
          width="100%"
          // Kita berikan tinggi atribut sedikit lebih besar untuk mengantisipasi padding browser mobile
          height="380" 
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          // Atribut loading="lazy" dihilangkan sementara untuk tes jika ini penyebabnya di browser HP tertentu
          // loading="lazy" 
          className="w-full h-full border-0 rounded-xl"
          // Style tambahan untuk memastikan latar belakang iframe transparan
          style={{ background: "transparent" }}
        />
      </div>
    </section>
  )
}
