import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    company: 'Studio Lumina',
    content: 'MuseFlow has changed my creative workflow. What used to take hours now takes minutes. The AI understands mood and aesthetic in ways I never expected.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Marcus Rivera',
    role: 'Product Designer',
    company: 'TechFlow',
    content: 'This is the tool I wish I had years ago. The moodboards are stunning, and they perfectly capture the emotions I\'m trying to convey to clients.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Emily Watson',
    role: 'Brand Strategist',
    company: 'Elevate Agency',
    content: 'MuseFlow bridges the gap between concept and visual execution. It\'s like having a mind reader that translates feelings into beautiful imagery.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Loved by{' '}
            <span className="bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              creators worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join thousands of designers who've elevated their creative process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-slate-900/30 backdrop-blur-sm border border-slate-800 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sky-400 text-sky-400" />
                ))}
              </div>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
