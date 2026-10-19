import Reveal from '../lib/Reveal'
import { wa } from '../lib/wa'

const steps = [
  ['Pick your style', 'Browse here and choose what you love.'],
  ['Message us', 'Tap the WhatsApp button for price, colour and length.'],
  ['Get your hair', 'Confirm your order and arrange pickup or delivery.'],
]

export default function HowToOrder() {
  return (
    <section id="order" className="bg-blush/60 py-10 md:z-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="eyebrow">How to order</p>
          <h2 className="section-title mt-3">Three simple steps</h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-14 hidden border-t-2 border-dashed border-rose/30 md:block" />
          {steps.map(([t, d], k) => (
            <Reveal key={t} delay={k * 140}>
              <div className="card relative h-full rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose/10">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose to-rose-deep font-display text-2xl font-bold text-white shadow-lg shadow-rose/30">
                  {k + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={200}>
          <a href={wa()} target="_blank" rel="noreferrer" className="btn-wa px-8 py-4">
            Start your order
          </a>
        </Reveal>
      </div>
    </section>
  )
}
