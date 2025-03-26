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
    <button>
      {children}
    </button>
  )
}
