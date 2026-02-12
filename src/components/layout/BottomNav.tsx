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
    <nav className="fixed bottom-0 left-0 right-0 h-[72px] glass border-t border-white/10 z-50 md:hidden flex items-center justify-around px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center p-2.5 transition-all duration-300 rounded-full relative group',
              isActive
                ? 'text-primary-cyan shadow-[0_-4px_20px_rgba(0,255,241,0.2)] bg-primary-cyan/5'
                : 'text-neutral-400 hover:text-neutral-200'
            )}
          >
            {isActive && (
              <div className="absolute -top-1 w-8 h-1 bg-primary-cyan rounded-full shadow-[0_0_10px_rgba(0,255,241,0.8)]" />
            )}
            <Icon className={cn('w-6 h-6 transition-transform duration-300', isActive ? 'scale-110 glow-cyan' : 'group-hover:scale-110')} />
          </Link>
        );
      })}
    </nav>
  );
}
