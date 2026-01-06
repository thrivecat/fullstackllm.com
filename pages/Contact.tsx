
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Calendar, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6">Let's build your AI future</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">Speak with our solutions architects to design your private LLM infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Full Name</label>
                    <input required type="text" placeholder="Jane Doe" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">Work Email</label>
                    <input required type="email" placeholder="jane@company.com" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Company</label>
                  <input required type="text" placeholder="ACME Corp" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Model of Interest</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary">
                    <option>Llama 3 70B</option>
                    <option>DeepSeek V3</option>
                    <option>Mistral Large</option>
                    <option>Qwen 2 72B</option>
                    <option>Custom/Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about your use case..." className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-primary hover:bg-indigo-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black mb-4">Request Sent!</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8">One of our solutions architects will reach out within 4 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-bold">Send another message</button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-black mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold">Email us</h5>
                    <p className="text-slate-500 dark:text-slate-400">hello@fullstackllm.com</p>
                    <p className="text-slate-500 dark:text-slate-400">support@fullstackllm.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold">Visit us</h5>
                    <p className="text-slate-500 dark:text-slate-400">123 AI Boulevard, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <Calendar className="text-primary" /> Book a Live Demo
              </h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 border border-dashed border-slate-300 dark:border-slate-700 text-center">
                <p className="text-slate-600 dark:text-slate-400 mb-6">See the white-label interface and dedicated clusters in action.</p>
                <button className="px-8 py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl font-bold shadow-lg">Open Scheduler</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
