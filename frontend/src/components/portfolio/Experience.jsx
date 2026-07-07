import { SectionShell, Reveal, Tag } from "./shared";
import { EXPERIENCE } from "../../data/portfolio";

export default function Experience() {
  return (
    <SectionShell id="experience" number="03 / Experience" title={<>Where I've <span className="font-serif italic text-blue-400">shown up</span></>} data-testid="experience-section" motif="yield">
      <div className="relative border-l border-white/12 pl-8 md:pl-10">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.role} delay={i * 0.05} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-[#050b1c] md:-left-[49px]" />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{job.period}</p>
            <h3 className="mt-3 font-display text-2xl font-medium text-slate-50">{job.role}</h3>
            <p className="mt-1 text-sm text-blue-300/90">{job.company}</p>
            <div className="mt-5 space-y-4">
              {job.paragraphs.map((p, j) => (
                <p key={j} className="text-base leading-relaxed text-slate-300">{p}</p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
