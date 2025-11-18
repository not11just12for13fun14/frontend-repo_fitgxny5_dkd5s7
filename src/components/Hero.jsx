import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays (do not block pointer events for 3D scene) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 backdrop-blur">
          Interactive • Playful • Modern
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          UGC Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-blue-100/90">
          Showcase community projects in a living gallery. Submit your work, explore others, and get inspired.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#gallery" className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 font-medium transition-colors">
            Explore Gallery
          </a>
          <a href="#submit" className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 font-medium backdrop-blur transition-colors">
            Submit your work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
