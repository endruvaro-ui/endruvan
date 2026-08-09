import { About } from '@/components/about'
import { Catalogue } from '@/components/catalogue'
import { ExtraSocials } from '@/components/extra-socials'
import { Hero } from '@/components/hero'
import { InstagramFeed } from '@/components/instagram-feed'
import { LatestReleases } from '@/components/latest-releases'
import { Marquee } from '@/components/marquee'
import { Mixtapes } from '@/components/mixtapes'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { Support } from '@/components/support'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <LatestReleases />
        <Catalogue />
        <Mixtapes />
        <InstagramFeed />
        <About />
        <ExtraSocials />
        <Support />
      </main>
      <SiteFooter />
    </>
  )
}
