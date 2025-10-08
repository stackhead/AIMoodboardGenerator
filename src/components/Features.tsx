import { motion } from 'framer-motion';
import { Palette, Zap, Share2 } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'AI-Powered Design Curation',
    description: 'Our advanced AI analyzes your prompts and curates the perfect visual elements to match your creative vision.',
  },
  {
    icon: Zap,
    title: 'Instant Mood Generation',
    description: 'Generate beautiful moodboards in seconds. No design experience needed—just describe what you feel.',
  },
  {
    icon: Share2,
    title: 'Save & Share Boards Easily',
    description: 'Export high-resolution boards, share with your team, or integrate directly with your favorite tools.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              create magic
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Transform emotions and ideas into stunning visual collections with the power of AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-800 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-sky-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
