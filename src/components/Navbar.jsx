import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { wa } from '../lib/wa'

const links = [
  ['Collections', 'collections'],
  ['New Arrivals', 'arrivals'],
  ['Why Us', 'why'],
  ['How to Order', 'order'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the section currently in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(([, id]) => {
      const el = document.getElementById(id)
      el && io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  const light = !solid && !open
  const tone = light ? 'text-white' : 'text-ink'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || open ? 'bg-cream/90 shadow-[0_1px_0_rgba(181,68,110,.15)] backdrop-blur-xl' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px]">
        <a href="#home" onClick={() => setOpen(false)} className={`font-display text-2xl font-bold transition-colors ${tone}`}>
          Damsel<span className="text-gold"> Beauty</span>
        </a>

        <nav className={`hidden items-center gap-8 text-sm font-medium transition-colors md:flex ${tone}`}>
          {links.map(([t, id]) => (
            <a key={id} href={`#${id}`} className="group relative py-1">
              <span className={active === id ? 'text-rose' : 'transition-colors group-hover:text-rose'}>{t}</span>
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-rose transition-all duration-300 ${
                  active === id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </nav>

        <a href={wa()} target="_blank" rel="noreferrer" className="btn-wa hidden px-5 py-2.5 text-sm md:inline-flex">
          Chat Us
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`relative z-50 flex h-11 w-11 items-center justify-center md:hidden ${tone}`}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'top-[7px] rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${open ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
          </span>
        </button>
      </div>

      {/* scroll progress */}
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-rose to-gold" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100svh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 -z-10 overflow-hidden bg-cream md:hidden"
          >
            <div className="flex h-full flex-col justify-center gap-2 px-8 pb-10 pt-20">
              {links.map(([t, id], k) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + k * 0.07 }}
                  className="border-b border-rose/10 py-4 font-display text-3xl font-semibold text-ink"
                >
                  {t}
                </motion.a>
              ))}
              <div className='flex justify-center'>
                <motion.a
                href={wa()}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-wa w-44 mt-4 py-4 text-lg"
              >
                Chat Us
              </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
