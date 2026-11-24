"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen, X } from "lucide-react";

interface ItemCardapio {
  nome: string;
  descricao: string;
  detalhe?: string;
}

interface PaginaCardapio {
  numero: number;
  categoria: string;
  subtitulo: string;
  itens: ItemCardapio[];
}

const PAGINAS_CARDAPIO: PaginaCardapio[] = [
  {
    numero: 1,
    categoria: "Brasa & Lenha",
    subtitulo: "Cortes e pratos principais preparados em fogo intenso",
    itens: [
      {
        nome: "Ancho na Brasa",
        descricao: "Corte nobre finalizado em lenha de lei com manteiga de ervas e flor de sal.",
        detalhe: "Serve 2 pessoas",
      },
      {
        nome: "Costela Defumada do Fogo",
        descricao: "Cocção lenta com crosta caramelizada e redução rústica da casa.",
        detalhe: "Alta temperatura",
      },
      {
        nome: "Legumes Chamuscados no Aço",
        descricao: "Seleção sazonal tostada no forno especial com azeite extravirgem.",
        detalhe: "Opção vegetariana",
      },
    ],
  },
  {
    numero: 2,
    categoria: "Drinks & Adega",
    subtitulo: "Clássicos, autorais e rótulos para acompanhar a brasa",
    itens: [
      {
        nome: "Negroni da Casa",
        descricao: "Equilíbrio intenso entre botânicos, vermute e toque cítrico defumado.",
        detalhe: "Clássico",
      },
      {
        nome: "Aperol & Tônica / Campari",
        descricao: "Frescor cítrico ideal para abrir os trabalhos no salão.",
        detalhe: "Dobro até 20:30 às sextas",
      },
      {
        nome: "Seleção de Vinhos & Rolha Livre",
        descricao: "Rótulos curados para harmonizar com carnes e noites de música ao vivo.",
        detalhe: "1 garrafa a cada 2 pessoas (dias selecionados)",
      },
    ],
  },
  {
    numero: 3,
    categoria: "Sobremesas do Fogo",
    subtitulo: "Finalizações afetivas com toque sutil de brasa",
    itens: [
      {
        nome: "Pudim Clássico com Calda Queimada",
        descricao: "Textura cremosa e caramelo tostado na medida certa.",
        detalhe: "Tradicional da casa",
      },
      {
        nome: "Fruta Assada na Brasa",
        descricao: "Toque defumado suave servido quente com contraste cremoso.",
        detalhe: "Sazonal",
      },
    ],
  },
];

interface CardapioViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CardapioViewer({ isOpen, onClose }: CardapioViewerProps) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [direcao, setDirecao] = useState<"next" | "prev">("next");
  const [virando, setVirando] = useState(false);

  const totalPaginas = PAGINAS_CARDAPIO.length;

  function irParaPagina(novoIndex: number, dir?: "next" | "prev") {
    let destino = novoIndex;
    if (destino < 0) destino = totalPaginas - 1;
    if (destino >= totalPaginas) destino = 0;

    const direcaoCalculada =
      dir ?? (destino > paginaAtual || (paginaAtual === totalPaginas - 1 && destino === 0) ? "next" : "prev");

    setDirecao(direcaoCalculada);
    setVirando(true);

    window.setTimeout(() => {
      setPaginaAtual(destino);
      setVirando(false);
    }, 180);
  }

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") irParaPagina(paginaAtual + 1, "next");
      if (e.key === "ArrowLeft") irParaPagina(paginaAtual - 1, "prev");
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, paginaAtual, onClose]);

  if (!isOpen) return null;

  const pagina = PAGINAS_CARDAPIO[paginaAtual];

  const transformClass = virando
    ? direcao === "next"
      ? "-rotate-y-12 -translate-x-4 opacity-0 scale-[0.98]"
      : "rotate-y-12 translate-x-4 opacity-0 scale-[0.98]"
    : "rotate-y-0 translate-x-0 opacity-100 scale-100";

  return (
    <div
      className="mt-8 w-full max-w-4xl text-left"
      style={{ perspective: "1400px" }}
    >
      <div
        className={`relative rounded-2xl border border-amber-200/20 bg-gradient-to-br from-[#181512] via-[#121212] to-[#0e0e0e] p-5 shadow-2xl transition-all duration-300 ease-out sm:p-8 ${transformClass}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Lombada / vinco sutil simulando folha de cardápio */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-4 left-0 hidden w-3 rounded-l-2xl border-r border-white/10 bg-gradient-to-r from-black/70 via-amber-900/20 to-transparent md:block"
        />

        {/* Cabeçalho da Página */}
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[brown]/25 text-amber-300">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-300">
                Página {pagina.numero} de {totalPaginas}
              </p>
              <h2 className="text-xl font-bold text-white sm:text-2xl">{pagina.categoria}</h2>
            </div>
          </div>

          {/* Seletor rápido de páginas */}
          <div className="flex flex-wrap items-center gap-2">
            {PAGINAS_CARDAPIO.map((p, idx) => (
              <button
                key={p.numero}
                type="button"
                onClick={() => irParaPagina(idx)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                  paginaAtual === idx
                    ? "bg-[brown] text-white"
                    : "bg-white/10 text-stone-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                Pág. {p.numero}
              </button>
            ))}

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar cardápio"
              className="ml-1 inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2 text-stone-300 transition hover:border-red-400/50 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-xs text-stone-300 sm:text-sm">{pagina.subtitulo}</p>

        {/* Itens da página */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {pagina.itens.map((item) => (
            <div
              key={item.nome}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-400/30"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{item.nome}</h3>
                  {item.detalhe && (
                    <span className="shrink-0 rounded bg-amber-400/15 px-2 py-0.5 text-[11px] font-semibold text-amber-300">
                      {item.detalhe}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone-300 sm:text-sm">
                  {item.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controles de virar página */}
        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={() => irParaPagina(paginaAtual - 1, "prev")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white transition hover:border-[brown] hover:bg-[brown] sm:text-sm"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Virar Página Anterior</span>
          </button>

          <span className="text-xs text-stone-400">
            {paginaAtual + 1} / {totalPaginas}
          </span>

          <button
            type="button"
            onClick={() => irParaPagina(paginaAtual + 1, "next")}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[brown] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[blueviolet] sm:text-sm"
          >
            <span>Virar Próxima Página</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}