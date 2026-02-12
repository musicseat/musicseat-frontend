'use client';

import { gsap } from 'gsap';
import { Disc, Music2, Play } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const discRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Rotation animation for the disc
    gsap.to(discRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: 'none',
    });

    // Fade-in animation for the content
    gsap.fromTo(containerRef.current, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-neutral-800 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Grafismos */}
      <div className="absolute top-0 -left-64 w-[600px] h-[600px] bg-primary-pink grafismo-glow" />
      <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-primary-cyan grafismo-glow" />
      
      <div ref={containerRef} className="glass max-w-lg w-full rounded-[40px] p-12 text-center border border-white/5 shadow-2xl relative z-10 flex flex-col items-center">
        {/* Animated Disc / Vinyl */}
        <div className="relative mb-12">
          <div ref={discRef} className="w-48 h-48 bg-neutral-900 rounded-full border-4 border-neutral-700 flex items-center justify-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* Grooves */}
            <div className="absolute inset-4 border border-neutral-700/50 rounded-full" />
            <div className="absolute inset-8 border border-neutral-700/50 rounded-full" />
            <div className="absolute inset-12 border border-neutral-700/50 rounded-full" />
            
            {/* Center Label */}
            <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg glow-pink">
              <span className="text-white font-black text-xl">404</span>
            </div>
          </div>
          
          {/* Tone Arm Placeholder */}
          <div className="absolute top-0 -right-4 w-2 h-24 bg-neutral-600 rounded-full origin-top rotate-12" />
        </div>

        <h1 className="text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
          Fora do Compassu
        </h1>
        <p className="text-neutral-400 text-lg mb-10 font-medium leading-relaxed">
          Essa faixa não está na nossa playlist. <br/>
          Parece que você mudou de tom ou seguiu um caminho sem retorno.
        </p>

        <Link 
          href="/feed" 
          className="bg-brand-gradient text-white font-black px-10 py-4 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg glow-cyan group"
        >
          <Play className="w-5 h-5 fill-current" />
          VOLTAR PRO PALCO
        </Link>

        {/* Floating Notes */}
        <Music2 className="absolute top-10 right-10 w-8 h-8 text-primary-cyan/20 animate-bounce" />
        <Disc className="absolute bottom-10 left-10 w-8 h-8 text-primary-pink/20 animate-pulse" />
      </div>
    </div>
  );
}
