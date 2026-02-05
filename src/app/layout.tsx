import type { Metadata } from "next";
// import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusicSeat",
};

// const dmSans = DM_Sans({
//   variable: "--font-dm-sans",
//   subsets: ["latin"],
// });

// const dmMono = DM_Mono({
//   variable: "--font-dm-mono",
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body className="antialiased h-dvh">
        {children}
      </body>
    </html>
  );
}
