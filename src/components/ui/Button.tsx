import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-cyan' | 'primary-pink' | 'primary-orange' | 'primary-lime' | 'neutral' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'primary-cyan', 
  children, 
  className,
  disabled,
  ...props 
}: ButtonProps) {
  const variantClasses = {
    'primary-cyan': 'btn-primary-cyan text-neutral-900',
    'primary-pink': 'btn-primary-pink text-white',
    'primary-orange': 'btn-primary-orange text-white',
    'primary-lime': 'btn-primary-lime text-neutral-900',
    'neutral': 'btn-neutral bg-neutral-600 text-white hover:bg-neutral-500',
    'outline': 'btn-outline border-2 border-neutral-600 text-neutral-100 hover:bg-neutral-700',
  };

  return (
    <button
      className={cn(
        'btn',
        variantClasses[variant],
        disabled && 'btn-disabled',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
