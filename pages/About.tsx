
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Heart,
  Zap,
  Globe,
  Users,
  Award,
  Target,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  MapPin,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated counter component
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span id={`counter-${end}`}>{count}{suffix}</span>;
};

// Typing text animation
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

const TEAM_MEMBERS = [
  {
    name: 'Alex Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former ML Infrastructure Lead at Google. 15+ years building scalable AI systems.',
    image: 'https://picsum.photos/seed/alex/400/400'
  },
  {
    name: 'Sarah Mitchell',
    role: 'CTO & Co-Founder',
    bio: 'Ex-AWS Principal Engineer. Architect of multiple billion-dollar cloud platforms.',
    image: 'https://picsum.photos/seed/sarahm/400/400'
  },
  {
    name: 'Marcus Johnson',
    role: 'VP of Engineering',
    bio: 'Built ML infrastructure at Meta serving 3B+ users. Open source contributor.',
    image: 'https://picsum.photos/seed/marcus/400/400'
  },
  {
    name: 'Emily Zhang',
    role: 'Head of Customer Success',
    bio: 'Enterprise success leader from Snowflake. Passionate about customer outcomes.',
    image: 'https://picsum.photos/seed/emily/400/400'
  }
];

const MILESTONES = [
  { year: '2023', title: 'Founded', desc: 'Started with a vision to democratize enterprise AI' },
  { year: '2024', title: 'First 100 Customers', desc: 'Rapid adoption across healthcare, finance, and legal' },
  { year: '2024', title: 'Series A', desc: '$25M funding to accelerate global expansion' },
  { year: '2025', title: 'Global Scale', desc: '500+ deployments across 30+ countries' }
];

const VALUES = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Privacy First",
    desc: "Your data never leaves your dedicated cluster. Zero data retention, zero compromise.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Globe size={28} />,
    title: "Open Source Champion",
    desc: "We believe in the power of community. No vendor lock-in, full transparency.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Zap size={28} />,
    title: "Raw Performance",
    desc: "No multi-tenant overhead. Every teraflop of GPU power is yours alone.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Heart size={28} />,
    title: "Human-First Support",
    desc: "Real engineers, real conversations. We treat your infrastructure as our own.",
    color: "from-pink-500 to-rose-500"
  }
];

export default function About() {
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
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8">
            <Sparkles size={16} />
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Democratizing{' '}
            <TypewriterText words={['Enterprise AI', 'Private LLMs', 'Open Source', 'Innovation']} />
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            FullStackLLM was founded by a team of open-source enthusiasts and infrastructure engineers who believe that high-performance AI shouldn't require compromising on data privacy or paying exorbitant API fees.
          </p>
        </motion.div>

        {/* Floating Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 rounded-[2rem] bg-gradient-to-r from-slate-900 to-slate-800 text-white grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: 500, suffix: '+', label: 'Enterprise Deployments' },
            { value: 99.9, suffix: '%', label: 'Uptime SLA' },
            { value: 30, suffix: '+', label: 'Countries Served' },
            { value: 24, suffix: '/7', label: 'Expert Support' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Target size={16} />
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built for the next decade of AI</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              As open-source models continue to outperform proprietary alternatives, the challenge shifts from "which model" to "how to host it safely and efficiently."
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              FullStackLLM bridges that gap, providing the DevOps sophistication and enterprise security required to run models like Llama 3, DeepSeek, and Qwen at massive scale — all while maintaining complete data sovereignty.
            </p>

            <div className="space-y-4">
              {[
                'No data ever sent to third-party APIs',
                'Full compliance with GDPR, HIPAA, SOC2',
                'Models run on your dedicated infrastructure',
                'OpenAI-compatible API for easy migration'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[3rem] blur-3xl" />
            <img
              src="https://picsum.photos/seed/teamwork/800/600"
              alt="Team collaboration"
              className="relative rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black">10x</div>
                  <div className="text-sm text-slate-500">Faster deployment</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 mb-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Award size={16} />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">What drives us forward</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Core principles that guide every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            <Clock size={16} />
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Milestones that matter</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-primary font-black text-lg mb-2">{m.year}</div>
                    <h3 className="text-2xl font-bold mb-2">{m.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400">{m.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-bold shadow-lg shadow-primary/30 flex-shrink-0 z-10">
                  {i + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 mb-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Users size={16} />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Meet the builders</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A world-class team from Google, AWS, Meta, and top AI startups
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-[2rem] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Linkedin size={14} />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <Twitter size={14} />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary font-medium text-sm mb-3">{member.role}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office/Location Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/london/800/600"
              alt="London Office"
              className="rounded-[3rem] shadow-2xl"
            />
          </motion.div>

          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <MapPin size={16} />
              Headquarters
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Based in London, serving globally</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Our headquarters in the heart of London's tech district, with distributed teams across Europe, North America, and Asia-Pacific.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold">71 Shelton Street</div>
                  <div className="text-slate-500 text-sm">London, WC2H 9JQ, UK</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-bold">hello@fullstackllm.com</div>
                  <div className="text-slate-500 text-sm">General inquiries</div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-primary text-white rounded-2xl font-bold hover:gap-4 transition-all"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-bold mb-6">
              <Rocket size={16} />
              Join the Revolution
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to build the future with us?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Whether you're looking to deploy your first private LLM or scale to enterprise, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Request a Demo <ArrowRight size={18} />
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
