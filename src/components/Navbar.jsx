import { useState } from 'react';
import { Menu, X, Map, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#06080F]/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-teal-400 to-emerald-500" />
            <span className="font-semibold tracking-tight text-white">LandIntel.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
            <a href="#demo" className="text-sm text-white/80 hover:text-white transition">Demo</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 transition">
              <Map className="h-4 w-4" />
              Explore Map
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-1.5 text-sm font-semibold text-[#0A0F1A] shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] hover:from-amber-300 hover:to-amber-500 transition">
              <User className="h-4 w-4" />
              Sign In
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#06080F]">
          <div className="px-4 py-3 space-y-3">
            <a href="#features" className="block text-white/80">Features</a>
            <a href="#demo" className="block text-white/80">Demo</a>
            <a href="#pricing" className="block text-white/80">Pricing</a>
            <div className="flex gap-3 pt-2">
              <button className="flex-1 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white">Explore Map</button>
              <button className="flex-1 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 px-3 py-2 text-sm font-semibold text-[#0A0F1A]">Sign In</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
