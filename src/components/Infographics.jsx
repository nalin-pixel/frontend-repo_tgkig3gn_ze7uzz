import { motion } from 'framer-motion'
import { Globe2, ShieldCheck, Recycle, ScanBarcode, Leaf, Database } from 'lucide-react'

const cards = [
  {
    icon: Globe2,
    title: 'End-to-End Traceability',
    text: 'Follow every component from origin to end-of-life with chain-of-custody checkpoints.',
    accent: 'from-emerald-500 to-teal-400',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Credentials',
    text: 'Digitally sign supplier attestations and certifications with verifiable credentials.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Recycle,
    title: 'Circularity Insights',
    text: 'Measure recycled content, repairability, and enable take-back programs.',
    accent: 'from-lime-500 to-emerald-500',
  },
  {
    icon: ScanBarcode,
    title: 'Digital Product Passport',
    text: 'Attach a scannable passport to each SKU exposing materials, CO₂, and service history.',
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: Leaf,
    title: 'Sustainability KPIs',
    text: 'Real-time dashboards for emissions, water use and supplier risk.',
    accent: 'from-emerald-600 to-green-500',
  },
  {
    icon: Database,
    title: 'Interoperable Data',
    text: 'APIs aligned with GS1 EPCIS, W3C DIDs and EU DPP requirements.',
    accent: 'from-amber-500 to-orange-500',
  },
]

export default function Infographics() {
  return (
    <section id="overview" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Interactive Infographics</h2>
          <p className="mt-3 text-slate-600">Explain complex supply chains visually. Hover each card to reveal motion and depth.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text, accent }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl`} />
              <div className="relative flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-900/90 flex items-center justify-center text-white shadow-md">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-slate-600">{text}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="rounded-xl border border-slate-200 p-3">
                    <div className="h-2 w-16 rounded-full bg-slate-200" />
                    <div className="mt-2 h-2 w-9/12 rounded-full bg-slate-100" />
                    <div className="mt-4 h-16 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
