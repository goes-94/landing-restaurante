const WHATSAPP_URL = "https://wa.me/5541984205083";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#090909] px-4 py-10 font-mono text-stone-300 sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
        <div>
          <p className="text-xl font-bold tracking-wider text-[brown]">Sua Logo</p>
          <p className="mt-1 text-xs text-stone-400 sm:text-sm">
            R. Itupava, 1377 — Alto da XV, Curitiba · PR
          </p>
        </div>

        <ul className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-wider text-stone-200 sm:text-sm">
          <li>
            <a href="#sobre" className="transition hover:text-[brown]">
              Sobre
            </a>
          </li>
          <li>
            <a href="#programacao" className="transition hover:text-[brown]">
              Programação
            </a>
          </li>
          <li>
            <a href="#reservas" className="transition hover:text-[brown]">
              Reservas
            </a>
          </li>
          <li>
            <a href="#cardapio" className="transition hover:text-[brown]">
              Cardápio
            </a>
          </li>
          <li>
            <a href="#contato" className="transition hover:text-[brown]">
              Contato
            </a>
          </li>
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[10px] bg-[brown] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[blueviolet] sm:text-sm"
        >
          Reservar no WhatsApp
        </a>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-stone-500 sm:flex-row">
        <p>© 2026 Todos os direitos reservados.</p>
        <p>@redesocial.aqui</p>
      </div>
    </footer>
  );
}