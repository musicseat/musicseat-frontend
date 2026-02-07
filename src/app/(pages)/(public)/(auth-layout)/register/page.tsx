"use client";

import brazil from "@/../public/images/brazil-flag-icon.svg";
import { Calendar, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      <div className="relative flex justify-center items-center mb-12">
        <h1 className="text-4xl font-semibold text-neutral-50">Cadastro</h1>
      </div>

      <div className="px-4">
        <form className="space-y-4 flex-1">
          <div>
            <input
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
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

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirme sua Senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          {/* Birth Date Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Data de Nascimento"
              value={birthDate}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => !e.target.value && (e.target.type = "text")}
              onChange={(e) => setBirthDate(e.target.value)}
              className="input"
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
          </div>

          {/* Phone Input */}
          <div className="flex gap-2">
            <div className="flex items-center gap-2 px-3 py-3 bg-neutral-700 border border-neutral-500 rounded-xl min-w-fit">
              <span className="text-xl ">
                <Image src={brazil} alt="Brazil Flag" width={24} height={24} />
              </span>
              <span className="text-neutral-500 font-medium">+55</span>
            </div>
            <input
              type="tel"
              placeholder="Número de telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="flex gap-3 mt-8 mb-4">
          <Link
            href="/login"
            className="w-full bg-neutral-700 text-neutral-50 font-medium text-base py-3 rounded-full hover:bg-neutral-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            Voltar
          </Link>
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-neutral-50 font-medium text-base py-3 rounded-full hover:bg-neutral-600 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            Próximo
          </button>
        </div>
      </div>

      <p className="text-neutral-50">
        Já tem uma conta?{" "}
        <Link
          href="/login"
          className="hover:text-neutral-300 hover:underline underline-offset-2"
        >
          Faça login
        </Link>
      </p>
    </>
  );
}
