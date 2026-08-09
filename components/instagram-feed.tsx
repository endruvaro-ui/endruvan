import Image from 'next/image'
import { InstagramIcon } from '@/components/instagram-icon'
import { artist, instagramPosts } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        label="04 / Feed"
        title="Instagram"
        description="Booth views, studio nights and unreleased loops."
        action={
          <a
            href={artist.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <InstagramIcon className="size-4" />
            @endruvan
          </a>
        }
      />

      <ul className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {instagramPosts.map((post) => (
          <li key={post.src}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden border border-border bg-card"
            >
              <Image
                src={post.src || '/placeholder.svg'}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover grayscale-[35%] transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <span className="absolute inset-0 bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="size-3.5 shrink-0 text-primary" />
                <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-foreground">
                  {post.caption}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
