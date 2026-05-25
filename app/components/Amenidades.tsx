"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const amenidades = [
  {
    img: "/images/ciclovia.png",
    title: "Ciclovía",
    desc: "Recorre el residencial en bicicleta de forma segura y continua.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    img: "/images/areasdeconvivencia.png",
    title: "Áreas de convivencia",
    desc: "Espacios diseñados para reunirte con vecinos y familia.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
  {
    img: "/images/parqueperros.png",
    title: "Parque para perros",
    desc: "Zona especialmente acondicionada para tus mascotas.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
  {
    img: "/images/zonadeportiva.png",
    title: "Zonas deportivas",
    desc: "Cancha, áreas de ejercicio y más de 40,000 m² de parques.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    img: "/images/parque.png",
    title: "Parque infantil",
    desc: "Juegos y trotapista de más de 3 km para toda la familia.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M1 12h2m18 0h2M4.22 19.778l.707-.707M18.95 5.05l.707-.707" />
      </svg>
    ),
  },
  {
    img: "/images/acceso.png",
    title: "Acceso controlado",
    desc: "Barda perimetral y caseta de vigilancia para tu tranquilidad.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Amenidades() {
  return (
    <section id="amenidades" className="bg-[#1A2B1C] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="font-dm-sans uppercase tracking-widest text-[0.7rem] text-[#C4B49A] mb-4">
            Amenidades
          </p>
          <h2
            className="font-cormorant text-[#FAFAF7] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Todo lo que necesitas,<br />dentro de tu residencial.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenidades.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="group relative h-72 overflow-hidden cursor-default"
            >
              {/* Background image or solid */}
              {a.img ? (
                <>
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#1A2B1C]/60 group-hover:bg-[#1A2B1C]/45 transition-colors duration-300" />
                </>
              ) : (
                <div className="absolute inset-0 bg-[#243626] border border-[#C4B49A]/20" />
              )}

              {/* Content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-end">
                <div className="text-[#C4B49A] mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                  {a.icon}
                </div>
                <h3
                  className="font-cormorant text-[#FAFAF7] text-2xl mb-1.5 transition-transform duration-300 group-hover:-translate-y-1"
                >
                  {a.title}
                </h3>
                <p className="font-dm-sans text-[#FAFAF7]/70 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
