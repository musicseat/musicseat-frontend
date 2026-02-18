'use client';

import { Bell, CreditCard, Lock, Music, Shield, User } from 'lucide-react';

const sections = [
  { icon: User, label: 'Conta', description: 'Informações do seu perfil e e-mail' },
  { icon: Bell, label: 'Notificações', description: 'Alertas de curtidas, menções e eventos' },
  { icon: Lock, label: 'Privacidade', description: 'Gerencie quem vê seus posts e interações' },
  { icon: Music, label: 'Preferências Musicais', description: 'Gêneros, instrumentos e gostos' },
  { icon: Shield, label: 'Segurança', description: 'Senha e autenticação em dois fatores' },
  { icon: CreditCard, label: 'Assinatura', description: 'Gerencie seu plano MusicSet PRO' },
];

export default function Settings() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-display text-neutral-50 font-bold tracking-tight">Configurações</h1>
        <p className="text-neutral-400 font-medium">Gerencie sua presença no palco digital</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <button
              key={idx}
              className="glass p-6 rounded-card border border-white/5 flex items-center gap-6 group hover:bg-white/5 transition-all duration-300 text-left hover:border-primary-cyan/20"
            >
              <div className="w-14 h-14 bg-neutral-800 rounded-2xl flex items-center justify-center group-hover:bg-primary-cyan/10 transition-colors group-hover:glow-cyan">
                <Icon className="w-7 h-7 text-neutral-400 group-hover:text-primary-cyan transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-cyan transition-colors">
                  {section.label}
                </h3>
                <p className="text-sm text-neutral-500 font-medium leading-tight">
                  {section.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-10 flex justify-center">
        <button className="text-primary-pink font-black text-sm uppercase tracking-[0.2em] hover:text-white transition-colors">
          Sair da Conta
        </button>
      </div>
    </div>
  );
}
