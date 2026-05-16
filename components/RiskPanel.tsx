export function RiskPanel() {
  return (
    <div
      id="risk"
      className="rounded-[1.75rem] border border-white/10 bg-[#0b1018]/90 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
    >
      <p className="text-sm font-medium text-violet-300">Risk engine</p>

      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
        Portfolio exposure
      </h2>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-white/45">Risk score</span>
          <span className="text-sm font-semibold text-white">62 / 100</span>
        </div>

        <div className="h-3 rounded-full bg-white/10">
          <div className="h-3 w-[62%] rounded-full bg-gradient-to-r from-emerald-400 via-yellow-300 to-orange-400" />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {[
          ["Volatility", "Medium"],
          ["Position size", "Balanced"],
          ["Sector exposure", "Tech-heavy"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
          >
            <p className="text-xs text-white/35">{label}</p>
            <p className="mt-2 text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs leading-5 text-white/35">
        Educational research dashboard. Not financial advice.
      </p>
    </div>
  );
}