import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JOURNEYS } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * The seven reasons anyone lands here, as one scannable list.
 * Everything else on the site is downstream of this section.
 */
export default function Journeys() {
  return (
    <section id="journeys" className="relative scroll-mt-24 py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="01"
          kicker="What do you need?"
          title={"Seven reasons people\nwalk through our door."}
          body="Pick the one that sounds like you. Every path ends with a real person in Kacheripady, not a form that disappears."
        />

        <RevealGroup as="ul" className="mt-16 border-t border-hairline">
          {JOURNEYS.map((j) => (
            <RevealItem as="li" key={j.id}>
              <Link
                href={j.href}
                className="group relative grid grid-cols-1 items-baseline gap-x-8 gap-y-3 border-b border-hairline py-7 transition-colors duration-500 ease-editorial hover:border-paper/25 md:grid-cols-12 md:py-8"
              >
                {/* Accent wash that sweeps in from the left on hover */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 -left-4 -right-4 -z-10 origin-left scale-x-0 rounded-md bg-paper/[0.04] transition-transform duration-700 ease-editorial group-hover:scale-x-100"
                />
                <span className="font-mono text-xs text-paper-dim transition-colors duration-500 group-hover:text-accent md:col-span-1">
                  {j.index}
                </span>
                <h3 className="font-display text-2xl leading-tight text-paper transition-transform duration-700 ease-editorial group-hover:translate-x-1 md:col-span-5 md:text-3xl">
                  {j.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper-muted md:col-span-4">{j.body}</p>
                <span className="flex items-center gap-1.5 text-sm text-paper-dim transition-colors duration-500 group-hover:text-accent md:col-span-2 md:justify-end">
                  {j.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
