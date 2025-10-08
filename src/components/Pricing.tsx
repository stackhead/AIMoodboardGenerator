import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out MuseFlow',
    features: [
      '5 moodboards per month',
      'Basic AI curation',
      'Standard resolution exports',
      'Community support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '29',
    description: 'For professional creators',
    features: [
      'Unlimited moodboards',
      'Advanced AI curation',
      'High-resolution exports',
      'Priority support',
      'Custom branding',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Studio',
    price: '99',
    description: 'For agencies and teams',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'API access',
      'Custom AI training',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-sky-300 to-purple-400 bg-clip-text text-transparent">
              transparent pricing
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your creative needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
                plan.popular
                  ? 'bg-slate-900/50 border-sky-500 shadow-lg shadow-sky-500/20'
                  : 'bg-slate-900/30 border-slate-800 hover:border-sky-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-sky-500/20">
                      <Check className="w-4 h-4 text-sky-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105'
                    : 'bg-slate-800/50 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
