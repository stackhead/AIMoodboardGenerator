import { motion } from 'framer-motion';
import { Sparkles, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="relative py-20 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 mb-6">
            <Mail className="w-4 h-4 text-sky-300" />
            <span className="text-sm text-slate-300">Join the waitlist</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be the first to{' '}
            <span className="bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              experience MuseFlow
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Get early access, exclusive updates, and special launch pricing
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                {submitted ? 'Joined!' : 'Join'}
              </button>
            </div>
          </form>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-sky-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              MuseFlow
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-400">
            <a href="#" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Features</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Pricing</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Blog</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          <p className="text-slate-500 text-sm">
            © 2025 MuseFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
