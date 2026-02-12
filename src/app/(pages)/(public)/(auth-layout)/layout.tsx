"use client";

import bg from "@/../public/images/palco.png";
import { gsap } from "gsap";

import { ArrowLeft, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useRef, useState } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeButtonRef = useRef(null);

  const toggleTheme = () => {
    const tl = gsap.timeline();

    // Animação do botão
    tl.to(themeButtonRef.current, {
      rotation: 360,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut",
    }).to(themeButtonRef.current, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });

    setIsDarkMode(!isDarkMode);
  };


  const toggleGoBackAndThemeButton = pathname === "/login" ? true : false;

  return (
    <div className="h-dvh lg:grid lg:grid-cols-3 overflow-hidden bg-neutral-900">
      {/* Imagem - fundo no mobile, lado esquerdo no desktop */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:col-span-2 overflow-hidden h-full">
        <Image
          src={bg}
          alt="Background"
          loading="eager"
          fill
          className="object-cover scale-110 brightness-[0.7] lg:brightness-100"
        />
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary-pink/10 via-black/60 to-primary-cyan/10 lg:from-black/40 lg:to-transparent" />
        
        <div className="relative z-10 hidden lg:flex items-center justify-center h-full">
          <div className="glass w-full max-w-[580px] rounded-[32px] p-12 border border-white/10 shadow-2xl flex flex-col justify-center items-center text-center group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pink/10 rounded-full blur-3xl group-hover:bg-primary-pink/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-cyan/10 rounded-full blur-3xl group-hover:bg-primary-cyan/15 transition-all duration-700" />
            
            <p className="text-5xl font-extrabold text-neutral-50 mb-4 tracking-tighter">
              Viver da música
            </p>
            <p className="text-7xl font-black text-brand-gradient mb-4 leading-tight">
              não é sorte.
            </p>
            <p className="text-5xl font-extrabold text-neutral-200 tracking-tight">
              é direito
            </p>
            
            <div className="mt-8 w-16 h-1.5 bg-brand-gradient rounded-full shadow-lg glow-pink" />
          </div>
        </div>
      </div>

      {/* Background Overlay for Mobile */}
      <div className="absolute inset-0 lg:hidden bg-black/40 backdrop-blur-[2px]" />

      <div className="relative h-dvh flex items-center justify-center p-4 lg:p-10 transition-colors duration-500 overflow-hidden">
        {/* Header */}
        <div className="w-full max-w-md relative flex flex-col h-full justify-center">
          {/* <div className="absolute w-full top-0 left-0 pt-4 lg:pt-0 z-50">
            {!toggleGoBackAndThemeButton && (
              <div className="absolute w-full top-0 left-0 pt-4 lg:pt-0 z-50">
              <Link href="/login" className="p-2 inline-flex hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer items-center gap-2 group">
                <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-primary-cyan group-hover:-translate-x-1 transition-all" />
                <span className="text-sm font-bold text-neutral-400 group-hover:text-white uppercase tracking-widest">Voltar</span>
              </Link>
              </div>
            )}

            {toggleGoBackAndThemeButton && (
              <div className="flex justify-end">
                <button
                  ref={themeButtonRef}
                  onClick={toggleTheme}
                  className="p-2 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                >
                  {isDarkMode ? (
                    <Moon className="w-6 h-6 text-neutral-400 fill-current hover:text-primary-cyan transition-colors" />
                  ) : (
                    <Sun className="w-6 h-6 text-neutral-400 fill-current hover:text-primary-orange transition-colors" />
                  )}
                </button>
              </div>
            )}    
          </div> */}
          
            {!toggleGoBackAndThemeButton && (
              <div className="absolute w-full top-6 left-3 pt-4 lg:pt-0 z-50">
                <Link href="/login" className="p-2 inline-flex hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer items-center gap-2 group">
                  <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-primary-cyan group-hover:-translate-x-1 transition-all" />
                  <span className="text-sm font-bold text-neutral-400 group-hover:text-white uppercase tracking-widest">Voltar</span>
                </Link>
              </div>
            )}

          {toggleGoBackAndThemeButton && (
            <div className="absolute w-full top-0 left-0 pt-4 lg:pt-0 z-50">
              <div className="flex justify-end">
                <button
                  ref={themeButtonRef}
                  onClick={toggleTheme}
                  className="p-2 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                >
                  {isDarkMode ? (
                    <Moon className="w-6 h-6 text-neutral-400 fill-current hover:text-primary-cyan transition-colors" />
                  ) : (
                    <Sun className="w-6 h-6 text-neutral-400 fill-current hover:text-primary-orange transition-colors" />
                  )}
                </button>
              </div>
            </div>
          )}
            

          <div
            className="glass rounded-[32px] p-6 md:px-10 md:py-8 shadow-strong relative overflow-hidden group max-h-[95dvh] flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-pink/5 rounded-full blur-2xl group-hover:bg-primary-pink/10 transition-all pointer-events-none" />
            
            <div className="overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
