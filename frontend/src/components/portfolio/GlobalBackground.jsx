import { motion } from "framer-motion";

// Site-wide artistic quant/economics background: faint coordinate dot-grid,
// a yield curve + normal distribution that draw in once, and a few typeset
// equations. Monochrome, ~4-6% opacity, readability vignette. Text-safe.
export default function GlobalBackground() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.35 },
        opacity: { duration: 0.9, delay: 0.4 + i * 0.35 },
      },
    }),
  };

  const fadeIn = (delay) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.6, delay },
  });

  const serif = '"Fraunces", serif';

  const equations = [
    { x: 90, y: 250, size: 30, t: "P = Σ CF\u209C / (1+r)\u1D57", rot: -3 },
    { x: 980, y: 470, size: 28, t: "σ² = Σ(x−μ)² / n", rot: 2 },
    { x: 640, y: 810, size: 26, t: "Y = β\u2080 + β\u2081X + ε", rot: 0 },
  ];

  const dots = [
    { x: 340, y: 505 }, { x: 660, y: 470 }, { x: 980, y: 452 }, { x: 1250, y: 446 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden">
      {/* soft layered gradient glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_-8%,rgba(37,99,235,0.10),transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_108%,rgba(79,70,229,0.09),transparent_44%)]" />

      {/* coordinate dot-grid, faded toward edges */}
      <div
        className="absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_82%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(226,232,240,0.09) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* curves + equations */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        fill="none"
        stroke="#e2e8f0"
      >
        {/* yield curve — rising then flattening */}
        <motion.path d="M 100 640 C 320 520, 620 470, 1000 452 S 1350 442, 1480 440"
          strokeWidth="1.5" variants={draw} initial="hidden" animate="show" custom={0} />
        {/* normal distribution */}
        <motion.path d="M 120 700 C 430 700, 520 320, 760 320 S 1090 700, 1400 700"
          strokeWidth="1.5" variants={draw} initial="hidden" animate="show" custom={1} />

        {equations.map((e, i) => (
          <motion.text
            key={i}
            x={e.x} y={e.y}
            fontSize={e.size}
            fontFamily={serif}
            fill="#e2e8f0"
            stroke="none"
            transform={`rotate(${e.rot} ${e.x} ${e.y})`}
            {...fadeIn(1.2 + i * 0.2)}
          >
            {e.t}
          </motion.text>
        ))}

        <g fill="#e2e8f0" stroke="none">
          {dots.map((d, i) => (
            <motion.circle key={i} cx={d.x} cy={d.y} r="5"
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3 + i * 0.2, ease: "easeOut" }} />
          ))}
        </g>
      </svg>

      {/* readability vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(3,7,18,0.5))]" />
    </div>
  );
}
