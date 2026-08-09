import { extraSocials } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

export function ExtraSocials() {
  return (
    <section id="socials" className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading label="06 / Connect" title="Social Networks" />
        
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {extraSocials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border bg-card/60 p-6 transition-colors hover:border-primary"
            >
              <span className="font-mono text-base uppercase tracking-wider text-foreground group-hover:text-primary">
                {social.name}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
