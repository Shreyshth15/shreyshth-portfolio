import { useEffect, useRef, useState } from "react";
import { SectionShell, Reveal } from "./shared";
import { ABOUT, PHOTOS } from "../../data/portfolio";

const Counter = ({ value }) => {
  const numeric = parseInt(value, 10);
  const [display, setDisplay] = useState(isNaN(numeric) ? value : "0");
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (isNaN(numeric)) return;
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true;
        let cur = 0;
        const step = Math.max(1, Math.ceil(numeric / 30));
        const id = setInterval(() => {
          cur += step;
          if (cur >= numeric) { cur = numeric; clearInterval(id); }
          setDisplay(String(cur));
        }, 30);
      }
    }, { threshold: 0.5 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, [numeric]);

  return <span ref={ref}>{display}</span>;
};

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
            <p className="text-base leading-relaxed text-slate-300 md:text-[17px]">{p}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-white/10 sm:col-span-3">
            <img
              src={PHOTOS.portraitPrimary}
              alt="Shreyshth Sharma at Indiana University"
              loading="lazy"
              className="h-[360px] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03] md:h-[460px]"
              data-testid="about-portrait"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 sm:col-span-2">
            <img
              src={PHOTOS.portraitSecondary}
              alt="Shreyshth Sharma, IU College of Arts and Sciences"
              loading="lazy"
              className="h-[360px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] md:h-[460px]"
            />
          </div>
        </div>
        <p className="mt-6 border-l-2 border-blue-500 pl-5 font-serif text-xl italic text-slate-200 md:text-2xl">
          "{ABOUT.quote}"
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
        {ABOUT.stats.map((s) => (
          <div key={s.label} className="bg-[#050b1c] p-6 md:p-8" data-testid={`stat-${s.label}`}>
            <p className="font-display text-4xl font-bold text-slate-50 md:text-5xl">
              <Counter value={s.value} />
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
