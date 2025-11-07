import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! We\'ll reach out within one business day.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Let\'s talk</h2>
          <p className="mt-3 text-slate-600">Tell us about your goals. We\'ll craft a path to get there, fast.</p>
          <div className="mt-6 rounded-xl border border-slate-200 p-6 bg-slate-50">
            <p className="text-sm text-slate-600">We typically respond in a few hours. If your project is urgent, mention timelines and we\'ll prioritize.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">First name</label>
              <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Last name</label>
              <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">How can we help?</label>
              <textarea required rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-600 focus:ring-blue-600" />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700">
            Request consultation
          </button>
          {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
