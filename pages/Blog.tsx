
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    title: "DeepSeek V3: The New Open-Source State of the Art?",
    excerpt: "We benchmark the latest model from DeepSeek on our dedicated H100 clusters.",
    category: "Product",
    date: "May 24, 2024",
    author: "Alex Rivera",
    readTime: "8 min",
    image: "https://picsum.photos/seed/ai1/800/500"
  },
  {
    title: "Why Single-Tenant Architecture is Essential for HIPAA AI",
    excerpt: "Exploring the compliance risks of shared API endpoints in healthcare tech.",
    category: "Security",
    date: "May 18, 2024",
    author: "Dr. Sarah Chen",
    readTime: "12 min",
    image: "https://picsum.photos/seed/security/800/500"
  },
  {
    title: "Maximizing Token Throughput on RTX 4090 Clusters",
    excerpt: "Technical deep-dive into vLLM optimization for Llama 3 deployments.",
    category: "Engineering",
    date: "May 12, 2024",
    author: "Marc Veras",
    readTime: "15 min",
    image: "https://picsum.photos/seed/gpu/800/500"
  },
  {
    title: "The Case for White-Labeled Internal AI Tools",
    excerpt: "How companies are increasing AI adoption by branding their internal interfaces.",
    category: "Strategy",
    date: "May 05, 2024",
    author: "Jessica Wu",
    readTime: "6 min",
    image: "https://picsum.photos/seed/office2/800/500"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6">FullStackLLM Insights</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">Engineering deep-dives, security briefings, and product news.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Product", "Engineering", "Security", "Strategy", "Tutorials"].map(cat => (
            <button key={cat} className="px-6 py-2 rounded-full border border-slate-200 dark:border-slate-800 font-bold hover:bg-primary hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTS.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <span className="text-primary">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-bold">
                    <Clock size={14} /> {post.readTime}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 mx-auto">
            Load More Articles <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
