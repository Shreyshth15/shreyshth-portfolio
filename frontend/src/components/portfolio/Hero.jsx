import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Mail, Linkedin, MessageSquare } from "lucide-react";
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

export default function Hero() {
  const time = useClock(PROFILE.timezone);
  const word = (w) => w.split("");

  return (
    <header
      id="top"
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pb-12 pt-6 md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-[380px] w-[380px] rounded-full bg-indigo-700/10 blur-[120px]" />

      {/* top status bar */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
        <span className="text-slate-300">Portfolio · Finance &amp; Quant · Est. {PROFILE.est}</span>
        <div className="flex items-center gap-4 sm:gap-5">
          <span data-testid="hero-clock" className="tabular-nums text-slate-300">{time}</span>
          <span>{PROFILE.location}</span>
          <span className="flex items-center gap-2 text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available
          </span>
        </div>
      </div>

      {/* name */}
      <div className="relative flex flex-1 flex-col justify-center py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-blue-400"
        >
          <span className="h-px w-8 bg-blue-500/60" />
          {PROFILE.greeting}
        </motion.div>
        <div className="overflow-hidden">
          <h1 className="font-display text-[17vw] font-extrabold uppercase leading-[0.82] tracking-tighter text-slate-50 sm:text-[15vw] md:text-[12vw] lg:text-[10.5vw]">
            <span className="block">
              {word(PROFILE.firstName).map((c, i) => (
                <motion.span key={i} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.15 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
                  {c}
                </motion.span>
              ))}
            </span>
            <span className="block text-slate-500">
              {word(PROFILE.lastName).map((c, i) => (
                <motion.span key={i} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.45 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="inline-block">
                  {c}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500"
        >
          Shreyshth · <span className="text-slate-300">/{PROFILE.pronunciation}/</span> · {PROFILE.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-slate-300 md:text-xl"
        >
          {PROFILE.shortBio}
        </motion.p>

        {/* action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-view-resume"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-950 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
          >
            <FileText className="h-4 w-4" /> View Resume
          </a>
          <a
            href="#contact"
            data-testid="hero-contact-me"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] text-slate-100 transition-colors duration-300 hover:border-blue-500/60 hover:text-white"
          >
            <MessageSquare className="h-4 w-4" /> Contact Me
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-linkedin"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-blue-500/60 hover:text-blue-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            data-testid="hero-email"
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-blue-500/60 hover:text-blue-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* bottom grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="relative grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-12"
      >
        <Col heading="Built">{PROFILE.built.join(" · ")}</Col>
        <Col heading="Worked with">{PROFILE.workedWith.join(" · ")}</Col>
        <Col heading="Open to">{PROFILE.openTo.join(" · ")}</Col>
      </motion.div>

      <div className="relative mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        Scroll
      </div>
    </header>
  );
}
