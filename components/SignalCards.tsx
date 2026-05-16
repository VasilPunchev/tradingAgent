import { aiSignals } from "@/data/market";

export function SignalCards() {
  return (
    <div
      id="signals"
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="mb-5">
        <p className="text-sm font-medium text-emerald-300">AI signals</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
          Research alerts
        </h2>
      </div>

      <div className="space-y-4">
        {aiSignals.map((signal) => (
          <div
            key={`${signal.asset}-${signal.type}`}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  {signal.asset}
                </p>
                <p className="text-xs text-white/35">{signal.type}</p>
              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                {signal.confidence}
              </span>
            </div>

            <p className="text-sm leading-6 text-white/55">{signal.summary}</p>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs text-white/35">Risk level</span>
              <span className="text-xs font-semibold text-white/65">
                {signal.risk}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}