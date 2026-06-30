import { motion } from "framer-motion";

// Hero-only ambient texture: faint supply & demand curves with a light grid.
// Monochrome, ~6% opacity, 1px strokes, slow one-time draw-in. Hidden on mobile.
export default function HeroBackground() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.15 },
        opacity: { duration: 0.6, delay: 0.3 + i * 0.15 },
      },
    }),
  };

  const grid = [160, 320, 480, 640];
  const gridY = [120, 240, 360, 480];
  const dots = [
    { x: 400, y: 300 },
    { x: 250, y: 205 },
    { x: 560, y: 200 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden select-none sm:block"
    >
      {/* contrast guard behind the headline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_45%,rgba(3,7,18,0.55),transparent_60%)]" />

      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        fill="none"
        stroke="#e2e8f0"
      >
        {/* faint grid */}
        <g strokeWidth="1" opacity="0.4">
          {grid.map((x) => (
            <motion.line
              key={`v${x}`}
              x1={x} y1="80" x2={x} y2="520"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1 }}
            />
          ))}
          {gridY.map((y) => (
            <motion.line
              key={`h${y}`}
              x1="80" y1={y} x2="720" y2={y}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1 }}
            />
          ))}
        </g>

        {/* demand curve (downward) */}
        <motion.path
          d="M 80 120 C 250 200, 450 380, 720 480"
          strokeWidth="1.5"
          variants={draw}
          initial="hidden"
          animate="show"
          custom={0}
        />
        {/* supply curve (upward) */}
        <motion.path
          d="M 80 500 C 280 420, 480 240, 720 120"
          strokeWidth="1.5"
          variants={draw}
          initial="hidden"
          animate="show"
          custom={1}
        />

        {/* data points */}
        <g fill="#e2e8f0" stroke="none">
          {dots.map((d, i) => (
            <motion.circle
              key={i}
              cx={d.x} cy={d.y} r="4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.6 + i * 0.2, ease: "easeOut" }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
