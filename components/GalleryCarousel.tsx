"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "/imgs/imggalery01.webp", alt: "Ambiente do restaurante 01" },
  { src: "/imgs/imggalery02.webp", alt: "Ambiente do restaurante 02" },
  { src: "/imgs/imggalery03.webp", alt: "Ambiente do restaurante 03" },
  { src: "/imgs/imggalery04.webp", alt: "Ambiente do restaurante 04" },
  { src: "/imgs/imggalery05.webp", alt: "Ambiente do restaurante 05" },
];

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section aria-label="Galeria do ambiente" className="mx-auto mt-16 w-full max-w-xl font-mono">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-stone-300">O Ambiente</h3>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Galeria</h1>
        </div>
        <span className="text-xs text-stone-400">
          {currentIndex + 1} / {GALLERY_IMAGES.length}
        </span>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <div
          className="flex w-full transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {GALLERY_IMAGES.map((item) => (
            <div key={item.src} className="aspect-[4/3] w-full shrink-0">
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handlePrev}
          aria-label="Foto anterior"
          className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/65 text-white transition hover:scale-105 hover:bg-[brown]"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima foto"
          className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/65 text-white transition hover:scale-105 hover:bg-[brown]"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="mt-4 flex justify-center gap-2">
        {GALLERY_IMAGES.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir para foto ${idx + 1}`}
            className={`h-2.5 cursor-pointer rounded-full transition-all ${
              currentIndex === idx ? "w-7 bg-[brown]" : "w-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}