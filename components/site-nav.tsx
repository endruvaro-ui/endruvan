'use client'

import { useEffect, useState } from 'react'
import { artist } from '@/lib/site-data'

const links = [
  { label: 'Releases', href: '#releases' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'About', href: '#about' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 md:px-8"
      >
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.28em] text-foreground"
        >
          {artist.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${artist.bookingEmail}`}
          className="border border-primary/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Booking
        </a>
      </nav>
    </header>
  )
}
