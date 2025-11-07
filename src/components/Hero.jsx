import { Rocket, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm">
              <Star className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />
              Award‑winning business consulting
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Accelerate growth with Bizvora
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              We help modern companies unlock revenue, optimize operations, and scale sustainably through data‑driven strategy and hands‑on execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-blue-700">
                <Rocket className="h-4 w-4" />
                Start a project
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50">
                Explore services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-slate-600">
              <div>
                <span className="block text-2xl font-semibold text-slate-900">180+</span>
                Clients served
              </div>
              <div>
                <span className="block text-2xl font-semibold text-slate-900">$250M</span>
                Added revenue
              </div>
              <div>
                <span className="block text-2xl font-semibold text-slate-900">12yrs</span>
                Proven impact
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl">
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute inset-0 p-6 text-white flex flex-col justify-between">
                <div className="flex items-center gap-2 text-indigo-100">
                  <div className="h-8 w-8 rounded-md bg-white/20 grid place-items-center">
                    <Rocket className="h-4 w-4" />
                  </div>
                  <span className="text-sm">Go‑to‑market dashboard</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Lead conversion</span>
                    <span className="font-semibold">+34%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-2/3 bg-white/80" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Sales velocity</span>
                    <span className="font-semibold">+22%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-1/2 bg-white/80" />
                  </div>
                </div>
                <div className="text-right text-xs text-indigo-100/90">Real results. Real time.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
