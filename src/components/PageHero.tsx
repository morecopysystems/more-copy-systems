import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SplitText from "@/components/motion/SplitText";
import { Reveal } from "@/components/motion/Reveal";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  kicker,
  title,
  body,
  crumbs = [],
  action,
}: {
  kicker: string;
  title: string;
  body?: string;
  crumbs?: Crumb[];
  action?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-44">
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full blur-3xl"
      />
      <div className="shell relative">
        {crumbs.length ? (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper-dim">
                {crumbs.map((c, i) => (
                  <li key={c.label} className="flex items-center gap-2">
                    {c.href ? (
                      <Link href={c.href} className="transition-colors hover:text-paper">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-paper-muted">{c.label}</span>
                    )}
                    {i < crumbs.length - 1 ? (
                      <ChevronRight className="h-3 w-3" aria-hidden />
                    ) : null}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        ) : null}

        <Reveal>
          <p className="label mb-6 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {kicker}
          </p>
        </Reveal>

        <SplitText
          as="h1"
          immediate
          delay={0.1}
          text={title}
          className="max-w-5xl font-display text-display-lg font-semibold"
        />

        {(body || action) && (
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {body ? (
              <Reveal delay={0.2}>
                <p className="max-w-2xl text-base leading-relaxed text-paper-muted sm:text-lg">
                  {body}
                </p>
              </Reveal>
            ) : (
              <span />
            )}
            {action ? <Reveal delay={0.26}>{action}</Reveal> : null}
          </div>
        )}
      </div>
    </section>
  );
}
