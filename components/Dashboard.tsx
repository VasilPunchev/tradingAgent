import { AIAssistant } from "./AIAssistant";
import { MarketOverview } from "./MarketOverview";
import { RiskPanel } from "./RiskPanel";
import { SignalCards } from "./SignalCards";
import { Watchlist } from "./Watchlist";
import { PerformanceChart } from "./PerformanceChart";

export function Dashboard() {
    return (
        <section id="dashboard" className="relative z-10 px-5 pt-28 pb-20 xl:pl-80 xl:pr-8 xl:pt-8">
            <div className="mx-auto max-w-[1500px]">
                <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4 shadow-xl shadow-black/20 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                            Trading workspace
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            Market research overview
                        </h1>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-white/35 sm:w-80">
                            Search markets, signals, or risk notes...
                        </div>

                        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-300">
                            Market open
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/55 backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
                        AI-powered trading research dashboard
                    </div>

                    <h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-white md:text-7xl">
                        Track signals.
                        <br />
                        <span className="bg-gradient-to-r from-cyan-200 via-emerald-200 to-white bg-clip-text text-transparent">
                            Manage risk with AI.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
                        TradingAgent AI helps traders review market signals, sentiment,
                        watchlists and portfolio risk in one clean research workspace.
                    </p>
                </div>

                <MarketOverview />

                <div id="markets" className="mt-4 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                    <Watchlist />
                    <RiskPanel />
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                    <SignalCards />

                    <div className="space-y-4">
                        <PerformanceChart />

                        <div id="assistant">
                            <AIAssistant />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}