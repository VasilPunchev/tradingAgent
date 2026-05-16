import { marketOverview } from "@/data/market";

export function MarketOverview() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {marketOverview.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 backdrop-blur-xl"
        >
          <p className="text-sm text-white/40">{item.label}</p>

          <div className="mt-4 flex items-end justify-between gap-4">
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              {item.value}
            </h3>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.trend === "up"
                  ? "bg-emerald-400/10 text-emerald-300"
                  : "bg-white/10 text-white/45"
              }`}
            >
              {item.change}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}