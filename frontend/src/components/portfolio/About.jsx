import { SectionShell, Reveal, Emph } from "./shared";
import { ABOUT, PHOTOS } from "../../data/portfolio";

export default function About() {
  return (
    <SectionShell id="about" number="01 / About" title={<>A short biography, told <span className="font-serif italic text-blue-400">honestly</span>.</>} data-testid="about-section">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 border-b border-white/10 pb-10 sm:grid-cols-4">
        {ABOUT.facts.map((f) => (
          <Reveal key={f.label} className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">{f.label}</p>
            <p className="mt-2 text-sm font-medium text-slate-100">{f.value}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {ABOUT.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="text-[15px] leading-[1.75] text-slate-300 sm:text-base md:text-[17px]"><Emph>{p}</Emph></p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src={PHOTOS.portraitSecondary}
            alt="Shreyshth Sharma at Indiana University"
            loading="lazy"
            className="h-[420px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] md:h-[560px]"
            data-testid="about-portrait"
          />
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {ABOUT.stats.map((s) => (
          <div key={s.label} className="bg-[#050b1c] p-6 md:p-8" data-testid={`stat-${s.label}`}>
            <p className="font-display text-3xl font-bold text-slate-50 md:text-5xl">{s.value}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">{s.label}</p>
            {s.sub && <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500">{s.sub}</p>}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
