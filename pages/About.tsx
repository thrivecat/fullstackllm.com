
import React from 'react';
import { ShieldCheck, Heart, Zap, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8">Democratizing Enterprise Intelligence</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            FullStackLLM was founded by a team of open-source enthusiasts and infrastructure engineers who believe that high-performance AI shouldn't require compromising on data privacy.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <ShieldCheck />, title: "Privacy First", desc: "Your data never leaves your dedicated cluster. Zero data retention by default." },
            { icon: <Globe />, title: "Open Weights", desc: "We believe in the power of the community. No vendor lock-in, ever." },
            { icon: <Zap />, title: "Raw Performance", desc: "No multi-tenant overhead. You get every teraflop of the GPUs you pay for." },
            { icon: <Heart />, title: "Human Support", desc: "Real engineers on standby. We treat your infrastructure as our own." },
          ].map((v, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <img src="https://picsum.photos/seed/office/800/600" alt="Office" className="rounded-[3rem] shadow-2xl" />
          <div>
            <h2 className="text-4xl font-black mb-6">Built for the next decade of AI</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
              As open-source models continue to outperform proprietary alternatives, the challenge shifts from "which model" to "how to host it safely." 
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
              FullStackLLM bridges that gap, providing the DevOps sophistication and enterprise security required to run models like Llama 3 and DeepSeek at massive scale.
            </p>
            <div className="flex gap-8 border-t border-slate-100 dark:border-slate-800 pt-8">
              <div>
                <div className="text-3xl font-black text-primary">500+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Deployments</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">99.9%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">24/7</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
