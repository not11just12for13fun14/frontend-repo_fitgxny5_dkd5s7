import Hero from './components/Hero'
import Gallery from './components/Gallery'
import SubmitForm from './components/SubmitForm'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* top nav */}
      <header className="fixed top-0 inset-x-0 z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
            <a href="/" className="font-bold tracking-tight text-white">UGC Portfolio</a>
            <nav className="hidden sm:flex items-center gap-4 text-sm text-slate-300">
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#submit" className="hover:text-white">Submit</a>
              <a href="/test" className="hover:text-white">Status</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <Hero />
        <Gallery />
        <SubmitForm />

        {/* footer */}
        <footer className="border-t border-white/10 bg-slate-950/80">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>Built with an interactive 3D hero and a live community gallery.</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-white" href="#submit">Submit</a>
              <a className="hover:text-white" href="#gallery">Explore</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
