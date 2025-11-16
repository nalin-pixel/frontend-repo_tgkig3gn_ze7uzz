import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Raw Material', desc: 'Source and certify inputs', color: 'from-emerald-500 to-teal-500' },
  { title: 'Manufacture', desc: 'Transform and assemble', color: 'from-blue-500 to-indigo-500' },
  { title: 'Logistics', desc: 'Ship with custody events', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Retail', desc: 'Sell with a scannable passport', color: 'from-amber-500 to-orange-500' },
  { title: 'Use & Service', desc: 'Repairs, updates and care', color: 'from-lime-500 to-emerald-500' },
  { title: 'Recovery', desc: 'Refurbish and recycle', color: 'from-teal-500 to-green-500' },
]

export default function Timeline() {
  return (
    <section id="trace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Track & Trace Journey</h2>
          <p className="mt-3 text-slate-600">Visualize product life from origin to recovery. Each step can emit EPCIS events and update the digital passport.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl`} />
              <div className="relative flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-slate-600">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
