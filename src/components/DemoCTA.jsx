import { motion } from 'framer-motion';

export default function DemoCTA() {
  return (
    <section id="demo" className="bg-[#06080F] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-amber-400/10 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">See the agentic map dashboard</h3>
              <p className="mt-3 text-white/70">Chat with the AI, visualize parcels and layers, and download a report. This demo uses sample data for Pune, Mumbai, Thane and Nagpur.</p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-5 py-3 text-[#0B0F18] font-semibold hover:from-amber-300 hover:to-amber-500 transition">Open Dashboard</a>
                <a href="#pricing" className="rounded-md border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">Pricing</a>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-[#0B1320] p-4"
            >
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-[#0C1726] to-[#0B0F18] grid grid-cols-12">
                <div className="col-span-4 border-r border-white/10 p-3">
                  <div className="h-3 w-24 rounded bg-white/10" />
                  <div className="mt-3 space-y-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-8 w-full rounded bg-white/5" />
                    ))}
                  </div>
                </div>
                <div className="col-span-8 p-3">
                  <div className="h-full w-full rounded bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(251,191,36,0.2),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.25),transparent_35%)]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
