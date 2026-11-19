import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BRAND,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  MESSAGE_TYPES,
  SAMPLE_MESSAGES,
  STOP_KEYWORDS,
  PRIVACY_NO_SHARING_CLAUSE,
  TOLL_FREE_NOTE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'SMS Terms | LifecycleLoop Live',
  description: DEFAULT_DESCRIPTION,
};

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-white">SMS Terms</h1>
          <p className="text-lg text-white/80">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">1. Program Description</h2>
          <p className="mb-4 text-slate">
            {BRAND} is an internal employee communication program. Employers use it to send real-time text updates to their own enrolled employees at each stage of the employee lifecycle. Messages go only to current employees of a participating employer who enroll with their company ID. The program is never open to the general public.
          </p>
          <p className="mb-6 text-slate">{TOLL_FREE_NOTE}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">2. Message Types</h2>
          <p className="mb-4 text-slate">If you enroll, you may receive texts about:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            {MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-navy">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">3. Frequency, Charges and Opting Out</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            <li>Message frequency varies depending on your employer and your role.</li>
            <li>Msg &amp; data rates may apply.</li>
            <li>Reply <strong className="text-navy">HELP</strong> for help, or <strong className="text-navy">STOP</strong> to opt out at any time.</li>
            <li>You may also reply with any of the following to opt out: {STOP_KEYWORDS.join(', ')}.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">4. No Sharing</h2>
          <p className="mb-6 text-slate">
            <strong className="text-navy">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">5. Sample Messages</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            {SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">6. Support</h2>
          <p className="mb-6 text-slate">
            Questions? Contact {LEGAL_NAME} at {ADDRESS}. Email{' '}
            <a href={`mailto:${EMAIL}`} className="text-blue hover:text-blue-dark">{EMAIL}</a>
            {' '}or call{' '}
            <a href={`tel:${PHONE}`} className="text-blue hover:text-blue-dark">{PHONE_DISPLAY}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
