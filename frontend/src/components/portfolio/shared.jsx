import { motion } from "framer-motion";
import SectionMotif from "./SectionMotif";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionShell = ({ id, number, title, children, motif, "data-testid": testId }) => (
  <section
    id={id}
    data-testid={testId}
    className="relative border-t border-white/10 px-6 py-32 md:px-12 md:py-48 lg:px-20"
  >
    {motif && <SectionMotif type={motif} />}
    <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-blue-400/80">
            {number}
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-slate-50 md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  </section>
);

export const Tag = ({ children }) => (
  <span className="rounded-full border border-white/15 bg-transparent px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-400 transition-colors hover:border-blue-500/60 hover:text-blue-400">
    {children}
  </span>
);

const KEY_TERMS = [
  "Indiana University's Kelley School of Business",
  "Indiana University Bloomington",
  "Economics and Quantitative Methods",
  "Economics & Quantitative Methods",
  "College of Arts and Sciences",
  "London School of Economics",
  "Kelley School of Business",
  "The Global Tech Experience",
  "The Recording Academy",
  "Indiana University",
  "Executive Dean's List",
  "Universal Basic Income",
  "CFA curriculum",
  "Marquee Equity",
  "STEM-designated",
  "Finance Chair",
  "nTalents.ai",
  "New Delhi",
  "12,000 km",
  "Tableau",
  "Python",
  "Kelley",
  "Intel",
  "SQL",
  "DLF",
];

const TERM_REGEX = new RegExp(
  `(${KEY_TERMS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g"
);

export const Emph = ({ children }) => (
  <>
    {String(children)
      .split(TERM_REGEX)
      .map((part, i) =>
        KEY_TERMS.includes(part) ? (
          <strong key={i} className="font-semibold text-slate-100">
            {part}
          </strong>
        ) : (
          part
        )
      )}
  </>
);
