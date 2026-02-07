import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-cyan' | 'primary-orange' | 'primary-lime' | 'neutral' | 'outline';
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
    'primary-cyan': 'btn-primary-cyan',
    'primary-orange': 'btn-primary-orange',
    'primary-lime': 'btn-primary-lime',
    'neutral': 'btn-neutral',
    'outline': 'btn-outline',
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
