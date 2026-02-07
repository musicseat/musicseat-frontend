// MSW Test Page - Use this to verify MSW is working
// Navigate to /test-msw to see if MSW is intercepting requests

'use client';

import { api } from '@/services/api';
import { useEffect, useState } from 'react';

export default function TestMSW() {
  const [status, setStatus] = useState('Testing MSW...');
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testMSW = async () => {
      try {
        console.log('[Test] Attempting to fetch feed...');
        const data = await api.getFeed();
        console.log('[Test] Feed data received:', data);
        setPosts(data);
        setStatus('✅ MSW is working! API calls are being intercepted.');
      } catch (err: any) {
        console.error('[Test] Failed to fetch feed:', err);
        setError(err.message || 'Unknown error');
        setStatus('❌ MSW is NOT working. API calls are failing.');
      }
    };

    // Wait a bit for MSW to initialize
    const timer = setTimeout(testMSW, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>MSW Test Page</h1>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: error ? '#ff000020' : '#00ff0020',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{status}</h2>
        {error && (
          <p style={{ color: '#ff0000' }}>Error: {error}</p>
        )}
      </div>

      {posts.length > 0 && (
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            Received {posts.length} posts from MSW:
          </h3>
          <pre style={{ 
            backgroundColor: '#f5f5f55a', 
            padding: '15px', 
            borderRadius: '8px',
            overflow: 'auto'
          }}>
            {JSON.stringify(posts, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f55a', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Debugging Steps:</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Open browser DevTools Console</li>
          <li>Look for "[MSW] Service worker started successfully" message</li>
          <li>Check Network tab - requests to /api/* should show "(from ServiceWorker)"</li>
          <li>If you see 404 errors, MSW is not intercepting requests</li>
        </ol>
      </div>
    </div>
  );
}
