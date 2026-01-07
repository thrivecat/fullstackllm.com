
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Book,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle2,
  FileText,
  Code2,
  Shield,
  Zap,
  Terminal,
  Key,
  Clock,
  Users,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const DOCS_FEATURES = [
  {
    icon: <FileText size={24} />,
    title: 'Quick Start Guides',
    desc: 'Get your first LLM instance running in under 5 minutes'
  },
  {
    icon: <Code2 size={24} />,
    title: 'API Reference',
    desc: 'Complete OpenAI-compatible API documentation'
  },
  {
    icon: <Terminal size={24} />,
    title: 'SDK Libraries',
    desc: 'Python, Node.js, Go, and more client libraries'
  },
  {
    icon: <Shield size={24} />,
    title: 'Security Best Practices',
    desc: 'Enterprise security configuration guides'
  },
  {
    icon: <Key size={24} />,
    title: 'SSO Integration',
    desc: 'Okta, Azure AD, Google Workspace setup'
  },
  {
    icon: <Zap size={24} />,
    title: 'Performance Tuning',
    desc: 'Optimize inference speed and throughput'
  }
];

const DOCS_SECTIONS = [
  'Getting Started',
  'API Reference',
  'Authentication',
  'Model Configuration',
  'White-labeling',
  'Custom Domains',
  'SSO Setup',
  'Rate Limiting',
  'Monitoring & Logs',
  'Best Practices'
];

export default function Docs() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate a brief delay then redirect
    setTimeout(() => {
      // Open portal in new tab
      window.open('https://portal.fullstackllm.com', '_blank');
      setIsSubmitting(false);
    }, 1000);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
            <Book size={16} />
            Documentation Portal
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Developer Documentation
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Comprehensive guides, API references, and best practices for deploying
            and managing your private LLM infrastructure.
          </p>
        </motion.div>

        {/* Locked Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-24"
        >
          <div className="relative p-10 rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              {/* Lock Icon */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center"
                >
                  <Lock size={40} className="text-primary" />
                </motion.div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Access Required
              </h2>
              <p className="text-slate-300 text-center mb-8 max-w-md mx-auto">
                Enter your work email to access the full documentation portal with
                API references, code samples, and integration guides.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Redirecting...
                    </>
                  ) : (
                    <>
                      Access Documentation
                      <ExternalLink size={18} />
                    </>
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={16} className="text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Instant access
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Enterprise-ready
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's Inside Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Sparkles size={16} />
              What's Inside
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Everything you need to integrate
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our documentation covers every aspect of deploying, managing, and scaling
              your private LLM infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCS_FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Documentation Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Structured for developers
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Navigate through clearly organized sections, from quick start guides
                to advanced configuration. Everything is searchable and includes
                copy-paste code examples.
              </p>

              <div className="space-y-3">
                {DOCS_SECTIONS.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50"
                  >
                    <div className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="font-medium">{section}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[2rem] blur-3xl" />
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono ml-2">quickstart.py</span>
                </div>
                <pre className="p-6 text-sm font-mono overflow-x-auto">
                  <code className="text-slate-300">
                    <span className="text-purple-400">from</span> openai <span className="text-purple-400">import</span> OpenAI{'\n\n'}
                    <span className="text-slate-500"># Initialize with your FullStackLLM endpoint</span>{'\n'}
                    client = OpenAI({'\n'}
                    {'  '}api_key=<span className="text-green-400">"fsl_live_xxxxx"</span>,{'\n'}
                    {'  '}base_url=<span className="text-green-400">"https://api.yourcompany.fsl.com/v1"</span>{'\n'}
                    ){'\n\n'}
                    <span className="text-slate-500"># Make your first request</span>{'\n'}
                    response = client.chat.completions.create({'\n'}
                    {'  '}model=<span className="text-green-400">"llama-3-70b"</span>,{'\n'}
                    {'  '}messages=[{'\n'}
                    {'    '}{'{'}<span className="text-blue-400">"role"</span>: <span className="text-green-400">"user"</span>,{'\n'}
                    {'     '}<span className="text-blue-400">"content"</span>: <span className="text-green-400">"Hello, World!"</span>{'}'}{'\n'}
                    {'  '}]{'\n'}
                    ){'\n\n'}
                    <span className="text-purple-400">print</span>(response.choices[<span className="text-orange-400">0</span>].message.content)
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <FileText size={24} />, value: '200+', label: 'Documentation Pages' },
              { icon: <Code2 size={24} />, value: '50+', label: 'Code Examples' },
              { icon: <Users size={24} />, value: '5', label: 'SDK Languages' },
              { icon: <Clock size={24} />, value: '24/7', label: 'Support Access' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
