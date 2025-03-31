'use client';

import React, { useState } from 'react';
import { ChevronLeft, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { TextInput } from '@/app/components/ui/input';
import Link from 'next/link';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="w-full max-w-md bg-gray-800 rounded-3xl overflow-hidden">
        {/* Header with back button */}
        <div className="p-4 relative bg-gray-800">
          <button className="text-white">
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Login form section */}
        <div className="bg-black p-6 mt-[60px] rounded-t-3xl">
          <h1 className="text-white text-2xl font-bold mb-6">Login</h1>
          
          {/* Email/Username field */}
          <div className="mb-4">
            <TextInput
              placeholder="Email ou Usuário"
              className="w-full p-4 rounded-lg bg-transparent border border-gray-700 text-white mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Password field */}
          <div className="mb-4 relative">
            <TextInput
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="w-full p-4 rounded-lg bg-transparent border border-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          {/* Remember me and forgot password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              {/* Custom styled checkbox */}
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="sr-only" // Hide the actual checkbox but keep it accessible
                />
                <div 
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-5 h-5 flex items-center justify-center rounded border ${
                    rememberMe 
                      ? 'bg-white border-white' 
                      : 'bg-transparent border-gray-600'
                  } cursor-pointer`}
                >
                  {rememberMe && <Check size={14} className="text-black" />}
                </div>
                <label 
                  htmlFor="remember" 
                  className="ml-2 text-white text-sm cursor-pointer"
                >
                  Lembrar
                </label>
              </div>
            </div>
            <button className="text-white text-sm">Esqueci minha senha</button>
          </div>
          
          {/* Login button */}
          <Button className="mb-4">
            Fazer Login
          </Button>
          
          {/* Register button */}
          <Link href={"/register"}>
            <Button variant='ghost' className="mb-6">
              Cadastre-se
            </Button>
          </Link>
          
          {/* Social login section */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gray-700 flex-grow"></div>
              <span className="text-gray-400 text-sm">Ou continue com</span>
              <div className="h-px bg-gray-700 flex-grow"></div>
            </div>
            
            <div className="flex justify-center gap-16">

              {/* Google button */}
              <button className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/google.svg" alt="" />
                </div>
              </button>
              
              {/* Apple button */}
              <button className="w-12 h-12 rounded-2xl flex items-center justify-center border border-gray-600">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/apple.svg" alt="" />
                </div>
              </button>
            </div>
          </div>
          
          {/* Terms and conditions */}
          <div className="text-gray-400 text-xs text-center">
            Ao clicar em "Fazer Login", você aceita os{' '}
            <a href="#" className="text-white">Termos e condições</a> de uso e a{' '}
            <a href="#" className="text-white">Política de privacidade</a>
          </div>
        </div>
      </div>
    </div>
  );
};
