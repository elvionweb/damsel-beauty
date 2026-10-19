const words = ['Lace Wigs', 'Weavon', 'Body Wave', 'Deep Wave', 'Braiding Hair', 'Crochet Curls', 'Headband Wigs', "Ladies' Bags", 'Bobs']

export default function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="overflow-hidden bg-ink py-4 text-white" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((w, k) => (
          <span key={k} className="flex items-center gap-10 font-display text-lg italic text-white/90 sm:text-xl">
            {w}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
