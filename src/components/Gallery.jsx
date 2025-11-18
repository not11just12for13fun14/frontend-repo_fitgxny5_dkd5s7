import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`${API}/api/portfolio`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchItems()
  }, [])

  return (
    <section id="gallery" className="relative py-16 sm:py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Community Gallery</h2>
          <span className="text-blue-300/70 text-sm">{items.length} items</span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl bg-slate-800/50 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((item, idx) => (
              <a key={idx} href={item.demo || '#'} target={item.demo ? '_blank' : undefined} rel="noreferrer"
                 className="group rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700/60 hover:border-blue-500/40 transition-colors">
                <div className="aspect-[4/3] overflow-hidden bg-slate-800">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    {item.type === 'submission' && (
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">UGC</span>
                    )}
                    {item.type === 'project' && (
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Curated</span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold truncate">{item.title || 'Untitled'}</h3>
                  {item.author && <p className="text-xs text-slate-400 mt-0.5">by {item.author}</p>}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
