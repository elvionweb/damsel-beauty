import { motion } from 'framer-motion'

const offsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -48 },
  right: { x: 48 },
  zoom: { scale: 0.92 },
  none: {},
}

/** Scroll-triggered reveal. Works identically on mobile and desktop. */
export default function Reveal({ children, className = '', from = 'up', delay = 0, as = 'div', once = true }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
