import type { Metadata } from 'next';
import { VERIFY_TITLE } from '../lib/brand';

// Route-specific layout: deliberately does NOT render the site Navbar or
// Footer. /verify is a standalone, public page (no login required) and is
// intentionally left out of the main nav.
export const metadata: Metadata = {
  title: VERIFY_TITLE,
  description: 'Verify your mobile number to confirm enrollment in LifecycleLoop Live.',
};

export default function VerifyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
