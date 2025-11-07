export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Built for outcomes, not slide decks</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Bizvora is a boutique consultancy partnering with startups and enterprises to deliver measurable impact. 
            Our teams embed with yours, aligning strategy to execution through clear KPIs, iterative sprints, and transparent reporting.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700 text-sm">
            <li className="flex gap-2"><span className="text-blue-600">•</span> Senior operators with experience across SaaS, fintech, and consumer.</li>
            <li className="flex gap-2"><span className="text-blue-600">•</span> Playbooks for GTM, pricing, churn reduction, and change management.</li>
            <li className="flex gap-2"><span className="text-blue-600">•</span> We commit to outcomes: revenue, efficiency, and resilience.</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-white shadow-xl border border-slate-200 p-6">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="rounded-lg bg-slate-100" />
              <div className="rounded-lg bg-slate-100" />
              <div className="rounded-lg bg-slate-100 col-span-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
