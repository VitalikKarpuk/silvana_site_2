"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The agentic tree: roots = ecosystem nodes (Canton, wallets, data feeds),
 * trunk = Silvana, branches terminating in pulsing agent nodes.
 * Slow draw-on (1.6s ease-out) on load, then a 4s pulse on agent nodes.
 * Renders the final frame under prefers-reduced-motion.
 */
export default function AgenticTree() {
  const reduce = useReducedMotion();

  const draw = (delay: number) =>
    reduce
      ? { pathLength: 1, opacity: 1 }
      : {
          pathLength: [0, 1],
          opacity: [0, 1],
          transition: { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] },
        };

  const branches = [
    "M250 250 C 320 220, 360 160, 410 120",
    "M250 250 C 330 250, 380 250, 430 235",
    "M250 250 C 320 290, 360 340, 405 380",
    "M250 250 C 300 200, 320 150, 330 90",
    "M250 250 C 300 320, 320 380, 335 430",
  ];
  const agentNodes = [
    { x: 410, y: 120 },
    { x: 430, y: 235 },
    { x: 405, y: 380 },
    { x: 330, y: 90 },
    { x: 335, y: 430 },
  ];
  const roots = [
    { d: "M250 250 C 180 290, 130 320, 80 360", label: "Canton", lx: 40, ly: 378 },
    { d: "M250 250 C 190 270, 150 285, 95 300", label: "Wallets", lx: 28, ly: 305 },
    { d: "M250 250 C 200 310, 170 360, 130 410", label: "Data feeds", lx: 70, ly: 432 },
  ];

  return (
    <svg
      viewBox="0 0 500 500"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      {/* Roots (teal) */}
      {roots.map((r, i) => (
        <g key={`root-${i}`}>
          <motion.path
            d={r.d}
            stroke="#14b8a6"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={draw(0.1 + i * 0.12)}
          />
          <motion.circle
            cx={r.d.match(/[\d.]+ [\d.]+$/)?.[0].split(" ")[0]}
            cy={r.d.match(/[\d.]+ [\d.]+$/)?.[0].split(" ")[1]}
            r="3"
            fill="#14b8a6"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduce ? 1 : [0, 1] }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
          />
          <motion.text
            x={r.lx}
            y={r.ly}
            className="mono"
            fontSize="11"
            fill="#9ca3af"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduce ? 1 : [0, 1] }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
          >
            {r.label}
          </motion.text>
        </g>
      ))}

      {/* Trunk */}
      <motion.path
        d="M130 410 C 200 360, 250 320, 250 250"
        stroke="#86868f"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={draw(0.4)}
      />

      {/* Branches (magenta) */}
      {branches.map((b, i) => (
        <motion.path
          key={`branch-${i}`}
          d={b}
          stroke="#d6448f"
          strokeWidth="1.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={draw(0.9 + i * 0.1)}
        />
      ))}

      {/* Trunk label */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 1 : [0, 1] }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <circle cx="250" cy="250" r="6" fill="#d6448f" />
        <text x="262" y="246" className="display" fontSize="14" fill="#f5f5f7">
          Silvana
        </text>
      </motion.g>

      {/* Pulsing agent nodes */}
      {agentNodes.map((n, i) => (
        <g key={`agent-${i}`}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="9"
            fill="#d6448f"
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.15 }
                : {
                    opacity: [0, 0.18, 0.06, 0.18],
                    scale: [1, 1.6, 1],
                  }
            }
            transition={
              reduce
                ? { delay: 1.5 }
                : {
                    opacity: { delay: 1.5 + i * 0.1, duration: 0.5 },
                    scale: {
                      delay: 1.8 + i * 0.3,
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="#d6448f"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduce ? 1 : [0, 1] }}
            transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
          />
        </g>
      ))}
    </svg>
  );
}
