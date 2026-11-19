import type { Metadata } from 'next';
import { DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Enroll with Your Company ID | LifecycleLoop Live',
  description: DEFAULT_DESCRIPTION,
};

export default function EnrollLayout({ children }: { children: React.ReactNode }) {
  return children;
}
