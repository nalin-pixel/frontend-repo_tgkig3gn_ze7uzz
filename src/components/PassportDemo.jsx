import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { QrCode, Info } from 'lucide-react'

export default function PassportDemo() {
  const [sku, setSku] = useState('SKU-001-A')
  const [co2, setCo2] = useState(2.4)
  const [content, setContent] = useState('Recycled Aluminum 45%')

  useEffect(() => {
    // In a future step, wire to backend. For now this is interactive UI only.
  }, [sku])

  return (
    <section id="passport" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Digital Product Passport</h2>
            <p className="mt-3 text-slate-600">A scannable identity for every product. Share materials, carbon, service history and end-of-life instructions with customers and regulators.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-500">SKU</p>
                <input value={sku} onChange={(e) => setSku(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-xs text-slate-500">CO₂e per unit (kg)</p>
                <input type="number" step="0.1" value={co2} onChange={(e) => setCo2(Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 col-span-2">
                <p className="text-xs text-slate-500">Material Content</p>
                <input value={content} onChange={(e) => setContent(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500 flex items-start gap-2"><Info size={16} className="mt-0.5"/> Values update the live passport preview.</p>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Digital Passport</p>
                  <h3 className="text-xl font-semibold text-slate-900">{sku}</h3>
                </div>
                <div className="h-16 w-16 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <QrCode />
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 border border-emerald-100">
                  <p className="text-xs text-emerald-700">CO₂e</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-900">{co2}<span className="text-sm font-medium"> kg</span></p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 border border-indigo-100">
                  <p className="text-xs text-indigo-700">Materials</p>
                  <p className="mt-1 text-sm font-semibold text-indigo-900">{content}</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-4 border border-amber-100">
                  <p className="text-xs text-amber-700">Status</p>
                  <p className="mt-1 text-sm font-semibold text-amber-900">Compliant</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-7/12 bg-gradient-to-r from-emerald-500 to-teal-400" />
                </div>
                <p className="mt-2 text-xs text-slate-500">Circularity readiness</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
