
import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Globe, 
  Layout, 
  Activity, 
  Lock,
  Zap,
  Cpu,
  FileText,
  Briefcase,
  GraduationCap,
  Users,
  Code2,
  Stethoscope,
  Scale
} from 'lucide-react';
import { Model, Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Models', href: '/models' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Docs', href: '/docs' },
  { label: 'About', href: '/about' },
];

export const MODELS: Model[] = [
  {
    id: 'llama-3-70b',
    name: 'Llama 3 70B',
    parameters: '70B',
    context: '8K',
    useCase: 'General Reasoning & Chat',
    speed: 4,
    costTier: 'Professional',
    description: 'Meta\'s most capable open-source model, perfect for complex instruction following.',
    strengths: ['Reasoning', 'Instruction following', 'Knowledge retrieval'],
    performance: { tps: '15-20+', contextWindow: '8,192 tokens' }
  },
  {
    id: 'deepseek-v3',
    name: 'DeepSeek V3',
    parameters: '671B (MoE)',
    context: '128K',
    useCase: 'Deep Reasoning & Coding',
    speed: 3,
    costTier: 'Enterprise',
    description: 'Top-tier performance matching GPT-4o levels with advanced coding capabilities.',
    strengths: ['Coding', 'Mathematics', 'Long context'],
    performance: { tps: '10-15+', contextWindow: '128,000 tokens' }
  },
  {
    id: 'mistral-large',
    name: 'Mistral Large',
    parameters: '123B',
    context: '32K',
    useCase: 'Enterprise Workflow',
    speed: 4,
    costTier: 'Professional',
    description: 'European powerhouse optimized for high-reliability multilingual enterprise tasks.',
    strengths: ['Multilingual', 'Enterprise reasoning', 'Efficiency'],
    performance: { tps: '20-25+', contextWindow: '32,000 tokens' }
  },
  {
    id: 'qwen-2-72b',
    name: 'Qwen 2 72B',
    parameters: '72B',
    context: '128K',
    useCase: 'Multilingual & Data',
    speed: 4,
    costTier: 'Professional',
    description: 'Exceptional performance on Asian languages and broad technical knowledge.',
    strengths: ['Asian Languages', 'STEM', 'Agentic tasks'],
    performance: { tps: '18-22+', contextWindow: '128,000 tokens' }
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'gpus',
    title: 'Dedicated GPUs',
    description: 'Bare metal RTX 4090 or H100 clusters reserved exclusively for your workloads.',
    icon: 'Cpu'
  },
  {
    id: 'whitelabel',
    title: 'White-label Interface',
    description: 'Custom branded chat UI that lives on your domain, matching your company style.',
    icon: 'Layout'
  },
  {
    id: 'domain',
    title: 'Custom Domain',
    description: 'Point chat.yourcompany.com directly to your secure LLM instance.',
    icon: 'Globe'
  },
  {
    id: 'sso',
    title: 'SSO Integration',
    description: 'Enterprise-grade security with Okta, Azure AD, and Google Workspace support.',
    icon: 'Lock'
  },
  {
    id: 'api',
    title: 'API Access',
    description: 'Full OpenAI-compatible API for integrating your private model into internal apps.',
    icon: 'Zap'
  },
  {
    id: 'monitoring',
    title: '24/7 Monitoring',
    description: 'Live health checks and performance optimization by our expert DevOps team.',
    icon: 'Activity'
  }
];

export const SOLUTIONS = [
  { title: 'Healthcare', desc: 'HIPAA-compliant AI assistants for patient data analysis.', icon: <Stethoscope /> },
  { title: 'Legal', desc: 'Secure document analysis and automated contract review.', icon: <Scale /> },
  { title: 'Finance', desc: 'Private financial forecasting without data leaving your cloud.', icon: <Briefcase /> },
  { title: 'Education', desc: 'Customized tutoring bots with curriculum-aligned knowledge.', icon: <GraduationCap /> },
  { title: 'Customer Service', desc: 'Internal-only support bots for complex technical documentation.', icon: <Users /> },
  { title: 'DevOps', desc: 'Private code assistants trained on your internal repos.', icon: <Code2 /> },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CTO at NexaHealth',
    quote: 'FullStackLLM allowed us to deploy a private Llama instance for medical research in under an hour. The security compliance was a game changer.',
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'James Wilson',
    role: 'Head of Engineering at FinSecure',
    quote: 'Moving from public APIs to a dedicated H100 cluster reduced our latency by 60% and secured our sensitive financial data.',
    image: 'https://picsum.photos/seed/james/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Lead at EduSphere',
    quote: 'The white-labeled interface is so seamless our students think we built the AI from scratch. Exceptional service and support.',
    image: 'https://picsum.photos/seed/elena/100/100'
  }
];
