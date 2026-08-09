import { supports } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight } from 'lucide-react'

export function Support() {
  return (
    <section id="support" className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading label="05 / Support" title="Platform Features & Support" />
        
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {supports.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-border bg-card p-6 transition-colors hover:border-primary"
            >
              <span className="font-mono text-base uppercase tracking-wider text-foreground group-hover:text-primary">
                {item.name}
              </span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
