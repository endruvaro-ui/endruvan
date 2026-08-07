import { About } from '@/components/about'
import { Catalogue } from '@/components/catalogue'
import { Hero } from '@/components/hero'
import { InstagramFeed } from '@/components/instagram-feed'
import { LatestReleases } from '@/components/latest-releases'
import { Marquee } from '@/components/marquee'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <LatestReleases />
        <Catalogue />
        <InstagramFeed />
        <About />
      </main>
      <SiteFooter />
    </>
  )
}
