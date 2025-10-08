import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const moodboards = [
  {
    title: 'Serene Minimalism',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&h=400&fit=crop',
    ],
  },
  {
    title: 'Vibrant Energy',
    images: [
      'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&h=400&fit=crop',
    ],
  },
];

export default function DemoPreview() {
  return (
    <section id="demo" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 mb-6">
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span className="text-sm text-slate-300">See it in action</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            From prompt to{' '}
            <span className="bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              perfection
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Watch how MuseFlow transforms simple ideas into cohesive visual stories
          </p>
        </motion.div>

        <div className="space-y-16">
          {moodboards.map((board, boardIndex) => (
            <motion.div
              key={board.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: boardIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{board.title}</h3>
                <p className="text-slate-400">Generated in 3.2 seconds</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {board.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Moodboard ${boardIndex + 1} - Image ${imageIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Create Your Moodboard
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
