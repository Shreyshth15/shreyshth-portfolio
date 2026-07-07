import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PROFILE, SECTIONS } from "../../data/portfolio";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > window.innerHeight * 0.7);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] origin-left bg-blue-500"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

      <AnimatePresence>
        {visible && (
          <motion.nav
            data-testid="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
              <a
                href="#top"
                data-testid="nav-logo"
                className="font-display text-lg font-bold tracking-tight text-slate-50"
              >
                Shreyshth<span className="text-blue-500">.</span>
              </a>

              <div className="hidden items-center gap-7 lg:flex">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    data-testid={`nav-link-${s.id}`}
                    className={`relative font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                      active === s.id ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {s.label}
                    {active === s.id && (
                      <span className="absolute -bottom-1.5 left-0 h-px w-full bg-blue-500" />
                    )}
                  </a>
                ))}
                <a
                  href={PROFILE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="nav-resume"
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-950 transition-colors hover:bg-blue-500 hover:text-white"
                >
                  Resume <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <button
                onClick={() => setOpen((o) => !o)}
                data-testid="nav-hamburger"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-slate-200 lg:hidden"
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-white/10 lg:hidden"
                  data-testid="nav-mobile-menu"
                >
                  <div className="flex flex-col gap-1 px-6 py-4">
                    {SECTIONS.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={close}
                        data-testid={`nav-mobile-link-${s.id}`}
                        className="border-b border-white/5 py-3 font-display text-lg text-slate-200"
                      >
                        {s.label}
                      </a>
                    ))}
                    <a
                      href={PROFILE.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={close}
                      data-testid="nav-mobile-resume"
                      className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-500 px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white"
                    >
                      View Resume <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
