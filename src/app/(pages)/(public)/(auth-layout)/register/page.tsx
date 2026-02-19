"use client";

import brazil from "@/../public/images/brazil-flag-icon.svg";
import { Calendar, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


import logo from "@/../public/images/musicset-icon-white.svg";

import { RegisterData, registerSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: RegisterData) => {

  };

  return (
    <>
      {/* Title */}
      <div className="relative flex flex-col justify-center items-center mb-6 text-center">
        <div className="w-14 h-14 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg glow-pink mb-4 p-3">
          <Image src={logo} alt="MusicSet Logo" width={32} height={32} className="object-contain" />
        </div>
        <h1 className="text-3xl font-black text-neutral-50 tracking-tight mb-1">Criar Conta</h1>
        <p className="text-neutral-400 font-medium uppercase tracking-[0.2em] text-[10px]">Junte-se à nossa comunidade</p>
      </div>

      <div className="px-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 flex-1">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Nome Completo</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Como devemos te chamar?"
              className={`w-full px-5 py-3.5 bg-white/5 border ${errors.name ? 'border-primary-pink/50' : 'border-white/5'} rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300`}
            />
            {errors.name && (
                <span className="text-[10px] text-primary-pink font-bold ml-1 uppercase tracking-wider">{errors.name.message}</span>
            )}
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="seu@email.com"
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
                placeholder="Crie sua chave de acesso..."
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

          {/* Birth Date Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Data de Nascimento</label>
            <div className="relative">
              <input
                {...register("birthDate")}
                type="text"
                placeholder="DD/MM/AAAA"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !e.target.value && (e.target.type = "text")}
                className={`w-full px-5 py-3.5 bg-white/5 border ${errors.birthDate ? 'border-primary-pink/50' : 'border-white/5'} rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300`}
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
            </div>
            {errors.birthDate && (
                <span className="text-[10px] text-primary-pink font-bold ml-1 uppercase tracking-wider">{errors.birthDate.message}</span>
            )}
          </div>

          {/* Phone Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Telefone</label>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-4 py-3.5 bg-white/5 border border-white/5 rounded-2xl min-w-fit">
                <span className="flex items-center">
                  <Image src={brazil} alt="Brazil Flag" width={20} height={14} className="rounded-xs" />
                </span>
                <span className="text-neutral-400 font-bold text-sm">+55</span>
              </div>
              <input
                {...register("phone")}
                type="tel"
                placeholder="(00) 00000-0000"
                className={`flex-1 px-5 py-3.5 bg-white/5 border ${errors.phone ? 'border-primary-pink/50' : 'border-white/5'} rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300`}
              />
            </div>
            {errors.phone && (
                <span className="text-[10px] text-primary-pink font-bold ml-1 uppercase tracking-wider">{errors.phone.message}</span>
            )}
          </div>

          {/* Global Error Message */}
          {error && (
            <div className="bg-primary-pink/10 border border-primary-pink/20 rounded-xl p-3 text-primary-pink text-[10px] font-bold text-center animate-pulse uppercase tracking-wider">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-6 mb-4">
            <button
              disabled={isLoading}
              className="w-full bg-brand-gradient text-white font-black text-lg py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg glow-cyan cursor-pointer uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Criando conta..." : "Cadastrar no MusicSet"}
            </button>
            
            <Link
              href="/login"
              className="w-full bg-white/5 border border-white/10 text-neutral-400 font-bold text-xs py-3 rounded-full hover:bg-white/10 hover:text-white transition-all text-center uppercase tracking-widest"
            >
              Já tenho conta. Fazer Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
