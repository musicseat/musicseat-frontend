import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import { MSWProvider } from "@/providers/MSWProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusicSeat",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="antialiased h-dvh bg-neutral-800 text-neutral-50">
        <MSWProvider>
          {children}
        </MSWProvider>
      </body>
    </html>
  );
}

