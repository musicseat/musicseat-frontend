"use client";

import { gsap } from "gsap";

import logo from "@/../public/images/musicset-icon-white.svg";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { LoginData, loginSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
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

  const onSubmit = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email ou senha inválidos. Tenta de novo?");
      } else {
        router.push("/feed");
        router.refresh();
      }
    } catch (err) {
      setError("Ocorreu um erro inesperado. Tenta daqui a pouco?");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center mb-6 text-center">
        <div className="w-14 h-14 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg glow-pink mb-4 p-3">
          <Image src={logo} alt="MusicSet Logo" width={32} height={32} className="object-contain" />
        </div>
        <h1 className="text-3xl font-black text-neutral-50 tracking-tight mb-1">Bem-vindo</h1>
        <p className="text-neutral-400 font-medium uppercase tracking-[0.2em] text-[10px]">Acesse seu ritmo</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5 px-2">
        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email ou Usuário</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Digite seu acesso..."
            className={`w-full px-5 py-3.5 bg-white/5 border ${errors.email ? 'border-primary-pink/50' : 'border-white/5'} rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300`}
          />
          {errors.email && (
            <span className="text-[10px] text-primary-pink font-bold ml-1 uppercase tracking-wider">{errors.email.message}</span>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Senha</label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Sua chave musical..."
              className={`w-full px-5 py-3.5 bg-white/5 border ${errors.password ? 'border-primary-pink/50' : 'border-white/5'} rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-pink/50 focus:ring-4 focus:ring-primary-pink/5 transition-all duration-300 pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-[10px] text-primary-pink font-bold ml-1 uppercase tracking-wider">{errors.password.message}</span>
          )}
        </div>

        {/* Global Error Message */}
        {error && (
          <div className="bg-primary-pink/10 border border-primary-pink/20 rounded-xl p-3 text-primary-pink text-[10px] font-bold text-center animate-pulse uppercase tracking-wider">
            {error}
          </div>
        )}

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between pb-4 pt-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input
                {...register("remember")}
                type="checkbox"
                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-white/10 bg-white/5 transition-all checked:bg-primary-cyan"
              />
              <span className="absolute text-neutral-900 opacity-0 peer-checked:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
            </div>
            <span className="text-neutral-400 text-sm font-medium group-hover:text-neutral-200 transition-colors">Lembrar</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-neutral-500 text-xs font-bold uppercase tracking-wider hover:text-primary-cyan transition-colors"
          >
            Esqueci a senha
          </Link>
        </div>

        {/* Login Button */}
        <button
          disabled={isLoading}
          className="w-full bg-brand-gradient text-white font-black text-lg py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg glow-cyan cursor-pointer uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Acessando..." : "Entrar no Palco"}
        </button>

        {/* Sign Up Link */}
        <div className="text-center pt-4 space-y-3">
          <p className="text-neutral-500 text-xs font-medium">Ainda não tem o seu lugar?</p>
          <Link
            href="/register"
            className="inline-block px-8 py-2.5 bg-white/5 border border-white/10 rounded-full text-neutral-50 hover:bg-white/10 text-xs transition-all font-bold uppercase tracking-widest shadow-strong"
          >
            Criar minha conta
          </Link>
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-4">
          <div className="grow border-t border-white/5"></div>
          <span className="shrink mx-4 text-[10px] font-bold text-neutral-600 uppercase tracking-[0.3em]">
            ou
          </span>
          <div className="grow border-t border-white/5"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/5 text-neutral-100 font-bold text-[10px] py-3 rounded-2xl hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2.5 bg-white/5 border border-white/5 text-neutral-100 font-bold text-[10px] py-3 rounded-2xl hover:bg-white/10 active:scale-[0.98] transition-all cursor-pointer uppercase tracking-wider"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Apple
          </button>
        </div>
      </form>
    </>
  );
}
