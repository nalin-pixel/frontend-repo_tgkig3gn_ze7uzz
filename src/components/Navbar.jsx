import { useState } from 'react'
import { Menu, Leaf, ShieldCheck, ScanLine } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Track & Trace', href: '#trace' },
    { label: 'Digital Passport', href: '#passport' },
    { label: 'Why Us', href: '#benefits' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-800">
            <Leaf className="text-emerald-600" size={22} />
            SustainChain
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-sm transition">
              <ScanLine size={18} /> Demo
            </a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-3 py-2 rounded-lg hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a href="#demo" className="block px-3 py-2 rounded-lg bg-emerald-600 text-white text-center">
              Get a Demo
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
