import { SectionShell, Reveal } from "./shared";
import { INTERESTS } from "../../data/portfolio";

export default function Interests() {
  return (
    <SectionShell id="interests" number="06 / Interests" title={<>When I'm <span className="font-serif italic text-blue-400">not</span> in the spreadsheet.</>} data-testid="interests-section">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {INTERESTS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06} className="bg-[#050b1c]">
            <div className="flex h-full flex-col p-7 md:p-8" data-testid={`interest-${it.title}`}>
              <span className="font-display text-3xl text-blue-400">{it.symbol}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-slate-50">{it.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">{it.text}</p>
              {it.note && <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">{it.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
