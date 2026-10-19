import { useEffect, useRef, useState } from 'react'
import Reveal from '../lib/Reveal'
import { wa } from '../lib/wa'

const items = [
  ['deepwave', 'Deep Wave Wigs'],
  ['headband', 'Headband Wigs'],
  ['straight', 'Straight Bundles + Closure'],
  ['short', 'Short Curly Bundles'],
  ['crochet', 'Crochet Curls'],
  ['packs', 'Curly Hair Packs'],
  ['curlpack', 'Bouncy Curl Pack'],
]

export default function Arrivals() {
  const ref = useRef(null)
  const [pct, setPct] = useState(0)

  const scroll = (d) => ref.current.scrollBy({ left: d * ref.current.clientWidth * 0.6, behavior: 'smooth' })

  useEffect(() => {
    const el = ref.current
    const f = () => setPct(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth))
    f()
    el.addEventListener('scroll', f, { passive: true })
    return () => el.removeEventListener('scroll', f)
  }, [])

  return (
    <section id="arrivals" className="overflow-hidden bg-blush/60 py-10 md:20 sm:py-28">
      <Reveal className="mx-auto flex max-w-6xl items-end justify-between px-5">
        <div>
          <p className="eyebrow">New Arrivals</p>
          <h2 className="section-title mt-3">Fresh in store</h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          {[['‹', -1], ['›', 1]].map(([s, d]) => (
            <button key={s} onClick={() => scroll(d)} aria-label={d < 0 ? 'Scroll left' : 'Scroll right'} className="btn-ghost h-12 w-12 text-xl">
              {s}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-10" from="right">
        <div ref={ref} className="strip">
          {items.map(([f, t]) => (
            <article key={f} className="card group overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose/20">
              <div className="relative h-80 overflow-hidden sm:h-96">
                <img src={`/images/${f}.jpg`} alt={t} loading="lazy" draggable="false" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">New</span>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <h3 className="font-semibold leading-snug">{t}</h3>
                <a
                  href={wa(`Hello Damsel Beauty, I'm interested in: ${t}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 rounded-full bg-rose px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-deep"
                >
                  Order →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-2 h-1 max-w-6xl overflow-hidden rounded-full bg-rose/10 px-5" style={{ width: 'calc(100% - 40px)' }}>
        <div className="h-full rounded-full bg-rose transition-[width] duration-200" style={{ width: `${20 + pct * 80}%` }} />
      </div>
    </section>
  )
}
