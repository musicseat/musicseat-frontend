"use client";

import brazil from "@/../public/images/brazil-flag-icon.svg";
import { Calendar, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "@/../public/images/musicset-icon-white.svg";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro:", { name, email, birthDate, phone, password });
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
        <form className="space-y-3 flex-1">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Nome Completo</label>
            <input
              type="text"
              placeholder="Como devemos te chamar?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Crie sua chave de acesso..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-pink/50 focus:ring-4 focus:ring-primary-pink/5 transition-all duration-300 pr-12"
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
          </div>

          {/* Birth Date Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest ml-1">Data de Nascimento</label>
            <div className="relative">
              <input
                type="text"
                placeholder="DD/MM/AAAA"
                value={birthDate}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !e.target.value && (e.target.type = "text")}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-5 py-3.5 bg-white/5 border border-white/5 rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
            </div>
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
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 px-5 py-3.5 bg-white/5 border border-white/5 rounded-2xl text-neutral-50 placeholder:text-neutral-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-4 focus:ring-primary-cyan/5 transition-all duration-300"
              />
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-6 mb-4">
          <button
            onClick={handleSubmit}
            className="w-full bg-brand-gradient text-white font-black text-lg py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg glow-cyan cursor-pointer uppercase tracking-widest"
          >
            Cadastrar no MusicSet
          </button>
          
          <Link
            href="/login"
            className="w-full bg-white/5 border border-white/10 text-neutral-400 font-bold text-xs py-3 rounded-full hover:bg-white/10 hover:text-white transition-all text-center uppercase tracking-widest"
          >
            Já tenho conta. Fazer Login
          </Link>
        </div>
      </div>
    </>
  );
}
