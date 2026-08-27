import type { Variants } from "framer-motion";

/** Spring-loaded switch: slight overshoot on settle. */
export const MECHANICAL_EASE = [0.175, 0.885, 0.32, 1.275] as const;

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: MECHANICAL_EASE },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
