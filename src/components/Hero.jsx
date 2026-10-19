import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { wa } from '../lib/wa'

const slides = [
  ['auburn', 'Auburn body wave wig', 'Auburn Body Wave'],
  ['ombre', 'Blonde ombre wig', 'Blonde Ombre'],
  ['curly', 'Natural curly lace wigs', 'Natural Curly Lace'],
  ['straight', 'Silky straight weavon', 'Silky Straight Weavon'],
  ['brown', 'Chestnut brown wavy wig', 'Chestnut Waves'],
]
const DURATION = 5500

export default function Hero() {
  const [i, setI] = useState(0)
  const [tick, setTick] = useState(0)
  const x0 = useRef(null)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const go = useCallback((n) => {
    setI((n + slides.length) % slides.length)
    setTick((t) => t + 1)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setI((c) => (c + 1) % slides.length), DURATION)
    return () => clearInterval(id)
  }, [tick])

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink"
      onTouchStart={(e) => (x0.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const d = e.changedTouches[0].clientX - x0.current
        if (Math.abs(d) > 50) go(i + (d < 0 ? 1 : -1))
      }}
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slides[i][0]}
            src={`/images/${slides[i][0]}.jpg`}
            alt={slides[i][1]}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.1 }, scale: { duration: 7, ease: 'easeOut' } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 pt-10 text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block text-xs uppercase tracking-[.3em] text-gold-light sm:text-sm"
        >
          Wigs · Weavon · Hair · Bags
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-4 max-w-3xl font-display text-[2.6rem] font-bold leading-[1.08] sm:text-6xl lg:text-7xl"
        >
          Crown yourself in <em className="text-gold">beautiful</em> hair.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-5 max-w-xl text-white/85 sm:text-lg"
        >
          Premium wigs, silky weavon, braiding hair and stylish ladies' bags everything a damsel needs to slay, in one place.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#collections" className="btn-outline px-7 py-3.5">
            Browse Collections
          </a>
        </motion.div>
      </motion.div>

      {/* current slide label */}
      <div className="absolute bottom-20 right-5 z-20 hidden text-right text-white sm:block">
        <p className="text-[10px] uppercase tracking-[.3em] text-white/60">Featured</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-display text-xl"
          >
            {slides[i][2]}
          </motion.p>
        </AnimatePresence>
      </div>

      {[['‹', 'left-3 sm:left-6', -1], ['›', 'right-3 sm:right-6', 1]].map(([s, pos, d]) => (
        <button
          key={s}
          aria-label={d < 0 ? 'Previous slide' : 'Next slide'}
          onClick={() => go(i + d)}
          className={`absolute ${pos} top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full bg-white/15 text-2xl text-white backdrop-blur transition hover:bg-white/35`}
        >
          {s}
        </button>
      ))}

      {/* progress dots */}
      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-2">
        {slides.map((_, k) => (
          <button
            key={k}
            aria-label={`Slide ${k + 1}`}
            onClick={() => go(k)}
            className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${k === i ? 'w-10 bg-white/30' : 'w-2 bg-white/55'}`}
          >
            {k === i && (
              <motion.span
                key={tick + '-' + i}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: DURATION / 1000, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-5 z-20 hidden items-center gap-3 text-xs uppercase tracking-widest text-white/70 lg:flex">
        <span className="relative h-10 w-px overflow-hidden bg-white/30">
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-x-0 h-1/2 bg-gold"
          />
        </span>
        Scroll
      </div>
    </section>
  )
}
