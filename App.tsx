
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronRight, 
  Github, 
  Twitter, 
  Linkedin,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Models from './pages/Models';
import Solutions from './pages/Solutions';
import Docs from './pages/Docs';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

// Components
import { NAV_ITEMS } from './constants';

const Navbar = ({ toggleTheme, isDark }: { toggleTheme: () => void, isDark: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`glass rounded-full px-6 py-2 flex items-center justify-between border transition-all duration-300 ${scrolled ? 'border-slate-200 shadow-lg dark:border-slate-800' : 'border-transparent'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-all group-hover:rotate-12">
              <span className="font-extrabold text-lg italic">F</span>
            </div>
            <span className="font-bold text-lg tracking-tight">
              FullStack<span className="text-primary">LLM</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className={`text-[13px] font-bold uppercase tracking-wider transition-all hover:text-primary ${location.pathname === item.href ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-slate-600" />}
            </button>
            
            <Link 
              to="/contact" 
              className="hidden sm:flex items-center gap-2 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-white"
            >
              Request Access <ArrowUpRight size={14} />
            </Link>

            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass rounded-3xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href} 
                to={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold py-2 border-b border-slate-100 dark:border-slate-800"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="bg-primary text-white p-4 rounded-2xl text-center font-bold" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-dark border-t border-slate-100 dark:border-slate-900 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <span className="font-bold">F</span>
            </div>
            <span className="font-bold text-xl tracking-tighter">FullStackLLM</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm text-sm leading-relaxed">
            The infrastructure standard for private, high-performance LLM deployments. Turnkey dedicated GPU clusters for the world's most innovative enterprises.
          </p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all">
                <Icon size={18}/>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Product</h4>
          <ul className="space-y-4 text-[13px] font-medium text-slate-500">
            <li><Link to="/models" className="hover:text-primary transition-colors">Models</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Resources</h4>
          <ul className="space-y-4 text-[13px] font-medium text-slate-500">
            <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><a href="mailto:support@fullstackllm.com" className="hover:text-primary transition-colors">Support</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-4 text-[13px] font-medium text-slate-500">
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Subscribe</h4>
          <p className="text-[13px] text-slate-500 mb-6 leading-relaxed">Stay updated with the latest in open-source AI infra.</p>
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button type="submit" className="mt-3 w-full bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white py-2.5 rounded-full text-xs font-bold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-slate-100 dark:border-slate-900">
        <p className="text-xs text-slate-400 font-medium">© 2025 FullStackLLM Ltd. 71 Shelton Street, London, WC2H 9JQ, UK.</p>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          <a href="mailto:legal@fullstackllm.com" className="hover:text-primary transition-colors">Legal</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-dark selection:bg-primary/10 selection:text-primary">
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/models" element={<Models />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Fixed help widget */}
        <div className="fixed bottom-8 right-8 z-40 group">
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg shadow-xl">
              Talk to an Architect
            </div>
          </div>
          <button className="w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 active:scale-95">
            <MessageCircle size={24} />
          </button>
        </div>
      </div>
    </Router>
  );
}
