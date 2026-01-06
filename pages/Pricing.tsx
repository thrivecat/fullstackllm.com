
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, HelpCircle, ArrowUpRight, Info, Zap, Users, Building2, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ_ITEMS = [
  { q: "What's included in setup?", a: "Setup includes hardware provisioning, network isolation, white-label UI customization, SSO integration assistance, and a dedicated Slack channel with our engineering team." },
  { q: "Can I switch models?", a: "Yes. You can swap models on your dedicated cluster at any time. Larger models may require more GPU memory which could necessitate a tier upgrade." },
  { q: "How does billing work?", a: "Dedicated hosting is billed monthly or annually. Monthly plans can be canceled anytime with 30 days notice. Annual plans offer a 20% discount." },
  { q: "Difference between Dedicated and API?", a: "API Service is multi-tenant and shared. Dedicated Hosting gives you exclusive access to specific GPUs, meaning zero rate limits, total data privacy, and custom configurations." },
  { q: "Do you offer a free trial?", a: "We offer a 14-day proof-of-concept period for qualified enterprise customers. Contact our sales team to discuss your use case and requirements." },
  { q: "What compliance certifications do you have?", a: "We're SOC 2 Type II certified and GDPR compliant. We can deploy in HIPAA-compliant configurations and provide BAA agreements for healthcare customers." }
];

// Add-on Services
const ADDON_SERVICES = [
  { name: 'Setup Fee - Starter (7B)', price: '$499', period: 'one-time', note: 'Deployment, config, training' },
  { name: 'Setup Fee - Professional (72B)', price: '$999', period: 'one-time', note: 'Priority deployment' },
  { name: 'Setup Fee - Enterprise (V3/K2)', price: '$2,499', period: 'one-time', note: 'White-glove setup' },
  { name: 'SSO Integration', price: '$149', period: '/month', note: 'SAML, OIDC, Azure AD' },
  { name: 'White-labeling', price: '$299', period: '/month', note: 'Custom branding, logo, colors' },
  { name: 'Custom Domain', price: '$99', period: '/month', note: 'yourcompany.com hosting' },
  { name: 'Subdomain Hosting', price: 'Included', period: '', note: 'yourcompany.fullstackllm.com' },
  { name: 'API Access', price: '$49', period: '/month', note: 'REST API for integrations' },
  { name: 'Priority Support', price: '$199', period: '/month', note: '4-hour response SLA' }
];

// API Pricing Tiers
const API_PRICING_TIERS = [
  {
    name: 'API Starter',
    price: 99,
    tokens: '1M',
    overage: '$0.08/1K',
    features: ['Basic chat UI', '7B models only', 'Email support', 'Usage analytics'],
    highlighted: false
  },
  {
    name: 'API Growth',
    price: 299,
    tokens: '5M',
    overage: '$0.06/1K',
    features: ['Custom branding', 'All 7B-70B models', 'Priority email support', 'Advanced analytics', 'Webhook integrations'],
    highlighted: false
  },
  {
    name: 'API Business',
    price: 599,
    tokens: '15M',
    overage: '$0.04/1K',
    features: ['SSO integration', 'Priority routing', 'Dedicated support channel', 'SLA guarantee', 'Custom rate limits'],
    highlighted: true
  },
  {
    name: 'API Enterprise',
    price: 999,
    tokens: '50M',
    overage: '$0.03/1K',
    features: ['72B+ models access', '99.9% uptime SLA', 'Dedicated account manager', 'Custom fine-tuning', 'On-call support'],
    highlighted: false
  }
];

// Model Pricing Matrix
const MODEL_PRICING_MATRIX = {
  headers: ['1-5 Users', '5-20 Users', '20-50 Users', '50-100 Users', '100-250 Users'],
  rows: [
    { model: '7B Cost', prices: ['$580', '$1,160', '$1,740', '$2,900', '$4,640'] },
    { model: '7B Speed', prices: ['$1,000', '$2,000', '$3,000', '$5,000', '$7,480'] },
    { model: '72B Cost', prices: ['$2,290', '$4,580', '$9,160', '$13,740', '$27,480'] },
    { model: '72B Speed', prices: ['$7,980', '$15,960', '$23,940', '$39,900', '$59,850'] },
    { model: 'V3 Cost', prices: ['$4,780', '$9,560', '$19,120', '$38,240', '$76,480'] },
    { model: 'V3 Speed', prices: ['$34,200', '$68,400', '$102,600', '$171,000', '$256,500'] },
    { model: 'K2 Cost', prices: ['$9,560', '$19,120', '$38,240', '$76,480', '$152,960'] },
    { model: 'K2 Speed', prices: ['$34,200', '$68,400', '$102,600', '$171,000', '$256,500'] }
  ]
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [view, setView] = useState<'dedicated' | 'api'>('dedicated');
  const [showMatrix, setShowMatrix] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="pt-40 pb-32 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8"
          >
            Transparent Infrastructure.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-2xl mx-auto mb-16"
          >
            Choose between dedicated hardware clusters for maximum security or our high-performance API for rapid scaling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="inline-flex p-1.5 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-inner">
              <button
                onClick={() => setView('dedicated')}
                className={`px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${view === 'dedicated' ? 'bg-white dark:bg-slate-800 shadow-md text-primary' : 'text-slate-500'}`}
              >
                Dedicated Clusters
              </button>
              <button
                onClick={() => setView('api')}
                className={`px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${view === 'api' ? 'bg-white dark:bg-slate-800 shadow-md text-primary' : 'text-slate-500'}`}
              >
                Managed API
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className={`text-xs font-bold uppercase tracking-widest ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="w-12 h-6 bg-slate-200 dark:bg-slate-800 rounded-full relative p-1 transition-colors"
              >
                <motion.div
                  animate={{ x: isAnnual ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-primary rounded-full"
                />
              </button>
              <span className={`text-xs font-bold uppercase tracking-widest ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
                Yearly <span className="text-emerald-500 ml-1">(-20%)</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {view === 'dedicated' ? (
            <>
              {/* Starter */}
              <motion.div
                {...fadeInUp}
                className="p-12 rounded-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Rocket size={20} className="text-slate-500" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Cluster Starter</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black">${isAnnual ? '990' : '1,240'}</span>
                    <span className="text-slate-400 font-bold">/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-8">Perfect for small teams getting started</p>
                  <ul className="space-y-4 mb-10">
                    {['Llama 3 8B, Mistral 7B', 'Dedicated RTX 4090', 'Custom Subdomain', 'Standard Support', '5 Team Members'].map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <Check size={16} className="text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-center text-sm font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  Configure
                </Link>
              </motion.div>

              {/* Professional */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="p-12 rounded-5xl bg-slate-950 text-white shadow-2xl relative flex flex-col justify-between scale-105 border border-primary/20"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="absolute top-8 right-8 text-primary"><ArrowUpRight size={24}/></div>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Building2 size={20} className="text-primary" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">Professional Pod</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black">${isAnnual ? '12,920' : '16,150'}</span>
                    <span className="text-slate-500 font-bold">/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-8">For growing teams with serious needs</p>
                  <ul className="space-y-4 mb-10">
                    {['Llama 3 70B, Qwen 72B', 'Dedicated 2x H100', 'White-label Domain', 'SSO & Priority Support', '20 Team Members', 'API Access Included'].map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-medium">
                        <Check size={16} className="text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-5 bg-primary rounded-2xl text-center text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all">
                  Get Started
                </Link>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="p-12 rounded-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group hover:border-primary/30 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Users size={20} className="text-slate-500" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Enterprise Farm</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-black">${isAnnual ? '51,680' : '64,600'}</span>
                    <span className="text-slate-400 font-bold">/mo</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-8">For organizations requiring maximum power</p>
                  <ul className="space-y-4 mb-10">
                    {['DeepSeek V3, Kimi K2', 'Dedicated 8x H100', '99.99% SLA Guarantee', 'Dedicated Account CSM', 'Unlimited Team Members', 'Custom Fine-tuning'].map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                        <Check size={16} className="text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="w-full py-5 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-center text-sm font-black uppercase tracking-widest transition-all hover:opacity-90">
                  Talk to Sales
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              {/* API Pricing Cards */}
              {API_PRICING_TIERS.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className={`p-12 rounded-5xl flex flex-col justify-between transition-all ${
                    tier.highlighted
                      ? 'bg-slate-950 text-white shadow-2xl scale-105 border border-primary/20 relative'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary/30 hover:shadow-xl'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary rounded-full text-xs font-black uppercase tracking-widest text-white">
                      Best Value
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xs font-black uppercase tracking-widest mb-6 ${tier.highlighted ? 'text-primary' : 'text-slate-400'}`}>{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-5xl font-black">${isAnnual ? Math.floor(tier.price * 0.8) : tier.price}</span>
                      <span className={`font-bold ${tier.highlighted ? 'text-slate-500' : 'text-slate-400'}`}>/mo</span>
                    </div>
                    <div className={`text-sm mb-8 ${tier.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                      <span className="font-bold text-lg">{tier.tokens}</span> tokens included
                    </div>
                    <div className={`px-4 py-2 rounded-lg mb-8 text-xs font-bold ${tier.highlighted ? 'bg-white/10 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                      Overage: {tier.overage} tokens
                    </div>
                    <ul className="space-y-4 mb-10">
                      {tier.features.map(f => (
                        <li key={f} className={`flex items-center gap-2 text-sm font-medium ${tier.highlighted ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                          <Check size={14} className="text-emerald-500 flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                    tier.highlighted
                      ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90'
                      : 'border-2 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}>
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Add-on Services Section */}
        <motion.section
          {...fadeInUp}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Add-on Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Enhance your deployment with professional services and premium features.</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-slate-400">Service</th>
                    <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-slate-400">Price</th>
                    <th className="px-8 py-6 text-left text-xs font-black uppercase tracking-widest text-slate-400 hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {ADDON_SERVICES.map((service, idx) => (
                    <motion.tr
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-slate-100 dark:border-slate-800/50 last:border-0 hover:bg-white dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-8 py-5">
                        <span className="font-bold">{service.name}</span>
                        <span className="block md:hidden text-xs text-slate-400 mt-1">{service.note}</span>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`font-black ${service.price === 'Included' ? 'text-emerald-500' : 'text-primary'}`}>
                          {service.price}
                        </span>
                        <span className="text-slate-400 text-sm">{service.period}</span>
                      </td>
                      <td className="px-8 py-5 text-slate-500 text-sm hidden md:table-cell">{service.note}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* Model Pricing Matrix */}
        <motion.section
          {...fadeInUp}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Dedicated Cluster Pricing Matrix</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Detailed pricing based on model size, performance tier, and team size.</p>
          </div>

          <button
            onClick={() => setShowMatrix(!showMatrix)}
            className="w-full mb-8 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center gap-3 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {showMatrix ? 'Hide' : 'Show'} Full Pricing Matrix
            {showMatrix ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          {showMatrix && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-slate-50 dark:bg-slate-900/50 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-slate-900 dark:bg-slate-950 text-white">
                      <th className="px-6 py-5 text-left text-xs font-black uppercase tracking-widest">Model Tier</th>
                      {MODEL_PRICING_MATRIX.headers.map(header => (
                        <th key={header} className="px-6 py-5 text-center text-xs font-black uppercase tracking-widest">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MODEL_PRICING_MATRIX.rows.map((row, idx) => (
                      <motion.tr
                        key={row.model}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`border-b border-slate-100 dark:border-slate-800/50 ${
                          row.model.includes('Speed')
                            ? 'bg-primary/5 dark:bg-primary/10'
                            : 'hover:bg-white dark:hover:bg-slate-800/50'
                        } transition-colors`}
                      >
                        <td className="px-6 py-4">
                          <span className="font-bold">{row.model}</span>
                          {row.model.includes('Speed') && (
                            <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/20 text-primary">High Performance</span>
                          )}
                          {row.model.includes('Cost') && (
                            <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">Cost Optimized</span>
                          )}
                        </td>
                        {row.prices.map((price, i) => (
                          <td key={i} className="px-6 py-4 text-center font-bold text-slate-700 dark:text-slate-300">
                            {price}<span className="text-slate-400 text-xs font-normal">/mo</span>
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-8 py-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">Cost</span>
                    <span className="text-slate-500">Optimized for throughput/dollar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary/20 text-primary">Speed</span>
                    <span className="text-slate-500">Optimized for lowest latency</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick comparison cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <motion.div
              {...fadeInUp}
              className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50"
            >
              <h4 className="font-bold text-lg mb-2 text-emerald-700 dark:text-emerald-400">7B Models</h4>
              <p className="text-emerald-600/80 dark:text-emerald-300/70 text-sm mb-4">Fast responses, great for chatbots</p>
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">From $580<span className="text-base font-normal">/mo</span></div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-indigo-100/50 dark:from-primary/20 dark:to-indigo-900/20 border border-primary/20"
            >
              <h4 className="font-bold text-lg mb-2 text-primary">72B Models</h4>
              <p className="text-indigo-600/80 dark:text-indigo-300/70 text-sm mb-4">Advanced reasoning, enterprise use</p>
              <div className="text-3xl font-black text-primary">From $2,290<span className="text-base font-normal">/mo</span></div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200/50 dark:from-slate-800 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700"
            >
              <h4 className="font-bold text-lg mb-2">V3/K2 Models</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">State-of-the-art, frontier performance</p>
              <div className="text-3xl font-black">From $4,780<span className="text-base font-normal">/mo</span></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Compare Features Section */}
        <motion.section
          {...fadeInUp}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Compare Plans</h2>
            <p className="text-slate-500">All the features you need at every tier</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="px-8 py-6 text-left text-sm font-bold">Feature</th>
                    <th className="px-6 py-6 text-center text-sm font-bold">Starter</th>
                    <th className="px-6 py-6 text-center text-sm font-bold bg-primary/5">Professional</th>
                    <th className="px-6 py-6 text-center text-sm font-bold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Dedicated GPUs', starter: '1x RTX 4090', pro: '2x H100', enterprise: '8x H100' },
                    { feature: 'Max Model Size', starter: '7B', pro: '72B', enterprise: '671B (MoE)' },
                    { feature: 'Team Members', starter: '5', pro: '20', enterprise: 'Unlimited' },
                    { feature: 'White-label UI', starter: true, pro: true, enterprise: true },
                    { feature: 'Custom Domain', starter: false, pro: true, enterprise: true },
                    { feature: 'SSO Integration', starter: false, pro: true, enterprise: true },
                    { feature: 'API Access', starter: 'Add-on', pro: true, enterprise: true },
                    { feature: 'SLA Guarantee', starter: '99.5%', pro: '99.9%', enterprise: '99.99%' },
                    { feature: 'Support Response', starter: '24hr', pro: '4hr', enterprise: '1hr' },
                    { feature: 'Dedicated CSM', starter: false, pro: false, enterprise: true },
                    { feature: 'Custom Fine-tuning', starter: false, pro: 'Add-on', enterprise: true }
                  ].map((row, idx) => (
                    <tr key={row.feature} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                      <td className="px-8 py-4 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? <Check size={18} className="text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>
                        ) : (
                          <span className="text-sm text-slate-600 dark:text-slate-400">{row.starter}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center bg-primary/5">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? <Check size={18} className="text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>
                        ) : (
                          <span className="text-sm font-medium">{row.pro}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? <Check size={18} className="text-emerald-500 mx-auto" /> : <span className="text-slate-300">—</span>
                        ) : (
                          <span className="text-sm text-slate-600 dark:text-slate-400">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight mb-16 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {FAQ_ITEMS.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="font-bold text-lg mb-4 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px]">?</span>
                  {faq.q}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          {...fadeInUp}
          className="mt-32 text-center"
        >
          <div className="p-16 rounded-4xl bg-gradient-to-br from-slate-900 to-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Not sure which plan is right for you?</h3>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto">Our team will help you find the perfect configuration for your use case and budget.</p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                Schedule a Consultation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
