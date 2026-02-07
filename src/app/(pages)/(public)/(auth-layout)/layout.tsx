"use client";

import bg from "@/../public/images/palco.png";
import { gsap } from "gsap";

import { ArrowLeft, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { ReactNode, use, useRef, useState } from "react";

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
    <div className="min-h-dvh lg:grid lg:grid-cols-3">
      {/* Imagem - fundo no mobile, lado esquerdo no desktop */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:col-span-2 overflow-hidden">
        <Image
          src={bg}
          alt="Background"
          loading="eager"
          fill
          className="object-cover scale-110"
        />
        <div className=" lg:relative z-10 hidden lg:flex items-center justify-center h-full">
          <div className="w-full max-w-140 max-h-75 h-full bg-linear-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-xl border border-primary-orange/40 rounded-4xl p-10 shadow-2xl shadow-primary-orange/20 flex flex-col justify-center items-center text-center">
            <p className="text-5xl font-bold bg-linear-to-r from-orange-200 via-neutral-50 to-orange-100 bg-clip-text text-transparent mb-2">
              Viver da música
            </p>
            <p className="bg-[linear-gradient(135deg,#fbbf24,#fb923c,#ea580c,#fb923c,#fbbf24)] bg-clip-text text-transparent text-5xl font-black">
              não é sorte.
            </p>

            <p className="text-5xl font-bold bg-linear-to-r from-neutral-50 via-orange-200 to-neutral-50 bg-clip-text text-transparent mt-2">
              é direito
            </p>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-900/15 via-black/20 to-blue-900/15 backdrop-blur-xs" /> */}

      <div className="absolute inset-0 lg:hidden bg-linear-to-br from-purple-900/15 via-black/20 to-blue-900/15 backdrop-blur-xs" />

      <div className="relative min-h-dvh flex items-center justify-center p-6 transition-colors duration-500">
        {/* Header */}

        <div className="w-full max-w-md relative">
          {!toggleGoBackAndThemeButton && (
            <Link href="/login" className="absolute left-2 top-2 p-2 hover:bg-neutral-700 rounded-lg transition-colors z-50 cursor-pointer">
              <ArrowLeft className="w-6 h-6 text-neutral-300 " />
            </Link>
          )}

          {toggleGoBackAndThemeButton && (
            <button
              ref={themeButtonRef}
              onClick={toggleTheme}
              className="absolute right-2 top-2 p-2 hover:bg-neutral-700 rounded-lg transition-colors z-50 cursor-pointer"
            >
              {isDarkMode ? (
                <Moon className="w-6 h-6 text-neutral-300 fill-current" />
              ) : (
                <Sun className="w-6 h-6 text-neutral-300 fill-current" />
              )}
            </button>
          )}
          
          <div
            className="bg-linear-to-br from-background-orange/95 to-background-orange/95 via-neutral-800/90 shadow-primary-orange/20 border border-primary-orange/30 rounded-4xl p-6 md:p-8 text-center shadow-2xl backdrop-blur-md h-fit flex flex-col justify-center
            
              lg:bg-none 
              lg:shadow-none 
              lg:border-none 
              lg:rounded-none 
              lg:p-0 
              lg:backdrop-blur-none
              lg:block
              lg:justify-start
            "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
