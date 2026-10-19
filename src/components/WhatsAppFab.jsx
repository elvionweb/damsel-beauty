import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wa } from '../lib/wa'

export default function WhatsAppFab() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 300)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={wa()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.4, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 40 }}
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center"
          style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
        >
          <span className="absolute inset-0 animate-pulseRing rounded-full bg-[#25d366]" />
          <span className="btn-wa relative h-14 w-14 shadow-xl">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l1.8.9c.3.1.5.2.5.4.1.1.1.7-.1 1.3z" />
            </svg>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
