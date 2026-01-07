
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Scale,
  Briefcase,
  GraduationCap,
  Users,
  Code2,
  Building2,
  ShoppingCart,
  Plane,
  Factory,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Play,
  ChevronRight,
  Sparkles,
  Bot,
  FileText,
  MessageSquare,
  BarChart3,
  Lock,
  Globe,
  Clock,
  TrendingUp,
  Award,
  Target,
  Rocket
} from 'lucide-react';

// Typewriter effect for hero
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
    <span className="text-primary">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Animated stat counter
const AnimatedNumber = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const SOLUTIONS = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'HIPAA-Compliant AI',
    desc: 'Secure patient data analysis, clinical decision support, and medical documentation with zero data exposure.',
    icon: <Stethoscope size={32} />,
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    useCases: ['Clinical Documentation', 'Diagnostic Assistance', 'Drug Interaction Analysis', 'Patient Triage'],
    stats: { metric: '60%', label: 'Faster Documentation' },
    image: 'https://picsum.photos/seed/healthcare/600/400'
  },
  {
    id: 'legal',
    title: 'Legal',
    subtitle: 'Privileged & Confidential',
    desc: 'Contract analysis, legal research, and document review with attorney-client privilege protection.',
    icon: <Scale size={32} />,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    useCases: ['Contract Review', 'Legal Research', 'Due Diligence', 'Compliance Monitoring'],
    stats: { metric: '10x', label: 'Faster Review' },
    image: 'https://picsum.photos/seed/legal/600/400'
  },
  {
    id: 'finance',
    title: 'Finance',
    subtitle: 'SOC2 & PCI Compliant',
    desc: 'Private financial forecasting, risk analysis, and trading insights without data leaving your infrastructure.',
    icon: <Briefcase size={32} />,
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    useCases: ['Risk Assessment', 'Fraud Detection', 'Market Analysis', 'Regulatory Reporting'],
    stats: { metric: '40%', label: 'Cost Reduction' },
    image: 'https://picsum.photos/seed/finance/600/400'
  },
  {
    id: 'education',
    title: 'Education',
    subtitle: 'FERPA Compliant',
    desc: 'Personalized tutoring, curriculum development, and assessment tools with student data protection.',
    icon: <GraduationCap size={32} />,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    useCases: ['Personalized Tutoring', 'Content Generation', 'Assessment Creation', 'Research Assistance'],
    stats: { metric: '3x', label: 'Student Engagement' },
    image: 'https://picsum.photos/seed/education/600/400'
  },
  {
    id: 'customer-service',
    title: 'Customer Service',
    subtitle: 'Enterprise Support',
    desc: 'Intelligent support agents trained on your documentation, products, and internal knowledge bases.',
    icon: <Users size={32} />,
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    useCases: ['24/7 Support Bots', 'Ticket Triage', 'Knowledge Base Q&A', 'Sentiment Analysis'],
    stats: { metric: '80%', label: 'Ticket Deflection' },
    image: 'https://picsum.photos/seed/support/600/400'
  },
  {
    id: 'devops',
    title: 'DevOps & Engineering',
    subtitle: 'Code Security',
    desc: 'Private code assistants trained on your internal repositories without exposing proprietary code.',
    icon: <Code2 size={32} />,
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    useCases: ['Code Generation', 'Code Review', 'Documentation', 'Bug Detection'],
    stats: { metric: '50%', label: 'Dev Productivity' },
    image: 'https://picsum.photos/seed/devops/600/400'
  }
];

const ADDITIONAL_INDUSTRIES = [
  { icon: <Building2 size={24} />, name: 'Real Estate', desc: 'Property analysis & valuations' },
  { icon: <ShoppingCart size={24} />, name: 'E-Commerce', desc: 'Product recommendations' },
  { icon: <Plane size={24} />, name: 'Travel', desc: 'Booking & concierge services' },
  { icon: <Factory size={24} />, name: 'Manufacturing', desc: 'Quality control & logistics' }
];

const USE_CASE_EXAMPLES = [
  {
    industry: 'Healthcare',
    scenario: 'Clinical Documentation',
    before: 'Physicians spend 2+ hours daily on paperwork',
    after: 'AI drafts notes in real-time, reducing documentation time by 60%',
    icon: <FileText size={20} />
  },
  {
    industry: 'Legal',
    scenario: 'Contract Review',
    before: 'Associates manually review 100+ page contracts',
    after: 'AI highlights key clauses and risks in seconds',
    icon: <Scale size={20} />
  },
  {
    industry: 'Finance',
    scenario: 'Risk Analysis',
    before: 'Analysts manually compile data from multiple sources',
    after: 'AI aggregates and analyzes data instantly with full privacy',
    icon: <BarChart3 size={20} />
  }
];

const BENEFITS = [
  { icon: <Shield size={24} />, title: 'Data Sovereignty', desc: 'Your data never leaves your infrastructure' },
  { icon: <Lock size={24} />, title: 'Compliance Ready', desc: 'HIPAA, SOC2, GDPR, PCI-DSS compliant' },
  { icon: <Zap size={24} />, title: 'Zero Latency', desc: 'Dedicated GPUs for maximum performance' },
  { icon: <Globe size={24} />, title: 'Global Scale', desc: 'Deploy in any region worldwide' }
];

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(SOLUTIONS[0]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
            <Sparkles size={16} />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            AI Built for{' '}
            <TypewriterText words={['Healthcare', 'Legal', 'Finance', 'Education', 'Enterprise']} />
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            From HIPAA-compliant healthcare deployments to secure financial reasoning,
            we help industries leverage the power of open-source AI without compromising on privacy or compliance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all"
            >
              Schedule a Demo <ArrowRight size={18} />
            </Link>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
              <Play size={18} className="text-primary" /> Watch Overview
            </button>
          </div>
        </motion.div>

        {/* Floating illustration elements */}
        <div className="relative mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-xl animate-float"
          >
            <Bot size={32} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -top-5 right-20 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-xl animate-float"
            style={{ animationDelay: '1s' }}
          >
            <Shield size={24} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute top-20 right-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white shadow-xl animate-float"
            style={{ animationDelay: '2s' }}
          >
            <Lock size={20} />
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-slate-900 text-white mb-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold mb-1">{b.title}</h3>
                <p className="text-sm text-slate-400">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Solutions by Industry</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Purpose-built AI deployments tailored to your industry's unique requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solution Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTIONS.map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveSolution(solution)}
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-8 rounded-[2rem] border-2 cursor-pointer transition-all duration-500 ${
                  activeSolution.id === solution.id
                    ? 'border-primary bg-primary/5 shadow-xl'
                    : 'border-slate-200 dark:border-slate-800 hover:border-primary/50 bg-white dark:bg-slate-900'
                }`}
              >
                {/* Animated background on hover */}
                <AnimatePresence>
                  {hoveredCard === solution.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 ${solution.bgColor} rounded-[2rem] -z-10`}
                    />
                  )}
                </AnimatePresence>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} text-white flex items-center justify-center mb-6 shadow-lg transition-transform ${hoveredCard === solution.id ? 'scale-110' : ''}`}>
                  {solution.icon}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{solution.subtitle}</div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {solution.desc}
                </p>

                {/* Stats badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">
                  <TrendingUp size={14} className="text-green-500" />
                  <span className="font-bold">{solution.stats.metric}</span>
                  <span className="text-slate-500">{solution.stats.label}</span>
                </div>

                {activeSolution.id === solution.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"
                  >
                    <CheckCircle2 size={18} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Solution Detail Panel */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="sticky top-32 p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={activeSolution.image}
                    alt={activeSolution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activeSolution.color} opacity-20`} />
                </div>

                <h3 className="text-2xl font-bold mb-4">{activeSolution.title} Use Cases</h3>
                <ul className="space-y-3 mb-8">
                  {activeSolution.useCases.map((useCase, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                      <span className="font-medium">{useCase}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${activeSolution.color} text-white rounded-xl font-bold hover:opacity-90 transition-all`}
                >
                  Get {activeSolution.title} Solution <ArrowRight size={18} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 mb-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Target size={16} />
              Real Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Transformation</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See how enterprises are revolutionizing their workflows with private AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {USE_CASE_EXAMPLES.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {example.icon}
                  </div>
                  <div>
                    <div className="font-bold">{example.industry}</div>
                    <div className="text-xs text-slate-500">{example.scenario}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <div className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">Before</div>
                    <p className="text-sm text-red-700 dark:text-red-300">{example.before}</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <ChevronRight size={16} className="rotate-90" />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400 mb-2">After</div>
                    <p className="text-sm text-green-700 dark:text-green-300">{example.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">More Industries We Serve</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Custom solutions for every sector
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ADDITIONAL_INDUSTRIES.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center cursor-pointer hover:shadow-xl hover:border-primary transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {industry.icon}
              </div>
              <h3 className="font-bold mb-1">{industry.name}</h3>
              <p className="text-xs text-slate-500">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mb-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Trusted by Leaders</h2>
            <p className="text-xl text-slate-400">Powering innovation across industries</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: '+', label: 'Enterprise Clients' },
              { value: 50, suffix: 'M+', label: 'API Calls/Day' },
              { value: 99.9, suffix: '%', label: 'Uptime SLA' },
              { value: 30, suffix: '+', label: 'Countries' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <Clock size={16} />
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Deploy in Days, Not Months</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Consultation', desc: 'We analyze your requirements and compliance needs', icon: <MessageSquare size={24} /> },
            { step: '02', title: 'Configuration', desc: 'Custom model selection and infrastructure setup', icon: <Code2 size={24} /> },
            { step: '03', title: 'Deployment', desc: 'Secure deployment on dedicated GPU clusters', icon: <Rocket size={24} /> },
            { step: '04', title: 'Integration', desc: 'API integration and team onboarding', icon: <Award size={24} /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {i < 3 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
              )}
              <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow text-center">
                <div className="text-5xl font-black text-primary/20 mb-4">{item.step}</div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-primary via-primary/90 to-primary text-white text-center overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 left-20 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"
            >
              <Shield size={24} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-20 right-20 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"
            >
              <Zap size={24} />
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-bold mb-6">
              <Sparkles size={16} />
              Don't See Your Industry?
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">We Build Custom Solutions</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Our team specializes in building bespoke LLM infrastructure for complex, high-compliance environments.
              Let's design a solution tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-slate-100 transition-all hover:scale-105"
              >
                Talk to an Architect <ArrowRight size={18} />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
