'use client';

import { useEffect, useState } from 'react';

export function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      import('@/mocks/browser').then(({ worker }) => {
        worker.start({
          serviceWorker: {
            url: '/mockServiceWorker.js',
          },
          onUnhandledRequest: 'bypass',
          quiet: false,
        }).then(() => {
          console.log('[MSW] Service worker started successfully');
          setMswReady(true);
        }).catch((error) => {
          console.error('[MSW] Failed to start service worker:', error);
          setMswReady(true); // Still render children even if MSW fails
        });
      });
    } else {
      setMswReady(true);
    }
  }, []);

  // In development, wait for MSW to be ready before rendering children
  if (process.env.NODE_ENV === 'development' && !mswReady) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Loading MSW...</div>;
  }

  return <>{children}</>;
}
