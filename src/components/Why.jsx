import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../lib/Reveal'

const points = [
  ['✨', 'Wide variety', 'Wigs, weavon, braiding hair and bags in one shop.'],
  ['💎', 'Quality you can feel', 'Soft, shiny, tangle-resistant hair that lasts.'],
  ['🎨', 'Colours & textures', 'Natural black, ombre, auburn, blonde, deep wave, kinky curls and more.'],
  ['💬', 'Easy ordering', 'Send us a message on WhatsApp and we respond quickly.'],
]

export default function Why() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [-10, 70])

  return (
    <section id="why" ref={ref} className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-10 md:py-20 sm:py-28 lg:grid-cols-2">
      <div className="relative grid grid-cols-2 gap-4">
        <motion.img
          style={{ y: y1 }}
          src="/images/ombre.jpg"
          alt="Ombre wig"
          loading="lazy"
          className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
        />
        <motion.img
          style={{ y: y2 }}
          src="/images/auburn.jpg"
          alt="Auburn wig"
          loading="lazy"
          className="mt-10 h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
        />
        <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl bg-white px-6 py-3 text-center shadow-xl sm:block">
          <p className="font-display text-2xl font-bold text-rose">100% Style</p>
          <p className="text-xs text-muted">Wigs · Weavon · Hair · Bags</p>
        </div>
      </div>

      <div>
        <Reveal from="right">
          <p className="eyebrow">Why Damsel Beauty</p>
          <h2 className="section-title mt-3">Look good. Feel confident.</h2>
        </Reveal>
        <ul className="mt-8 space-y-4">
          {points.map(([e, t, d], k) => (
            <Reveal as="li" key={t} from="right" delay={k * 110}>
              <div className="card flex gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose/10">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blush text-2xl">{e}</span>
                <div>
                  <b>{t}</b>
                  <p className="text-sm text-muted">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
