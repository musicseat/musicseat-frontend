import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full px-5 py-3.5 bg-neutral-800/50 border border-white/5 rounded-input text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/10 transition-all duration-300',
        className
      )}
      {...props}
    />
  );
}
