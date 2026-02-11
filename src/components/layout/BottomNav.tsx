'use client';

import { cn } from '@/lib/utils';
import { Home, MessageSquare, PlusSquare, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Feed', href: '/feed' },
  { icon: MessageSquare, label: 'Messages', href: '/messages' },
  { icon: PlusSquare, label: 'Create', href: '/create' }, // Often central on mobile
  { icon: User, label: 'Profile', href: '/profile/1' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[60px] bg-neutral-900 border-t border-neutral-800 z-50 md:hidden flex items-center justify-around px-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center p-2 transition-colors',
              isActive
                ? 'text-primary-cyan'
                : 'text-neutral-300'
            )}
          >
            <Icon className="w-6 h-6" />
          </Link>
        );
      })}
    </nav>
  );
}
