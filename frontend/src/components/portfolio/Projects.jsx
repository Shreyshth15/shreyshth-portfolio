import { motion } from "framer-motion";
import { SectionShell, Reveal, Tag } from "./shared";
import { PROJECTS } from "../../data/portfolio";

const Chart = ({ chart }) => (
  <div className="mt-7 rounded-xl border border-white/10 bg-black/30 p-6">
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">{chart.title}</p>
    <div className="mt-6 space-y-5">
      {chart.bars.map((b, i) => (
        <div key={b.label}>
          <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
            <span className="text-slate-300">{b.label}</span>
            <span className="text-blue-400">{b.value}h</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(b.value / chart.max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full rounded-full ${i === 0 ? "bg-slate-500" : "bg-blue-500"}`}
            />
          </div>
        </div>
      ))}
    </div>
    <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">{chart.footnote}</p>
  </div>
);

const Breakdown = ({ breakdown }) => (
  <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
    {[
      { k: "Problem", v: breakdown.problem },
      { k: "Approach", v: breakdown.approach },
      { k: "Result", v: breakdown.result },
    ].map((b) => (
      <div key={b.k} className="bg-[#070d1f] p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400">{b.k}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{b.v}</p>
      </div>
    ))}
  </div>
);

export default function Projects() {
  return (
    <SectionShell id="projects" number="04 / Projects" title={<>Things I've built, broken, and <span className="font-serif italic text-blue-400">kept building</span></>} data-testid="projects-section">
      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article
              data-testid={`project-${p.index}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.04] md:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-blue-500/30">{p.index}</span>
                <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-400">{p.status}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium text-slate-50 md:text-3xl">{p.title}</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
                {p.meta.map((m) => (
                  <div key={m.label}>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{m.label}</span>
                    <p className="mt-1 text-sm text-slate-200">{m.value}</p>
                  </div>
                ))}
              </div>

              {p.breakdown ? <Breakdown breakdown={p.breakdown} /> : (
                <div className="mt-5 space-y-4">
                  {p.paragraphs.map((para, j) => (
                    <p key={j} className="text-base leading-relaxed text-slate-300">{para}</p>
                  ))}
                </div>
              )}

              {p.chart && <Chart chart={p.chart} />}

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Tools</span>
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
