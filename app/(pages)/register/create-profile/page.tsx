'use client';

import React, { useState } from 'react';
import { ChevronLeft, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { TextInput } from '@/app/components/ui/input';
import Link from 'next/link';
import Image from 'next/image';


export default function CreateProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [tel, setTel] = useState('');

  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+55',
    flag: 'br',
    name: 'Brasil'
  });

  const countries = [
    { code: '+55', flag: 'br', name: 'Brasil' },
    { code: '+1', flag: 'us', name: 'Estados Unidos' },
    { code: '+351', flag: 'pt', name: 'Portugal' },
    { code: '+44', flag: 'gb', name: 'Reino Unido' },
    { code: '+34', flag: 'es', name: 'Espanha' },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
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
          <h1 className="text-white text-2xl font-bold mb-6">Criar Usuário</h1>
          
          {/* Name/Username field */}
          <div className="mb-4">
            <TextInput
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          {/* Username field */}
          <div className="mb-4">
            <TextInput
              placeholder="Nome de usuário"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

      
          {/* Birth field */}
          <div className='mb-4'>
            <TextInput
              type="date"
            />
          </div>

      
          {/* Número de telefone com seletor de país */}
        <div className="flex space-x-2 mb-6">
          {/* Seletor de país */}
          <div className="relative">
            <button 
              type="button" 
              onClick={toggleDropdown}
              className="flex items-center justify-between border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:border-gray-500 w-24"
            >
              <div className="flex h-8 items-center">
                <div className="w-6 h-4 relative overflow-hidden rounded">
                  <Image 
                    src={`https://flagcdn.com/${selectedCountry.flag}.svg`} 
                    alt={selectedCountry.name} 
                    layout="fill" 
                    objectFit="cover"
                  />
                </div>
              </div>
              <span className="ml-1 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            {/* Dropdown de países */}
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 mt-1 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    className="flex items-center w-full px-4 py-2 text-white hover:bg-gray-800"
                    onClick={() => selectCountry(country)}
                  >
                    <div className="w-6 h-4 relative overflow-hidden rounded mr-2">
                      <Image 
                        src={`https://flagcdn.com/${country.flag}.svg`} 
                        alt={country.name} 
                        layout="fill" 
                        objectFit="cover"
                      />
                    </div>
                    <span>{country.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Campo de telefone */}
          <TextInput
            type="tel"
            placeholder="Número de telefone"
          />
        </div>
          
          
          {/* Next button */}
          <div className='flex justify-between items-center mb-6'>
          <Link href="./">
            <Button variant='ghost' className="mb-4 grow px-12">
              Voltar
            </Button>
          </Link>
          <Link href="">
            <Button className="mb-4 px-12">
              Próximo
            </Button>
          </Link>
          </div>

        </form>
      </div>
    </div>
  );
};
