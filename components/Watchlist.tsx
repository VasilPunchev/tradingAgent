import { watchlist } from "@/data/market";

export function Watchlist() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-300">Watchlist</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Market focus
          </h2>
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/45">
          Live mock data
        </span>
      </div>

      <div className="space-y-3">
        {watchlist.map((stock) => (
          <div
            key={stock.symbol}
            className="grid gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 sm:grid-cols-[0.8fr_1.2fr_0.8fr_0.8fr] sm:items-center sm:py-3"
          >
            <div>
              <p className="text-sm font-semibold text-white">{stock.symbol}</p>
              <p className="text-xs text-white/35">{stock.name}</p>
            </div>

            <p className="text-sm font-medium text-white/75">{stock.price}</p>

            <p
              className={`text-sm font-semibold ${
                stock.change.startsWith("+")
                  ? "text-emerald-300"
                  : "text-red-300"
              }`}
            >
              {stock.change}
            </p>

            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-white/55">
              {stock.sentiment}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}