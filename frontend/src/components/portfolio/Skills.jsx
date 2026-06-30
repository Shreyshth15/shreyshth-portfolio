import { SectionShell, Reveal, Tag } from "./shared";
import { SKILLS } from "../../data/portfolio";

export default function Skills() {
  return (
    <SectionShell id="skills" number="02 / Skills" title={<>What I <span className="font-serif italic text-blue-400">actually</span> know how to do</>} data-testid="skills-section">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.06} className="bg-[#050b1c]">
            <div className="flex h-full flex-col p-7 md:p-8" data-testid={`skill-group-${cat.title}`}>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-blue-400">{cat.key}</span>
                <h3 className="font-display text-xl font-medium text-slate-50">{cat.title}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <Tag key={it}>{it}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
