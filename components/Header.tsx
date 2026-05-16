export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05070c]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-emerald-300 shadow-xl shadow-emerald-500/10">
            TA
          </span>

          <div>
            <span className="block text-sm font-semibold tracking-tight text-white">
              TradingAgent AI
            </span>
            <span className="hidden text-xs text-white/35 sm:block">
              AI market research dashboard
            </span>
          </div>
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/45 md:flex">
            <a href="#dashboard" className="transition hover:text-white">
              Dashboard
            </a>
            <a href="#signals" className="transition hover:text-white">
              Signals
            </a>
            <a href="#risk" className="transition hover:text-white">
              Risk
            </a>
          </nav>

          <a
            href="#dashboard"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90 sm:px-5 sm:text-sm"
          >
            Open dashboard
          </a>
        </div>
      </div>
    </header>
  );
}