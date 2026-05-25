"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: 18, suffix: "", label: "hectáreas totales" },
  { value: 595, suffix: "", label: "terrenos residenciales" },
  { value: 40000, suffix: " m²", label: "de parques equipados" },
  { value: 3, suffix: " km+", label: "de trotapista" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  // Inicializa con el valor final — nunca muestra 0 en el render inicial
  const [count, setCount] = useState(value);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;
    // Desktop: anima desde 0 hasta value
    setCount(0);
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {value >= 1000 ? count.toLocaleString("es-MX") : count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  initial: { opacity: 1, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Proyecto() {
  return (
    <section id="proyecto" className="bg-[#F4EDD8] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left column — editorial text */}
          <motion.div {...fadeUp}>
            <p className="font-dm-sans uppercase tracking-widest text-[0.7rem] text-[#8B5E3C] mb-4">
              El Encino Residencial
            </p>
            <h2
              className="font-cormorant text-[#1A2B1C] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Un residencial diseñado para vivir diferente.
            </h2>
            <p className="font-dm-sans text-[#1A2B1C]/75 text-[1.125rem] leading-[1.7]">
              18 hectáreas en el corazón de Lagos de Moreno con más de 40,000 m² de
              áreas verdes, infraestructura completa y acceso controlado. Un lugar donde
              el espacio y la naturaleza son parte de tu día a día.
            </p>
          </motion.div>

          {/* Right column — stat cards 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                className="bg-white border border-[#C4B49A] p-6"
              >
                <div
                  className="font-cormorant text-[#1A2B1C] leading-none mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-dm-sans text-sm text-[#8B5E3C]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-width aerial render */}
        <motion.div
          {...fadeUp}
          className="w-full h-[400px] md:h-[560px] overflow-hidden relative bg-[#C4B49A]/30"
        >
          <Image
            src="/images/residencial.png"
            alt="Vista aérea El Encino Residencial"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
