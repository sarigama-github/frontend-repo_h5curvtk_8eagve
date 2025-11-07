import { Briefcase } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white">
            <Briefcase className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">Bizvora</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900">
          Get in touch
        </a>
      </nav>
    </header>
  )
}
