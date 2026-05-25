"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Amenidades", href: "#amenidades" },
  { label: "Lotes", href: "#lotes" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A2B1C]/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-36 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLink("#hero"); }}
          className="flex items-center"
        >
          <img
            src="/logo.svg"
            alt="El Encino Residencial"
            className="h-32 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
              className="font-dm-sans text-[#FAFAF7]/80 hover:text-[#FAFAF7] text-sm tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contacto"
          onClick={(e) => { e.preventDefault(); handleLink("#contacto"); }}
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#8B5E3C] text-[#FAFAF7] font-dm-sans text-sm font-medium hover:bg-[#7a5234] transition-colors duration-200"
        >
          Agendar visita
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-[#FAFAF7] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FAFAF7] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#FAFAF7] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#1A2B1C] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleLink(l.href); }}
                  className="font-dm-sans text-[#FAFAF7]/80 text-base py-1 border-b border-[#C4B49A]/20"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); handleLink("#contacto"); }}
                className="mt-2 inline-flex justify-center items-center px-5 py-3 bg-[#8B5E3C] text-[#FAFAF7] font-dm-sans text-sm font-medium"
              >
                Agendar visita
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
