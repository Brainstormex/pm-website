'use client';

import { useEffect } from 'react';
import { useLayout } from '@/context/LayoutContext';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { setShowHeader, setShowFooter } = useLayout();

  useEffect(() => {
    // Hide header and footer
    setShowHeader(false);
    setShowFooter(false);

    // Cleanup function to restore header and footer when component unmounts
    return () => {
      setShowHeader(true);
      setShowFooter(true);
    };
  }, [setShowHeader, setShowFooter]);

  return <>{children}</>;
} 