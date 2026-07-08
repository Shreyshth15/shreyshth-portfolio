import { motion, useReducedMotion } from "framer-motion";
import { SectionShell, Reveal, Emph } from "./shared";
import { JOURNEY, JOURNEY_CLOSING, PHOTOS } from "../../data/portfolio";

export default function Education() {
  const reduced = useReducedMotion();

  return (
    <SectionShell id="education" number="05 / Education" title={<>A journey of <span className="font-serif italic text-blue-400">12,000 km</span>.</>} data-testid="education-section" motif="growth">
      <div className="relative pl-12 md:pl-20" data-testid="journey-timeline">
        {/* connecting line, draws once on scroll */}
        <div className="absolute bottom-6 left-[15px] top-2 w-px bg-white/8 md:left-[23px]">
          <motion.div
            className="h-full w-full origin-top bg-gradient-to-b from-blue-500/70 via-blue-500/40 to-indigo-500/20"
            initial={reduced ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="space-y-16 md:space-y-20">
          {JOURNEY.map((stop, i) => (
            <Reveal key={stop.num} delay={i * 0.08} className="relative">
              {/* numbered node */}
              <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/40 bg-[#050b1c] font-display text-xs font-bold text-blue-400 ring-4 ring-[#030712] md:-left-20 md:h-12 md:w-12 md:text-base">
                {stop.num}
              </span>
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_28px_rgba(59,130,246,0.10)] sm:p-7 md:p-9"
                data-testid={`journey-stop-${stop.num}`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] leading-relaxed text-blue-400 sm:text-[11px] sm:tracking-[0.2em]">
                  {[stop.tag, stop.place, stop.period].filter((v, idx, a) => v && a.indexOf(v) === idx).join(" · ")}
                </p>
                <p className="mt-3 text-[15px] leading-[1.75] text-slate-300 sm:mt-4 md:text-[17px]"><Emph>{stop.text}</Emph></p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-10">
        <p data-testid="journey-closing" className="pl-12 font-mono text-[10px] uppercase tracking-[0.18em] leading-relaxed text-slate-500 sm:text-[11px] sm:tracking-[0.22em] md:pl-20">
          {JOURNEY_CLOSING}
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <img
            src={PHOTOS.graduation}
            alt="Shreyshth Sharma graduating, B.S. Economics & Quantitative Methods"
            loading="lazy"
            className="h-[260px] w-full object-cover object-center md:h-[360px]"
            data-testid="education-grad-photo"
          />
        </div>
      </Reveal>
    </SectionShell>
  );
}
