'use client';

import React, { useState } from 'react';
import { ChevronLeft, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { TextInput } from '@/app/components/ui/input';
import Link from 'next/link';

export default function Register() {
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
        <form className="bg-black p-6 mt-[200px] rounded-t-3xl">
          <h1 className="text-white text-2xl font-bold mb-6">Cadastro</h1>
          
          {/* Email/Username field */}
          <div className="mb-4">
            <TextInput
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          {/* Password field */}
          <div className="mb-4 relative">
            <TextInput
              type={showPassword ? "text" : "password"}
              placeholder="Crie uma senha"
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

          <div className='mb-4'>
            <TextInput
              type={showPassword ? "text" : "password"}
              placeholder="Confirme sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          
          
          {/* Next button */}
          <Link href="/register/create-profile">
            <Button className="mb-4">
              Próximo
            </Button>
          </Link>

        </form>
      </div>
    </div>
  );
};
