'use client';

import { cn } from '@/lib/utils';
import { Home, MessageSquare, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Feed', href: '/feed' },
  { icon: User, label: 'Profile', href: '/profile/1' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen z-20">
      <nav className="h-full glass flex flex-col items-center py-6 transition-all duration-300 ease-in-out w-[80px] hover:w-[240px] group overflow-hidden border-r border-white/5">
        <div className="space-y-4 w-full px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-4 px-4 py-3 rounded-button transition-all duration-200 whitespace-nowrap group/item',
                  isActive
                    ? 'bg-primary-cyan shadow-[0_0_15px_rgba(0,255,241,0.3)] text-neutral-800 font-semibold'
                    : 'text-neutral-300 hover:bg-white/10 hover:text-white'
                )}
              >
                <Icon className={cn('w-6 h-6 min-w-6 transition-transform duration-200', !isActive && 'group-hover/item:scale-110')} />
                <span className="text-body-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
