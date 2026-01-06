
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Cpu,
  Globe,
  Lock,
  Layout,
  Activity,
  ArrowUpRight,
  Server,
  Cloud,
  X,
  Check,
  Mail,
  Send,
  MessageSquare,
  Code,
  Database,
  Layers,
  ChevronDown,
  Play,
  Sparkles,
  Bot,
  Brain,
  Workflow,
  Users,
  Building2,
  Phone,
  MapPin,
  Star,
  Quote,
  ArrowDown,
  Minus,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURES, MODELS, TESTIMONIALS } from '../constants';

const FeatureIcon = ({ icon }: { icon: string }) => {
  const icons: Record<string, React.ReactNode> = {
    Cpu: <Cpu size={22} />,
    Globe: <Globe size={22} />,
    Lock: <Lock size={22} />,
    Layout: <Layout size={22} />,
    Zap: <Zap size={22} />,
    Activity: <Activity size={22} />
  };
  return icons[icon] || <Zap size={22} />;
};

// Typewriter effect component
const TypewriterText = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-primary italic">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Animated counter component
const AnimatedCounter = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
};

// FAQ data
const FAQ_ITEMS = [
  {
    q: "How quickly can I get started?",
    a: "Most deployments are live within 24-48 hours. Our team handles all infrastructure provisioning, model configuration, and white-label customization so you can focus on building your product."
  },
  {
    q: "Is my data truly private?",
    a: "Absolutely. Your deployment runs on dedicated hardware in isolated network segments. We never access, log, or train on your data. You retain 100% ownership and control."
  },
  {
    q: "Can I switch between models?",
    a: "Yes! You can hot-swap between any supported model on your cluster. Upgrading to larger models may require additional GPU resources which we can provision within hours."
  },
  {
    q: "What support is included?",
    a: "All plans include Slack/email support with our engineering team. Professional and Enterprise tiers get priority response times, dedicated account managers, and 24/7 monitoring."
  },
  {
    q: "Do you offer custom fine-tuning?",
    a: "Yes. We can fine-tune any open-source model on your proprietary data. The resulting weights are yours exclusively - we never share or reuse customer fine-tunes."
  },
  {
    q: "What compliance certifications do you have?",
    a: "We're SOC 2 Type II certified and GDPR compliant. We can also deploy in HIPAA-compliant configurations for healthcare customers and provide BAA agreements."
  }
];

// Extended testimonials for scrolling section
const EXTENDED_TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'NexaHealth',
    quote: 'FullStackLLM allowed us to deploy a private Llama instance for medical research in under an hour. The security compliance was a game changer for our HIPAA requirements.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'James Wilson',
    role: 'Head of Engineering',
    company: 'FinSecure',
    quote: 'Moving from public APIs to a dedicated H100 cluster reduced our latency by 60% and secured our sensitive financial data. The ROI was immediate.',
    rating: 5,
    image: 'https://picsum.photos/seed/james/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Lead',
    company: 'EduSphere',
    quote: 'The white-labeled interface is so seamless our students think we built the AI from scratch. Exceptional service and support from day one.',
    rating: 5,
    image: 'https://picsum.photos/seed/elena/100/100'
  },
  {
    name: 'Michael Chang',
    role: 'VP of Technology',
    company: 'LegalFlow',
    quote: 'We evaluated 8 different LLM providers. FullStackLLM was the only one that met our strict data residency and security requirements while delivering GPT-4 level performance.',
    rating: 5,
    image: 'https://picsum.photos/seed/michael/100/100'
  },
  {
    name: 'Amanda Foster',
    role: 'Director of AI',
    company: 'RetailMax',
    quote: 'The dedicated support team feels like an extension of our own engineering org. They helped us optimize our prompts and reduced inference costs by 40%.',
    rating: 5,
    image: 'https://picsum.photos/seed/amanda/100/100'
  },
  {
    name: 'David Kim',
    role: 'CIO',
    company: 'GlobalBank',
    quote: 'Enterprise AI without the enterprise headaches. FullStackLLM handles all the infrastructure complexity so our team can focus on building customer-facing products.',
    rating: 5,
    image: 'https://picsum.photos/seed/david/100/100'
  }
];

// How It Works steps
const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Choose Your Model',
    description: 'Select from our catalog of optimized open-source models - Llama, DeepSeek, Mistral, Qwen, and more.',
    icon: Brain
  },
  {
    step: 2,
    title: 'Configure Your Cluster',
    description: 'We provision dedicated GPU hardware and configure networking, security, and your white-label interface.',
    icon: Server
  },
  {
    step: 3,
    title: 'Connect Your Team',
    description: 'Integrate with SSO, set up API access, and invite your team to start using your private AI.',
    icon: Users
  },
  {
    step: 4,
    title: 'Scale With Confidence',
    description: 'Our DevOps team monitors 24/7, handles updates, and scales resources as your usage grows.',
    icon: Workflow
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const heroWords = ['Professionally Managed.', 'Securely Hosted.', 'Fully Dedicated.', 'Enterprise Ready.'];

  return (
    <div className="overflow-hidden bg-white dark:bg-dark">
      {/* Hero Section with Typewriter */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 mesh-bg-light">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-10 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Enterprise GPU Clusters Online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05]"
          >
            Your AI. Your Cloud. <br />
            <TypewriterText words={heroWords} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Turnkey hosted open-source LLMs with white-labeled interfaces. Dedicated H100s for security, speed, and total data privacy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="group w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-bold shadow-2xl shadow-primary/30 transition-all hover:-translate-y-1 hover:shadow-primary/40 active:scale-95 flex items-center justify-center gap-2">
              Start Your Deployment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing" className="group w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-bold border border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2">
              View Specs
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex flex-col items-center gap-2 text-slate-400"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">Scroll to explore</span>
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'SOC 2 TYPE II', icon: <Shield size={16}/> },
              { label: '99.9% UPTIME', icon: <Activity size={16}/> },
              { label: 'GDPR READY', icon: <Lock size={16}/> },
              { label: 'USA HOSTED', icon: <Globe size={16}/> }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className="flex flex-col items-center gap-3 group cursor-default"
              >
                <span className="text-slate-400 group-hover:text-primary transition-colors">{item.icon}</span>
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating animation elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 hidden lg:flex items-center justify-center"
        >
          <Bot size={28} className="text-primary" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[10%] w-14 h-14 rounded-xl bg-accent/10 backdrop-blur-sm border border-accent/20 hidden lg:flex items-center justify-center"
        >
          <Sparkles size={24} className="text-accent" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-[15%] w-12 h-12 rounded-xl bg-success/10 backdrop-blur-sm border border-success/20 hidden lg:flex items-center justify-center"
        >
          <Code size={20} className="text-success" />
        </motion.div>
      </section>

      {/* Visual Work Showcase - Animated Grid */}
      <section className="py-20 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Powering Enterprise AI</h2>
            <p className="text-slate-400">Trusted by teams building the future</p>
          </motion.div>

          {/* Animated logo/tech strip */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-12 items-center"
            >
              {[...Array(3)].map((_, setIdx) => (
                <div key={setIdx} className="flex gap-12 items-center">
                  {['Llama 3', 'DeepSeek V3', 'Mistral', 'Qwen 2', 'H100', 'NVIDIA', 'Kubernetes', 'Docker'].map((tech, idx) => (
                    <div key={`${setIdx}-${idx}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 whitespace-nowrap">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-slate-300 font-semibold text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: 500, suffix: '+', label: 'Deployments' },
              { value: 99, suffix: '.99%', label: 'Uptime SLA' },
              { value: 50, suffix: 'ms', label: 'Avg Latency' },
              { value: 24, suffix: '/7', label: 'Support' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Old Way vs The New Way */}
      <section className="py-32 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Stop Wrestling With Infrastructure
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              There's a better way to deploy enterprise AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-4xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/50 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-red-400">
                <X size={32} strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-red-500 mb-8">The Old Way</h3>
              <ul className="space-y-6">
                {[
                  'Months of infrastructure setup',
                  'Hire ML engineers at $300K+/year',
                  'Constant GPU availability issues',
                  'Security vulnerabilities from DIY',
                  'No dedicated support when things break',
                  'Your data on shared infrastructure'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-6 h-6 rounded-full bg-red-200 dark:bg-red-900/50 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Minus size={14} />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* New Way */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-4xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-200 dark:border-emerald-900/50 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-emerald-400">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3 className="text-xl font-black uppercase tracking-widest text-emerald-500 mb-8">The FullStackLLM Way</h3>
              <ul className="space-y-6">
                {[
                  'Live in 24-48 hours',
                  'Fully managed by our expert team',
                  'Dedicated H100/4090 GPUs always available',
                  'Enterprise security built-in (SOC 2, HIPAA)',
                  '24/7 monitoring and priority support',
                  '100% isolated, single-tenant infrastructure'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-200 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} />
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              How It Works
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From zero to production AI in four simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden lg:block"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative group"
                >
                  <div className="p-8 rounded-4xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all h-full">
                    {/* Step number */}
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-6">
                      <step.icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow for desktop */}
                  {idx < HOW_IT_WORKS.length - 1 && (
                    <div className="absolute top-24 -right-4 text-primary hidden lg:block z-10">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bento Feature Section */}
      <section className="py-32 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Designed for scale. <br />Built for trust.</h2>
            <p className="text-slate-500 text-lg max-w-xl">We handle the complex orchestration so you can focus on building AI-powered products.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Bento */}
            <motion.div {...fadeInUp} className="md:col-span-2 p-10 rounded-4xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm bento-card relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Server size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Dedicated Single-Tenant Clusters</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md leading-relaxed mb-6">
                  Unlike shared APIs, your instances are completely isolated. No noisy neighbors, zero rate-limit issues, and absolute hardware exclusivity.
                </p>
                <Link to="/docs" className="text-primary font-bold text-sm flex items-center gap-1 group/link">
                  Read Infra Specs
                  <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform"/>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-all"></div>

              {/* Animated visual */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute bottom-8 right-8 w-32 h-32 opacity-10"
              >
                <Database size={128} />
              </motion.div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{delay: 0.1}} className="p-10 rounded-4xl bg-slate-900 text-white shadow-2xl bento-card flex flex-col justify-between relative overflow-hidden group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Layout size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">White-Label Console</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Your brand, your colors, your domain. A seamless experience for your employees and customers.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase">Available in all plans</span>
              </div>

              {/* Animated shimmer */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />
            </motion.div>

            {FEATURES.slice(0, 3).map((f, i) => (
              <motion.div key={f.id} {...fadeInUp} transition={{delay: 0.2 + (i*0.1)}} className="p-10 rounded-4xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm bento-card group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <FeatureIcon icon={f.icon} />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Grid */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl font-extrabold tracking-tight mb-6">The World's Best Models. <br />Unchained.</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We optimize the most capable open-source weights for production performance on bare-metal clusters.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MODELS.map((model, idx) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-5xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-2xl hover:border-primary/20 transition-all text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-800 text-primary flex items-center justify-center mx-auto mb-8 font-black text-3xl group-hover:bg-primary group-hover:text-white transition-all"
                >
                  {model.name.charAt(0)}
                </motion.div>
                <h4 className="text-xl font-bold mb-2">{model.name}</h4>
                <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-6">{model.parameters} • {model.context}</div>
                <p className="text-slate-500 text-sm mb-8 line-clamp-2 h-10">{model.description}</p>
                <Link to="/models" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:gap-2 transition-all">
                  Full Specs <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Testimonials */}
      <section className="py-32 bg-white dark:bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Loved by Engineering Teams
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              See what industry leaders are saying about FullStackLLM
            </p>
          </motion.div>
        </div>

        {/* Scrolling testimonial cards */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark to-transparent z-10"></div>

          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex gap-8"
          >
            {[...EXTENDED_TESTIMONIALS, ...EXTENDED_TESTIMONIALS].map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[450px] p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-sm">{t.name}</h5>
                    <p className="text-xs text-slate-400">{t.role} at {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to know about our platform
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-slate-500 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Let's Talk AI Infrastructure
              </h2>
              <p className="text-slate-500 text-lg mb-12 max-w-lg">
                Ready to deploy your private LLM? Our team is here to help you design the perfect solution.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <a href="mailto:hello@fullstackllm.com" className="text-slate-500 hover:text-primary transition-colors">hello@fullstackllm.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <a href="tel:+1-888-555-0123" className="text-slate-500 hover:text-primary transition-colors">+1 (888) 555-0123</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-slate-500">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-sm font-bold">Enterprise Sales Team Online</span>
                </div>
                <p className="text-slate-500 text-sm">Average response time: Under 2 hours</p>
              </div>
            </motion.div>

            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <h3 className="text-2xl font-bold mb-8">Request a Demo</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Acme Inc"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    rows={4}
                    placeholder="Tell us about your AI infrastructure needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Stay Updated on AI Infrastructure
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Get the latest on open-source LLMs, enterprise AI best practices, and FullStackLLM updates delivered to your inbox.
            </p>

            {!subscribed ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe <Mail size={18} />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500/20 text-emerald-400 font-bold"
              >
                <Check size={20} /> You're subscribed! Check your inbox.
              </motion.div>
            )}

            <p className="text-slate-600 text-xs mt-6">No spam, ever. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-5xl bg-primary overflow-hidden p-16 md:p-32 text-center shadow-2xl shadow-primary/40"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 to-accent opacity-50"></div>

            {/* Animated background elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent/30 blur-3xl"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-8"
              >
                <Sparkles size={14} /> Ready to Transform Your AI?
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">Your Private AI <br />Journey Starts Here.</h2>
              <p className="text-indigo-100 text-lg mb-12 max-w-xl mx-auto">Scale your operations with dedicated enterprise-grade open-source deployments.</p>
              <Link to="/contact" className="group inline-flex items-center gap-3 px-12 py-5 bg-white text-primary rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Request Deployment Access
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
