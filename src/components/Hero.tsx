import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-sky-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-cyan-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 mb-8"
        >
          <Sparkles className="w-4 h-4 text-sky-300" />
          <span className="text-sm text-slate-300">AI-Powered Creative Tool</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Transform your ideas into{' '}
          <span className="bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
            stunning visual moodboards
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
        >
          MuseFlow uses AI to generate moodboards from your prompts, themes, or emotions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Try It Now
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
          </button>
          <button className="px-8 py-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all duration-300">
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1016] via-transparent to-transparent z-10" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=400&fit=crop'
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="aspect-square rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`Moodboard ${i + 1}`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
