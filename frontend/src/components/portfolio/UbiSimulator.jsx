import { useState, useMemo } from "react";
import { ComposedChart, Area, Line, XAxis, YAxis, ReferenceDot, ResponsiveContainer } from "recharts";

export default function UbiSimulator() {
  const [e, setE] = useState(0.8);

  const data = useMemo(() => {
    const arr = [];
    for (let x = 0; x <= 1.5001; x += 0.1) {
      const xr = Math.round(x * 10) / 10;
      arr.push({ e: xr, band: [xr * 6, xr * 10], central: xr * 8 });
    }
    return arr;
  }, []);

  const central = e * 8;
  const low = e * 6;
  const high = e * 10;
  const readout =
    e < 0.05
      ? "At zero elasticity, UBI is modeled to leave labor supply essentially unchanged."
      : `At an elasticity of ${e.toFixed(2)}, UBI is modeled to reduce labor supply by ~${central.toFixed(1)}% (range ${low.toFixed(1)}%–${high.toFixed(1)}%).`;

  return (
    <div className="mt-7 rounded-xl border border-white/10 bg-black/30 p-6" data-testid="ubi-simulator">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Interactive · labor-supply sensitivity
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-400">
          elasticity = {e.toFixed(2)}
        </p>
      </div>

      <div className="mt-5 h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%" minHeight={200}>
          <ComposedChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="ubiBand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.06} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="e"
              type="number"
              domain={[0, 1.5]}
              ticks={[0, 0.5, 1, 1.5]}
              tick={{ fontSize: 11, fill: "#64748b", fontFamily: "monospace" }}
              tickLine={false}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#64748b", fontFamily: "monospace" }}
              tickLine={false}
              axisLine={false}
              width={40}
              tickFormatter={(v) => `${v}%`}
            />
            <Area dataKey="band" stroke="none" fill="url(#ubiBand)" isAnimationActive={false} />
            <Line dataKey="central" stroke="#3b82f6" strokeWidth={2} dot={false} isAnimationActive={false} />
            <ReferenceDot x={e} y={central} r={5} fill="#3b82f6" stroke="#e2e8f0" strokeWidth={2} isFront />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <input
        type="range"
        min="0"
        max="1.5"
        step="0.05"
        value={e}
        onChange={(ev) => setE(parseFloat(ev.target.value))}
        data-testid="ubi-elasticity-slider"
        aria-label="Labor-supply elasticity"
        className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-blue-500"
      />
      <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
        <span>0.0 · rigid</span>
        <span>1.5 · responsive</span>
      </div>

      <p data-testid="ubi-readout" className="mt-4 border-l-2 border-blue-500 pl-4 text-sm leading-relaxed text-slate-200">
        {readout}
      </p>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
        Illustrative model · shaded area = sensitivity band across assumptions
      </p>
    </div>
  );
}
