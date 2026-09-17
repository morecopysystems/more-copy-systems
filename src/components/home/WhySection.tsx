import Image from "next/image";
import { Star, ShieldCheck, Wrench, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";
import SectionHeader from "@/components/SectionHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ActionAnchor } from "@/components/ui/action";

export default function WhySection() {
  return (
    <section id="why" className="relative scroll-mt-24 border-t border-hairline py-24 lg:py-36">
      <div className="shell">
        <SectionHeader
          index="05"
          kicker="Why More Copy Systems"
          title={"A showroom you can walk into,\nand a team that picks up."}
          body="Clear pricing, genuine parts, on-site technicians across Kochi, and financing options that make sense for your business."
        />

        <RevealGroup
          as="div"
          className="mt-16 grid gap-6 md:grid-cols-2"
          stagger={0.06}
        >
          {/* Card 1: Authorised Dealer & Genuine Spares */}
          <RevealItem as="div">
            <div className="flex h-full flex-col justify-between rounded-lg border border-hairline bg-surface p-8 transition-colors hover:border-paper/25">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-accent">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </span>
                <p className="label mt-6 text-accent">Authorised & genuine</p>
                <h3 className="mt-2 font-display text-2xl text-paper">
                  Canon authorised dealer
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                  Official dealership backed by direct manufacturer warranty and support. We stock genuine and compatible consumables, clearly labelled and matched to your exact model at the counter.
                </p>
              </div>
              <p className="mt-6 font-mono text-[11px] text-paper-dim">
                Canon · Kyocera · Konica Minolta · Xerox · Epson · Brother
              </p>
            </div>
          </RevealItem>

          {/* Card 2: In-House Service Team */}
          <RevealItem as="div">
            <div className="flex h-full flex-col justify-between rounded-lg border border-hairline bg-surface p-8 transition-colors hover:border-paper/25">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-accent">
                  <Wrench className="h-5 w-5" aria-hidden />
                </span>
                <p className="label mt-6 text-accent">Real technicians</p>
                <h3 className="mt-2 font-display text-2xl text-paper">
                  We service what we sell — and what we didn&apos;t
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                  Every machine we sell is backed by our in-house service team. Most of what we repair was bought elsewhere — bring any brand to our Kacheripady counter or request an on-site engineer visit across Kochi.
                </p>
              </div>
              <p className="mt-6 font-mono text-[11px] text-paper-dim">
                On-site servicing across Ernakulam &amp; surrounding districts
              </p>
            </div>
          </RevealItem>

          {/* Card 3: Google Rating */}
          <RevealItem as="div">
            <a
              href={SITE.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-lg border border-hairline bg-surface p-8 transition-colors hover:border-paper/25 hover:bg-ink-800"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="label">Verified on Google</p>
                  <ArrowUpRight className="h-4 w-4 text-paper-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <div className="mt-6 flex items-end gap-3">
                  <span className="font-display text-5xl leading-none sm:text-6xl">{SITE.rating.value}</span>
                  <div className="mb-2 flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                  Rated {SITE.rating.value} out of {SITE.rating.scale} on Google Business. Read authentic reviews from offices, commercial print shops, and institutions across Ernakulam.
                </p>
              </div>
              <p className="mt-6 text-xs text-accent transition-transform group-hover:translate-x-1">
                Read customer reviews on Google &rarr;
              </p>
            </a>
          </RevealItem>

          {/* Card 4: Bajaj Finserv EMI */}
          <RevealItem as="div">
            <div className="flex h-full flex-col justify-between rounded-lg border border-hairline bg-surface p-8 transition-colors hover:border-paper/25">
              <div>
                <div className="flex items-center justify-between">
                  <p className="label text-accent">Finance</p>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-paper-dim">
                    0% Interest
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-paper">
                  Easy EMI with Bajaj Finserv
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                  0% interest and no down payment options on office equipment and printers. Upgrade your workplace equipment today and distribute costs over manageable monthly instalments.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="shot-well relative h-10 w-24 overflow-hidden rounded border border-hairline bg-ink-900">
                    <Image
                      src="/bajaj.png"
                      alt="Bajaj Finserv logo"
                      fill
                      sizes="96px"
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-paper-dim">
                    Zero down payment options
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-hairline pt-4">
                <ActionAnchor
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="outline"
                  arrow
                >
                  Enquire about EMI
                </ActionAnchor>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
