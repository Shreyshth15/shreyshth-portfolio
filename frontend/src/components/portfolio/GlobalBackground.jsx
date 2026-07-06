import { motion } from "framer-motion";

// Premium, quiet quant/economics texture applied site-wide behind all content.
// Layers: soft gradient glow + masked coordinate dot-grid + faint abstract curves
// with sparse data points. Monochrome, very low opacity, slow one-time draw-in.
export default function GlobalBackground() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (i = 0) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 3, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.3 },
        opacity: { duration: 0.8, delay: 0.4 + i * 0.3 },
      },
    }),
  };

  const dots = [
    { x: 300, y: 470 },
    { x: 620, y: 350 },
    { x: 900, y: 250 },
    { x: 1160, y: 300 },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden">
      {/* soft layered gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_-8%,rgba(37,99,235,0.12),transparent_46%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_108%,rgba(79,70,229,0.10),transparent_44%)]" />

      {/* coordinate dot-grid, faded toward edges */}
      <div
        className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
        style={{
          backgroundImage: "radial-gradient(rgba(226,232,240,0.10) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* abstract quant curves */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        fill="none"
        stroke="#e2e8f0"
      >
        {/* long rising trend curve */}
        <motion.path
          d="M -40 640 C 320 560, 560 400, 820 360 S 1240 220, 1500 120"
          strokeWidth="1.25"
          variants={draw}
          initial="hidden"
          animate="show"
          custom={0}
        />
        {/* gentle bell / distribution curve */}
        <motion.path
          d="M 120 700 C 420 700, 500 320, 760 320 S 1100 700, 1400 700"
          strokeWidth="1.25"
          variants={draw}
          initial="hidden"
          animate="show"
          custom={1}
        />

        {/* sparse data points */}
        <g fill="#e2e8f0" stroke="none">
          {dots.map((d, i) => (
            <motion.circle
              key={i}
              cx={d.x}
              cy={d.y}
              r="4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3 + i * 0.2, ease: "easeOut" }}
            />
          ))}
        </g>
      </svg>

      {/* readability vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(3,7,18,0.45))]" />
    </div>
  );
}
