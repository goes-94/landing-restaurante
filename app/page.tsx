"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { Footer } from "@/components/Footer";
import { CardapioViewer } from "@/components/CardapioViewer";

const WHATSAPP_URL = "https://wa.me/5541984205083";

const PROGRAMACAO_DIAS = [
  {
    dia: "TER",
    titulo: "Amigos & Momentos",
    descricao: "Realize sua confraria com rolha livre (uma garrafa a cada duas pessoas).",
  },
  {
    dia: "SEX",
    titulo: "Drinks",
    descricao: "Dobro de drinks Campari até 20:30 · Dobro de Aperol e Tônica até 20:30.",
  },
  {
    dia: "SÁB",
    titulo: "Brasa & Momentos",
    descricao: "Abertura da Casa às 18:00",
  },
  {
    dia: "DOM",
    titulo: "Almoço & Família",
    descricao: "O clássico almoço de domingo no Feu. Abertura da casa às 16h",
  },
];

const PASSOS_RESERVA = [
  {
    numero: "01",
    titulo: "Chame no Whatsapp",
    descricao: "Diga o dia, o horário e o número de pessoas.",
  },
  {
    numero: "02",
    titulo: "Confirmamos sua Mesa",
    descricao: "Uma resposta rápida garante o seu lugar.",
  },
  {
    numero: "03",
    titulo: "Ganhe um Welcome Drink",
    descricao: "Cortesia da casa para quem reserva.",
  },
];

export default function HomePage() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Imagem de fundo fixa no topo */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[450px] bg-[url('/imgs/imgheader.png')] bg-cover bg-center bg-no-repeat sm:h-[560px]"
      />

      <Navbar />

      {/* Hero / Chamada Principal sobre a imagem de fundo */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-5 -mb-2 text-center font-mono sm:px-8 sm:pt-28">
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
          Feito no Fogo Intenso &amp; Verdadeiro.
        </h1>
        <h3 className="mx-auto mt-4 max-w-2xl text-sm font-normal text-stone-100 drop-shadow sm:text-lg">
          Sabor com simplicidade, feito no fogo. Alta gastronomia descomplicada — na brasa, na lenha e na alma.
        </h3>

        {/* Navegação rápida + Descubra o Restaurante */}
        <div className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm sm:gap-6 sm:text-base">
            <li>
              <a href="#programacao" className="px-2 py-1 text-white transition duration-300 hover:scale-105 hover:text-[brown]">
                Programação
              </a>
            </li>
            <li>
              <a href="#reservas" className="px-2 py-1 text-white transition duration-300 hover:scale-105 hover:text-[brown]">
                Reservas
              </a>
            </li>
            <li>
              <a href="#cardapio" className="px-2 py-1 text-white transition duration-300 hover:scale-105 hover:text-[brown]">
                Cardápio
              </a>
            </li>
            <li>
              <a href="#contato" className="px-2 py-1 text-white transition duration-300 hover:scale-105 hover:text-[brown]">
                Contato
              </a>
            </li>
          </ul>

          <h4 className="mt-10 text-xl font-bold text-white drop-shadow sm:mt-16 sm:text-3xl">
            Descubra o Restaurante
          </h4>
        </div>
      </section>

      {/* Conteúdo principal escuro sobreposto */}
      <main className="relative z-10 mt-4 rounded-t-[20px] bg-[#0d0d0d]/[0.95] px-4 py-2 font-mono text-white sm:px-8 lg:px-14 lg:py-20">
        <div id="sobre" className="mx-auto max-w-6xl space-y-16 lg:space-y-24">
          {/* Bloco 1: Gastronomia */}
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
            <div className="w-full space-y-4 text-left lg:w-1/2">
              <h3 className="text-sm uppercase tracking-widest text-amber-400/90">Gastronômia</h3>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Tudo passa pelo Fogo</h1>
              <p className="text-sm leading-relaxed text-stone-300 sm:text-base">
                O forno da casa é singular — construído em aço especial e pensado exclusivamente para o espaço. Mantém-se aceso em alta temperatura constante, realçando a textura, o aroma e a intensidade de cada criação. Dos cortes nobres às sobremesas delicadas: em todas as receitas há sempre um momento em que o fogo é protagonista. É uma cozinha de memória, que resgata tradições e desperta afetos.
              </p>
              <h3 className="pt-2 text-sm font-semibold text-stone-200 sm:text-base">
                Lenha &amp; brasa · 100% no fogo
              </h3>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src="/imgs/pratoapresentacao.png"
                alt="Prato de apresentação feito no fogo"
                className="h-72 w-full rounded-[30px] object-cover sm:h-96 lg:h-[450px]"
              />
            </div>
          </div>

          {/* Bloco 2: Nosso Chef */}
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row-reverse lg:gap-12">
            <div className="w-full space-y-4 text-left lg:w-1/2 lg:text-right">
              <h3 className="text-sm uppercase tracking-widest text-amber-400/90">Nosso Chef</h3>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Adriano Chef</h1>
              <p className="text-sm leading-relaxed text-stone-300 sm:text-base">
                Graduado em 2010 pela Escola de Alta Gastronomia de Florença, conquistou o Diplôme de Cuisine et Pâtisserie. Atuou em cozinhas de prestígio na Itália e na Espanha — Il Palagio, El Celler de Can Roca e Santceloni. Responsável pela concepção do projeto da cozinha e pela criação do menu da casa. Integra a técnica clássica europeia ao fogo artesanal da brasa, buscando transmitir emoção e afeto em cada prato.
              </p>
              <h3 className="pt-2 text-sm font-semibold text-stone-200 sm:text-base">
                Lenha &amp; brasa · 100% no fogo
              </h3>
            </div>

            <div className="w-full lg:w-1/2">
              <img
                src="/imgs/chef-cozinha.png"
                alt="Adriano Chef na cozinha"
                className="h-72 w-full rounded-[30px] object-cover sm:h-96 lg:h-[450px]"
              />
            </div>
          </div>

          {/* Bloco 3: Drinks & Alma */}
          <div className="relative flex min-h-[340px] w-full items-center justify-center overflow-hidden rounded-[15px] bg-[url('/imgs/imgheader.png')] bg-cover bg-center p-6 text-center sm:min-h-[440px] sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-4xl space-y-5">
              <h3 className="text-sm font-semibold tracking-wide text-stone-200 sm:text-xl">
                — Feito da alma, com amor, fogo e suor —
              </h3>
              <h2 className="text-xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
                “Os melhores drinks clássicos e autorais, a comida rústica na brasa e a boa e velha garrafa de vinho — feitos para colecionar momentos inesquecíveis.”
              </h2>
            </div>
          </div>

          {/* Bloco 4: Programação da Semana */}
          <section id="programacao" className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-widest text-stone-300">A semana no Restaurante</h3>
              <h1 className="text-3xl font-bold sm:text-4xl">Programação</h1>
            </div>

            <div className="relative overflow-hidden rounded-[10px] border border-white/10 bg-[url('/imgs/imgjazz1.png')] bg-cover bg-left p-6 sm:p-8">
              <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

              <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                <ul className="space-y-5 lg:col-span-7">
                  {PROGRAMACAO_DIAS.map((item) => (
                    <li key={item.dia} className="flex items-start gap-4 sm:items-center">
                      <span className="w-12 shrink-0 rounded bg-white/10 px-2 py-1 text-center text-sm font-bold text-amber-300 sm:text-base">
                        {item.dia}
                      </span>
                      <div>
                        <h2 className="text-base font-bold text-white sm:text-lg">
                          <strong>{item.titulo}</strong>
                        </h2>
                        <p className="text-xs text-stone-200 sm:text-sm">{item.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="space-y-5 rounded-xl border border-white/10 bg-black/45 p-5 backdrop-blur-sm lg:col-span-5">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-amber-300">MUSICA AO VIVO</h3>
                    <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Quarta &amp; Quinta</h1>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-base font-bold text-white">Quarta do Jazz</h2>
                    <p className="text-xs text-stone-200 sm:text-sm">
                      Paulinho Branco Convida · Rolha Livre (uma garrafa a cada duas pessoas).
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-base font-bold text-white">Quinta da Musica ao Vivo</h2>
                    <p className="text-xs text-stone-200 sm:text-sm">
                      Rolha Livre (uma garrafa a cada duas pessoas).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bloco 5: Agenda / Almoço no Restaurante */}
          <section className="relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[url('/imgs/imgfundomonday.png')] bg-cover bg-center opacity-35 blur-md"
            />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xs uppercase tracking-widest text-amber-300">
                  Uma Nova Experiência Para o Seu Dia
                </h3>
                <h1 className="text-2xl font-bold text-white sm:text-3xl">Almoço no Restaurante</h1>
                <p className="text-sm text-stone-200">
                  O mesmo fogo. A mesma alma.
                  <br />
                  Uma nova experiência para o seu dia.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-white">Segunda a Sexta</h2>
                  <h3 className="text-sm text-stone-200">12:00 às 14:30</h3>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Sábado e Domingo</h2>
                  <h3 className="text-sm text-stone-200">12:00 às 16:00</h3>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h2 className="text-lg font-bold text-white">Segunda a Sábado</h2>
                  <h3 className="text-sm text-stone-200">Self-Service - Kg</h3>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Domingo</h2>
                  <h3 className="text-sm text-stone-200">À La Carte</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Bloco 6: Galeria (Carrossel) */}
          <GalleryCarousel />

          {/* Bloco 7: Instrução de Reserva */}
          <section id="reservas" className="grid grid-cols-1 items-center gap-10 pt-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest text-amber-400/90">Reservas</h3>
                <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
                  Reserve sua
                  <br />
                  experiência
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
                  Garanta seu lugar à mesa e viva o Feu sem pressa. As reservas são feitas de forma simples, direto pelo WhatsApp — e quem reserva ganha um agrado da casa
                </p>
              </div>

              <div className="space-y-4">
                {PASSOS_RESERVA.map((passo) => (
                  <div key={passo.numero} className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-amber-400 sm:text-3xl">{passo.numero}</span>
                    <div>
                      <h2 className="text-base font-bold text-white sm:text-lg">{passo.titulo}</h2>
                      <p className="text-xs text-stone-300 sm:text-sm">{passo.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[15px] bg-[brown] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:bg-[blueviolet]"
                >
                  FAZER RESERVA PELO WHATSAAP
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src="/imgs/imgexperiencia.png"
                alt="Experiência gastronômica no restaurante"
                className="h-72 w-full rounded-[30px] object-cover sm:h-96 lg:h-[460px]"
              />
            </div>
          </section>

          {/* Bloco 8: Ver Cardápio */}
          <section
            id="cardapio"
            className="relative flex min-h-[340px] w-full flex-col items-center justify-center overflow-hidden rounded-[15px] bg-[url('/imgs/imgfundomonday.png')] bg-cover bg-center px-4 py-12 text-center sm:min-h-[400px] sm:px-8"
          >
            <div aria-hidden="true" className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 flex w-full flex-col items-center gap-3">
              <h3 className="text-xs uppercase tracking-widest text-stone-200 sm:text-sm">
                Ingredientes frescos, selecionados e sazonais
              </h3>
              <h1 className="text-4xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
                Conheça o
              </h1>
              <h1 className="text-4xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
                Cardápio
              </h1>
              <h4 className="mt-2 text-sm text-stone-200 sm:text-base">
                Da terra ao mar, tudo tocado pelo fogo.
              </h4>
              <button
                type="button"
                onClick={() => setAberto((prev) => !prev)}
                aria-expanded={aberto}
                className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-[15px] bg-[brown] px-7 py-3 text-base font-bold text-white transition duration-300 hover:scale-105 hover:bg-[blueviolet] sm:text-xl"
              >
                {aberto ? "FECHAR CARDÁPIO" : "VER CARDÁPIO"}
              </button>

              <CardapioViewer isOpen={aberto} onClose={() => setAberto(false)} />
            </div>
          </section>

          {/* Bloco 9: Contato & Mapa */}
          <section id="contato" className="grid grid-cols-1 items-start gap-10 pt-4 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-4">
              <div>
                <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl">Contato</h1>
                <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl">&amp;</h1>
                <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl">Reservas</h1>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">Endereço</h3>
                <h4 className="mt-2 text-sm text-white">R. Itupava, 1377 — Alto da XV Curitiba · PR</h4>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">Horários</h3>
                <h4 className="mt-2 text-sm leading-relaxed text-white">
                  Terça a Sexta · 19h - 00h
                  <br />
                  Sábado · 19h - 00h30
                  <br />
                  Domingo · 12h - 16h
                </h4>
                <h3 className="mt-2 text-sm text-stone-300">@redesocial.aqui</h3>
              </div>

              <div className="space-y-3">
                <h2 className="text-base font-bold text-white sm:text-lg">Faça sua Reserva pelo Whatsaap</h2>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[15px] bg-[brown] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:bg-[blueviolet] sm:text-base"
                >
                  FAÇA SUA RESERVA
                </a>
              </div>
            </div>

            <div className="space-y-2 lg:col-span-4 lg:pt-40">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-400">Almoço no Restaurante</h3>
              <h4 className="text-sm leading-relaxed text-white">
                Segunda a Sexta · 12h - 14h30
                <br />
                Sábado e Domingo · 12h - 16h
              </h4>
            </div>

            <div className="lg:col-span-4">
              <img
                src="/imgs/img-mapa.png"
                alt="Mapa de localização do restaurante"
                className="w-full rounded-[30px] object-cover transition duration-300 hover:scale-105"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}