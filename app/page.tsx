import Link from 'next/link';
import type { Metadata } from 'next';
import { UserPlus, LogIn, Bell, ShieldCheck, MessageSquareText, CalendarClock, GraduationCap, Megaphone, KeyRound } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TAGLINE, MESSAGE_TYPES, DEFAULT_DESCRIPTION } from './lib/brand';

export const metadata: Metadata = {
  title: 'LifecycleLoop Live: Real-Time Employee Text Updates',
  description: DEFAULT_DESCRIPTION,
};

const MESSAGE_TYPE_ICONS = [MessageSquareText, GraduationCap, CalendarClock, Bell, Megaphone, KeyRound];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section — Midnight Navy background, white H1, Hero Blue CTA */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-heading font-bold sm:text-6xl md:text-7xl text-white">
              {TAGLINE}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-white/80">
              LifecycleLoop Live keeps employees in the loop with instant updates from their employer, from onboarding and training to schedules and benefits deadlines.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/enroll"
                className="px-8 py-4 text-lg font-semibold rounded-md bg-blue text-white hover:bg-blue-dark transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Enroll with your company ID
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">
              For current employees of participating employers only. Participation is voluntary.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll receive */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy">What You&apos;ll Receive</h2>
            <p className="mt-4 text-xl text-slate">Texts tied to your employment, straight from your employer.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MESSAGE_TYPES.map((type, i) => {
              const Icon = MESSAGE_TYPE_ICONS[i];
              return (
                <div key={type.title} className="p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border bg-white">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-navy">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-center mb-3 text-navy">{type.title}</h3>
                  <p className="text-center text-slate">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-border text-center bg-light-gray">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-navy">
                  <UserPlus className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-navy">1. Employer Invites</h3>
              <p className="text-slate">A participating employer sets up LifecycleLoop Live for its team and shares a company ID.</p>
            </div>
            <div className="p-8 rounded-xl border border-border text-center bg-light-gray">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-navy">
                  <LogIn className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-navy">2. Employee Enrolls</h3>
              <p className="text-slate">The employee enrolls with their company ID and chooses whether to receive texts.</p>
            </div>
            <div className="p-8 rounded-xl border border-border text-center bg-light-gray">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-navy">
                  <Bell className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-navy">3. Employee Gets Updates</h3>
              <p className="text-slate">Real-time text updates arrive at each stage of the employee lifecycle, linking back to the employee portal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy promise */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-6 text-navy">Our Privacy Promise</h2>
          <p className="text-lg mb-4 text-slate">
            Phone numbers and opt-in consent are never sold, rented or shared with third parties.
          </p>
          <p className="text-lg text-slate">
            Texts never include pay, SSNs, account numbers or benefit balances. They only point to the portal.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
