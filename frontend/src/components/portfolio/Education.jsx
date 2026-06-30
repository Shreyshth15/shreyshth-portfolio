import { SectionShell, Reveal } from "./shared";
import { EDUCATION, PHOTOS } from "../../data/portfolio";

export default function Education() {
  return (
    <SectionShell id="education" number="05 / Education" title={<>A journey of <span className="font-serif italic text-blue-400">12,000 km</span>.</>} data-testid="education-section">
      <div className="space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.place} delay={i * 0.06} className="bg-[#050b1c]">
            <div className="grid grid-cols-1 gap-4 p-7 md:grid-cols-[150px_1fr] md:p-9">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-400">{e.tag}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium text-slate-50">{e.place}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-slate-500">{e.region}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{e.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src={PHOTOS.graduation}
            alt="Shreyshth Sharma graduating, B.S. Economics & Quantitative Methods"
            loading="lazy"
            className="h-[260px] w-full object-cover object-center md:h-[360px]"
            data-testid="education-grad-photo"
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">Distance travelled</p>
          <p className="font-serif text-lg italic text-slate-200">From one chapter to the next.</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
