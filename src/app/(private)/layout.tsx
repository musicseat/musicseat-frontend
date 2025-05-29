'use client';

import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <p>private</p>
      {children}
    </div>
  )
}