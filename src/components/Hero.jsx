import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#06080F] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-[#06080F]/40 to-[#06080F]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Agentic Real Estate Intelligence • Maharashtra
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            LandIntel.ai
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Explore, analyze, and receive AI-generated reports on land and properties across Maharashtra using geospatial intelligence and multi-agent AI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-teal-400 to-emerald-500 px-5 py-3 text-[#061017] font-semibold shadow-lg shadow-emerald-500/20 hover:from-teal-300 hover:to-emerald-500 transition">
              Try the Demo
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
