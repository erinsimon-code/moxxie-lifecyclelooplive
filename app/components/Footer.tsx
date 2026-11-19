import Link from 'next/link';
import { BRAND, LEGAL_NAME, ADDRESS, PHONE, PHONE_DISPLAY, EMAIL } from '../lib/brand';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-white">{BRAND}</h3>
            <p className="text-white/70">
              Real-time text updates for enrolled employees, from onboarding and training to schedules and benefits deadlines.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/portal" className="text-white/70 hover:text-white transition-colors">Employee Portal</Link></li>
              <li><Link href="/enroll" className="text-white/70 hover:text-white transition-colors">Enroll with your company ID</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/sms-terms" className="text-white/70 hover:text-white transition-colors">SMS Terms</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <p className="text-white/70">{LEGAL_NAME}</p>
            <p className="mt-2 text-white/70">{ADDRESS}</p>
            <a href={`tel:${PHONE}`} className="mt-2 block text-white/70 hover:text-white transition-colors">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-2 block text-white/70 hover:text-white transition-colors">{EMAIL}</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center border-t border-white/20 text-white/70">
          <p>&copy; {year} {LEGAL_NAME}. All rights reserved.</p>
          <p className="mt-2 text-sm">{ADDRESS}</p>
          <p className="mt-1 text-sm">
            <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
            {' · '}
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
          </p>
          <p className="mt-2 text-sm">{BRAND} is for current employees of participating employers only.</p>
        </div>
      </div>
    </footer>
  );
}
