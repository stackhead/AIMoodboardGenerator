import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Demo', href: '#demo' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0E1016]/80 backdrop-blur-lg border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-sky-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              MuseFlow
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-lg text-slate-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-slate-300 hover:text-sky-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-800">
              <button className="px-6 py-2 rounded-lg text-slate-300 hover:text-white transition-colors text-left">
                Sign In
              </button>
              <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/20">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
