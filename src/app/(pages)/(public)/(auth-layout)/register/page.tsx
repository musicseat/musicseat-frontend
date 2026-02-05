"use client";

import { useState } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log("Cadastro:", { name, email, birthDate, phone });
  };

  return (
    <div className="min-h-dvh flex flex-col p-6">
      {/* Header */}
      <div className="flex items-center justify-center relative mb-8 mt-4">
        <Link href="/login" className="absolute left-0">
          <ArrowLeft className="w-6 h-6 text-neutral-50" />
        </Link>
        <h2 className="text-lg font-semibold text-neutral-50">MusicSeat</h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col max-w-md w-full mx-auto">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-50 text-center">
            Criar Usuário
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-4 flex-1">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Nome"
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
              <span className="text-xl">🇧🇷</span>
              <span className="text-neutral-700 font-medium">+55</span>
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
            className="flex-1 text-neutral-50 font-medium text-lg py-4 rounded-full  active:scale-[0.98] transition-all text-center"
          >
            Voltar
          </Link>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-black text-white font-medium text-lg py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all shadow-medium"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}