import Image from 'next/image'
import { artist } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="about" className="bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:px-8 md:py-28">
        <div className="relative aspect-4/5 w-full overflow-hidden border border-border">
          <Image
            src="/images/ig-5.png"
            alt="Portrait of Endru Van in the studio lit by a single cold monitor glow"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading label="05 / Bio" title="About" />

          <div className="flex flex-col gap-5">
            {artist.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-1 gap-6 border-t border-border pt-8">
            <div className="flex flex-col gap-1">
              <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                Bookings
              </dt>
              <dd>
                <a
                  href={`mailto:${artist.bookingEmail}`}
                  className="font-mono text-sm text-primary hover:underline"
                >
                  {artist.bookingEmail}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
