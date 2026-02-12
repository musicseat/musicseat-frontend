'use client';

import { MessageSquare, Search } from 'lucide-react';

export default function Messages() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-display text-neutral-50 font-bold tracking-tight">Conversas</h1>
        <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
          <Search className="w-5 h-5 text-neutral-400" />
        </button>
      </header>

      <div className="glass rounded-card p-12 text-center border border-white/5 shadow-strong min-h-[500px] flex flex-col items-center justify-center group">
        <div className="w-24 h-24 bg-primary-cyan/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl glow-cyan">
          <MessageSquare className="w-10 h-10 text-primary-cyan" />
        </div>
        <h2 className="text-h2 text-white font-bold mb-4 italic tracking-tight uppercase">Seu chat está em silêncio</h2>
        <p className="text-neutral-400 max-w-sm mb-10 leading-relaxed font-medium">
          Inicie uma conversa com outros artistas e produtores para começar a sua colaboração musical.
        </p>
        <button className="bg-brand-gradient text-white font-black px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg glow-pink">
          NOVA MENSAGEM
        </button>
      </div>
    </div>
  );
}
