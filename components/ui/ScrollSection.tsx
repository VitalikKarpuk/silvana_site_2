"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  /** Tune intensity: how far it dips at the edges. */
  intensity?: "subtle" | "normal";
};

/**
 * Scroll-linked section transition. As the section travels through the
 * viewport its opacity / scale / y are mapped to scroll progress, so it
 * eases in from below, sits crisp in the middle, and recedes on the way out.
 * Renders static under prefers-reduced-motion.
 */
export default function ScrollSection({
  children,
  className,
  intensity = "normal",
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth the raw progress so the motion feels weighty, not jittery.
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const minOpacity = intensity === "subtle" ? 0.45 : 0.2;
  const minScale = intensity === "subtle" ? 0.97 : 0.93;
  const enterY = intensity === "subtle" ? 36 : 64;

  // Plateau in the middle (0.2–0.8) so content stays readable while in view.
  const opacity = useTransform(
    progress,
    [0, 0.2, 0.8, 1],
    [minOpacity, 1, 1, minOpacity]
  );
  const scale = useTransform(
    progress,
    [0, 0.2, 0.8, 1],
    [minScale, 1, 1, minScale]
  );
  const y = useTransform(progress, [0, 0.2, 0.8, 1], [enterY, 0, 0, -enterY / 2]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, scale, y, transformOrigin: "center top", willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
