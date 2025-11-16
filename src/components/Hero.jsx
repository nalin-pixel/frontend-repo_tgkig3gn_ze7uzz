import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-40 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center text-xs font-medium uppercase tracking-wider text-emerald-700 bg-emerald-100/70 rounded-full px-3 py-1">
            Sustainable Supply Chains · Digital Product Passport
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
            Track & Trace with a Digital Product Passport
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Build trusted, transparent and circular supply chains. Capture provenance, certify materials and share product footprints with interactive 3D storytelling.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">
              Start a Demo
            </a>
            <a href="#overview" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition">
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
