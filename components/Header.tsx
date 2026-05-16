export function Header() {
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-[#05070c]/80 backdrop-blur-xl xl:hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-emerald-300">
            TA
          </span>

          <div>
            <span className="block text-sm font-semibold text-white">
              TradingAgent AI
            </span>
            <span className="hidden text-xs text-white/35 sm:block">
              Research dashboard
            </span>
          </div>
        </a>

        <a
          href="#signals"
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
        >
          Signals
        </a>
      </div>
    </header>
  );
}