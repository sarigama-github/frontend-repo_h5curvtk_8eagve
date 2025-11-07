import { ChartLine, Users, Settings, Shield } from 'lucide-react'

const services = [
  {
    icon: ChartLine,
    title: 'Growth Strategy',
    desc: 'Data‑backed go‑to‑market, pricing, and positioning to accelerate revenue.'
  },
  {
    icon: Users,
    title: 'Operations & PMO',
    desc: 'Streamline processes, OKRs, and cross‑functional delivery for scale.'
  },
  {
    icon: Settings,
    title: 'Digital Transformation',
    desc: 'Modernize tooling, automation, and analytics for a resilient stack.'
  },
  {
    icon: Shield,
    title: 'Risk & Compliance',
    desc: 'Proactive frameworks to manage risk and protect brand trust.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Practical consulting for modern teams, blending strategy with execution.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow bg-white">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
