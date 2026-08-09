import { mixtapes } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

export function Mixtapes() {
  return (
    <section id="mixtapes" className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading label="07 / Mixtapes" title="DJ Mixes & Soundscapes" />
        
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {mixtapes.map((mix) => (
            <a
              key={mix.title}
              href={mix.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                  {mix.duration}
                </span>
                <span className="font-mono text-base uppercase tracking-wider text-foreground group-hover:text-primary">
                  {mix.title}
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary shrink-0 ml-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
