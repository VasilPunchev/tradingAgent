"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const performanceData = [
  { day: "Mon", value: 124000 },
  { day: "Tue", value: 126800 },
  { day: "Wed", value: 125900 },
  { day: "Thu", value: 130400 },
  { day: "Fri", value: 132100 },
  { day: "Sat", value: 135600 },
  { day: "Sun", value: 138900 },
];

export function PerformanceChart() {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-300">
            Performance chart
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Weekly momentum
          </h2>
        </div>

        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          +8.2%
        </span>
      </div>

      <div className="h-72 rounded-2xl border border-white/10 bg-black/20 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="rgba(255,255,255,0.08)"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 12 }}
              tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
            />

            <Tooltip
              contentStyle={{
                background: "#0b1018",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
              labelStyle={{ color: "rgba(255,255,255,0.55)" }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, "Value"]}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#34d399"
              strokeWidth={3}
              fill="url(#performanceGradient)"
              dot={{ r: 4, fill: "#34d399", strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#22d3ee", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}