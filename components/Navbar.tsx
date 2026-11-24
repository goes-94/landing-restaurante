"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5541984205083";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-12">
        <a
          href="#"
          className="font-mono text-xl font-bold tracking-wider text-[brown] transition hover:opacity-90 sm:text-2xl"
        >
          Sua Logo
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Navegação principal">
          <ul className="flex items-center gap-6 font-mono text-base font-bold tracking-widest text-white lg:text-lg">
            <li>
              <a href="#sobre" className="transition duration-300 hover:scale-105 hover:text-[brown]">
                Sobre
              </a>
            </li>
            <li>
              <a href="#reservas" className="transition duration-300 hover:scale-105 hover:text-[brown]">
                Reservas
              </a>
            </li>
            <li>
              <a href="#cardapio" className="transition duration-300 hover:scale-105 hover:text-[brown]">
                Cardápio
              </a>
            </li>
            <li>
              <a href="#contato" className="transition duration-300 hover:scale-105 hover:text-[brown]">
                Contato
              </a>
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] bg-[brown] px-4 py-2 font-mono text-sm font-bold text-white transition duration-300 hover:scale-105 hover:bg-[blueviolet]"
          >
            Faça sua Reserva
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-white transition hover:border-[brown] hover:text-[brown] md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="border-t border-white/10 bg-[#0d0d0d]/95 px-4 py-5 md:hidden">
          <ul className="flex flex-col gap-4 font-mono text-base font-bold tracking-wider text-white">
            <li>
              <a href="#sobre" onClick={() => setOpen(false)} className="block py-1 hover:text-[brown]">
                Sobre
              </a>
            </li>
            <li>
              <a href="#reservas" onClick={() => setOpen(false)} className="block py-1 hover:text-[brown]">
                Reservas
              </a>
            </li>
            <li>
              <a href="#cardapio" onClick={() => setOpen(false)} className="block py-1 hover:text-[brown]">
                Cardápio
              </a>
            </li>
            <li>
              <a href="#contato" onClick={() => setOpen(false)} className="block py-1 hover:text-[brown]">
                Contato
              </a>
            </li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-[10px] bg-[brown] px-4 py-3 text-center font-mono text-sm font-bold text-white transition hover:bg-[blueviolet]"
          >
            Faça sua Reserva
          </a>
        </div>
      )}
    </header>
  );
}