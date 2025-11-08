import { Map, Shield, LineChart, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Map,
    title: 'Geospatial Intelligence',
    desc: 'Interactive MapLibre maps with zoning, CRZ, flood risk and amenity layers for Maharashtra districts.',
  },
  {
    icon: Shield,
    title: 'Compliance & Risk',
    desc: 'Automatic checks across MahaRERA, Mahabhulekh, MPCB and MIDC to assess project eligibility and compliance.',
  },
  {
    icon: LineChart,
    title: 'Market & Forecasts',
    desc: 'Live retrieval from top portals and predictive models to estimate rentals, yields and absorption.',
  },
  {
    icon: FileText,
    title: 'AI Reports',
    desc: 'One-click PDF reports with map snapshots, citations and executive summaries tailored to your role.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#06080F] py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for Builders, Brokers and Buyers</h2>
          <p className="mt-3 text-white/70">Agentic workflow orchestrates intent understanding, geospatial queries, compliance checks and market intelligence.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                <it.icon className="h-5 w-5 text-[#061017]" />
              </div>
              <h3 className="mt-4 text-white font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
