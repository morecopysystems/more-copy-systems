import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,color,border-color,transform] duration-500 ease-editorial active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-paper hover:bg-accent-soft",
  outline:
    "border border-paper/25 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  ghost: "text-paper-muted hover:text-paper",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function actionClasses(variant: Variant = "solid", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ActionProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Adds the diagonal arrow that slides on hover. */
  arrow?: boolean;
} & Omit<ComponentProps<typeof Link>, "className">;

export function Action({
  children,
  variant = "solid",
  size = "md",
  className,
  arrow = false,
  ...props
}: ActionProps) {
  return (
    <Link className={actionClasses(variant, size, className)} {...props}>
      {children}
      {arrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

/** Same styling for real anchors — tel:, mailto:, wa.me and other external targets. */
export function ActionAnchor({
  children,
  variant = "solid",
  size = "md",
  className,
  arrow = false,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
} & ComponentProps<"a">) {
  return (
    <a className={actionClasses(variant, size, className)} {...props}>
      {children}
      {arrow ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      ) : null}
    </a>
  );
}
