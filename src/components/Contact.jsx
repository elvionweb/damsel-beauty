import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../lib/Reveal'
import { wa, PHONE_DISPLAY } from '../lib/wa'

export default function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-20 text-center text-white sm:py-36">
      <motion.img style={{ y }} src="/images/curly.jpg" alt="" className="absolute inset-x-0 -top-[15%] h-[130%] w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90" />
      <Reveal className="relative mx-auto max-w-2xl px-5">
        <p className="eyebrow !text-gold-light">Let's talk</p>
        <h2 className="section-title mt-3">Ready for your new look?</h2>
        <p className="mt-4 text-white/85">Chat with Damsel Beauty now for prices, availability and orders.</p>
        <div className="relative mt-9 inline-block">
          <span className="absolute inset-0 animate-pulseRing rounded-full bg-[#25d366]" />
          <a href={wa()} target="_blank" rel="noreferrer" className="btn-wa relative px-9 py-4 text-lg">
            Chat Us
          </a>
        </div>
        <p className="mt-5 text-sm text-white/70">{PHONE_DISPLAY}</p>
      </Reveal>
    </section>
  )
}
