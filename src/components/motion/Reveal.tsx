"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Distance travelled on entry, in px. */
  y?: number;
  once?: boolean;
};

/**
 * Single scroll-entry primitive. Everything on the site enters the same way,
 * which is what makes the motion read as a system rather than as decoration.
 */
export function Reveal({ children, as = "div", className, delay = 0, y = 28, once = true }: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Wraps a list so children stagger in sequence. Pair with <RevealItem>. */
export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.07,
  delay = 0,
}: Omit<Props, "y"> & { stagger?: number }) {
  const reduced = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  y = 24,
}: Omit<Props, "delay" | "once">) {
  const reduced = useReducedMotion();
  const MotionTag = motion(as as ElementType);

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}
