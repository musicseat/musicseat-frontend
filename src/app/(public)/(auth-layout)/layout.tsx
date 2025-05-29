'use client';

import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <span className="text-lg font-semibold">MusicSeat</span>
        <footer className="text-sm"> Painel do parceiro Musi&copy;Seat - {new Date().getFullYear()}</footer>
      </div>
      {children}
    </div>
  )
}