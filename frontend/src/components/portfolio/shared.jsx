import { motion } from "framer-motion";

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

export const SectionShell = ({ id, number, title, children, "data-testid": testId }) => (
  <section
    id={id}
    data-testid={testId}
    className="relative border-t border-white/10 px-6 py-24 md:px-12 md:py-32 lg:px-20"
  >
    <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-blue-400/80">
            {number}
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-slate-50 md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  </section>
);

export const Tag = ({ children }) => (
  <span className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-300">
    {children}
  </span>
);
