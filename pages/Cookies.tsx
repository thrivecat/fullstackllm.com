
import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Mail, MapPin, ArrowLeft, ExternalLink, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cookies() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="pt-32 pb-24 bg-white dark:bg-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeIn} className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
              <Cookie className="text-amber-500" size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Cookie Policy</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
            <span><strong>Last Updated:</strong> January 2025</span>
            <span className="hidden sm:inline">|</span>
            <span><strong>Company:</strong> FullStackLLM Ltd</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Registered Address:</strong> 71 Shelton Street, London, WC2H 9JQ, United Kingdom<br />
              <strong>Contact:</strong> <a href="mailto:support@fullstackllm.com" className="text-primary hover:underline">support@fullstackllm.com</a>
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-lg prose-h3:mt-8 prose-p:leading-relaxed prose-li:leading-relaxed"
        >
          <section>
            <h2>1. Introduction</h2>
            <p>1.1 This Cookie Policy explains how FullStackLLM Ltd ("we," "us," or "our") uses cookies and similar technologies on fullstackllm.com and our Services.</p>
            <p>1.2 By using our website, you consent to the use of cookies in accordance with this policy and your cookie preferences.</p>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-200 text-sm">
              <strong>1.3 This policy is subject to any executed contractual terms between you and FullStackLLM Ltd.</strong>
            </div>
          </section>

          <section>
            <h2>2. What Are Cookies?</h2>
            <p>2.1 Cookies are small text files placed on your device when you visit a website. They serve various functions including remembering preferences, enabling features, and analysing usage.</p>
            <p>2.2 Similar technologies include:</p>
            <ul>
              <li><strong>Local Storage:</strong> Data stored in your browser</li>
              <li><strong>Session Storage:</strong> Temporary data cleared when browser closes</li>
              <li><strong>Pixels/Beacons:</strong> Small images used for tracking</li>
            </ul>
          </section>

          <section>
            <h2>3. Cookies We Use</h2>

            <h3>3.1 Strictly Necessary Cookies</h3>
            <p>These are essential for the website to function. They cannot be disabled.</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Cookie</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3 font-mono text-xs">session_id</td><td className="px-4 py-3">Maintains your login session</td><td className="px-4 py-3">Session</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">csrf_token</td><td className="px-4 py-3">Security - prevents cross-site request forgery</td><td className="px-4 py-3">Session</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">cookie_consent</td><td className="px-4 py-3">Remembers your cookie preferences</td><td className="px-4 py-3">1 year</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Legal Basis:</strong> Legitimate interest (essential for service delivery)</p>

            <h3>3.2 Functional Cookies</h3>
            <p>These enhance functionality and personalisation.</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Cookie</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3 font-mono text-xs">theme_preference</td><td className="px-4 py-3">Remembers light/dark mode choice</td><td className="px-4 py-3">1 year</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">language</td><td className="px-4 py-3">Stores language preference</td><td className="px-4 py-3">1 year</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">dashboard_settings</td><td className="px-4 py-3">Saves dashboard layout preferences</td><td className="px-4 py-3">1 year</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Legal Basis:</strong> Consent</p>

            <h3>3.3 Analytics Cookies</h3>
            <p>These help us understand how visitors use our website.</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Cookie</th>
                    <th className="px-4 py-3 text-left font-bold">Provider</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3 font-mono text-xs">_ga</td><td className="px-4 py-3">Google Analytics</td><td className="px-4 py-3">Distinguishes users</td><td className="px-4 py-3">2 years</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">_gid</td><td className="px-4 py-3">Google Analytics</td><td className="px-4 py-3">Distinguishes users</td><td className="px-4 py-3">24 hours</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">_gat</td><td className="px-4 py-3">Google Analytics</td><td className="px-4 py-3">Rate limiting</td><td className="px-4 py-3">1 minute</td></tr>
                  <tr><td className="px-4 py-3 font-mono text-xs">plausible_*</td><td className="px-4 py-3">Plausible Analytics</td><td className="px-4 py-3">Privacy-friendly analytics</td><td className="px-4 py-3">Session</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong>Legal Basis:</strong> Consent</p>

            <h3>3.4 Marketing Cookies</h3>
            <p>We currently do not use marketing or advertising cookies. If this changes, we will update this policy and obtain your consent.</p>
          </section>

          <section>
            <h2>4. Third-Party Cookies</h2>
            <p>4.1 Some cookies are placed by third-party services we use:</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Provider</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3">Google Analytics</td><td className="px-4 py-3">Website analytics</td><td className="px-4 py-3"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">policies.google.com <ExternalLink size={12} /></a></td></tr>
                  <tr><td className="px-4 py-3">Stripe</td><td className="px-4 py-3">Payment processing</td><td className="px-4 py-3"><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">stripe.com/privacy <ExternalLink size={12} /></a></td></tr>
                  <tr><td className="px-4 py-3">Intercom (if used)</td><td className="px-4 py-3">Customer support chat</td><td className="px-4 py-3"><a href="https://intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">intercom.com/legal <ExternalLink size={12} /></a></td></tr>
                </tbody>
              </table>
            </div>
            <p>4.2 We do not control third-party cookies. Please refer to their privacy policies for more information.</p>
          </section>

          <section>
            <h2>5. Managing Cookies</h2>

            <h3>5.1 Cookie Consent Banner</h3>
            <p>When you first visit our website, you will see a cookie consent banner allowing you to:</p>
            <ul>
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customise your preferences</li>
            </ul>

            <h3>5.2 Changing Your Preferences</h3>
            <p>You can change your cookie preferences at any time by:</p>
            <ul>
              <li>Clicking the "Cookie Settings" link in our website footer</li>
              <li>Emailing <a href="mailto:support@fullstackllm.com" className="text-primary">support@fullstackllm.com</a></li>
              <li>Adjusting your browser settings</li>
            </ul>

            <h3>5.3 Browser Settings</h3>
            <p>Most browsers allow you to:</p>
            <ul>
              <li>View cookies stored on your device</li>
              <li>Delete specific or all cookies</li>
              <li>Block cookies from specific or all sites</li>
              <li>Set preferences for first-party vs third-party cookies</li>
            </ul>
            <p><strong>Browser guides:</strong></p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge</a></li>
            </ul>

            <h3>5.4 Impact of Disabling Cookies</h3>
            <p>If you disable certain cookies:</p>
            <ul>
              <li><strong>Strictly Necessary:</strong> Site may not function properly</li>
              <li><strong>Functional:</strong> Preferences won't be saved</li>
              <li><strong>Analytics:</strong> We won't be able to improve based on usage data</li>
            </ul>
          </section>

          <section>
            <h2>6. Do Not Track</h2>
            <p>6.1 Some browsers offer a "Do Not Track" (DNT) setting. There is no industry standard for DNT.</p>
            <p>6.2 We currently do not respond to DNT signals but honour explicit cookie preference choices made through our consent banner.</p>
          </section>

          <section>
            <h2>7. Cookies in Our Services</h2>
            <p>7.1 When you use our hosted LLM Services or white-label interfaces, additional cookies may be set for:</p>
            <ul>
              <li>Authentication and session management</li>
              <li>API rate limiting</li>
              <li>User preferences within the chat interface</li>
            </ul>
            <p>7.2 These are strictly necessary for service delivery.</p>
          </section>

          <section>
            <h2>8. Data Collected Via Cookies</h2>
            <p>8.1 Data collected through cookies may include:</p>
            <ul>
              <li>IP address (anonymised where possible)</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent</li>
              <li>Referral source</li>
              <li>Geographic location (country/region level)</li>
            </ul>
            <p>8.2 This data is processed in accordance with our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>
          </section>

          <section>
            <h2>9. Retention</h2>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Cookie Type</th>
                    <th className="px-4 py-3 text-left font-bold">Retention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3">Session cookies</td><td className="px-4 py-3">Deleted when browser closes</td></tr>
                  <tr><td className="px-4 py-3">Persistent cookies</td><td className="px-4 py-3">As specified in Section 3 (typically 1-2 years)</td></tr>
                  <tr><td className="px-4 py-3">Analytics data</td><td className="px-4 py-3">Aggregated data retained for 26 months</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>10. Updates to This Policy</h2>
            <p>10.1 We may update this Cookie Policy to reflect changes in our practices or legal requirements.</p>
            <p>10.2 Material changes will be communicated via website notice.</p>
            <p>10.3 Please check this page periodically for updates.</p>
          </section>

          <section>
            <h2>11. Contact Us</h2>
            <p>For questions about our use of cookies:</p>
            <div className="not-prose p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="font-bold text-lg mb-4">FullStackLLM Ltd</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2"><MapPin size={16} /> 71 Shelton Street, London WC2H 9JQ, United Kingdom</p>
                <p className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:support@fullstackllm.com" className="text-primary hover:underline">support@fullstackllm.com</a></p>
                <p className="flex items-center gap-2"><Mail size={16} /> Legal enquiries: <a href="mailto:legal@fullstackllm.com" className="text-primary hover:underline">legal@fullstackllm.com</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2>12. Legal Compliance</h2>
            <p>This Cookie Policy is designed to comply with:</p>
            <ul>
              <li>UK General Data Protection Regulation (UK GDPR)</li>
              <li>Privacy and Electronic Communications Regulations 2003 (PECR)</li>
              <li>ePrivacy Directive requirements</li>
            </ul>
          </section>

          <div className="mt-12 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary">
            <strong>This Cookie Policy is subject to the terms of your executed Master Service Agreement or other contractual terms, which shall take precedence where applicable.</strong>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
