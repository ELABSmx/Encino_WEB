"use client";

import { motion } from "framer-motion";

const ciudades = [
  { nombre: "Guadalajara", tiempo: "2 h", km: "180 km" },
  { nombre: "Aguascalientes", tiempo: "1 h", km: "90 km" },
  { nombre: "San Luis Potosí", tiempo: "2 h", km: "200 km" },
  { nombre: "León", tiempo: "1.5 h", km: "120 km" },
];

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-white pt-24 lg:pt-32 overflow-hidden">

      {/* Texto + cards — contenido superior */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Izquierda — editorial */}
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <p className="font-dm-sans uppercase tracking-widest text-[0.7rem] text-[#8B5E3C] mb-4">
              Ubicación
            </p>
            <h2
              className="font-cormorant text-[#1A2B1C] leading-[1.1] mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              En el corazón de<br />Lagos de Moreno.
            </h2>
            <p className="font-dm-sans text-[#1A2B1C]/70 text-[1.05rem] leading-[1.7] mb-8">
              Sobre la Autopista Lagos–SLP, a solo 5 km de la glorieta del Blvd.
              Félix Ramírez Rentería. Con conexión directa a las principales
              ciudades de la región.
            </p>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0 text-[#8B5E3C]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-dm-sans text-sm text-[#1A2B1C]/50">
                C43Q+5M · 47520 Lagos de Moreno, Jal.
              </span>
            </div>
          </motion.div>

          {/* Derecha — lista vertical minimalista */}
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
            className="divide-y divide-[#1A2B1C]/10"
          >
            {ciudades.map((c, i) => (
              <motion.div
                key={c.nombre}
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.15 + i * 0.08 }}
                className="flex items-center justify-between py-4"
              >
                <div>
                  <p className="font-cormorant text-[#1A2B1C] text-2xl leading-tight">{c.nombre}</p>
                  <p className="font-dm-sans text-[#1A2B1C]/45 text-xs mt-0.5">{c.km}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#8B5E3C]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                  <span className="font-dm-sans text-[#8B5E3C] text-sm font-medium">{c.tiempo}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Mapa full-width — ocupa todo el ancho hasta el borde de la sección */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
        className="w-full h-[500px] lg:h-[580px]"
      >
        <iframe
          title="Mapa El Encino Residencial"
          src="https://maps.google.com/maps?q=C43Q%2B5M+47520+Lagos+de+Moreno+Jal&output=embed&z=14"
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

    </section>
  );
}
