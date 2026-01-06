
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText className="text-primary" size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
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
              <strong>Contact:</strong> <a href="mailto:legal@fullstackllm.com" className="text-primary hover:underline">legal@fullstackllm.com</a> | <a href="mailto:support@fullstackllm.com" className="text-primary hover:underline">support@fullstackllm.com</a>
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
            <h2>1. Introduction and Acceptance</h2>
            <p>1.1 These Terms of Service ("Terms") govern your use of the services provided by FullStackLLM Ltd ("Company," "we," "us," or "our") through fullstackllm.com and related platforms.</p>
            <p>1.2 By accessing or using our Services, you agree to be bound by these Terms. If you are entering into these Terms on behalf of a company or organisation, you represent that you have authority to bind that entity.</p>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-200 text-sm">
              <strong>1.3 These Terms are supplementary to and subject to any Master Service Agreement, Order Form, or Statement of Work executed between you and FullStackLLM Ltd. In the event of conflict, the executed contract shall prevail.</strong>
            </div>
          </section>

          <section>
            <h2>2. Definitions</h2>
            <ul>
              <li><strong>"Services"</strong> means the managed LLM hosting, deployment, API access, white-label interfaces, and related services provided by FullStackLLM.</li>
              <li><strong>"Customer," "you," or "your"</strong> means the individual or entity using our Services.</li>
              <li><strong>"Infrastructure Provider"</strong> means third-party cloud and GPU providers (including but not limited to Runpod, AWS, GCP, and similar providers) used to deliver the Services.</li>
              <li><strong>"Open-Source Models"</strong> means the large language models deployed through our Services, including but not limited to Llama, Qwen, Mistral, DeepSeek, and Kimi models.</li>
              <li><strong>"Customer Data"</strong> means any data, content, or information uploaded, processed, or generated through your use of the Services.</li>
            </ul>
          </section>

          <section>
            <h2>3. Description of Services</h2>
            <p>3.1 FullStackLLM provides:</p>
            <ul>
              <li>(a) Deployment and management of open-source large language models on third-party infrastructure</li>
              <li>(b) White-label chat interfaces on customer subdomains or custom domains</li>
              <li>(c) API access to hosted models</li>
              <li>(d) Configuration, monitoring, and technical support</li>
            </ul>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-blue-800 dark:text-blue-200 text-sm">
              <strong>3.2 We do not own or operate the underlying server infrastructure.</strong> Our Services consist of deployment, configuration, management, and support of LLM instances hosted on third-party Infrastructure Providers.
            </div>
            <p>3.3 The open-source models deployed are subject to their respective licences (e.g., Llama Community Licence, Apache 2.0, MIT). You are responsible for ensuring your use complies with applicable model licences.</p>
          </section>

          <section>
            <h2>4. Service Level and Availability</h2>
            <p>4.1 We shall use commercially reasonable efforts to maintain Service availability. Specific uptime commitments, if any, shall be set forth in your Master Service Agreement or Order Form.</p>
            <p><strong>4.2 We do not guarantee uninterrupted availability.</strong> Services may be affected by:</p>
            <ul>
              <li>(a) Third-party Infrastructure Provider outages or maintenance</li>
              <li>(b) GPU availability constraints</li>
              <li>(c) Network issues beyond our control</li>
              <li>(d) Scheduled maintenance (with reasonable advance notice where practicable)</li>
            </ul>
            <p>4.3 We shall not be liable for any failure or degradation of Services caused by Infrastructure Providers.</p>
          </section>

          <section>
            <h2>5. Customer Responsibilities</h2>
            <p>5.1 You are responsible for:</p>
            <ul>
              <li>(a) All activity that occurs under your account</li>
              <li>(b) Maintaining the confidentiality of your credentials</li>
              <li>(c) Ensuring your use complies with applicable laws and regulations</li>
              <li>(d) The content of prompts submitted and outputs generated through the Services</li>
              <li>(e) Compliance with open-source model licences</li>
              <li>(f) Providing accurate billing and contact information</li>
            </ul>
            <p>5.2 You shall not use the Services to:</p>
            <ul>
              <li>(a) Generate illegal, harmful, or abusive content</li>
              <li>(b) Violate any applicable law or regulation</li>
              <li>(c) Infringe intellectual property rights</li>
              <li>(d) Attempt to reverse-engineer, extract, or copy the models</li>
              <li>(e) Resell or redistribute access without written authorisation</li>
              <li>(f) Transmit malware, viruses, or malicious code</li>
              <li>(g) Circumvent usage limits or security measures</li>
              <li>(h) Process data in violation of data protection laws</li>
            </ul>
          </section>

          <section>
            <h2>6. Fees and Payment</h2>
            <p>6.1 Fees for Services are as set forth in your Order Form or on our pricing page. All fees are:</p>
            <ul>
              <li>(a) Quoted in GBP unless otherwise specified</li>
              <li>(b) Exclusive of VAT and applicable taxes</li>
              <li>(c) Non-refundable unless otherwise stated</li>
            </ul>
            <p>6.2 <strong>Setup fees</strong> are due upon order confirmation. <strong>Monthly fees</strong> are billed in advance.</p>
            <p>6.3 We reserve the right to modify pricing with 30 days' written notice. Price changes shall not affect existing prepaid periods.</p>
            <p>6.4 Late payments shall accrue interest at 4% above the Bank of England base rate. We may suspend Services for accounts more than 14 days overdue.</p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>7.1 <strong>Customer Data:</strong> You retain all rights to your Customer Data. You grant us a limited licence to process Customer Data solely to provide the Services.</p>
            <p>7.2 <strong>Our IP:</strong> We retain all rights to our platforms, interfaces, configurations, and proprietary systems. Nothing in these Terms transfers ownership of our intellectual property.</p>
            <p>7.3 <strong>Open-Source Models:</strong> The models deployed are owned by their respective creators and licensed under open-source terms. We make no claim of ownership over these models.</p>
            <p>7.4 <strong>Model Outputs:</strong> Ownership of outputs generated through the Services is subject to the applicable model licence terms. We make no claim to outputs generated from your prompts.</p>
          </section>

          <section>
            <h2>8. Data Protection and Privacy</h2>
            <p>8.1 We process personal data in accordance with our Privacy Policy and applicable data protection laws including UK GDPR.</p>
            <p>8.2 Where we process personal data on your behalf, we act as a Data Processor. A Data Processing Agreement shall be executed where required.</p>
            <p><strong>8.3 Customer Data may be processed on Infrastructure Provider servers located outside the UK.</strong> By using our Services, you acknowledge and consent to such transfers, which are protected by appropriate safeguards.</p>
            <p>8.4 We do not use Customer Data to train models or for any purpose other than providing the Services.</p>
          </section>

          <section>
            <h2>9. Confidentiality</h2>
            <p>9.1 Each party agrees to maintain the confidentiality of the other party's Confidential Information and not to disclose it to third parties without prior written consent.</p>
            <p>9.2 Confidential Information excludes information that: (a) is publicly available; (b) was known prior to disclosure; (c) is independently developed; or (d) is required to be disclosed by law.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm">
              <p className="font-bold mb-4">10.1 TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <p>(a) Our total aggregate liability arising from or related to these Terms shall not exceed the fees paid by you in the twelve (12) months preceding the claim.</p>
              <p>(b) We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities.</p>
              <p>(c) We shall not be liable for any losses arising from:</p>
              <ul className="ml-4">
                <li>- Third-party Infrastructure Provider failures</li>
                <li>- Model outputs, accuracy, or suitability</li>
                <li>- Your use of or reliance on generated content</li>
                <li>- Unauthorised access resulting from your failure to secure credentials</li>
                <li>- Force majeure events</li>
              </ul>
              <p className="mt-4 font-bold">10.2 WE PROVIDE SERVICES "AS IS" AND DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            </div>
            <p>10.3 Nothing in these Terms excludes liability for: (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; (c) any other liability that cannot be excluded by law.</p>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>11.1 You agree to indemnify, defend, and hold harmless FullStackLLM, its directors, employees, and agents from any claims, damages, losses, or expenses arising from:</p>
            <ul>
              <li>(a) Your use of the Services</li>
              <li>(b) Your breach of these Terms</li>
              <li>(c) Your violation of any law or third-party rights</li>
              <li>(d) Content you submit or generate through the Services</li>
            </ul>
          </section>

          <section>
            <h2>12. Term and Termination</h2>
            <p>12.1 These Terms commence upon your first use of Services and continue until terminated.</p>
            <p>12.2 <strong>Monthly subscriptions</strong> may be cancelled with 30 days' written notice to the end of the current billing period.</p>
            <p>12.3 We may suspend or terminate Services immediately if you:</p>
            <ul>
              <li>(a) Breach these Terms</li>
              <li>(b) Fail to pay fees when due</li>
              <li>(c) Use Services for illegal purposes</li>
              <li>(d) Become insolvent or enter administration</li>
            </ul>
            <p>12.4 Upon termination:</p>
            <ul>
              <li>(a) Your access to Services shall cease</li>
              <li>(b) We may delete Customer Data after 30 days unless legally required to retain it</li>
              <li>(c) Outstanding fees remain payable</li>
              <li>(d) Provisions that by nature should survive shall survive termination</li>
            </ul>
          </section>

          <section>
            <h2>13. Modifications</h2>
            <p>13.1 We may modify these Terms at any time by posting updated Terms on our website.</p>
            <p>13.2 Material changes shall be notified via email at least 30 days in advance.</p>
            <p>13.3 Continued use after changes take effect constitutes acceptance.</p>
          </section>

          <section>
            <h2>14. Third-Party Services</h2>
            <p>14.1 Our Services rely on third-party Infrastructure Providers. Your use may be subject to their terms and policies.</p>
            <p>14.2 We are not responsible for the acts or omissions of Infrastructure Providers.</p>
            <p>14.3 Links to third-party websites or services are provided for convenience only.</p>
          </section>

          <section>
            <h2>15. Governing Law and Disputes</h2>
            <p>15.1 These Terms are governed by the laws of England and Wales.</p>
            <p>15.2 Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            <p>15.3 Before initiating legal proceedings, parties agree to attempt resolution through good-faith negotiation for a period of 30 days.</p>
          </section>

          <section>
            <h2>16. General Provisions</h2>
            <p>16.1 <strong>Entire Agreement:</strong> These Terms, together with any executed Master Service Agreement and Order Forms, constitute the entire agreement between the parties.</p>
            <p>16.2 <strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions shall continue in effect.</p>
            <p>16.3 <strong>Waiver:</strong> Failure to enforce any right shall not constitute waiver of that right.</p>
            <p>16.4 <strong>Assignment:</strong> You may not assign these Terms without our written consent. We may assign our rights to any successor entity.</p>
            <p>16.5 <strong>Notices:</strong> Notices shall be sent to legal@fullstackllm.com or support@fullstackllm.com, or by post to our registered address.</p>
            <p>16.6 <strong>Force Majeure:</strong> Neither party shall be liable for delays caused by events beyond reasonable control.</p>
          </section>

          <section>
            <h2>17. Contact</h2>
            <p>For questions about these Terms:</p>
            <div className="not-prose p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="font-bold text-lg mb-4">FullStackLLM Ltd</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2"><MapPin size={16} /> 71 Shelton Street, London WC2H 9JQ, United Kingdom</p>
                <p className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:legal@fullstackllm.com" className="text-primary hover:underline">legal@fullstackllm.com</a></p>
                <p className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:support@fullstackllm.com" className="text-primary hover:underline">support@fullstackllm.com</a></p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary">
            <strong>All Services are subject to the terms of your executed Master Service Agreement, Order Form, or Statement of Work, which shall take precedence over these general Terms of Service where applicable.</strong>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
