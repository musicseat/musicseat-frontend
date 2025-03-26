import { cn } from "@/app/utils/utils";
import { ReactNode } from "react";

export function Button({
  children, 
  variant = 'primary',
  ...props
}: {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      {...props}
      className={cn("py-4 w-full max-w-3xs text-white rounded-2xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
        variant === 'primary' && 'bg-white text-black',
        variant === 'ghost' && 'bg-transparent',
        variant === 'secondary' && 'bg-DarkBlue',
        props.className
      )}
    >
      {children}
    </button>
  )
}
