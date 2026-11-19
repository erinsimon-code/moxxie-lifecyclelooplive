'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { Building2, Mail, Phone, User, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ACCOUNT_CONSENT_LABEL,
  PROMOTIONAL_CONSENT_LABEL,
  CONSENT_MOBILE_REQUIRED_ERROR,
  CONSENT_MOBILE_INVALID_ERROR,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
} from '../lib/brand';

// Note: metadata for this route is set in ./layout.tsx since this is a
// client component ('use client' pages cannot export metadata directly).

type FormData = {
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
};

export default function EnrollPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });
  const [accountConsent, setAccountConsent] = useState(false);
  const [promoConsent, setPromoConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mobileError, setMobileError] = useState('');
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Either box stays freely togglable — no required attribute, and
  // unchecking both always clears any pending mobile-number error. Mobile
  // number validity is only enforced on submit, in handleSubmit below.
  const handleAccountConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountConsent(e.target.checked);
    if (!e.target.checked && !promoConsent) {
      setMobileError('');
    }
  };

  const handlePromoConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoConsent(e.target.checked);
    if (!e.target.checked && !accountConsent) {
      setMobileError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const anyConsent = accountConsent || promoConsent;

    if (anyConsent) {
      const digits = formData.mobile.replace(/\D/g, '');
      if (formData.mobile.trim() === '') {
        setMobileError(CONSENT_MOBILE_REQUIRED_ERROR);
        mobileInputRef.current?.focus();
        return;
      }
      if (digits.length !== 10) {
        setMobileError(CONSENT_MOBILE_INVALID_ERROR);
        mobileInputRef.current?.focus();
        return;
      }
    }

    setMobileError('');
    setIsSubmitting(true);

    if (anyConsent) {
      // Either box checked + valid phone → send to /verify to confirm the
      // number. The phone number is kept in component state only, never in
      // the URL.
      setTimeout(() => {
        router.push('/verify');
      }, 800);
      return;
    }

    // Neither box checked → the form submits with only a Company ID, as before.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-white">Enroll with Your Company ID</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/80">
            For current employees of participating employers only. Participation is voluntary.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl shadow-xl p-8 md:p-12 bg-white border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-emerald">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-navy">You&apos;re Enrolled</h2>
              <p className="text-lg mb-8 text-slate">Visit the employee portal any time for onboarding, training, schedule and benefits details.</p>
              <Link
                href="/portal"
                className="inline-block px-6 py-3 font-semibold rounded-md bg-blue text-white hover:bg-blue-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
              >
                Go to the Portal
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-navy">Company ID *</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                  <input type="text" name="companyId" required value={formData.companyId} onChange={handleChange} placeholder="Company ID" className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-white text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-blue" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-navy">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-white text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-blue" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-navy">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-white text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-blue" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-navy">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-white text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-blue" />
                  </div>
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-navy">Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate" />
                    <input
                      ref={mobileInputRef}
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={(e) => {
                        handleChange(e);
                        if (mobileError) setMobileError('');
                      }}
                      placeholder="Mobile number"
                      aria-invalid={mobileError ? true : undefined}
                      aria-describedby={mobileError ? 'mobile-error' : undefined}
                      className={`w-full pl-10 pr-4 py-3 rounded-md border bg-white text-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-blue ${mobileError ? 'border-red-500' : 'border-border'}`}
                    />
                  </div>
                  {mobileError && (
                    <p id="mobile-error" role="alert" className="mt-2 text-sm text-red-600">
                      {mobileError}
                    </p>
                  )}
                </div>
              </div>

              {/* SMS Consent — two separate boxes, both optional and unchecked by default */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="accountConsent"
                    checked={accountConsent}
                    onChange={handleAccountConsentChange}
                    className="mt-1 w-4 h-4 rounded accent-blue"
                  />
                  <label htmlFor="accountConsent" className="text-sm leading-relaxed text-slate">
                    {ACCOUNT_CONSENT_LABEL}
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="promoConsent"
                    checked={promoConsent}
                    onChange={handlePromoConsentChange}
                    className="mt-1 w-4 h-4 rounded accent-blue"
                  />
                  <label htmlFor="promoConsent" className="text-sm leading-relaxed text-slate">
                    {PROMOTIONAL_CONSENT_LABEL}
                  </label>
                </div>
                <p className="text-sm text-slate">
                  See our{' '}
                  <a href="/sms-terms" className="text-blue underline hover:text-blue-dark">SMS Terms</a>
                  {' '}and{' '}
                  <a href="/privacy" className="text-blue underline hover:text-blue-dark">Privacy Policy</a>.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed bg-blue text-white hover:bg-blue-dark disabled:bg-slate"
              >
                {isSubmitting ? 'Submitting...' : 'Enroll'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Sample messages — identical to /sms-terms */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-heading font-bold mb-4 text-navy">Sample Messages</h2>
        <p className="text-sm mb-4 text-slate">Here&apos;s what a text from LifecycleLoop Live might look like:</p>
        <p className="text-sm font-semibold mb-2 text-navy">Account notification examples</p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-slate">
          {ACCOUNT_SAMPLE_MESSAGES.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
        <p className="text-sm font-semibold mb-2 text-navy">Promotional examples</p>
        <ul className="list-disc pl-6 space-y-2 text-slate">
          {PROMOTIONAL_SAMPLE_MESSAGES.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}

