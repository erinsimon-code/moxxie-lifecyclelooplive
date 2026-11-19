'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CircleCheckBig } from 'lucide-react';
import {
  BRAND,
  VERIFY_PHONE_EMPTY_ERROR,
  VERIFY_PHONE_INVALID_ERROR,
  VERIFY_CODE_EMPTY_ERROR,
  VERIFY_CODE_INVALID_ERROR,
  VERIFY_RESEND_SECONDS,
} from '../lib/brand';

// Note: metadata for this route is set in ./layout.tsx since this is a
// client component ('use client' pages cannot export metadata directly).
// This page intentionally renders no Navbar/Footer — see ./layout.tsx.

type Step = 'phone' | 'code' | 'success';

function formatPhoneDisplay(digits: string): string {
  const d = digits.slice(0, 10);
  if (d.length === 0) return '';
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6, 10)}`;
}

function maskPhoneDisplay(digits: string): string {
  const last4 = digits.slice(-4);
  return `(XXX) XXX-${last4}`;
}

// TODO: connect to SMS provider.
function sendCode(phone: string) {
  void phone;
}

// TODO: connect to SMS provider.
function verifyCode(code: string) {
  void code;
}

export default function VerifyPage() {
  const [step, setStep] = useState<Step>('phone');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [resendSeconds, setResendSeconds] = useState(0);
  const [resendNotice, setResendNotice] = useState('');

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (resendSeconds <= 0) return;
    const timer = setTimeout(() => setResendSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendSeconds]);

  useEffect(() => {
    if (step === 'code') {
      codeInputRef.current?.focus();
    } else if (step === 'phone') {
      phoneInputRef.current?.focus();
    }
  }, [step]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneDigits(digits);
    if (phoneError) setPhoneError('');
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneDigits.trim() === '') {
      setPhoneError(VERIFY_PHONE_EMPTY_ERROR);
      phoneInputRef.current?.focus();
      return;
    }
    if (phoneDigits.length !== 10) {
      setPhoneError(VERIFY_PHONE_INVALID_ERROR);
      phoneInputRef.current?.focus();
      return;
    }
    setPhoneError('');
    sendCode(phoneDigits);
    setResendSeconds(VERIFY_RESEND_SECONDS);
    setStep('code');
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(digits);
    if (codeError) setCodeError('');
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === '') {
      setCodeError(VERIFY_CODE_EMPTY_ERROR);
      codeInputRef.current?.focus();
      return;
    }
    if (code.length !== 6) {
      setCodeError(VERIFY_CODE_INVALID_ERROR);
      codeInputRef.current?.focus();
      return;
    }
    setCodeError('');
    verifyCode(code);
    setStep('success');
  };

  const handleResend = () => {
    if (resendSeconds > 0) return;
    sendCode(phoneDigits);
    setResendSeconds(VERIFY_RESEND_SECONDS);
    setResendNotice('A new code is on its way.');
    setTimeout(() => setResendNotice(''), 4000);
  };

  const handleUseDifferentNumber = () => {
    setStep('phone');
    setCode('');
    setCodeError('');
    setResendSeconds(0);
    setResendNotice('');
  };

  return (
    <div className="min-h-screen bg-light-gray flex items-center justify-center px-4 py-8">
      <div className="verify-card relative max-w-xl w-full bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-blue flex items-center justify-center mb-4">
            <CircleCheckBig className="w-12 h-12 text-white" />
          </div>

          {step === 'phone' && (
            <>
              <h2 className="text-2xl font-heading font-bold text-navy mb-8">Validate your number.</h2>
              <form onSubmit={handlePhoneSubmit} className="w-full" noValidate>
                <input
                  ref={phoneInputRef}
                  type="tel"
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  inputMode="numeric"
                  value={formatPhoneDisplay(phoneDigits)}
                  onChange={handlePhoneChange}
                  aria-invalid={phoneError ? true : undefined}
                  aria-describedby={phoneError ? 'phone-error' : undefined}
                  className={`w-full bg-light-gray border-2 rounded-lg p-3 sm:p-4 text-lg sm:text-xl font-bold tracking-wider text-navy text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus:border-blue mb-6 ${phoneError ? 'border-red-500' : 'border-border'}`}
                  style={{ minHeight: '64px' }}
                />
                {phoneError && (
                  <p id="phone-error" role="alert" className="-mt-4 mb-6 text-sm text-red-600 text-center">
                    {phoneError}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue text-white text-lg font-semibold rounded-lg py-4 px-6 shadow-lg hover:bg-blue-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
                  style={{ minHeight: '60px' }}
                >
                  Verify Number
                </button>
              </form>
            </>
          )}

          {step === 'code' && (
            <>
              <h2 className="text-2xl font-heading font-bold text-navy mb-2">Enter your code.</h2>
              <p className="text-sm text-slate mb-8">
                We texted a 6-digit code to {maskPhoneDisplay(phoneDigits)}.
              </p>
              <form onSubmit={handleCodeSubmit} className="w-full" noValidate>
                <input
                  ref={codeInputRef}
                  type="tel"
                  placeholder="6-digit code"
                  autoComplete="one-time-code"
                  inputMode="numeric"
                  maxLength={6}
                  value={code}
                  onChange={handleCodeChange}
                  aria-invalid={codeError ? true : undefined}
                  aria-describedby={codeError ? 'code-error' : undefined}
                  className={`w-full bg-light-gray border-2 rounded-lg p-3 sm:p-4 text-lg sm:text-xl font-bold tracking-wider text-navy text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus:border-blue mb-6 ${codeError ? 'border-red-500' : 'border-border'}`}
                  style={{ minHeight: '64px' }}
                />
                {codeError && (
                  <p id="code-error" role="alert" className="-mt-4 mb-6 text-sm text-red-600 text-center">
                    {codeError}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue text-white text-lg font-semibold rounded-lg py-4 px-6 shadow-lg hover:bg-blue-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
                  style={{ minHeight: '60px' }}
                >
                  Verify Code
                </button>
              </form>
              <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendSeconds > 0}
                  className="text-sm font-semibold text-blue hover:text-blue-dark disabled:text-slate disabled:cursor-not-allowed transition-colors"
                >
                  {resendSeconds > 0 ? `Resend code (${resendSeconds}s)` : 'Resend code'}
                </button>
                <span className="text-slate" aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={handleUseDifferentNumber}
                  className="text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
                >
                  Use a different number
                </button>
              </div>
              {resendNotice && (
                <p role="status" className="mt-3 text-sm text-slate">{resendNotice}</p>
              )}
            </>
          )}

          {step === 'success' && (
            <>
              <h2 className="text-2xl font-heading font-bold text-navy mb-2">Your number is verified.</h2>
              <p className="text-sm text-slate mb-8">
                You&apos;re all set. Reply STOP at any time to opt out.
              </p>
              <Link
                href="/portal"
                className="w-full bg-blue text-white text-lg font-semibold rounded-lg py-4 px-6 shadow-lg hover:bg-blue-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 inline-block text-center"
                style={{ minHeight: '60px' }}
              >
                Go to the Portal
              </Link>
            </>
          )}

          <div className="w-full border-t border-border mt-8 pt-4">
            <p className="text-xs text-slate text-center">Secured by {BRAND}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
