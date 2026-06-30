import { motion } from "framer-motion";

// Quiet economics texture: a lower coordinate plane with a supply & demand curve
// pair crossing center-right, faint grid and a few data points.
// Monochrome, ~5-6% opacity, 1px strokes, slow one-time draw-in. Fixed behind all content.
export default function GlobalBackground() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.25 },
        opacity: { duration: 0.6, delay: 0.4 + i * 0.25 },
      },
    }),
  };

  const gridX = [250, 370, 490, 610];
  const gridY = [200, 280, 360, 440];
  const dotsBase = [
    { x: 300, y: 256 },
    { x: 470, y: 302 },
    { x: 520, y: 362 },
  ];
  const dotsExtra = [
    { x: 360, y: 372 },
    { x: 560, y: 250 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 select-none">
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.05] sm:opacity-[0.06]"
        fill="none"
        stroke="#e2e8f0"
      >
        {/* faint grid */}
        <g strokeWidth="1" opacity="0.35">
          {gridX.map((x) => (
            <motion.line key={`v${x}`} x1={x} y1="160" x2={x} y2="470"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.15 }} />
          ))}
          {gridY.map((y) => (
            <motion.line key={`h${y}`} x1="130" y1={y} x2="700" y2={y}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.15 }} />
          ))}
        </g>

        {/* coordinate axes (lower portion) */}
        <g strokeWidth="1.25" opacity="0.7">
          <motion.line x1="130" y1="150" x2="130" y2="470"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} />
          <motion.line x1="130" y1="470" x2="700" y2="470"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} />
        </g>

        {/* demand curve (down) */}
        <motion.path d="M 150 200 C 300 250, 430 320, 690 440" strokeWidth="1.5"
          variants={draw} initial="hidden" animate="show" custom={0} />
        {/* supply curve (up) */}
        <motion.path d="M 150 450 C 320 400, 470 300, 690 190" strokeWidth="1.5"
          variants={draw} initial="hidden" animate="show" custom={1} />

        {/* data points */}
        <g fill="#e2e8f0" stroke="none">
          {dotsBase.map((d, i) => (
            <motion.circle key={i} cx={d.x} cy={d.y} r="4"
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.6 + i * 0.2, ease: "easeOut" }} />
          ))}
        </g>
        <g fill="#e2e8f0" stroke="none" className="hidden sm:block">
          {dotsExtra.map((d, i) => (
            <motion.circle key={i} cx={d.x} cy={d.y} r="4"
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3.2 + i * 0.2, ease: "easeOut" }} />
          ))}
        </g>
      </svg>
    </div>
  );
}
