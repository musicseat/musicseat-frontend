'use client';

import { BottomNav } from '@/components/layout/BottomNav';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Conditionally hide RightSidebar on some pages if needed in the future
  const showRightSidebar = !pathname.includes('/settings');

  return (
    <div className="min-h-screen bg-neutral-800 pb-[60px] md:pb-0 relative overflow-hidden">
      {/* Background Grafismos - Centralized for all private pages */}
      <div className="absolute top-0 -left-64 w-[600px] h-[600px] bg-primary-pink grafismo-glow" />
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-primary-cyan grafismo-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-orange/5 grafismo-glow" />

      {/* Navigation Components */}
      <LeftSidebar />
      
      {/* Main Layout Container */}
      <div className={cn(
        "md:pl-[80px] w-full relative z-10 transition-all duration-300",
        showRightSidebar && "xl:pr-[340px]"
      )}>
        <div className="max-w-[800px] mx-auto px-4 md:px-6 py-6 min-h-screen">
          {children}
        </div>
      </div>

      {/* Right Sidebar - Fixed and centralized */}
      {showRightSidebar && <RightSidebar />}

      <BottomNav />
    </div>
  );
}
