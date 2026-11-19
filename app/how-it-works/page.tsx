import Link from 'next/link';
import type { Metadata } from 'next';
import { UserPlus, LogIn, Bell, Users, ClipboardCheck, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { POSITIONING_PARAGRAPH, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'How LifecycleLoop Live Works',
  description: DEFAULT_DESCRIPTION,
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 text-white">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">{POSITIONING_PARAGRAPH}</p>
        </div>
      </section>

      {/* For employees */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-navy">For Employees</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start rounded-2xl p-8 border border-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-navy">
              <LogIn className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy">1. Enroll With Your Company ID</h3>
              <p className="text-slate">Your employer gives you a company ID. Use it to enroll and choose whether you want to receive text updates.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border border-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-navy">
              <Bell className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy">2. Get Updates at Each Stage</h3>
              <p className="text-slate">Choose to receive account notifications (onboarding steps, training reminders, schedule and shift changes, benefits enrollment deadlines, workplace announcements and one-time verification codes) and/or optional promotional messages (employee perks and discounts, company events, wellness and recognition programs, and new LifecycleLoop Live features).</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border border-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-navy">
              <ClipboardCheck className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy">3. Open the Portal for Details</h3>
              <p className="text-slate">Each text links to the employee portal so you can view full details. You can opt out any time, and joining is never a condition of employment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For employers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-light-gray">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-navy">For Employers</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start rounded-2xl p-8 border border-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-navy">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy">1. Add Your Team</h3>
              <p className="text-slate">An employer adds its own current employees and issues a company ID employees use to enroll themselves.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border border-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-navy">
              <Settings className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy">2. Choose Which Updates Send</h3>
              <p className="text-slate">The employer chooses which account notifications to send (onboarding steps, training reminders, schedule and shift changes, benefits enrollment deadlines, workplace announcements and one-time verification codes), and employees separately opt in to optional promotional messages (employee perks and discounts, company events, wellness and recognition programs, and new LifecycleLoop Live features).</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-2xl p-8 border border-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-navy">
              <UserPlus className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-navy">3. Reach Enrolled Employees</h3>
              <p className="text-slate">Updates go only to current employees who enrolled with the company ID. The program is never open to the general public, and it is never used for recruiting or job seekers.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            href="/enroll"
            className="inline-block px-10 py-5 text-xl font-semibold rounded-md bg-blue text-white hover:bg-blue-dark transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2"
          >
            Enroll with your company ID
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
