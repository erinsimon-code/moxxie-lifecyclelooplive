import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BRAND,
  DOMAIN,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  OPERATOR_LINE,
  SAMPLE_MESSAGES,
  POSITIONING_PARAGRAPH,
  POSITIONING_BULLETS,
  PRIVACY_NO_SHARING_CLAUSE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'Terms of Service | LifecycleLoop Live',
  description: DEFAULT_DESCRIPTION,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-white">Terms of Service</h1>
          <p className="text-lg text-white/80">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">1. Agreeing to These Terms</h2>
          <p className="mb-6 text-slate">
            {OPERATOR_LINE} (the &quot;Service&quot;). Accessing or using the Service means you agree to these Terms of Service. If these Terms don&apos;t work for you, please don&apos;t use the Service.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">2. What the Service Does</h2>
          <p className="mb-6 text-slate">{POSITIONING_PARAGRAPH}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            {POSITIONING_BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">3. Text Message Program</h2>
          <p className="mb-4 text-slate">
            If you opt in to receive texts from {BRAND} at {DOMAIN}, here&apos;s what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            <li>Message frequency varies. Msg &amp; data rates may apply.</li>
            <li>Reply HELP for help, STOP to opt out.</li>
            <li>Consent is not a condition of employment.</li>
            <li>We are not responsible if a carrier delays or fails to deliver a message.</li>
            <li>See our <Link href="/sms-terms" className="text-blue underline hover:text-blue-dark">SMS Terms</Link> and <Link href="/privacy" className="text-blue underline hover:text-blue-dark">Privacy Policy</Link> for full details.</li>
          </ul>
          <p className="mb-6 text-slate">
            <strong className="text-navy">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">4. Sample Messages</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            {SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">5. Liability Limits</h2>
          <p className="mb-6 text-slate">
            {BRAND} is not responsible for indirect, incidental, special, consequential, or punitive damages arising from using, or being unable to use, the Service.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">6. Get in Touch</h2>
          <p className="mb-6 text-slate">
            Questions about these Terms? Reach {LEGAL_NAME} at {ADDRESS}. Email{' '}
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
