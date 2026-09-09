import Image from "next/image";
import { Star } from "lucide-react";
import { TRUST_POINTS } from "@/data/services";
import { SITE } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";
import { ActionAnchor } from "@/components/ui/action";

export default function WhySection() {
  return (
    <section id="why" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="05"
          kicker="Why More Copy Systems"
          title={"A showroom you can\nwalk into, and a team\nthat picks up."}
          body="No claims we cannot stand behind — only what we actually stock, service and support."
        />

        <RevealGroup as="ul" className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point, i) => (
            <RevealItem as="li" key={point.title}>
              <div className="group h-full bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800">
                <span className="font-mono text-xs text-paper-dim transition-colors duration-500 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-lg font-medium leading-snug text-paper">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">{point.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Google rating — linked so it can be verified, not asserted */}
          <Reveal className="lg:col-span-4">
            <a
              href={SITE.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-8 rounded-lg border border-hairline bg-surface p-8 transition-colors duration-500 hover:border-paper/25"
            >
              <div>
                <p className="label">Rated on Google</p>
                <div className="mt-6 flex items-end gap-3">
                  <span className="font-display text-6xl leading-none">{SITE.rating.value}</span>
                  <div className="mb-2 flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="sr-only">
                  Rated {SITE.rating.value} out of {SITE.rating.scale} on Google.
                </p>
              </div>
              <p className="text-sm text-paper-muted">
                Read the reviews on our Google Business listing
                <span className="ml-1 text-accent transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </a>
          </Reveal>

          {/* Bajaj Finserv EMI */}
          <Reveal delay={0.08} className="lg:col-span-8">
            <div className="flex h-full flex-col gap-8 rounded-lg border border-hairline bg-surface p-8 lg:flex-row lg:items-center">
              <div className="flex-1">
                <p className="label text-accent">Finance</p>
                <h3 className="mt-4 font-display text-display-sm">
                  Easy EMI with Bajaj Finserv
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-muted">
                  0% interest and no down payment across our range of office equipment and
                  supplies. Take the machine today and pay for it over time.
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-paper-dim">
                  *Terms &amp; conditions apply · Processing fee extra
                </p>
                <ActionAnchor
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="outline"
                  className="mt-6"
                  arrow
                >
                  Ask about EMI
                </ActionAnchor>
              </div>

              <div className="grid shrink-0 grid-cols-2 gap-3 lg:w-72">
                {[
                  { src: "/bajaj.png", label: "0% Interest" },
                  { src: "/bajaj1.jpeg", label: "No down payment" },
                ].map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden rounded-md border border-hairline bg-ink-900"
                  >
                    <div className="shot-well relative aspect-[3/2]">
                      <Image
                        src={item.src}
                        alt="Bajaj Finserv EMI available at More Copy Systems"
                        fill
                        sizes="150px"
                        loading="lazy"
                        className="object-contain p-3"
                      />
                    </div>
                    <p className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-paper-dim">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
