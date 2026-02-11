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
      <nav className="h-full bg-[var(--color-background)] flex flex-col items-center py-6 transition-all duration-300 ease-in-out w-[80px] hover:w-[240px] group overflow-hidden">
        <div className="space-y-4 w-full px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-4 px-4 py-3 rounded-[var(--radius-button)] transition-colors whitespace-nowrap',
                  isActive
                    ? 'bg-[var(--color-primary-cyan)] text-[var(--color-neutral-800)] font-semibold'
                    : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-700)]'
                )}
              >
                <Icon className="w-6 h-6 min-w-6" />
                <span className="text-body-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
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
