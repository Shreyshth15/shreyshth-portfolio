import { motion, useReducedMotion } from "framer-motion";

// Site-wide fixed background on the dark navy base. Monochrome slate/indigo.
// Centerpiece: large supply & demand equilibrium with a dashed D' demand shift,
// dotted guides to P* and Q*, plus a faint coordinate grid and two typeset equations.
export default function GlobalBackground() {
  const reduced = useReducedMotion();

  const draw = (i = 0) =>
    reduced
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: {
            pathLength: { duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.4 },
            opacity: { duration: 0.8, delay: 0.3 + i * 0.4 },
          },
        };

  const fadeIn = (delay) =>
    reduced
      ? {}
      : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.4, delay } };

  const serif = '"Fraunces", serif';
  const slate = "#cbd5e1";
  const indigo = "#a5b4fc";

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden" data-testid="global-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_-8%,rgba(99,102,241,0.10),transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_108%,rgba(79,70,229,0.08),transparent_44%)]" />

      {/* faint coordinate grid */}
      <div
        className="absolute inset-0 opacity-[0.6] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203,213,225,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(203,213,225,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" fill="none">
        {/* ==== Supply & Demand equilibrium centerpiece, curves at ~14% ==== */}
        <g opacity="0.17" stroke={slate} strokeWidth="2">
          {/* axes */}
          <motion.path d="M 260 150 L 260 780 L 1300 780" strokeWidth="1.3" {...draw(0)} />
          {/* Supply curve S */}
          <motion.path d="M 340 770 C 560 720, 640 620, 720 500 C 800 380, 900 300, 1100 250" {...draw(1)} />
          {/* Demand curve D */}
          <motion.path d="M 340 230 C 560 280, 640 380, 720 500 C 800 620, 900 690, 1100 745" {...draw(2)} />
          {/* Shifted demand D' (dashed) */}
          <motion.path
            d="M 480 230 C 700 280, 780 380, 860 500 C 940 620, 1040 690, 1240 745"
            strokeDasharray="7 8"
            stroke={indigo}
            {...draw(3)}
          />
          {/* dotted guides to axes from equilibrium */}
          <motion.path d="M 720 500 L 260 500" strokeDasharray="2 7" strokeWidth="1.2" {...draw(3)} />
          <motion.path d="M 720 500 L 720 780" strokeDasharray="2 7" strokeWidth="1.2" {...draw(3)} />
          {/* shift arrow from D to D' */}
          <motion.path d="M 690 350 L 768 350 M 768 350 L 754 342 M 768 350 L 754 358" stroke={indigo} strokeWidth="1.4" {...fadeIn(2.6)} />
        </g>

        {/* equilibrium markers */}
        <g opacity="0.19">
          <motion.circle cx="720" cy="500" r="5" fill={slate} {...fadeIn(2.4)} />
          <motion.circle cx="795" cy="428" r="4.5" fill={indigo} {...fadeIn(2.8)} />
        </g>

        {/* curve labels */}
        <g opacity="0.18" fill={slate} fontFamily={serif} fontSize="30" fontStyle="italic">
          <motion.text x="1116" y="242" {...fadeIn(2.2)}>S</motion.text>
          <motion.text x="1116" y="772" {...fadeIn(2.2)}>D</motion.text>
          <motion.text x="1252" y="772" fill={indigo} {...fadeIn(2.8)}>D&#8242;</motion.text>
          <motion.text x="204" y="510" fontSize="26" {...fadeIn(2.5)}>P*</motion.text>
          <motion.text x="706" y="818" fontSize="26" {...fadeIn(2.5)}>Q*</motion.text>
        </g>

        {/* typeset equations at ~9% (max two here, section motifs add at most one more) */}
        <g opacity="0.12" fill={slate} fontFamily={serif}>
          <motion.text x="90" y="220" fontSize="30" transform="rotate(-3 90 220)" {...fadeIn(1.6)}>
            P = &#931; CF&#8340; / (1+r)&#7511;
          </motion.text>
          <motion.text x="1010" y="180" fontSize="27" transform="rotate(2 1010 180)" {...fadeIn(1.9)}>
            &#963;&#178; = &#931;(x&#8722;&#956;)&#178; / n
          </motion.text>
        </g>
      </svg>

      {/* readability vignette behind text columns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(3,7,18,0.55))]" />
    </div>
  );
}
