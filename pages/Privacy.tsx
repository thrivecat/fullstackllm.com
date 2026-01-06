
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, MapPin, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
              <Shield className="text-emerald-500" size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-8">
            <span><strong>Last Updated:</strong> January 2025</span>
            <span className="hidden sm:inline">|</span>
            <span><strong>Data Controller:</strong> FullStackLLM Ltd</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Registered Address:</strong> 71 Shelton Street, London, WC2H 9JQ, United Kingdom<br />
              <strong>Contact:</strong> <a href="mailto:legal@fullstackllm.com" className="text-primary hover:underline">legal@fullstackllm.com</a> | <a href="mailto:support@fullstackllm.com" className="text-primary hover:underline">support@fullstackllm.com</a><br />
              <strong>ICO Registration:</strong> [To be added upon registration]
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
            <p>1.1 FullStackLLM Ltd ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website (fullstackllm.com) and Services.</p>
            <p>1.2 We are the Data Controller for personal data collected directly from you. Where we process data on behalf of our customers, we act as a Data Processor.</p>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-200 text-sm">
              <strong>1.3 This Privacy Policy is subject to any Data Processing Agreement or contractual terms executed between you and FullStackLLM Ltd.</strong>
            </div>
          </section>

          <section>
            <h2>2. Data We Collect</h2>

            <h3>2.1 Information You Provide</h3>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Data Type</th>
                    <th className="px-4 py-3 text-left font-bold">Examples</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3">Account Information</td><td className="px-4 py-3">Name, email, company name, job title</td><td className="px-4 py-3">Account creation, communication</td></tr>
                  <tr><td className="px-4 py-3">Billing Information</td><td className="px-4 py-3">Payment details, billing address, VAT number</td><td className="px-4 py-3">Processing payments</td></tr>
                  <tr><td className="px-4 py-3">Communication Data</td><td className="px-4 py-3">Emails, support tickets, chat logs</td><td className="px-4 py-3">Customer support, service delivery</td></tr>
                  <tr><td className="px-4 py-3">Contract Data</td><td className="px-4 py-3">Signed agreements, order forms</td><td className="px-4 py-3">Contract performance</td></tr>
                </tbody>
              </table>
            </div>

            <h3>2.2 Information Collected Automatically</h3>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Data Type</th>
                    <th className="px-4 py-3 text-left font-bold">Examples</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3">Usage Data</td><td className="px-4 py-3">Features used, API calls, timestamps</td><td className="px-4 py-3">Service delivery, analytics</td></tr>
                  <tr><td className="px-4 py-3">Technical Data</td><td className="px-4 py-3">IP address, browser type, device info</td><td className="px-4 py-3">Security, troubleshooting</td></tr>
                  <tr><td className="px-4 py-3">Log Data</td><td className="px-4 py-3">Server logs, error logs</td><td className="px-4 py-3">Debugging, security monitoring</td></tr>
                </tbody>
              </table>
            </div>

            <h3>2.3 Customer Data (Processed on Your Behalf)</h3>
            <p>When you use our LLM hosting Services, you may submit prompts and receive outputs. We process this Customer Data solely to provide the Services. We do not:</p>
            <ul>
              <li>Use Customer Data to train AI models</li>
              <li>Share Customer Data with third parties (except Infrastructure Providers as necessary)</li>
              <li>Access Customer Data except for technical support purposes with your consent</li>
            </ul>
          </section>

          <section>
            <h2>3. Legal Basis for Processing</h2>
            <p>Under UK GDPR, we process personal data based on:</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Legal Basis</th>
                    <th className="px-4 py-3 text-left font-bold">When Applied</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3 font-semibold">Contract Performance</td><td className="px-4 py-3">To provide Services you've purchased</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Legitimate Interests</td><td className="px-4 py-3">Analytics, security, service improvement</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Legal Obligation</td><td className="px-4 py-3">Tax records, regulatory compliance</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Consent</td><td className="px-4 py-3">Marketing communications (where applicable)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>4. How We Use Your Data</h2>
            <p><strong>4.1 Service Delivery:</strong></p>
            <ul>
              <li>Provisioning and managing your LLM instances</li>
              <li>Processing API requests</li>
              <li>Providing technical support</li>
              <li>Sending service notifications</li>
            </ul>
            <p><strong>4.2 Business Operations:</strong></p>
            <ul>
              <li>Processing payments and invoicing</li>
              <li>Maintaining account records</li>
              <li>Fraud prevention and security</li>
            </ul>
            <p><strong>4.3 Improvement:</strong></p>
            <ul>
              <li>Analysing usage patterns to improve Services</li>
              <li>Troubleshooting technical issues</li>
              <li>Developing new features</li>
            </ul>
            <p><strong>4.4 Communication:</strong></p>
            <ul>
              <li>Responding to enquiries</li>
              <li>Service updates and notifications</li>
              <li>Marketing (only with consent)</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Sharing</h2>
            <p>5.1 We share personal data with:</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Recipient</th>
                    <th className="px-4 py-3 text-left font-bold">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold">Safeguards</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3 font-semibold">Infrastructure Providers</td><td className="px-4 py-3">Hosting Services</td><td className="px-4 py-3">Data Processing Agreements, SCCs</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Payment Processors</td><td className="px-4 py-3">Payment processing</td><td className="px-4 py-3">PCI-DSS compliance</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Professional Advisors</td><td className="px-4 py-3">Legal, accounting</td><td className="px-4 py-3">Professional confidentiality</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Authorities</td><td className="px-4 py-3">Legal compliance</td><td className="px-4 py-3">Only when legally required</td></tr>
                </tbody>
              </table>
            </div>
            <p>5.2 We do not sell personal data to third parties.</p>
            <p>5.3 We do not share Customer Data (prompts/outputs) with any third party except as strictly necessary to provide the Services via Infrastructure Providers.</p>
          </section>

          <section>
            <h2>6. International Transfers</h2>
            <p>6.1 Your data may be processed on servers located outside the UK, including in the United States and European Economic Area.</p>
            <p>6.2 Where data is transferred outside the UK, we ensure appropriate safeguards including:</p>
            <ul>
              <li>Standard Contractual Clauses (SCCs)</li>
              <li>UK International Data Transfer Agreement (IDTA)</li>
              <li>Adequacy decisions where applicable</li>
            </ul>
            <p>6.3 By using our Services, you acknowledge that data processing on third-party infrastructure may occur in jurisdictions outside the UK.</p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Data Type</th>
                    <th className="px-4 py-3 text-left font-bold">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3">Account Data</td><td className="px-4 py-3">Duration of account + 6 years</td></tr>
                  <tr><td className="px-4 py-3">Billing Records</td><td className="px-4 py-3">7 years (legal requirement)</td></tr>
                  <tr><td className="px-4 py-3">Customer Data (prompts/outputs)</td><td className="px-4 py-3">30 days after termination</td></tr>
                  <tr><td className="px-4 py-3">Support Communications</td><td className="px-4 py-3">3 years</td></tr>
                  <tr><td className="px-4 py-3">Usage Logs</td><td className="px-4 py-3">12 months</td></tr>
                  <tr><td className="px-4 py-3">Marketing Preferences</td><td className="px-4 py-3">Until consent withdrawn</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>8. Data Security</h2>
            <p>8.1 We implement appropriate technical and organisational measures including:</p>
            <ul>
              <li>Encryption in transit (TLS 1.2+) and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee confidentiality obligations</li>
              <li>Incident response procedures</li>
            </ul>
            <p>8.2 While we take reasonable precautions, no system is completely secure. We cannot guarantee absolute security of data transmitted over the internet.</p>
          </section>

          <section>
            <h2>9. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <div className="not-prose overflow-x-auto mb-6">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Right</th>
                    <th className="px-4 py-3 text-left font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr><td className="px-4 py-3 font-semibold">Access</td><td className="px-4 py-3">Request a copy of your personal data</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Rectification</td><td className="px-4 py-3">Correct inaccurate data</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Erasure</td><td className="px-4 py-3">Request deletion ("right to be forgotten")</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Restriction</td><td className="px-4 py-3">Limit how we use your data</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Portability</td><td className="px-4 py-3">Receive your data in a portable format</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Objection</td><td className="px-4 py-3">Object to processing based on legitimate interests</td></tr>
                  <tr><td className="px-4 py-3 font-semibold">Withdraw Consent</td><td className="px-4 py-3">Where processing is based on consent</td></tr>
                </tbody>
              </table>
            </div>
            <p>To exercise your rights, contact: <strong><a href="mailto:legal@fullstackllm.com" className="text-primary">legal@fullstackllm.com</a></strong></p>
            <p>We will respond within 30 days. We may request verification of your identity.</p>
          </section>

          <section>
            <h2>10. Data Processor Role</h2>
            <p>10.1 When you use our Services to process personal data of your own customers or users, we act as a Data Processor on your behalf.</p>
            <p>10.2 In such cases:</p>
            <ul>
              <li>You remain the Data Controller</li>
              <li>We process data only on your documented instructions</li>
              <li>A Data Processing Agreement shall govern the relationship</li>
              <li>You are responsible for ensuring lawful basis for processing</li>
            </ul>
            <p>10.3 To request a Data Processing Agreement, contact: <strong><a href="mailto:legal@fullstackllm.com" className="text-primary">legal@fullstackllm.com</a></strong></p>
          </section>

          <section>
            <h2>11. Children's Privacy</h2>
            <p>Our Services are not directed to individuals under 18. We do not knowingly collect data from children. If we become aware of such collection, we will delete the data promptly.</p>
          </section>

          <section>
            <h2>12. Automated Decision-Making</h2>
            <p>We do not use personal data for automated decision-making that produces legal or similarly significant effects.</p>
            <p><em>Note: The AI models deployed through our Services generate outputs based on your prompts. These outputs are not decisions made by FullStackLLM.</em></p>
          </section>

          <section>
            <h2>13. Changes to This Policy</h2>
            <p>13.1 We may update this Privacy Policy from time to time.</p>
            <p>13.2 Material changes will be notified via email or prominent website notice at least 14 days before taking effect.</p>
            <p>13.3 The "Last Updated" date indicates the most recent revision.</p>
          </section>

          <section>
            <h2>14. Complaints</h2>
            <p>14.1 If you have concerns about how we handle your data, please contact us first at <strong><a href="mailto:legal@fullstackllm.com" className="text-primary">legal@fullstackllm.com</a></strong>.</p>
            <p>14.2 You have the right to lodge a complaint with the Information Commissioner's Office (ICO):</p>
            <div className="not-prose p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="font-bold text-lg mb-4">Information Commissioner's Office</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p>Wycliffe House, Water Lane</p>
                <p>Wilmslow, Cheshire SK9 5AF</p>
                <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">ico.org.uk <ExternalLink size={12} /></a></p>
                <p>Helpline: 0303 123 1113</p>
              </div>
            </div>
          </section>

          <section>
            <h2>15. Contact Us</h2>
            <p>For privacy-related enquiries:</p>
            <div className="not-prose p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="font-bold text-lg mb-4">FullStackLLM Ltd</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2"><MapPin size={16} /> 71 Shelton Street, London WC2H 9JQ, United Kingdom</p>
                <p className="flex items-center gap-2"><Mail size={16} /> Data Protection: <a href="mailto:legal@fullstackllm.com" className="text-primary hover:underline">legal@fullstackllm.com</a></p>
                <p className="flex items-center gap-2"><Mail size={16} /> General Support: <a href="mailto:support@fullstackllm.com" className="text-primary hover:underline">support@fullstackllm.com</a></p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary">
            <strong>This Privacy Policy is subject to the terms of your executed Master Service Agreement, Order Form, or Data Processing Agreement, which shall take precedence where applicable.</strong>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
