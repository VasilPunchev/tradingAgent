const navItems = [
  { label: "Overview", href: "#dashboard", active: true },
  { label: "Markets", href: "#markets", active: false },
  { label: "Signals", href: "#signals", active: false },
  { label: "Risk", href: "#risk", active: false },
  { label: "Assistant", href: "#assistant", active: false },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 border-r border-white/10 bg-[#05070c]/80 p-5 backdrop-blur-xl xl:block">
      <a href="#" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-bold text-emerald-300 shadow-xl shadow-emerald-500/10">
          TA
        </span>

        <div>
          <span className="block text-sm font-semibold tracking-tight text-white">
            TradingAgent AI
          </span>
          <span className="text-xs text-white/35">
            Research dashboard
          </span>
        </div>
      </a>

      <nav className="mt-10 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
              item.active
                ? "bg-white text-black"
                : "text-white/45 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <span>{item.label}</span>
            {item.active && (
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            )}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
          Market status
        </p>
        <p className="mt-2 text-sm font-semibold text-emerald-300">
          Research mode active
        </p>
        <p className="mt-3 text-xs leading-5 text-white/35">
          Educational dashboard. Not financial advice.
        </p>
      </div>
    </aside>
  );
}