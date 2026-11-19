import type { Metadata } from 'next';
import { ClipboardCheck, GraduationCap, CalendarClock, Bell, LogIn } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Employee Portal | LifecycleLoop Live',
  description: DEFAULT_DESCRIPTION,
};

const SECTIONS = [
  { icon: ClipboardCheck, title: 'Onboarding', description: 'View and complete your current onboarding steps.' },
  { icon: GraduationCap, title: 'Training', description: 'See upcoming and completed required training.' },
  { icon: CalendarClock, title: 'Schedule', description: 'Check your current shifts and any recent changes.' },
  { icon: Bell, title: 'Benefits', description: 'Review your benefits options and enrollment deadlines.' },
];

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue">
              <LogIn className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-heading font-bold mb-4 text-white">Employee Portal</h1>
          <p className="text-lg mb-8 text-white/80">Sign in with your company ID to view onboarding, training, schedule and benefits details.</p>
          <div className="max-w-sm mx-auto rounded-xl p-6 border border-white/20 bg-white">
            <label className="block text-sm font-medium mb-2 text-left text-navy">Company ID</label>
            <input type="text" placeholder="Company ID" disabled className="w-full px-4 py-3 rounded-md border border-border bg-white text-navy mb-4" />
            <button type="button" disabled className="w-full py-3 rounded-md font-semibold bg-blue text-white opacity-60 cursor-not-allowed">
              Sign In
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="p-8 rounded-xl shadow-md border border-border bg-white">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-navy">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-center mb-3 text-navy">{section.title}</h3>
                <p className="text-center text-slate">{section.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
