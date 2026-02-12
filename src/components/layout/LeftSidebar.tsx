'use client';

import logo from '@/../public/images/musicset-icon-white.svg';
import { cn } from '@/lib/utils';
import { Home, MessageSquare, Settings, User } from 'lucide-react';
import Image from 'next/image';
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
      <nav className="h-full glass flex flex-col items-center py-8 transition-all duration-300 ease-in-out w-[80px] hover:w-[240px] group overflow-hidden border-r border-white/5">
        {/* Logo Section */}
        <div className="mb-12 relative">
          <div className="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center shadow-lg glow-pink rotate-3 group-hover:rotate-0 transition-transform duration-500 p-2">
            <Image src={logo} alt="MusicSet Logo" width={32} height={32} className="object-contain" />
          </div>
        </div>

        <div className="space-y-6 w-full px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-4 px-4 py-3.5 rounded-button transition-all duration-300 whitespace-nowrap group/item relative overflow-hidden',
                  isActive
                    ? 'text-primary-cyan bg-primary-cyan/10'
                    : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-cyan rounded-full shadow-[0_0_10px_rgba(0,255,241,0.5)]" />
                )}
                <Icon className={cn('w-6 h-6 min-w-6 transition-all duration-300', isActive ? 'glow-cyan scale-110' : 'group-hover/item:scale-110 group-hover/item:text-primary-cyan')} />
                <span className={cn(
                  'text-body-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75',
                  isActive ? 'text-primary-cyan' : 'text-neutral-400'
                )}>
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
