
import React from 'react';
import { SOLUTIONS } from '../constants';
import { motion } from 'framer-motion';

export default function Solutions() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">AI Solutions for Every Industry</h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto">
            From HIPAA-compliant healthcare deployments to secure financial reasoning, we help industries leverage the power of open-source safely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                {item.desc} Our dedicated clusters ensure that your sensitive {item.title.toLowerCase()} data never touches the public internet.
              </p>
              <button className="text-primary dark:text-accent font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more about {item.title} →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <div className="mt-24 p-12 md:p-20 rounded-[4rem] glass border border-white/20 dark:border-slate-800 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Don't see your industry?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            We specialize in custom LLM infrastructure for complex, high-compliance environments. Let's build a solution tailored to your specific needs.
          </p>
          <button className="px-10 py-4 bg-slate-900 text-white dark:bg-primary rounded-2xl font-bold hover:scale-105 transition-all">
            Consult with our Architects
          </button>
        </div>
      </div>
    </div>
  );
}
