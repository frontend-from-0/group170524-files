import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}