"use client";

import { motion, type Transition } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 1, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay } as Transition,
});

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100svh] min-h-[600px] overflow-hidden bg-[#1A2B1C]">
      {/* Video background — scale 112% para cortar el watermark de la esquina */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.12]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay: gradiente izquierda + scrim inferior para anclar el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B1C]/70 via-[#1A2B1C]/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B1C]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-xl md:max-w-2xl text-left">
          {/* Tagline */}
          <motion.p
            {...fadeUp(0)}
            className="font-dm-sans uppercase tracking-widest text-[0.7rem] text-[#C4B49A] mb-4"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
          >
            Lagos de Moreno, Jalisco
          </motion.p>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.15)}
            className="font-cormorant text-[#FAFAF7] leading-[1.05] mb-5"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5.5rem)",
              textShadow: "0 2px 30px rgba(0,0,0,0.95), 0 0 70px rgba(0,0,0,0.7)",
            }}
          >
            El lugar donde<br />
            tu familia puede<br />
            echar raíces.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeUp(0.3)}
            className="font-dm-sans text-[#FAFAF7]/90 text-[1.05rem] mb-8"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}
          >
            595 lotes residenciales · infraestructura lista · desde $4,193/mes
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <button
              onClick={() => scrollTo("#contacto")}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#8B5E3C] text-[#FAFAF7] font-dm-sans text-sm font-medium hover:bg-[#7a5234] transition-colors duration-200"
            >
              Agenda tu visita
            </button>
            <button
              onClick={() => scrollTo("#proyecto")}
              className="w-full sm:w-auto font-dm-sans text-[#FAFAF7]/80 text-sm hover:text-[#FAFAF7] transition-colors duration-200"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
            >
              Conocer el proyecto ↓
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right badge — oculto en mobile para no chocar con CTAs */}
      <div className="hidden sm:block absolute bottom-8 right-6 md:right-8">
        <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-[#FAFAF7]/80 font-dm-sans text-xs">
          Lagos de Moreno · Pueblo Mágico
        </span>
      </div>
    </section>
  );
}
