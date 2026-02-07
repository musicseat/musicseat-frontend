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
    <aside className="sticky top-0 h-screen p-6">
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-4 px-4 py-3 rounded-[var(--radius-button)] transition-colors',
                isActive
                  ? 'bg-[var(--color-primary-cyan)] text-[var(--color-neutral-800)] font-semibold'
                  : 'text-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-700)]'
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-body-lg">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
