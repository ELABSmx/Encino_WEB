"use client";

import { motion } from "framer-motion";

export default function Precios() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#1A2B1C] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-dm-sans uppercase tracking-widest text-[0.7rem] text-[#C4B49A] mb-4">
            Inversión
          </p>
          <h2
            className="font-cormorant text-[#FAFAF7] leading-[1.1] mb-7"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Tu terreno en Lagos de Moreno<br />
            <span className="text-[#C4B49A]">desde $4,193 al mes.</span>
          </h2>
          <p className="font-dm-sans text-[#FAFAF7]/70 text-[1.05rem] leading-[1.7] mb-10 max-w-xl mx-auto">
            Sin precio total publicado — la información de financiamiento completa se
            entrega de forma personalizada. Contáctanos y un asesor te enviará el plan
            que mejor se adapta a tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#contacto")}
              className="px-8 py-4 bg-[#8B5E3C] text-[#FAFAF7] font-dm-sans text-sm font-medium hover:bg-[#7a5234] transition-colors duration-200"
            >
              Solicitar información de precios
            </button>
            <a
              href="https://wa.me/5214742480286?text=Hola,%20me%20interesa%20conocer%20el%20precio%20de%20los%20terrenos%20de%20El%20Encino%20Residencial"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#C4B49A]/40 text-[#FAFAF7]/80 font-dm-sans text-sm font-medium hover:border-[#C4B49A] hover:text-[#FAFAF7] transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
