"use client";

import { gsap } from "gsap";
import bg from '@/../public/images/palco.png';


import { Eye, EyeOff, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();

    console.log("Login:", { email, password, rememberMe });
  }

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-3">
      {/* Imagem - fundo no mobile, lado esquerdo no desktop */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:col-span-2 overflow-hidden">
        <Image
          src={bg}
          alt="Background"
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
          <button
            ref={themeButtonRef}
            onClick={toggleTheme}
            className="absolute right-2 top-2 p-2 hover:bg-neutral-700 rounded-lg transition-colors"
          >
            {isDarkMode ? (
              <Moon className="w-6 h-6 text-neutral-300 fill-current" />
            ) : (
              <Sun className="w-6 h-6 text-neutral-300 fill-current" />
            )}
          </button>
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
            <div className="relative flex justify-center items-center mb-12">
              <h1 className="text-4xl font-semibold text-neutral-50">Login</h1>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email ou Usuário"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-neutral-500 checked:bg-neutral-800 checked:border-neutral-800 cursor-pointer transition-all"
                  />

                  <span className="text-neutral-300 text-md">Lembrar</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-neutral-300 text-md hover:text-neutral-50 transition-colors"
                >
                  Esqueci minha senha
                </Link>
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-black text-neutral-50 font-medium text-lg py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all shadow-medium"
              >
                Fazer Login
              </button>

              {/* Sign Up Link */}
              <div className="text-center">
                <Link
                  href="/register"
                  className="text-neutral-50 hover:text-neutral-200 text-lg transition-colors font-medium"
                >
                  Cadastre-se
                </Link>
              </div>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-neutral-800 px-4 text-md text-neutral-400">
                    ou continue com
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full bg-neutral-700 text-neutral-50 font-medium text-base py-3 rounded-full hover:bg-neutral-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continuar com Google
                </button>

                <button
                  type="button"
                  className="w-full bg-neutral-700 text-neutral-50 font-medium text-base py-3 rounded-full hover:bg-neutral-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Continuar com Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
