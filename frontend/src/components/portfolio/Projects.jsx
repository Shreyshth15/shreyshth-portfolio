import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionShell, Reveal, Tag, Emph } from "./shared";
import { PROJECTS } from "../../data/portfolio";
import UbiSimulator from "./UbiSimulator";

const FUNNEL_STAGES = [
  { label: "Reach", width: 100 },
  { label: "Engagement", width: 62 },
  { label: "Retention", width: 34 },
];

const EngagementFunnel = () => (
  <div className="mt-7 rounded-xl border border-white/10 bg-black/30 p-6" data-testid="grammys-funnel">
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">Three-stage engagement funnel · drop-off points</p>
    <div className="mt-6 space-y-1.5">
      {FUNNEL_STAGES.map((s, i) => (
        <div key={s.label}>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: `${s.width}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-11 items-center justify-between rounded-md bg-blue-500/20 px-4"
            style={{ borderLeft: "3px solid rgba(59,130,246,0.8)" }}
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-200">{s.label}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.2 }}
            className="flex items-center gap-2 py-1.5 pl-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/80" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-rose-300/80">Drop-off {i + 1}</span>
          </motion.div>
        </div>
      ))}
    </div>
    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
      Illustrative funnel · three drop-off points surfaced in the analysis
    </p>
  </div>
);

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
        <p className="mt-2.5 text-sm leading-relaxed text-slate-300"><Emph>{b.v}</Emph></p>
      </div>
    ))}
  </div>
);

export default function Projects() {
  return (
    <SectionShell id="projects" number="04 / Projects" title={<>Selected <span className="font-serif italic text-blue-400">Analytical Projects</span></>} data-testid="projects-section" motif="normal">
      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <article
              data-testid={`project-${p.index}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.04] md:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-blue-500/30">{p.index}</span>
                <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{p.status}</span>
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

              {p.interactive === "ubi" && <UbiSimulator />}

              {p.interactive === "funnel" && <EngagementFunnel />}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="ubi-github-link"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-200 transition-colors duration-200 hover:border-blue-500/60 hover:text-blue-400"
                >
                  View code on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}

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
