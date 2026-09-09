import { Reveal } from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  index?: string;
  kicker: string;
  /** Newline characters become masked line breaks. */
  title: string;
  body?: string;
  action?: ReactNode;
  className?: string;
  align?: "left" | "split";
};

export default function SectionHeader({
  index,
  kicker,
  title,
  body,
  action,
  className,
  align = "split",
}: Props) {
  return (
    <header className={cn("relative", className)}>
      <Reveal>
        <div className="flex items-baseline gap-4 pb-6">
          {index ? <span className="label text-accent">{index}</span> : null}
          <span className="label">{kicker}</span>
          <span className="hidden h-px flex-1 bg-hairline sm:block" />
        </div>
      </Reveal>

      <div
        className={cn(
          align === "split"
            ? "grid gap-8 lg:grid-cols-12 lg:items-end"
            : "flex flex-col gap-8"
        )}
      >
        <SplitText
          as="h2"
          text={title}
          className={cn(
            "font-display text-display-md text-balance",
            align === "split" && "lg:col-span-7"
          )}
        />
        {(body || action) && (
          <div className={cn("flex flex-col gap-6", align === "split" && "lg:col-span-5")}>
            {body ? (
              <Reveal delay={0.1}>
                <p className="max-w-md text-base leading-relaxed text-paper-muted">{body}</p>
              </Reveal>
            ) : null}
            {action ? <Reveal delay={0.16}>{action}</Reveal> : null}
          </div>
        )}
      </div>
    </header>
  );
}
