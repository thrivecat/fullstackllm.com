
import React from 'react';
import { motion } from 'framer-motion';
import { MODELS } from '../constants';
import { Check, Star, Zap, Cpu, Gauge, Globe } from 'lucide-react';

export default function ModelsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-6"
          >
            Enterprise-Grade Open Source
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-2xl mx-auto">
            Optimized for dedicated hardware. No shared resources, no rate limits, zero data retention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {MODELS.map((model, idx) => (
            <motion.div 
              key={model.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-3xl font-black">
                    {model.name.charAt(0)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-black tracking-tight">{model.name}</h2>
                    <span className="px-4 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-widest text-primary dark:text-accent">
                      {model.costTier}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                    {model.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Cpu size={14} /> Params
                      </div>
                      <div className="text-lg font-black">{model.parameters}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Globe size={14} /> Context
                      </div>
                      <div className="text-lg font-black">{model.context}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <Gauge size={14} /> Performance
                      </div>
                      <div className="text-lg font-black">{model.performance.tps} TPS</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Core Strengths</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.strengths.map(s => (
                        <span key={s} className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg text-xs font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-4 bg-slate-900 text-white dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 rounded-2xl font-bold transition-all shadow-lg">
                    Deploy {model.name}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50">
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-slate-500">Model</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-slate-500">Best For</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-slate-500">Speed</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-slate-500">Cost</th>
                <th className="p-6 font-bold uppercase text-xs tracking-widest text-slate-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MODELS.map(model => (
                <tr key={model.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 font-bold">{model.name}</td>
                  <td className="p-6 text-sm text-slate-600 dark:text-slate-400">{model.useCase}</td>
                  <td className="p-6">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < model.speed ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200 dark:text-slate-700'} />
                      ))}
                    </div>
                  </td>
                  <td className="p-6 text-sm font-bold text-primary dark:text-accent">{model.costTier}</td>
                  <td className="p-6">
                    <button className="px-4 py-2 bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent rounded-lg text-xs font-bold hover:bg-primary hover:text-white transition-all">
                      Configure
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
