
import React from 'react';
import { Search, Copy, ChevronRight, FileCode, Terminal, Book, HelpCircle } from 'lucide-react';

const DOCS_NAV = [
  { group: "Getting Started", items: ["Quick Start Guide", "Architecture Overview", "Security & Compliance"] },
  { group: "API Reference", items: ["Endpoints", "Authentication", "Rate Limits", "SDKs"] },
  { group: "Integration", items: ["SSO Setup", "Custom Domain", "White-labeling"] },
  { group: "Best Practices", items: ["Prompt Engineering", "Fine-tuning Basics", "Resource Scaling"] }
];

export default function Docs() {
  return (
    <div className="pt-24 flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:block w-72 border-r border-slate-200 dark:border-slate-800 overflow-y-auto p-8 fixed h-screen">
        <div className="relative mb-8">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search docs..." 
            className="w-full bg-slate-100 dark:bg-slate-900 rounded-xl py-2 pl-10 pr-4 text-sm outline-none border border-transparent focus:border-primary transition-all"
          />
        </div>
        
        <nav className="space-y-8">
          {DOCS_NAV.map((group) => (
            <div key={group.group}>
              <h5 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">{group.group}</h5>
              <ul className="space-y-2">
                {group.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center justify-between">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-8 md:p-16 max-w-5xl">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Documentation <ChevronRight size={12} /> Getting Started <ChevronRight size={12} /> <span className="text-primary">Quick Start</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-8">Quick Start Guide</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Welcome to FullStackLLM. This guide will help you get your first dedicated open-source LLM instance up and running in under 5 minutes.
        </p>

        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
              Provision your Hardware
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Select your preferred GPU cluster and model via the FullStackLLM dashboard. Our orchestrator will provision a secure, isolated container on bare-metal hardware.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
              API Integration
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Our endpoints are 100% OpenAI-compatible. Just swap your base URL and use your personal access token.
            </p>
            
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <button className="text-slate-400 hover:text-white transition-colors"><Copy size={16}/></button>
              </div>
              <pre className="p-6 text-indigo-300 text-sm font-mono overflow-x-auto">
{`import { OpenAI } from 'openai';

const client = new OpenAI({
  apiKey: 'fsl_live_8392019482',
  baseURL: 'https://api.yourbrand.fsl.com/v1'
});

const response = await client.chat.completions.create({
  model: 'llama-3-70b',
  messages: [{ role: 'user', content: 'Why is privacy important?' }]
});

console.log(response.choices[0].message.content);`}
              </pre>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 flex gap-4">
            <div className="text-primary"><HelpCircle size={24}/></div>
            <div>
              <h4 className="font-bold mb-1">Need help with SSO?</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Our enterprise team handles manual SSO configuration for all Professional and Enterprise customers. <a href="#" className="text-primary font-bold">Open a support ticket</a></p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
