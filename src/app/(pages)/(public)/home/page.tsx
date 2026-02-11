"use client";

import { gsap } from "gsap";
import { ArrowRight, Mic, Music, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import bg from "@/../public/images/palco.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const cardRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const highlightRef = useRef(null);

  const slides = [
    {
      icon: <Music className="w-16 h-16" />,
      title: "Explore o Novo Ecossistema Musical",
      description:
        "Encontre artistas talentosos e profissionais incríveis em nossa plataforma.",
      highlight: "Demonstre seu talento e crie histórias musicais.",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Conecte-se com Músicos Profissionais",
      description:
        "Interaja com artistas e outros amantes da música em nossa comunidade vibrante.",
      highlight: "Descubra novas oportunidades musicais todos os dias.",
    },
    {
      icon: <Mic className="w-16 h-16" />,
      title: "Sua Jornada Musical Começa Aqui",
      description:
        "Crie sua própria experiência musical personalizada e única em nossa plataforma.",
      highlight: "Transforme sua paixão em profissão.",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    const xPosition = direction === "left" ? -50 : 50;
    const rotation = direction === "left" ? 180 : -180;

    // Animação de entrada dos elementos
    tl.fromTo(
      iconRef.current,
      { scale: 0, rotation: rotation, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
    )
      .fromTo(
        titleRef.current,
        { x: xPosition, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        descriptionRef.current,
        { x: xPosition, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        highlightRef.current,
        { x: xPosition, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.3",
      );

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  function handleNext() {
    setDirection("right");
    if (currentSlide < slides.length - 1) {
      animateOut(() => setCurrentSlide(currentSlide + 1), "right");
    }
  }

  function handleBack() {
    if (currentSlide > 0) {
      setDirection("left");
      animateOut(() => setCurrentSlide(currentSlide - 1), "left");
    }
  }

  function animateOut(callback: () => void, dir: "left" | "right") {
    const tl = gsap.timeline({
      onComplete: callback,
    });

    const rotation = dir === "left" ? -180 : 180;
    const xPosition = dir === "left" ? 50 : -50;

    tl.to(iconRef.current, {
      scale: 0.8,
      rotation: rotation,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    }).to(
      [titleRef.current, descriptionRef.current, highlightRef.current],
      {
        x: xPosition,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        stagger: 0.05,
      },
      "-=0.2",
    );
  }

  return (
    <div className="h-full relative overflow-hidden">
      {/* background */}
      <Image
        src={bg}
        alt="Background"
        loading="eager"
        fill
        className="object-cover -z-20  scale-110 "
      />

      {/* <div className="absolute inset-0 -z-10 backdrop-blur-sm bg-black/30" /> */}

      <div className="absolute inset-0 -z-10 bg-linear-to-br from-purple-900/15 via-black/20 to-blue-900/15 backdrop-blur-xs" />

      <div className="flex flex-col items-center justify-between p-6 pb-8 h-full">
        {/* Skip button */}
        <div className="w-full flex justify-end max-w-2xl">
          <Link
            href="/login"
            className="text-neutral-400 hover:text-neutral-200 transition-colors text-sm font-medium underline"
          >
            Pular
          </Link>
        </div>

        {/* Carousel Content */}
        <div className="flex-1 flex items-center justify-right w-full max-w-2xl sm:max-w-xl px-4">
          <div className="w-full">
            {/* Card */}
            <div
              ref={cardRef}
              // className="rounded-4xl p-8 md:p-12 text-center shadow-strong h-125 md:h-137.5 flex flex-col justify-center backdrop-blur-md bg-neutral-600/10 border border-white/10"

              // className="bg-gradient-to-br from-[#021e4c]/95 via-neutral-800/90 to-[#021e4c]/95 shadow-[#00fff1]/20 rounded-4xl p-8 md:p-12 text-center shadow-2xl backdrop-blur-md border border-[#00fff1]/30 h-125 md:h-137.5 flex flex-col justify-center"  primeira versão

              // className="bg-gradient-to-br from-[#30002a]/45 to-[#30002a]/15 [#fa3eff]/95 via-neutral-800/35 border-[#fa3eff]/25 rounded-4xl p-8 md:p-12 text-center shadow-2xl shadow- backdrop-blur-sm border h-125 md:h-137.5 flex flex-col justify-center" // segunda versão
              className={`bg-gradient-to-br from-background-orange/95 to-background-orange/95 via-neutral-800/90 shadow-primary-orange/20 border border-primary-orange/30 rounded-4xl p-8 md:p-12 text-center shadow-2xl backdrop-blur-md h-125 md:h-137.5 flex flex-col justify-center relative`}

              //  ${currentSlide === 0 ? 'bg-amber-50' : 'bg-amber-400'}
              
              // }
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div
                  ref={iconRef}
                  className="rounded-2xl p-6 md:p-8 text-neutral-50 w-32 h-32 flex items-center justify-center"
                >
                  {slides[currentSlide].icon}
                </div>
              </div>

              {/* Title */}
              <h1
                ref={titleRef}
                className="text-2xl md:text-4xl font-bold text-neutral-50 leading-tight px-2 mb-6 h-20 md:h-25 flex items-center justify-center"
              >
                {slides[currentSlide].title}
              </h1>

              {/* Description */}
              <p
                ref={descriptionRef}
                className="text-neutral-300 text-base md:text-lg leading-relaxed px-2 mb-4 h-15 md:h-17.5 flex items-center justify-center"
              >
                {slides[currentSlide].description}
              </p>

              {/* Highlight */}
              <p
                ref={highlightRef}
                className="text-primary-cyan font-semibold text-base md:text-lg px-2 h-12.5 md:h-15 flex items-center justify-center"
              >
                {slides[currentSlide].highlight}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-2xl sm:max-w-lg space-y-6 md:space-y-8">
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary-cyan"
                    : "w-1.5 bg-neutral-600"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              ></div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {currentSlide > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center justify-center max-w-28 bg-transparent text-neutral-50 font-semibold text-base md:text-lg py-3 md:py-4 px-6 md:px-10 rounded-full hover:bg-neutral-700 hover:border-primary-orange/60 active:scale-[0.98] transition-all bg-linear-to-br from-background-orange/95 to-background-orange/95 via-neutral-800/90 shadow-primary-orange/20 border border-primary-orange/30
                
                "
              >
                Voltar
              </button>
            )}

            {currentSlide < slides.length - 1 ? (
              <button
                onClick={handleNext}
                className="border border-transparent col-start-2 bg-white text-black font-semibold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-full hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-medium"
              >
                Próximo
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            ) : (
              <Link
                href="/register"
                className="border border-transparent col-start-2 bg-white text-black font-semibold text-base md:text-lg py-3 md:py-4 px-6 md:px-8 rounded-full hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-medium"
              >
                Começar
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
