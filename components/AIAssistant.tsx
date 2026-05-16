export function AIAssistant() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300 text-sm font-bold text-black">
          AI
        </div>

        <div>
          <p className="text-sm font-semibold text-white">
            Market assistant
          </p>
          <p className="text-xs text-white/35">Research mode active</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="rounded-2xl rounded-tl-sm bg-white/[0.07] p-4 text-sm leading-6 text-white/65">
          NVDA and AMD show stronger momentum than the broader tech basket this
          week.
        </div>

        <div className="ml-8 rounded-2xl rounded-tr-sm bg-white p-4 text-sm leading-6 text-black">
          Which signal has the best risk/reward?
        </div>

        <div className="rounded-2xl rounded-tl-sm bg-white/[0.07] p-4 text-sm leading-6 text-white/65">
          Current model favors AAPL breakout watch due to lower volatility and
          cleaner risk profile.
        </div>
      </div>
    </div>
  );
}