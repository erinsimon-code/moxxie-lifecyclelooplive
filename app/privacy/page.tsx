import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  DOMAIN,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  OPERATOR_LINE,
  MESSAGE_TYPES,
  SAMPLE_MESSAGES,
  PRIVACY_NO_SHARING_CLAUSE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy | LifecycleLoop Live',
  description: DEFAULT_DESCRIPTION,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-12 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-lg text-white/80">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">1. Overview</h2>
          <p className="mb-6 text-slate">
            {OPERATOR_LINE}. LifecycleLoop Live is an internal employee communication program. Employers use it to send real-time text updates to their own enrolled employees at each stage of the employee lifecycle: onboarding steps, training reminders, schedule and shift changes, benefits enrollment deadlines, and workplace announcements. Messages go only to current employees of a participating employer who enroll with their company ID. The program is never open to the general public.
          </p>
          <p className="mb-6 text-slate">
            This policy explains how information is collected, used, disclosed, and protected when your employer enrolls you, or you enroll yourself with a company ID, at {DOMAIN}.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">2. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            <li>Your name, mobile number, and email address provided at enrollment</li>
            <li>Your employer&apos;s company ID and your employment status with that employer</li>
            <li>Your message preferences and opt-in/opt-out status</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">3. Text Messaging</h2>
          <p className="mb-4 text-slate">If you opt in to text messages, these conditions apply:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            {MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-navy">{type.title}</strong> — {type.description}</li>
            ))}
            <li>Message frequency varies. Msg &amp; data rates may apply.</li>
            <li>Reply HELP for help, STOP to opt out.</li>
            <li>Consent is not a condition of employment.</li>
          </ul>
          <p className="mb-6 text-slate">
            <strong className="text-navy">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">4. How Information Is Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            <li>Operating and improving the employee communication program</li>
            <li>Delivering onboarding, training, schedule, benefits, and announcement updates</li>
            <li>Verifying enrollment eligibility with the participating employer</li>
            <li>Responding to support requests</li>
            <li>Meeting applicable legal requirements</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">5. Sample Messages</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
            {SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-navy">6. Contact Us</h2>
          <p className="mb-6 text-slate">
            Questions about this policy? Here&apos;s how to reach us:<br />
            {LEGAL_NAME}<br />
            {ADDRESS}<br />
            Email: <a href={`mailto:${EMAIL}`} className="text-blue hover:text-blue-dark">{EMAIL}</a><br />
            Phone: <a href={`tel:${PHONE}`} className="text-blue hover:text-blue-dark">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
