import { motion, useReducedMotion } from "framer-motion";

// Per-section background motif. Monochrome slate, curves ~13%, equations ~9%.
// Draws once on scroll into view. Respects prefers-reduced-motion.
const MOTIFS = {
  yield: {
    paths: [
      { d: "M 120 620 L 120 160 M 120 620 L 1320 620", w: 1.2 },
      { d: "M 160 590 C 380 440, 640 350, 980 315 S 1260 300, 1310 297", w: 1.6 },
    ],
  },
  normal: {
    paths: [
      { d: "M 120 640 L 1320 640", w: 1.2 },
      { d: "M 160 636 C 460 636, 550 250, 740 250 S 1020 636, 1300 636", w: 1.6 },
      { d: "M 740 250 L 740 640", w: 1, dash: "2 7" },
    ],
  },
  growth: {
    paths: [
      { d: "M 140 640 L 140 160 M 140 640 L 1320 640", w: 1.2 },
      { d: "M 170 620 C 500 600, 800 540, 1000 420 C 1140 330, 1240 230, 1300 170", w: 1.6 },
    ],
  },
  axes: {
    paths: [{ d: "M 180 160 L 180 640 L 1280 640", w: 1.4 }],
    equation: { x: 560, y: 400, size: 34, t: "Q\u1D48 = Q\u02E2" },
  },
};

export default function SectionMotif({ type }) {
  const reduced = useReducedMotion();
  const motif = MOTIFS[type];
  if (!motif) return null;

  const draw = (i) =>
    reduced
      ? {}
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true, margin: "-60px" },
          transition: {
            pathLength: { duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.3 },
            opacity: { duration: 0.7, delay: 0.2 + i * 0.3 },
          },
        };

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[1] select-none overflow-hidden">
      <svg
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute left-0 top-1/2 h-[720px] w-full -translate-y-1/2"
        fill="none"
      >
        <g opacity="0.13" stroke="#cbd5e1">
          {motif.paths.map((p, i) => (
            <motion.path key={i} d={p.d} strokeWidth={p.w} strokeDasharray={p.dash} {...draw(i)} />
          ))}
        </g>
        {motif.equation && (
          <motion.text
            x={motif.equation.x}
            y={motif.equation.y}
            fontSize={motif.equation.size}
            fontFamily='"Fraunces", serif'
            fill="#cbd5e1"
            opacity="0.09"
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 0.09 },
                  viewport: { once: true },
                  transition: { duration: 1.3, delay: 0.8 },
                })}
          >
            {motif.equation.t}
          </motion.text>
        )}
      </svg>
    </div>
  );
}
