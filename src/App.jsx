import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Collections from './components/Collections'
import Arrivals from './components/Arrivals'
import Why from './components/Why'
import HowToOrder from './components/HowToOrder'
import Contact from './components/Contact'
import WhatsAppFab from './components/WhatsAppFab'
import { wa, PHONE_DISPLAY } from './lib/wa'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <Arrivals />
        <Why />
        <HowToOrder />
        <Contact />
      </main>
      <footer className="bg-ink px-5 py-10 text-center text-sm text-white/60">
        <p className="font-display text-2xl font-bold text-white">
          Damsel<span className="text-gold"> Beauty</span>
        </p>
        <p className="mt-2">Wigs · Weavon · Hair · Bags</p>
        <a href={wa()} target="_blank" rel="noreferrer" className="mt-3 inline-block text-gold-light hover:text-gold">
          {PHONE_DISPLAY}
        </a>

        {/* Builder Credit */}
        <p className="mt-6 text-xs sm:text-sm opacity-80 flex items-center justify-center gap-2">
          <img
              src="/logos.jpg"
              alt="Elvionweb Logo"
              className="w-8 h-8 object-contain"
          />
          Built by{" "}
          <a
            href="https://www.elvionweb.com"
        target="_blank"
          rel="noopener noreferrer"
        className="font-semibold underline underline-offset-4 hover:opacity-100 transition-opacity"
          >
          Elvionweb
          </a>
          </p>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Damsel Beauty. All rights reserved.</p>
      </footer>
      <WhatsAppFab />
    </>
  )
}
