import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PROFILE } from "../../data/portfolio";

const useClock = (timezone) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const t = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: timezone,
      });
      setTime(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timezone]);
  return time;
};

const Col = ({ heading, children }) => (
  <div>
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">{heading}</p>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{children}</p>
  </div>
);

export default function Hero({ onDownloadCV }) {
  const time = useClock(PROFILE.timezone);
  const word = (w) => w.split("");

  return (
    <header
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col justify-between px-6 pb-12 pt-6 md:px-12 lg:px-20"
    >
      {/* top status bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
        <span className="text-slate-300">Portfolio · Finance &amp; Quant · Est. {PROFILE.est}</span>
        <div className="flex items-center gap-5">
          <span data-testid="hero-clock" className="tabular-nums text-slate-300">{time}</span>
          <span>{PROFILE.location}</span>
          <span className="flex items-center gap-2 text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available
          </span>
        </div>
      </div>

      {/* name */}
      <div className="flex flex-1 flex-col justify-center py-16">
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[18vw] font-extrabold uppercase leading-[0.82] tracking-tighter text-slate-50 md:text-[12vw] lg:text-[10.5vw]"
          >
            <span className="block">
              {word(PROFILE.firstName).map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
            <span className="block text-slate-500">
              {word(PROFILE.lastName).map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.45 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-slate-300 md:text-xl"
        >
          {PROFILE.shortBio}
        </motion.p>
      </div>

      {/* bottom grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center lg:gap-12"
      >
        <Col heading="Built">{PROFILE.built.join(" · ")}</Col>
        <Col heading="Worked with">{PROFILE.workedWith.join(" · ")}</Col>
        <Col heading="Open to">{PROFILE.openTo.join(" · ")}</Col>
        <button
          data-testid="hero-download-cv"
          onClick={onDownloadCV}
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-50 px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-950 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
        >
          Download CV
          <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      </motion.div>

      <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll
      </div>
    </header>
  );
}
