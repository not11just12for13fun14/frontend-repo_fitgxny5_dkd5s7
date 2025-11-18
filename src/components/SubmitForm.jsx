import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SubmitForm() {
  const [form, setForm] = useState({ name: '', title: '', description: '', link: '', thumbnail: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          title: form.title,
          description: form.description || undefined,
          link: form.link || undefined,
          thumbnail: form.thumbnail || undefined,
          tags: [],
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      setForm({ name: '', title: '', description: '', link: '', thumbnail: '' })
    } catch (err) {
      setStatus({ ok: false, error: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="submit" className="py-16 sm:py-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Submit your project</h2>
        <form onSubmit={onSubmit} className="bg-slate-900/60 border border-slate-700/60 rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Your Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg bg-slate-800/80 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Title</label>
              <input name="title" value={form.title} onChange={onChange} required className="w-full rounded-lg bg-slate-800/80 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Description</label>
            <textarea name="description" value={form.description} onChange={onChange} rows={3} className="w-full rounded-lg bg-slate-800/80 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Demo Link</label>
              <input type="url" name="link" value={form.link} onChange={onChange} placeholder="https://" className="w-full rounded-lg bg-slate-800/80 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Thumbnail URL</label>
              <input type="url" name="thumbnail" value={form.thumbnail} onChange={onChange} placeholder="https://" className="w-full rounded-lg bg-slate-800/80 border border-slate-700 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <button disabled={loading} className="rounded-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white px-5 py-2.5 font-medium transition-colors">
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {status && (
              <p className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>
                {status.ok ? 'Thanks! Your submission was saved.' : `Error: ${status.error}`}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default SubmitForm
