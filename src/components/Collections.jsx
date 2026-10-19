import Reveal from '../lib/Reveal'
import { wa } from '../lib/wa'

const items = [
  ['Wigs', 'bob', 'Bobs, curly, body wave, lace and headband wigs in natural and fashion colours.', "Hello Damsel Beauty, I'd like to see your wigs."],
  ['Weavon & Bundles', 'lydia', 'Straight, wavy, deep wave and short bundles with closures - full-head packs available.', "Hello Damsel Beauty, I'd like to see your weavon and bundles."],
  ["Lady's Hair", 'braids', 'Braiding extensions, crochet curls and attachments in every colour.', "Hello Damsel Beauty, I'd like to see your braiding hair."],
]

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Our Collections</p>
        <h2 className="section-title mt-3">Everything for your perfect look</h2>
        <p className="mt-4 text-muted">From ready-to-wear wigs to bundles, braiding hair and bags - pick your style.</p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([t, img, d, msg], k) => (
          <Reveal key={t} delay={k * 120}>
            <a href={wa(msg)} target="_blank" rel="noreferrer" className="card group relative block overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose/20">
              <div className="relative h-80 overflow-hidden sm:h-72">
                <img src={`/images/${img}.jpg`} alt={t} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-rose backdrop-blur">0{k + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-rose">
                  Ask for price <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}

        <Reveal className="sm:col-span-2 lg:col-span-3" from="zoom">
          <a
            href={wa("Hello Damsel Beauty, I'd like to see your women's bags.")}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-ink text-white md:flex-row md:items-center"
          >
            <div className="flex-1 p-8 md:p-12">
              <p className="eyebrow !text-gold">Also in store</p>
              <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Women's Bags</h3>
              <p className="mt-3 max-w-lg text-white/70">
                Complete your outfit with chic handbags and everyday bags. Message us to see the latest designs and prices.
              </p>
              <span className="btn-wa mt-6 px-6 py-3 text-sm">See bags on WhatsApp</span>
            </div>
            <div
              className="relative flex h-52 flex-1 items-center justify-center overflow-hidden md:h-72"
              style={{ background: 'linear-gradient(135deg,#b5446e,#c9a050)' }}
            >
              <span className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
              <span className="absolute -bottom-12 left-6 h-40 w-40 rounded-full bg-white/10" />
              <span className="relative animate-float text-8xl drop-shadow-xl transition duration-500 group-hover:scale-110 md:text-9xl">👜</span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
