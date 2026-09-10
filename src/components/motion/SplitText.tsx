"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Animate on mount instead of on scroll — use for above-the-fold headlines. */
  immediate?: boolean;
  /** Rendered inline at the end of the final line, inside the same mask. */
  trailing?: ReactNode;
};

/**
 * Masked line reveal. Each line sits in an overflow-hidden box and slides up,
 * so the type appears to be uncovered rather than faded in.
 * Accessibility: the full string stays in the DOM as one readable node.
 */
export default function SplitText({
  text,
  as = "span",
  className,
  delay = 0,
  immediate = false,
  trailing,
}: Props) {
  const reduced = useReducedMotion();
  const Tag = as;
  const lines = text.split("\n");

  if (reduced) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
            {i === lines.length - 1 ? trailing : null}
          </span>
        ))}
      </Tag>
    );
  }

  const animateProps = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, margin: "-15% 0px" } };

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block will-change-transform"
            initial="hidden"
            {...animateProps}
            variants={{
              hidden: { y: "110%" },
              show: {
                y: "0%",
                transition: {
                  duration: 1,
                  delay: delay + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {line}
            {i === lines.length - 1 ? trailing : null}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Word-by-word variant, for shorter labels where line masking is too heavy. */
export function SplitWords({ text, className, delay = 0 }: Omit<Props, "as" | "immediate">) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden pb-[0.05em]">
          <motion.span
            className="mr-[0.25em] inline-block will-change-transform"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: delay + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
