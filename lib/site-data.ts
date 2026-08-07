/**
 * ============================================================
 *  EDIT HERE — all Endru Van content lives in this one file.
 *  Release + profile data sourced from link.me/endruvan_ofc
 * ============================================================
 */

export const artist = {
  name: 'Endru Van',
  handle: '@endruvan_ofc',
  role: 'DJ / Producer',
  genre: 'Melodic Techno',
  based: 'Indonesia',
  tagline:
    'Descending into the shadows — driving, hypnotic beats and haunting synth work built for the peak-time underground.',
  bio: [
    'Endru Van produces melodic techno that lives in the darker realms of the genre. Driving, hypnotic beats fused with signature haunting synth work, engineered for a raw and atmospheric energy that belongs to the peak-time underground.',
    'Released across Excess, Calisto, Etheral Echoes, Exx Boundles, Eclipse, Wyld, CardStellar Waves Records, Row Records, Cafe De Anatolia, Addictive Sound, Eessarc and Hypecue, with a catalogue spanning originals and official remixes of Avicii, Mrak, Anyma, John Summit, Argy and Korolova. Charted at #1 on the Indonesia Dance Chart with "Loves Fall".',
  ],
  socials: {
    instagram: 'https://www.instagram.com/endruvan_ofc',
    spotify: 'https://open.spotify.com/artist/5fmyXU0h8SRdGyh3WwINz8',
    beatport: 'https://www.beatport.com/artist/endru-van/1324697',
    soundcloud: 'https://soundcloud.com/endruvan_ofc',
    youtube: 'https://www.youtube.com/@endruvan',
    appleMusic: 'https://music.apple.com/artist/endru-van/1597003716',
    linkme: 'https://link.me/endruvan_ofc',
  },
  spotifyArtistId: '5fmyXU0h8SRdGyh3WwINz8',
  playlist: {
    name: 'Dark Melodic Techno 2026',
    id: '65TalfthKshrSIyWjKElDw',
    url: 'https://open.spotify.com/playlist/65TalfthKshrSIyWjKElDw',
  },
  bookingEmail: 'booking@endruvan.com',
}

/**
 * LATEST RELEASES
 * ---------------
 * spotifyId  → the ID at the end of a Spotify link.
 *              https://open.spotify.com/album/0eMtl7SLjiVS26CB9qjwEY  →  '0eMtl7SLjiVS26CB9qjwEY'
 * spotifyType→ 'track' | 'album' | 'playlist'  (must match the link type)
 * beatportId → the numeric ID in a Beatport link.
 *              https://www.beatport.com/release/radiance-in-motion/6426538  →  '6426538'
 * Set beatportId to null if a release is not on Beatport.
 */
export type Release = {
  title: string
  artists: string
  label: string
  released: string
  cover: string
  spotifyId: string
  spotifyType: 'track' | 'album' | 'playlist'
  beatportId: string | null
  beatportType: 'release' | 'track'
  smartLink: string
}

export const releases: Release[] = [
  {
    title: 'Etherial Pulse',
    artists: 'Endru Van',
    label: 'Row Records',
    released: 'Apr 24, 2026',
    cover: '/images/covers/etherial-pulse.jpg',
    spotifyId: '0cjB8yEGNzy5vELvsebfyS',
    spotifyType: 'album',
    beatportId: '6444094',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlYIdb3GWergU',
  },
  {
    title: 'Radiance in Motion',
    artists: 'Endru Van',
    label: 'Stellar Waves Records',
    released: 'Apr 10, 2026',
    cover: '/images/covers/radiance-in-motion.jpg',
    spotifyId: '0eMtl7SLjiVS26CB9qjwEY',
    spotifyType: 'album',
    beatportId: '6426538',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rl7_VuNC5RmHE',
  },
  {
    title: 'Blizzard',
    artists: 'Endru Van, Cafe De Anatolia, Jaroslava',
    label: 'Cafe De Anatolia',
    released: 'Apr 16, 2026',
    cover: '/images/covers/blizzard.jpg',
    spotifyId: '78DJ2Q2A7zQupb9AtujRXr',
    spotifyType: 'album',
    beatportId: '6684080',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlYyuupPOIN-8',
  },
  {
    title: 'Neural Friction',
    artists: 'Endru Van',
    label: 'Stellar Waves Records',
    released: 'Mar 29, 2026',
    cover: '/images/covers/neural-friction.jpg',
    spotifyId: '5tiKJypmlMMrH5g8faZGMZ',
    spotifyType: 'album',
    beatportId: '6417829',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlvTieKsjHOjU',
  },
  {
    title: 'Ones to Watch 27',
    artists: 'Endru Van, Cardio, Drillcore',
    label: 'Various Artists',
    released: 'Jan 19, 2026',
    cover: '/images/covers/ones-to-watch-27.jpg',
    spotifyId: '5pLEATBsCvAdBTuZvPMIbz',
    spotifyType: 'album',
    beatportId: '5758669',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlBtwQIQlJps8',
  },
  {
    title: 'Beautiful of Dewata',
    artists: 'Endru Van, Claasix, Cafe De Anatolia',
    label: 'Cafe De Anatolia',
    released: 'Dec 25, 2025',
    cover: '/images/covers/beautiful-of-dewata.jpg',
    spotifyId: '4nnenNpipI2sh8prCIbDAX',
    spotifyType: 'album',
    beatportId: '5643316',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlVHjXi2iXZgU',
  },
  {
    title: 'Static of Melodic',
    artists: 'Endru Van',
    label: 'Row Records',
    released: 'Nov 28, 2025',
    cover: '/images/covers/static-of-melodic.jpg',
    spotifyId: '3HihC9zLKeLLd2RbBtVCbD',
    spotifyType: 'album',
    beatportId: '5639417',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlaa7Ez4Zq4lM',
  },
  {
    title: "I Don't Know",
    artists: 'Endru Van',
    label: 'Row Records',
    released: 'Nov 28, 2025',
    cover: '/images/covers/i-dont-know.jpg',
    spotifyId: '0ujXUSDW0QyARWqzHliOdL',
    spotifyType: 'album',
    beatportId: '5539325',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlY9pnddp0Exs',
  },
  {
    title: 'Time Elapsed',
    artists: 'Endru Van, Voidlore',
    label: 'Row Records',
    released: 'Oct 17, 2025',
    cover: '/images/covers/time-elapsed.jpg',
    spotifyId: '6IfvrVqAuowYjXkuyrYqfc',
    spotifyType: 'album',
    beatportId: '5406405',
    beatportType: 'release',
    smartLink: 'https://go.protonradio.com/r/rlZiPuEwjf-x4',
  },
]

/**
 * PRE-SAVE — upcoming releases, Proton smart links.
 */
export const preSaves = [
  {
    title: 'Obscure Dimensions',
    artists: 'Endru Van',
    url: 'https://go.protonradio.com/r/rlAHoiqe_k-M8',
  },
  {
    title: 'Lost in Space',
    artists: 'Endru Van',
    url: 'https://go.protonradio.com/r/rlammeRSs9r78',
  },
  {
    title: 'Remember',
    artists: 'Zoldiex, Endru Van',
    url: 'https://go.protonradio.com/r/rla8CcyHDwWlY',
  },
  {
    title: 'Light',
    artists: 'Untold Myth, Endru Van',
    url: 'https://go.protonradio.com/r/rlNtesTrFLguw',
  },
  {
    title: 'Dark Opera',
    artists: 'Endru Van, DJ MANDO, Cafe De Anatolia',
    url: 'https://go.protonradio.com/r/rlCzkTPxJIYmM',
  },
  {
    title: 'Between Us',
    artists: 'FARRAN, Endru Van',
    url: 'https://go.protonradio.com/r/rlaT4XEs5ezek',
  },
  {
    title: 'Monochrome',
    artists: 'Unitech, Marta Mark, Endru Van',
    url: 'https://go.protonradio.com/r/rleCYcGtnG_iI',
  },
]

/**
 * OFFICIAL REMIXES — YouTube.
 */
export const remixes = [
   {
    title: 'Distorted Love',
    original: 'Korolova, Be No Rain',
    url: 'https://youtu.be/xhGKr5k6w1Y?si=hC1LdAPnnGDYyws0',
  },
  {
    title: 'White Flag',
    original: 'Dido',
    url: 'https://youtu.be/AqyMALdpJ9Q?si=4uK0S_aVa9vEmL4W',
  },
  {
    title: 'Wake Me Up',
    original: 'Avicii',
    url: 'https://youtu.be/wNvwsOaVV8U',
  },
  {
    title: 'Beautiful',
    original: 'Anyma, Joji',
    url: 'https://youtu.be/AOEdw2D-QLY',
  },
  {
    title: 'My Heart Will Go On',
    original: 'Celine Dion',
    url: 'https://youtu.be/9H2YgYqZpHw',
  },
  {
    title: 'Shadows',
    original: 'John Summit feat. Lavinia',
    url: 'https://youtu.be/sG5XYT7InoM',
  },
  {
    title: 'Dona',
    original: 'Argy, Omiki',
    url: 'https://youtu.be/yZhnDz1z2us',
  },
  {
    title: 'Forever Till The End',
    original: 'Rivo, CLOVES',
    url: 'https://youtu.be/8-kyymXNYZ4',
  },
  {
    title: 'Giving Up Air',
    original: 'The Temper Trap',
    url: 'https://youtu.be/I89IHrJGL94',
  },
]

/**
 * INSTAGRAM FEED
 * --------------
 * Static grid — swap `src` for your own images and `href` for the real post URL.
 */
const IG = 'https://www.instagram.com/endruvan_ofc'

export const instagramPosts = [
  {
    src: '/images/ig-1.png',
    alt: 'Warehouse crowd with raised hands seen from the DJ booth',
    href: IG,
    caption: 'Peak-time underground, lights down',
  },
  {
    src: '/images/ig-2.png',
    alt: 'Close-up of hands on a mixer fader lit by blue LEDs',
    href: IG,
    caption: 'Channel three does the talking',
  },
  {
    src: '/images/ig-3.png',
    alt: 'Modular synthesizer rack with patch cables in a dim studio',
    href: IG,
    caption: 'Patch notes — haunting synth work',
  },
  {
    src: '/images/ig-4.png',
    alt: 'Empty industrial venue filled with haze before doors open',
    href: IG,
    caption: 'One hour before doors',
  },
  {
    src: '/images/ig-5.png',
    alt: 'Moody studio portrait of Endru Van lit by a monitor glow',
    href: IG,
    caption: 'Studio, 03:00',
  },
  {
    src: '/images/ig-6.png',
    alt: 'Vinyl record spinning on a turntable in near darkness',
    href: IG,
    caption: 'Radiance In Motion — out now',
  },
]
